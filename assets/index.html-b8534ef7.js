import{_ as l,Q as s,S as o,U as e,W as t,X as i,a8 as a,a9 as r,H as d}from"./framework-d7e1aa10.js";const n={},h=e("h1",{id:"elasticsearch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elasticsearch","aria-hidden":"true"},"#"),a(" ElasticSearch")],-1),u=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"说明"),e("p",null,"ElasticSearch 简单使用")],-1),_={class:"table-of-contents"},p=r('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>ElasticSearch 是分布式的「搜索」与「分析」引擎，可以快速地存储、搜索和分析海量数据，底层是对 Lucene 进行封装，以此提供 RESTful API 接口，开箱即用</p><p>基本概念</p><ol><li>索引：理解为动词时，相当于 MySQL 中的 insert；理解为名词时，相当于 MySQL 中的 database</li><li>字段类型：在索引中可以定义一个或多个类型，类似于 MySQL 中的表（table），其中每一种类型的数据放在一起。补充：ES 7 以上的版本都建议不使用类型，即将数据直接存储在索引下面，原因是使用类型时，不同类型下的字段可能相同，这样在检索时效率会下降，并且在 8 以上的版本类型将会被移除</li><li>文档：保存在某个索引某个类型下的数据就称为文档，文档是以 JSON 格式存储的，类似于 MySQL 中的表的内容</li><li>分片（倒排索引）：先将整句分词，之后维护一张记录这些词出现在哪条记录的倒排索引表，搜索时也会先分词然后匹配所有相关记录，同一条记录出现次数最高的相关性得分最高，那么这条记录就是最符合的搜索结果</li></ol><p>补充：ElesticSearch 和 Kibana（图形化界面） 的版本要一致</p><br><h2 id="安装-es-与-kibana" tabindex="-1"><a class="header-anchor" href="#安装-es-与-kibana" aria-hidden="true">#</a> 安装 ES 与 Kibana</h2><ul><li><code>docker pull elasticsearch:7.5.1</code></li><li><code>mkdir -p /data/elasticsearch/config</code></li><li><code>mkdir -p /data/elasticsearch/data</code></li><li><code>chmod -R 777 /data/elasticsearch/data</code></li><li><code>echo &quot;http.host: 0.0.0.0&quot;&gt;&gt;/data/elasticsearch/config/elsticsearch.yml</code></li><li><code>docker run --name elasticsearch -p 9200:9200 -p 9300:9300 -e &quot;discovery.type=single-node&quot; -e ES_JAVA_OPTS=&quot;-Xms256m -Xmx512m&quot; -v /data/elasticsearch/config/elsticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml -v /data/elasticsearch/data:/usr/share/elasticsearch/data -v /data/elasticsearch/plugins:/usr/share/elasticsearch/plugins -d elasticsearch:7.5.1</code></li></ul><p>docker 安装 Kibana：</p><ul><li><code>docker pull kibana:7.5.1</code></li><li><code>docker run --name kibana -e ELASTICSEARCH_HOSTS=http://192.168.30.100:9200 -p 5601:5601 -d kibana:7.5.1</code></li></ul>',10);function S(f,m){const c=d("router-link");return s(),o("div",null,[h,u,e("nav",_,[e("ul",null,[e("li",null,[t(c,{to:"#elasticsearch"},{default:i(()=>[a("ElasticSearch")]),_:1}),e("ul",null,[e("li",null,[t(c,{to:"#简介"},{default:i(()=>[a("简介")]),_:1})]),e("li",null,[t(c,{to:"#安装-es-与-kibana"},{default:i(()=>[a("安装 ES 与 Kibana")]),_:1})])])])])]),p])}const k=l(n,[["render",S],["__file","index.html.vue"]]);export{k as default};