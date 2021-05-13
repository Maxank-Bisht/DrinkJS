class UI{
     constructor() {
          this.output = document.getElementById('output');
          this.result = document.getElementById('result');
     }
     showResult(search,searchType,searchCatgy) {
          this.result.innerHTML = `<div>
                                        <h2>Search Result</h2>
                                        <span class="badge bg-info text-dark">Search Input : ${search}</span>
                                        <span class="badge bg-info text-dark">Type : ${searchType}</span>
                                        <span class="badge bg-info text-dark">Category : ${searchCatgy}</span>
                                   </div>
                                   <div class="d-grid gap-2 col-6 mx-auto mt-3">
                                        <a href="/" class="btn btn-outline-primary" type="button"><i class="fas fa-search"></i> Search Another Drink</a>
                                   </div>
                                   `;
          
     }
     paint(drink) {
     
          var { strDrinkThumb ,strDrink , idDrink , strInstructions } = drink;
          var Ingredients = [];
         
          var temp = "";
          var temp1 = "";
          var mapIngtToMesurse = {};
          // var temp2 = "";
          for (let i = 1; i <= 15; i++){
               temp = "strIngredient" + i.toString();
               temp1 = "strMeasure" + i.toString();
               if (drink[temp]) {
                    Ingredients.push(drink[temp]);
                    mapIngtToMesurse[drink[temp]] = "";
               }
               if (drink[temp1]) {
                    mapIngtToMesurse[drink[temp]] = drink[temp1];
               }
          }
          console.log(mapIngtToMesurse);

          this.output.innerHTML += `
               <div class="col">
                    <div class="card h-100" id="drink-card">
                         <img src="${strDrinkThumb}" class="card-img-top" >
                         <div class="card-body">
                              <h2 class="card-title">${strDrink}</h2>
                         </div>
                         <p class="card-text">
                              <ul class="list-group list-group-flush">
                                   <li class="list-group-item text-primary"><b>Type</b> : ${drink.strAlcoholic}</li>
                                   <li class="list-group-item"><b>Caterory</b> : ${drink.strCategory}</li>
                                   <li class="list-group-item"><b>Ingredients </b>: ${Ingredients}</li>
                              </ul>
                         </p>
                         <button type="button" class="btn btn-primary mx-3 my-2" data-bs-toggle="modal" data-bs-target="#d${idDrink}">
                              More Info
                         </button>
                    </div>
               </div>
               <div class="modal fade " id="d${idDrink}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                         <div class="modal-content">
                              <div class="modal-header">
                                   <h3 class="modal-title text-center">${strDrink} </h3> <span class="text-primary ms-3">[${drink.strAlcoholic}]</span>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                   <div class ="card mx-auto" style="width:18rem;">
                                        <img src="${strDrinkThumb}" class="card-img-top" >
                                   </div>
                                   <hr class="my-2">
                                   <div><strong>Instructions:</strong> ${strInstructions}</div>
                                   <hr class="my-2">
                                   <div>
                                        <ul class="list-group rounded" id="fullIngredients${idDrink}">
                                             <li class="list-group-item"><strong>Ingredients :-</strong></li>
                                             
                                        </ul>
                                   </div>
                                   
                              </div>
                         </div>
                    </div>
               </div>
          `;
          const fullIngredients = document.getElementById(`fullIngredients${idDrink}`);
          for (let i in mapIngtToMesurse) {
               var li = document.createElement("li");
               li.appendChild(document.createTextNode(`${mapIngtToMesurse[i]} ${i}`));
               li.className = 'list-group-item';
               fullIngredients.appendChild(li);
               console.log(li);
          }


     }
     showErr(text) {
          this.output.innerHTML = `
               <div class ="col-md-4 mx-auto mt-5">
                    <h1><i class="fas fa-exclamation-triangle fa-5x"></i></h1>
                    <h2>Sorry, No drink found of name '${text}'!</h2>
                    <p>Please Search another drink.</p>
               </div>
          `;
     }
     clearPaint() {
          this.output.innerHTML = '';
     }

}