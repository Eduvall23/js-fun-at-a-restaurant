function nameMenuItem(food) {
  return(`Delicious ${food}`)
}
function createMenuItem(food,cost,typeOfFood)
{
  var newMenuItem = 
{
  name : food,
  price : cost,
  type : typeOfFood
}
  
  console.log(newMenuItem.name)
  return(newMenuItem)
}
function addIngredients(ingredient, array){
 if(!array.includes(ingredient)){
  array.push(ingredient)
 }
  return(array)
}
function formatPrice(price){
  formattedPrice = "$"+price
  return formattedPrice
}
function decreasePrice(price){
  var discount = price/10
  var total = price - discount
  return total 
}
function createRecipe(name, ingredient,menuType){
    var newRecipe =
    {
      title : name,
      ingredients : ingredient,
      type : menuType
    }
    return newRecipe
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
  
}


