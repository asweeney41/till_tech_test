describe('Order', function(){
  var order;
  var item;

  beforeEach(function(){
    order = new Order();
  });

  describe('Returning the order', function(){
    it('returns the orderObject', function(){
      expect(order.getOrderObject()).toEqual({});
    });
  });

  describe('Adding an item to the order', function(){
    it('succesfully adds a new item to the orderObject', function(){
      order.addItemToOrder(item);
      expect(order.getOrderObject()).toEqual({item : 1});
    });
  });

});
