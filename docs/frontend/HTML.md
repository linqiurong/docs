# HTML
## 认识HTML标签
```html
<!DOCTYPE html>：说明文件档类型
<html  lang=“en” ></html>：lang标签文件语言，可设置为中文“lang=“zh-cn”；区别在于，为en时，谷歌浏览器会出现“翻译选项”，为zh-ch不会出现
<head></head>：文档头部
<meta charset=“UTF-8”>：文档编码类型；UTF-8：国际通用语言、GB2312：中文
<body></body>：内容区域；即要显示在网页上的内容，全部放在body标签里面
<title>Document</title>：网站标题
```

## 必须的meta标签
```html
项目描述：<meta name="description" content="">
搜索关键字：<meta name="keywords" content="">
项目标签图标：<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```
## IE浏览器的渲染

```html
告诉IE浏览器，无论是否用DTD声明文档标准，IE8/9都会以IE7引擎来渲染页面。
<meta http-equiv="X-UA-Compatible" content="IE=7">

告诉IE浏览器，IE8/9都会以IE8引擎来渲染页面。
<meta http-equiv="X-UA-Compatible" content="IE=8">

告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面。
<meta http-equiv="X-UA-Compatible" content="IE=edge">

强制 IE 使用 Chrome Frame 渲染
<meta http-equiv="X-UA-Compatible" content="chrome=1">

最佳的兼容模式方案
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
```







