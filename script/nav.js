let flag = true;
const nav = document.querySelectorAll(".nav__li");
document.querySelector("#nav__hamburger").addEventListener('click', function () {
    this.classList.toggle("click");
    if (flag == true) {
        flag = !flag;
        document.querySelector("#nav__menu").classList.toggle("nav-show");
        setTimeout(function () {
            for (let i = 0; i < nav.length; i++) {
                nav[i].classList.toggle("nav-li-show");
            }
        }, 500);
    } else {
        flag = !flag;
        for (let i = 0; i < nav.length; i++) {
            nav[i].classList.toggle("nav-li-show");
        };
        setTimeout(function () {
            document.querySelector("#nav__menu").classList.toggle("nav-show");
        }, 500);
    }
});
let ScrollPos = 0;

if (window.matchMedia("(max-width: 996px)").matches) {
    window.addEventListener('scroll', function () {
        const nav =  document.querySelector(".nav");
        let CurrentScroll = window.scrollY;
        if (!document.querySelector("#nav__hamburger").classList.contains('click')) {
            if (CurrentScroll >= nav.offsetHeight) {
                if (CurrentScroll < ScrollPos) {
                    nav.classList.add("nav-scrollUp");
                    nav.classList.remove("nav-scrollDown");
                } else {
                    nav.classList.add("nav-scrollDown");
                    nav.classList.remove("nav-scrollUp");
                }
                ScrollPos = CurrentScroll;
            }
        }
    });

}

function display() {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 10000*360000;
    now.setTime(expireTime);
    document.cookie = 'cookie-agreement=true;expires='+now.toGMTString()+';path=/';
  }

if (!document.cookie.split(';').filter((item) => item.includes('cookie-agreement=true')).length) {
const cookies__close = document.querySelector("#cookies__close");
const cookies = document.querySelector("#cookies");
cookies.style.display = "flex";
cookies__close.addEventListener("click", ()=>{
display();
cookies.parentNode.removeChild(cookies);
});
}


