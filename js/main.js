// active navbar

//process 1
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){ //20px
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

//process 2
// window.addEventListener("scroll", function() {
//     let navbar = document.querySelector(".navigation-wrap");
//     if (window.scrollY > 50) { // If user scrolls more than 50px
//         navbar.classList.add("scroll-on");
//     } else {
//         navbar.classList.remove("scroll-on");
//     }
// });

//-------------nav hide

//process 1
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener('click',function(){
//         navCollapse.classList.remove("show");
//     })
// })

//process 2
document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            if (window.innerWidth < 992) { // Check if screen is mobile size
                let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
});

// counter design
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration/range));
        let timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step) 
    }
    counter("count1",0,1287,3000);
    counter("count2",0,5287,2500);
    counter("count3",0,1447,3000);
    counter("count4",0,2087,3000);
})


//Dynamic Navigation Highlighting on Scroll

document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");

    function changeActiveSection() {
        let scrollPosition = window.scrollY;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 100;
            let sectionHeight = section.clientHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveSection);
});