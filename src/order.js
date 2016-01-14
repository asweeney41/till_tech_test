var Order = function(menu){

  if (typeof menu === 'undefined')
    { menu = new Menu(); }

  this.orderObject = {};
  this.menu = menu;
};

Order.prototype = {
  addItemToOrder: function(object){
    for(var key in object){
      if (object.hasOwnProperty(key)){
        this.orderObject[key] = this.orderObject.key + object[key] || object[key];
      }
    }
  },

  getOrderObject: function(){
    return this.orderObject;
  }
};
