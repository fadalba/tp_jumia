/* Pour le premier slide */
var i = 0;//start point
var images = [];//tableau d'image
var time=1000;

//List d'image des produits
images[0] ='image/img1-jumia.jpg';
images[1] ='image/img2-jumia.jpeg';
images[2] ='image/img3-jumia.jpg';
images[3] ='image/img4.jpg';

//fonction pour changer les images
function changeimg(){
    document.slide.src = images[i];
    if(i<images.length-1){
i++;
    } else{
        i=0;
    }
    setTimeout("changeimg()",time);
}
window.onload = changeimg;

var monImage=document.getElementsByClassName('imageSlide');
for(var index=0; index<monImage.length; index ++)
{
   monImage[index].innerHTML=monImage;
    console.log(monImage);
}

/**
 on gère les scroll avec flèche sur les acticles du footer
 */
 
var btn1 =  document.getElementById("btn-area1") // on cré la flèche gauche et on lui donne l'id du boutton 1 cré sur html
var btn2 =  document.getElementById("btn-area2")// on cré la flèche gauche et on lui donne l'id du boutton 2 cré sur html
var defil2 = document.getElementById("defil2") // on cré un objet defil2 et on l'attrbut l'id de defil 2 sur html pour recuperer la valeur

// on cré un boutton avec l'évènement  click et une fonction anonyme pour envoyer l'information click sur le boutton 1 html
btn1.addEventListener("click",function(){
    defil2.scrollBy({top:0, left: -500, behavior: "smooth"}) // on lui donc les information sur sa position et la rapidité du déplacement
})                                                           // top 0 pour eviter la verticale

btn2.addEventListener("click",function(){
    defil2.scrollBy({top:0, left: 500, behavior: "smooth"})
})