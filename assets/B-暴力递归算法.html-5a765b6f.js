import{_ as o,Q as e,S as c,U as n,W as t,X as p,a8 as s,a9 as l,H as i}from"./framework-d7e1aa10.js";const u={},r=n("h1",{id:"暴力递归算法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#暴力递归算法","aria-hidden":"true"},"#"),s(" 暴力递归算法")],-1),k={class:"table-of-contents"},d=l(`<div class="hint-container info"><p class="hint-container-title">说明</p><ul><li><p>暴力递归就是不断分解问题，不断寻找子问题，直到到达不能分解的问题（base case）</p></li><li><p>暴力递归是动态规划的基础</p></li></ul></div><h2 id="汉诺塔问题" tabindex="-1"><a class="header-anchor" href="#汉诺塔问题" aria-hidden="true">#</a> 汉诺塔问题</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">hanoi</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">process</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token string">&quot;左&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;右&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 因为每个过程都是一样，都可以抽象成 from 到 to 的问题，所以只需考虑一个大的标准，只要每个过程都满足了，整个过程就是对的</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token class-name">String</span> form<span class="token punctuation">,</span> <span class="token class-name">String</span> end<span class="token punctuation">,</span> <span class="token class-name">String</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里就是 base case</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Move 1 from&quot;</span> <span class="token operator">+</span> from <span class="token operator">+</span> <span class="token string">&quot;to&quot;</span> <span class="token operator">+</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">process</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> from<span class="token punctuation">,</span> other<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Move&quot;</span> <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token string">&quot;from&quot;</span> <span class="token operator">+</span> from <span class="token operator">+</span> <span class="token string">&quot;to&quot;</span> <span class="token operator">+</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">process</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> other<span class="token punctuation">,</span> end<span class="token punctuation">,</span> from<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="字符串全部子序列" tabindex="-1"><a class="header-anchor" href="#字符串全部子序列" aria-hidden="true">#</a> 字符串全部子序列</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// i 表示当前来到的位置，str 中存着是否打印的信息</span>
<span class="token comment">// 每到一个字母都会有两条路，取或不取</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> str<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 下面的方法是充分利用了 str 的储存空间，没有增加额外的空间</span>
    <span class="token comment">// 取当前的字符</span>
    <span class="token function">process</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> tmp <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 不取当前字符</span>
    <span class="token function">process</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>；
    str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,b){const a=i("router-link");return e(),c("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[t(a,{to:"#暴力递归算法"},{default:p(()=>[s("暴力递归算法")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#汉诺塔问题"},{default:p(()=>[s("汉诺塔问题")]),_:1})]),n("li",null,[t(a,{to:"#字符串全部子序列"},{default:p(()=>[s("字符串全部子序列")]),_:1})])])])])]),d])}const h=o(u,[["render",v],["__file","B-暴力递归算法.html.vue"]]);export{h as default};
