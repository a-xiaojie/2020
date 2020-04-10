## 55个提高CSS开发效率的必备片段

### 清除浮动

```css
// 清除浮动
.clearfix::after {
  content: '';
  display: block;
  clear: both;
  overflow: hidden;
}
.clearfix {
  zoom: 1;
}
```



### 垂直水平居中

#### 绝对定位方式且已知宽高

```css
position: absolute;
top: 50%;
left: 50%;
width: 400px;
height: 200px;
margin-top: -100px;
margin-left: -200px;
```

#### 绝对定位 + 未知宽高 + translate

```css
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

#### flex

```css
display: flex;
align-items: center;
justify-content: center;
```



### 文本末尾添加省略号

#### 宽度固定，单行显示...

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

#### 宽度不固定，适合多行及移动端显示

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3; // 行数
-webkit-box-orient: vertical;
```



### 制造文本的模糊效果

```css
color: transparent;
text-shadow: 0 0 2px rgba(0, 0, 0, .5);
```



### 动画实现简洁loading效果

```css
.loading:after {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  content: "\2026";
  -webkit-animation: ellipsis 2s infinite;
}

// 动画部分
@-webkit-keyframes ellipsis {
  from {
    width: 2px;
  }
  to {
    width: 15px;
  }
}
```



### 自定义文本选中样式

```css
// 注意只能修改这两个属性 字体颜色 选中背景颜色

element::selection {
  color: green;
  background-color: pink;
}
```



### 顶角贴纸效果

html

```html
<div class="wrap">
  <div class="ribbon">
    <a href="#">Fork me on GitHub</a>
  </div>
</div>
```

css

```css
/* 外层容器几本设置  */
.wrap {
  width: 160px;
  height: 160px;
  overflow: hidden;
  position: relative;
  background-color: #f3f3f3;
}

.ribbon {
  background-color: #a00;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  /* shadom */
  box-shadow: 0 0 10px #888;
  /* rotate */
  transform: rotate(-45deg);
  /* position */
  left: -50px;
  top: 40px;
}

.ribbon a {
  border: 1px solid #faa;
  color: #fff;
  display: block;
  font: bold 81.25% "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 1px 0;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  /* shadow */
  text-shadow: 0 0 5px #444;
}
```



### input占位符

```css
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: green;
  background-color: #f9f7f7;
  font-size: 14px;
}
input::-moz-input-placeholder,
textarea::-moz-input-placeholder{
  color: green;
  background-color: #f9f7f7;
  font-size: 14px;
}
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: green;
  background-color: #f9f7f7;
  font-size: 14px;
}
```



### 移动端可点击元素去除默认边框

```css
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
```



### 首字下沉

```css
element:first-letter {
  float: left;
  color: green;
  font-size: 30px;
}
```



### 小三角

```css
.triangle {
  /* 基础样式 */
  border: solid 10px transparent;
}
/*下*/
.triangle.bottom {
  border-top-color: green;
}
/*上*/
.triangle.top {
  border-bottom-color: green;
}
/*左*/
.triangle.top {
  border-right-color: green;
}
/*右*/
.triangle.top {
  border-left-color: green;
}
```



### 鼠标手型

```css
a[href],
input[type="submit"],
input[type="image"],
input[type="button"],
label[for],
select,
button {
  cursor: pointer;
}
```



### 屏蔽webkit移动浏览器中元素高亮效果

```css
user-select: none;
```



### 移除常用标签的浏览器默认的margin和padding

```css
body,
p,
h1,
h2,
h3,
h4,
h5,
h6,
dl,
dd,
ul,
ol,
th,
td,
button,
figure,
input,
textarea,
form {
  margin: 0;
  padding: 0;
}
```



### 统一 `input`、`select`、`textarea`宽度

```css
input,
select,
textarea {
  box-sizing: content-box;
}

table {
  /*table 相邻单元格的边框间的距离设置为 0*/
  border-spacing: 0;
  /*默认情况下给 tr 设置 border 没有效果，如果 table 设置了边框为合并模式：「border-collapse: collapse;」就可以了*/
  border-collapse: collapse;
}
```



### 移除浏览器部分元素的默认边框

```css
img,
input,
button,
textarea {
  border: none;
  -webkit-appearance: none;
}

input {
  /*由于 input 默认不继承父元素的居中样式，所以设置：「text-align: inherit」*/
  text-align: inherit;
}

textarea {
  /*textarea 默认不可以放缩*/
  resize: none;
}
```



### 取消元素`outline`样式

```css
a,
h1,
h2,
h3,
h4,
h5,
h6,
input,
select,
button,
option,
textarea,
optgroup {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  line-height: inherit;
  color: inherit;
  outline: none;
}
```



### 取消超链接元素的默认文字装饰

