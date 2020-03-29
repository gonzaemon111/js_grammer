# JS Grammer

  ```tree
  root
    ┣━  functions
    ┃     ┣━ allowFunction.js
  ```

- 実行コマンド

  ```bash
  $ node **.js
  ```

### functions　ディレクトリ

  [参考](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### 基本的な構文

```js
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// 上記の式は、次の式と同等です: => { return expression; }

// 引数が 1 つしかない場合、丸括弧 () の使用は任意です:
(singleParam) => { statements }
singleParam => { statements }

// 引数がない場合、丸括弧を書かねばいけません:
() => { statements }
```


#### 高度な構文

```js
// object リテラル式を返す場合は、本体を丸括弧 () で囲みます:
params => ({foo: bar})

// 残余引数 と デフォルト引数 をサポートしています
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { 
statements }

// 引数リスト内の分割代入もサポートしています
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6
```