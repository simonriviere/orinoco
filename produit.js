/*  let name = localStorage.getItem('name')
let _id = localStorage.getItem('_id')
let price = localStorage.getItem('price')
let description = localStorage.getItem('description')
let imageUrl = localStorage.getItem('imageUrl')
let varnish = localStorage.getItem('varnish').split(',')
  */
// Requete get


const produit = async function () {
   let params = new URLSearchParams(document.location.search.substring(1));
   let id = params.get('_id')
   let response = await fetch('http://localhost:3000/api/furniture/' + id)
   let article = await response.json()

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
 

   //choix de l'essence
   let choixVarnish = ''
   const newEssence = document.createElement('select')
   newEssence.setAttribute('name', 'varnish')
   newEssence.classList.add('mb-4')
   newEssence.setAttribute('id', 'couleurVernis')
   const newOption0 = document.createElement('option')
   newOption0.setAttribute("value", "1")
   newOption0.textContent = 'Choisir une couleur de vernis'
   newEssence.appendChild(newOption0)
   for (let i = 0; i < article.varnish.length; i++) {
      const newOption1 = document.createElement('option');
      newOption1.setAttribute("value", article.varnish[i]);
      newOption1.textContent = article.varnish[i];
      newEssence.appendChild(newOption1);
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
   
   let selectElmt = document.getElementById("couleurVernis");
   let valeurSelectionnee = valeurSelectionee = selectElmt.options[selectElmt.selectedIndex].value;   
   if (valeurSelectionnee != 1) {   

      if(JSON.parse(localStorage.getItem('commande')) === null ){   
         let a = []
         a.push({
            '_id' : article._id, 
            'name' : article.name,
            'price': article.price,
            'description' : article.description,
            'imageUrl': article.imageUrl,
         });
         localStorage.setItem("commande", JSON.stringify(a)); 
         let b = []
         b.push(
            article._id
         );
         localStorage.setItem("products", JSON.stringify(b)); 
         alert('Votre article est ajouté au panier');

         }else{
        
            let commandes = JSON.parse(localStorage.getItem('commande'))
            commandes.push({
               '_id' : article._id, 
               'name' : article.name,
               'price': article.price,
               'description' : article.description,
               'imageUrl': article.imageUrl,
               'varnish' : article.varnish
            });
            localStorage.setItem("commande", JSON.stringify(commandes));  

            let products = JSON.parse(localStorage.getItem('products'))
            products.push(
                article._id
            );
            localStorage.setItem("products", JSON.stringify(products)); 
            alert('Votre article est ajouté au panier');
         }
      }else{
            alert('Il faut choisir un vernis')   
      } 
   })
}  

 


produit()
