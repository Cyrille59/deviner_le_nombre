var nbaleatoire;
var essai=10;
var nb;

nbaleatoire = (Math.random() * 100) + 1;
nbaleatoire = Math.floor(nbaleatoire);
console.log(nbaleatoire);




document.getElementById("bt").addEventListener("click", function () {

    nb=document.getElementById("nbr").value;
    nbr.innerHTML=nb;



    if (nbaleatoire==nb) {
        document.getElementById("result").innerHTML = "Trouvé";
        alert("Bravo");
        document.getElementById("bt").style.visibility="hidden";
        essai--;
        document.getElementById("compteur").innerHTML="Compteur : "+ essai;


    }if (nbaleatoire>nb) {
        document.getElementById("result").innerHTML = "Trop petit";
        essai--;
        document.getElementById("compteur").innerHTML="Compteur : "+ essai;

    }if (nbaleatoire<nb) {
        document.getElementById("result").innerHTML = "Trop grand";
        essai--;
        document.getElementById("compteur").innerHTML = "Compteur : " + essai;

    }if (essai==0) {
         document.getElementById("bt").style.visibility="hidden";
         alert("Vous avez perdu !");


     }


});

document.getElementById("reset").addEventListener("click", function (){

    location.reload(), false;

});

