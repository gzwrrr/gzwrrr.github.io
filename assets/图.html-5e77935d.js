import{_ as t,Q as n,S as i,U as l,W as a,X as o,a8 as s,H as c}from"./framework-d7e1aa10.js";const m={},u=l("h1",{id:"图",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#图","aria-hidden":"true"},"#"),s(" 图")],-1),_={class:"table-of-contents"},r=l("p",null,"图论基础：",-1),x=l("p",null,"无向图的权重邻接矩阵：",-1),d=l("ol",null,[l("li",null,"无向图对应的权重邻接矩阵是一个对称矩阵（有向图一般不是对称的），其对角线上的元素为 0"),l("li",null,[l("mjx-container",{class:"MathJax",jax:"CHTML",style:{position:"relative"}},[l("mjx-math",{class:"MJX-TEX","aria-hidden":"true"},[l("mjx-msub",null,[l("mjx-mi",{class:"mjx-i"},[l("mjx-c",{class:"mjx-c1D437 TEX-I"})]),l("mjx-script",{style:{"vertical-align":"-0.15em"}},[l("mjx-mi",{class:"mjx-i",size:"s"},[l("mjx-c",{class:"mjx-c1D456 TEX-I"})])])]),l("mjx-mi",{class:"mjx-i"},[l("mjx-c",{class:"mjx-c1D457 TEX-I"})])]),l("mjx-assistive-mml",{unselectable:"on",display:"inline"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("msub",null,[l("mi",null,"D"),l("mi",null,"i")]),l("mi",null,"j")])])]),s(" 表示第 i 个点到第 j 个节点的权重")])],-1),h=l("p",null,"两个算法：",-1),j=l("ol",null,[l("li",null,"迪杰斯特拉算法（可以用于有向图，但是不能处理负权重）"),l("li",null,"弗洛伊德算法（不支持含有负权重回路的图）"),l("li",null,"贝尔曼-福特算法（不支持含有负权重回路的图，但是可以处理具有负权重的「有向图」）")],-1),p=l("p",null,"什么是负权回路：",-1),f=l("ol",null,[l("li",null,"在一个图中每条边都有一个权重（有正有负）"),l("li",null,"如果存在一个环，从某点出发最后又回到自己，而且环上的「所有权值和为负数」，那么就称为负权回路"),l("li",null,"存在负权回路的图不能求两点之间最短路径，因为只要在负权回路上不停绕圈，所得的最短长度可以任意小")],-1);function v(M,T){const e=c("router-link");return n(),i("div",null,[u,l("nav",_,[l("ul",null,[l("li",null,[a(e,{to:"#图"},{default:o(()=>[s("图")]),_:1})])])]),r,x,d,h,j,p,f])}const b=t(m,[["render",v],["__file","图.html.vue"]]);export{b as default};
