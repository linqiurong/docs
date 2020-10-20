# FastAdmin

安装插件后 如果需要使用/cms里的内容作为首页内容
则只需要把cms插件里的/cms$修改成/$

# 定时任务使用

定时任务目前需要配置crontab才能使用，需要在crontab中添加一条记录 使用命令crontab -e，然后在尾部追加 * * * * * /usr/bin/php /var/www/fastadmin/public/index.php /addons/
```
crontab/autotask/index >> /var/www/fastadmin/runtime/log/crontab.`date +\%Y-\%m-\%d`.log 2>&1
```


## 百度编辑器器提示 后台配置项出错 
```php
config.php 中的 trace 设置为 false
```

## 后台把debug关闭后 无法进入 
```php
可尝试在backend文件里179行添加 $site['version']='1.0.0' 
```

## 隐藏删除 与 编辑 
```js
formatter: {
    operate: function (value,row,index){
        var that = $.extend({}, this);
        var table = $(that.table).clone(true);
        var id = parseInt(row.cate_id);
        if (id < 4) {
            $(table).data("operate-del", null);
            $(table).data("operate-edit", null);
        }
        that.table = table;
        return Table.api.formatter.operate.call(that, value, row, index);
    }
}
```


## js打包
```php
 php think min -m backend -r all
```