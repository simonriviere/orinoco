var produitAjoute = localStorage.getItem('name')
console.log(produitAjoute)
for(let i=0 ; i < produitAjoute.length ; i++ ){
  const newElt = document.createElement("div");
newElt.classList.add('produit')
let elt = document.querySelector(".cart-tablebody");
elt.appendChild(newElt)
let produits= document.querySelector('.produit' );
produits.textContent = localStorage.getItem('name') 
}
/*      console.log(localStorage.getItem('name'))
             //création d'une balise div de class row

      const newElt = document.createElement("div");
newElt.classList.add('produit')
let elt = document.querySelector(".cart-tablebody");
elt.appendChild(newElt)
let produits= document.querySelector('.produit' );
produits.textContent = localStorage.getItem('name') */





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