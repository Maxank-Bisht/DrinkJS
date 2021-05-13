class Drinks{

     async getDrink(name) {
          // add loading
          document.getElementById('loading').style.display = 'flex';
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
          // not loading or not found
          document.getElementById('loading').style.display = 'none';
         
          const responseData = await response.json();
          
          return responseData;
     }
}