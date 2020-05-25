$(document).ready(function(){
    $(".about").click(function(){
      $(".about").toggle();
      
})
});
function getSize() {
  var size = document.getElementById("pizzaSize").value;
  return parseInt(size);
}

function getCrust() {
  var crust = document.getElementById("pizzaCrust").value;
  return parseInt(crust);
}

function getTopping() {
  var topping = document.getElementById("pizzaTopping").value;
  return parseInt(topping);
}
function getQuantity() {
  var number = document.getElementById("quantity").value;
  return parseInt(number);
}
function totalAmount() {
  var totals = (getSize() + getCrust() + getTopping())* getQuantity();
  alert(
    "You have Ordered " +
    getQuantity("") +
    " pizza," + 
    " " +
    " amounting to ksh. " +
    totals +
    "" +
    " Thanks for your order."
  )};
  //variable customer location
  var location = prompt("If you want your pizza to be delivered to you please enter your location and if not cancel.");
  if (location !== "") {
    alert("You order will be delivered shortly.Delivery fee is 200/= and incase you didn,t want it delivered please come for your order.");
  }




