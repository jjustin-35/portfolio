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

            // 向下滑動時navbar隱藏，向上時顯示
            // 函式是一種物件，可以儲存其他物件
            // $window.scroll(
            //     {
            //     previousTop: 0
            // },
            //     function () {
            //         let currentTop = $window.scrollTop()
            //         // 上升
            //         // this: scroll
            //         if ($window.scrollTop() == 0) {
            //             $mobileNav.slideDown()
            //         } else if (currentTop < this.previousTop) {
            //             $mobileNav.slideUp()
            //         } //下降
            //         else {
            //             $mobileNav.slideDown()
            //         }
            //         this.previousTop = currentTop
            //     }
            // )

        } else {
            $navUl.css('display', 'flex')
        }
    }

    $window.resize(resizeScreen)
})
