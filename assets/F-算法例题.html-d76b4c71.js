import{_ as e,Q as o,S as c,U as n,W as p,X as t,a8 as s,a9 as l,H as i}from"./framework-d7e1aa10.js";const u={},r=n("h1",{id:"算法例题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法例题","aria-hidden":"true"},"#"),s(" 算法例题")],-1),k={class:"table-of-contents"},d=l(`<h2 id="_1-递归类" tabindex="-1"><a class="header-anchor" href="#_1-递归类" aria-hidden="true">#</a> 1.递归类</h2><h3 id="_1-1-小和问题" tabindex="-1"><a class="header-anchor" href="#_1-1-小和问题" aria-hidden="true">#</a> 1.1 小和问题</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
小和问题：
给出一个组，对于其中任意一个数
计算出该数左侧小于该数的所有数的和
将所有和累加得到最终答案

思路：
（1）注意到：我们可以将获得每个数左边有几个小于该数转化成：从整体上看，计算每个数（num）参与计算的个数（times），那么每个数都会有对应的一个 num * times 值，将所有值累加就得到了“小和”
（2）注意到：如果用递归，每次入栈都将数组分为左右两组，那么就可以遍历对比左右两组的数数出 times 
此外如果保证右边的数是由小到大排序的，我们数次数就可以直接通过数下标的方式得到 times 在以上基础上，遍历时发现左组的数比右组小，那么就得到一个 num * times，后续合并左右两边数组，出栈并返回各个部分的“小和”
（3）和一般归并排序不同的是，在排序时，遇到左右相等的情况要先将右侧的数加到数组中，这样做是为了让右侧的指针后移，保证遍历过程既不重算也不漏算
*/</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">smallSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">process</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">==</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 先得到左边的值</span>
    <span class="token keyword">return</span> <span class="token function">process</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">)</span>
            <span class="token comment">// 再得到右边的值</span>
            <span class="token operator">+</span> <span class="token function">process</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
            <span class="token comment">// 最终得到左右两边合并的值</span>
            <span class="token operator">+</span> <span class="token function">merger</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">merger</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> mid<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> helpArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> p1 <span class="token operator">=</span> l<span class="token punctuation">;</span>
    <span class="token keyword">int</span> p2 <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p1 <span class="token operator">&lt;=</span> mid <span class="token operator">&amp;&amp;</span> p2 <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">+=</span> arr<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> p2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> arr<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        helpArr<span class="token punctuation">[</span>p<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">?</span> arr<span class="token punctuation">[</span>p1<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">:</span> arr<span class="token punctuation">[</span>p2<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p1 <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span><span class="token punctuation">{</span>
        helpArr<span class="token punctuation">[</span>p<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>p1<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p2 <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
        helpArr<span class="token punctuation">[</span>p<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>p2<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>l <span class="token operator">+</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> helpArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_1-2-反转单链表" tabindex="-1"><a class="header-anchor" href="#_1-2-反转单链表" aria-hidden="true">#</a> 1.2 反转单链表</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 递归反转单链表，只需要传入链表的头节点</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SingleNode</span> <span class="token function">reverseLinkedListByRecursion</span><span class="token punctuation">(</span><span class="token class-name">SingleNode</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归结束的条件：发现当前节点（最后一个节点）的下一个结点为空，直接把最后一个节点（新的头节点p）返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cur<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建一个节点传递新的头节点p,此处也是“递”的过程</span>
    <span class="token class-name">SingleNode</span> p <span class="token operator">=</span> <span class="token function">reverseLinkedListByRecursion</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// “归”的过程</span>
    <span class="token comment">// 使当前节点的下一个结点指向当前节点，这样就实现了指针反转，而且由于递归的特性，所以不需要保存节点位置信息</span>
    cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    <span class="token comment">// 此步不可省略，否则会出现死循环，因为省略这步到最后尾结点和倒数第二个结点会相互指向对方</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_2-堆类" tabindex="-1"><a class="header-anchor" href="#_2-堆类" aria-hidden="true">#</a> 2.堆类</h2><h3 id="_2-1-几乎有序数组" tabindex="-1"><a class="header-anchor" href="#_2-1-几乎有序数组" aria-hidden="true">#</a> 2.1 几乎有序数组</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
    题目：
    给出一个几乎有序的数组，几乎有序指的是将数组排完序
    每个元素所要移动的距离小于 K
    K 是一个较小的数，且 K 可以作为一个参数传入

    思路：
    这是一个可以用小根堆实现的算法
    且可以用系统默认的小根堆 -&gt; 优先队列
*/</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> smallHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        smallHeap<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        smallHeap<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> smallHeap<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>smallHeap<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> smallHeap<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-2-给出中位数" tabindex="-1"><a class="header-anchor" href="#_2-2-给出中位数" aria-hidden="true">#</a> 2.2 给出中位数</h3><p>陆续输入数字，以较小的代价较快地给出中位数，利用大小根堆配合，维持堆顶是中位数就行</p><br><h2 id="_3-迭代类" tabindex="-1"><a class="header-anchor" href="#_3-迭代类" aria-hidden="true">#</a> 3.迭代类</h2><h3 id="_3-1-反转单链表" tabindex="-1"><a class="header-anchor" href="#_3-1-反转单链表" aria-hidden="true">#</a> 3.1 反转单链表</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 迭代反转法，只需要传入链表的头节点</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SingleNode</span> <span class="token function">reverseLinkedList</span><span class="token punctuation">(</span><span class="token class-name">SingleNode</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记录当前结点的前一个节点，而传进来的 cur 就是当前节点</span>
    <span class="token class-name">SingleNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 指向当前结点的下一个节点</span>
    <span class="token class-name">SingleNode</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 存储当前节点的下一个节点的地址，因为下面的步骤会让 cur 与 cur.next 断开，所以必须把 cur.next 的地址记录下来</span>
        next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">// 让当前节点指向前一个节点</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token comment">// 让 pre 向前移动一位</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token comment">// 让 cur 当前节点向前移动一位</span>
        cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 完成上述操作使得指针方向反转，此时 pre 位于原链表的最后一个节点，至此反转完成</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-2-求素数" tabindex="-1"><a class="header-anchor" href="#_3-2-求素数" aria-hidden="true">#</a> 3.2 求素数</h3><p>只需要任何一个非质素肯定能拆出一个比该数的根号还小的数，所以只需要看 2 ~ 根号下该数范围内的数是否能整除该数即可。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isPrime</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-约瑟夫环" tabindex="-1"><a class="header-anchor" href="#_3-3-约瑟夫环" aria-hidden="true">#</a> 3.3 约瑟夫环</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 使用数组实现，增删操作比较耗时
 */</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lastRemaining</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        index <span class="token operator">=</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 直接利用递推式
 */</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lastRemaining02</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> m<span class="token punctuation">)</span> <span class="token operator">%</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 递推式空间优化
 */</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lastRemaining03</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> dp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp <span class="token operator">=</span> <span class="token punctuation">(</span>dp <span class="token operator">+</span> m<span class="token punctuation">)</span> <span class="token operator">%</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function v(m,b){const a=i("router-link");return o(),c("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[p(a,{to:"#算法例题"},{default:t(()=>[s("算法例题")]),_:1}),n("ul",null,[n("li",null,[p(a,{to:"#_1-递归类"},{default:t(()=>[s("1.递归类")]),_:1}),n("ul",null,[n("li",null,[p(a,{to:"#_1-1-小和问题"},{default:t(()=>[s("1.1 小和问题")]),_:1})]),n("li",null,[p(a,{to:"#_1-2-反转单链表"},{default:t(()=>[s("1.2 反转单链表")]),_:1})])])]),n("li",null,[p(a,{to:"#_2-堆类"},{default:t(()=>[s("2.堆类")]),_:1}),n("ul",null,[n("li",null,[p(a,{to:"#_2-1-几乎有序数组"},{default:t(()=>[s("2.1 几乎有序数组")]),_:1})]),n("li",null,[p(a,{to:"#_2-2-给出中位数"},{default:t(()=>[s("2.2 给出中位数")]),_:1})])])]),n("li",null,[p(a,{to:"#_3-迭代类"},{default:t(()=>[s("3.迭代类")]),_:1}),n("ul",null,[n("li",null,[p(a,{to:"#_3-1-反转单链表"},{default:t(()=>[s("3.1 反转单链表")]),_:1})]),n("li",null,[p(a,{to:"#_3-2-求素数"},{default:t(()=>[s("3.2 求素数")]),_:1})]),n("li",null,[p(a,{to:"#_3-3-约瑟夫环"},{default:t(()=>[s("3.3 约瑟夫环")]),_:1})])])])])])])]),d])}const y=e(u,[["render",v],["__file","F-算法例题.html.vue"]]);export{y as default};
