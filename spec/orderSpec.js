describe('Order', function(){
  var order, cost, menu = {getMenu: {item: cost}}, item = {'food': 1};

  beforeEach(function(){
    order = new Order(menu);
  });

  describe('Returning the order', function(){
    it('returns the orderObject', function(){
      expect(order.getOrderObject()).toEqual({});
    });
  });

  describe('Adding an item to the order', function(){
    it('succesfully adds a new item to the orderObject', function(){
      order.addItemToOrder(item);
      expect(order.getOrderObject()).toEqual({'food' : 1});
    });
  });

  describe('Injecting a menu into the order', function(){
    it('stores a menu', function(){
      expect(order.menu).toEqual(menu);
    });
  });

});
