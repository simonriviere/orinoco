
//récupération du localStorage de la page description
  let commandes= JSON.parse(localStorage.getItem('commande')); 
let products = JSON.parse(localStorage.getItem('products'))
//Si la variables constante est null, il s'affiche un message panier vide
  if(commandes == null){ 
    let panierVide = document.querySelector('.panierVide')
    panierVide.textContent='Votre panier est vide !'
   }
//Si la réponse est ok est que commandes  != null, il s'affiche les produit  
  else {
    //Ajout d'une balise div de class row
    const newElt = document.createElement("div");
    newElt.classList.add("row", "justify-content-center")
    let elt = document.querySelector(".produitPanier");
    elt.appendChild(newElt)
    //variable pour le total du prix
    let sum = 0 ; 
  //on regarde la longueur de l'array de commandes et on affiche les
  for(let i = 0 ; i < commandes.length; i++){

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
    newCard.appendChild(newPrix);

    //calcule du total
    sum+= parseInt(commandes[i].price / 100, 10)
    localStorage.setItem('totalPrix', sum)


  }
    //insertion du prix total dans une div
    //Ajout d'une balise div de class row
    const newPara = document.createElement("div");
    newPara.classList.add("row", "justify-content-center");
    let para = document.querySelector(".totalPanier");
    para.appendChild(newPara);

    //ajout des div pour la structure de la card
    const newTotal = document.createElement('div');
    newTotal.classList.add('col-12', 'col-md-10', 'col-lg-7', 'mt-3' );

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
    newPrixTotal.textContent = sum + ',00 €'; 

    newPara.appendChild(newTotal);
    newTotal.appendChild(newCard2);
    newCard2.appendChild(newCardBdy2);
    newCard2.appendChild(newTitreTotal);
    newCard2.appendChild(newPrixTotal);

  };
  //envoie des informations



  
  
//    
  
  let envoi = document.querySelector('.envoyer')

class contacts {
        constructor(firstName, lastName, address, city, email){
          this.firstName = firstName;
          this.lastName = lastName;
          this.address = address;
          this.city =city;
          this.email = email
        }
      } 

  envoi.addEventListener('click',function(e){
  e.preventDefault();
  let  lastName = document.getElementById('lastName').value;
  let firstName = document.getElementById('firstName').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let email = document.getElementById('email').value;
  let contact = new contacts(firstName, lastName, address, city, email);


   const orderFurniture = async function(){
      
    let response =  await fetch('http://localhost:3000/api/furniture/order',{
      method : 'POST',
      header : {  
        'Content-Type': 'application/json'     
      },
      body : JSON.stringify({contact, products})
  })
  let responseData = await response.json()
  if (response.ok){
      console.log(orderId)
      }else{}
   }  
console.log(contact.firstName)   
console.log(products)

  orderFurniture()

}) 
//localStorage.clear()  
    
