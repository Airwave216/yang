let header = document.querySelector('header');
let Menu = document.querySelector('.icon-Menu');

Menu.onclick = () => {
    header.classList.toggle('active');
    Menu.classList.toggle('icon-chahao');
}
window.onscroll = () => {
    header.classList.remove('active');
    Menu.classList.remove('icon-chahao');
}
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}
document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});
let left = document.querySelector('.button-left')
let right = document.querySelector('.button-right')
let m = document.querySelectorAll('.m')
let images = document.querySelector('.images')

let index = 0
let time
function position() {
    images.style.left = (index * -100) + '%'
}
function add() {
    if (index >= m.length - 1) {
        index = 0
    } else {
        index++
    }
}
function desc() {
    if (index < 1) {
        index = m.length - 1
    } else {
        index--
    }
}
function timer() {
    time = setInterval(() => {
        index++
        desc()
        add()
        position()
    }, 3000)
}
left.addEventListener('click', () => {
    desc()
    position()
    clearInterval(time)
    timer()
})
right.addEventListener('click', () => {
    add()
    position()
    clearInterval(time)
    timer()
})
for (let i = 0; i < m.length; i++) {
    m[i].addEventListener('click', () => {
        index = i
        position()
        clearInterval(time)
        timer()
    })
}
timer()

const bg = document.querySelector(".bg")
document.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    if (scrollY !== 0) {
        bg.style.backgroundPosition = `calc(50%+${scrollY}px) calc(50%+${scrollY}px)`
    } else {
        bg.style.backgroundPosition = ''
    }
})