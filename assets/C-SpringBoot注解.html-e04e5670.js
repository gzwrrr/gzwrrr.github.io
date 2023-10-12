import{_ as o,Q as i,S as p,U as n,W as t,X as e,a8 as a,a9 as l,H as c}from"./framework-d7e1aa10.js";const r={},u=n("h1",{id:"spring-boot-注解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-boot-注解","aria-hidden":"true"},"#"),a(" Spring Boot 注解")],-1),d={class:"table-of-contents"},k=l(`<h2 id="总览" tabindex="-1"><a class="header-anchor" href="#总览" aria-hidden="true">#</a> 总览</h2><div class="table-wrapper"><table><thead><tr><th>注解</th><th>说明</th></tr></thead><tbody><tr><td>@SpringBootApplication</td><td>Spring Boot应用的主配置类，用于开启自动配置和组件扫描</td></tr><tr><td>@EnableAutoConfiguration</td><td>开启自动配置，根据依赖自动配置 Spring Boot 应用</td></tr><tr><td>@ImportResource</td><td>加载XML配置文件</td></tr><tr><td>@Value</td><td>注入配置文件中的属性值</td></tr><tr><td>@ConfigurationProperties</td><td>读取配置文件中以 person 开头的属性值</td></tr><tr><td>@EnableConfigurationProperties</td><td>开启读取配置文件中的配置类</td></tr><tr><td>@RestController</td><td>SpringMVC注解，用于处理请求并生成JSON数据</td></tr><tr><td>@RequestMapping</td><td>声明控制器的请求映射，用于处理URI请求</td></tr><tr><td>@RequestParam</td><td>注解绑定请求参数</td></tr><tr><td>@ResponseBody</td><td>SpringMVC注解，用于将处理方法的返回值转换为JSON格式</td></tr><tr><td>@Bean</td><td>声明一个Bean，交给Spring容器管理</td></tr><tr><td>@Service</td><td>服务层组件注解</td></tr><tr><td>@Controller</td><td>控制器组件注解</td></tr><tr><td>@Repository</td><td>DAO层组件注解</td></tr><tr><td>@Component</td><td>通用组件注解</td></tr><tr><td>@PostConstruct</td><td>在Bean初始化后执行的方法</td></tr><tr><td>@PathVariable</td><td>注解绑定URL中的占位符</td></tr><tr><td>@ControllerAdvice</td><td>统一处理异常</td></tr><tr><td>@ComponentScan</td><td>自动扫描指定包及其子包下的组件</td></tr><tr><td>@EnableZuulProxy</td><td>开启Zuul反向代理</td></tr><tr><td>@Autowired</td><td>自动装配Bean，将Bean注入到需要使用的类中</td></tr><tr><td>@Configuration</td><td>声明配置类，相当于Spring的XML配置文件</td></tr><tr><td>@Import</td><td>加载指定的配置类</td></tr><tr><td>@Order</td><td>配置Bean的加载顺序</td></tr><tr><td>@ConditionalOnExpression</td><td>基于SpEL表达式的条件判断注解，只有当SpEL表达式为true时，才会加载相应的配置。</td></tr><tr><td>@ConditionalOnProperty</td><td>基于配置文件属性值的条件判断注解，只有当配置文件中指定的属性名的属性值与指定的值匹配时，才会加载相应的配置。</td></tr><tr><td>@ConditionalOnClass</td><td>基于类是否存在的条件判断注解，只有当指定的类存在于类路径中时，才会加载相应的配置。</td></tr><tr><td>@ConditionalOnMisssingClass</td><td>基于类是否缺失的条件判断注解，只有当指定的类缺失于类路径中时，才会加载相应的配置。</td></tr><tr><td>@ConditionOnMissingBean</td><td>基于Bean是否缺失的条件判断注解，只有当指定的Bean缺失于应用上下文中时，才会加载相应的配置。</td></tr></tbody></table></div><h2 id="启动类" tabindex="-1"><a class="header-anchor" href="#启动类" aria-hidden="true">#</a> 启动类</h2><h3 id="springbootapplication" tabindex="-1"><a class="header-anchor" href="#springbootapplication" aria-hidden="true">#</a> @SpringBootApplication</h3><blockquote><p>这个是 Spring Boot 的应用标注，被标注的类就是 Sring Boot 的主配置类，运行这个类的 main 方法就能启动应用</p><p>这是一个组合注解，由以下注解组成</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@SpringBootConfiguration</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>excludeFilters <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token annotation punctuation">@Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">CUSTOM</span><span class="token punctuation">,</span> classes <span class="token operator">=</span> <span class="token class-name">TypeExcludeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token annotation punctuation">@Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">CUSTOM</span><span class="token punctuation">,</span> classes <span class="token operator">=</span> <span class="token class-name">AutoConfigurationExcludeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="springbootconfiguration" tabindex="-1"><a class="header-anchor" href="#springbootconfiguration" aria-hidden="true">#</a> @SpringBootConfiguration</h3><blockquote><p>被标注的类就是 Spring Boot 的配置类</p></blockquote><p>由以下几个注解组成，其中 @Configuration 是 Spring 定义的注解</p><p>注意：配置类 （被 @Configuration 标注）也是容器中的一个组件（被 @Component 标注）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Configuration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enableautoconfiguration" tabindex="-1"><a class="header-anchor" href="#enableautoconfiguration" aria-hidden="true">#</a> @EnableAutoConfiguration</h3><blockquote><p>开启自动配置功能，Spring Boot 会帮我们自动配置</p></blockquote><p>由以下几个注解组成</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@AutoConfigurationPackage</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">AutoConfigurationImportSelector</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">org.springframework.boot.autoconfigure.EnableAutoConfiguration</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration,\\
org.springframework.boot.autoconfigure.aop.AopAutoConfiguration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>@AutoConfigurationPackage 自动配置包：</strong></p><ul><li>通过 @Import(AutoConfigurationPackages.Registrar.class) 实现自动配置，这是 Spring Boot 的底层注解，这个注解会给容器导入指定的组件</li><li>AutoConfigurationPackages.Registrar.clas 会将主配置类所在包及下面所有子包里面的所有组件扫描到 Spring 容器中</li></ul><p><strong>@Import(AutoConfigurationImportSelector.class)：</strong></p><ul><li>给容器导入组件，会给容器导入很多的自动配置类，即给容器导入这个场景所需要的所有组件并配置好这些组件</li></ul><h3 id="postconstruct" tabindex="-1"><a class="header-anchor" href="#postconstruct" aria-hidden="true">#</a> @PostConstruct</h3><p>spring容器初始化时，要执行注解标注的方法</p><h3 id="componentscan" tabindex="-1"><a class="header-anchor" href="#componentscan" aria-hidden="true">#</a> @ComponentScan</h3><p>注解会告知Spring扫描指定的包来初始化Spring</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;com.xxx.xx&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="enablezuulproxy" tabindex="-1"><a class="header-anchor" href="#enablezuulproxy" aria-hidden="true">#</a> @EnableZuulProxy</h3><p>路由网关的主要目的是为了让所有的微服务对外只有一个接口，我们只需访问一个网关地址，即可由网关将所有的请求代理到不同的服务中。Spring Cloud是通过Zuul来实现的，支持自动路由映射到在Eureka Server上注册的服务。Spring Cloud提供了注解@EnableZuulProxy来启用路由代理</p><h2 id="通用类" tabindex="-1"><a class="header-anchor" href="#通用类" aria-hidden="true">#</a> 通用类</h2><h3 id="autowired" tabindex="-1"><a class="header-anchor" href="#autowired" aria-hidden="true">#</a> @Autowired</h3><p>在默认情况下使用 @Autowired 注释进行自动注入时，Spring 容器中匹配的候选 Bean 数目必须有且仅有一个。当找不到一个匹配的 Bean 时，Spring 容器将抛出 BeanCreationException 异常，并指出必须至少拥有一个匹配的 Bean。</p><p>当不能确定 Spring 容器中一定拥有某个类的 Bean 时，可以在需要自动注入该类 Bean 的地方可以使用 @Autowired(required = false)，这等于告诉 Spring: 在找不到匹配 Bean 时也不报错</p><h3 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> @Component</h3><p>泛指组件，当组件不好归类的时候，我们可以使用这个注解进行标注。</p><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> @Order</h3><p>@Order(1)，值越小优先级超高，越先运行</p><h2 id="控制类" tabindex="-1"><a class="header-anchor" href="#控制类" aria-hidden="true">#</a> 控制类</h2><h3 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> @Controller</h3><p>用于标注控制层组件</p><h3 id="responsebody" tabindex="-1"><a class="header-anchor" href="#responsebody" aria-hidden="true">#</a> @ResponseBody</h3><p>支持将返回值放在response体内，而不是返回一个页面。比如Ajax接口，可以用此注解返回数据而不是页面。此注解可以放置在返回值前或方法前。</p><h3 id="restcontroller" tabindex="-1"><a class="header-anchor" href="#restcontroller" aria-hidden="true">#</a> @RestController</h3><p>组合@Controller和@ResponseBody</p><h3 id="requestmapping" tabindex="-1"><a class="header-anchor" href="#requestmapping" aria-hidden="true">#</a> @RequestMapping</h3><p>映射 Web 请求</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;/api2/copper&quot;</span><span class="token punctuation">,</span>produces<span class="token operator">=</span><span class="token string">&quot;application/json;charset=UTF-8&quot;</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="requestparam" tabindex="-1"><a class="header-anchor" href="#requestparam" aria-hidden="true">#</a> @RequestParam</h3><p>获取request请求的参数值</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CopperVO</span><span class="token punctuation">&gt;</span></span> <span class="token function">getOpList</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                                    <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;pageIndex&quot;</span><span class="token punctuation">,</span> required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> pageIndex<span class="token punctuation">,</span>
                                    <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;pageSize&quot;</span><span class="token punctuation">,</span> required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pathvariable" tabindex="-1"><a class="header-anchor" href="#pathvariable" aria-hidden="true">#</a> @PathVariable</h3><p>用来获得请求url中的动态参数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getLogin</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> userId<span class="token punctuation">,</span>  
         <span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;roleId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> roleId<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controlleradvice" tabindex="-1"><a class="header-anchor" href="#controlleradvice" aria-hidden="true">#</a> @ControllerAdvice</h3><p>统一处理异常</p><h2 id="业务类" tabindex="-1"><a class="header-anchor" href="#业务类" aria-hidden="true">#</a> 业务类</h2><h3 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> @Service</h3><p>用于标注业务层组件</p><h2 id="持久层类" tabindex="-1"><a class="header-anchor" href="#持久层类" aria-hidden="true">#</a> 持久层类</h2><h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> @Repository</h3><p>用于标注数据访问组件，即DAO组件</p><h2 id="存取类" tabindex="-1"><a class="header-anchor" href="#存取类" aria-hidden="true">#</a> 存取类</h2><h3 id="bean" tabindex="-1"><a class="header-anchor" href="#bean" aria-hidden="true">#</a> @bean</h3><ul><li>将方法的返回值添加到容器中</li><li>容器中这个组件默认的 id 就是方法名</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;bean的名字&quot;</span><span class="token punctuation">,</span>initMethod<span class="token operator">=</span><span class="token string">&quot;初始化时调用方法名字&quot;</span><span class="token punctuation">,</span>destroyMethod<span class="token operator">=</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> @Value</h3><p>application.properties定义属性，直接使用@Value注入即可</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 缺失则默认为 0</span>
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${push.start:0}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Long</span>  id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置类" tabindex="-1"><a class="header-anchor" href="#配置类" aria-hidden="true">#</a> 配置类</h2><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> @Configuration</h3><p>指明当前类是一个配置类，相当于配置文件，这样就省去了写配置文件的繁琐步骤</p><h3 id="conditionalonproperty" tabindex="-1"><a class="header-anchor" href="#conditionalonproperty" aria-hidden="true">#</a> @ConditionalOnProperty</h3><p>基于配置文件属性值的条件判断注解，只有当配置文件中指定的属性名的属性值与指定的值匹配时，才会加载相应的配置。</p><h3 id="conditionalonclass" tabindex="-1"><a class="header-anchor" href="#conditionalonclass" aria-hidden="true">#</a> @ConditionalOnClass</h3><p>基于类是否存在的条件判断注解，只有当指定的类存在于类路径中时，才会加载相应的配置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Gson</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GsonAutoConfiguration</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">GsonAutoConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConditionalOnMissingBean</span>
    <span class="token keyword">public</span> <span class="token class-name">Gson</span> <span class="token function">gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="conditionalonmisssingclass" tabindex="-1"><a class="header-anchor" href="#conditionalonmisssingclass" aria-hidden="true">#</a> @ConditionalOnMisssingClass</h3><p>基于类是否缺失的条件判断注解，只有当指定的类缺失于类路径中时，才会加载相应的配置。</p><h3 id="conditiononmissingbean" tabindex="-1"><a class="header-anchor" href="#conditiononmissingbean" aria-hidden="true">#</a> @ConditionOnMissingBean</h3><p>基于Bean是否缺失的条件判断注解，只有当指定的Bean缺失于应用上下文中时，才会加载相应的配置。</p><h3 id="propertysource" tabindex="-1"><a class="header-anchor" href="#propertysource" aria-hidden="true">#</a> @PropertySource</h3><p>在实体类中绑定指定的配置文件</p><h3 id="importresource" tabindex="-1"><a class="header-anchor" href="#importresource" aria-hidden="true">#</a> @ImportResource</h3><p>将配置文件放入 IOC 容器中，加载xml配置，一般是放在启动main类上</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ImportResource</span><span class="token punctuation">(</span><span class="token string">&quot;classpath*:/spring/*.xml&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ImportResource</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;classpath*:/spring/1.xml&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;classpath*:/spring/2.xml&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configurationproperties" tabindex="-1"><a class="header-anchor" href="#configurationproperties" aria-hidden="true">#</a> @ConfigurationProperties</h3><p>可以新建一个properties文件，ConfigurationProperties的属性prefix指定properties的配置的前缀，通过location指定properties文件的位置</p><h3 id="enableconfigurationproperties" tabindex="-1"><a class="header-anchor" href="#enableconfigurationproperties" aria-hidden="true">#</a> @EnableConfigurationProperties</h3><p>用 @EnableConfigurationProperties注解使 @ConfigurationProperties生效，并从IOC容器中获取bean。</p><h3 id="import-config-class" tabindex="-1"><a class="header-anchor" href="#import-config-class" aria-hidden="true">#</a> @Import(Config.class)</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CDConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>   <span class="token comment">// 将SgtPeppers注册为 SpringContext中的bean</span>
    <span class="token keyword">public</span> <span class="token class-name">CompactDisc</span> <span class="token function">compactDisc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CompactDisc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// CompactDisc类型的</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">CDConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>  <span class="token comment">//导入CDConfig的配置</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CDPlayerConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;cDPlayer&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CDPlayer</span> <span class="token function">cdPlayer</span><span class="token punctuation">(</span><span class="token class-name">CompactDisc</span> compactDisc<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
         <span class="token comment">// 这里会注入CompactDisc类型的bean</span>
         <span class="token comment">// 这里注入的这个bean是CDConfig.class中的CompactDisc类型的那个bean</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CDPlayer</span><span class="token punctuation">(</span>compactDisc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="conditionalonexpression" tabindex="-1"><a class="header-anchor" href="#conditionalonexpression" aria-hidden="true">#</a> @ConditionalOnExpression</h3><p>开关为true的时候才实例化bean</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ConditionalOnExpression</span><span class="token punctuation">(</span><span class="token string">&quot;\${enabled:false}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigpipeConfiguration</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">OrderMessageMonitor</span> <span class="token function">orderMessageMonitor</span><span class="token punctuation">(</span><span class="token class-name">ConfigContext</span> configContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">OrderMessageMonitor</span><span class="token punctuation">(</span>configContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,92);function h(v,m){const s=c("router-link");return i(),p("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[t(s,{to:"#spring-boot-注解"},{default:e(()=>[a("Spring Boot 注解")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#总览"},{default:e(()=>[a("总览")]),_:1})]),n("li",null,[t(s,{to:"#启动类"},{default:e(()=>[a("启动类")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#springbootapplication"},{default:e(()=>[a("@SpringBootApplication")]),_:1})]),n("li",null,[t(s,{to:"#springbootconfiguration"},{default:e(()=>[a("@SpringBootConfiguration")]),_:1})]),n("li",null,[t(s,{to:"#enableautoconfiguration"},{default:e(()=>[a("@EnableAutoConfiguration")]),_:1})]),n("li",null,[t(s,{to:"#postconstruct"},{default:e(()=>[a("@PostConstruct")]),_:1})]),n("li",null,[t(s,{to:"#componentscan"},{default:e(()=>[a("@ComponentScan")]),_:1})]),n("li",null,[t(s,{to:"#enablezuulproxy"},{default:e(()=>[a("@EnableZuulProxy")]),_:1})])])]),n("li",null,[t(s,{to:"#通用类"},{default:e(()=>[a("通用类")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#autowired"},{default:e(()=>[a("@Autowired")]),_:1})]),n("li",null,[t(s,{to:"#component"},{default:e(()=>[a("@Component")]),_:1})]),n("li",null,[t(s,{to:"#order"},{default:e(()=>[a("@Order")]),_:1})])])]),n("li",null,[t(s,{to:"#控制类"},{default:e(()=>[a("控制类")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#controller"},{default:e(()=>[a("@Controller")]),_:1})]),n("li",null,[t(s,{to:"#responsebody"},{default:e(()=>[a("@ResponseBody")]),_:1})]),n("li",null,[t(s,{to:"#restcontroller"},{default:e(()=>[a("@RestController")]),_:1})]),n("li",null,[t(s,{to:"#requestmapping"},{default:e(()=>[a("@RequestMapping")]),_:1})]),n("li",null,[t(s,{to:"#requestparam"},{default:e(()=>[a("@RequestParam")]),_:1})]),n("li",null,[t(s,{to:"#pathvariable"},{default:e(()=>[a("@PathVariable")]),_:1})]),n("li",null,[t(s,{to:"#controlleradvice"},{default:e(()=>[a("@ControllerAdvice")]),_:1})])])]),n("li",null,[t(s,{to:"#业务类"},{default:e(()=>[a("业务类")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#service"},{default:e(()=>[a("@Service")]),_:1})])])]),n("li",null,[t(s,{to:"#持久层类"},{default:e(()=>[a("持久层类")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#repository"},{default:e(()=>[a("@Repository")]),_:1})])])]),n("li",null,[t(s,{to:"#存取类"},{default:e(()=>[a("存取类")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#bean"},{default:e(()=>[a("@bean")]),_:1})]),n("li",null,[t(s,{to:"#value"},{default:e(()=>[a("@Value")]),_:1})])])]),n("li",null,[t(s,{to:"#配置类"},{default:e(()=>[a("配置类")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#configuration"},{default:e(()=>[a("@Configuration")]),_:1})]),n("li",null,[t(s,{to:"#conditionalonproperty"},{default:e(()=>[a("@ConditionalOnProperty")]),_:1})]),n("li",null,[t(s,{to:"#conditionalonclass"},{default:e(()=>[a("@ConditionalOnClass")]),_:1})]),n("li",null,[t(s,{to:"#conditionalonmisssingclass"},{default:e(()=>[a("@ConditionalOnMisssingClass")]),_:1})]),n("li",null,[t(s,{to:"#conditiononmissingbean"},{default:e(()=>[a("@ConditionOnMissingBean")]),_:1})]),n("li",null,[t(s,{to:"#propertysource"},{default:e(()=>[a("@PropertySource")]),_:1})]),n("li",null,[t(s,{to:"#importresource"},{default:e(()=>[a("@ImportResource")]),_:1})]),n("li",null,[t(s,{to:"#configurationproperties"},{default:e(()=>[a("@ConfigurationProperties")]),_:1})]),n("li",null,[t(s,{to:"#enableconfigurationproperties"},{default:e(()=>[a("@EnableConfigurationProperties")]),_:1})]),n("li",null,[t(s,{to:"#import-config-class"},{default:e(()=>[a("@Import(Config.class)")]),_:1})]),n("li",null,[t(s,{to:"#conditionalonexpression"},{default:e(()=>[a("@ConditionalOnExpression")]),_:1})])])])])])])]),k])}const b=o(r,[["render",h],["__file","C-SpringBoot注解.html.vue"]]);export{b as default};
