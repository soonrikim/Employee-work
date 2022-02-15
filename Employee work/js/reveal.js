const scrollReveal = function(){
    let scrollTop = (window.pageYOffset || document.documentElement.scrollTop || window.scrollY) + window.innerHeight/2;
    const reveal = document.querySelectorAll(".reveal");
    
    reveal.forEach(el => {
        const revealDelay = el.dataset.delay;

        // if( scrollTop > el.parentElement.offsetTop ){
        //     el.classList.add("show");
        // }

        if( scrollTop > el.parentElement.offsetTop ){
            if( revealDelay == undefined ){
                el.classList.add("show");
            } else {
                setTimeout(() => {
                    el.classList.add("show");
                }, revealDelay);
            }
        }
    })


    document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);
}

window.addEventListener("scroll", scrollReveal);