import{_ as u,Q as l,S as i,U as n,W as a,X as e,a8 as s,a9 as c,H as o}from"./framework-d7e1aa10.js";const d={},r=n("h1",{id:"java-并发-其他",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#java-并发-其他","aria-hidden":"true"},"#"),s(" Java 并发（其他）")],-1),k={class:"table-of-contents"},v=c(`<h2 id="实现了-condition-接口的类" tabindex="-1"><a class="header-anchor" href="#实现了-condition-接口的类" aria-hidden="true">#</a> 实现了 Condition 接口的类</h2><p>Java中实现了<code>Condition</code>接口的类有：</p><div class="table-wrapper"><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td><code>AbstractQueuedSynchronizer.ConditionObject</code></td><td><code>AbstractQueuedSynchronizer</code>中的内部类，用于支持<code>ReentrantLock</code>中的<code>Condition</code>对象</td></tr><tr><td><code>JUC$ConditionObject</code></td><td><code>ConcurrentHashMap</code>中的内部类，用于支持<code>ConcurrentHashMap</code>的条件等待操作</td></tr><tr><td><code>LinkedBlockingQueue.Node</code></td><td><code>LinkedBlockingQueue</code>中的内部类，用于支持<code>LinkedBlockingQueue</code>的条件等待操作</td></tr><tr><td><code>LinkedTransferQueue.Node</code></td><td><code>LinkedTransferQueue</code>中的内部类，用于支持<code>LinkedTransferQueue</code>的条件等待操作</td></tr><tr><td><code>SynchronousQueue.WaitQueueNode</code></td><td><code>SynchronousQueue</code>中的内部类，用于支持<code>SynchronousQueue</code>的条件等待操作</td></tr><tr><td><code>AbstractQueuedLongSynchronizer.ConditionObject</code></td><td><code>AbstractQueuedLongSynchronizer</code>中的内部类，用于支持<code>LongAdder</code>中的<code>Condition</code>对象</td></tr><tr><td><code>AbstractQueuedSynchronizer.ConditionObject.Node</code></td><td><code>AbstractQueuedSynchronizer</code>中的内部类，用于支持<code>AbstractQueuedSynchronizer</code>中的条件等待操作</td></tr><tr><td><code>AbstractQueuedSynchronizer.ConditionObject.WaitQueueNode</code></td><td><code>AbstractQueuedSynchronizer</code>中的内部类，用于支持<code>AbstractQueuedSynchronizer</code>中的条件等待操作</td></tr><tr><td><code>CountDownLatch.Sync</code></td><td><code>CountDownLatch</code>中的内部类，用于支持<code>CountDownLatch</code>的条件等待操作</td></tr><tr><td><code>FutureTask.Sync</code></td><td><code>FutureTask</code>中的内部类，用于支持<code>FutureTask</code>的条件等待操作</td></tr><tr><td><code>ReentrantLock.ConditionObject</code></td><td><code>ReentrantLock</code>中的内部类，用于支持<code>ReentrantLock</code>的条件等待操作</td></tr><tr><td><code>Semaphore.Sync</code></td><td><code>Semaphore</code>中的内部类，用于支持<code>Semaphore</code>的条件等待操作</td></tr><tr><td><code>ThreadPoolExecutor.Worker</code></td><td><code>ThreadPoolExecutor</code>中的内部类，用于支持<code>ThreadPoolExecutor</code>的条件等待操作</td></tr></tbody></table></div><h2 id="cas" tabindex="-1"><a class="header-anchor" href="#cas" aria-hidden="true">#</a> CAS</h2><p>CAS（Compare And Swap）是一种基于原子操作的并发编程技术，用于实现多线程之间的同步。在Java中，CAS是由sun.misc.Unsafe类提供支持的。CAS操作由三个操作数组成：内存位置V，旧的预期值A，要修改的新值B。CAS操作执行时，当且仅当内存位置V的值等于预期值A时，才会将内存位置V的值修改为新值B，否则不做任何操作。</p><p>Java中的Atomic类和AtomicInteger等原子类就是基于CAS操作实现的，提供了一组原子性的操作方法，这些方法保证了多线程对变量的读取和修改都是原子性的。</p><p>以下是Java中基于CAS操作的一个示例代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>javaCopy codeimport <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>atomic<span class="token punctuation">.</span></span>AtomicInteger</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CASDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicInteger</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> currentCount<span class="token punctuation">;</span>
                <span class="token keyword">int</span> newCount<span class="token punctuation">;</span>
                <span class="token keyword">do</span> <span class="token punctuation">{</span>
                    currentCount <span class="token operator">=</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    newCount <span class="token operator">=</span> currentCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>count<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span>currentCount<span class="token punctuation">,</span> newCount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; count is &quot;</span> <span class="token operator">+</span> newCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，使用了AtomicInteger类来保证count变量的原子性，使用了compareAndSet方法实现了基于CAS的自增操作。在多线程环境下，由于CAS操作是原子性的，因此不会出现数据冲突等问题，可以保证数据的正确性。</p><h2 id="aqs" tabindex="-1"><a class="header-anchor" href="#aqs" aria-hidden="true">#</a> AQS</h2>`,10),m={href:"https://blog.csdn.net/mulinsen77/article/details/84583716",target:"_blank",rel:"noopener noreferrer"},b=c(`<p>CAS（Compare and Swap）是一种乐观锁实现的原子操作，用于实现多线程并发控制，保证线程安全。CAS 的核心思想是通过比较内存中的值与期望的值是否相同，如果相同则将新的值写入内存中，否则重新读取内存中的值并再次尝试写入。Java 中的 <code>Atomic</code> 类就是通过 CAS 实现的。</p><p>AQS（AbstractQueuedSynchronizer）是一个抽象类，是实现锁、同步器等并发控制类的基础，其核心思想是基于等待队列实现线程的阻塞与唤醒。AQS 提供了基于模板方法模式的编程接口，派生类只需要实现一些抽象方法就可以使用 AQS 提供的同步机制。Java 中的 <code>ReentrantLock</code>、<code>CountDownLatch</code> 等同步类就是基于 AQS 实现的。</p><p>AQS 的实现中使用 CAS 作为底层原子操作，通过 CAS 原子地修改内存中的状态来实现线程安全。因此可以说，CAS 是 AQS 实现同步的基础。</p><h2 id="threadlocal" tabindex="-1"><a class="header-anchor" href="#threadlocal" aria-hidden="true">#</a> ThreadLocal</h2><p>在多线程并发的场景下，ThreadLocal 用于：</p><ol><li>传递数据：可以通过 ThreadLocal 在同一线程的不同组件之间传递公共变量</li><li>线程隔离：每个线程的变量都是独立的，不会互相影响</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThreadLocal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Demo2</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                demo<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;的数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; --------&gt; &quot;</span> <span class="token operator">+</span> demo<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Demo1</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> content<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setContent</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">=</span> content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Demo2</span> <span class="token punctuation">{</span>
    <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> t<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setContent</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function h(S,y){const t=o("router-link"),p=o("ExternalLinkIcon");return l(),i("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[a(t,{to:"#java-并发-其他"},{default:e(()=>[s("Java 并发（其他）")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#实现了-condition-接口的类"},{default:e(()=>[s("实现了 Condition 接口的类")]),_:1})]),n("li",null,[a(t,{to:"#cas"},{default:e(()=>[s("CAS")]),_:1})]),n("li",null,[a(t,{to:"#aqs"},{default:e(()=>[s("AQS")]),_:1})]),n("li",null,[a(t,{to:"#threadlocal"},{default:e(()=>[s("ThreadLocal")]),_:1})])])])])]),v,n("blockquote",null,[n("p",null,[s("AQS 详解，直接上文章："),n("a",m,[s("https://blog.csdn.net/mulinsen77/article/details/84583716"),a(p)])])]),b])}const C=u(d,[["render",h],["__file","Y-Java并发（其他）.html.vue"]]);export{C as default};
