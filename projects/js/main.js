document.getElementById('cov').addEventListener('click' , function(){
    window.open('../COVID-19' , '_self')
});

document.getElementById('todo').addEventListener('click' , function(){
    window.open('todo' , '_self')
});

document.getElementById('sp').addEventListener('click' , function(){
    window.open('stopwatch' , '_self')
});

if(mkbhd){
    var pr = document.getElementsByClassName('pr');
    pr[pr.length - 1].style.marginBottom = '60px'
    pr[0].style.marginTop = '0'
}