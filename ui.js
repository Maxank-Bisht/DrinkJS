class UI {
  constructor() {
    this.output = document.getElementById("output");
    this.result = document.getElementById("result");
  }
  showResult(search, searchType, searchCatgy) {
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

  getDrinkData(drink) {
    let {
      idDrink,
      strAlcoholic,
      strDrink,
      strCategory,
      strDrinkThumb,
      strInstructions,
    } = drink;
    let ingredients = {};
    for (let i = 1; i <= 15; i++) {
      let ingredient = drink["strIngredient" + i.toString()];
      let measure = drink["strMeasure" + i.toString()];

      if (ingredient === null) break;
      ingredients[ingredient.toString()] = measure;
    }
    return {
      idDrink,
      strAlcoholic,
      strCategory,
      strDrinkThumb,
      ingredients,
      strInstructions,
      strDrink,
    };
  }
  paint(drinks) {
    if (drinks.length % 2 === 0) {
      for (let i = 0; i < drinks.length; i += 2) {
        let drinkData1 = this.getDrinkData(drinks[i]);
        let drinkData2 = this.getDrinkData(drinks[i + 1]);
        this.output.innerHTML += `<div class="row">
                                   <div class="col-sm-6">
                                   <div class="card">
                                        <div class="card-body">
                                        <h5 class="card-title">Special title treatment</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                   </div>
                                   </div>
                                   <div class="col-sm-6">
                                   <div class="card">
                                        <div class="card-body">
                                        <h5 class="card-title">Special title treatment</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                   </div>
                                   </div>
                                   </div>`;
      }
    } else {
      for (let i = 0; i < drinks.length; i += 2) {
        if (i == drinks.length - 1) {
          let drinkData1 = this.getDrinkData(drinks[i]);
          this.output.innerHTML += `
          <div class="row">
               <div class="col-sm-6">
               <div class="card">
               <img class="card-img-top" src="${drinkData1.strDrinkThumb}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${drinkData1.strDrink}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
               </div>
               </div>
          </div>`;
        } else {
          let drinkData1 = this.getDrinkData(drinks[i]);
          let drinkData2 = this.getDrinkData(drinks[i + 1]);
          this.output.innerHTML += `
          <div class="row">
               <div class="col-sm-6">
               <div class="card">
               <img class="card-img-top" src="${drinkData1.strDrinkThumb}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${drinkData1.strDrink}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
               </div>
               </div>
               <div class="col-sm-6">
               <div class="card">
               <img class="card-img-top" src="${drinkData2.strDrinkThumb}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${drinkData2.strDrink}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
               </div>
               </div>
               </div>`;
        }
      }
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
    this.output.innerHTML = "";
  }
}
