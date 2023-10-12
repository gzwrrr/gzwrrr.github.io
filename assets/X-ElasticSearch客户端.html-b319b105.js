import{_ as i,Q as n,S as o,U as e,W as t,X as r,a8 as a,a9 as h,H as l}from"./framework-d7e1aa10.js";const _={},d=e("h1",{id:"elasticsearch-客户端",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elasticsearch-客户端","aria-hidden":"true"},"#"),a(" ElasticSearch 客户端")],-1),E={class:"table-of-contents"},g={class:"hint-container info"},p=e("p",{class:"hint-container-title"},"说明",-1),u=e("p",null,"相关文档：",-1),v={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/current/getting-started-java.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#reference",target:"_blank",rel:"noopener noreferrer"},S=h('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>在 Java 中使用 Elasticsearch 有多种方式，Elasticsearch 是一个开源的分布式搜索和分析引擎，用于存储和检索大量的数据。以下是在 Java 中使用 Elasticsearch 的一些常见方式：</p><ol><li><strong>Elasticsearch Java High-Level REST Client：</strong> 这是官方提供的高级 REST 客户端，通过 HTTP 与 Elasticsearch 集群进行交互。它提供了与 Elasticsearch API 对应的 Java 方法，使得编写 Java 代码与 Elasticsearch 进行数据的索引、检索、删除等操作非常方便。</li><li><strong>Elasticsearch Java Low-Level REST Client：</strong> 这也是官方提供的 REST 客户端，与上述高级客户端相比，它提供了更底层的访问方式，更接近 Elasticsearch 的原生 REST API。适用于那些需要更精细控制的情况。</li><li><strong>Spring Data Elasticsearch：</strong> 如果您使用 Spring 框架，可以使用 Spring Data Elasticsearch 模块来集成 Elasticsearch。它提供了与 Spring Data JPA 类似的仓库接口和查询构建方式，让您能够通过编写简洁的代码与 Elasticsearch 进行交互。</li><li><strong>Native Java API：</strong> Elasticsearch 提供了原生的 Java API，您可以使用它来构建各种与 Elasticsearch 集群交互的代码。这需要更多的配置和处理，但提供了更高的灵活性。</li><li><strong>Elasticsearch Transport Client（已弃用）：</strong> Elasticsearch 早期提供了 Transport Client，用于与 Elasticsearch 集群建立连接，但在较新的版本中已被弃用，不再推荐使用。</li><li><strong>第三方库：</strong> 除了官方提供的方式外，还有一些第三方的 Elasticsearch 客户端库，例如 Jest、Elasticsearch RestHighLevelClient 等，它们也提供了在 Java 中与 Elasticsearch 集群进行交互的能力。</li></ol>',3);function m(J,T){const s=l("router-link"),c=l("ExternalLinkIcon");return n(),o("div",null,[d,e("nav",E,[e("ul",null,[e("li",null,[t(s,{to:"#elasticsearch-客户端"},{default:r(()=>[a("ElasticSearch 客户端")]),_:1}),e("ul",null,[e("li",null,[t(s,{to:"#概述"},{default:r(()=>[a("概述")]),_:1})])])])])]),e("div",g,[p,u,e("ol",null,[e("li",null,[e("a",v,[a("https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/current/getting-started-java.html"),t(c)])]),e("li",null,[e("a",f,[a("https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#reference"),t(c)])])])]),S])}const k=i(_,[["render",m],["__file","X-ElasticSearch客户端.html.vue"]]);export{k as default};
