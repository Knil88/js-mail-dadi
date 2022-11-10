// Gioco  dadi 



const myButton = document.addEventListener("click",
function (event){
    //Creiamo variabili

    let userdice = Math.floor(Math.random()* 5) + 1;

    let pcdice = Math.floor(Math.random()* 5) + 1;

    
    event.preventDefault()
    if(userdice > pcdice){
        console.log("Complimenti hai vinto")
        document.getElementById("title").innerHTML = `Complimenti hai vinto`;
        document.getElementById("userdice").innerHTML = `${userdice}`;
        document.getElementById("pcdice").innerHTML = `${pcdice}`;
        

   }
   if(userdice < pcdice){
       console.log("Hai perso")
       document.getElementById("title").innerHTML = `Spiacente hai perso`;
       document.getElementById("userdice").innerHTML = `${userdice}`;
       document.getElementById("pcdice").innerHTML = `${pcdice}`;
       
       

   }
   else if(userdice === pcdice){
   
       console.log("pareggio")
       document.getElementById("title").innerHTML = `Pareggio`;
       document.getElementById("userdice").innerHTML = `${userdice}`;
       document.getElementById("pcdice").innerHTML = `${pcdice}`;
       

   
   }

   const myFlex = document.querySelector("#flex") ;
   myFlex.style.display="flex";
}
)





