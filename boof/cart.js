class Cart {
constructor(product,price, delivery){
this.product=product
this.price= price
this.delivery=delivery

}
 
order() {

return "You have just added " + this.product + " at a price of " + this.price + " to your cart"

}

orderDetails(){
var deliverycharge= 10
var ordertotal=parseInt(deliverycharge+this.price)
return "Item price: " + this.price + " order total including delivering to " + this.delivery + " $" + ordertotal

}
 

}

var cart = new Cart ("32 inch TV ", 200,"Dunboyne")
console.log(cart.order())
console.log(cart.orderDetails())
