
// Requete get
const getUsers = async function () {

   let response = await fetch('http://localhost:3000/api/furniture/')
  
   if (response.ok) {
      let data = await response.json()
      let vernis = localStorage.getItem('varnish').split(' ');

      for(let i = 0 ; i < vernis.length ; i++){
         localStorage.setItem("verni", vernis[i])
         
      };
       let detailsProduit = document.querySelector('main').innerHTML +=           
       ` <div class="row justify-content-center">
         <div class="col col-lg-6 mt-3 mb-3 ">
          <div class="card " >
          <img src="` + localStorage.getItem('imageUrl') + `" alt="image de certificat" class="card-img-top">
          <div class="card-body  ">
             <div class="text-center">
             <h3> ` + localStorage.getItem('name') +` </h3>
             <h4> Prix : ` + localStorage.getItem('price')/ 100 +` € </h4>
             <h4> description : ` + localStorage.getItem('description') + `</h4>
             <form name="f">
             <h4> Essence :
                 <select name="dmc">
                     <option value="Choix 1"> ` + localStorage.getItem('verni')+ `</option>
                 </select>
             </h4>
         </form>
                <a href="#" class="btn btn-primary ">Ajouter au panier</a>
             </div>            
          </div>
          </div>
       </div>
       </div>`;    
  
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

     