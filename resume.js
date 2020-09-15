    //récupération des sessionStorage
    let commande= JSON.parse(sessionStorage.getItem('recap'));
    let totalPrice = JSON.parse(sessionStorage.getItem('prix'))
    
    //Ajout d'une balise div de class row
    const newElt = document.createElement("div");
    newElt.classList.add("row", "justify-content-center")
    let elt = document.querySelector(".resumeCommande");
    elt.appendChild(newElt)

    //ajout des div pour la structure de la card
    const newResume = document.createElement('div');
    newResume.classList.add('col', 'mt-3', 'mb-3', 'resume')
      
    const newCard = document.createElement('div');
    newCard.classList.add('card','text-center')

     //ajout de la div pour le card-body
     const newCardBdy = document.createElement('div');
     newCardBdy.classList.add('card-body')
 
    //ajout du titre
    const newTitres = document.createElement('h2');
    newTitres.classList.add('mt-3')
    newTitres.textContent = 'Merci pour votre commande, voici le récapitulatif : '; 

    //ajout de l'identifiant de commande
    const newId = document.createElement('h3');
    newId.classList.add('mt-3')
    newId.textContent = "Numéro de la commande : " + commande.orderId ; 

    //ajout du prix total de commande
    const newPrice = document.createElement('h3');
    newPrice.classList.add('mt-3')
    newPrice.textContent = "Total de la commande : " + totalPrice + ',00 €'  ; 

    newElt.appendChild(newResume);
    newResume.appendChild(newCard);
    newCard.appendChild(newCardBdy);
    newCard.appendChild(newTitres);
    newCard.appendChild(newId);
    newCard.appendChild(newPrice);