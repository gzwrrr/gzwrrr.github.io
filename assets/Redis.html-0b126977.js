import{_ as t,Q as e,S as s,a5 as n}from"./framework-ec2af7a3.js";const a={},d=n(`<h1 id="redis-简单使用" tabindex="-1"><a class="header-anchor" href="#redis-简单使用" aria-hidden="true">#</a> Redis 简单使用</h1><h1 id="_1-redis的相关问题" tabindex="-1"><a class="header-anchor" href="#_1-redis的相关问题" aria-hidden="true">#</a> 1.Redis的相关问题</h1><ul><li><p>redis是单线程的，是基于内存操作的，CPU不是redis的性能瓶颈，redis的瓶颈在于机器的内存和网络带宽，官方表示这可以使用单线程实现，便使用单线程了</p></li><li><p>redis将所有的数据放在了内存中，使用单线程是最快的。倘若使用多线程，会在CPU中进行上下文切换，这是非常耗时的</p></li></ul><h2 id="_1-1-redis-conf" tabindex="-1"><a class="header-anchor" href="#_1-1-redis-conf" aria-hidden="true">#</a> 1.1 Redis.conf</h2><p><strong>【】中的为具体的自定义配置</strong></p><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">unit</td><td style="text-align:center;">单位，对大小写不敏感</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">include 【path】</td><td style="text-align:center;">可以将多个配置文件引入组合成一个</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">bind 【ip】</td><td style="text-align:center;">绑定 ip</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">pretected-mode 【yes | no】</td><td style="text-align:center;">是否开启受保护模式，默认为 yes</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">port 【port】</td><td style="text-align:center;">设置端口</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;">daemonize 【yes | no】</td><td style="text-align:center;">是否以守护进程的方式运行，默认是 no</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:center;">pidfile 【path】</td><td style="text-align:center;">指定 pid 文件，让 redis 在后台运行</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:center;">loglevel 【level】</td><td style="text-align:center;">指定日志级别</td></tr><tr><td style="text-align:center;">9</td><td style="text-align:center;">logfile 【path】</td><td style="text-align:center;">日志文件的位置</td></tr><tr><td style="text-align:center;">10</td><td style="text-align:center;">database 【sum】</td><td style="text-align:center;">数据库的数量，默认为 16</td></tr><tr><td style="text-align:center;">11</td><td style="text-align:center;">always-show-logo 【yes | no】</td><td style="text-align:center;">是否总是显示 logo</td></tr><tr><td style="text-align:center;">12</td><td style="text-align:center;">save 【time】 【keyNum】</td><td style="text-align:center;">在 time 时间（单位为：s）内修改了 keyNum 个 key 就将数据持久化到 .rdb/.aof 文件</td></tr><tr><td style="text-align:center;">13</td><td style="text-align:center;">stop-writes-on-bgsave-error 【yes | no】</td><td style="text-align:center;">如果持久化出错，是否还需要继续工作，默认 yes</td></tr><tr><td style="text-align:center;">14</td><td style="text-align:center;">rdbcompression 【yes | no】</td><td style="text-align:center;">是否压缩 rdb 文件，默认 yes</td></tr><tr><td style="text-align:center;">15</td><td style="text-align:center;">dir 【path】</td><td style="text-align:center;">rdb 文件的保存目录</td></tr><tr><td style="text-align:center;">16</td><td style="text-align:center;">requirepass 【pwd】</td><td style="text-align:center;">设置密码，默认为空</td></tr><tr><td style="text-align:center;">17</td><td style="text-align:center;">maxclients 【sum】</td><td style="text-align:center;">最大连接数量</td></tr><tr><td style="text-align:center;">18</td><td style="text-align:center;">maxmemory 【size】</td><td style="text-align:center;">redis 配置的最大内存容量，单位为 byte</td></tr><tr><td style="text-align:center;">19</td><td style="text-align:center;">maxmemory-policy noeviction</td><td style="text-align:center;">内存达到上限之后的处理策略</td></tr><tr><td style="text-align:center;">20</td><td style="text-align:center;">appendonly 【yes | no】</td><td style="text-align:center;">是否使用 aof 持久化模式，默认为 no，即使用 rdb</td></tr><tr><td style="text-align:center;">21</td><td style="text-align:center;">appendfilename 【filename】</td><td style="text-align:center;">持久化文件的名称</td></tr><tr><td style="text-align:center;">22</td><td style="text-align:center;">appendsync everysec</td><td style="text-align:center;">每秒都执行一次同步数据的操作</td></tr></tbody></table><p>p28</p><h1 id="_2-性能测试" tabindex="-1"><a class="header-anchor" href="#_2-性能测试" aria-hidden="true">#</a> 2.性能测试</h1><p>redis-benchmark 是 redis 官方自带的一个压力测试工具</p><h2 id="_2-1-redis-benchmark-命令参数" tabindex="-1"><a class="header-anchor" href="#_2-1-redis-benchmark-命令参数" aria-hidden="true">#</a> 2.1 redis-benchmark 命令参数</h2><table><thead><tr><th>序号</th><th style="text-align:left;">选项</th><th style="text-align:left;">描述</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>1</td><td style="text-align:left;">-h</td><td style="text-align:left;">指定服务器主机名</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td>2</td><td style="text-align:left;">-p</td><td style="text-align:left;">指定服务器端口</td><td style="text-align:left;">6379</td></tr><tr><td>3</td><td style="text-align:left;">-s</td><td style="text-align:left;">指定服务器socket</td><td style="text-align:left;">/</td></tr><tr><td>4</td><td style="text-align:left;">-c</td><td style="text-align:left;">指定并发连接数</td><td style="text-align:left;">50</td></tr><tr><td>5</td><td style="text-align:left;">-n</td><td style="text-align:left;">指定请求数</td><td style="text-align:left;">10000</td></tr><tr><td>6</td><td style="text-align:left;">-d</td><td style="text-align:left;">以字节的形式指定SET/GET值的数据大小</td><td style="text-align:left;">2</td></tr><tr><td>7</td><td style="text-align:left;">-k</td><td style="text-align:left;">1=keep alive 0 = reconnect</td><td style="text-align:left;">1</td></tr><tr><td>8</td><td style="text-align:left;">-r</td><td style="text-align:left;">SET/GET/INCR 使用随机key，SADD使用随机值</td><td style="text-align:left;">/</td></tr><tr><td>9</td><td style="text-align:left;">-p</td><td style="text-align:left;">通过管道传输<code>&lt;numreq&gt;</code>请求</td><td style="text-align:left;">1</td></tr><tr><td>10</td><td style="text-align:left;">-q</td><td style="text-align:left;">强制退出redis，仅显示query/sec值</td><td style="text-align:left;">/</td></tr><tr><td>11</td><td style="text-align:left;">--csv</td><td style="text-align:left;">以CSV格式输出</td><td style="text-align:left;">/</td></tr><tr><td>12</td><td style="text-align:left;">-l</td><td style="text-align:left;">生成循环，永久执行测试</td><td style="text-align:left;">/</td></tr><tr><td>13</td><td style="text-align:left;">-t</td><td style="text-align:left;">仅运行以逗号分隔的测试命令列表</td><td style="text-align:left;">/</td></tr><tr><td>14</td><td style="text-align:left;">-l</td><td style="text-align:left;">Idle模式，仅打开N个idle连接并等待</td><td style="text-align:left;">/</td></tr></tbody></table><h1 id="_3-redis的基础知识" tabindex="-1"><a class="header-anchor" href="#_3-redis的基础知识" aria-hidden="true">#</a> 3.Redis的基础知识</h1><p>redis默认有16个数据库，默认使用第0个</p><h2 id="_3-1-基础语法" tabindex="-1"><a class="header-anchor" href="#_3-1-基础语法" aria-hidden="true">#</a> 3.1 基础语法</h2><table><thead><tr><th>序号</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>select 0~15</code></td><td>切换数据库</td></tr><tr><td>2</td><td><code>dbsize</code></td><td>查看当前数据库的空间大小</td></tr><tr><td>3</td><td><code>set 键 值</code></td><td>储存数据</td></tr><tr><td>4</td><td><code>get 键</code></td><td>获取键对应的值</td></tr><tr><td>5</td><td><code>keys *</code></td><td>查看当前数据库中所有的键</td></tr><tr><td>6</td><td><code>flushdb</code></td><td>清空当前数据库</td></tr><tr><td>7</td><td><code>flushall</code></td><td>清空所有数据库</td></tr><tr><td>8</td><td><code>exists 键</code></td><td>查看当前数据库是否存在这个键</td></tr><tr><td>9</td><td><code>move 键 值</code></td><td>移除当前数据库中的指定键值对</td></tr><tr><td>10</td><td><code>expire 键 时间</code></td><td>指定时间结束后过期，即删除该键值对</td></tr><tr><td>11</td><td><code>ttl 键</code></td><td>查看指定键值对剩余存活时间</td></tr><tr><td>12</td><td><code>append 键 追加的值</code></td><td>向指定键的值后追加值</td></tr></tbody></table><h2 id="_3-2-基本类型" tabindex="-1"><a class="header-anchor" href="#_3-2-基本类型" aria-hidden="true">#</a> 3.2 基本类型</h2><h3 id="_3-2-1-string" tabindex="-1"><a class="header-anchor" href="#_3-2-1-string" aria-hidden="true">#</a> 3.2.1 String</h3><ul><li>相关的用法</li></ul><table><thead><tr><th>序号</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>strlen 键</code></td><td>查看对应值的长度</td></tr><tr><td>2</td><td><code>incr 键</code></td><td>让指定键的值自动加1，并显示</td></tr><tr><td>3</td><td><code>decr 键</code></td><td>让指定键的值自动减1，并显示</td></tr><tr><td>4</td><td><code>incrby 键 增量</code></td><td>让指定键的值增加指定的增量</td></tr><tr><td>5</td><td><code>decrby 键 减量</code></td><td>让指定键的值减少指定的减量</td></tr><tr><td>6</td><td><code>getrange 键 起始下标 结束下标</code></td><td>得到指定键中指定范围的值</td></tr><tr><td>7</td><td><code>setrange 键 起始下标 修改的值</code></td><td>替换指定键中起始下标及往后的值为指定修改的值</td></tr><tr><td>8</td><td><code>setex 键 过期时间 值</code></td><td>setex : set with expire，存入键值对并指定过期时间</td></tr><tr><td>9</td><td><code>setnx 键 值</code></td><td>setnx : set if not exist，如果不存在再添加（分布式锁中常用）</td></tr><tr><td>10</td><td><code>mset 键1 值1 键2 值2 ...</code></td><td>同时设置多个键值对</td></tr><tr><td>11</td><td><code>mget 键1 键2 ...</code></td><td>同时获取多个值</td></tr><tr><td>12</td><td><code>msetnx 键1 值1 键2 值2</code></td><td>不存在才添加，原子性操作，只有全部不存在才能成功</td></tr><tr><td>13</td><td><code>getset 键 新值</code></td><td>如果存在值才获取对应的值，然后再设置新的值</td></tr></tbody></table><h3 id="_3-2-2-list" tabindex="-1"><a class="header-anchor" href="#_3-2-2-list" aria-hidden="true">#</a> 3.2.2 List</h3><p>注：在list中，值是可以重复的，左与前对应，右与后对应，带字母 “ l ” 的命令中的 “ l ” 含义有时是list，有时是left</p><table><thead><tr><th>序号</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>lpush list名 值</code></td><td>从左侧添加值（头部）</td></tr><tr><td>2</td><td><code>rpush list名 值</code></td><td>从右侧添加值（尾部）</td></tr><tr><td>3</td><td><code>lrange list名 起始下标 结束下标</code></td><td>查看一定范围内list的值</td></tr><tr><td>4</td><td><code>lpop list名</code></td><td>移除list左侧第一个值</td></tr><tr><td>5</td><td><code>rpop list名</code></td><td>移除list右侧第一个值</td></tr><tr><td>6</td><td><code>lindex list名 index</code></td><td>获取index索引对应的值</td></tr><tr><td>7</td><td><code>llen list名</code></td><td>获取list的长度</td></tr><tr><td>8</td><td><code>lrem list名 数量 需要移除的值</code></td><td>移除指定的值</td></tr><tr><td>9</td><td><code>ltrim list名 起始下标 结束下标</code></td><td>只保留范围内的值（删除其余的值）</td></tr><tr><td>10</td><td><code>rpoplpush 被pop的list1名 被push的list2名</code></td><td>将list1最右边值移除并添加到list2的最左边（这是一个组合命令 ）</td></tr><tr><td>11</td><td><code>lset list名 index 新值</code></td><td>更新list里index索引对应的值为新值</td></tr><tr><td>12</td><td>\`linsert list名 before</td><td>after 指定值 插入值\`</td></tr></tbody></table><h3 id="_3-2-3-set" tabindex="-1"><a class="header-anchor" href="#_3-2-3-set" aria-hidden="true">#</a> 3.2.3 Set</h3><p>注：set中的值是不可以重复的，也是无序的</p><table><thead><tr><th>序号</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>sadd set名 值</code></td><td>添加值</td></tr><tr><td>2</td><td><code>smembers set名</code></td><td>查看值</td></tr><tr><td>3</td><td><code>sismember set名 被判断的值</code></td><td>判断set中是否有被判断的值，有则返回，否则返回0</td></tr><tr><td>4</td><td><code>scard set名</code></td><td>获取set集合中的元素个数</td></tr><tr><td>5</td><td><code>srem set名 指定值</code></td><td>移除set中指定的值</td></tr><tr><td>6</td><td><code>srandmember set名</code></td><td>从set中随机取出一个值</td></tr><tr><td>7</td><td><code>spop set名</code></td><td>从set中随机移除一个值</td></tr><tr><td>8</td><td><code>smove 被移除的set1名 被移入的set2名 指定值</code></td><td>将set1中指定的值移入到set2中</td></tr><tr><td>9</td><td><code>sdiff set1名 set2名</code></td><td>获得两个set的差集</td></tr><tr><td>10</td><td><code>sinter set1名 set2名</code></td><td>获得两个set的交集</td></tr><tr><td>11</td><td><code>sunion set1名 set2名</code></td><td>获得两个set的并集</td></tr></tbody></table><h3 id="_3-2-4-hash" tabindex="-1"><a class="header-anchor" href="#_3-2-4-hash" aria-hidden="true">#</a> 3.2.4 Hash</h3><p>注：是一个Map集合（键值对key-value），本质和String没有太大区别，只不过hash更适合存储对象</p><table><thead><tr><th>序号</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>hset hash名 键 值</code></td><td>添加键值对</td></tr><tr><td>2</td><td><code>hget hash名 指定键</code></td><td>根据指定键得到值</td></tr><tr><td>3</td><td><code>hmset hash名 键1 值1 键2 值2 ...</code></td><td>同时设置多个键值对</td></tr><tr><td>4</td><td><code>hmget hash名 键1 键2 ...</code></td><td>同时获取多个值</td></tr><tr><td>5</td><td><code>hgetall hash名</code></td><td>获取全部的键值对</td></tr><tr><td>6</td><td><code>hdel hash名 指定键</code></td><td>删除指定键的键值对</td></tr><tr><td>7</td><td><code>hlen hash名</code></td><td>获取hash的字段数量</td></tr><tr><td>8</td><td><code>hexists hash名 指定键</code></td><td>判断指定键对应的键值对是否存在</td></tr><tr><td>9</td><td><code>hkeys hash名</code></td><td>获取hash所有的键</td></tr><tr><td>10</td><td><code>hvals hash名</code></td><td>获取hash所有的值</td></tr><tr><td>11</td><td><code>hincrby hash名 指定键 增量</code></td><td>将指定键的值增加对应增量（增量也可以是负的）</td></tr><tr><td>12</td><td><code>hsetnx hash 键 值</code></td><td>不存在则添加，否则不添加</td></tr></tbody></table><h3 id="_3-2-5-zset" tabindex="-1"><a class="header-anchor" href="#_3-2-5-zset" aria-hidden="true">#</a> 3.2.5 Zset</h3><p>注：在set的基础上增加了一个score，zset是有序的</p><table><thead><tr><th>序号</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>zadd zset名 score 值</code></td><td>添加值</td></tr><tr><td>2</td><td><code>zadd zset名 score1 值1 score2 值2 ...</code></td><td>同时添加多个值</td></tr><tr><td>3</td><td><code>zrangebyscore zset名 -inf +inf withscores</code></td><td>根据score的大小从小到大排序排序查询，查询结果的score范围无穷小到无穷大</td></tr><tr><td>4</td><td><code>zrevrange zset 0 -1</code></td><td>同上类似，由大到小排序查询</td></tr><tr><td>5</td><td><code>zrange zset名 起始下标结束下标</code></td><td>查看范围内的值</td></tr><tr><td>6</td><td><code>zrem zset名 指定值</code></td><td>删除指定的值</td></tr><tr><td>7</td><td><code>zcard zset名</code></td><td>获取元素个数</td></tr><tr><td>8</td><td><code>zcount zset名 起始下标 结束下标</code></td><td>统计符合范围的score对应的值的总数</td></tr></tbody></table><h2 id="_3-3-特殊类型" tabindex="-1"><a class="header-anchor" href="#_3-3-特殊类型" aria-hidden="true">#</a> 3.3 特殊类型</h2><p><strong>三种特殊类型</strong></p><ul><li>geospatial</li><li>hyperloglog</li><li>bitmaps</li></ul><h3 id="_3-3-1-geospatial" tabindex="-1"><a class="header-anchor" href="#_3-3-1-geospatial" aria-hidden="true">#</a> 3.3.1 geospatial</h3><p>注：底层实现原理是zset，所以能用zset的命令操作</p><table><thead><tr><th>序号</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>geoadd 键 值（经度 纬度 名称）</code></td><td>添加地理位置</td></tr><tr><td>2</td><td><code>geopos 键 值的名称</code></td><td>获取经纬度</td></tr><tr><td>3</td><td><code>geodist 键 名称1 名称2 单位</code></td><td>获取两地之间的直线距离</td></tr><tr><td>4</td><td><code>georadius 键 值（经度 纬度） 半径 单位 ...</code></td><td>查询出在半径内的所有已存储的地理位置</td></tr><tr><td>5</td><td><code>georadiusbymember 键 名称 半径 单位 ...</code></td><td>以地理位置为中心搜寻半径内的其他地理位置</td></tr><tr><td>6</td><td><code>geohash 键 名称1 名称2 ...</code></td><td>将地理位置转换成11位的 <code>geohash</code> 字符串</td></tr></tbody></table><h3 id="_3-3-2-hyperloglog" tabindex="-1"><a class="header-anchor" href="#_3-3-2-hyperloglog" aria-hidden="true">#</a> 3.3.2 hyperloglog</h3><p>注：这是一个基数统计（相同元素只记作一个）算法，相较于set的优点事hyperloglog占用的内存是固定的且较小的，2^64的不同元素只占 12 KB，且这种统计法是允许误差的</p><table><thead><tr><th>序号</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>pfadd 键 值1 值2 ...</code></td><td>创建集合</td></tr><tr><td>2</td><td><code>pfcount 键</code></td><td>统计集合里的基数</td></tr><tr><td>3</td><td><code>pfmerge 键1 键2</code></td><td>合并两个集合</td></tr></tbody></table><h3 id="_3-3-3-bitmaps" tabindex="-1"><a class="header-anchor" href="#_3-3-3-bitmaps" aria-hidden="true">#</a> 3.3.3 bitmaps</h3><p>注：位存储，位图，也是一种数据结构</p><table><thead><tr><th>序号</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>setbit 键 当前序号 值</code></td><td>添加元素</td></tr><tr><td>2</td><td><code>getbit 键 序号</code></td><td>获取值</td></tr><tr><td>3</td><td><code>bitcount 键</code></td><td>统计值</td></tr></tbody></table><h1 id="_4-事务" tabindex="-1"><a class="header-anchor" href="#_4-事务" aria-hidden="true">#</a> 4.事务</h1><p>注：redis 单条命令是保证原子性的，但是 redis 的事务不保证原子性，redis 事务的本质可以理解成一组命令的集合，同时也没有隔离级别的概念</p><p><strong>redis的事务：</strong></p><ul><li><p>开启事务（multi）</p></li><li><p>命令入队（ ... ），期间可以放弃事务，放弃之后队列中的命令都不会被执行</p></li><li><p>执行事务（exec）；取消事务（discard）</p></li><li><p>编译型异常，即代码本身有问题，那么事务中的所有命令都不会被执行</p></li><li><p>运行时异常 ( 如：1/0 )，即如果事务队列中存在语法性错误，那么执行命令的时候其他的命令还是可以执行的，只有错误命令才会抛出异常，所以说单条保证原子性，但事务不保证原子性</p></li><li><p>监控（watch）：悲观锁和乐观锁，乐观锁由于不会主动加锁，所以需要判断数据是否修改，将判断结果存入 version 中，执行命令时先获取 version，根据version 决定是否更新数据</p></li></ul><h1 id="_5-jedis" tabindex="-1"><a class="header-anchor" href="#_5-jedis" aria-hidden="true">#</a> 5.Jedis</h1><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>Jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-spring-boot-整合-redis" tabindex="-1"><a class="header-anchor" href="#_6-spring-boot-整合-redis" aria-hidden="true">#</a> 6.Spring Boot 整合 redis</h1><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Spring Boot 2.x 的 redis 整合 没有使用 Jedis 而是 lettuce</li><li>Jedis 采用了智联，多线程操作是不安全的，如果需要避免不安全需要使用 Jedis pool 连接池，更像 BIO 模式</li><li>lettuce 采用 netty，实例可以在多个线程中进行共享，不存在线程不安全的请路况，可以减少线程数据，更像 NIO 模式</li></ul><p><strong>简单的自定义配置：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnknownHostException</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 序列化配置</span>
        <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> objectJackson2JsonRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectJackson2JsonRedisSerializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StringRedisSerializer</span> stringRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// key 采用 String 的序列化方式</span>
        template<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// hash 的 key 也采用 String 的序列化方式</span>
        template<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// value 序列化方式采用 jackson</span>
        template<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>objectJackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// hash 的 value 序列化方式采用 jackson</span>
        template<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span>objectJackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> template<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-redis-持久化" tabindex="-1"><a class="header-anchor" href="#_7-redis-持久化" aria-hidden="true">#</a> 7.Redis 持久化</h1><ul><li>rdb 保存的文件是 dump.rdb，aof 保存的文件是 appendonly.aof 文件</li><li>redis 会在指定的时间间隔内将内存中的数据集快照写入磁盘，它恢复时时将快照文件直接读到内存中</li><li>redis 会单独创建（fork）一个子进程来进行持久化，先将数据写到一个临时文件中，待持久化过程都结束了，再用这个零食文件替换上吃持久化好的文件</li><li>上述过程中，主进程不进行任何 IO 操作，这确保了极高的性能。</li><li>如果需要进行大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那么 rdb 的方式要比 aof 的方式更加高效，但是 rdb 有可能会将最后一次持久化后的数据丢失</li></ul><h2 id="_7-1-rdb" tabindex="-1"><a class="header-anchor" href="#_7-1-rdb" aria-hidden="true">#</a> 7.1 rdb</h2><p><strong>1.rdb 文件保存的触发规则：</strong></p><ul><li>配置文件中 save 的规则满足的情况下会触发</li><li>执行 flushall 命令会触发</li><li>退出 redis 时会触发</li><li>备份会触发</li></ul><p><strong>2.恢复 rdb 文件：</strong></p><ul><li>只需要将 rdb 文件放在 redis 的启动目录即可</li></ul><p>**3.优缺</p><ul><li>适合大规模的数据恢复</li><li>对数据的完整性要求不高</li><li>需要一定时间进行进程操作，如果中途出意外，那么最后一次修改的数据可能丢失</li><li>fork 进行的时候会占用一定的空间</li></ul><h2 id="_7-2-aof" tabindex="-1"><a class="header-anchor" href="#_7-2-aof" aria-hidden="true">#</a> 7.2 aof</h2><ul><li>将所有命令都记录下来，恢复时会把这个文件的命令全部执行一遍</li><li>以日志的形式记录每个写操作，将 redis 执行过的所有命令都记录下来（读操作不记录）</li><li>只能追加文件，不能改写文件</li><li>默认不开启，开启将 appendonly 改为 yes 即可</li></ul><p><strong>1.优缺点：</strong></p><ul><li>每次修改都会同步，文件完整性更好</li><li>默认每秒同步一次，可能丢失疫苗数据</li><li>不同步效率更高</li><li>相对于数据文件来说，aof 远远大于 rdb，修复的速度也比 rdb 慢</li><li>aof 的运行效率也比 rdb 低</li></ul><h1 id="_8-redis-的发布订阅" tabindex="-1"><a class="header-anchor" href="#_8-redis-的发布订阅" aria-hidden="true">#</a> 8.Redis 的发布订阅</h1><ul><li>redis 发布订阅（pub/sub）是一种消息通信模式</li><li>Redis 客户端可以订阅任意数量的频道</li><li>订阅发布机制的底层原理： <ul><li>通过 subscribe 订阅某频道后，redis-server 里会维护一个字典，建为 channel，值为链表，链表中保存了所有订阅这个 channel 的客户端，当客户护短订阅时就会将其添加到这个订阅链表中</li><li>通过 publish 向订阅者发送消息，redis-server 会使用给定的频道作为建，在所维护的链表中查找订阅了这个频道的客户端链表，遍历链表将消息发布给所有订阅者</li></ul></li></ul><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">publish channel message</td><td style="text-align:center;">将消息发送到指定的频道</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">punsubscribe [pattern[pattern...]]</td><td style="text-align:center;">退订所有给定模式的频道</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">subscribe channel[channel...]]</td><td style="text-align:center;">订阅给定的一个或多发个频道的消息</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">unsubscribe [channel[channel...]]</td><td style="text-align:center;">指定退订的频道</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">pubsub subcommand [argument[argument...]]</td><td style="text-align:center;">查看订阅与发布系统状态</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;">psubscribe pattern[pattern...]</td><td style="text-align:center;">订阅一个或多个符合给定模式的频道</td></tr></tbody></table><h1 id="_9-redis-主从复制" tabindex="-1"><a class="header-anchor" href="#_9-redis-主从复制" aria-hidden="true">#</a> 9.Redis 主从复制</h1><ul><li>将一台 redis 服务器的数据复制到其他 redis 服务器。前者称为主节点 master/leader，后者称为从节点 slave/follower</li><li>数据的复制时单向的，只有由主节点到从节点。master 以写为主，slave 以读为主</li><li>默认情况下，每台 redis 服务器都是主节点，一个主节点可以有多个从节点，但一个从节点只能有一个主节点</li><li>主从复制的作用主要包括： <ul><li>数据冗余：主从复制实现了数据的热备份，时持久化之外的一种数据冗余方式</li><li>故障恢复：当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复，这是一种服务的冗余</li><li>负载均衡：在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务，分担服务器的压力</li><li>高可用：主从复制还是哨兵和集群能够实施的基础，因此也是高可用的基础</li></ul></li><li>主从复制实现读写分离一般都是使用一主二从</li><li>当 slave 成功连接到 master 后会发送一个 sync 同步命令，master 接收命令后会启动后台的存盘进程，同时收集所有接收到的用于修改数据集的命令，在后台程序执行完毕之后 master 将传送整个数据文件到 slave 并完成一次同步（只要是连接到主机就会进行一次全量复制） <ul><li>全量复制：slave 服务在接收到数据库文件后将其存盘并加载到内存中</li><li>增量复制：master 继续将新的收集到的修改命令传给 slave 完成同步</li></ul></li></ul><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">info replication</td><td style="text-align:center;">查看主从信息</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">slaveof ip port</td><td style="text-align:center;">指定主节点</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">slaveof no one</td><td style="text-align:center;">让当前节点成为主节点</td></tr></tbody></table><h2 id="_9-1-哨兵模式" tabindex="-1"><a class="header-anchor" href="#_9-1-哨兵模式" aria-hidden="true">#</a> 9.1 哨兵模式</h2><ul><li><p>主从切换：当主服务器宕机后，使用哨兵模式会根据投票数自动将某一个从节点变成主节点</p></li><li><p>哨兵是 redis提供的一种特殊的模式，是一个独立的进程。原理是哨兵通过发送命令等待 redis 服务相应从而监控运行的多个 redis 实例是否可用</p></li><li><p>哨兵的作用：</p><ul><li>通过发送命令监控 redis 集群的状态</li><li>当哨兵检测到 master 宕机时会将 slave 切换成 master，然后通过发布订阅模式通知其他的从服务器修改配置文件，以此让它们自动切换主节点</li></ul></li><li><p>通常哨兵也会搭建一个集群形成多哨兵模式保证高可用</p></li><li><p>在多哨兵模式下，要是其中一个哨兵检测到主节点宕机，并不会立即执行 failover（故障转移）过程，因为这仅仅是这个哨兵认为主节点不可用，这称为主观下线。之后的哨兵也检测到主节点不可用并且达到一定数量时，哨兵之间会进行一次投票，投票结果由一个哨兵发起并进行 failover 操作。切换成功后就会通过发布订阅模式让各个哨兵切换主节点，这个过程称为客观下线</p></li></ul><h1 id="_10-redis-缓存穿透、击穿、雪崩" tabindex="-1"><a class="header-anchor" href="#_10-redis-缓存穿透、击穿、雪崩" aria-hidden="true">#</a> 10.Redis 缓存穿透、击穿、雪崩</h1><p><strong>3.缓存穿透：</strong></p><ul><li>当用户查询数据时，要是 redis 中没有，即缓存没命中，就会到数据库中查询，要是在数据库中也没有，那么本次查询失败</li><li>当用户很多或者有人恶意执行上述查询失败的操作时，就会造成数据库压力很大，此时就相当于出现了缓存穿透</li><li>解决方案： <ul><li>redis 存储空对象：当存储层没命中时，将返回的空对象也存入 redis 中，同时设置一个过期时间，之后再访问这个数据时就避免了直接访问数据库。但这种方法会浪费很多空间存储空值的键，并且即使设置了过期时间，缓存层和存储层还是会有一段时间窗口不一致，这对于需要保持一致性的业务会产生影响</li><li>布隆过滤器：是一种数据结构，对所有可能查询的参数以 hash 形式存储，在控制层先进行校验，不符合则直接丢弃，避免了对底层存储系统的压力</li></ul></li></ul><p><strong>2.缓存击穿：</strong></p><ul><li>是指某个键在扛着高并发时可能会出现失效的情况</li><li>当这个键被击穿或缓存过期后会有大量请求打入数据库，并且还会写回缓存，这会导致数据库和服务器压力过大</li><li>解决方案： <ul><li>设置热点数据不过期</li><li>加互斥锁：使用分布式锁保证对于每个 key 同时只有一个线程查询，其他线程在没有获得锁时只能等待，从而降低压力，但是这样会将压力转移到分布式锁上，所以分布式锁必须设计好</li></ul></li></ul><p><strong>3.缓存雪崩：</strong></p><ul><li><p>是指在某个时间段缓存集中过期失效，或是 redis 服务不可用</p></li><li><p>解决方案：</p><ul><li>增设多几个 redis，即将 redis 集群扩容，保证服务高可用（搭建异地多活）</li><li>限流降级：在缓存失效后，通过加锁或队列来控制读数据库和写缓存得线程数量</li><li>数据预热：就是在正式部署之前见吧可能查询的数据预先访问一遍，这样部分可能大量访问的数据就会先加载到缓存中。在即将发生高并发访问前手动触发加载缓存并设置不同的过期时间，让缓存失效的时间点不会集中在一起</li></ul></li></ul>`,82),l=[d];function i(r,c){return e(),s("div",null,l)}const p=t(a,[["render",i],["__file","Redis.html.vue"]]);export{p as default};