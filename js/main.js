// Home Nav
const headerNavToggle = document.querySelector('.header-nav-toggle');
const headerNav = document.querySelector('.main_nav');
const headerLogo = document.querySelector('.logo img');
let navOpen = false;
headerNavToggle.addEventListener('click',headerNavFunc);
function headerNavFunc(){
    headerNav.classList.toggle('active');
        if(!navOpen){
            navOpen = true;
            setTimeout(() => {
                headerLogo.src = './img/logo-white.png';
            }, 500);  
        }else{
            navOpen = false;
            setTimeout(() => {
                headerLogo.src = './img/logo.png';
            }, 1400);
        }
}
// header
try {
    // Home Page Header
    document.addEventListener("scroll", () => {
        if (scrollY > 100) {
            document.querySelector("header").classList.add("header_shadow");

        }
        else {
            document.querySelector("header").classList.remove("header_shadow");
        }
    })

} catch (err) {
    console.log(err);
}
// deactivate menu effect
try {
    var headerListLinks = document.querySelectorAll('.header_list_2_link');
    headerListLinks.forEach(item => { item.addEventListener('click',headerNavFunc) });
} catch (err) {
    console.log(err);
}