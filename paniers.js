let urlFurniture = 'http://localhost:3000/api/furniture/';
//récupération du localStorage de la page description
let products = JSON.parse(localStorage.getItem('products'));
let vernis = JSON.parse(localStorage.getItem('verni'));
const getPaniers = async function (url) {
  let response = await fetch(url);
  if (response.ok) {
    let produits = await response.json()

    //Ajout d'une balise div de class row
    const newElt = document.createElement("div");
    newElt.classList.add("row", "justify-content-center")
    let elt = document.querySelector(".produitPanier");
    elt.appendChild(newElt)
    let sum = 0
    //Si la variables constante est null, il s'affiche un message panier vide
    if (products == null) {
      let panierVide = document.querySelector('.panierVide')
      panierVide.textContent = 'Votre panier est vide !'
    }
    //Si la réponse est ok est que products  != null, il s'affiche les produit  
    else {
      function afficheProduits(data) {

        for (let j = 0; j < products.length; j++) {
          for (let i = 0; i < data.length; i++) {
            if (products[j] == data[i]._id) {
              console.log([data[i]._id])
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
              newVernis.textContent = 'vernis : ' + vernis[j].varnish;
              //ajout du prix
              const newPrix = document.createElement('p');
              newPrix.textContent = "Prix : " + data[i].price / 100 + ",00 €"
              //appendChild
              newElt.appendChild(newProduit);
              newProduit.appendChild(newCard);
              newCard.appendChild(newImage);
              newCard.appendChild(newCardBdy);
              newCard.appendChild(newTitres);
              newCard.appendChild(newDescription);
              newCard.appendChild(newVernis)
              newCard.appendChild(newPrix);

              //calcule du total
              sum += parseInt(data[i].price / 100, 10)
              localStorage.setItem('totalPrix', sum)
            }
          }
        }
      }
      afficheProduits(produits)

      function prixTotal() {
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
    prixTotal()

    function envoiFormulaire() {
      //vérifications des informations du formulaire
      let form = document.getElementsByTagName('form')[0];
      //Récupération du prénom
      let formValid = document.getElementById('envoyer');
      let prenom = document.getElementById('lastName');
      let missPrenom = document.getElementById('missPrenom')
      let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
      //Récupération du nom
      let nom = document.getElementById('firstName');
      let missNom = document.getElementById('missNom')
      let nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
      //Récupération de l'email
      let mail = document.getElementById('mail');
      let missMail = document.getElementById('missMail')
      let mailValid = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/
      //récupération de l'adress
      let address = document.getElementById('address');
      let missAddress = document.getElementById('missAddress');
      let addressValid = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;
      //Récupération de la ville
      let city = document.getElementById('firstName');
      let missCity = document.getElementById('missNom');
      let cityValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([- '\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

      formValid.addEventListener('click', validation);
      function validation(event) {
        //vérification du prénom
        if (prenom.validity.valueMissing) {
          event.preventDefault();
          missPrenom.textContent = 'Prénom manquant';
          missPrenom.style.color = 'red';
          //Si le format de données est incorrect
        } else if (prenomValid.test(prenom.value) == false) {
          event.preventDefault();
          missPrenom.textContent = 'Format incorrect';
          missPrenom.style.color = 'orange';
        }
        // vérification du nom 
        else if (nom.validity.valueMissing) {
          event.preventDefault();
          missNom.textContent = 'Nom manquant';
          missNom.style.color = 'red';
          //Si le format de données est incorrect
        } else if (nomValid.test(nom.value) == false) {
          event.preventDefault();
          missNom.textContent = 'Format incorrect';
          missNom.style.color = 'orange';
        }
        //vérification de l'email
        else if (mail.validity.valueMissing) {
          event.preventDefault();
          missMail.textContent = 'Mail manquant';
          missMail.style.color = 'red';
          //Si le format de données est incorrect
        } else if (mailValid.test(mail.value) == false) {
          event.preventDefault();
          missMail.textContent = 'Format incorrect';
          missMail.style.color = 'orange';
        }
        //vérification de l'adresse
        else if (address.validity.valueMissing) {
          event.preventDefault();
          missAddress.textContent = 'Adresse manquante';
          missAddress.style.color = 'red';
          //Si le format de données est incorrect
        } else if (addressValid.test(address.value) == false) {
          event.preventDefault();
          missAddress.textContent = 'Format incorrect';
          missAddress.style.color = 'orange';
        }
        //vérification de la ville
        else if (city.validity.valueMissing) {
          event.preventDefault();
          missCity.textContent = 'Adresse manquante';
          missCity.style.color = 'red';
          //Si le format de données est incorrect
        } else if (cityValid.test(city.value) == false) {
          event.preventDefault();
          missCity.textContent = 'Format incorrect';
          missCity.style.color = 'orange';
        }
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        //récupération des valeurs du formulaire
        let lastName = document.getElementById('lastName').value;
        let firstName = document.getElementById('firstName').value;
        let address = document.getElementById('address').value;
        let city = document.getElementById('city').value;
        let email = document.getElementById('mail').value;

        if (products == null) {
          alert('Il faut ajouter un produit au panier pour pouvoir commander')
          e.preventDefault
        }
        // si le formulaire est bien remplit
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

          //création de la méthode post une fois le formulaire bien remplit

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

      })
    }
  } else {
    console.error('Retour du server : ', response.status)
  }
  envoiFormulaire()
}
getPaniers(urlFurniture)
