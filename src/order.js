var Order = function(){
  this.orderObject = {};
};

Order.prototype = {
  addItemToOrder: function(item){
    this.orderObject.item = this.orderObject.item + 1 || 1;
  },

  getOrderObject: function(){
    return this.orderObject;
  }
};
