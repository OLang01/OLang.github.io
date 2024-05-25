// header 스크롤 시 .logo_txt.active 추가
// contact('.bg_balck')까지 스크롤 시 nav, menu에 .white 추가
document.addEventListener('DOMContentLoaded', function () {
    function handleScroll() {
        const logo = document.querySelector('nav');
        const menuItems = document.querySelectorAll('nav ul li a');
        const bgBlackElement = document.querySelector('.bg_black');
        const logoTextSpans = document.querySelectorAll('nav .logo .logo_txt span');
        const logoTextP = document.querySelector('nav .logo .logo_txt p');
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;

        // Check if the .bg_black element is in the viewport
        if (bgBlackElement) {
            const elementTop = bgBlackElement.getBoundingClientRect().top + scrollPosition;
            const elementBottom = elementTop + bgBlackElement.offsetHeight;

            if (scrollPosition + viewportHeight > elementTop && scrollPosition < elementBottom) {
                if (logo) {
                    logo.classList.add('white');
                }
                menuItems.forEach(function (item) {
                    item.classList.add('white');
                });
            } else {
                if (logo) {
                    logo.classList.remove('white');
                }
                menuItems.forEach(function (item) {
                    item.classList.remove('white');
                });
            }
        }

        logoTextSpans.forEach(function (span, index) {
            if (scrollPosition > 80) {
                span.style.animation = `slide 0.7s both ${index * 0.1}s`;
            } else {
                span.style.animation = `disappear 0.7s both ${index * 0.1}s`;
            }
        });

        if (logoTextP) {
            if (scrollPosition > 80) {
                logoTextP.style.animation = "move 0.7s both";
                logoTextP.style.animationDelay = "1.3s";
            } else {
                logoTextP.style.animation = "return 0.7s both";
            }
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});

//스무스한 스크롤 lenis 라이브러리 사용
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);