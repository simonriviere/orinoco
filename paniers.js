
const getUsers = async function () {
  let response = await fetch('http://localhost:3000/api/furniture/')

  let commandes= JSON.parse(localStorage.getItem('commande'));

  if(commandes == null){
    let panierVide = document.querySelector('.panierVide')
    panierVide.textContent='Votre panier est vide !'
   }else if (response.ok) {

     let articles = await response.json()
    
    //Ajout d'une balise div de class row
    const newElt = document.createElement("div");
    newElt.classList.add("row", "justify-content-center")
    let elt = document.querySelector(".produitPanier");
    elt.appendChild(newElt)

    for(let j = 0; j < articles.length; j++){
      for(let i = 0 ; i < commandes.length; i++){
        if(articles[j]._id == commandes[i]._id){
          console.log(commandes[i].name)
          //ajout des div pour la structure de la card
          const newProduit = document.createElement('div');
          newProduit.classList.add('col-12', 'col-md-10', 'col-lg-4', 'mt-3', 'mb-3', 'produits')

          const newCard = document.createElement('div');
          newCard.classList.add('card', 'text-center')
          
          //insertion de l'image
          const newImage = document.createElement('img');
          newImage.classList.add("card-img-top")
          newImage.setAttribute('src', commandes[i].imageUrl)

          //ajout de la div pour le card-body
          const newCardBdy = document.createElement('div');
          newCardBdy.classList.add('card-body')

          //ajout du titre
          const newTitres = document.createElement('h3');
          newTitres.classList.add('mt-3')
          newTitres.textContent = commandes[i].name; 
          

          //ajout de la description 
          const newDescription = document.createElement('p');
          newDescription.textContent = commandes[i].description;

          //ajout du prix
          const newPrix = document.createElement('p');
          newPrix.textContent = "Prix : " + commandes[i].price / 100 + ",00 €"

          //appendChild
          newElt.appendChild(newProduit);
          newProduit.appendChild(newCard);
          newCard.appendChild(newImage);
          newCard.appendChild(newCardBdy);
          newCard.appendChild(newTitres);
          newCard.appendChild(newDescription);
          newCard.appendChild(newPrix);}

          //envoie des informations
          let envoi = document.querySelector('.envoyer')
          
          envoi.addEventListener('click',function(e){
            localStorage.clear()
          })


        }
    }
      

/* <div class="col-lg-4">   
        <div class="card text-center ">
            <h3>NAME</h3>
            <div class="card-body ">
                <p>description</p>
                <p>prix : price / 100 ,00 €</p>
                <p>quantité</p>
            </div>
        </div>        
    </div> */
}else{console.error('Retour du server : ', response.status)}
}
getUsers()

    /*La fonction principale de ce script est d'empêcher l'envoi du formulaire si un champ a été mal rempli
             *et d'appliquer les styles de validation aux différents éléments de formulaire*/
/*             (function() {
              'use strict';
              window.addEventListener('load', function() {
                let forms = document.getElementsByClassName('needs-validation');
                let validation = Array.prototype.filter.call(forms, function(form) {
                  form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                  }, false);
                });
              }, false);
            })();
 */