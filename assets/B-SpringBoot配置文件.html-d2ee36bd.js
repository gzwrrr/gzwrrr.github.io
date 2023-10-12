import{_ as t,Q as p,S as i,U as n,W as e,X as l,a8 as s,a9 as o,H as c}from"./framework-d7e1aa10.js";const u={},r=n("h1",{id:"spring-boot-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-boot-配置","aria-hidden":"true"},"#"),s(" Spring Boot 配置")],-1),d={class:"table-of-contents"},k=o(`<p>Spring Boot 的两个配置文件是：</p><ul><li><p>application.properties</p></li><li><p>application.yml</p></li></ul><h2 id="_1-yaml-yml" tabindex="-1"><a class="header-anchor" href="#_1-yaml-yml" aria-hidden="true">#</a> 1.YAML/YML</h2><blockquote><p>以数据为中心，更适合做配置文件</p></blockquote><p>例子：配置端口</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
	<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：朋友对象</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">friends</span><span class="token punctuation">:</span>
	<span class="token key atrule">lastName</span><span class="token punctuation">:</span> zhangsan
	<span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">20</span>
	
<span class="token comment"># 行内写法</span>
<span class="token key atrule">friends</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">lastName</span><span class="token punctuation">:</span> zhangsan<span class="token punctuation">,</span> <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：动物数组</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">pets</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> dog
 <span class="token punctuation">-</span> cat
 <span class="token punctuation">-</span> pig
 
 <span class="token comment"># 行内写法</span>
 <span class="token key atrule">pet</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>dog<span class="token punctuation">,</span> cat<span class="token punctuation">,</span> pig<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-基本语法" tabindex="-1"><a class="header-anchor" href="#_1-1-基本语法" aria-hidden="true">#</a> 1.1 基本语法</h3><ol><li><code>k: v</code> : 表示一对键值对（其中空格一定要有）</li><li>以空格的缩进来控制层级关系</li><li>属性和值大小写敏感</li></ol><h3 id="_1-2-值的写法" tabindex="-1"><a class="header-anchor" href="#_1-2-值的写法" aria-hidden="true">#</a> 1.2 值的写法</h3><ol><li>字面量：普通的值（数字、字符串、布尔），写法如上面 “配置端口” 的例子 <ol><li>字符串默认不加上 ‘单引号’ 或者 “双引号”</li><li>“”：双引号不会转义字符串中特殊的字符</li><li>‘ ’：会转义特殊字符，最终得到的是一个普通的字符串</li></ol></li><li>对象、Map（属性和值：键值对），写法如上面 “朋友对象 “ 的例子</li><li>数组、集合（List、Set），写法如上面 “” 的例子</li></ol><h3 id="_1-3-数据绑定" tabindex="-1"><a class="header-anchor" href="#_1-3-数据绑定" aria-hidden="true">#</a> 1.3 数据绑定</h3><p>引入依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 导入配置文件处理器，配置文件进行绑定后就会有提示 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写实体类（加上注解）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
	@ConfigurationProperties(prefix = &quot;person&quot;) 告诉 Spring Boot 将这个类和配置文件中的 person 属性一一对应
	@Component 将这个类标注为容器中的组件，只有这样才能使用组件提供的功能，即绑定数据
*/</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token class-name">Boolean</span> boss<span class="token punctuation">;</span>
    <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>
    <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件设置属性：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 这是 yaml 的写法</span>
<span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> zhangsan
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">20</span>
  <span class="token key atrule">boss</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">birithday</span><span class="token punctuation">:</span> 2000/2/2
  <span class="token key atrule">map</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">k1</span><span class="token punctuation">:</span> v1<span class="token punctuation">,</span> <span class="token key atrule">k2</span><span class="token punctuation">:</span> v2<span class="token punctuation">}</span>
  <span class="token key atrule">list</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>dog<span class="token punctuation">,</span> cat<span class="token punctuation">,</span> pig<span class="token punctuation">]</span>
  <span class="token key atrule">dog</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> kali<span class="token punctuation">,</span> <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>

<span class="token comment"># 下面是用 properties 的写法</span>
person.name = zhangSan
person.age = 20
person.boss = false
person.map.k1 = v1
person.list = a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c
person.dog.name = kali
person.dog.age = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进行单元测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SpringBootTestApplicationTests</span> <span class="token punctuation">{</span>
<span class="token comment">// 管理组件</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token class-name">Person</span> person<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-profile" tabindex="-1"><a class="header-anchor" href="#_2-profile" aria-hidden="true">#</a> 2.Profile</h2><h3 id="_2-1-多-profile-文件" tabindex="-1"><a class="header-anchor" href="#_2-1-多-profile-文件" aria-hidden="true">#</a> 2.1 多 Profile 文件</h3><p>需要编写多个配置文件</p><p>在主配置名编写的时候，文件名可以是：<code>application-{profile}.properties/yaml/yml</code></p><ul><li>application-dev.properties</li><li>application-prod.properties</li></ul><h3 id="_2-2-激活指定的-profile" tabindex="-1"><a class="header-anchor" href="#_2-2-激活指定的-profile" aria-hidden="true">#</a> 2.2 激活指定的 profile</h3><ol><li>在配置文件中指定：<code>spring.profiles.active=dev</code></li><li>用命令行参数指定配置文件：<code>--spring.profiles.active=dev</code></li><li>使用虚拟机参数：<code>-Dspring.profiles.active=dev</code></li></ol><h3 id="_2-3-yaml-yml-支持多文档块方式" tabindex="-1"><a class="header-anchor" href="#_2-3-yaml-yml-支持多文档块方式" aria-hidden="true">#</a> 2.3 yaml/yml 支持多文档块方式</h3><blockquote><p>不需要编写多个配置文件</p><p>用 <code>---</code> 区分开不同的文档块，示例如下</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
 <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
 	<span class="token key atrule">active</span><span class="token punctuation">:</span> dev
 	
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8082</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> dev
   
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8083</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-配置文件的位置" tabindex="-1"><a class="header-anchor" href="#_3-配置文件的位置" aria-hidden="true">#</a> 3.配置文件的位置</h2><p>下面优先级「由高到低」：</p><ol><li>file: ./config/</li><li>file: ./</li><li>classpath: ./config/</li><li>classpath: ./</li></ol><ul><li><p>高优先级的配置会覆盖低优先级的配置（重复的部分）</p></li><li><p>Spring Boot 会从这四个位置加载全部的配置文件，会有「互补配置」的效果</p></li></ul><h3 id="_3-1-静态资源" tabindex="-1"><a class="header-anchor" href="#_3-1-静态资源" aria-hidden="true">#</a> 3.1 静态资源</h3><p><strong>访问路径：</strong></p><ul><li>“classpath:META-INF/resources/”</li><li>“classpath:/resources/”</li><li>“classpath:/static/”</li><li>“classpath:/public/”</li><li>“/”：当前项目的根路径</li></ul>`,40);function v(m,b){const a=c("router-link");return p(),i("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#spring-boot-配置"},{default:l(()=>[s("Spring Boot 配置")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_1-yaml-yml"},{default:l(()=>[s("1.YAML/YML")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_1-1-基本语法"},{default:l(()=>[s("1.1 基本语法")]),_:1})]),n("li",null,[e(a,{to:"#_1-2-值的写法"},{default:l(()=>[s("1.2 值的写法")]),_:1})]),n("li",null,[e(a,{to:"#_1-3-数据绑定"},{default:l(()=>[s("1.3 数据绑定")]),_:1})])])]),n("li",null,[e(a,{to:"#_2-profile"},{default:l(()=>[s("2.Profile")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_2-1-多-profile-文件"},{default:l(()=>[s("2.1 多 Profile 文件")]),_:1})]),n("li",null,[e(a,{to:"#_2-2-激活指定的-profile"},{default:l(()=>[s("2.2 激活指定的 profile")]),_:1})]),n("li",null,[e(a,{to:"#_2-3-yaml-yml-支持多文档块方式"},{default:l(()=>[s("2.3 yaml/yml 支持多文档块方式")]),_:1})])])]),n("li",null,[e(a,{to:"#_3-配置文件的位置"},{default:l(()=>[s("3.配置文件的位置")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_3-1-静态资源"},{default:l(()=>[s("3.1 静态资源")]),_:1})])])])])])])]),k])}const h=t(u,[["render",v],["__file","B-SpringBoot配置文件.html.vue"]]);export{h as default};
