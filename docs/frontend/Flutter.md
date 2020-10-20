# Flutter

## 安装第三方包步骤: 
```
  1: 在文件 pubspec.yaml 添加对应的包名(类似于PHP的composer)
  2: flutter packages get (类似于composer install )
  3: 在文件中引用 import “包名”
```
## Stateless Widgets
Stateless Widgets 是不可改变的，这意味着它们的属性不能改变——所有的值都是 final 的
## StatefulWidget
StatefulWidget 在其生命周期保持的状态可能会变化，实现一个有状态的 widget 至少需要两个类：StatefulWidgets类和State类，其中StatefulWidgets类创建了一个State类的实例。StatefulWidget类本身是不可变的，但State类可存在于Widget的整个生命周期中

# 变量说明

变量以下划线(_)开头，在 Dart 语言中使用下划线前缀表示强制私有。
在 Flutter 的响应式风格框架中，调用 setState() ，将为 State 对象触发 build() 方法的调用，从而实现对UI的更新。


## 静态资源文件需要在 pubspec.yaml

## Expanded 控件具有 flex 属性，它是一个整数，用于确定控件的弹性因子。Expanded 控件的默认弹性因子是1

## mainAxisAlignment 与 crossAxisAlignment  属性来控制行或列如何对齐其子控件
## 对于行，主轴水平运行，横轴垂直运行。对于列，主轴垂直运行，横轴水平运行。

默认情况下，行或列沿着其主轴占据尽可能多的空间，但如果要将子控件紧密挤压一起，请将 mainAxisSize 设置为MainAxisSize.min


