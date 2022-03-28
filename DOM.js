$(document).ready(function () {
    let $mobileNav = $('#mobileNav')
    let $navUl = $('#navUl')
    let $window = $(window)  
    // 漢堡選單
    $mobileNav.on('click', function () {
        $navUl.slideToggle()
    })
    if ($window.width() < 700) {
        scrollChange(true)
    }
    // 畫面縮放影響navbar
    function resizeScreen() {
        if ($window.width() < 700) {
            $navUl.css('display', 'none')
            scrollChange(true)
        } else {
            $navUl.css('display', 'flex')
            $window.off('scroll')
        }
    }

    function scrollChange(boolean) {
        let $nav = $('nav')
        if (boolean == true) {
            _.debounce(
                $window.scroll(
                // 傳入previewTop的參數
                {
                previousTop: 0
                },
                function () {
                    let currentTop = $window.scrollTop()
                    if (currentTop == 0) {
                        $mobileNav.slideDown()
                        $nav.css('position', 'sticky')
                    } // 上升 this: scroll
                    else if (currentTop < this.previousTop) {
                        $mobileNav.slideDown()
                        $nav.css('position', 'fixed')
                    } //下降
                    else if (currentTop > this.previousTop) {
                        $mobileNav.slideUp()
                        $navUl.slideUp()
                        $nav.css('position', 'fixed')
                    }
                    this.previousTop = currentTop
                    })
                ,
                250)
        }
    }
    // 執行畫面變化
    $window.resize(resizeScreen)
})
