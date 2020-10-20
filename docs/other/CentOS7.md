# CentOS 7

## 不能上网

    sudo vim /etc/sysconfig/network-scripts/ifcfg-eth0
    将最后一行的ONBOOT=no改为ONBOOT=yes,如图

## ifconfig not found
    yum install net-tools

## 防火墙 ： 

```shell
#设置开机启动 ： systemctl enable firewalld.service        

#开启与关闭 ：    service firewalld   stop/star/restart/status

#查看防火墙列表 ： firewall-cmd  --list-all

#开启80端口 ： firewall-cmd --zone=public --add-port=80/tcp --permanent

#添加协议  ： firewall-cmd --add-protocol=icmp --permanet

```

## 禁用icmp
  1 ：在/etc/sysctl.conf中添加 net.ipv4.icmp_echo_ignore_all=1 #禁用为 1 开启为 0
  2 ：sysctl -p    

##  查看httpd的配置文件有没出错
  httpd --config

##  apache 配置 ssl(https)

    ========查看详情请前往==========> http://blog.csdn.net/ithomer/article/details/50433363

    1 ： yum install mod_ssl openssl

    2 ： 下面的命令可以被用来产生一个自签名的证书。

            首先，生成2048位的加密私钥

            # openssl genrsa -out server.key 2048

            然后，生成证书签名请求（CSR），这里需要填写许多信息，如国家，省市，公司等

            # openssl req -new -key server.key -out server.csr

            最后，生成类型为X509的自签名证书。有效期设置3650天，即有效期为10年

            # openssl x509 -req -days 3650 -in server.csr -signkey server.key -out server.crt    

            # cp server.crt /etc/pki/tls/certs/
            # cp server.key /etc/pki/tls/private/        
            # cp server.csr /etc/pki/tls/private/        
    
      3 ： 配置Apache Web服务器
        
           vim /etc/httpd/conf.d/ssl.conf

           仅需配置 SSLCertificateFile 和 SSLCertificateKeyFile

           SSLCertificateFile /etc/pki/tls/certs/server.crt
           SSLCertificateKeyFile /etc/pki/tls/private/server.key


      4. 调整虚拟主机
    
            # vim /etc/httpd/conf/httpd.conf

            <VirtualHost *:443>
                SSLEngine on
                SSLCertificateFile /etc/pki/tls/certs/server.crt
                SSLCertificateKeyFile /etc/pki/tls/private/server.key
                <Directory /var/www/html/virtual-web>
                    AllowOverride All
                </Directory>
                ServerAdmin email@example.com
            DocumentRoot /var/www/html/virtual-web
            ServerName proxy.mimvp.com
            </VirtualHost>

       5. 强制Apache Web服务器始终使用https
    
          强制虚拟主机（单个站点）

          <VirtualHost *:80>
              ServerName proxy.mimvp.com
              Redirect permanent / https://proxy.mimvp.com/
          </VirtualHost>    


        6. 如果网站出现 『您与此网站之间建立的连接并非完全安全』    
          解析方案: 查看是否有引用非https的 css images js 等  换成本地的就可以了    

## 数据库主从复制    
    
  ==========详情参考============》https://dev.mysql.com/doc/refman/5.7/en/replication-howto-masterbaseconfig.html


  1: 设置复制主机配置  vim /etc/my.cnf  添加  

      log-bin=mysql-bin
      server-id=1
      binlog-do-db=mysql1 #需要备份的数据库名，如果备份多个数据库，重复设置这个选项 即可
      binlog-ignore-db=mysql2 #不需要备份的数据库名，如果备份多个数据库，重复设置这 个选项即可
      log-slave-updates=1 #这个参数一定要加上，否则不会给更新的记录些到二进制文件 里
      slave-skip-errors=1 #是跳过错误，继续执行复制操作(可选)
                                        
                                                

   2: 上一步做好后重启数据库  sudo service mariadb restart    

      登录mysql   mysql -u root -p

      创建用户进行复制

      mysql >  CREATE USER 'repl'@'%.mydomain.com' IDENTIFIED BY 'slavepass';

      mysql >  GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%.mydomain.com';


       
    3: 获取复制主二进制日志坐标          

      mysql >  SHOW MASTER STATUS;    

      记录 File 与     Position  配置从机的时候需要用到(第5步用到 MASTER_LOG_FILE 对应 File, MASTER_LOG_POS 对应 Position )


    4: 设置复制从站   vim /etc/my.cnf  添加  

                                        server-id=2 

    5: mysql> CHANGE MASTER TO
        ->     MASTER_HOST='10.211.55.10',
        ->     MASTER_USER='repl',
        ->     MASTER_PASSWORD='slavepass',
        ->     MASTER_LOG_FILE='recorded_log_file_name',
        ->     MASTER_LOG_POS=recorded_log_position;


    6: 启动从线程：mysql> START SLAVE;



##  定时任务

    创建任务

    1、at 时间 按回车

    2、输入要做的事 ctrl+d结束

    3、at -l查看有没创建成功

    4、at -c 1 查看任务编号为1的具体任务

    scp 远程复制命令

    scp -P 9999  certs.tar.gz ouch@192.168.10.5:/home/ouch

    -P为192.168.10.5的ssh端口号


    http 跳转到 https
    
    解决方案: 修改.htaccess
        
        RewriteCond %{SERVER_PORT} !^443$
        
        RewriteRule ^.*$ https://%{SERVER_NAME}%{REQUEST_URI} [L,R=301]


## 缺少:php-zip        
     https://blog.csdn.net/liuyeluoqing/article/details/81697954
          

## httpd 或  apache 跨域
<Directory /> 
   Header set Access-Control-Allow-Origin *
</Directory>







  