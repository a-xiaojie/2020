# Flexbox布局

## 背景

​		Flexbox 布局（也叫Flex布局，弹性盒子布局）模块（W3C候选推荐，截止到2017年10月）旨在提供一个更有效的布局、对齐方式，并且能够使容器中的子元素大小未知或动态变化情况下仍然能够分配好子元素之间的空间。

​		Flex布局的主要思想是使父容器能够调节子元素的宽度/高度（和排列顺序），从而能够最好的填充可用空间（主要是为了适应所有类型的显示设备和屏幕尺寸）。flex布局容器能够放大子元素使之尽可能填充可用空间，也可以收缩子元素，使之不溢出。

​		最重要的是，flexbox布局与方向无关，不同于常规布局（基于垂直的块（block）和基于水平的内联（inline））。虽然传统布局适用于页面，但它们对于大型或复杂的应用程序布局来说，缺乏灵活性（特别是在改变方向、调整大小、拉伸、收缩等方面）。



## 基础知识和术语

​		flexbox布局是一个完整的布局模块，而不是一个单独的属性，因此它涉及很多东西，包括它的整个属性集。其中有的属性是在容器（container，也可以叫做父元素，称为flex container）上设置的，有的则是在容器的子元素（item，也可以叫做子元素，称为flex items）设置。

​		如果“常规”布局基于block（块）和inline（内联）流动方向，flex布局则是基于“flex-flow(弹性流动)方向”

![image-20200407141724530](/Users/ouer/Library/Application Support/typora-user-images/image-20200407141724530.png)

在flex布局中，flex项（就是子元素）要么按照main axis(主轴)（从 `main-start` 到 `main-end`）排布，要么按照`cross axis`（交叉轴）（从`cross-start` 到 `cross-end`）排布

- **main axis**: flex容器的主轴，flex项沿着主轴排布，注意主轴不一定是水平的，主轴是水平还是垂直，取决于`flex-direction` 属性
- **main-start | main-end**: 分别表示主轴的开始位置和结束位置，flex项在容器中会从main-start 到main-end排布
- **main size**: flex项占据主轴的宽度或者高度。flex项的main size属性是要么是“宽度”，要么是“高度”，这取决于主轴方向
- **cross axis**: 垂直于主轴的轴线成为交叉轴，其方向取决于主轴方向
- **cross-start | cross-end**: 分别表示交叉轴的开始位置和结束位置，flex项在交叉轴上的排布从cross-start开始位置到cross-end结束位置
- **cross size**: flex项占据交叉轴的宽度货高度。flex项的cross size属性是要么是“宽度”，要么是“高度”，这取决于交叉轴方向



## 父元素属性（flex container）

![image-20200407145458384](/Users/ouer/Library/Application Support/typora-user-images/image-20200407145458384.png)

### display

​		用来定义一个flex容器，如果设置为flex，则容器呈现为块状元素，设置为inline-flex，则容器呈现为行内元素。它为所有直接子元素提供了flex上下文

CSS代码：

```css
.container { display: flex; /* or inline-flex */}
```

请注意，CSS列队flex容器没有影响



### flex-direction

![image-20200407145806700](/Users/ouer/Library/Application Support/typora-user-images/image-20200407145806700.png)

​		flex-direction 属性确立了主轴，从而定义了 flex 项在flex容器中的排布方向。Flexbox是单向布局，有些时候我们也称作一维布局。可以将flex项视为主要沿着水平行或垂直列排布。

CSS代码：

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse
}
```

- `row`（默认值）：行排布。在`ltr`(left to right，从左到右)排列方式下，flex项从左到右排列，在`rtl`(right to left，从右到左)排列方式下，flex项从右到左排列
- `row-reverse`：反向行排布，即 `row` 的反方向，在`ltr`中从右向左，在`rtl`中从左到右
- `column`：列排布，与`row`相似，但是flex项从上到下排布
- `column-reverse`：反向列排布，即`column`反方向，与`row-reverse`相似，只是flex项从下到上排布



### flex-wrap

![image-20200407160922670](/Users/ouer/Library/Application Support/typora-user-images/image-20200407160922670.png)

​		默认情况下，flex项会尽可能地尝试排在同一行上（行或列），通过设置flex-wrap来决定flex项是否需要换行

CSS代码：

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`（默认值）：所有的flex项都会在同一行上排布，也就是我们常说的单行，或不换行
- `wrap`：flex项将从上到下根据实际情况排布在多行上，也就是我们常说的多行，或者换行
- `wrap-reverse`：flex项将**从下到上** 根据实际情况排布在多行上折行



### flex-flow(适用于父级flex容器)

这是`flex-direction`和`flex-wrap`属性的缩写形式。同时定义flex容器的主轴和交叉轴，默认是`row` `nowrap`

CSS代码：

```css
flex-flow: <'flex-direction'> || <'flex-wrap'>
```



### justify-content	

![image-20200407161620157](/Users/ouer/Library/Application Support/typora-user-images/image-20200407161620157.png)

![image-20200407161634312](/Users/ouer/Library/Application Support/typora-user-images/image-20200407161634312.png)

![image-20200407161702356](/Users/ouer/Library/Application Support/typora-user-images/image-20200407161702356.png)

![image-20200407161718613](/Users/ouer/Library/Application Support/typora-user-images/image-20200407161718613.png)

![image-20200407161730479](/Users/ouer/Library/Application Support/typora-user-images/image-20200407161730479.png)

![image-20200407161829992](/Users/ouer/Library/Application Support/typora-user-images/image-20200407161829992.png)

`justify-content` 属性定义了flex项沿主轴方向的对齐方式

当一行中的所有flex项都是固定大小，或者是灵活大小但已经达到醉倒 main size 时，它可以帮助分配主轴上的剩余空间。当flex项溢出主轴的时候，它还可以用来控制flex项的对齐方式

CSS代码：

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

- `flex-start`（默认值）：flex项从主轴的位置（main-start）开始排布
- `flex-end`：flex项从主轴的结束位置（main-end）开始排布
- `center`：flex项沿主轴居中排布
- `space-between`：flex项沿主轴均匀排布，即我们常说的沿主轴**两端对齐**，第一个flex项在主轴的开始位置，最后一个flex项在主轴的结束位置
- `space-around`：flex项沿主轴均匀排布，要注意的是flex项看起来间隙不是均匀的，因为所有flex项两边的空间是相等的，第一项在容器边缘有一个单位的空间，但是在两个flex项之间有两个单位的间隙（因为每个flex项的两侧都有一个单位的间隙）
- `span-evenly`：任何两个flex项之间的间距（以及到flex容器边缘的空间）相等。（注：该属性以前很少看到，原因是以前浏览器不支持，chrome也是60版本之后才支持）



### align-items

![image-20200407162706726](/Users/ouer/Library/Application Support/typora-user-images/image-20200407162706726.png)







