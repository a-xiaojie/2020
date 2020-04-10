# Mac 下使用homebrew 安装node后全局安装找不到问题

Homebrew 是mac上的包管理工具，其官网；

http://brew.sh/

在使用brew安装node之后安装一些常见工具比如 gulp

```
npm install -g gulp
```

提示安装成功之后 ，使用发现不存在comman gulp,这个时候我们要检查下npm全局路径在哪里

```
npm root -g
```

正常的路径应该是  `/usr/local/lib/node_modules`，如果你的不是就要重新指定：

```
npm config set prefix /usr/local
```

然后在执行检查路径的方法看看是不是正常了呢？问题搞定~