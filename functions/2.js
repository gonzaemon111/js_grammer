//メソッド呼び出しパターン
var myObject = {
  value: 10,
  show: function() {
    console.log(this.value);
  }
}
myObject.show(); // 10

// thisにはmyObjectが入っています。