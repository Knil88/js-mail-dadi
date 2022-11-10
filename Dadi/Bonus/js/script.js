// Gioco  dadi 



const myButton = document.addEventListener("click",
function (event){
    //Creiamo variabili

    let userdice = Math.floor(Math.random()* 5) + 1;
    const userdiceImage = 'assets/dice'+ userdice + '.png';
    document.querySelectorAll('img')[0].setAttribute('src',userdiceImage);

    let pcdice = Math.floor(Math.random()* 5) + 1;
    const pcdiceImage = 'assets/dice'+ pcdice + '.png';
    document.querySelectorAll('img');
    document.querySelectorAll('img')[1].setAttribute('src',pcdiceImage);

    
    event.preventDefault()
    if(userdice > pcdice){
        console.log("Complimenti hai vinto")
        
        

   }
   if(userdice < pcdice){
       console.log("Hai perso")
       
       
       

   }
   else if(userdice === pcdice){
   
       console.log("pareggio")
      
       

   
   }

   const myFlex = document.querySelector("#flex") ;
   myFlex.style.display="flex";
}
)





