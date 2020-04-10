# ES6-in-depth

## 1.迭代器和`for-of`循环

数组遍历的方法

```js
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index])
}
```

自ES5发布后，可以使用内建的`forEach`方法

```js
myArray.forEach(function (value) {
  console.log(value);
})
// 缺陷：不能使用break语句中断循环，也不能使用return语句返回到外层函数
```



`for-in`循环遍历数组 是一个糟糕的选择，为什么呢？

```js
for (var index in myArray) { // 千万别这样做
  console.log(myArray[index]);
}
```

- 在这段代码中，赋给 index 的值不是实际的数字，而是字符串`0`、`1`、`2`，此时很可能在无意之间进行字符串算数计算，例如：`"2" + 1 == "21"`，这给编码过程带来极大的不便。
- 作用于数组的 `for-in` 循环体除了遍历数组元素外，还会遍历自定义属性。举个例子，如果你的数组中有一个可枚举属性 `myArray.name`，循环将额外执行一次，遍历到名为`name`的索引。就连数组原型链上的属性都能被访问到。
- **在某些情况下，这段代码可能按照随机顺序遍历数组元素。**
- 简而言之，`for-in` 是为**普通对象**设计的，你可以遍历得到字符串类型的键，因此不适用于数组遍历。

### 强大的`for-of`循环

```js
for (var value of myArray) {
  console.log(value);
}
```

优点：

- 最简洁、最直接的遍历数组元素的语法
- 避开了`for-in`循环的所有缺陷
- 与`forEach()`不同的是，它可以正确响应break、continue和return语句



#### `for-of`循环也可以遍历其他的集合

`for-of`循环不仅支持数组，还支持大多数**类数组对象**，如DOM NodeList对象。也支持字符串遍历，将字符串视为一系列的Unicode字符来进行遍历：

```js
for (var chr of '') {
  alert(chr);
}
```

同样也支持`Map`和`Set`对象遍历

不支持普通对象循环



#### 深入理解

**`for-of`循环语句通过方法调用来遍历各种集合**。数组、Maps对象、Sets对象以及其他讨论的对象都有一个共同点，它们都有一个迭代器方法。





