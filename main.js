
var request = new XMLHttpRequest();
let response  = ''
const newElt = document.createElement("div");
newElt.classList.add("row")
let elt = document.querySelector("main"); 
elt.appendChild(newElt)
   
request.onreadystatechange = function(e) {
   if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      response = JSON.parse(this.responseText);  
   }
   for(let i = 0; i < response.length ; i++){
      console.log(response[i])
      document.querySelector('main > div').innerHTML +=  // Ajout de la card contenant le produit            
         ` <div class="col col-lg-3 mt-3 mb-3">
            <div class="card">
            <img src="` + response[i].imageUrl + `" alt="image de certificat" class="card-img-top" width="50" heigth="50">
            <div class="card-body">
               <div class="text-center">
               <h3> ` + response[i].name +` </h3>
                  <a href="#" class="btn btn-primary ">Description</a>
               </div>            
            </div>
            </div>
         </div>`;

   }
};
request.open("GET", "http://localhost:3000/api/furniture");
request.send();

