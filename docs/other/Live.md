#  视频直播 ffmpeg

## 重新安装 nginx

```shell

brew tap  denji/nginx

brew unlink nignx

brew install denji/nginx/nginx-full  --with-rtmp-module

```



## nginx 配置 http
    server {
        listen       8000;
        server_name  localhost  alias  another.alias;

        #HLS配置开始,这个配置为了`客户端`能够以http协议获取HLS的拉流
        location /hls {
            # Serve HLS fragments
            types {
                application/vnd.apple.mpegurl m3u8;
                video/mp2t ts;
            }
            #访问权限开启，否则访问这个地址会报403
            autoindex on;
            expires -1;
            add_header Cache-Control no-cache;
            root /Users/clone/www/live;
        }
        # HLS配置结束
        location / {
            root   html;
            index  index.html index.htm;
        }
    }



## nginx 配置  rtmp
```
rtmp_auto_push on; #与http{}同级
rtmp {
    server {
        listen 1935;
        chunk_size 4000;
        application live1 {
            live on;
            #record off;
        }
    application hls {
        live on;
        hls on;
        hls_path /Users/clone/www/live/hls;#存放目录
        hls_fragment 5s;
        hls_playlist_length 15s;
        hls_continuous on; #连续模式。
        hls_cleanup on;    #对多余的切片进行删除。
        hls_nested on;     #嵌套模式
    }
    #include rtmp_servers/*.conf;
}
```
### 启动nginx-full

```shell
brew services start nginx-full

brew services stop nginx-full
```

### 安装  ffmpeg
```shell
brew install ffmpeg
```
### 查看macos 可用设备
```shell
ffmpeg -f avfoundation -list_devices true -i ""
```




