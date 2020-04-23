TypeScript Let in Switch Case Demo
===========================

在"switch case"里，使用`let`声明是允许但是不推荐的事情。

允许是因为如果没有break，一个case结束后可以进入下一个case，所以let声明的变量是应该跨case的。

不推荐是因为可能会直接进入某个case，而它不包含let声明的部分，就会报错。

实际上有个更好的做法，就是在某个case里加个`{}`，这样let的scope就被限制在了该case中，不会允许跨case，就会报错了：

```
case 1: {
  let x = ?
  break;
}
```

const是一样的道理

```
npm install
npm run demo
```


