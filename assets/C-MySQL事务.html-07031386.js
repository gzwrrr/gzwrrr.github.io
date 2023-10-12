import{_ as l,Q as c,S as s,U as t,W as d,X as n,a8 as e,a9 as i,H as a}from"./framework-d7e1aa10.js";const h={},_=t("h1",{id:"mysql-事务",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mysql-事务","aria-hidden":"true"},"#"),e(" MySQL 事务")],-1),p={class:"table-of-contents"},f=i('<h2 id="事务的基本特性-acid" tabindex="-1"><a class="header-anchor" href="#事务的基本特性-acid" aria-hidden="true">#</a> 事务的基本特性 ACID</h2><div class="table-wrapper"><table><thead><tr><th>中文名</th><th>英文名</th><th>解释</th></tr></thead><tbody><tr><td>原子性</td><td>Atomicity</td><td>事务是一个原子操作单元，不可再分割，要么全部执行成功，要么全部不执行</td></tr><tr><td>一致性</td><td>Consistency</td><td>事务执行前后，数据库的完整性约束没有被破坏</td></tr><tr><td>隔离性</td><td>Isolation</td><td>并发执行的事务之间是隔离的，一个事务的执行不应影响其他事务的执行</td></tr><tr><td>持久性</td><td>Durability</td><td>事务完成后，对数据库的修改是永久的，即使系统故障也不会丢失</td></tr></tbody></table></div><p><mark>特别说明：</mark></p><p>在数据库中，完整性约束是指数据库中数据的正确性、有效性、一致性等方面的限制条件，用来保证数据的正确性。例如，主键约束保证每行数据都具有唯一标识符，外键约束保证表与表之间的数据关系正确等。</p><p>事务的一致性特性指的是，在事务执行前后，数据库中的完整性约束没有被破坏。也就是说，在一个事务执行前，数据库中的完整性约束已经被满足，事务执行后，数据库中的完整性约束仍然得到保持。</p><p>例如，如果一个事务包含了多个操作，其中包括插入、更新、删除等操作，如果这些操作执行后，数据库中的主键、唯一约束、外键等完整性约束仍然被满足，那么就可以认为这个事务是满足一致性特性的。</p><p>如果在一个事务中，某个操作破坏了数据库中的完整性约束，那么这个事务就不能满足一致性特性，事务必须被回滚，所有的操作都要撤销，直到数据库中的完整性约束再次被满足。因此，保证数据的完整性约束是非常重要的，事务的一致性特性也是保证数据完整性约束的重要保障之一。</p><h2 id="innodb-事务实现" tabindex="-1"><a class="header-anchor" href="#innodb-事务实现" aria-hidden="true">#</a> InnoDB 事务实现</h2><p>InnoDB 是通过 <code>Buffer Pool</code>、<code>LogBuffer</code>、<code>RedoLog</code>、<code>UndoLog</code> 来实现事务的：</p><ol><li>InnoDB 在收到一个更新语句时，回先根据条件找到数据所在项，并将该也缓存在 Buffer Pool 中</li><li>执行更新语句时，会改 Buffer Pool 中的数据，也就是内存中的数据</li><li>针对更新语句生成一个 <code>RedoLog</code> 对象，并存入 <code>LogBuffer</code> 中</li><li>针对更新语句生成 <code>UndoLog</code> 日志，用于事务回滚</li><li>如果事务提交，那么就把 <code>RedoLog</code> 对象进行持久化，后续还有其他机制将 <code>Buffer Pool</code> 中修改的数据页持久化到磁盘中</li><li>如果事务回滚，那么就利用 <code>UndoLog</code> 日志进行回滚</li></ol><h2 id="spring-事务注解" tabindex="-1"><a class="header-anchor" href="#spring-事务注解" aria-hidden="true">#</a> Spring 事务注解</h2>',11),u={class:"hint-container info"},m=t("p",{class:"hint-container-title"},"相关文章",-1),P={href:"https://zhuanlan.zhihu.com/p/148504094",target:"_blank",rel:"noopener noreferrer"},A={href:"https://mp.weixin.qq.com/s/LbyGTAiCmFy4esNdCJREJQ",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mp.weixin.qq.com/s/mdqVNmPfFphagrrB7EMegA",target:"_blank",rel:"noopener noreferrer"},R=i('<p>事务传播行为：所谓事务的传播行为是指，如果在开始当前事务之前，一个事务上下文已经存在，此时有若干选项可以指定一个事务性方法的执行行为。在<code>TransactionDefinition</code>定义中包括了如下几个表示传播行为的常量：</p><div class="table-wrapper"><table><thead><tr><th>常量</th><th>说明</th></tr></thead><tbody><tr><td><code>PROPAGATION_REQUIRED</code></td><td>如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。这是默认值。</td></tr><tr><td><code>PROPAGATION_REQUIRES_NEW</code></td><td>创建一个新的事务，如果当前存在事务，则把当前事务挂起。</td></tr><tr><td><code>PROPAGATION_MANDATORY</code></td><td>如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。</td></tr><tr><td><code>PROPAGATION_NESTED</code></td><td>如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于<code>TransactionDefinition.PROPAGATION_REQUIRED</code>。</td></tr><tr><td><code>PROPAGATION_SUPPORTS</code></td><td>如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。</td></tr><tr><td><code>PROPAGATION_NOT_SUPPORTED</code></td><td>以非事务方式运行，如果当前存在事务，则把当前事务挂起。</td></tr><tr><td><code>PROPAGATION_NEVER</code></td><td>以非事务方式运行，如果当前存在事务，则抛出异常。</td></tr></tbody></table></div>',2);function g(N,I){const o=a("router-link"),r=a("ExternalLinkIcon");return c(),s("div",null,[_,t("nav",p,[t("ul",null,[t("li",null,[d(o,{to:"#mysql-事务"},{default:n(()=>[e("MySQL 事务")]),_:1}),t("ul",null,[t("li",null,[d(o,{to:"#事务的基本特性-acid"},{default:n(()=>[e("事务的基本特性 ACID")]),_:1})]),t("li",null,[d(o,{to:"#innodb-事务实现"},{default:n(()=>[e("InnoDB 事务实现")]),_:1})]),t("li",null,[d(o,{to:"#spring-事务注解"},{default:n(()=>[e("Spring 事务注解")]),_:1})])])])])]),f,t("div",u,[m,t("ol",null,[t("li",null,[t("p",null,[t("a",P,[e("带你读懂Spring 事务——事务的传播机制"),d(r)])])]),t("li",null,[t("p",null,[t("a",A,[e("https://mp.weixin.qq.com/s/LbyGTAiCmFy4esNdCJREJQ"),d(r)])])]),t("li",null,[t("p",null,[t("a",b,[e("https://mp.weixin.qq.com/s/mdqVNmPfFphagrrB7EMegA"),d(r)])])])])]),R])}const E=l(h,[["render",g],["__file","C-MySQL事务.html.vue"]]);export{E as default};
