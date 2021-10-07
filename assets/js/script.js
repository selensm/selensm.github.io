let navBar = document.querySelector("#nav");

window.onscroll = function () {
    if (window.pageYOffset >= 50) {
        article.style.position = "relative";
        article.style.top = "0vw";
        article.style.opacity = "0"
    } 
    
    if (window.pageYOffset <= 50) {
        article.style.top = "2vw";
        article.style.opacity = "1"
    }
}


// Mobile navigation ----------------------------------------------------------------------------
let Close = document.querySelector('#close')
let Nav = document.querySelector('#mobileNav')
let Menu = document.querySelector('#menu')

Menu.addEventListener('click', function () {
    Nav.classList.remove('hide');
});

Close.addEventListener('click', function () {
    Nav.classList.add('hide');
});


// GSAP ---------------------------------------------------------------------------------------------

gsap.to(".illustration", {
    scrollTrigger: {
        trigger: '.illustration',
        toggleActions: 'restart pause reverse play'
    },
    y: 15,
    x: 3
})

gsap.to("#path1", {
    scrollTrigger: {
        trigger: '#path1',
        toggleActions: 'restart pause reverse resume'
    },
    y: 3,
    x: 6
})

gsap.to("#path2", {
    scrollTrigger: {
        trigger: '#path2',
        toggleActions: 'restart pause reverse resume'
    },
    y: 3,
    x: 3
})

gsap.to("#path3", {
    scrollTrigger: {
        trigger: '#path3',
        toggleActions: 'restart pause reverse resume'
    },
    y: -50,
    x: 3
})

gsap.to("#path4", {
    scrollTrigger: {
        trigger: '#path4',
        toggleActions: 'restart pause reverse resume'
    },
    y: 60,
    x: 33
})

gsap.to("#path5", {
    scrollTrigger: {
        trigger: '#path5',
        toggleActions: 'restart pause reverse resume'
    },
    y: -52,
    x: 5
})

gsap.to("#path6", {
    scrollTrigger: {
        trigger: '#path6',
        toggleActions: 'restart pause reverse resume'
    },
    y: -70,
    x: 3
})

gsap.to("#path7", {
    scrollTrigger: {
        trigger: '#path7',
        toggleActions: 'restart pause reverse resume'
    },
    y: -55,
    x: -5
})

gsap.to("#path8", {
    scrollTrigger: {
        trigger: '#path8',
        toggleActions: 'restart pause reverse resume'
    },
    y: -50,
    x: 6
})

gsap.from(".card1", {
    scrollTrigger: {
        trigger: '.card1'
    },
    x: 200
})

gsap.from(".card2", {
    scrollTrigger: {
        trigger: '.card2'
    },
    x: 200
})

gsap.from(".card3", {
    scrollTrigger: {
        trigger: '.card3'
    },
    x: 200
})

gsap.from(".card4", {
    scrollTrigger: {
        trigger: '.card4'
    },
    x: 200
})

gsap.from(".description", {
    scrollTrigger: {
        trigger: '.description'
    },
    x: 50
})

gsap.from(".product-core", {
    scrollTrigger: {
        trigger: '.product-core'
    },
    x: 50
})

gsap.from(".process", {
    scrollTrigger: {
        trigger: '.process'
    },
    x: 50
})