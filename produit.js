let name = localStorage.getItem('name')
let _id = localStorage.getItem('_id')
let price = localStorage.getItem('price')
let description = localStorage.getItem('description')
let imageUrl = localStorage.getItem('imageUrl')
let varnish = localStorage.getItem('varnish').split(',')


// Requete get
const getUsers = async function () {

   let response = await fetch('http://localhost:3000/api/furniture/')
  
   if (response.ok) {
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
   }
   getUsers()

/* localStorage.getItem('name')
localStorage.getItem('_id')
localStorage.getItem('price')
localStorage.getItem('description')
localStorage.getItem('imageUrl') */

     