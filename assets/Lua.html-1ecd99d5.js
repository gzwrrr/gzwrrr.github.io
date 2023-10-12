import{_ as o,Q as c,S as u,U as n,W as a,X as t,a8 as s,a9 as i,H as p}from"./framework-d7e1aa10.js";const d={},r=n("h1",{id:"lua-简单使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lua-简单使用","aria-hidden":"true"},"#"),s(" Lua 简单使用")],-1),k={class:"table-of-contents"},v=i(`<h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><p><strong>包含：</strong></p><ol><li>基础语法</li><li>流程控制</li><li>函数</li><li>table（包含很多函数）：pack、unpack、concat、insert、remove、sort，可以数组和 map 混合存储，且 map 的元素不占数组的索引 <ol><li>数组：可以有多维，数组下面从 1 开始，无需声明长度，可以随时添加元素，并且元素可以是任意类型，但是不能包含 nil</li><li>map</li></ol></li><li>迭代器：pairs（迭代数组元素）、ipairs（迭代所有元素）</li><li>模块：一般为一个 table</li><li>元表与元方法：每个普通的 table 都可以变为一个元表，可以改变普通 table 的方法或者说表现 <ol><li>setmetatable(table, metatable)：将 metatable 指定为普通表的元表</li><li>getmetatable()：获取元表</li></ol></li><li>对象：Lua 中没有类的概念，但是可以通过 table、function 和元表模拟类的功能和结构</li><li>协同线程：类型为 thread，也称为多线程，但是注意，任意时刻只会有一个协同线程执行，不会有多个，只不过可以暂停转到其他协同线程执行</li><li>协同函数：协同线程可以单独创建执行，也可以通过协同函数的调用启动执行，可以使用 coroutine.wrap() 获取到协同函数</li><li>文件 IO</li></ol><p><strong>其他：</strong></p><ol><li><p>空值：nil</p></li><li><p>函数可以当作参数传递</p></li></ol><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- if</span>
<span class="token keyword">if</span> a <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token keyword">then</span>
    <span class="token comment">-- xx</span>
<span class="token keyword">elseif</span> a <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token keyword">then</span>
    <span class="token comment">--xx</span>
<span class="token keyword">else</span>
    <span class="token comment">--xx</span>
<span class="token keyword">end</span>

<span class="token comment">-- for 循环</span>
<span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token keyword">do</span>
    <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment">-- 数组 foreach</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token keyword">in</span> <span class="token function">pairs</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment">-- table foreach</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token keyword">in</span> <span class="token function">ipairs</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 声明模块，单独文件中声明</span>
rect <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">-- 在其他文件中引入</span>
require <span class="token string">&quot;rect&quot;</span>

<span class="token comment">-- 添加一个模块变量</span>
rect<span class="token punctuation">.</span>pi <span class="token operator">=</span> <span class="token number">3.14</span>

<span class="token comment">-- 添加一个模块函数</span>
<span class="token keyword">function</span> rect<span class="token punctuation">.</span><span class="token function">per</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span>
<span class="token keyword">end</span>

<span class="token comment">-- 匿名函数</span>
rect<span class="token punctuation">.</span>area <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b
<span class="token keyword">end</span>

<span class="token comment">-- 下面定义与模块无关的内容，在其他文件中引入后可以直接使用</span>
<span class="token comment">-- 定义一个全局变量</span>
global <span class="token operator">=</span> <span class="token number">100</span>

<span class="token comment">-- 定义一个局部函数</span>
<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">circle</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
    <span class="token keyword">return</span> rect<span class="token punctuation">.</span>pi <span class="token operator">*</span> r <span class="token operator">*</span> r
<span class="token keyword">end</span>

<span class="token comment">-- 定义一个全局函数</span>
<span class="token keyword">function</span> <span class="token function">maxArea</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token keyword">local</span> r <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">circle</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元表" tabindex="-1"><a class="header-anchor" href="#元表" aria-hidden="true">#</a> 元表</h2>`,10),m={href:"https://www.lua.org/manual/5.4/",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 声明一个元表</span>
meta <span class="token operator">=</span> <span class="token punctuation">{</span>
    __tostring <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>tab<span class="token punctuation">)</span>
        <span class="token comment">---xxx</span>
    <span class="token keyword">end</span>
<span class="token punctuation">}</span>

