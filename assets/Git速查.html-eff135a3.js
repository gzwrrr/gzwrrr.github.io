import{_ as i,Q as l,S as r,U as a,W as s,X as t,a8 as e,a9 as o,H as d}from"./framework-d7e1aa10.js";const c={},p=a("h1",{id:"git-速查",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#git-速查","aria-hidden":"true"},"#"),e(" Git 速查")],-1),u={class:"table-of-contents"},h=o(`<h1 id="写在前面" tabindex="-1"><a class="header-anchor" href="#写在前面" aria-hidden="true">#</a> 写在前面</h1><ul><li>本文章为 Git 常用命令的速查记录</li><li>持续添加...</li></ul><h1 id="添加-删除远程仓库地址" tabindex="-1"><a class="header-anchor" href="#添加-删除远程仓库地址" aria-hidden="true">#</a> 添加/删除远程仓库地址</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
<span class="token comment"># 指定分支和上传</span>
<span class="token function">git</span> push --set-upstream <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> master
<span class="token comment"># 查看远程仓库地址</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token comment"># 删除全部远程地址</span>
<span class="token function">git</span> remote remove origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="强制覆盖本地分支" tabindex="-1"><a class="header-anchor" href="#强制覆盖本地分支" aria-hidden="true">#</a> 强制覆盖本地分支</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch <span class="token parameter variable">--all</span>  
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/分支名称
<span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="本地强制回滚" tabindex="-1"><a class="header-anchor" href="#本地强制回滚" aria-hidden="true">#</a> 本地强制回滚</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 提交的 ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(v,b){const n=d("router-link");return l(),r("div",null,[p,a("nav",u,[a("ul",null,[a("li",null,[s(n,{to:"#git-速查"},{default:t(()=>[e("Git 速查")]),_:1})]),a("li",null,[s(n,{to:"#写在前面"},{default:t(()=>[e("写在前面")]),_:1})]),a("li",null,[s(n,{to:"#添加-删除远程仓库地址"},{default:t(()=>[e("添加/删除远程仓库地址")]),_:1})]),a("li",null,[s(n,{to:"#强制覆盖本地分支"},{default:t(()=>[e("强制覆盖本地分支")]),_:1})]),a("li",null,[s(n,{to:"#本地强制回滚"},{default:t(()=>[e("本地强制回滚")]),_:1})])])]),h])}const f=i(c,[["render",m],["__file","Git速查.html.vue"]]);export{f as default};
