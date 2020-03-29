var myObject = {
  value: 1,
  show: function() {
    console.log(this.value); // 注１

    function show() {
      console.log('-------');
      console.log(this.value); // 注２
    }
    show();
  }
};
myObject.show();

// 注１の「this.value」は「１」
// 注２の「this.value」は「undefind」

// 注１は一つ目のメソッド呼び出しパターンですね。
// 注２が最初紛らわしいです。。

// メソッド呼び出しの中で関数呼び出しされているので、
// あくまで注2の「this」はグローバルを指してしまいます。
// 5.jsで解決