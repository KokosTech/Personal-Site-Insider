document.getElementById('cov').addEventListener('click' , function(){
    window.open('../COVID-19' , '_self')
});

document.getElementById('todo').addEventListener('click' , function(){
    window.open('todo' , '_self')
});

document.getElementById('sp').addEventListener('click' , function(){
    window.open('stopwatch' , '_self')
});

document.getElementById('yt-bg').addEventListener('click' , function(){
    window.open('https://www.youtube.com/channel/UCpjKhnncTLm-_68Z_qeCmaA' , '_self')
});

document.getElementById('yt-eg').addEventListener('click' , function(){
    window.open('https://www.youtube.com/channel/UCPsylmYX1-WpAwztLoQx9Nw' , '_self')
});

if(mkbhd){
    var pr = document.getElementsByClassName('pr');
    pr[pr.length - 1].style.marginBottom = '70px'
    pr[0].style.marginTop = '0'
}