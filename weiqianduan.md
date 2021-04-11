## 												微前端框架

####	前端的趋势：![img](https://inews.gtimg.com/newsapp_bt/0/11670326563/641)

####	微前端的起源：

​	微前端的概念最早由 thoughtworks 在 2016 年提出。其核心思路是借鉴后端微服务架构理念，将一个单体的庞大的前端应用拆分为多个简单独立的前端工程。每个前端工程可以独立开发、测试、部署。最终再由一个容器应用，将拆分后的微前端工程组合为一个整体，面向用户提供服务。

####	微前端的概念：

​	即，一种由独立交付的多个前端应用组成整体的架构风格。具体的，将前端应用分解成一些更小、更简单的能够独立开发、测试、部署的小块，而在用户看来仍然是内聚的单个产品。核心：在于拆，拆完再合！

####	微前端的架构方式所带来的好处也是显而易见的：

- 降低代码耦合（松耦合、代码库更小，更内聚、可维护性更高）
- 微前端可独立部署
- 团队可以按照业务垂直拆分更高效（自治的团队可扩展性更好）
- 渐进地升级、更新甚至重写部分前端功能成为了可能

#### 微前端工程化：

使用微前端开发应用不仅仅要解决 技术问题，还有一些开发，协作，部署等工程化的问题需要解决，比如：

- 公共依赖库抽取
- 本地如何启动开发
- 如何打包部署，生成的 hash 资源文件如何通知主应用

#### 微前端的几种方案对比：

