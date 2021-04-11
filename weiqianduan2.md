#  							微前端由来

#### **一****.****为什么需要微前端****?**

我们通过 3W (what,why,how)的方式来讲解微前端

##### **What?****什么是微前端****?**



![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image003.jpg)

 

 

微前端就是将不同的功能按照不同的维度拆分成多个子应用。通过主应用来加载这些子应用。

微前端的核心在于**拆**, 拆完后在**合**!

 

##### **Why?****为什么去使用他****?**

![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)不同团队间开发同一个应用技术栈不同怎么破？ 希望每个团队都可以独立开发，独立部署怎么破？ 项目中还需要老的应用代码怎么破？

我们是不是可以将一个应用划分成若干个子应用，将子应用打包成一个个的lib。当路径切换时加载不同的子应用。这样每个子应用都是独立的，技术栈也不用做限制了！从而解决了前端协同开发问题

 

##### **How?****怎样落地微前端****?**



![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image006.jpg)

 

 

2018年 Single-SPA诞生了， single-spa 是一个用于前端微服务化的 JavaScript 前端解决方案 (本身没有处理样式隔离， js 执行隔离) 实现了路由劫持和应用加载

2019年 qiankun 基于Single-SPA, 提供了更加开箱即用的 API （ single-spa + sandbox

\+ import-html-entry ） 做到了，技术栈无关、并且接入简单（像i frame 一样简单）

 

![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image008.jpg)总结：子应用可以独立构建，运行时动态加载,主子应用完全解耦，技术栈无关，靠的是协议接入（子应用必须导出 bootstrap、mount、unmount方法）

这里先回答大家肯定会问的问题：

##### **这不是** **iframe** **吗？**

![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)如果使用 iframe ， iframe 中的子应用切换路由时用户刷新页面就尴尬了。

 

##### 应用通信: 

![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)基于URL来进行数据传递，但是传递消息能力弱

![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)基于 CustomEvent 实现通信

![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)基于props主子应用间通信

![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)使用全局变量、 Redux 进行通信

 

##### 公共依赖:

![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)CDN - externals

![img](file:////Users/wanghao/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.jpg)webpack 联邦模块

##### 微前端弊端？(不足)

​	![截屏2021-04-08 下午5.02.57](/Users/wanghao/Library/Application Support/typora-user-images/截屏2021-04-08 下午5.02.57.png)

##### 兼容性？

​	1.阿里乾坤 (IE11+)

​	2.single-spa (IE11+)

##### 协议有没有问题？

​	1.阿里乾坤（[MIT License](https://github.com/umijs/qiankun/blob/master/LICENSE)）

​	2.sinble-spa(License (MIT))