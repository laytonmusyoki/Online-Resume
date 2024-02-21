var change=document.getElementById('change');


    mytimeout=setInterval(function(){
        if(change.src="kali2.jpg"){
            change.src="img2.jpg";
        }
        else{
            change.src="kal2.jpg";
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



   
 