<span class="token comment">-- 将原表与元表相关联，使用时还是直接用 table</span>
<span class="token function">setmetatable</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> meta<span class="token punctuation">)</span>

<span class="token comment">-- key 不存在原本输出 nil，可以修改</span>
meta<span class="token punctuation">.</span>__index <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token keyword">return</span> key<span class="token operator">..</span>”不存在“
<span class="token keyword">end</span>

<span class="token comment">-- 新增一个 key 时返回</span>
<span class="token keyword">function</span> meta<span class="token punctuation">.</span><span class="token function">__newindex</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;新增&quot;</span><span class="token operator">..</span>key<span class="token punctuation">)</span>
	<span class="token keyword">return</span> val
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 创建一个对象，但是这样创建之后引用指向的全是同一个对象</span>
animal <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">-- 名字</span>
    name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span>
    
    <span class="token comment">--年龄</span>
    age <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
    
    <span class="token comment">-- 添加方法，注意 self 要自己传</span>
    bark <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> voice<span class="token punctuation">)</span>
    	<span class="token function">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token operator">..</span><span class="token string">&quot;在&quot;</span><span class="token operator">..</span>voice<span class="token operator">..</span><span class="token string">&quot;叫&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">end</span><span class="token punctuation">,</span>
    
    <span class="token comment">-- 也可以按下面的方式添加，self 不用自己传，但是调用时要用 animal:say(xxx)</span>
    <span class="token keyword">function</span> animal<span class="token punctuation">:</span><span class="token function">say</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token operator">..</span><span class="token string">&quot;说&quot;</span><span class="token operator">..</span>say<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token punctuation">}</span>


<span class="token comment">-- 指向的都是同一个对象</span>
animal1 <span class="token operator">=</span> animal
animal2 <span class="token operator">=</span> animal


<span class="token comment">-- 可以配合元表实现创建不同的对象</span>
Animal <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">-- 名字</span>
    name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span>
    
    <span class="token comment">--年龄</span>
    age <span class="token operator">=</span> <span class="token number">5</span>
<span class="token punctuation">}</span>


<span class="token comment">-- 添加一个自定义方法，当作无参构造器</span>
<span class="token keyword">function</span> Animal<span class="token punctuation">:</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">-- 创建一个空表</span>
    <span class="token keyword">local</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">-- 为新表指定元表，以此当作基础类表</span>
    <span class="token comment">-- 在新表中找不到的 key，会从 self 基础类中查找</span>
    <span class="token function">setmetatable</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">{</span>__index<span class="token operator">=</span>self<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">-- 返回新表</span>
    <span class="token keyword">return</span> a
<span class="token keyword">end</span>


<span class="token comment">-- 创建不同的对象，取值时如果没有会到 self 表中找，赋值时会直接赋值到新表 a 中</span>
Animal1 <span class="token operator">=</span> Animal<span class="token punctuation">:</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Animal2 <span class="token operator">=</span> Animal<span class="token punctuation">:</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">-- 创建有参构造器，这里以传入一个 table 举例</span>
<span class="token keyword">function</span> Animal<span class="token punctuation">:</span><span class="token function">new</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span>
    <span class="token keyword">local</span> a <span class="token operator">=</span> obj <span class="token keyword">or</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">setmetatable</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">{</span>__index<span class="token operator">=</span>self<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> a 
<span class="token keyword">end</span>

<span class="token comment">-- 继承</span>
Cat <span class="token operator">=</span> Animal<span class="token punctuation">:</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type <span class="token operator">=</span> <span class="token string">&quot;cat&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
Cat1 <span class="token operator">=</span> Cat<span class="token punctuation">:</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="协同线程" tabindex="-1"><a class="header-anchor" href="#协同线程" aria-hidden="true">#</a> 协同线程</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 创建一个协同线程实例</span>
crt <span class="token operator">=</span> coroutine<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
    <span class="token comment">-- 匿名函数作为参数</span>
	<span class="token keyword">function</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span>
        
        <span class="token comment">-- 获取正在运行的协同线程的实例</span>
        <span class="token function">print</span><span class="token punctuation">(</span>coroutine<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        
        <span class="token comment">-- 查看协同线程的状态</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;crt: &quot;</span><span class="token operator">..</span>coroutine<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>crt<span class="token punctuation">)</span><span class="token punctuation">)</span>
        
        <span class="token comment">-- 挂起协同线程</span>
        coroutine<span class="token punctuation">.</span><span class="token function">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment">-- 继续执行时打印</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;继续执行...&quot;</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> a<span class="token punctuation">,</span> b
    <span class="token keyword">end</span>
