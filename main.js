let urlFurniture = 'http://localhost:3000/api/furniture/';
// Requete get
const getIndex = async function (url) {
   let response = await fetch(url)
   if (response.ok) { // si le code d'état de la requête fetch  est de 200 à 299
      //on parse le contenu de response dans une variable
      let articles = await response.json()

      function presentationArticles(data) {
         //création d'une balise div de class row
         const newElt = document.createElement("div");
         newElt.classList.add("row")
         let elt = document.querySelector("main");
         elt.appendChild(newElt)

         //création des cards contenant les articles
         for (let i = 0; i < data.length; i++) {
            //creation de la div et de ses class
            const newProduit = document.createElement('div');
            newProduit.classList.add('col-12', 'col-md-4', 'mt-3', 'mb-3', 'produits')
            let produits = document.querySelector('.produit > div');

            const newCard = document.createElement('div');
            newCard.classList.add('card', 'text-center')
            //insertion de l'image
            const newImage = document.createElement('img');
            newImage.classList.add("card-img-top")
            newImage.setAttribute('src', data[i].imageUrl)
            //creation card-body
            const newCardBdy = document.createElement('div');
            newCardBdy.classList.add('card-body')
            //création du titre
            const newTitres = document.createElement('h3');
            newTitres.textContent = data[i].name;
            //création du bouton description
            const descriptions = document.createElement('a');
            descriptions.setAttribute('href', 'pages/produit.html?_id=' + data[i]._id)
            descriptions.setAttribute('role', 'button')
            descriptions.classList.add('btn', 'btn-primary', 'btnLien', 'ml-4', 'mr-4', 'mb-2')
            descriptions.textContent = 'Description';

            //appendChild
            produits.appendChild(newProduit);
            newProduit.appendChild(newCard);
            newCard.appendChild(newCardBdy);
            newCard.appendChild(newImage);
            newCard.appendChild(newTitres);
            newCard.appendChild(descriptions);
         };
      }
      presentationArticles(articles)
   } else {
      console.error('Retour du server : ', response.status)
   }

}
getIndex(urlFurniture)
