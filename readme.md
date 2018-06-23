# 私活EDM的提升效率 组件化
## EDM可能出现的页面元素情况
### PC形式的EDM
- header,footer形式基本固定 直接抽离处理啊
- 正文部分
    - 单图图片、多图横排
    - 纯文本
    - 文本和邮件会员信息(左右排版, 或者背部还有上下布局)
### WAP形式的EDM 基本类似

## 如何获取渲染好的html
目前就是采取了outterHTML复制到了缓存区


#  学习redux-react相关知识点(困扰自己好久一个知识点)
## 名词解释
- Provider
- action: view上要触发的动作, 存放数据的对象，只表意（表达action的发生），只被别人操作
- reducer: 纯函数，只承担计算 state的功能
- dispatch: view触发不同的action
- connect: 将UI 组件 ->  容器组件
- mapStateToProps, mapDispatchToProps (ui组件转化成容器组件时，state和dispatch需要进行处理)
- middleware ( 中间件比较复杂)
TODO: 还需要学习

## 注意事项
- action 要求是 plain object (当action需要特殊处理时，写成func 根据参数 动态处理)
- reducer内部 处理state时，如果更新了一个嵌套的值，最好进行拷贝一下（redux 不一定get diff）

> https://github.com/jackielii/simplest-redux-example/blob/master/index.js 
> 参考例子 simplest-redux
> http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html
> https://segmentfault.com/a/1190000010361753
