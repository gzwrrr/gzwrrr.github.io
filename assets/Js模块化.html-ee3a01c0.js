import{_ as o,Q as p,S as c,U as n,W as e,X as t,a8 as s,a9 as i,H as l}from"./framework-d7e1aa10.js";const u={},d=n("h1",{id:"js-模块化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#js-模块化","aria-hidden":"true"},"#"),s(" JS 模块化")],-1),r={class:"table-of-contents"},k=i(`<h2 id="commonjs-和-es6" tabindex="-1"><a class="header-anchor" href="#commonjs-和-es6" aria-hidden="true">#</a> CommonJS 和 ES6</h2><p>CommonJS和ES6都是JavaScript的模块规范，用于管理JavaScript代码的组织和导入/导出 CommonJS是一种用于服务器端JavaScript的模块规范，它最初由Node.js采用并使用。它通过定义 module.exports 和 require 函数来导出和导入模块。在CommonJS中，每个文件都是一个模块，文件中定义的变量和函数只能在该模块中使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出模块</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">bar</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 导入模块</span>
<span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./module&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6是JavaScript的下一代标准，它也有自己的模块规范。ES6模块使用 <code>export</code> 和 <code>import</code> 语句来导出和导入模块。ES6模块支持静态分析和静态编译，可以进行编译时优化</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出模块</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 导入模块</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module&#39;</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比之下，ES6模块具有以下优势：</p><ul><li>支持静态分析和静态编译，可以进行编译时优化</li><li>支持异步加载模块</li><li>可以在运行时动态生成模块名称</li><li>ES6模块默认使用严格模式，不支持CommonJS的一些特性，例如 <code>module.exports</code> 和 <code>require</code> 函数</li></ul><p>总的来说，ES6模块相比于CommonJS模块更加现代化和高效，但是由于历史原因和兼容性问题，目前在一些环境中仍然使用CommonJS模块</p><h3 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h3><p>在 CommonJS 中，通过 <code>require</code> 导入模块，通过 <code>module.exports</code> 或 <code>exports</code> 导出模块</p><p><strong>导入模块：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入整个模块</span>
<span class="token keyword">const</span> module1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./module1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 导入部分内容</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> func1<span class="token punctuation">,</span> var1 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./module1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 导入默认内容</span>
<span class="token keyword">const</span> module2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./module2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导出模块：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出一个函数</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 导出一个对象</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> func1<span class="token punctuation">,</span> var1 <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 导出默认内容</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">default</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h3><p>在 ES6 中，通过 <code>import</code> 导入模块，通过 <code>export</code> 导出模块</p><p><strong>导入模块：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入整个模块</span>
<span class="token keyword">import</span> module1 <span class="token keyword">from</span> <span class="token string">&#39;./module1&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 导入部分内容</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> func1<span class="token punctuation">,</span> var1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module1&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 导入默认内容</span>
<span class="token keyword">import</span> module2 <span class="token keyword">from</span> <span class="token string">&#39;./module2&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导出模块：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出一个函数</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 导出一个对象</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> var1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 导出默认内容</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(v,b){const a=l("router-link");return p(),c("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[e(a,{to:"#js-模块化"},{default:t(()=>[s("JS 模块化")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#commonjs-和-es6"},{default:t(()=>[s("CommonJS 和 ES6")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#commonjs"},{default:t(()=>[s("CommonJS")]),_:1})]),n("li",null,[e(a,{to:"#es6"},{default:t(()=>[s("ES6")]),_:1})])])])])])])]),k])}const g=o(u,[["render",m],["__file","Js模块化.html.vue"]]);export{g as default};
