let urlFurniture = 'http://localhost:3000/api/furniture/';
//récupération du localStorage de la page description
let produitSelectionne = JSON.parse(localStorage.getItem('produitSelectionne'));
let products = JSON.parse(localStorage.getItem('product'));
let response
function produitPanier(data) { //produit dans le panier
  //récupération des produits de  l'api
  //Ajout d'une balise div de class row
  const newElt = document.createElement("div");
  newElt.classList.add("row", "justify-content-center")
  let elt = document.querySelector(".produitPanier");
  elt.appendChild(newElt)
  //création de la variable sum qui sert à calcule le prix total
  let sum = 0

  //Si la variables constante est null, il s'affiche un message panier vide
  if (produitSelectionne == null) {
    let panierVide = document.querySelector('.panierVide')
    panierVide.textContent = 'Votre panier est vide !'

  }
  //Si la réponse est ok est que produitSelectionne  != null, il s'affiche les produit  
  else {
    //on vérifie les occurences dans l'array produitSelectionne
    let result = [];  //création d'un array pour l'occurence des produits
    for (let i = 0; i < produitSelectionne.length; ++i) {
      if (!result[produitSelectionne[i]]) {
        result[produitSelectionne[i]] = 0 // implémentation du produit si il n'existe pas
      };
      ++result[produitSelectionne[i]];  // ajout de la qty du produit si déjà présent
    }
    for (var key in result) {
      // boucle on récupère les key(id + vernis) dans le tableau result
      for (let i = 0; i < data.length; i++) {
        if (key.substr(0, 24) == data[i]._id) { // si la partie id de la key = l'id présent dans l'api
          //ajout des div pour la structure de la card
          const newProduit = document.createElement('div');
          newProduit.classList.add('col-12', 'col-md-10', 'col-lg-4', 'mt-3', 'mb-3', 'produits')

          const newCard = document.createElement('div');
          newCard.classList.add('card', 'text-center')
          //insertion de l'image
          const newImage = document.createElement('img');
          newImage.classList.add("card-img-top")
          newImage.setAttribute('src', data[i].imageUrl)
          //ajout de la div pour le card-body
          const newCardBdy = document.createElement('div');
          newCardBdy.classList.add('card-body')
          //ajout du titre
          const newTitres = document.createElement('h3');
          newTitres.classList.add('mt-3')
          newTitres.textContent = data[i].name;
          //ajout de la description 
          const newDescription = document.createElement('p');
          newDescription.textContent = data[i].description;
          //ajout du vernis
          const newVernis = document.createElement('p');
          newVernis.textContent = 'vernis : ' + key.substr(24);
          //ajout du prix
          const newPrix = document.createElement('p');
          newPrix.textContent = "Prix unitaire : " + data[i].price / 100 + ",00 €"
          //ajout de la qty
          const newQty = document.createElement('p');
          newQty.textContent = 'quantité : ' + result[key];
          //ajout du prix Totall
          const newPrixTotal = document.createElement('h5');
          newPrixTotal.textContent = "Prix total : " + (data[i].price / 100) * result[key] + ",00 €"
          //appendChild
          newElt.appendChild(newProduit);
          newProduit.appendChild(newCard);
          newCard.appendChild(newImage);
          newCard.appendChild(newCardBdy);
          newCard.appendChild(newTitres);
          newCard.appendChild(newDescription);
          newCard.appendChild(newVernis);
          newCard.appendChild(newPrix);
          newCard.appendChild(newQty);
          newCard.appendChild(newPrixTotal)
          //calcule du total
          sum += parseInt((data[i].price / 100) * result[key], 10)
          localStorage.setItem('totalPrix', sum)
        }
      }
    }

  }
}
function prixTotal() { //affichage du prix total
  if (produitSelectionne != null) {
    //insertion du prix total dans une div
    //Ajout d'une balise div de class row
    const newPara = document.createElement("div");
    newPara.classList.add("row", "justify-content-center");
    let para = document.querySelector(".totalPanier");
    para.appendChild(newPara);
    //ajout des div pour la structure de la card
    const newTotal = document.createElement('div');
    newTotal.classList.add('col-12', 'col-md-10', 'col-lg-7', 'mt-3');

    const newCard2 = document.createElement('div');
    newCard2.classList.add('card', 'text-center');
    //ajout de la div pour le card-body
    const newCardBdy2 = document.createElement('div');
    newCardBdy2.classList.add('card-body');
    //ajout du titre
    const newTitreTotal = document.createElement('h3');
    newTitreTotal.textContent = 'Total de vos achats';
    //ajout du prix Total
    const newPrixTotal = document.createElement('h4');
    newPrixTotal.classList.add('pb-3');
    newPrixTotal.textContent = localStorage.getItem('totalPrix') + ',00 €';
    //appendChild
    newPara.appendChild(newTotal);
    newTotal.appendChild(newCard2);
    newCard2.appendChild(newCardBdy2);
    newCard2.appendChild(newTitreTotal);
    newCard2.appendChild(newPrixTotal);
  }
}
//vérification du formulaire

