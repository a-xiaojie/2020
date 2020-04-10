# Yeoman搭建发布自己的脚手架

## 构建脚手架详细步骤

### 1.安装必备工具

#### 安装yeoman

```js
yarn global add yo // 安装yeoman
yo --version // 查看版本
```



### 2.创建属于自己的`generator`

#### 创建文件目录

​		创建文件夹目录，文件夹名必须为generator-name, name是你创建的generator的名字。