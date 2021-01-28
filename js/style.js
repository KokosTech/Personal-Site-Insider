var themed;
var modal = document.getElementById("myModal");
let logos = document.getElementsByClassName('logos')

var span = document.getElementsByClassName("close")[0];

document.getElementById('lg').addEventListener('click' , function(){
    window.open('https://kaloyan.tech/' , '_self')
});

// function to set a given theme/color-scheme


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    
}
// function to toggle between light and dark theme


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

document.getElementById('dw_btn').addEventListener('click' , function () {
    modal.animate([
        { // from
          opacity: 0
        },
        { // to
          opacity: 1
        }
      ], 500);
    modal.style.display = "block";

});


span.onclick = async function() {
    modal.animate([
        { // from
          opacity: 1
        },
        { // to
          opacity: 0
        }
      ], 500);
      await sleep(499);
    modal.style.display = "none";
}
window.onclick = async  function(event) {
    if (event.target == modal) {
        modal.animate([
            { // from
              opacity: 1
            },
            { // to
              opacity: 0
            }
          ], 500);
          await sleep(499);
        modal.style.display = "none";
    }
}

document.getElementById('theme_switch').addEventListener('click' , function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        for(var i = 0; i < logos.length; ++i){
            logos[i].style.filter = 'invert(100%) drop-shadow(5px 5px 5px var(--color-img))'
        }
        themed = false;
    } else {
        for(var i = 0; i < logos.length; ++i){
            logos[i].style.filter = 'invert(0%) drop-shadow(5px 5px 5px var(--color-img))'
        }
        setTheme('theme-dark');
        themed = true;
    }

});

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        themed = true;
    } else {
        setTheme('theme-light');
        for(var i = 0; i < logos.length; ++i){
            logos[i].style.filter = 'invert(100%) drop-shadow(5px 5px 5px var(--color-img))'
        }
        themed = false;
    }
})();   