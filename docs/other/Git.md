# Git
## 本地创建branch
```git
  git branch branch_name
```

## 删除本地的branch
```git
    git branch -D branch_name
```
## 切换到分支
```git
  git checkout branch_name
```

## 远程覆盖本地
```git
git fetch --all && git reset --hard origin/master && git pull
```

## git 标签
```git
git tag tag1 新增标签 tag1

git tag --push 发布标签(composer 版本号需要用到)
```

## git 回到未来版本  
```git
git reset commit版本
```

## git 回到之前版本
```git
git reset HEAD^ 上一个版本
git reset HEAD~3 回到上3个版本
```

## git 撤消commit 
```git
git reset HEAD^
```