Widget 和 Widget 之间通过 child:进行嵌套。其中有的 Widget 只能有一个 child，比如下方的 Container；有的 Widget 可以多个 child ，也就是children:，比如` Colum 布局。下方代码便是 Container Widget 嵌套了 Text Widget。


## State 中主要的声明周期有 ：
```
* initState ：初始化，理论上只有初始化一次，第二篇中会说特殊情况下。
* didChangeDependencies：在 initState 之后调用，此时可以获取其他 State 。
* dispose ：销毁，只会调用一次。
```


Flutter 其实就是这么简单！你的关注点只要在：创建你的 StatelessWidget 或者 StatefulWidget 而已。你需要的就是在 build 中堆积你的布局，然后把数据添加到 Widget 中，最后通过 setState 改变数据，从而实现画面变化。
类型
作用特点
Container
只有一个子 Widget。默认充满，包含了padding、margin、color、宽高、decoration 等配置。
Padding
只有一个子 Widget。只用于设置Padding，常用于嵌套child，给child设置padding。
Center
只有一个子 Widget。只用于居中显示，常用于嵌套child，给child设置居中。
Stack
可以有多个子 Widget。 子Widget堆叠在一起。
Colum
可以有多个子 Widget。垂直布局。
Row
可以有多个子 Widget。水平布局。
Expanded
只有一个子 Widget。在 Colum 和 Row 中充满。
ListView
可以有多个子 Widget。自己意会吧。


标准控件

* 
Container
可以将内边距，外边距，边框，背景颜色或其他装饰添加到控件。类似 div
Container 总结:
        * 添加内边距，外边距和边框
        * 改变背景颜色和背景图像
        * 可以容纳一个子控件，这个控件也可以是 Row 或 Column ，甚至控件树的根结点。
* 最常用的默认布局！只能包含一个child:，支持配置 padding,margin,color,宽高,decoration（一般配置边框和阴影）等配置，在 Flutter 中，不是所有的控件都有 宽高、padding、margin、color等属性，所以才会有 Padding、Center 等 Widget 的存在。



Color和decoration的。根据源码中的注释，这俩参数是不能同时赋值的，color参数本身就是new BoxDecoration（color： color）的简写方式。不管是给color赋值还是给decoration赋值，最终都将会影响到decoration，如果两个参数都没有赋值的话则decoration为null

BoxConstraints constraints参数 如果width和height都没有定义的话，则constraints就取它自己本身的值，如果constraints也没赋值，就为null。 如果constraints没有赋值，只写了width（或height），则会直接创建一个尽可能小的BoxConstraint



## Image组件的使用
    加入图片的几种方式
        Image.asset:
               Image.network
               Image.file
               Image.memory
BoxFit.fill:全图显示，图片会被拉伸，并充满父容器。
BoxFit.contain:全图显示，显示原比例，可能会有空隙。
BoxFit.cover：显示可能拉伸，可能裁切，充满（图片要充满整个容器，还不变形）。
BoxFit.fitWidth：宽度充满（横向充满），显示可能拉伸，可能裁切。
BoxFit.fitHeight ：高度充满（竖向充满）,显示可能拉伸，可能裁切。
BoxFit.scaleDown：效果和contain差不多，但是此属性不允许显示超过源图片大小，可小不可大。
图片混合模式（colorBlendMode）和 color属性配合使用，能让图片改变颜色

ImageRepeat.repeat : 横向和纵向都进行重复，直到铺满整个画布。
ImageRepeat.repeatX: 横向重复，纵向不重复。
ImageRepeat.repeatY：纵向重复，横向不重复。


Colum、Row 绝对是必备布局， 横竖布局也是日常中最常见的场景。如下方所示，它们常用的有这些属性配置：主轴方向是 start 或 center 等；副轴方向方向是 start 或 center 等；mainAxisSize 是充满最大尺寸，或者只根据子 Widget 显示最小尺寸。

* Expanded 在 Colum 和 Row 中代表着平均充满，当有两个存在的时候默认均分充满。同时页可以设置 flex 属性决定比

。
类型
作用特点
MaterialApp
一般作为APP顶层的主页入口，可配置主题，多语言，路由等
Scaffold
一般用户页面的承载Widget，包含appbar、snackbar、drawer等material design的设定。
Appbar
一般用于Scaffold的appbar ，内有标题，二级页面返回按键等，当然不止这些，tabbar等也会需要它 。
Text
显示文本，几乎都会用到，主要是通过style设置TextStyle来设置字体样式等。
RichText
富文本，通过设置TextSpan，可以拼接出富文本场景。
TextField
文本输入框 ：new TextField(controller: //文本控制器, obscureText: "hint文本");
Image
图片加载: new FadeInImage.assetNetwork( placeholder: "预览图", fit: BoxFit.fitWidth, image: "url");
FlatButton
按键点击: new FlatButton(onPressed: () {},child: new Container());



///不带参数的路由表跳转
Navigator.pushNamed(context, routeName);

///跳转新页面并且替换，比如登录页跳转主页
Navigator.pushReplacementNamed(context, routeName);

///跳转到新的路由，并且关闭给定路由的之前的所有页面
Navigator.pushNamedAndRemoveUntil(context, '/calendar', ModalRoute.withName('/'));

///带参数的路由跳转，并且监听返回
Navigator.push(context, new MaterialPageRoute(builder: (context) => new NotifyPage())).then((res) {
      ///获取返回处理
    });

Navigator 的 push 返回的是一个 Future，这个Future 的作用是在页面返回时被调用的。也就是你可以通过 Navigator 的 pop 时返回参数，之后在 Future 中可以的监听中处理页面的返回结果。
网络请求  dio


///创建网络请求对象
    Dio dio = new Dio();
    Response response;
    try {
      ///发起请求
      ///url地址，请求数据，一般为Map或者FormData
      ///options 额外配置，可以配置超时，头部，请求类型，数据响应类型，host等
      response = await dio.request(url, data: params, options: option);
    } on DioError catch (e) {
      ///http错误是通过 DioError 的catch返回的一个对象
    }
相信在前端领域、Redux 并不是一个陌生的概念。作为全局状态管理机，用于 Flutter 中再合适不过
1、返回按键监听
Flutter 中 ，通过WillPopScope 嵌套，可以用于监听处理 Android 返回键的逻辑。其实 WillPopScope 并不是监听返回按键，如名字一般，是当前页面将要被pop时触发的回调。
通过onWillPop回调返回的Future，判断是否响应 pop 。下方代码实现按下返回键时，弹出提示框，按下确定退出App
2、前后台监听

WidgetsBindingObserver 包含了各种控件的生命周期通知，其中的 didChangeAppLifecycleState 就可以用于做前后台状态监听。
3、键盘焦点处理

一般触摸收起键盘也是常见需求，如下代码所示， GestureDetector + FocusScope可以满足这一需求。
4、启动页

IOS启动页，在ios/Runner/Assets.xcassets/LaunchImage.imageset/下， 有 Contents.json 文件和启动图片，将你的启动页放置在这个目录下，并且修改 Contents.json 即可，具体尺寸自行谷歌即可。
Android启动页，在 android/app/src/main/res/drawable/launch_background.xml 中已经有写好的启动页，<item><bitmap> 部分被屏蔽，只需要打开这个屏蔽，并且将你启动图修改为launch_image并放置到各个 mipmap 文件夹即可，记得各个文件夹下提供相对于大小尺寸的文件。

* 
GridView
         childAspectRatio:宽高比这个值的意思是宽是高的多少倍，如果宽是高的2倍，那我们就写2.0，如果高是宽的2倍，我们就写0.5

可以将控件布局为可滚动的表格。
        GridView 总结:

        * 在网格中布局控件
        * 检测到垂直内容何时超过渲染框并自动提供滚动
        * 构建您自己的自定义网格，或使用以下框架提供的网格：
            * GridView.count 允许您指定列数
            * GridView.extent 允许您指定单元格的最大像素宽度


row控件就是水平控件，它可以让Row里边的子元素进行水平排列
需要与 Expanded (灵活布局)

Column组件即垂直布局控件，能够将子组件垂直排列。

* CrossAxisAlignment.star：居左对齐。
* CrossAxisAlignment.end：居右对齐。
* CrossAxisAlignment.center：居中对齐

水平居中用Center()
* main轴：如果你用column组件，那垂直就是主轴，如果你用Row组件，那水平就是主轴。
* cross轴：cross轴我们称为幅轴，是和主轴垂直的方向。比如Row组件，那垂直就是幅轴，Column组件的幅轴就是水平方向的

alignment属性是控制层叠的位置的，建议在两个内容进行层叠时使用。它有两个值X轴距离和Y轴距离，值是从0到1的，都是从上层容器的左上角开始算起的

CircleAvatar这个经常用来作头像的，组件里边有个radius的值可以设置图片的弧度



Positioned组件的属性
    * bottom: 距离层叠组件下边的距离
    * left：距离层叠组件左边的距离
    * top：距离层叠组件上边的距离
    * right：距离层叠组件右边的距离
    * width: 层叠定位组件的宽度
    * height: 层叠定位组件的高度


* 
ListView

是一个类似 Column 的控件，当它的内容对于其渲染框太长时会自动提供滚动
        ListView 总结:

        * 一个类似 Column 布局的控件
        * 可以在水平或垂直方向上进行布局
        * 内容超长时可以提供滚动
        * 比 Column 更少配置，但更易于使用并支持滚动
* 
Stack
可以将控件覆盖到另一个控件上
        Stack 总结:

            * 用于与另一个控件重叠的控件
            * 控件列表的第一个控件是基础控件，其他的控件都会覆盖到该控件上
            * Stack 的内容是不能滚动的
            * 你可以选择剪切超过渲染框的内容
Material组件

* 
Card
可以在带圆角和投影的盒子中进行布局。
        Card 总结:

        * 实现了 Material Design Card 的控件
        * 用于呈现相关信息的块
        * 只接受单个子控件，但该控件可以是Row，Column或其他包含子级列表的控件
        * 显示圆角和阴影
        * Card 的内容不能滚动
        * 来自 Material 组件库

卡片式布局默认是撑满整个外部容器的，如果你想设置卡片的宽高，需要在外部容器就进行制定

* 
ListTile
包括三行文本，可选图标和标题
        ListTile 总结:

        * 包含最多3行文本和可选图标的专用行
        * 比 Row 更少的配置，但更易于使用
        * 来自 Material 组件库

ListTile实现内部列表，这里需要说明的是ListTile不光可以使用在ListView组件中，然后容器组件其实都可以使用

RaisedButton按钮组件

* child：可以放入容器，图标，文字。让你构建多彩的按钮。
* onPressed：点击事件的相应，一般会调用Navigator组件。

在作页面导航时，大量的使用了RaisedButton组件，这个组件的使用在实际工作中用的也比较多








Widget状态管理

* 小部件管理自己的状态
        
    * Manages state for TapboxA.
    * Defines the _active boolean which determines the box’s current color.
    * Defines the _handleTap() function, which updates _active when the box is tapped and calls the setState() function to update the UI.
    * Implements all interactive behavior for the widget.

* 父级管理小部件的状态
    * The ParentWidgetState class:
        * Manages the _active state for TapboxB.
        * Implements _handleTapboxChanged(), the method called when the box is tapped.
        * When the state changes, calls setState() to update the UI.
    * The TapboxB class:
        * Extends StatelessWidget because all state is handled by its parent.
        * When a tap is detected, it notifies the parent.
* 混合搭配的方法
    * The _ParentWidgetState object:
        * Manages the _active state.
        * Implements _handleTapboxChanged(), the method called when the box is tapped.
        * Calls setState() to update the UI when a tap occurs and the _active state changes.
    * The _TapboxCState object:
        * Manages the _highlight state.
        * The GestureDetector listens to all tap events. As the user taps down, it adds the highlight (implemented as a dark green border). As the user releases the tap, it removes the highlight.
        * Calls setState() to update the UI on tap down, tap up, or tap cancel, and the _highlight state changes.
        * On a tap event, passes that state change to the parent widget to take appropriate action using thewidget property.

您如何决定使用哪种方法？以下原则可以帮助您做出决定：
* 如果所讨论的状态是用户数据，例如复选框的已选中或未选中模式，或滑块的位置，则状态最好由父窗口小部件管理。
* 如果有问题的状态是美学的，例如动画，那么状态最好由小部件本身管理
页面跳转 Navigator!
    跳转到新页面 =》 Navigator.push
    返回到上一页 =》Navigator.pop

* Navigator.push：是跳转到下一个页面，它要接受两个参数一个是上下文context，另一个是要跳转的函数。
* Navigator.pop：是返回到上一个页面，使用时传递一个context（上下文）参数，使用时要注意的是，你必须是有上级页面的，也就是说上级页面使用了Navigator.push





div => child

background-color: #e0e0e0;  /* grey 300 */ 
=> 等价于
color: Colors.grey[300],



display: flex;
align-items: center;
justify-content: center; 
=> 等价于
Center(
    child:  Text(
      "Lorem ipsum",
      style: bold24Roboto,
    ),
  ),


width: 320px; =>  width: 320.0


position: relative; => Stack()



position: absolute;
top: 24px;
left: 24px; 
=>
children: [
      Positioned( // red box
        child: Container(),
        left: 24.0,
        top: 24.0,
     )


transform: rotate(15deg)
=>
Transform(
      child:  Container(),
      alignment: Alignment.center,
      transform: Matrix4.identity()
        ..rotateZ(15 * 3.1415927 / 180),
)



transform: scale(1.5)
=>
child:  Transform(
      child:  Container(),
       alignment: Alignment.center,
      transform: Matrix4.identity()
        ..scale(1.5),
)

background: linear-gradient(180deg, #ef5350, rgba(0, 0, 0, 0) 80%);
=>
decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: const Alignment(0.0, -1.0),
          end: const Alignment(0.0, 0.6),
          colors: <Color>[
            const Color(0xffef5350),
            const Color(0x00ef5350)
          ],
        ),
      ),


background: linear-gradient(90deg, #ef5350, rgba(0, 0, 0, 0) 80%); 
=>
decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: const Alignment(-1.0, 0.0),
          end: const Alignment(0.6, 0.0),
          colors: <Color>[
            const Color(0xffef5350),
            const Color(0x00ef5350)
          ],
        ),
      ),


border-radius: 8px; 
=>
borderRadius: BorderRadius.all(
          const Radius.circular(8.0),
        ),




 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8),
              0 6px 20px rgba(0, 0, 0, 0.5);
=>

boxShadow: <BoxShadow>[
          BoxShadow (
            color: const Color(0xcc000000),
            offset: Offset(0.0, 2.0),
            blurRadius: 4.0,
          ),
          BoxShadow (
            color: const Color(0x80000000),
            offset: Offset(0.0, 6.0),
            blurRadius: 20.0,
          ),
        ], 


text-align: center;  => textAlign: TextAlign.center, 

border-radius: 50%;  =>   shape: BoxShape.circle, 

letter-spacing: 4px; => letterSpacing: 4.0, 



overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 

=>

 overflow: TextOverflow.ellipsis,
        maxLines: 1, 




Lorem <em>ipsum</em> 
=>
    child:  RichText(
        text: TextSpan(
          style: bold24Roboto,
          children: <TextSpan>[
            TextSpan(text: "Lorem "),
            TextSpan(
              text: "ipsum",
              style: TextStyle(
                fontWeight: FontWeight.w300,
                fontStyle: FontStyle.italic,
                fontSize: 48.0,
              ),
            ),
          ],
        ),
      ), 


1、AppBar

在 Flutter 中 AppBar 算是常用 Widget ，而 AppBar 可不仅仅作为标题栏和使用，AppBar上的 leading 和 bottom 同样是有用的功能。
* AppBar 的 bottom 默认支持 TabBar, 也就是常见的顶部 Tab 的效果，这其实是因为TabBar 实现了 PreferredSizeWidget的 preferredSize。 所以只要你的控件实现了 preferredSize，就可以放到 AppBar 的  bottom 中使用。比如下图搜索栏，这是TabView下的页面又实用了AppBar。
* leading ：通常是左侧按键，不设置时一般是 Drawer 的图标或者返回按钮。
* flexibleSpace ：位于 bottom 和 leading 之间。
2、按键

Flutter 中的按键，如 FlatButton 默认是否有边距和最小大小的。所以如果你想要无 padding、margin、border 、默认大小 等的按键效果，其中一种方式如下：
///
new RawMaterialButton(
        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
        padding: padding ?? const EdgeInsets.all(0.0),
        constraints: const BoxConstraints(minWidth: 0.0, minHeight: 0.0),
        child: child,
        onPressed: onPressed);
如果在再上 Flex ，如下所示，一个可控的填充按键就出来了。
new RawMaterialButton(
        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
        padding: padding ?? const EdgeInsets.all(0.0),
        constraints: const BoxConstraints(minWidth: 0.0, minHeight: 0.0),
        ///flex
        child: new Flex(
          mainAxisAlignment: mainAxisAlignment,
          direction: Axis.horizontal,
          children: <Widget>[],
        ),
        onPressed: onPressed);
3、StatefulWidget 赋值

这里我们以给 TextField 主动赋值为例，其实 Flutter 中，给有状态的 Widget 传递状态或者数据，一般都是通过各种 controller 。如 TextField 的主动赋值，如下代码所示：
final TextEditingController controller = new TextEditingController();

 @override
 void didChangeDependencies() {
    super.didChangeDependencies();
    ///通过给 controller 的 value 新创建一个 TextEditingValue
    controller.value = new TextEditingValue(text: "给输入框填入参数");
 }

 @override
  Widget build(BuildContext context) {
    return new TextField(
     ///controller
      controller: controller,
      onChanged: onChanged,
      obscureText: obscureText,
      decoration: new InputDecoration(
        hintText: hintText,
        icon: iconData == null ? null : new Icon(iconData),
      ),
    );
  }
其实 TextEditingValue 是 ValueNotifier，其中 value 的 setter 方法被重载，一旦改变就会触发 notifyListeners 方法。而 TextEditingController 中，通过调用 addListener 就监听了数据的改变，从而让UI更新。
当然，赋值有更简单粗暴的做法是：传递一个对象 class A 对象，在控件内部使用对象 A.b 的变量绑定控件，外部通过 setState({ A.b = b2}) 更新。
4、GlobalKey

在Flutter中，要主动改变子控件的状态，还可以使用 GlobalKey。 比如你需要主动调用 RefreshIndicator 显示刷新状态，如下代码所示。
GlobalKey<RefreshIndicatorState> refreshIndicatorKey;

 showForRefresh() {
    ///显示刷新
    refreshIndicatorKey.currentState.show();
  }

  @override
  Widget build(BuildContext context) {
    refreshIndicatorKey =  new GlobalKey<RefreshIndicatorState>();
    return new RefreshIndicator(
      key: refreshIndicatorKey,
      onRefresh: onRefresh,
      child: new ListView.builder(
        ///·····
      ),
    );
  }
5、Redux 与主题

使用 Redux 来做 Flutter 的全局 State 管理最合适不过，由于Redux内容较多，如果感兴趣的可以看看 篇章二 ，这里主要通过 Redux 来实现实时切换主题的效果。
如下代码，通过 StoreProvider 加载了 store ，再通过 StoreBuilder 将 store 中的 themeData 绑定到 MaterialApp 的 theme 下，之后在其他 Widget 中通过 Theme.of(context) 调你需要的颜色，最终在任意位置调用 store.dispatch 就可实时修改主题，效果如后图所示。
class FlutterReduxApp extends StatelessWidget {
  final store = new Store<GSYState>(
    appReducer,
    initialState: new GSYState(
      themeData: new ThemeData(
        primarySwatch: GSYColors.primarySwatch,
      ),
    ),
  );

  FlutterReduxApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    /// 通过 StoreProvider 应用 store
    return new StoreProvider(
      store: store,
      ///通过 StoreBuilder 获取 themeData
      child: new StoreBuilder<GSYState>(builder: (context, store) {
        return new MaterialApp(
            theme: store.state.themeData,
            routes: {
              HomePage.sName: (context) {
                return HomePage();
              },
            });
      }),
    );
  }
}
6、Hotload 与 Package

Flutter 在 Debug 和 Release 下分别是 JIT 和 AOT 模式，而在 DEBUG 下，是支持 Hotload 的，而且十分丝滑。但是需要注意的是：如果开发过程中安装了新的第三方包 ，而新的第三方包如果包含了原生代码，需要停止后重新运行哦。
pubspec.yaml 文件下就是我们的包依赖目录，其中 ^ 代表大于等于，一般情况下 upgrade 和 get 都能达到下载包的作用。但是：upgrade 会在包有更新的情况下，更新 pubspec.lock 文件下包的版本 。


1、Android打包

在Android的打包上，笔者基本没有遇到什么问题，在android/app/build.grade文件下，配置applicationId、versionCode、versionName 和签名信息，最后通过 flutter build app 即可完成编译。编程成功的包在 build/app/outputs/apk/release 下





插件

屏幕适配 : flutter_screenutil

轮播插件 : flutter_swiper








