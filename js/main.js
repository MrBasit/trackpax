// Home Nav
try {
    const headerNavToggle = document.querySelector('.header-nav-toggle');
    const headerNav = document.querySelector('.main_nav');
    const headerLogo = document.querySelector('.logo img');
    let navOpen = false;
    headerNavToggle.addEventListener('click', headerNavFunc);
    function headerNavFunc() {
        headerNav.classList.toggle('active');
        if (!navOpen) {
            navOpen = true;
            setTimeout(() => {
                headerLogo.src = './img/logo-white.png';
            }, 500);
        } else {
            navOpen = false;
            setTimeout(() => {
                headerLogo.src = './img/logo.png';
            }, 1400);
        }
    }

} catch (err) {
    console.log(err);
}

// header scroll Func
try {
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
// deactivate menu effect Func
try {
    var headerListLinks = document.querySelectorAll('.header_list_2_link');
    headerListLinks.forEach(item => { item.addEventListener('click', headerNavFunc) });
} catch (err) {
    console.log(err);
}

// form Func
try {
    const inputs = document.querySelectorAll('.input');
    function focusFunc() {
        let parent = this.parentNode.parentNode;
        parent.classList.add('focus');
    }
    function blurFunc() {
        let parent = this.parentNode.parentNode;
        if (this.value == "") {
            parent.classList.remove('focus');
        }
    }
    inputs.forEach(input => {
        input.addEventListener('focus', focusFunc);
        input.addEventListener('blur', blurFunc);
    });
} catch (err) {
    console.log(err);
}
