var change=document.getElementById('change');


    mytimeout=setInterval(function(){
        if(change.src="kali.jpg"){
            change.src="eng.jpg";
        }
        else{
            change.src="kali.jpg";
        }
    },5000);
    

setInterval(function(){
    let date=new Date();
    var clock=document.getElementById('clock');
    clock.innerHTML=
    date.getHours()+":"+
    date.getMinutes()+":"+
    date.getSeconds()
},1000);



   
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.element');

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateElements() {
        elements.forEach(function(element) {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', animateElements);

    animateElements(); // Initial check
});

 
