let nav=document.getElementById("navigation");
let liens=document.getElementsByClassName("liennav");
let icon=document.getElementById("icon");
window.onresize=colorHeader;
window.onload=colorHeader;


function colorHeader(){

    let largeur=window.innerWidth;
    console.log(largeur);
    if(largeur>768){
        window.onscroll=function(){
            if(document.documentElement.scrollTop>900){
                nav.style.background="#373737";
                liens[0].style.color="#F0Ead6";
                liens[1].style.color="#F0Ead6";
                liens[2].style.color="#F0Ead6";
                liens[3].style.color="#F0Ead6";
            }
            else{
                nav.style.background="#F0Ead6";                
                liens[0].style.color="#373737";
                liens[1].style.color="#373737";
                liens[2].style.color="#373737";
                liens[3].style.color="#373737";
            }
        } 

        


} else{
    nav.style.background="#F0Ead6";
    nav.style.color="#373737";
}   
}
icon.addEventListener("click",function(e){
    nav.classList.add("responsive");
    console.log(nav);
    e.preventDefault();
    console.log("ok");
})





