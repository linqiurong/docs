# SSH
## 保持SSH连接
```
    vim /etc/ssh/ssh_config
    Host *
    ServerAliveInterval 120
    ServerAliveCountMax 16
```

## 远程登录 并执行一些命令

### 安装 sshpass
```shell
sshpass -p matchServer@2018 ssh -o StrictHostKeyChecking=no  root@wechat.saiwutong.com "cd /var/www/html/wechat.saiwutong.com/wshl/ ; git pull >> pull.log ; exit "
```

::: tip
基本能完成常用的对于远程节点的管理了，几个注意的点：

1:双引号，必须有。如果不加双引号，第二个ls命令在本地执行

2:分号，两个命令之间用分号隔开
:::

```shell
ssh user@remoteNode > /dev/null 2>&1 << eeooff
cd /home
touch abcdefg.txt
exit
eeooff
echo done!
```

远程执行的内容在“<< eeooff ” 至“ eeooff ”之间，在远程机器上的操作就位于其中，注意的点：
<< eeooff，ssh后直到遇到eeooff这样的内容结束，eeooff可以随便修改成其他形式。
重定向目的在于不显示远程的输出了
在结束前，加exit退出远程节点

## 以下代码为参考数据:
```shell
#!/bin/zsh
date=`date "+%Y%m%d"`
date_time=`date "+%H%I%S"`
echo "脚本执行时间:" $date $date_time
echo "\n";
for ip in 'wechat.saiwutong.com' 'wechat.saiwutong.com'
do
    echo '========================'`date "+%Y%m%d %H:%I:%S"`'=================================='
    echo '正登录【'+ ${ip} +'】服务器！！！'
    sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no  root@${ip} > /usr/local/var/log/gitSync/$date/$date_time$ip 2>&1 << eeooff
cd /var/www/html/xmim/xmim_cn
git pull
cd /var/www/html/xmim/xmim_en
git pull
exit
eeooff
    echo '【' ${ip} '】处理结束!'
    echo '========================'`date "+%Y%m%d %H:%I:%S"`'==================================='
    echo "\n";
done
echo "***************************************************************"
echo '【所有处理】处理结束！！！'
echo "***************************************************************"

sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no root@47.96.227.57 "cd /var/www/html/xmim_bmxt/ ; git pull >> pull.log ; exit ;" #报名系统 7
sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no root@47.99.36.130 "cd /var/www/html/xmim_bmxt/ ; git pull >> pull.log ; exit ;" #报名系统 6
sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no root@47.98.242.117 "cd /var/www/html/xmim_bmxt/ ; git pull >> pull.log ; exit ;" #报名系统 5
sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no root@47.96.231.144 "cd /var/www/html/xmim_bmxt/ ; git pull >> pull.log ; exit ;" #报名系统 4
sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no root@47.99.35.111 "cd /var/www/html/xmim_bmxt/ ; git pull >> pull.log ; exit ;" #报名系统 3
sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no root@47.99.37.109 "cd /var/www/html/xmim_bmxt/ ; git pull >> pull.log ; exit ;" #报名系统 2
sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no root@116.62.61.186 "cd /var/www/html/xmim_bmxt/ ; git pull >> pull.log ; exit ;" #报名系统 1

#sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no root@47.93.4.193 "cd /var/www/html/xmim_bmxt/ ; git pull >> pull.log ; exit ;" #
#sshpass -p saiwutong@2018 ssh -o StrictHostKeyChecking=no root@47.96.111.182 "cd /var/www/html/xmim_bmxt/ ; git pull >> pull.log ; exit ;" # 网站服务器

```




