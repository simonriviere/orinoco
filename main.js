
var request = new XMLHttpRequest();
let response  = ''
let article =''
//création d'une balise div de class row
const newElt = document.createElement("div");
newElt.classList.add("row")
let elt = document.querySelector("main"); 
elt.appendChild(newElt)
   
request.onreadystatechange = function() {
   if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      response = JSON.parse(this.responseText);  //transforme le fichier Json et javascript (parse)
   }    

   for(let i = 0; i < response.length ; i++){
      // Création des cards avec les différents produit 
      let  différentsProduits = document.querySelector('.produit > div');
      différentsProduits.innerHTML +=  // Ajout des card contenant le produit            
         ` <div class="col-12 col-md-4  mt-3 mb-3">
            <div class="card">
            <img src="` + response[i].imageUrl + `" alt="image de certificat" class="card-img-top">
            <div class="card-body">
               <div class="text-center">
               <h3> ` + response[i].name +` </h3>
                  <a href="pages/produit.html" class="btn btn-primary bouton-lien">Description</a>
               </div>            
            </div>
            </div>
         </div>`;    

         }; 
        
      }      

//localStorage.setItem('name', article ); 
//console.log(localStorage.getItem('name'));


request.open("GET", "http://localhost:3000/api/furniture");
request.send(); 