![img](https://pic1.zhimg.com/80/v2-a8da176f499d6b5f49bcd29ddba31438_1440w.jpg)

####	一、微前端框架介绍：

#####	1.1、mooa ：一个为 Angular 服务的微前端框架（star：754）

​	1.1.1.使用 Angular 实现微前端其实比 React 和 Vue 更加困难，因为 Angular 包含 AOT 编译，Module，Zone.js ，Service 共享等等问题，React 和 Vue 直接子应用 JS 加载渲染页面某个区域即可。

1.2.1.地址：https://github.com/phodal/mooa

#### 1.2、商业级微前端框架：ngx-planet（star :366）

​	1.2.1基于Angular实现微前端

#####	1.3、BIt(bit.dev)（star:13.2k）

​	1.3.1.Bit 容许你从独立的组件组建和管理前端。它可能是清单上最受欢迎的、可用于生产（production-ready）的解决方案。

​	1.3.2.通过 **简单的解耦代码库、自治团队、小型定义良好的 API、独立的发布管道**和 **持续增量升级**，增强了工作流程。

​	1.3.3.地址：https://github.com/teambit/bit

#####	1.4、single-spa（star：8.7k）

​	1.4.1.(https://user-gold-cdn.xitu.io/2020/1/8/16f849c6638767af?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)![截屏2021-03-29 下午2.42.08](/Users/wanghao/Library/Application Support/typora-user-images/截屏2021-03-29 下午2.42.08.png)

1.4.2.single-spa 的实现原理并不难，从架构上来讲可以分为两部分：子应用和容器应用。拆分的更极致

1.4.3.地址：https://github.com/single-spa/single-spa

1.4.4.文档：https://zh-hans.single-spa.js.org/docs/getting-started-overview

1.4.5.子应用与传统的单页应用的区别在于

- 不需要 HTML 入口文件，
- js 入口文件导出的模块，必须包括 bootstrap、mount 和 unmount 三个方法。

1.4.6.容器应用主要负责注册应用，当 url 命中子应用的路由时激活并挂载子应用，或者当子应用不处于激活状态时，将子应用从页面中移除卸载。其核心方法有两个：

- `registerApplication` 注册并下载子应用
- `start` 启动处于激活状态的子应用。

 1.4.7.优点

- 纯前端解决方案
- 可以使用多种技术栈
- 完善的生态

1.4.8.缺点

- 上手成本高
- 需要改造现有应用
- 跨应用的联调变得复杂
- 不够灵活，不能动态加载JS文件（需要手动加载）
- 样式不隔离，全局对象没有JS沙箱机制

#####	1.5、商业级微前端框架：qiankun（star：9k）（阿里系）

​		1.5.1.基于single-spa二次封装，使用简单。可以支持 Angular、Vue 和 React等等（无关技术栈，匹配路由就加载）

​		1.5.2.生产可用，蚂蚁内部已接入大量应用。地址：https://github.com/umijs/qiankun

​		1.5.3.初衷及表现形式：

基于微前端架构模式，构建出一套全链路的面向中后台场景的产品接入平台，目的是解决不同产品之间集成困难、流程割裂的问题，希望接入平台后的应用，不论使用哪种技术栈，在运行时都可以通过自定义配置，实现不同应用之间页面级别的自由组合，从而生成一个千人千面的个性化控制台。

![img](https://pic2.zhimg.com/80/v2-d55549366b52cde19c93835cfa2a58c9_1440w.jpg)

​	1.5.4.CSS隔离方案：

​			子应用之间样式隔离：Dynamic Stylesheet 动态样式表，当应用切换时移除老的样式表，加载新的样式表

​			主子应用之间样式隔离：			

​					*. BEM（Block Element Modifier）约定项目前缀---->（有时候也会出问题）

​					*. CSS-Modules 打包时生成不冲突的选择器名---->（编译时加载，比较好，推荐使用）

​					*. Shadow-DOM	真正意义上的隔离---->（乾坤推荐使用,但是如果挂在到body上也会出现一些问题）

![截屏2021-03-30 下午2.41.53](/Users/wanghao/Library/Application Support/typora-user-images/截屏2021-03-30 下午2.41.53.png)

​					*. css-in-js	---->（不建议使用，不好管理）		

​	1.5.5.缺点：

​		1.5.5.1.iconffont 字体在子应用无法加载

​			原因：shadow dom 是不支持@font-face 的，所以当引入 iconfont 的时候，尽管可以引入样式，但由于字体文件是不存在的，所以相对应的图标也无法展示。相关链接：[@font-face doesn't work with Shadow DOM?](https://github.com/mdn/interactive-examples/issues/887#issuecomment-432606925)，[Icon Fonts in Shadow DOM](https://stackoverflow.com/questions/28794189/icon-fonts-in-shadow-dom)

​		方案：

1. 把字体文件放在主应用加载
2. 使用通用的字体文件，这样就不需要单独加载字体文件了（等于没说~~~~~）

1.5.5.2.dom的查询方法找不到指定的元素

​	原因：shadow dom 内的元素是被隔离的元素，故 document下查询的方法例如，querySelector、getElementsById 等是获取不到 shadow dom 内元素的。

​	方案：代理 document 下各个查询元素的方法，使用子应用外面的 shadow dom 一层查询。如何获取子应用dom对象可以参考乾坤的这个方法 [initGlobalState](https://qiankun.umijs.org/zh/api#initglobalstatestate)。

1.5.5.3.组件库动态创建的元素无法使用自己的样式

​	原因：有些对话框或提示窗是通过`document.body.appendChild`添加的，所以 shadow dom 内引入的 CSS 是无法作用到外面元素的。方案：代理`document.body.appendChild`方法，即把新加的元素添加到 shadow dom容器下，而不是最外面的 body节点下。

​	补充：**类似的问题都可以往这个方向靠，看是不是shadow dom节点或者dom方法的问题。

1.5.5.4.第三方引入的 JS 不生效

​	原因：有些 JS 文件本身是个立即执行函数，或者会动态的创建 scipt 标签，但是所有获取资源的请求是被乾坤劫持处理，所以都不会正常执行，也不会在 window 下面挂载相应的变量，自然在取值调用的时候也不存在这个变量。方案：参考乾坤的 issue，[子应用向body添加script标签失败](https://github.com/umijs/qiankun/issues/812)

1.5.5.5.webpack-dev-server 代理访问的接口 cookie 丢失

​	原因：在主应用的端口下请求子应用的端口，存在跨域，axios 默认情况下跨域是不携带 cookie 的，假如把 axios 的 `withCredential`设置为 true（表示跨域携带 cookie），那么子应用需要设置跨域访问头`Access-Control-Allow-Origin`（在 devServer 下配置 header）为指定的域名，但不能设置为*，这时候同时存在主应用和子应用端口发出的请求，而跨域访问头只能设置一个地址，就导致无法代理指定服务器接口。

​	方案：子应用接口请求的端口使用主应用接口请求的端口，使用主应用的配置代理请求

​	

```
// 主应用

devServer: {
 ...
 port: 9600
 proxy: {
  // 代理配置
 }
}

// 子应用
devServer: {
 ...
 port: 9600, // 使用主应用的页面访问端口
}		
```

1.5.5.6.优点：

![img](https://pic1.zhimg.com/80/v2-0d993314e9f3fcc89dd008bd4bedfd9c_1440w.jpg)

![截屏2021-04-03 下午3.31.24](/Users/wanghao/Desktop/微前端/截屏2021-04-03 下午3.31.24.png)

#### 1.6、icestark（star:1.1k）(淘系)

​	1.6.1.面向大型应用的微前端解决方案

​	1.6.2.地址：https://github.com/ice-lab/icestark

​	1.6.3.文档：https://ice.work/docs/icestark/about

​	1.6.4.与 single-spa 的关系

​			icestark 与 single-spa 都属于微前端的解决方案，两者在能力上并无太大差别，这里简单梳理下个人的一些观点：

- single-spa 社区知名度更高，生态以及能力上会完善一些，这个是 icestark 要持续追赶的
- 子应用方面：icestark 对子应用的侵入几乎可以忽略，使用成本更低，同时子应用也可以独立运行，而 single-spa 相对多了一些侵入，需要了解各种生命周期，子应用是否能单独运行需要确认下
- API 设计层面：icestark 将应用路由类比为页面路由，类 react-router 的 API 设计更加简单直观一些
- 架构设计上：icestark 更加简单，single-spa 要重一些，比如需要 single-spa-react/vue/preact 这种设计，具体可以看下两者的核心代码，其实都比较简单

另外 qiankun 是对 single-spa 的一层封装，核心做了构建层面的一些约束以及沙箱能力，构建层面的约束（比如 umd）个人觉得会让子应用变复杂，不一定是一个好的方案，然后沙箱这块 icestark 是将 `onAppEnter/onAppLeave` 这种钩子暴露给框架应用，让业务自身去按需做一些比如全局变量冻结之类的事情。

### 再谈乾坤和single-spa的区别

乾坤基于single-spa，加强了微应用集成能力，却抛弃了微模块的能力，为什么要这么做呢？我们要想清楚这两个框架出现的背景：

​	**乾坤：**阿里内部有大量年久失修的项目，业务侧急需工具去把他们快速、安全的集成到一起。在这个角度，乾坤根本没有做模块联邦的需求，它的需求仅仅是如何快速、安全的把项目集成起来。所以乾坤是想做一个微前端工具。

​	**single-spa：**学习后端的微服务，实现前端的微服务化，让应用、组件以及逻辑都成为可共享的微服务，实现真正意义上的微前端。所以single-spa是想做一个game-changer。

![img](https://pic2.zhimg.com/80/v2-1f81dbca2bb7cc1b81c8519a4439eda5_1440w.jpg)

### 总结： 合适才是最好的！

回到最开始，最初做微前端改造的初衷是为了解决：技术栈落后、编译部署慢这两个问题，通过上述链路，其实客观上我们应该选择乾坤。但是主观上，作为一个有追求的人，乾坤目前真的没法做到极致的微前端，所以我们尝试了single-spa，但又发现single-spa对项目的改造太多，对项目的可维护性带来了严峻挑战。

从微前端改造效果和项目的可维护性这两个角度考虑，当前这些方案好像都不够理想，它们要么改造效果不理想，要么可维护性差。作为一个追求极致的人，我选择了暂时放弃。

我觉得唯一完美的方案是：乾坤 + 老项目迁移到Webpack5 + 新项目使用Webpack5，因为只有这样才既能达成改造理想，又能保证可维护性。

老项目迁移到Webpack5非常重要，我相信现在大家的项目都是Webpack4，在未来我们的微前端中大概率大部分都是Webpack4的老项目。而Webpack5的模块联邦只支持Webpack5项目，所以假如你有9个老项目和2个新项目，如果你不做老项目迁移，那么你的模块联邦也只能用在这2个新项目中，意义不大。

但是如果老项目就是没法迁移到Webpack5又该怎么办呢？此时唯一的方案就是用SystemJS，但是single-spa+SystemJS的使用又太麻烦，维护成本太高，害，太难了。这种情况，也许只能基于single-spa+SystemJS开发一个新的框架才行了。

选型参考文献：https://blog.csdn.net/weixin_28884205/article/details/112642949
为什么是乾坤而不是single-spa？：https://juejin.cn/post/6885211340999229454

tips：
1.主要业务：是子应用还是子组件多？（微前端尽量是子应用类型）
2.主子应用各自环境搭建配置，eslint等等校验规则

3.子应用尽量使用history而不是hash 模式，减少配置

4.数据通信尽量少用或者不使用vuex

5.子公共的东西可以放在主应用中

6.样式分离，#id{}形式却分开比较方便

7.尽量不引用jq相关的插件

**二** **.** **SingleSpa** **实战**

1). 构建子应用2). 配置库打包       js    1    module.exports = {         2    configureWebpack: {         3    output: {         4    library: 'singleVue',         5    libraryTarget: 'umd'         6    },         7    devServer:{         8    port:10000         9    }         10    }         11    }       ![截屏2021-04-06 下午4.57.20](file:///Users/wanghao/Desktop/%E5%BE%AE%E5%89%8D%E7%AB%AF/%E6%88%AA%E5%B1%8F2021-04-06%20%E4%B8%8B%E5%8D%884.57.20.png?lastModify=1617871703)