<span class="token punctuation">)</span>

<span class="token comment">-- 启动协同线程实例</span>
coroutine<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span>crt<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment">-- 在主线程中查看协同线程的状态</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;main: &quot;</span><span class="token operator">..</span>coroutine<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>crt<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">-- 继续执行协同线程，可以获取到返回值</span>
a<span class="token punctuation">,</span> b <span class="token operator">=</span> coroutine<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span>crt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="协同函数" tabindex="-1"><a class="header-anchor" href="#协同函数" aria-hidden="true">#</a> 协同函数</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 获取协同线程</span>
cf <span class="token operator">=</span> coroutine<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>
	<span class="token keyword">function</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
        
        <span class="token comment">-- 获取当前协同函数创建的协同线程</span>
        tr <span class="token operator">=</span> coroutine<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">type</span><span class="token punctuation">(</span>tr<span class="token punctuation">)</span><span class="token punctuation">)</span>
        
        <span class="token comment">-- 挂起协同线程</span>
        coroutine<span class="token punctuation">.</span><span class="token function">yield</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
        
        <span class="token comment">-- 继续执行时打印</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;继续执行...&quot;</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> a <span class="token operator">*</span> b
    <span class="token keyword">end</span>
<span class="token punctuation">)</span>

<span class="token comment">-- 调用协同函数，启动协同线程，获取 yield 时返回的数据</span>
a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token function">cf</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment">-- 继续执行挂起的协同线程</span>
r1<span class="token punctuation">,</span> r2 <span class="token operator">=</span> <span class="token function">cf</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件-io" tabindex="-1"><a class="header-anchor" href="#文件-io" aria-hidden="true">#</a> 文件 IO</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 只读方式打开文件</span>
file <span class="token operator">=</span> io<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;path&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span>

<span class="token comment">-- 指定要读取的文件为 file</span>
io<span class="token punctuation">.</span><span class="token function">input</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>

<span class="token comment">-- 读取当前位置</span>
pos <span class="token operator">=</span> file<span class="token punctuation">:</span><span class="token function">seek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">-- 读取一行数据</span>
line <span class="token operator">=</span> io<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&quot;*1&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> line <span class="token operator">~=</span> <span class="token keyword">nil</span> <span class="token keyword">do</span>
    <span class="token function">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
    line <span class="token operator">=</span> io<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&quot;*1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment">-- 关闭文件</span>
io<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>

<span class="token comment">-- 指定要写入的文件为 file</span>
io<span class="token punctuation">.</span><span class="token function">output</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>

<span class="token comment">-- 写入一行数据</span>
io<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\nhelloworld&quot;</span><span class="token punctuation">)</span>

<span class="token comment">-- 关闭文件</span>
io<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function f(w,h){const e=p("router-link"),l=p("ExternalLinkIcon");return c(),u("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[a(e,{to:"#lua-简单使用"},{default:t(()=>[s("Lua 简单使用")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#概览"},{default:t(()=>[s("概览")]),_:1})]),n("li",null,[a(e,{to:"#流程控制"},{default:t(()=>[s("流程控制")]),_:1})]),n("li",null,[a(e,{to:"#模块"},{default:t(()=>[s("模块")]),_:1})]),n("li",null,[a(e,{to:"#元表"},{default:t(()=>[s("元表")]),_:1})]),n("li",null,[a(e,{to:"#类"},{default:t(()=>[s("类")]),_:1})]),n("li",null,[a(e,{to:"#协同线程"},{default:t(()=>[s("协同线程")]),_:1})]),n("li",null,[a(e,{to:"#协同函数"},{default:t(()=>[s("协同函数")]),_:1})]),n("li",null,[a(e,{to:"#文件-io"},{default:t(()=>[s("文件 IO")]),_:1})])])])])]),v,n("blockquote",null,[n("p",null,[s("其他元方法看官网："),n("a",m,[s("https://www.lua.org/manual/5.4/"),a(l)])])]),b])}const g=o(d,[["render",f],["__file","Lua.html.vue"]]);export{g as default};
