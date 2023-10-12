import{_ as t,Q as p,S as o,U as n,W as l,X as i,a8 as s,a9 as e,H as c}from"./framework-d7e1aa10.js";const u={},r=n("h1",{id:"设计模式-行为型-11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设计模式-行为型-11","aria-hidden":"true"},"#"),s(" 设计模式--行为型(11)")],-1),d={class:"table-of-contents"},k=e(`<h2 id="_1-模板方法模式" tabindex="-1"><a class="header-anchor" href="#_1-模板方法模式" aria-hidden="true">#</a> 1.模板方法模式</h2><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230208/模板方法.png" alt="12-模板模式" style="zoom:80%;"><p><strong>概述：</strong></p><ul><li><p>行为型模式</p></li><li><p>模板模式在一个抽象类公开定义了执行它的方法的模板</p></li><li><p>它的子类可以按需重写方法实现，但调用将以抽象类中定义的方法进行</p></li><li><p>简单说就是定义一个操作中的算法的骨架，而将一些步骤延迟到子类中，使得子类可以不改变一个算法的结构就可以重新定义某些特定的步骤</p></li><li><p>基本思想：</p><ul><li>算法或说逻辑只存在于父类中</li><li>需要修改时，子类只需要也只能修改其中的某些步骤</li><li>实现最大化代码复用</li><li>统一算法的同时提供较大的灵活性，即父类模板方法保证结构不变，子类灵活实现</li></ul></li><li><p>不足之处：</p><ul><li>每一个不同的实现都需要一个子类实现，导致类的数量增加而变得复杂</li></ul></li><li><p>模板方法一般都是用 final 关键字防止子类覆盖</p></li><li><p>模板模式的使用场景：</p><ul><li>当在完成某个过程时需要执行一系列步骤</li><li>这一系列步骤基本相同，但是个别步骤在实现时可能不同</li></ul></li></ul><p><strong>使用实例：</strong></p><ul><li>统计代码运行时间</li></ul><p><strong>钩子方法：</strong></p><ul><li>在模板模式的父类中，可以定义一个默认不做任何事的方法，子类可以视情况来决定需不需要覆盖它，这种方法称为【钩子方法】</li></ul><p>**简单例子：**制作豆浆，分为四步：</p><ul><li>选材</li><li>加入配料（交给子类实现）</li><li>浸泡</li><li>打磨</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 调用者
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;======== 制作红豆豆浆 ========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SoyaMilk</span> readBeanSoyaMilk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReadBeanSoyaMilk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        readBeanSoyaMilk<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;======== 制作花生豆浆 ========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SoyaMilk</span> peanutSoyaMilk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PeanutSoyaMilk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        peanutSoyaMilk<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;======== 制作纯豆浆 ========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SoyaMilk</span> pureSoyaMilk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PureSoyaMilk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pureSoyaMilk<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@desc</span> 豆浆制作，抽象方法，其中包含一个狗子方法，决定是否需要加入配料
 * <span class="token keyword">@author</span> gzw
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SoyaMilk</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 制作豆浆的方法
     * 使用 final 不让子类覆盖
     */</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isWantCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">soak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 选材料
     */</span>
    <span class="token keyword">void</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;no.1 选择好的新鲜黄豆&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 添加不同的配料
     * 抽象方法给子类具体实现
     */</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 浸泡黄豆
     */</span>
    <span class="token keyword">void</span> <span class="token function">soak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;no.3 黄豆和配料浸泡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 打磨
     */</span>
    <span class="token keyword">void</span> <span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;no.4 黄豆和配料打磨&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 钩子方法
     * 决定是否需要添加配料
     */</span>
    <span class="token keyword">boolean</span> <span class="token function">isWantCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 纯豆浆，不加入任何配料，所以抽象方法空实现，钩子方法返回空
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PureSoyaMilk</span> <span class="token keyword">extends</span> <span class="token class-name">SoyaMilk</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">boolean</span> <span class="token function">isWantCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 花生豆浆
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PeanutSoyaMilk</span> <span class="token keyword">extends</span> <span class="token class-name">SoyaMilk</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;no.2 加入花生&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>框架使用：</strong></p><ul><li><p>Tomcat 中大量使用到了模板方法，用于实现生命周期组件</p></li><li><p>IOC 容器初始化时运用了模板模式</p></li></ul><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230208/模板方法-IOC.png" alt="12-模板模式-IOC" style="zoom:80%;"><br><h2 id="_2-命令模式" tabindex="-1"><a class="header-anchor" href="#_2-命令模式" aria-hidden="true">#</a> 2.命令模式</h2><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/命令模式.png" alt="13-命令模式" style="zoom:80%;"><p><strong>概述：</strong></p><ul><li>命令模式使得请求的【发送者】与【接收者】彼此之间解耦合，让对象直接的调用关系更加灵活</li><li>在命令模式中会将一个请求封装成一个对象，以便使用不同的参数来表示不同的请求，同时也支持可撤销的操作</li><li>类似打仗时将军发号施令，士兵执行命令，其中有几个关键的角色： <ul><li>将军：命令发布者</li><li>士兵：命令的具体执行者</li><li>命令：连接将军和士兵</li></ul></li><li>可以设计一个命令队列，只要将命令放到队列中就可以通过多线程执行命令</li><li>不足之处： <ul><li>可能导致某些系统有过多的具体命令类，增加系统的复杂度</li></ul></li><li>其中会使用到空命令，这也可以看作一种设计模式，因为让我们省去了判空的操作，如果没有则需要在执行每一个命令前判断是否为空</li></ul><p><strong>使用场景：</strong></p><ul><li>我们需要向某些对象发送请求，但是不知道具体的接收者是谁，也不知道被请求的操作是哪一个</li><li>此时需要在程序运行时指定具体的接收者，即可以使用命令模式设计</li></ul><p><strong>使用实例：</strong></p><ul><li>界面的每一个按钮都是一条命令，与 cmd 中的命令类似</li></ul><p>**简单例子：**智能家居控制</p><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/命令模式-智能家居.png" alt="13-命令模式-智能家居" style="zoom:80%;"><p>**框架使用：**spring 框架中的 JdbcTemplate</p><br><h2 id="_3-访问者模式" tabindex="-1"><a class="header-anchor" href="#_3-访问者模式" aria-hidden="true">#</a> 3.访问者模式</h2><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/访问者模式.png" alt="14-访问者模式" style="zoom:80%;"><p><strong>概述：</strong></p><ul><li><p>访问者模式用于封装一些作用于某种数据结构的各种元素的操作</p></li><li><p>可以在不改变数据结构的前提下定义作用域这些元素的新的操作</p></li><li><p>主要将数据结构于数据操作分离，解决数据结构和操作耦合性的问题</p></li><li><p>基本工作原理为：在被访问的类中加一个对外提供接待访问者的接口</p></li><li><p>角色以及职责：</p><ul><li>Visitor：抽象的访问者，为该对象结构中的 ConcreteElement 的每一个类声明一个 visit 操作</li><li>ConcreteVisitor：是一个具体的访问者，实现每个 Visitor 声明操作</li><li>ObjectStructure：能够枚举它的元素，可以提供一个高层的接口，用于允许访问者访问元素</li><li>Element：定义了一个 accept 方法，接收一个访问者对象</li><li>ConcreteElement：为具体元素，实现了 accept 方法</li></ul></li><li><p>其中会使用到双分派，指不管类怎么变化，都能找到期望的方式运行，意味着得到执行的操作取决于请求的种类和两个接收者的类型</p></li><li><p>优点：</p><ul><li>符合单一职责原则，让程序具有优秀的扩展性，灵活性非常高</li><li>可以对功能进行统一，适用于数据结构相对稳定的系统</li></ul></li><li><p>缺点：</p><ul><li>具体元素要对访问者公布细节，即访问者关注了其他类的内部细节，这是迪米特法则所不建议的，这样造成了具体元素变成比较困难</li><li>违背了依赖倒置原则，即访问者依赖的是具体元素，而不是抽象元素</li></ul></li></ul><p><strong>使用场景：</strong></p><ul><li>有比较稳定的数据结构并且又有经常变化的功能需求</li><li>需要对一个对象结构中的对象进行很多的不同的操作，这些操作彼此之间没有关联</li><li>避免这些操作【污染】这些对象的类</li></ul><p><strong>使用实例：</strong></p><ul><li>报表</li><li>UI</li><li>拦截器与过滤器</li></ul><p>**简单例子：**观众投票</p><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/访问者模式-投票.png" alt="14-访问者模式-投票" style="zoom:80%;"><br><h2 id="_4-迭代器模式" tabindex="-1"><a class="header-anchor" href="#_4-迭代器模式" aria-hidden="true">#</a> 4.迭代器模式</h2><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/迭代器模式.png" alt="15-迭代器模式" style="zoom:80%;"><p><strong>概述：</strong></p><ul><li>行为型模式</li><li>如果集合元素使用不同的方式实现的，当客户端需要遍历这些集合元素时就要使用多种遍历方式，而且会暴露元素的内部结构</li><li>迭代器模式提供一种遍历集合元素的统一接口，用一致的方法遍历元素，不需要知道集合对象的底层表示，即不暴露元素的内部结构</li><li>角色与职责： <ul><li>Iterator：迭代器接口</li><li>ConcreteIterator：具体的迭代器类，管理迭代</li><li>Aggregate：一个统一的聚合接口，将客户端与具体聚合解耦</li><li>ConcreteAggreage：具体的聚合持有对象的集合</li></ul></li><li>优点： <ul><li>提供了一个统一的方法遍历对象，客户不需要再考虑聚合的类型，使用一个方法就可以遍历对象</li><li>隐藏了聚合的内部结构</li><li>提供了一种设计思想，即一个类应该只有一个引起变化的原因（单一职责），在聚合类中，把迭代器分开，就是要把管理对象集合和遍历对象集合的责任分开，这样一来，依赖集合改变也只会影响到聚合对象，遍历方式改变也只会影响到迭代器</li></ul></li><li>缺点： <ul><li>每个聚合对象都要一个迭代器，会产生多个迭代器导致复杂度上升</li></ul></li></ul><p><strong>使用场景：</strong></p><ul><li>当要展示一组相似的对象，或者遍历一组相同对象</li></ul><br><h2 id="_5-观察者模式" tabindex="-1"><a class="header-anchor" href="#_5-观察者模式" aria-hidden="true">#</a> 5.观察者模式</h2><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/观察者模式.png" alt="16-观察者模式" style="zoom:80%;"><p><strong>需求：</strong></p><p>气象站天气推送设计</p><ul><li><p>气象站可以将每天测量到的温度、气压、湿度等以公告的形式发布出去</p></li><li><p>需要设计开放型 API，便于第三方介入获取数据</p></li><li><p>角色：</p><ul><li>气象站：Subject，负责登记注册、移除、通知</li><li>第三方介入网站：Observer，接收输入</li></ul></li></ul><p><strong>概述：</strong></p><ul><li>对象之间多对一依赖的一种设计方案</li><li>被依赖的对象为 Subject，依赖的对象为 Observer</li><li>Subject 通知 Observer 变化的信息</li></ul><p><strong>框架使用：</strong></p><ul><li>JDK 中有使用观察者模式</li><li>其中的 Observable 就是 Subject，只不过 Observable 是类而不是接口</li><li>因为 Observable 是类，所以 Observer 要通过继承来实现观察者模式</li></ul><br><h2 id="_6-中介者模式" tabindex="-1"><a class="header-anchor" href="#_6-中介者模式" aria-hidden="true">#</a> 6.中介者模式</h2><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/中介者模式.png" alt="17-中介者模式" style="zoom:80%;"><p><strong>概述：</strong></p><ul><li><p>行为型模式</p></li><li><p>用一个中介对象来封装一系列的对象交互</p></li><li><p>中介者使各个对象不需要显示地互相引用，从而解耦合</p></li><li><p>就如 MVC 模式，Controller 就是中介</p></li><li><p>减少了类间的依赖，降低了耦合，符合迪米特原则</p></li><li><p>但是中介者承担了较多的责任，一旦中介者出现问题，那么整个系统都会受影响</p></li><li><p>如果设计不当，中介者对象本身会变得过于复杂，这点在实际应用时应当注意</p></li></ul><p><strong>案例：</strong></p><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/中介者模式-家居.png" alt="17-中介者模式-家居" style="zoom:80%;"><br><h2 id="_7-备忘录模式" tabindex="-1"><a class="header-anchor" href="#_7-备忘录模式" aria-hidden="true">#</a> 7.备忘录模式</h2><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/备忘录模式.png" alt="18.备忘录模式" tabindex="0" loading="lazy"><figcaption>18.备忘录模式</figcaption></figure><p><strong>概述：</strong></p><ul><li><p>行为型模式</p></li><li><p>在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象外保存这个状态</p></li><li><p>之后可以将对象恢复成原先保存的状态</p></li><li><p>实现了信息的封装，使得用户不需要关心状态的保存细节</p></li><li><p>但是如果类的成员变量过多，会占用比较大的资源，而且每次保存都会消耗一定的内存</p></li><li><p>为了节约内存，可以配合原型模式使用</p></li></ul><p><strong>使用场景：</strong></p><ul><li><p>游戏存档</p></li><li><p>操作撤销</p></li><li><p>数据库的事务管理</p></li></ul><br><h2 id="_8-解释器模式" tabindex="-1"><a class="header-anchor" href="#_8-解释器模式" aria-hidden="true">#</a> 8.解释器模式</h2><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/解释器模式.png" alt="19-解释器模式" tabindex="0" loading="lazy"><figcaption>19-解释器模式</figcaption></figure><p><strong>概述：</strong></p><ul><li>在编译原理中，一个算数表达式通过词法分析器形成词法单元，而这些词法单元再通过语法分析器构建语法分析树，最终形成一个抽象的语法分析树</li><li>词法分析器和语法分析器都可以看作解释器</li><li>解释器模式是指给定一种语言（表达式），定义它的文法的一种表示，并定义一个解释器。使用该解释器来解释语言中的句子（表达式）</li><li>角色说明： <ul><li>Context：环境角色，含有解释器之外的全局信息</li><li>AbstactExpression：抽象表达式，声明一个抽象的解释操作，这个方法为抽象语法树中所有的节点所共享</li><li>TerminaExpression：为终结符表达式，实现与文法中的终结符相关的解释操作</li><li>NonTermialExpression：为非终结符表达式，为文法中的非终结符实现解释操作</li></ul></li><li>当一个语言需要解释执行，可以将语言中的句子表示成一个抽象语法树，使用解释器模式，让程序具有良好的扩展性</li><li>但是使用解释器可能会引起类膨胀；如果解释器模式采用递归调用方法，将导致调试变得复杂，效率也可能低下</li></ul><p><strong>使用场景：</strong></p><ul><li>可以将一个需要解释执行的语言中的句子表示为一个抽象语法树</li><li>一些重复出现的问题可以用一种简单的语言来表达</li><li>一个简单语法需要解释的场景</li><li>编译器</li><li>运算表达式计算</li><li>正则表达式</li></ul><p><strong>案例：</strong></p><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/解释器模式-运算器.png" alt="19-解释器模式-运算器" style="zoom:80%;"><p><strong>框架使用：</strong></p><ul><li>spring 中的 Expression 运算器就是使用的解释器模式设计的</li></ul><br><h2 id="_9-状态模式" tabindex="-1"><a class="header-anchor" href="#_9-状态模式" aria-hidden="true">#</a> 9.状态模式</h2><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/状态模式.png" alt="20-状态模式" tabindex="0" loading="lazy"><figcaption>20-状态模式</figcaption></figure><p><strong>概述：</strong></p><ul><li><p>主要是用来解决对象在多种状态转换时，需要对外输出不同的行为的问题</p></li><li><p>状态和行为是一一对应的，状态之间可以互相转换</p></li><li><p>当一个对象的内在状态改变时，允许改变其行为，这个对象看起来像是改变了其类</p></li><li><p>角色说明：</p><ul><li>Context：环境角色，用于伟华 State 实例，这个实例定义当前状态</li><li>State 时抽象状态角色，定义一个接口封装与 Context 的一个特定接口的相关行为</li><li>ConcreteState 具体的状态角色，每个子类实现一个与 Context 的一个状态相关的行为</li></ul></li><li><p>优点：</p><ul><li>让代码具有很强的可读性</li><li>状态模式将每个状态的行为封装到一个类中，方便维护</li><li>可以将容易产生问题的 if-else 语句删除</li><li>符合开闭原则，容易增删状态</li></ul></li><li><p>缺点：</p><ul><li>容易产生很多类，每个状态都要有一个对应的类，当状态过多时会产生大量的类，难以维护</li></ul></li></ul><p><strong>使用场景：</strong></p><ul><li><p>当业务流程设计很多状态时，可以使用状态模式去除大量的 if-else 判断</p></li><li><p>当一个事件或者对象有很多种状态且状态之间会互相转化，对不同的状态也要求有不同的行为时，可以考虑使用状态模式</p></li></ul><p><strong>使用实例：</strong></p><ul><li>借贷平台订单的审核-发布-抢单流程</li></ul><p><strong>案例：</strong>（抽奖问题）</p><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/状态模式-抽奖.png" alt="20-状态模式-抽奖" style="zoom:80%;"><br><h2 id="_10-策略模式" tabindex="-1"><a class="header-anchor" href="#_10-策略模式" aria-hidden="true">#</a> 10.策略模式</h2><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/策略模式.png" alt="21-策略模式" tabindex="0" loading="lazy"><figcaption>21-策略模式</figcaption></figure><p><strong>概述：</strong></p><ul><li>策略模式可以定义算法族，分别封装起来，让它们之间可以相互替换，让算法的变化独立于使用算法的客户</li><li>让变化的代码从不变的代码中分离开来</li><li>针对接口编程而不是具体类（定义了策略接口）</li><li>多用组合/聚合而不是继承（客户端通过组合方式使用策略）；用行为类组合而不是行为类的继承</li><li>策略模式的关键是分析项目中变化和不变的部分</li><li>对修改关闭，对扩展开放，避免使用大量的 if-else</li><li>提供了可以替换继承关系的办法：策略模式将算法封装在独立的 Strategy 类中，使得可以独立于其他 Context 改变算法，即做到了易于切换、理解、扩展</li><li>但是每添加一个策略就要增加一个类，当策略过多就会难以管理</li></ul><p><strong>案例：</strong>（鸭子分类问题）</p><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/策略模式-鸭子分类.png" alt="21-策略模式-鸭子分类" tabindex="0" loading="lazy"><figcaption>21-策略模式-鸭子分类</figcaption></figure><p><strong>框架使用：</strong></p><ul><li>JDK 中 Arrays 的 Comparator 使用了策略模式</li></ul><br><h2 id="_11-责任链模式" tabindex="-1"><a class="header-anchor" href="#_11-责任链模式" aria-hidden="true">#</a> 11.责任链模式</h2><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式/20230209/责任链模式.png" alt="22-责任链模式" tabindex="0" loading="lazy"><figcaption>22-责任链模式</figcaption></figure><p><strong>概述：</strong></p><ul><li>又叫职责链模式，为请求创建一个接收者对象的链条，这样可以对请求的发送者和接收者进行解耦</li><li>责任链模式中通常每个接收者都包含对另一个接收者的引用。如果一个对象不能处理该请求，那么他会把相同的请求传给下一个接收者，以此类推</li><li>角色说明： <ul><li>Handler：抽象的接收者，定义了一个处理请求的接口，同时包含了其他的 Handler</li><li>ConcreteHandlerA，B：具体的处理者，处理它自己负责的请求，可以访问它的后继者（即下一个处理者）；如果当前请求自己可以处理就接收，如果不可以者交给后继者处理</li><li>Request：含有很多属性，表示一个请求</li></ul></li></ul><p><strong>案例：</strong>（OA 系统采购审批需求，不同金额由不同人负责）</p><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//设计模式及/20230209/责任链模式-审批.png" alt="22-责任链模式-审批" tabindex="0" loading="lazy"><figcaption>22-责任链模式-审批</figcaption></figure><p><strong>什么框架中有使用：</strong></p><ol><li>Tomcat 中的管道（相当于过滤器）就是采用职责链模式</li></ol>`,111);function m(v,g){const a=c("router-link");return p(),o("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[l(a,{to:"#设计模式-行为型-11"},{default:i(()=>[s("设计模式--行为型(11)")]),_:1}),n("ul",null,[n("li",null,[l(a,{to:"#_1-模板方法模式"},{default:i(()=>[s("1.模板方法模式")]),_:1})]),n("li",null,[l(a,{to:"#_2-命令模式"},{default:i(()=>[s("2.命令模式")]),_:1})]),n("li",null,[l(a,{to:"#_3-访问者模式"},{default:i(()=>[s("3.访问者模式")]),_:1})]),n("li",null,[l(a,{to:"#_4-迭代器模式"},{default:i(()=>[s("4.迭代器模式")]),_:1})]),n("li",null,[l(a,{to:"#_5-观察者模式"},{default:i(()=>[s("5.观察者模式")]),_:1})]),n("li",null,[l(a,{to:"#_6-中介者模式"},{default:i(()=>[s("6.中介者模式")]),_:1})]),n("li",null,[l(a,{to:"#_7-备忘录模式"},{default:i(()=>[s("7.备忘录模式")]),_:1})]),n("li",null,[l(a,{to:"#_8-解释器模式"},{default:i(()=>[s("8.解释器模式")]),_:1})]),n("li",null,[l(a,{to:"#_9-状态模式"},{default:i(()=>[s("9.状态模式")]),_:1})]),n("li",null,[l(a,{to:"#_10-策略模式"},{default:i(()=>[s("10.策略模式")]),_:1})]),n("li",null,[l(a,{to:"#_11-责任链模式"},{default:i(()=>[s("11.责任链模式")]),_:1})])])])])]),k])}const h=t(u,[["render",m],["__file","C-设计模式--行为型(11).html.vue"]]);export{h as default};
