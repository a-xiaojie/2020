;
var moduleB = (function () {
  // 1.想用flag
  if (moduleA.flag) {
    console.log('哈哈哈');
  }

  // 2. 使用sum函数
  console.log(moduleA.sum(40, 50))
})();
