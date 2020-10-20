# NGINX

## upstream
::: tip
注意事项 这里有建义放在其它配置项的前面(否则有可能会失败)
:::

## upstream
```nginx
upstream  blance.ce {
  # ip_hash;#默认为轮询方式
  server 10.211.55.13:80;
  server 10.211.55.8:80;
}
```

### location 配置

```nginx
location / {
    root   html;
    index  index.html index.htm;
    proxy_pass http://blance.ce;#这里固定为 http:// upstream 后的值
}
```



## CC 防护

1:在 http和server之间加入如下内容：

```nginx
limit_conn_zone $binary_remote_addr zone=perip:10m;
limit_req_zone $binary_remote_addr zone=allips:10m rate=5r/s
```

2:参数说明
```
  $binary_remote_addr是限制同一客户端ip地址；

  $server_name是限制同一server最大并发数；

  limit_conn为限制并发连接数；

  limit_rate为限制下载速度；
```



3:在对应网站的配置目录下:
```
  limit_conn perip 6;  #每个IP并发连接数量
  limit_req zone=allips burst=5 nodelay;  #通过令牌桶限制IP连接

  4:参数说明
  limit_conn perip x； x为单个IP的最大并发连接数量，超过这个数量将不接受连接。
  limit_req zone=allips burst=x nodelay;  x为最大延迟请求数，如果太过多的请求被限制延迟是不需要的 ，这时需要使用nodelay参数，服务器会立刻返回503状态码。 
```