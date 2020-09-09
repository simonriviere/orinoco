/*  let name = localStorage.getItem('name')
let _id = localStorage.getItem('_id')
let price = localStorage.getItem('price')
let description = localStorage.getItem('description')
let imageUrl = localStorage.getItem('imageUrl')
let varnish = localStorage.getItem('varnish').split(',')
  */
// Requete get
const getUsers = async function () {
   let params = new URLSearchParams(document.location.search.substring(1));
   let id = params.get('_id')
   let response = await fetch('http://localhost:3000/api/furniture/' + id)
   let article = await response.json()
   console.log(article.name)
   //Ajout d'une balise div de class row
   const newElt = document.createElement("div");
   newElt.classList.add("row", "justify-content-center")
   let elt = document.querySelector("main");
   elt.appendChild(newElt)

   //ajout des div pour la structure de la card
   const newProduit = document.createElement('div');
   newProduit.classList.add('col-12', 'col-md-10', 'col-lg-7', 'mt-3', 'mb-3', 'produits')

   const newCard = document.createElement('div');
   newCard.classList.add('card', 'text-center')

   //insertion de l'image
   const newImage = document.createElement('img');
   newImage.classList.add("card-img-top")
   newImage.setAttribute('src', article.imageUrl)


   //ajout de la div pour le card-body
   const newCardBdy = document.createElement('div');
   newCardBdy.classList.add('card-body')

   //ajout du titre
   const newTitres = document.createElement('h3');
   newTitres.classList.add('mt-3')
   newTitres.textContent = article.name;

   //ajout de la description 
   const newDescription = document.createElement('p');
   newDescription.textContent = article.description;

   //ajout du prix
   const newPrix = document.createElement('p');
   newPrix.textContent = "Prix : " + article.price / 100 + ",00 €"
   console.log(article.varnish)

   //choix de l'essence
   const newEssence = document.createElement('select')
   newEssence.setAttribute('name', 'varnish')
   newEssence.classList.add('mb-4')
   newEssence.setAttribute('id', 'couleurVernis')
   const newOption0 = document.createElement('option')
   newOption0.setAttribute("value", "1")
   newOption0.textContent = 'Choisir une couleur de vernis'
   newEssence.appendChild(newOption0)
   for (let i = 0; i < article.varnish.length; i++) {
      const newOption1 = document.createElement('option')
      newOption1.setAttribute("value", article.varnish[i])
      newOption1.textContent = article.varnish[i]
      newEssence.appendChild(newOption1)
   }

   //ajout au panier
   const newAchat = document.createElement('button');
   newAchat.setAttribute('role', 'button')
   newAchat.classList.add('btn', 'btn-primary', 'btnAjout', 'ml-4', 'mr-4', 'mb-2')
   newAchat.textContent = 'Ajouter au panier';

   //appendChild
   newElt.appendChild(newProduit);
   newProduit.appendChild(newCard);
   newCard.appendChild(newCardBdy);
   newCard.appendChild(newImage);
   newCard.appendChild(newTitres);
   newCard.appendChild(newDescription);
   newCard.appendChild(newPrix);
   newCard.appendChild(newEssence);
   newCard.appendChild(newAchat);


   //Comportement au clique sur 'ajouter au panier'
   let ajoutArticle = document.querySelector('.btnAjout');
   ajoutArticle.addEventListener('click', function () {
      var selectElmt = document.getElementById("couleurVernis");
      var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
      if (valeurselectionnee != 1) {
         alert('Votre article est ajouté au panier')
         localStorage.setItem('name', article.name)
         localStorage.setItem('_id', JSON.stringify(article._id))
         
         localStorage.setItem('price', article.price)
         localStorage.setItem('description', article.description)
         localStorage.setItem('imageUrl', article.imageUrl)
         localStorage.setItem('varnish', article.varnish)
      } else {
         alert('Il faut choisir un vernis')
      }
   })
}

getUsers()
/* if (response.ok) {
   let data = await response.json()
    let detailsProduit = document.querySelector('main').innerHTML +=           
    ` <div class="row justify-content-center">
      <div class="col col-lg-6 mt-3 mb-3 ">
       <div class="card " >
       <img src="` + imageUrl + `" alt="image de certificat" class="card-img-top">
       <div class="card-body  ">
          <div class="text-center">
          <h3> ` + name +` </h3>
          <h4> Prix : ` + price / 100 +` € </h4>
          <h4> description : ` + description + `</h4>
          <form name="f">
          <h4> Essence :
              <select name="dmc">
                  <option value="Choix 1"> ` + varnish + `</option>
              </select>
          </h4>
      </form>
      <select id="qt" name="q" class="btn btn-primary">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
  </select>
<button type="button" class=" btn btn-primary btnAjout add-to-cart" data-id="` + _id +`" data-name="` + name+`" data-price="` + price / 100 +` data-url="#">Ajouter au panier</button></div>
  
          </div>            
       </div>
       </div>
    </div>
    </div>`;    
    let ajoutArticle = document.querySelector('.btnAjout');

    ajoutArticle.addEventListener('click', function(){
       localStorage.setItem('name',name)
       localStorage.setItem('_id', _id )
       localStorage.setItem('price',price)
       localStorage.setItem('description',description)
       localStorage.setItem('imageUrl',imageUrl)
       localStorage.setItem('varnish', varnish)

    }) 

   } else {
      console.error('Retour du server : ', response.status)
   }
} */


/* localStorage.getItem('name')
localStorage.getItem('_id')
localStorage.getItem('price')
localStorage.getItem('description')
localStorage.getItem('imageUrl') */

