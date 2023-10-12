import{_ as s,Q as u,S as h,U as e,W as t,X as o,a8 as n,a9 as i,H as a}from"./framework-d7e1aa10.js";const c={},p=e("h1",{id:"uniapp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uniapp","aria-hidden":"true"},"#"),n(" Uniapp")],-1),d={class:"table-of-contents"},_=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),n(" 简介")],-1),f=e("figure",null,[e("img",{src:"https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//uniapp/20230920/uniapp架构图.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),g=e("li",null,"DCloud 公司研发，跨平台框架，开发者编写一套代码，可发布到iOS，Android，H5，以及各种小程序（微信/支付宝/百度/头条/ QQ /钉钉）等多个平台",-1),b=e("li",null,"在跨端的同时，通过条件编译+平台特有API调用，可以优雅的为某平台写个性化代码，调用专有能力而不影响其他平台",-1),k=e("li",null,"支持原生代码混写和原生SDK集成",-1),m=e("li",null,"App端支持weex原生渲染，可支持更流畅的用户体验",-1),w=e("li",null,"vue语法 + 微信小程序api",-1),x={href:"https://www.zhihu.com/search?q=apicloud&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2450229554%7D",target:"_blank",rel:"noopener noreferrer"},v={href:"http://mpvue.com/",target:"_blank",rel:"noopener noreferrer"},W=e("h3",{id:"webview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webview","aria-hidden":"true"},"#"),n(" webview")],-1),A=e("p",null,"WebView是一种用于在移动应用中嵌入Web内容的组件或控件。它允许开发者在原生移动应用中显示Web页面，以便将Web内容与原生应用的功能和界面无缝整合在一起。WebView通常由操作系统提供，开发者可以在应用中使用它来加载和显示HTML、CSS和JavaScript等Web技术创建的内容。",-1),V=e("li",null,[e("strong",null,"原生应用嵌入Web内容"),n("：WebView允许开发者将Web页面嵌入到原生移动应用中的特定区域，用户可以在应用内部访问Web内容，而无需离开应用。")],-1),U=e("li",null,[e("strong",null,"与原生应用交互"),n("：WebView不仅可以显示静态Web页面，还可以与原生应用的功能进行交互。这意味着开发者可以使用JavaScript与原生代码通信，实现诸如打开相机、发送通知、访问设备传感器等功能。")],-1),E=e("strong",null,"渲染引擎",-1),I={href:"https://webkit.org/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.chromium.org/Home/",target:"_blank",rel:"noopener noreferrer"},S=i("<li><strong>性能和安全性</strong>：WebView的性能和安全性与所使用的渲染引擎和操作系统有关。为了确保用户安全，开发者需要小心处理来自WebView的外部Web内容，以防止潜在的安全漏洞。</li><li><strong>适用场景</strong>：WebView通常用于以下场景： <ul><li>在应用中显示帮助文档或用户协议。</li><li>显示新闻文章、博客或其他在线内容。</li><li>集成第三方Web服务，如社交媒体登录、支付、地图等。</li><li>在原生应用中展示Web视图，以实现动态内容和用户互动。</li></ul></li><li><strong>跨平台开发</strong>：许多跨平台移动应用框架，如React Native、Flutter和Xamarin，也提供了WebView的封装组件，使开发者能够在不同平台上使用相同的Web内容。</li>",3),z=e("h3",{id:"weex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#weex","aria-hidden":"true"},"#"),n(" weex")],-1),j={href:"https://github.com/alibaba/weex",target:"_blank",rel:"noopener noreferrer"},B=i('<ol><li><strong>跨平台开发</strong>：Weex的主要目标是支持一次开发，多平台发布。开发者可以使用Vue.js或Rax等框架编写一套代码，然后将其发布到iOS、Android和Web等平台上。</li><li><strong>组件化开发</strong>：Weex使用组件化的开发模式，允许开发者构建可重用的UI组件。这些组件可以跨平台使用，并且在不同平台上具有相似的行为和外观。</li><li><strong>原生渲染引擎</strong>：Weex应用程序的UI组件由原生渲染引擎来渲染，以保证高性能和原生应用的体验。这意味着Weex应用的性能可以与原生应用媲美。</li><li><strong>热更新支持</strong>：Weex支持热更新，允许开发者在不重新发布应用的情况下，实时更新应用内容和功能。</li><li><strong>生态系统</strong>：Weex拥有丰富的生态系统，包括一系列的UI组件库、插件和工具，帮助开发者更轻松地构建应用。</li><li><strong>开放性和扩展性</strong>：Weex是一个开放的框架，允许开发者扩展和定制其功能。你可以编写自定义的Weex组件和模块，以满足特定需求。</li><li><strong>支持多语言</strong>：Weex支持多种前端开发语言，包括Vue.js、Rax（类React框架）、Angular等，让开发者可以使用熟悉的技术栈来开发应用。</li></ol><h3 id="uniapp-与-vue" tabindex="-1"><a class="header-anchor" href="#uniapp-与-vue" aria-hidden="true">#</a> uniapp 与 vue</h3><ol><li><strong>跨平台 vs 单平台</strong>： <ul><li>UniApp是一个跨平台开发框架，可以将代码发布到多个平台，如iOS、Android、Web、微信小程序、支付宝小程序等。</li><li>Vue.js主要用于单页面应用（SPA）的开发，通常在Web浏览器上运行，虽然也可以通过一些工具将其用于移动应用开发，但不具备UniApp的跨平台特性。</li></ul></li><li><strong>API和组件的差异</strong>： <ul><li>UniApp提供了一套内置的API和组件，用于访问不同平台的设备功能和UI元素，这些API和组件在不同平台上有一定的差异。</li><li>Vue.js并不直接提供设备访问功能或跨平台UI组件，它更侧重于构建Web应用，通常需要第三方库或插件来实现设备功能和UI组件。</li></ul></li><li><strong>项目结构</strong>： <ul><li>UniApp的项目结构通常包括不同平台的代码目录，如<code>/pages</code>用于存放页面，<code>/components</code>用于存放组件，以及平台特定的配置文件。</li><li>Vue.js项目结构更加自由，可以根据需要组织代码，但通常包括<code>/src</code>用于存放Vue组件和应用代码。</li></ul></li><li><strong>路由管理</strong>： <ul><li>UniApp使用自带的路由管理机制，类似于Vue Router，但需要处理不同平台的路由差异。</li><li>Vue.js也可以使用Vue Router进行路由管理，但通常需要额外配置来适应移动应用或跨平台应用的需求。</li></ul></li><li><strong>打包和发布</strong>： <ul><li>UniApp具有特定于每个平台的打包和发布工具，可以轻松将应用程序发布到不同的应用商店或Web服务器。</li><li>Vue.js在移动应用或跨平台开发时需要使用其他工具，如Cordova、Ionic等，来打包和发布应用。</li></ul></li><li><strong>生态系统</strong>： <ul><li>Vue.js拥有庞大的生态系统，有丰富的第三方库、插件和社区支持，适用于Web应用开发。</li><li>UniApp的生态系统相对较小，主要集中在移动应用和小程序开发领域。</li></ul></li></ol><br><br><h2 id="相关资源" tabindex="-1"><a class="header-anchor" href="#相关资源" aria-hidden="true">#</a> 相关资源</h2><h3 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h3>',7),q={href:"https://uniapp.dcloud.net.cn/tutorial/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://uniapp.dcloud.net.cn/resource.html#%E4%B8%89%E6%96%B9%E5%9F%B9%E8%AE%AD%E6%9C%BA%E6%9E%84%E8%A7%86%E9%A2%91",target:"_blank",rel:"noopener noreferrer"},N={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://gitee.com/dcloud/uni-app",target:"_blank",rel:"noopener noreferrer"},H=e("h3",{id:"视频教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#视频教程","aria-hidden":"true"},"#"),n(" 视频教程")],-1),O={href:"https://www.bilibili.com/video/BV1834y1676P?p=114&vd_source=e356fec025b50061af78324a814f8da0",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.bilibili.com/video/BV1BJ411W7pX/?spm_id_from=333.788.recommend_more_video.0&vd_source=e356fec025b50061af78324a814f8da0",target:"_blank",rel:"noopener noreferrer"},T={href:"https://learning.dcloud.io/#/",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"相关文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关文章","aria-hidden":"true"},"#"),n(" 相关文章")],-1),Q={href:"https://www.w3cschool.cn/uni_app/uni_app-k8zg370b.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://blog.csdn.net/qiushi_1990/article/details/127675537",target:"_blank",rel:"noopener noreferrer"},K={href:"https://blog.csdn.net/Qiuxuntao/article/details/126420043",target:"_blank",rel:"noopener noreferrer"},J={href:"https://blog.csdn.net/john_QY/article/details/109440641",target:"_blank",rel:"noopener noreferrer"},L={href:"https://segmentfault.com/a/1190000015684864",target:"_blank",rel:"noopener noreferrer"},X={href:"https://ask.dcloud.net.cn/article/35657",target:"_blank",rel:"noopener noreferrer"},G=e("h3",{id:"开源项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开源项目","aria-hidden":"true"},"#"),n(" 开源项目")],-1),Y={href:"https://github.com/macrozheng/mall-app-web",target:"_blank",rel:"noopener noreferrer"},M={href:"https://gitee.com/macrozheng/mall",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.macrozheng.com/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://gitee.com/kevin_chou/qdpz",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://gitee.com/fuyang_lipengjun/platform",target:"_blank",rel:"noopener noreferrer"},ne=e("h3",{id:"在线书籍-文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在线书籍-文档","aria-hidden":"true"},"#"),n(" 在线书籍/文档")],-1),te={href:"https://www.bookstack.cn/explore?tab=popular&cid=152",target:"_blank",rel:"noopener noreferrer"},re=e("h3",{id:"其他",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#"),n(" 其他")],-1),le={href:"https://www.zhihu.com/question/444976489",target:"_blank",rel:"noopener noreferrer"},oe=e("br",null,null,-1),ie=e("h2",{id:"常用组件库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常用组件库","aria-hidden":"true"},"#"),n(" 常用组件库")],-1),ae={class:"hint-container info"},se=e("p",{class:"hint-container-title"},"官方推荐",-1),ue={href:"https://ask.dcloud.net.cn/article/35489",target:"_blank",rel:"noopener noreferrer"},he=e("strong",null,"uni-app 导航栏开发指南：",-1),ce={href:"https://ask.dcloud.net.cn/article/34921",target:"_blank",rel:"noopener noreferrer"},pe=e("strong",null,"uni-app 实现全局变量：",-1),de={href:"https://ask.dcloud.net.cn/article/35021",target:"_blank",rel:"noopener noreferrer"},_e=e("strong",null,"uni-app 引用 npm 第三方库：",-1),fe={href:"https://ask.dcloud.net.cn/article/19727",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://ask.dcloud.net.cn/article/35070",target:"_blank",rel:"noopener noreferrer"},be={href:"https://uniapp.dcloud.io/component/native-component",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://ask.dcloud.net.cn/article/35872",target:"_blank",rel:"noopener noreferrer"},me={href:"https://ask.dcloud.net.cn/article/166",target:"_blank",rel:"noopener noreferrer"},we={href:"https://www.graceui.com/",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://www.uviewui.com/",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://thorui.cn/doc/",target:"_blank",rel:"noopener noreferrer"},We={href:"https://ext.dcloud.net.cn/plugin?id=239",target:"_blank",rel:"noopener noreferrer"},Ae={href:"https://vant-contrib.gitee.io/vant/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://www.firstui.cn/",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://nutui.jd.com/#/",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://varlet.gitee.io/varlet-ui/#/zh-CN/home",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://nutui.jd.com/bingo/#/",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html",target:"_blank",rel:"noopener noreferrer"},Se=e("br",null,null,-1),ze=e("h2",{id:"插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),n(" 插件")],-1),je={class:"hint-container info"},Be=e("p",{class:"hint-container-title"},"文档",-1),qe={href:"https://www.runoob.com/w3cnote/wx-xcx-repo.html",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://ext.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://uniapp.dcloud.net.cn/api/request/request.html",target:"_blank",rel:"noopener noreferrer"},Pe={href:"https://ask.dcloud.net.cn/article/40621",target:"_blank",rel:"noopener noreferrer"},He={href:"https://www.npmjs.com/package/uniapp-router-patch",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://ext.dcloud.net.cn/plugin?id=28",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://ext.dcloud.net.cn/plugin?id=11792",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://ext.dcloud.net.cn/plugin?id=56",target:"_blank",rel:"noopener noreferrer"},De={href:"https://ext.dcloud.net.cn/plugin?id=3962",target:"_blank",rel:"noopener noreferrer"},Qe={href:"https://ext.dcloud.net.cn/plugin?id=4079",target:"_blank",rel:"noopener noreferrer"},Fe={href:"https://ext.dcloud.net.cn/plugin?id=3796",target:"_blank",rel:"noopener noreferrer"},Ke=e("li",null,[e("a",{href:"%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8"},"richtext-editor"),n("：富文本编辑器插件")],-1),Je={href:"https://z-paging.zxlee.cn/",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://ext.dcloud.net.cn/plugin?id=8308",target:"_blank",rel:"noopener noreferrer"},Xe={href:"https://github.com/hairyf/uni-composition-api",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://github.com/SilurianYang/uni-simple-router",target:"_blank",rel:"noopener noreferrer"},Ye=e("br",null,null,-1),Me=e("h2",{id:"其他问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他问题","aria-hidden":"true"},"#"),n(" 其他问题")],-1),Ze={class:"hint-container warning"},$e=e("p",{class:"hint-container-title"},"说明",-1),en=e("p",null,"可能会踩的一些坑…",-1),nn={href:"https://uniapp.dcloud.net.cn/matter.html",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://uniapp.dcloud.net.cn/faq.html",target:"_blank",rel:"noopener noreferrer"},rn=i("<p><strong>各端的管理规则需要耐心学习</strong></p><p>每个端，有每个端的管理规则，这不是uni-app在技术上上可以抹平的：</p><ul><li>例如H5端的浏览器有跨域限制</li><li>例如微信小程序会强制要求https链接，并且所有要联网的服务器域名都要配到微信的白名单中</li><li>例如App端，iOS对隐私控制和虚拟支付控制非常严格</li><li>例如App端，Android，国产rom各种兼容性差异，尤其是因为谷歌服务被墙，导致的push，定位等开发混乱的坑</li><li>如果App要使用三方sdk，进行定位，地图，支付，推送...还要遵守他们的规则和限制</li></ul><br><p><strong>文档混乱</strong></p><p>由于为了宣传的支持多平台，文档中接口也为了做到统一，所以经常会看到这样的情况：</p><ol><li>找到一个api 接口</li><li>拿来测试一遍</li><li>怎么跑都跑不动</li><li>文档往下翻，翻到最后，发现不支持这个平台</li></ol><p>另外还有很多 uni app 自己都解决不了的问题，只能自己修修补补…</p>",8);function ln(on,an){const l=a("router-link"),r=a("ExternalLinkIcon");return u(),h("div",null,[p,e("nav",d,[e("ul",null,[e("li",null,[t(l,{to:"#uniapp"},{default:o(()=>[n("Uniapp")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#简介"},{default:o(()=>[n("简介")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#webview"},{default:o(()=>[n("webview")]),_:1})]),e("li",null,[t(l,{to:"#weex"},{default:o(()=>[n("weex")]),_:1})]),e("li",null,[t(l,{to:"#uniapp-与-vue"},{default:o(()=>[n("uniapp 与 vue")]),_:1})])])]),e("li",null,[t(l,{to:"#相关资源"},{default:o(()=>[n("相关资源")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#官方文档"},{default:o(()=>[n("官方文档")]),_:1})]),e("li",null,[t(l,{to:"#视频教程"},{default:o(()=>[n("视频教程")]),_:1})]),e("li",null,[t(l,{to:"#相关文章"},{default:o(()=>[n("相关文章")]),_:1})]),e("li",null,[t(l,{to:"#开源项目"},{default:o(()=>[n("开源项目")]),_:1})]),e("li",null,[t(l,{to:"#在线书籍-文档"},{default:o(()=>[n("在线书籍/文档")]),_:1})]),e("li",null,[t(l,{to:"#其他"},{default:o(()=>[n("其他")]),_:1})])])]),e("li",null,[t(l,{to:"#常用组件库"},{default:o(()=>[n("常用组件库")]),_:1})]),e("li",null,[t(l,{to:"#插件"},{default:o(()=>[n("插件")]),_:1})]),e("li",null,[t(l,{to:"#其他问题"},{default:o(()=>[n("其他问题")]),_:1})])])])])]),_,f,e("ol",null,[g,b,k,m,w,e("li",null,[n("uni-app 提供了两种 App 渲染模式，一种是 基于 weex 的 .nvue, 一种是 基于webview 的 .vue。对于后者，还有一个类似的平台："),e("a",x,[n("apicloud"),t(r)]),n("，俩平台很类似，都是给webview提供常用的接口，让h5页面具备调用系统api能力。区别在于 uni 使用了vue而已")]),e("li",null,[n("uni-app是"),e("a",v,[n("mpvue"),t(r)]),n("的超集")])]),W,A,e("ol",null,[V,U,e("li",null,[E,n("：WebView使用浏览器内核或渲染引擎来解析和渲染Web内容。不同的移动操作系统使用不同的内核，如Android使用"),e("a",I,[n("WebKit"),t(r)]),n("或"),e("a",C,[n("Chromium"),t(r)]),n("，iOS使用WebKit。")]),S]),z,e("p",null,[e("a",j,[n("Weex"),t(r)]),n("是一个开源的跨平台移动应用开发框架，它由阿里巴巴集团开发并开源，旨在帮助开发者构建高性能的移动应用，同时实现跨平台的开发和发布。Weex允许开发者使用一套代码，将应用程序同时发布到多个移动平台，如iOS、Android和Web。")]),B,e("ol",null,[e("li",null,[e("a",q,[n("Uniapp 官方教程"),t(r)])]),e("li",null,[e("a",y,[n("Uniapp 官方推荐"),t(r)])]),e("li",null,[e("a",N,[n("微信小程序文档"),t(r)])]),e("li",null,[e("a",P,[n("Uniapp Gitee 仓库"),t(r)])])]),H,e("ol",null,[e("li",null,[e("a",O,[n("黑马程序员前端微信小程序开发教程"),t(r)])]),e("li",null,[e("a",R,[n("Uni-App从入门到实战"),t(r)])]),e("li",null,[e("a",T,[n("Uniapp 与 Vue 合作教程（简单介绍）"),t(r)])])]),D,e("ol",null,[e("li",null,[e("a",Q,[n("W3C 速查"),t(r)])]),e("li",null,[e("a",F,[n("2023最新最全uniapp入门学习"),t(r)])]),e("li",null,[e("a",K,[n("uniapp学习笔记之知识点大总结"),t(r)])]),e("li",null,[e("a",J,[n("uniapp基础知识—大总结"),t(r)])]),e("li",null,[e("a",L,[n("小程序的生命周期、数据绑定、事件处理、组件与通信"),t(r)])]),e("li",null,[e("a",X,[n("组件/标签、js、css 等的变化"),t(r)])])]),G,e("ol",null,[e("li",null,[e("a",Y,[n("mall-app-web"),t(r)]),n("、"),e("a",M,[n("mall-app-admin"),t(r)]),n("、"),e("a",Z,[n("mall-app 文档"),t(r)])]),e("li",null,[e("a",$,[n("前端铺子-uniapp移动端"),t(r)])]),e("li",null,[e("a",ee,[n("微同商城"),t(r)])])]),ne,e("p",null,[e("a",te,[n("书栈网 - 移动端"),t(r)])]),re,e("p",null,[e("a",le,[n("建议看看做好心理准备（被坑过几次了…）"),t(r)])]),oe,ie,e("div",ae,[se,e("ol",null,[e("li",null,[e("p",null,[n("**uni-app 中可使用的 UI 框架：**"),e("a",ue,[n("https://ask.dcloud.net.cn/article/35489"),t(r)])])]),e("li",null,[e("p",null,[he,n(),e("a",ce,[n("https://ask.dcloud.net.cn/article/34921"),t(r)])])]),e("li",null,[e("p",null,[pe,n(),e("a",de,[n("https://ask.dcloud.net.cn/article/35021"),t(r)])])]),e("li",null,[e("p",null,[_e,n(),e("a",fe,[n("https://ask.dcloud.net.cn/article/19727"),t(r)])])]),e("li",null,[e("p",null,[n("**uni-app 中使用微信小程序第三方 SDK 及资源汇总：**"),e("a",ge,[n("https://ask.dcloud.net.cn/article/35070"),t(r)])])]),e("li",null,[e("p",null,[n("**原生控件层级过高无法覆盖的解决方案：**"),e("a",be,[n("https://uniapp.dcloud.io/component/native-component"),t(r)])])]),e("li",null,[e("p",null,[n("**国际化/多语言/i18n方案：**"),e("a",ke,[n("https://ask.dcloud.net.cn/article/35872"),t(r)])])]),e("li",null,[e("p",null,[n("**本地存储详解：**"),e("a",me,[n("https://ask.dcloud.net.cn/article/166"),t(r)])])])])]),e("ul",null,[e("li",null,[e("a",we,[n("Grace UI"),t(r)])]),e("li",null,[e("a",xe,[n("uView"),t(r)])]),e("li",null,[e("a",ve,[n("ThorUI"),t(r)])]),e("li",null,[e("a",We,[n("ColorUI"),t(r)])]),e("li",null,[e("a",Ae,[n("Vant"),t(r)])]),e("li",null,[e("a",Ve,[n("FirstUI"),t(r)])]),e("li",null,[e("a",Ue,[n("NutUI"),t(r)])]),e("li",null,[e("a",Ee,[n("Varlet"),t(r)])]),e("li",null,[e("a",Ie,[n("nutui-bingo"),t(r)])]),e("li",null,[e("a",Ce,[n("uni-ui"),t(r)])])]),Se,ze,e("div",je,[Be,e("ul",null,[e("li",null,[e("p",null,[e("a",qe,[n("微信小程序开发资源汇总"),t(r)])])]),e("li",null,[e("p",null,[e("a",ye,[n("插件市场"),t(r)])])])])]),e("ul",null,[e("li",null,[e("a",Ne,[n("uni-request"),t(r)]),n("：发起HTTP请求")]),e("li",null,[e("a",Pe,[n("uni-simple-router-v3"),t(r)]),n("：vue3 + vite 路由")]),e("li",null,[e("a",He,[n("uniapp-router-patch"),t(r)]),n("：路由兼容插件")]),e("li",null,[e("a",Oe,[n("uni-icons"),t(r)]),n("：丰富图标集")]),e("li",null,[e("a",Re,[n("popup"),t(r)]),n("：弹出框和提示框")]),e("li",null,[e("a",Te,[n("uni-calendar"),t(r)]),n("：日历组件")]),e("li",null,[e("a",De,[n("uni-datetime-picker"),t(r)]),n("：日期选择器")]),e("li",null,[e("a",Qe,[n("uni-file-picker"),t(r)]),n("：文件选择器")]),e("li",null,[e("a",Fe,[n("uni-data-picker"),t(r)]),n("：数据驱动的picker选择器")]),Ke,e("li",null,[e("a",Je,[n("z-paging"),t(r)]),n("：上拉加载下拉刷新组件")]),e("li",null,[e("a",Le,[n("z-tabs"),t(r)]),n("：tab栏组件库")]),e("li",null,[e("a",Xe,[n("uni-composition-api"),t(r)]),n("：Composition API 插件")]),e("li",null,[e("a",Ge,[n("uni-simple-router"),t(r)]),n("：路由扩展库")])]),Ye,Me,e("div",Ze,[$e,en,e("ol",null,[e("li",null,[e("p",null,[e("a",nn,[n("官方说明，遇到问题可以先看这"),t(r)])])]),e("li",null,[e("p",null,[e("a",tn,[n("官方总结"),t(r)])])])])]),rn])}const un=s(c,[["render",ln],["__file","index.html.vue"]]);export{un as default};