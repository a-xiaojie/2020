# 解决flex布局的space-evenly兼容性问题

```less
.container {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	&::before,
	&::after {
		content: '';
		display: block;
	}
}
```

#### space-evenly的作用是将每个元素的间隔相等, 但是兼容性较差,尤其是IOS,这种trick很好的解决了兼容性问题.

原理很好理解,假设有5个元素, space-evenly是将每个剩余空间平均分割,这样就有6个相同宽度的间隔空间,间隔空间数量 = n + 1;
 space-between是将最左边和最右边的元素分别占据最左边和最右边的空间,然后剩余空间平均分割,这样就有4个相同宽度的间隔空间, 间隔空间数量 = n -1;
 利用这种伪元素方式,在第一个元素前面和最后一个元素后面分别加上一个不占据空间的元素,这样就是5+2=7个元素, 相同宽度间隔空间数量为6,因为左右两边的元素不占据空间,所以,变相的实现了space-evenly的效果.



作者：LastStranger
链接：https://www.jianshu.com/p/bbd114834c59
来源：简书