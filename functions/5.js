var myObject = {
  value: 1,
  show: function() {
    var self = this;
    console.log(self.value); // 1

    function show() {
      console.log(self.value); // 1
    }
    show();
  }
};

myObject.show();