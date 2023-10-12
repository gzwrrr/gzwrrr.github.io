import{_ as r,Q as n,S as a,U as e,a8 as l,W as o,a9 as t,H as s}from"./framework-d7e1aa10.js";const d={},h=e("h1",{id:"kubernetes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kubernetes","aria-hidden":"true"},"#"),l(" Kubernetes")],-1),c={class:"hint-container info"},u=e("p",{class:"hint-container-title"},"相关资源",-1),_={href:"https://kubernetes.io/zh-cn/docs/home/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.bilibili.com/video/BV13Q4y1C7hS/?p=68&vd_source=e356fec025b50061af78324a814f8da0",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.yuque.com/leifengyang/oncloud/ghnb83#4d9Xi",target:"_blank",rel:"noopener noreferrer"},b={href:"https://kubernetes.io/docs/home/",target:"_blank",rel:"noopener noreferrer"},m=t('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><ol><li>Google 开源项目</li><li>可移植的、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化</li></ol><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><ol><li>自动装箱</li><li>自我修复</li><li>水平扩展</li><li>服务发现</li><li>滚动更新</li><li>版本回退</li><li>密钥与配置管理</li><li>存储编排</li><li>批处理</li></ol><h2 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h2><p>主控节点（master），节点中包括：</p><ol><li>ApiServer：集群统一入口，以 restful 方式交给 etcd 存储</li><li>Scheduler：节点调度，选择 node 节点应用部署</li><li>ControllerManager：处理集群中常规后台任务，一个资源对应一个控制器</li><li>etcd：存储系统，用于保存集群相关的数据</li></ol><p>工作节点（node），节点中包括：</p><ol><li>Kubelet：master 节点派到 node 节点中的代表，用于管理本机容器操作</li><li>KubeProxy：提供网络代理，负载均衡等操作</li></ol><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2><ol><li>Pod：最小的部署单元，其中可以包含多个容器，这些容器是共享网络的，生命周期较短</li><li>Controller：可以保证预期的 Pod 副本的数量，可以进行有/无状态的应用部署，确保所有的 node 运行同一个 Pod，可以创建一次性任务或者定时任务</li><li>Service：定义一组 Pod 的访问规则</li></ol><p>期间集群方式：</p><ol><li>单 master 集群</li><li>多 master 集群</li></ol><p>两种常见部署方式：</p><ol><li>kubeadm：简单，比较常用</li><li>二进制包部署：较难</li></ol>',15);function k(x,v){const i=s("ExternalLinkIcon");return n(),a("div",null,[h,e("div",c,[u,e("ol",null,[e("li",null,[e("p",null,[l("Kubernetes 简单使用，"),e("a",_,[l("官网戳这"),o(i)])])]),e("li",null,[e("p",null,[e("a",p,[l("云原生Java架构师的第一课K8s+Docker+KubeSphere+DevOps"),o(i)])])]),e("li",null,[e("p",null,[e("a",f,[l("云原生实战 k8s 语雀文档"),o(i)])])]),e("li",null,[e("p",null,[e("a",b,[l("K8S 官方文档"),o(i)])])])])]),m])}const S=r(d,[["render",k],["__file","index.html.vue"]]);export{S as default};