```css
a {
  text-decoration: none;
}

ol,
ul {
  /*开发中 UI 设计的列表都是和原生的样式差太多，所以直接给取消 ol，ul 默认列表样式*/
  list-style: none;
}

button,
input[type="submit"],
input[type="button"] {
  /*鼠标经过是「小手」形状表示可点击*/
  cursor: pointer;
}

input::-moz-focus-inner {
  /*取消火狐浏览器部分版本 input 聚焦时默认的「padding、border」*/
  padding: 0;
  border: 0;
}
```



### 取消部分浏览器数字输入控件的操作按钮

```css
input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
```



### `position:fixed`的缩写

```css
.pf {
  position: fixed;
  /*chrome 内核 浏览器 position: fixed 防止抖动*/
  -webkit-transform: translateZ(0);
}
```



### 利用绝对定位宽高拉升原理，中心居中元素

```css
.middle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```



### 利用相对定位于CSS3使元素垂直居中

```css
v-middle {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
```



### 元素计算宽高的盒子模型以 border 为外界限「bb ==> border-box」

```css
.box {
  box-sizing: border-box;
}
```



### 初始化样式

```css
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5 tahoma, arial, \5b8b\4f53;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}
small {
  font-size: 12px;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```



### 强制换行/自动换行/强制不换行

```css
/* 强制不换行 */
div {
  white-space: nowrap;
}

/* 自动换行 */
div {
  word-wrap: break-word;
  word-break: normal;
}

/* 强制英文单词断行 */
div {
  word-break: break-all;
}
```



### table边界的样式

```css
table {
  border: 1px solid #000;
  padding: 0;
  border-collapse: collapse;
  table-layout: fixed;
  margin-top: 10px;
}
table td {
  height: 30px;
  border: 1px solid #000;
  background: #fff;
  font-size: 15px;
  padding: 3px 3px 3px 8px;
  color: #000;
  width: 160px;
}
```



### 垂直居中`line-height`

```css
.container {
  width: 300px;
  height: 200px;
  border: 1px solid #333333;
}
.content {
  line-height: 200px;
}
```



### 垂直居中 - `table`布局

```css
.container {
  width: 300px;
  height: 200px;
  border: 1px solid #333333;
  display: table;
}
.content {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```



### 垂直居中 - `flex`布局

```css
.container {
  width: 300px;
  height: 200px;
  border: 1px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  background-color: #ccc;
  text-align: center;
}
```



### 图片上下左右居中

```css
.content {
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
```



### 标题两边的小横杠

html

```html
<div class="title">标题</div>
```

css

```css
title {
  color: #e1767c;
  font-size: 0.3rem;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    border-top: 0.02rem solid #e1767c;
    width: 0.4rem;
  }
  &:before {
    margin-left: -1.2rem;
  }
  &:after {
    margin-left: 1.2rem;
  }
}
```



### 用`border`属性绘制元素

```css
.triangle1 {
  /*锐角三角形*/
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 100px solid #249ff1;
  border-left: 30px solid transparent;
  border-right: 100px solid transparent;
}
.triangle2 {
  /*直角三角形*/
  width: 0;
  height: 0;
  border-top: 80px solid transparent;
  border-bottom: 80px solid #ff5b01;
  border-left: 50px solid #ff5b01;
  border-right: 50px solid transparent;
}
.trapezoid {
  /*梯形*/
  width: 0;
  height: 0;
  border-top: none;
  border-right: 80px solid transparent;
  border-bottom: 60px solid #13dbed;
  border-left: 80px solid #13dbed;
}
```



### 用`border-radius`绘制元素

```css
.circle,
.ellipse {
  width: 100px;
  height: 100px;
  background: #249ff1;
  border-radius: 50%;
}
.ellipse {
  width: 150px;
  background: #ff9e01;
}
```



### 用`box-shadow`绘制元素

对于`box-shadow`，其完整的声明为`box-shadow: h-shadow v-shadow blur spread color inset`,各个值表示的意义分别为：s 水平方向的偏移，垂直方向的便宜，模糊的距离（羽化值），阴影的大小（不设置或为 0 时阴影与主体的大小一致），阴影的颜色和是否使用内阴影。实际应用时可以接收 3-6 个值，对应分别如下：

- 3 个值： h-shadow v-shadow color
- 4 个值： h-shadow v-shadow blur color
- 5 个值： h-shadow v-shadow blur spread color
- 6 个值： h-shadow v-shadow blur spread color inset

同时，`border-shadow`接受由多个以上各种值组成的以逗号分隔的值，通过这一特性，我们可以实现如多重边框的等效果。以下我们用该属性来实现一个单标签且不借助伪元素的**添加图标**和**代表目标的的图标**。

```css
.plus {
  width: 30px;
  height: 30px;
  margin-left: 50px; /*由于box-shadow不占空间，常常需要添加margin来校正位置*/
  background: #000;
  box-shadow: 0 -30px 0 red, 0 30px 0 red, -30px 0 0 red, 30px 0 0 red;
}
.target {
  width: 30px;
  height: 30px;
  background: red;
  border-radius: 50%;
  margin-left: 50px;
  box-shadow: 0 0 0 10px #fff, 0 0 0 20px red, 0 0 0 30px #fff, 0 0 0 40px red;
}
```



