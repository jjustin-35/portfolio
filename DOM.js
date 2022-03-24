$(document).ready(function () {
    let $mobileNav = $('#mobileNav')
    let $navUl = $('#navUl')
    let $window = $(window)  
    // 漢堡選單
    $mobileNav.on('click', function () {
        $navUl.slideToggle()
    })
    // 畫面縮放影響navbar
    function resizeScreen() {
        if ($window.width() < 600) {
            $navUl.css('display', 'none')
            scrollChange(true)
        } else {
            $navUl.css('display', 'flex')
        }
    }

    function scrollChange(boolean) {
        if (boolean) {
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
                    } // 上升 this: scroll
                    else if (currentTop < this.previousTop) {
                        $mobileNav.slideDown()
                    } //下降
                    else if (currentTop > this.previousTop) {
                        $mobileNav.slideUp()
                        $navUl.slideUp()
                    }
                    this.previousTop = currentTop
                    })
                ,
                250)
        }
    }
    // 執行小畫面時的nav變化
    if ($window.width() < 600) {
        scrollChange(true)
    }
    // 執行畫面變化
    $window.resize(resizeScreen)
})
