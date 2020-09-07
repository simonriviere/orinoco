var request = new XMLHttpRequest();
let response  = ''

request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
       response = JSON.parse(this.responseText);  //transforme le fichier Json et javascript (parse)
       
    }
    console.log(localStorage.getItem('name'));
    for(let i = 0; i < response.length ; i++){
         //voir le détail du produit
       let detailsProduit = document.querySelector('main').innerHTML +=           
       ` <div class="col-12 col-md-4  mt-3 mb-3  details">
          <div class="card " >
          <img src="` + response[i].imageUrl + `" alt="image de certificat" class="card-img-top">
          <div class="card-body">
             <div class="text-center">
             <h3> ` + response[i].name +` </h3>
             <h4> Prix : ` + response[i].price / 100 +` € </h4>
             <h4> description : ` + response[i].description + `</h4>
             <form name="f">
             <h4> Essence :
                 <select name="dmc">
                     <option value="Choix 1"> Chêne </option>
                 </select>
             </h4>
         </form>
                <a href="#" class="btn btn-primary ">Commander</a>
             </div>            
          </div>
          </div>
       </div>`;    
  }
};  
     

request.open("GET", "http://localhost:3000/api/furniture");
request.send();


     