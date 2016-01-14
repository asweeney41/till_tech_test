var Till = function(order){

  if (typeof order === 'undefined')
    { order = new Order(new Menu()); }

  this.order = order;
};

Till.prototype = {

  takeOrder: function(object){
    this.order.addItemToOrder(object);
  }
};
