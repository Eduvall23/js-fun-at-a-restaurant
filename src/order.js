function takeOrder(order, customer){
  if(customer.length <3 ){
  customer.push(order)
  }
  return(customer)
}
function refundOrder(orderNum, orders){
  for(var i = 0; i<orders.length;i++){
    if (orders[i].orderNumber == orderNum){
      orders.splice(i,1)
    }
  }
  return (orders)
}
function listItems(array){
  var itemList = []
  for(var i = 0; i< array.length;i++){
    itemList.push(array[i].item)
  }
  returnedItems =itemList.join(", ")
  return returnedItems
}

function searchOrder(array,order){
    isOrderInArray = false
    for(var i = 0; i<array.length;i++){
      if(array[i].item == order){
        isOrderInArray = true
      }
    }
    return isOrderInArray
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}