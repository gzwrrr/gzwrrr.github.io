import{_ as i,Q as o,S as l,U as s,V as c,a6 as n,W as d,X as _,T as p,a7 as u,a8 as f}from"./framework-ec2af7a3.js";const h={name:"Collapse",components:{},props:{title:{type:String,default:"标题"},headColor:{type:String,default:"var(--theme-blue)"},bgColor:{type:String,default:"var(--theme-blue)"},width:{type:String,default:"100%"},isCollapse:{type:Boolean,default:!0}},data(){return{collapse:this.isCollapse}},computed:{},created(){},mounted(){},filters:{},methods:{},watch:{}},C={class:"title"},m={style:{float:"right"}},y={key:0,class:"el-icon-arrow-down"},g={key:1,class:"el-icon-arrow-right"},v={key:0,class:"content"};function b(r,a,e,w,t,S){return o(),l("div",{class:"Collapse",style:n({backgroundColor:e.bgColor,width:e.width})},[s("div",{class:"CollapseHead",style:n({color:e.headColor,borderLeftColor:e.headColor}),onClick:a[0]||(a[0]=k=>t.collapse=!t.collapse)},[s("span",C,c(e.title),1),s("span",m,[t.collapse?(o(),l("i",y)):(o(),l("i",g))])],4),d(p,{name:"content"},{default:_(()=>[t.collapse?(o(),l("div",v,[u(r.$slots,"default",{},void 0,!0)])):f("",!0)]),_:3})],4)}const B=i(h,[["render",b],["__scopeId","data-v-aff478b9"],["__file","Collapse.vue"]]);export{B as default};