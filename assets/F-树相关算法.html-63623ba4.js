import{_ as l,Q as i,S as u,U as n,W as a,X as t,a8 as s,a9 as c,H as o}from"./framework-d7e1aa10.js";const r={},k=n("h1",{id:"树相关算法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#树相关算法","aria-hidden":"true"},"#"),s(" 树相关算法")],-1),d={class:"table-of-contents"},m=c(`<h2 id="树状数组" tabindex="-1"><a class="header-anchor" href="#树状数组" aria-hidden="true">#</a> 树状数组</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BitArray</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 树状数组
     */</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">BitArray</span><span class="token punctuation">(</span><span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 初始化
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">update</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取 index 最低位 1
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引
     * <span class="token keyword">@return</span> index 最低位 1
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lowbit</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token operator">-</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 单点修改
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 目标左营
     * <span class="token keyword">@param</span> <span class="token parameter">num</span> 操作数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> pos <span class="token operator">=</span> index<span class="token punctuation">;</span> pos <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> pos <span class="token operator">+=</span> <span class="token function">lowbit</span><span class="token punctuation">(</span>pos<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            array<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">+=</span> num<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 前 N 项和
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 右边界
     * <span class="token keyword">@return</span> 前 N 项和
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> pos <span class="token operator">=</span> index<span class="token punctuation">;</span> pos <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> pos <span class="token operator">-=</span> <span class="token function">lowbit</span><span class="token punctuation">(</span>pos<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> array<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 区间查询
     * <span class="token keyword">@param</span> <span class="token parameter">l</span> 左边界
     * <span class="token keyword">@param</span> <span class="token parameter">r</span> 右边界
     * <span class="token keyword">@return</span> 区间和
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">query</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">query</span><span class="token punctuation">(</span>l <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线段树" tabindex="-1"><a class="header-anchor" href="#线段树" aria-hidden="true">#</a> 线段树</h2>`,3),v={class:"hint-container info"},b=n("p",{class:"hint-container-title"},"相关资源",-1),y={href:"https://zhuanlan.zhihu.com/p/106118909",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.bilibili.com/video/BV1yF411p7Bt/?spm_id_from=333.337.search-card.all.click&vd_source=e356fec025b50061af78324a814f8da0",target:"_blank",rel:"noopener noreferrer"},f=c(`<div class="hint-container info"><p class="hint-container-title">说明</p><p>线段树是平衡二叉树</p><p>使用小区间更新大区间，问题需要满足：区间加法</p><p>对于区间 [L, R]，答案可以通过 [L, M] + [M+1, R] 求出</p><p>可以求解的问题：</p><ol><li>区间求和</li><li>区间最大/小值</li></ol><p>不可以求解的问题：</p><ol><li>区间的众数</li><li>区间最长连续问题</li><li>最长不下降问题</li></ol><p>数据结构：</p><p>一般是用数组，以堆的方式存储数据，注意线段树的数组要开到 4 * N 大小才不会出现越界访问</p></div><p>线段树涉及的操作：</p><ol><li>单点修改： <ol><li>深搜，如果当前节点的左儿子的区间 [L, R] 包含了 i，那么就访问左儿子，否则访问右儿子</li><li>当搜索到需要修改的数据后（L = R），修改数据，之后将包含该数据的大区间的值更新</li></ol></li><li>区间求和： <ol><li>如果需要查询的区间完全覆盖当前区间，直接返回当前区间的值</li><li>如果查询区间与左儿子有交集，搜索左儿子，否则右儿子</li><li>最后合并处理两边搜索结果</li></ol></li><li>区间修改，lazy 标记（表示区间的值已经更新，但是子区间还没有更新，更新的信息存储在标记中）： <ol><li>如果需要修改的区间完全覆盖当前的区间，那么直接更新这个区间，打上 lazy 标记</li><li>如果没有完全覆盖，并且当前区间有 lazy 标记，那么先下传 lazy 标记到子区间，再清除当前区间的 lazy 标记</li><li>如果修改区间和左儿子有交集，搜索左儿子，否则搜索右儿子</li><li>最后将当前区间的值更新</li></ol></li><li>区间查询： <ol><li>如果需要查询的区间完全覆盖当前区间，直接返回当前区间的值，如果没有完全覆盖，下传 lazy 标记</li><li>如果查询区间与左儿子有交集，搜索左儿子，否则右儿子</li><li>最后合并处理两边搜索结果</li></ol></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SegmentTree</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 原数组长度
     */</span>
    <span class="token keyword">int</span> len<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 原数组
     */</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 线段树
     */</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 懒标记
     */</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> mark<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SegmentTree</span><span class="token punctuation">(</span><span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>len <span class="token operator">=</span> length<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 初始化
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nums <span class="token operator">=</span> nums<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 初始化</span>
        <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 打印
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向下更新懒标
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 当前索引
     * <span class="token keyword">@param</span> <span class="token parameter">len</span> 目标区间长度
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushDown</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更新子区间的标记</span>
        mark<span class="token punctuation">[</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> mark<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        mark<span class="token punctuation">[</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> mark<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 更新区间的值</span>
        array<span class="token punctuation">[</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> mark<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token punctuation">(</span>len <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        array<span class="token punctuation">[</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> mark<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>len <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 更新完当前的区间就把懒标记清除</span>
        mark<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 默认构建
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * index: 当前索引(1)
         * 目标左边界(1)
         * 目标右边界(len)
         */</span>
        <span class="token function">build</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 构建
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 当前索引
     * <span class="token keyword">@param</span> <span class="token parameter">l</span> 目标左边界
     * <span class="token keyword">@param</span> <span class="token parameter">r</span> 目标有边界
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">==</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            array<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>l <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">build</span><span class="token punctuation">(</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">build</span><span class="token punctuation">(</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        array<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> array<span class="token punctuation">[</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 区间更新
     * <span class="token keyword">@param</span> <span class="token parameter">l</span> 目标左边界
     * <span class="token keyword">@param</span> <span class="token parameter">r</span> 目标右边界
     * <span class="token keyword">@param</span> <span class="token parameter">num</span> 操作数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * cl: 当前左边界(1)
         * cr: 当前右边界(len)
         * index: 当前索引(1)
         */</span>
        <span class="token function">update</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 更新区间值
     * <span class="token keyword">@param</span> <span class="token parameter">l</span> 目标左边界
     * <span class="token keyword">@param</span> <span class="token parameter">r</span> 目标右边界
     * <span class="token keyword">@param</span> <span class="token parameter">cl</span> 当前左边界
     * <span class="token keyword">@param</span> <span class="token parameter">cr</span> 当前右边界
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 当前索引
     * <span class="token keyword">@param</span> <span class="token parameter">num</span> 操作数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token keyword">int</span> cl<span class="token punctuation">,</span> <span class="token keyword">int</span> cr<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cl <span class="token operator">&gt;</span> r <span class="token operator">||</span> cr <span class="token operator">&lt;</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cl <span class="token operator">&gt;=</span> l <span class="token operator">&amp;&amp;</span> cr <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            array<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token punctuation">(</span>cr <span class="token operator">-</span> cl <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> num<span class="token punctuation">;</span>
            <span class="token comment">// 非叶子节点更新</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cr <span class="token operator">&gt;</span> cl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                mark<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+=</span> num<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> cl <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>cr <span class="token operator">-</span> cl<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">pushDown</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> cr <span class="token operator">-</span> cl <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> cl<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> cr<span class="token punctuation">,</span> index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        array<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> array<span class="token punctuation">[</span>index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 单点查询
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 目标
     * <span class="token keyword">@return</span> 区间查询结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * cl: 当前左边界(1)
         * cr: 当前右边界(len)
         * index: 当前索引(1)
         */</span>
        <span class="token keyword">return</span> <span class="token function">query</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 区间查询
     * <span class="token keyword">@param</span> <span class="token parameter">l</span> 目标左边界
     * <span class="token keyword">@param</span> <span class="token parameter">r</span> 目标右边界
     * <span class="token keyword">@return</span> 区间查询结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * cl: 当前左边界(1)
         * cr: 当前右边界(len)
         * index: 当前索引(1)
         */</span>
        <span class="token keyword">return</span> <span class="token function">query</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 查询
     * <span class="token keyword">@param</span> <span class="token parameter">l</span> 目标左边界
     * <span class="token keyword">@param</span> <span class="token parameter">r</span> 目标有边界
     * <span class="token keyword">@param</span> <span class="token parameter">cl</span> 当前左边界
     * <span class="token keyword">@param</span> <span class="token parameter">cr</span> 当前右边界
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 当前索引
     * <span class="token keyword">@return</span> 区间查询结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token keyword">int</span> cl<span class="token punctuation">,</span> <span class="token keyword">int</span> cr<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cl <span class="token operator">&gt;=</span> l <span class="token operator">&amp;&amp;</span> cr <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> cl <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>cr <span class="token operator">-</span> cl<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 更新懒标记</span>
        <span class="token function">pushDown</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> cr <span class="token operator">-</span> cl <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">&gt;=</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> <span class="token function">query</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> cl<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> <span class="token function">query</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> cr<span class="token punctuation">,</span> index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function h(x,_){const p=o("router-link"),e=o("ExternalLinkIcon");return i(),u("div",null,[k,n("nav",d,[n("ul",null,[n("li",null,[a(p,{to:"#树相关算法"},{default:t(()=>[s("树相关算法")]),_:1}),n("ul",null,[n("li",null,[a(p,{to:"#树状数组"},{default:t(()=>[s("树状数组")]),_:1})]),n("li",null,[a(p,{to:"#线段树"},{default:t(()=>[s("线段树")]),_:1})])])])])]),m,n("div",v,[b,n("p",null,[s("文章："),n("a",y,[s("https://zhuanlan.zhihu.com/p/106118909"),a(e)])]),n("p",null,[s("视频："),n("a",w,[s("https://www.bilibili.com/video/BV1yF411p7Bt/?spm_id_from=333.337.search-card.all.click&vd_source=e356fec025b50061af78324a814f8da0"),a(e)])])]),f])}const q=l(r,[["render",h],["__file","F-树相关算法.html.vue"]]);export{q as default};
