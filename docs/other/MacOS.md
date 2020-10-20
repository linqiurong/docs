# MacOS
## Mac 终端命令
```shell
1、将光标移动到行首：ctrl + a
2、将光标移动到行尾：ctrl + e
3、清除屏幕：                ctrl + l
4、搜索以前使用命令：ctrl + r
5、清除当前行：            ctrl + u
6、清除至当前行尾：    ctrl + k
7、单词为单位移动：option + 方向键
```

## locate 更新库 
```shell
使用:sudo /usr/libexec/locate.updatedb
```

## 如何 更新 zsh
```shell 
1: cd ~/.oh-my-zsh
2: git pull
3: upgrade_oh_my_zsh
```

## brew 慢
设置代理 与 shadowsocks 
打开 shadowsocks 点高级设置 查看socks5 代理地址与端口

export ALL_PROXY=socks5://127.0.0.1:1086

https://www.cnblogs.com/xjnotxj/p/7478614.html


## /usr/bin 无权限问题
```shell
sudo chown -R $(whoami):admin /usr/local
```
```shell
brew install cmatrix // 中毒效果

brew install sl // 火车效果

brew install archey // 苹果 => ip不显示 => vim /usr/local/Cellar/archey/XXX/bin/archey =>把 eth0.me 修改为 ip.cn

```

## Workbench 不显示数据库
```shell
cd ~/Library/Application\ Support/MySQL/Workbench/

rm wb_state.xml

rm wb_options.xml

```


## Macos 缺少 freetype
```shell
curl -s http://php-osx.liip.ch/install.sh | bash -s 5.6
```

## 清理DNS缓存
```shell
sudo killall -HUP mDNSResponder; sleep 2;
```


