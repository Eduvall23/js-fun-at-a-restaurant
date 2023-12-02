function createRestaurant(nameInput){
  var newResturant = {
    name: nameInput,
    menus:
    {
      breakfast: [],
      lunch:[],
      dinner:[]
    }
  }
  return (newResturant)
}
function addMenuItem(restaurant,item){
  if(!restaurant.menus[item.type].includes(item)){
  restaurant.menus[item.type].push(item)
  }
}
function removeMenuItem(restaurant, food, type){
  for(var i = 0; i<restaurant.menus[type].length;i++){
    if(restaurant.menus[type][i].name == food){
      restaurant.menus[type].splice(i,1)
      return(`No one is eating our ${food} - it has been removed from the ${type} menu!`)
    }
  }
  return(`Sorry, we don't sell ${food}, try adding a new recipe!`)
}
function checkForFood(restaurant,food){
  
    if(restaurant.menus.breakfast.includes(food)){
      return( `Yes, we're serving ${food.name} today!`)
    }else if(restaurant.menus.lunch.includes(food) ){
      return( `Yes, we're serving ${food.name} today!`)
    }else if(restaurant.menus.dinner.includes(food)){
      return( `Yes, we're serving ${food.name} today!`)
    }else{
      return(`Sorry, we aren't serving ${food.name} today.`);
    }
  
}
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}