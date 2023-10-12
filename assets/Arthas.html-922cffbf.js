import{_ as e,Q as i,S as r,U as a,a8 as s,W as t,a9 as l,H as d}from"./framework-d7e1aa10.js";const c={},o=a("h1",{id:"arthas",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas","aria-hidden":"true"},"#"),s(" Arthas")],-1),p={class:"hint-container info"},m=a("p",{class:"hint-container-title"},"官方文档",-1),h={href:"https://arthas.aliyun.com/doc/",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">curl</span> <span class="token parameter variable">-O</span> https://arthas.aliyun.com/arthas-boot.jar
<span class="token comment"># 或者</span>
<span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar --repo-mirror aliyun --use-http

<span class="token comment"># 运行，当有 Java 程序时才可以启动监控</span>
<span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar

<span class="token comment"># 打印帮助信息</span>
<span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功启动后如下所示：</p><blockquote><p>输入 exit 命令可以退出 arthas</p></blockquote><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//arthas/20230426/启动Arthas.png" alt="image-20230423154813929" tabindex="0" loading="lazy"><figcaption>image-20230423154813929</figcaption></figure><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2><h3 id="dashboard" tabindex="-1"><a class="header-anchor" href="#dashboard" aria-hidden="true">#</a> Dashboard</h3><p>输入 dashboard 命令查看 Arthas 相关信息：</p><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//arthas/20230426/ArthasDashboard.png" alt="image-20230423155034421" tabindex="0" loading="lazy"><figcaption>image-20230423155034421</figcaption></figure><h3 id="thread" tabindex="-1"><a class="header-anchor" href="#thread" aria-hidden="true">#</a> thread</h3><p>输入 thread 命令查看运行中的 Java 线程信息：<img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//arthas/20230426/Arthas查看Java线程信息.png" alt="image-20230423155337647" loading="lazy"></p><h3 id="反编译" tabindex="-1"><a class="header-anchor" href="#反编译" aria-hidden="true">#</a> 反编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># jad + 类的全限定类名，我这里的是 demo.MathGame</span>
jad demo.MathGame
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//arthas/20230426/Arthas反编译.png" alt="image-20230423155735042" tabindex="0" loading="lazy"><figcaption>image-20230423155735042</figcaption></figure><h3 id="idea-相关插件" tabindex="-1"><a class="header-anchor" href="#idea-相关插件" aria-hidden="true">#</a> IDEA 相关插件</h3><p>idea 可以安装 arthas idea 这个插件，安装后可以通过右键菜单生成一些监控命令</p><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//arthas/20230426/ArthasIdea插件.png" alt="image-20230423160942323" tabindex="0" loading="lazy"><figcaption>image-20230423160942323</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 监控 demo.MathGame 中的 primeFactors 方法</span>
<span class="token function">watch</span> demo.MathGame primeFactors <span class="token string">&#39;{params,returnObj,throwExp}&#39;</span>  <span class="token parameter variable">-n</span> <span class="token number">5</span>  <span class="token parameter variable">-x</span> <span class="token number">3</span>

<span class="token comment"># 追踪方法</span>
trace demo.MathGame primeFactors  <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token parameter variable">--skipJDKMethod</span> <span class="token boolean">false</span>

<span class="token comment"># 查看调用方法的地方</span>
stack demo.MathGame primeFactors  <span class="token parameter variable">-n</span> <span class="token number">5</span>

<span class="token comment"># 监控方法运行情况</span>
monitor demo.MathGame primeFactors  <span class="token parameter variable">-n</span> <span class="token number">10</span>  <span class="token parameter variable">--cycle</span> <span class="token number">10</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>thread 指令使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看占用最高的 5 个线程</span>
thread <span class="token parameter variable">-n</span> <span class="token number">5</span>

<span class="token comment"># 查看死锁</span>
thread <span class="token parameter variable">-b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时空隧道：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 时空隧道，监控调用情况</span>
tt <span class="token parameter variable">-t</span> demo.MathGame primeFactors <span class="token parameter variable">-n</span> <span class="token number">5</span>

<span class="token comment"># 查看第 1000 次时调用的情况</span>
tt <span class="token parameter variable">-p</span> <span class="token parameter variable">-i</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>热力图：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开始监控</span>
profiler start

<span class="token comment"># 结束监控</span>
profiler stop

<span class="token comment"># 结束监控后，会得到一个 html 文件</span>
/usr/local/arthas/arthas-output/20230423-013250.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function u(b,g){const n=d("ExternalLinkIcon");return i(),r("div",null,[o,a("div",p,[m,a("p",null,[a("a",h,[s("https://arthas.aliyun.com/doc/"),t(n)])])]),v])}const f=e(c,[["render",u],["__file","Arthas.html.vue"]]);export{f as default};
