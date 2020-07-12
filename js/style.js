let tog = document.getElementById('toggle')
let logo = document.getElementById('lg')

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
document.getElementById('dw_btn').addEventListener('click' , function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        tog.setAttribute('src' , 'img/moon.png')
        logo.setAttribute('src' , 'img/logo-site-trans-b.png')
    } else {
        setTheme('theme-dark');
        tog.setAttribute('src' , 'img/sun.png')
        logo.setAttribute('src' , 'img/logo-site-trans-w.png')
    }
});
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        tog.setAttribute('src' , 'img/sun.png')
        logo.setAttribute('src' , 'img/logo-site-trans-w.png')
    } else {
        setTheme('theme-light');
        tog.setAttribute('src' , 'img/moon.png')
        logo.setAttribute('src' , 'img/logo-site-trans-b.png')
    }
})();   