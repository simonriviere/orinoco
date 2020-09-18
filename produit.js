let urlFurniture = 'http://localhost:3000/api/furniture/';
let produits
const produit = async function (url) {
   let params = new URLSearchParams(document.location.search.substring(1));
   let id = params.get('_id')
   let response = await fetch(url + id)
   produits = await response.json()
   function description(data) {
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
      newImage.setAttribute('src', data.imageUrl)
      //ajout de la div pour le card-body
      const newCardBdy = document.createElement('div');
      newCardBdy.classList.add('card-body')
      //ajout du titre
      const newTitres = document.createElement('h3');
      newTitres.classList.add('mt-3')
      newTitres.textContent = data.name;
      //ajout de la description 
      const newDescription = document.createElement('p');
      newDescription.textContent = data.description;
      //ajout du prix
      const newPrix = document.createElement('p');
      newPrix.textContent = "Prix : " + data.price / 100 + ",00 €"
      //choix de l'essence
      const newEssence = document.createElement('select')
      newEssence.setAttribute('name', 'varnish')
      newEssence.setAttribute('label', 'vernis')
      newEssence.classList.add('mb-4')
      newEssence.setAttribute('id', 'couleurVernis')
      const newOption0 = document.createElement('option')
      newOption0.setAttribute("value", "1")
      newOption0.textContent = 'Choisir une couleur de vernis'
      newEssence.appendChild(newOption0)
      for (let i = 0; i < data.varnish.length; i++) {
         const newOption1 = document.createElement('option');
         newOption1.setAttribute("value", data.varnish[i]);
         newOption1.textContent = data.varnish[i];
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
   }
   function ajoutPanier(data) {
      //Comportement au clique sur 'ajouter au panier'
      let ajoutArticle = document.querySelector('.btnAjout');
      ajoutArticle.addEventListener('click', function () {
         let selectElmt = document.getElementById('couleurVernis')
         let textSelectionne = selectElmt.options[selectElmt.selectedIndex].value;

         let valeurSelectionnee = selectElmt.options[selectElmt.selectedIndex].value;
         if (valeurSelectionnee != 1) {
            if (JSON.parse(localStorage.getItem('product')) === null) {
               let a = []
               a.push(
                  data._id
               );
               localStorage.setItem("product", JSON.stringify(a));

               let b = []
               b.push(
                  data._id + textSelectionne
               )
               localStorage.setItem("produitSelectionne", JSON.stringify(b));
               alert('Votre article est ajouté au panier');
            } else {
               let products = JSON.parse(localStorage.getItem('product'))
               products.push(
                  data._id
               );
               localStorage.setItem("product", JSON.stringify(products));
               let produitSelectionne = JSON.parse(localStorage.getItem('produitSelectionne'))
               produitSelectionne.push(
                  data._id + textSelectionne
               );
               localStorage.setItem("produitSelectionne", JSON.stringify(produitSelectionne));

               alert('Votre article est ajouté au panier');
            }
         } else {
            alert('Il faut choisir un vernis')
         }
      })
   }
   description(produits)
   ajoutPanier(produits)
}
produit(urlFurniture)
