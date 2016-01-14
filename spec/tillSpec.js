describe('Till', function(){

  var till, menu, order, input = {'food': 1};


  describe('Taking and storing an order', function(){
    beforeEach(function(){
      order = {
        addItemToOrder: function(){}
      };
      till = new Till(order);
    });

    it('adds an item to the injected order instance', function(){
      spyOn(order, "addItemToOrder");
      till.takeOrder(input);
      expect(order.addItemToOrder).toHaveBeenCalledWith(input);
    });
  });
});