### 使用`CSS`渐变来绘制图标

```css
.gradient {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: silver;
  background-image: linear-gradient(335deg, #b00 23px, transparent 23px),
    linear-gradient(155deg, #d00 23px, transparent 23px), linear-gradient(
      335deg,
      #b00 23px,
      transparent 23px
    ), linear-gradient(155deg, #d00 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
}
```



- 杯子

  ```css
  .cup {
    display: inline-block;
    width: 0.9em;
    height: 0.4em;
    border: 0.25em solid;
    border-bottom: 1.1em solid;
    border-radius: 0 0 0.25em 0.25em;
  }
  cup:before {
    position: absolute;
    right: -0.6em;
    top: 0;
    width: 0.3em;
    height: 0.8em;
    border: 0.25em solid;
    border-left: none;
    border-radius: 0 0.25em 0.25em 0;
    content: "";
  }
  ```

- 心形

  ```css
  .heart {
    display: inline-block;
    margin-top: 1.5em;
    width: 50px;
    height: 50px;
    background: green;
  }
  .heart:before,
  .heart:after {
    position: absolute;
    width: 1em;
    height: 1.6em;
    background: #000;
    border-radius: 50% 50% 0 0;
    content: "";
    bottom: 0;
  }
  .heart:before {
    -webkit-transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    right: 0;
    background: red;
    opacity: 0.5;
    z-index: 5;
  }
  .:after {
    -webkit-transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    left: 0;
    opacity: 0.8;
  }
  ```

- 相机

  ```css
  .camera {
    display: inline-block;
    border-style: solid;
    border-width: 0.65em 0.9em;
    border-radius: 0.1em;
  }
  .camera:before {
    position: absolute;
    top: -0.3em;
    left: -0.3em;
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    border: 0.1em solid #fff;
    box-shadow: 0 0 0 0.08em, 0 0 0 0.16em #fff;
    content: "";
  }
  .camera:after {
    position: absolute;
    top: -0.5em;
    left: 0.5em;
    width: 0.2em;
    border-top: 0.125em solid #fff;
    content: "";
  }
  ```

- 月亮

  ```css
  .moon {
    display: inline-block;
    height: 1.5em;
    width: 1.5em;
    box-shadow: inset -0.4em 0 0;
    border-radius: 2em;
    transform: rotate(20deg);
  }
  ```

  

### 继承类

```css
.inherit-width {
  width: inherit;
}
.inherit-min-width {
  min-width: inherit;
}
.inherit-height {
  height: inherit;
}
.inherit-min-height {
  min-height: inherit;
}
.inherit-color {
  color: inherit;
}
```



### 文本缩进

```css
.text-indent {
  text-indent: 2rem;
}
```



### 图片、视频规范

```css
.img-max,
.video-max {
  width: 100%;
  height: auto;
}
```



### 阴影效果

```css
.shadow-text-xs {
  text-shadow: 4px 3px 0 #1d9d74, 9px 8px 0 rgba(0, 0, 0, 0.15);
} /*智能兼容ie10以上 暂不考虑*/

.shadow-xs {
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=1, Direction=100, Color='#cccccc')"; /* For IE 8 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=1, Direction=100, Color='#cccccc'); /* For IE 5.5 - 7 */
  -moz-box-shadow: 1px 1px 2px #cccccc; /* for firefox */
  -webkit-box-shadow: 1px 1px 2px #cccccc; /* for safari or chrome */
  box-shadow: 1px 1px 2px #cccccc; /* for opera or ie9 */
}
.shadow-sm {
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=120, Color='#cccccc')"; /* For IE 8 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=120, Color='#cccccc'); /* For IE 5.5 - 7 */
  -moz-box-shadow: 2px 2px 3px #cccccc; /* for firefox */
  -webkit-box-shadow: 2px 2px 3px #cccccc; /* for safari or chrome */
  box-shadow: 2px 2px 3px #cccccc; /* for opera or ie9 */
}
.shadow-md {
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#cccccc')"; /* For IE 8 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#cccccc'); /* For IE 5.5 - 7 */
  -moz-box-shadow: 3px 3px 5px #cccccc; /* for firefox */
  -webkit-box-shadow: 3px 3px 5px #cccccc; /* for safari or chrome */
  box-shadow: 3px 3px 5px #cccccc; /* for opera or ie9 */
}
.shadow-lg {
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=5, Direction=150, Color='#cccccc')"; /* For IE 8 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=5, Direction=150, Color='#cccccc'); /* For IE 5.5 - 7 */
  -moz-box-shadow: 5px 5px 8px #cccccc; /* for firefox */
  -webkit-box-shadow: 5px 5px 8px #cccccc; /* for safari or chrome */
  box-shadow: 5px 5px 8px #cccccc; /* for opera or ie9 */
}
```



