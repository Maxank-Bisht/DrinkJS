//Init drink
const drinks = new Drinks;
//Init ui
const ui = new UI;

const screen = document.getElementById('screen');
const output = document.getElementById('output');

document.getElementById('submit').addEventListener('click', (e) => {
     
     const search = document.getElementById('search').value;
     const searchCatgy = document.getElementById('search-catgy').value;
     const searchType = document.getElementById('search-type').value;
     
     if (search !== '') {
          screen.style.display = 'none';
          
          ui.clearPaint();
          ui.showResult(search, searchType, searchCatgy);
          drinks.getDrink(search)
               .then(data => {
                    if (data) {
                         //filter
                         //1. based on type
                         if (searchType !== "All") {
                              data.drinks = data.drinks.filter(drink => drink.strAlcoholic.toLowerCase() == searchType.toLowerCase() );
                         }
                         
                         //2. based on catgy
                         if (searchCatgy !== "All") {
                              data.drinks = data.drinks.filter(drink => drink.strCategory.toLowerCase() == searchCatgy.toLowerCase());
                         }
                         console.log(data.drinks);
                         if (data.drinks.length == 0) ui.showErr(search);
                         else {

                              data.drinks.forEach(drink => ui.paint(drink));
                         }

                    } else {
                         ui.showErr(search); 
                    }
               })
               .catch((err) => {
                    console.log(err);
                    ui.showErr(search)
               });
     }
     e.preventDefault();
})




    