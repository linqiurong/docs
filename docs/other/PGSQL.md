# PGSQL
## PGSQL 无法创建geodatabase 
```
1: 用户权限问题 
2: https://pro.arcgis.com/zh-cn/pro-app/help/data/databases/add-the-st-geometry-type-to-a-postgresql-database.htm
https://desktop.arcgis.com/zh-cn/arcmap/10.3/manage-data/gdbs-in-postgresql/connect-postgresql.htm

相应问题链接 
https://blog.csdn.net/yh0503/article/details/87917826

拷的文件从当前系统使用客户端C:\Program Files (x86)\ArcGIS\Desktop10.5\DatabaseSupport\PostgreSQL\9.5\Windows64 
目录下的文件拷到D:\Program Files\PostgreSQL\9.5\lib 目录下   linux 拷到 /usr/pgsql-9.5/lib 其中/usr/pgsql-9.5这个目录是 initdb 相应的目录


```



## Output DataSet 0000732问题 
```
https://blog.csdn.net/weixin_34077371/article/details/86072541
C:\Users\Administrator\AppData\Roaming\ESRI\Desktop10.5\ArcCatalog
```

##  enabled geodatabase 
::: tip
需要授权超级管理员权限(sde)
:::
## geodatabase user name and scheam user does not match
::: tip
在相应的数据库中添加schema 把 新增的scheam下的信息属性 修改为 你当前连接的相应的用户
:::


## 新增用户可以导入配置
```
  1: 新增用户 user_test 并设置密码
  2: 新增数据库 geo_test 并设置为所有者为 新增用户 user_test
  3: 打开arcMap 并使用sde账号连接登录geo_test PGSQL 并右击 enabled geodatabase
  4: 第3步骤完成后 打开pgadmin 连接到geo_test 并打开数据库  新增架构(user_test且所有者为user_test)
  5：打开架构sde并设置所有者为 user_test
  6：打开架构 sde 下的域 并把所有 设置所有者为 user_test 架构为 user_test(建议与当前用户名称相同 如果不相同测试的时候好像有问题)
  7：打开arcMap 并使用 user_test 账号连接登录 geo_test PGSQL
  8: 右击新增 feature set  
  9：右击 feature set 选择 import （如果不能导入--提示must be the owner to perform the opetation权限  这里需要等待一些时间(有可能是权限缓存问题)） 
  10: 如果还有问题 则先删除 feature set 后再新建 一个feature set 再尝试导入看是否还会  must be the owner to perform the opetation
```


# 数据库访问权限设置: 
```
1: 右击数据库=》属性=》权限=》先public 勾选所有后确认(先勾选所有后才会有当前用户的权限)
2: 右击数据库=》属性=》权限=》去队public权限
```

# arcmap 发布时提示 arcmap publish service no arcgis server license found
```
解决: 需要用sde账号连接的连接 在连接时可能还需要授权文件(xxxxxx 10.5.ecp)文件
```

## 空间库操作
::: tip
pgsql 云服务 与 postgis 通过创建extentsion来存储空间数据

这个发布服务不能用arcmap 导入shp文件也需要postgis来导入

发布服务需要通过geoserver来发布

数据更新 需要通过pgsql来更新 目前没找到相应的接口

:::


### 数据查询

```sql
   select st_astext(geom) from forimportpostgis
```
### 数据更新
```sql
   update forimportpostgis set geom = st_geomfromtext('POINT(118.085694543 24.4809723650001)', 4490) where gid=8
```