let verif = false
function validation() {
  let prenom = document.getElementById("lastName").value;
  let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
  //Récupération du nom
  let nom = document.getElementById("firstName").value;
  let nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
  //Récupération de l'email
  let mail = document.getElementById('mail').value;
  let mailValid = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/
  //récupération de l'adress
  let address = document.getElementById('address').value;
  let addressValid = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;
  //Récupération de la ville
  let city = document.getElementById('city').value;
  let cityValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([- '\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
  //vérification du prénom
  if (prenom == false) {
    verif = false
    missPrenom.textContent = 'Nom manquant';
    missPrenom.style.color = 'red';

  } else if (prenomValid.test(prenom) == false) {
    verif = false
    missPrenom.textContent = 'Format incorrect';
    missPrenom.style.color = 'orange';
  }
  else {
    missPrenom.textContent = "";
    verif = true
  }
  //vérification du nom
  if (nom == false) {
    verif = false
    missNom.textContent = 'Nom manquant';
    missNom.style.color = 'red';

  } else if (nomValid.test(nom) == false) {
    verif = false
    missNom.textContent = 'Format incorrect';
    missNom.style.color = 'orange';
  }
  else {
    missNom.textContent = "";
    verif = true
  }
  //vérification du mail
  if (mail == false) {
    verif = false
    missMail.textContent = 'Mail manquant';
    missMail.style.color = 'red';

  } else if (mailValid.test(mail) == false) {
    verif = false
    missMail.textContent = 'Format incorrect';
    missMail.style.color = 'orange';
  }
  else {
    missMail.textContent = "";
    verif = true
  }
  //vérification de l'adresse
  if (address == false) {
    verif = false
    missAddress.textContent = 'adresse manquante';
    missAddress.style.color = 'red';

  } else if (addressValid.test(address) == false) {
    verif = false
    missAddress.textContent = 'Format incorrect';
    missAddress.style.color = 'orange';
  }
  else {
    missAddress.textContent = "";
    verif = true
  }
  //vérification de la ville
  if (city == false) {
    verif = false
    missCity.textContent = 'ville manquante';
    missCity.style.color = 'red';

  } else if (cityValid.test(city) == false) {
    verif = false
    missCity.textContent = 'Format incorrect';
    missCity.style.color = 'orange';
  }
  else {
    missCity.textContent = "";
    verif = true
  }
}

function envoiForm() { // envoi du formulaire

  document.getElementById("lastName").addEventListener("change", validation);
  document.getElementById("firstName").addEventListener("change", validation);
  document.getElementById("mail").addEventListener("change", validation);
  document.getElementById("address").addEventListener("change", validation);
  document.getElementById("city").addEventListener("change", validation);

  let form = document.getElementsByTagName('form')[0];
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (verif == true) {
      //récupération des valeurs du formulaire
      let firstName = document.getElementById('firstName').value;
      let lastName = document.getElementById('lastName').value;
      let address = document.getElementById('address').value;
      let city = document.getElementById('city').value;
      let email = document.getElementById('mail').value;

      if (products == null) {
        alert('Il faut ajouter un produit au panier pour pouvoir commander')
        e.preventDefault
      }
      // si le formulaire est bien rempli
      else {
        //création de l'objet utilisé pour le POST         
        let contain = {
          contact: {
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            email: email,
          },
          products: products
        };
        let commande = JSON.stringify(contain)

        //création de la méthode post une fois le formulaire bien rempli
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
          if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
            let response = JSON.parse(this.responseText);
            sessionStorage.setItem('recap', JSON.stringify(response));
            sessionStorage.setItem('prix', localStorage.getItem('totalPrix'))
            window.location.href = "resume.html";
            localStorage.clear()
          }
        };
        request.open("post", "http://localhost:3000/api/furniture/order");
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(commande);

      }
    }
    else {
      alert('Il faut remplir correctement le formulaire')
    }
  })
}

const getIndex = async function (url) {
  response = await fetch(url);
  if (response.ok) {
    let produits = await response.json()
    
    produitPanier(produits)
    prixTotal()
    envoiForm()
  } else {
    console.error('Retour du server : ', response.status)
  }



}
getIndex(urlFurniture)

