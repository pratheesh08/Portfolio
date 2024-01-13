

const menu = document.querySelector('.hamburg')
const show = document.querySelector('.nav ul')

menu.addEventListener('click',()=>{
    show.classList.toggle('shown');
       console.log('ok')
})

const hide = document.querySelector('.para');
const unhide = document.querySelector('#readmore');
const dot = document.querySelector('.dot');
const arrow = document.querySelector('#readmore i')

unhide.addEventListener('click',()=>{
    hide.classList.toggle('showpara');
    dot.classList.toggle('vanish');
    arrow.classList.toggle('down');

})

const download = document.querySelector(".button")
const btn = document.querySelector(".btn")
const file = "pdf/resume.pdf"
download.addEventListener('click', ()=>{
    console.log('clicked');
    btn.classList.add("btn-click")
    download.innerHTML='<i class="fa-solid fa-spinner"></i>';

    setTimeout(function(){
        btn.classList.add("active")
    download.innerHTML='<i class="fa-solid fa-check"></i>DONE '
    location.href=file;
    btn.classList.remove('btn-click')
    },2000)
    
})


