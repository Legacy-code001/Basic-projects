//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', stop)

function stop(){
   let numOfStacking = Number(document.querySelector('input').value) 

   document.querySelector('#stops').innerHTML = ""

   for(i = 1; i <= numOfStacking; i++ ){
    document.querySelector('#stops').innerHTML += " stop!"

   }
    
}
