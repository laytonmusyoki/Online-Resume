var change=document.getElementById('change');


    mytimeout=setInterval(function(){
        if(change.src="eng.jpg"){
            change.src="img2.jpg";
        }
        else{
            change.src="eng.jpg";
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



   
 
