
// Requete get
const getIndex = async function () {
   let response = await fetch('http://localhost:3000/api/furniture/')
   if (response.ok) {
      let articles = await response.json()

      //création d'une balise div de class row
      const newElt = document.createElement("div");
      newElt.classList.add("row")
      let elt = document.querySelector("main");
      elt.appendChild(newElt)

      //création des cards contenant les articles
      for (let i = 0; i < articles.length; i++) {
         //creation de la div et de ses class
         const newProduit = document.createElement('div');
         newProduit.classList.add('col-12', 'col-md-4', 'mt-3', 'mb-3', 'produits')
         let produits = document.querySelector('.produit > div');
         
         const newCard = document.createElement('div');
         newCard.classList.add('card','text-center')

         //insertion de l'image
         const newImage = document.createElement('img');
         newImage.classList.add( "card-img-top")
         newImage.setAttribute('src',articles[i].imageUrl)
         
         
         //creation card-body
         const newCardBdy = document.createElement('div');
         newCardBdy.classList.add('card-body')
         

         //création du titre
         const newTitres = document.createElement('h3');
         newTitres.textContent= articles[i].name ;

         //création du bouton description
         const descriptions = document.createElement('a');
         descriptions.setAttribute('href', 'pages/produit.html?_id='+articles[i]._id)
         descriptions.setAttribute('role','button')
         descriptions.classList.add('btn', 'btn-primary', 'btnLien', 'ml-4', 'mr-4','mb-2')
         descriptions.textContent = 'Description';

         //appendChild
         produits.appendChild(newProduit);
         newProduit.appendChild(newCard);
         newCard.appendChild(newCardBdy);
         newCard.appendChild(newImage);
         newCard.appendChild(newTitres);
         newCard.appendChild(descriptions);
   /*       produits.innerHTML +=  // Ajout des card contenant le produit
            ` <div class="col-12 col-md-4  mt-3 mb-3 produits">
                   <div class="card">
                   <img src="` + articles[i].imageUrl + `" alt="image de certificat" class="card-img-top">
                   <div class="card-body">
                      <div class="text-center">
                      <h3> ` + articles[i].name + ` </h3>
                         <a href="pages/produit.html" class="btn btn-primary btnLien" role="button">Description</a>
                      </div>
                   </div>
                   </div>
                </div>`; */

      };

      //Comportement click sur la description d'un article
      let detail = document.querySelectorAll('.btnLien'); // on récupère tout les éléments de class .btnLien
      for (let i = 0; i < detail.length; i++) { // on créer une boucle qui parcours la variable que l'on vient de créer 
            detail[i].addEventListener("click", function (event) { // quand on clique sur la description d'un article ça stock ces informations dans localstorage
            localStorage.setItem('name', articles[i].name)
            localStorage.setItem('_id', articles[i]._id )
            localStorage.setItem('price',articles[i].price)
            localStorage.setItem('description',articles[i].description)
            localStorage.setItem('imageUrl',articles[i].imageUrl)
            localStorage.setItem('varnish', articles[i].varnish)
         })

      }
      

   } else {
      console.error('Retour du server : ', response.status)
   }
}
getIndex()
    
         
/*Solution avec XMLHttp
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

localStorage.setItem('name', article );
console.log(localStorage.getItem('name'));


request.open("GET", "http://localhost:3000/api/furniture");
request.send();
 */

