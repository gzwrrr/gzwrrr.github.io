import{_ as t,Q as s,S as n,U as e,W as l,X as i,a8 as a,a9 as r,H as c}from"./framework-d7e1aa10.js";const u={},o=e("h1",{id:"mysql-语法规范",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql-语法规范","aria-hidden":"true"},"#"),a(" MySQL 语法规范")],-1),h={class:"table-of-contents"},m=r(`<ol><li>不区分大小写，但是建议关键字大写，表名列名小写</li><li>每条命令用 “;” 结尾</li><li>根据每条命令的需要，可以进行换行或者缩进</li><li>注释： <ol><li>单行注释：<code>#注释文字</code></li><li>单行注释：<code>--注释文字</code></li><li>多行注释：<code>/* 注释文字 */</code></li></ol></li></ol><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><div class="table-wrapper"><table><thead><tr><th>数据类型</th><th>描述</th></tr></thead><tbody><tr><td>INT</td><td>整型，用于存储整数值</td></tr><tr><td>FLOAT</td><td>浮点型，用于存储浮点数值</td></tr><tr><td>DOUBLE</td><td>双精度浮点型，用于存储高精度浮点数值</td></tr><tr><td>DECIMAL</td><td>十进制数型，用于存储高精度数字</td></tr><tr><td>CHAR</td><td>固定长度字符串类型，最多可存储255个字符</td></tr><tr><td>VARCHAR</td><td>可变长度字符串类型，最多可存储65535个字符</td></tr><tr><td>TEXT</td><td>长文本类型，用于存储大文本数据，最多可存储65535个字符</td></tr><tr><td>DATE</td><td>日期类型，用于存储日期值</td></tr><tr><td>TIME</td><td>时间类型，用于存储时间值</td></tr><tr><td>DATETIME</td><td>日期时间类型，用于存储日期和时间值</td></tr><tr><td>TIMESTAMP</td><td>时间戳类型，用于存储时间戳值</td></tr><tr><td>BOOLEAN</td><td>布尔类型，用于存储true/false值</td></tr></tbody></table></div><h2 id="显示数据库" tabindex="-1"><a class="header-anchor" href="#显示数据库" aria-hidden="true">#</a> 显示数据库</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show databases;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="进入指定数据库" tabindex="-1"><a class="header-anchor" href="#进入指定数据库" aria-hidden="true">#</a> 进入指定数据库</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>use 指定数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="显示表" tabindex="-1"><a class="header-anchor" href="#显示表" aria-hidden="true">#</a> 显示表</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show tables;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="直接查看指定数据库" tabindex="-1"><a class="header-anchor" href="#直接查看指定数据库" aria-hidden="true">#</a> 直接查看指定数据库</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show tables from 指定数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看当前处于哪个库-调用函数" tabindex="-1"><a class="header-anchor" href="#查看当前处于哪个库-调用函数" aria-hidden="true">#</a> 查看当前处于哪个库(调用函数)</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select database();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建表-需要指定有哪些列" tabindex="-1"><a class="header-anchor" href="#创建表-需要指定有哪些列" aria-hidden="true">#</a> 创建表（需要指定有哪些列）</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table 表名(
    列名 类型,
    id int,
    name varchar(20)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看表的结构" tabindex="-1"><a class="header-anchor" href="#查看表的结构" aria-hidden="true">#</a> 查看表的结构</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>desc 表名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看表中的数据" tabindex="-1"><a class="header-anchor" href="#查看表中的数据" aria-hidden="true">#</a> 查看表中的数据</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from 表名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="想表中插入数据" tabindex="-1"><a class="header-anchor" href="#想表中插入数据" aria-hidden="true">#</a> 想表中插入数据</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>insert into 表名 (列名,列名) values(数据,数据);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改表中的数据" tabindex="-1"><a class="header-anchor" href="#修改表中的数据" aria-hidden="true">#</a> 修改表中的数据</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>update 表名 set 列名=值 where 限定条件（如id=1）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23);function v(b,g){const d=c("router-link");return s(),n("div",null,[o,e("nav",h,[e("ul",null,[e("li",null,[l(d,{to:"#mysql-语法规范"},{default:i(()=>[a("MySQL 语法规范")]),_:1}),e("ul",null,[e("li",null,[l(d,{to:"#数据类型"},{default:i(()=>[a("数据类型")]),_:1})]),e("li",null,[l(d,{to:"#显示数据库"},{default:i(()=>[a("显示数据库")]),_:1})]),e("li",null,[l(d,{to:"#进入指定数据库"},{default:i(()=>[a("进入指定数据库")]),_:1})]),e("li",null,[l(d,{to:"#显示表"},{default:i(()=>[a("显示表")]),_:1})]),e("li",null,[l(d,{to:"#直接查看指定数据库"},{default:i(()=>[a("直接查看指定数据库")]),_:1})]),e("li",null,[l(d,{to:"#查看当前处于哪个库-调用函数"},{default:i(()=>[a("查看当前处于哪个库(调用函数)")]),_:1})]),e("li",null,[l(d,{to:"#创建表-需要指定有哪些列"},{default:i(()=>[a("创建表（需要指定有哪些列）")]),_:1})]),e("li",null,[l(d,{to:"#查看表的结构"},{default:i(()=>[a("查看表的结构")]),_:1})]),e("li",null,[l(d,{to:"#查看表中的数据"},{default:i(()=>[a("查看表中的数据")]),_:1})]),e("li",null,[l(d,{to:"#想表中插入数据"},{default:i(()=>[a("想表中插入数据")]),_:1})]),e("li",null,[l(d,{to:"#修改表中的数据"},{default:i(()=>[a("修改表中的数据")]),_:1})])])])])]),m])}const _=t(u,[["render",v],["__file","A-MySQL语法规范.html.vue"]]);export{_ as default};
