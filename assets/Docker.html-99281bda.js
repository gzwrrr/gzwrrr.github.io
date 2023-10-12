import{_ as l,Q as c,S as i,U as t,a8 as e,W as n,X as a,a9 as o,H as r}from"./framework-d7e1aa10.js";const p={},u=t("h1",{id:"docker",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),e(" Docker")],-1),k={class:"hint-container info"},m=t("p",{class:"hint-container-title"},"说明",-1),h=t("p",null,"Docker 常用命令速查",-1),v={href:"https://docs.docker.com/docker-hub/",target:"_blank",rel:"noopener noreferrer"},g={class:"table-of-contents"},b=o('<h2 id="_1-命令" tabindex="-1"><a class="header-anchor" href="#_1-命令" aria-hidden="true">#</a> 1.命令</h2><p><strong>命令中带中文的都需要替换</strong></p><p>(除了括号前有 $ 符号的，括号中的内容都是可选项)</p><h3 id="安装与启动" tabindex="-1"><a class="header-anchor" href="#安装与启动" aria-hidden="true">#</a> 安装与启动</h3><div class="table-wrapper"><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">命令</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;"><code>yum remove docker \\</code></td><td style="text-align:center;">卸载旧版本</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;"><code>yum install -y yum-utils</code></td><td style="text-align:center;">下载工具包</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;"><code>yum install docker-ce doceker-ce-cli containerd.io</code></td><td style="text-align:center;">安装 docker</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;"><code>systemctl start docker</code></td><td style="text-align:center;">启动 docker</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;"><code>docker version</code></td><td style="text-align:center;">查看版本</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;"><code>docker run hello-world</code></td><td style="text-align:center;">运行 hello-world</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:center;"><code>yum remove docker-ce docker-ce-cli containerd.io</code></td><td style="text-align:center;">卸载 docker</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:center;"><code>sudo systemctl daemon-reload</code></td><td style="text-align:center;">重新加载守护进程</td></tr><tr><td style="text-align:center;">9</td><td style="text-align:center;"><code>sudo systemctl restart docker</code></td><td style="text-align:center;">重启 docker</td></tr><tr><td style="text-align:center;">10</td><td style="text-align:center;"><code>systemctl enable docker.service</code></td><td style="text-align:center;">开机自启</td></tr></tbody></table></div><h3 id="常用基本命令" tabindex="-1"><a class="header-anchor" href="#常用基本命令" aria-hidden="true">#</a> 常用基本命令</h3><div class="table-wrapper"><table><thead><tr><th style="text-align:center;">序号</th><th>命令</th><th>解释</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td><code>docker info</code></td><td>查看信息</td></tr><tr><td style="text-align:center;">2</td><td><code>docker 命令 --help</code></td><td>帮助文档</td></tr></tbody></table></div><h3 id="常用镜像命令" tabindex="-1"><a class="header-anchor" href="#常用镜像命令" aria-hidden="true">#</a> 常用镜像命令</h3>',8),y={class:"hint-container note"},x=t("p",{class:"hint-container-title"},"相关文章",-1),_={href:"https://blog.csdn.net/lxy___/article/details/105821141",target:"_blank",rel:"noopener noreferrer"},f=o('<div class="table-wrapper"><table><thead><tr><th style="text-align:center;">序号</th><th>命令</th><th>解释</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td><code>docker images</code></td><td>查看镜像</td></tr><tr><td style="text-align:center;">2</td><td><code>docker images -aq</code></td><td>列出所有的镜像（id）</td></tr><tr><td style="text-align:center;">3</td><td><code>docker search images名 (--filter=字段=限定值)</code></td><td>搜索镜像（如: --filter=STARS=300 指显示 stars 不小于 3000 的结果）</td></tr><tr><td style="text-align:center;">4</td><td><code>docker pull 镜像(:版本)</code></td><td>下载镜像（默认下载最新版，下载指定版本如: docker pull mysql:5.7）</td></tr><tr><td style="text-align:center;">5</td><td><code>docker rmi -f (id)</code></td><td>删除镜像（加上 id 则删除对应的镜像）</td></tr><tr><td style="text-align:center;">6</td><td><code>docker build -t image_name:tag .</code></td><td>从当前目录的 Dockerfile 构建一个镜像，指定名称和标签</td></tr><tr><td style="text-align:center;">7</td><td><code>docker build -t image_name:tag -f /path/to/Dockerfile .</code></td><td>从指定的 Dockerfile 构建一个镜像，指定名称和标签</td></tr><tr><td style="text-align:center;">8</td><td><code>docker build -t image_name:tag --build-arg key=value .</code></td><td>在构建镜像的过程中传递一个参数，指定名称和标签</td></tr><tr><td style="text-align:center;">9</td><td><code>docker build -t image_name:tag --no-cache .</code></td><td>禁止使用缓存构建镜像，指定名称和标签</td></tr><tr><td style="text-align:center;">10</td><td><code>docker build -t image_name:tag --pull .</code></td><td>在构建镜像的过程中尝试拉取最新的基础镜像，指定名称和标签</td></tr><tr><td style="text-align:center;">11</td><td><code>docker buildx build -t image_name:tag --platform linux/arm64/v8,linux/amd64 .</code></td><td>从当前目录的 Dockerfile 使用 Buildx 构建一个镜像，指定多个平台</td></tr><tr><td style="text-align:center;">12</td><td><code>docker tag source_image:source_tag target_image:target_tag</code></td><td>给现有的镜像打标签，将源镜像的标签改为目标镜像的标签</td></tr><tr><td style="text-align:center;">13</td><td><code>docker push image_name:tag</code></td><td>将本地的镜像推送到远程仓库，指定名称和标签</td></tr><tr><td style="text-align:center;">14</td><td><code>docker rmi image_name:tag</code></td><td>删除本地的镜像，指定名称和标签</td></tr><tr><td style="text-align:center;">15</td><td><code>docker save image_name:tag -o image.tar</code></td><td>将镜像保存为 tar 包，指定名称和标签</td></tr><tr><td style="text-align:center;">16</td><td><code>docker load -i image.tar</code></td><td>从 tar 包中加载镜像</td></tr><tr><td style="text-align:center;">17</td><td><code>docker rmi $(docker images -q)</code></td><td>删除所有镜像</td></tr><tr><td style="text-align:center;">18</td><td><code>docker tag old_image_tag new_image_tag</code></td><td>为镜像打标签</td></tr><tr><td style="text-align:center;">19</td><td><code>docker push image_tag</code></td><td>推送镜像（要提前登录）</td></tr><tr><td style="text-align:center;">20</td><td><code>docker save -o image_name real_image_name</code></td><td>打包镜像</td></tr><tr><td style="text-align:center;">21</td><td><code>docker load -i image_name</code></td><td>载入镜像</td></tr></tbody></table></div><p>补充：删除所有 untagged 镜像 <code>docker rmi $(docker images | grep &quot;^&lt;none&gt;&quot; | awk &quot;{print $3}&quot;)</code></p><h3 id="常用容器命令" tabindex="-1"><a class="header-anchor" href="#常用容器命令" aria-hidden="true">#</a> 常用容器命令</h3><div class="table-wrapper"><table><thead><tr><th style="text-align:center;">序号</th><th>命令</th><th>解释</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td><code>docker run (可选参数，具体用 --help 查看) image名</code></td><td>运行容器</td></tr><tr><td style="text-align:center;">2</td><td><code>docker run -it 镜像名 /bin/bash</code></td><td>运行并进入该容器</td></tr><tr><td style="text-align:center;">3</td><td><code>exit</code></td><td>容器停止并退出容器</td></tr><tr><td style="text-align:center;">4</td><td><code>快捷键[ctrl + p + q]</code></td><td>退出容器，但容器不停止</td></tr><tr><td style="text-align:center;">4</td><td><code>docker ps</code></td><td>查看正在运行的容器</td></tr><tr><td style="text-align:center;">5</td><td><code>docker rm -f $(docker ps -aq)</code></td><td>递归删除所有容器</td></tr><tr><td style="text-align:center;">6</td><td>`docker ps -a -q</td><td>xargs docker rm`</td></tr><tr><td style="text-align:center;">7</td><td><code>docker start 容器id</code></td><td>启动容器</td></tr><tr><td style="text-align:center;">8</td><td><code>docker restart 容器id</code></td><td>重启容器</td></tr><tr><td style="text-align:center;">9</td><td><code>docker stop 容器id</code></td><td>停止当前正在运行的容器</td></tr><tr><td style="text-align:center;">10</td><td><code>docker kill 容器id</code></td><td>强制停止当前容器</td></tr><tr><td style="text-align:center;">11</td><td><code>docker run -d 镜像名</code></td><td>后台运行容器，但是如果没有前台，后台容器会直接结束</td></tr><tr><td style="text-align:center;">12</td><td><code>docker logs -f -t --tail 容器id</code></td><td>查看日志</td></tr><tr><td style="text-align:center;">13</td><td><code>docker top 容器id</code></td><td>查看容器进程</td></tr><tr><td style="text-align:center;">14</td><td><code>docker inspect 容器id</code></td><td>查看容器的信息</td></tr><tr><td style="text-align:center;">15</td><td><code>docker exec -it 容器id bash路径</code></td><td>进入容器并开启了新的终端</td></tr><tr><td style="text-align:center;">16</td><td><code>docker exec -it 容器id ip addr</code></td><td>查看容器的内部网络地址</td></tr><tr><td style="text-align:center;">17</td><td><code>docker attach 容器id</code></td><td>进入容器但不会开启新的终端</td></tr><tr><td style="text-align:center;">18</td><td><code>docker cp 容器id:容器内的路径 主机目录 </code></td><td>拷贝文件到主机</td></tr><tr><td style="text-align:center;">19</td><td><code>docker stop $(docker ps -a -q)</code></td><td>停止所有容器</td></tr><tr><td style="text-align:center;">20</td><td><code>docker rm $(docker ps -a -q)</code></td><td>删除所有容器</td></tr><tr><td style="text-align:center;">21</td><td><code>docker run --restart=always</code></td><td>容器启动时指定自动重启</td></tr><tr><td style="text-align:center;">22</td><td><code>docker update --restart=always &lt;CONTAINER ID&gt;</code></td><td>修改运行中的容器自动重启</td></tr></tbody></table></div><h3 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h3><div class="table-wrapper"><table><thead><tr><th>序号</th><th>命令</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>docker update --restart=unless-stopped $(docker ps -q)</code></td><td>将所有容器设置为自启动</td></tr><tr><td>2</td><td><code>docker run --rm --registry-mirror=&lt;mirror-url&gt; image_name</code></td><td>指定镜像地址</td></tr></tbody></table></div><p>常用的 Docker 镜像源（修改 <code>/etc/docker/daemon.json</code>，完成后 <code>service docker restart</code> ）：</p>',7),q={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://cr.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://hub-mirror.c.163.com/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://hub.docker.tencent.com/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://mirrors.ustc.edu.cn/dockerhub/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.daocloud.io/mirror#accelerator-doc",target:"_blank",rel:"noopener noreferrer"},O=o(`<div class="language-jso line-numbers-mode" data-ext="jso"><pre class="language-jso"><code>{
    &quot;dns&quot;: [&quot;8.8.8.8&quot;, &quot;8.8.4.4&quot;],
    &quot;registry-mirrors&quot;: [&quot;https://hub.docker.com&quot;,&quot;https://lbrfsxqk.mirror.aliyuncs.com&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-容器数据卷" tabindex="-1"><a class="header-anchor" href="#_2-容器数据卷" aria-hidden="true">#</a> 2.容器数据卷</h2><blockquote><p>docker 容器中的数据可以同步到本地，就是将容器内的目录挂载到 Linux 中</p></blockquote><div class="table-wrapper"><table><thead><tr><th>序号</th><th>命令</th><th>解释</th></tr></thead><tbody><tr><td>1</td><td><code>docker run -it -v 本地目录:容器目录 镜像名 bash路径</code></td><td>将容器中的目录挂载到本地目录上</td></tr><tr><td>2</td><td><code>docker run -it --name 容器名1 --volumes-from 容器名2 容器镜像(:版本)</code></td><td>相当于容器1继承容器二，数据共享（双向复制）</td></tr></tbody></table></div><h2 id="_3-dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-dockerfile" aria-hidden="true">#</a> 3.dockerfile</h2><blockquote><p>脚本生成镜像</p></blockquote><div class="table-wrapper"><table><thead><tr><th style="text-align:center;">序号</th><th>命令</th><th>解释</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>FROM</td><td>指定镜像的基础镜像</td></tr><tr><td style="text-align:center;">2</td><td>MAINTAINER</td><td>说明作者和邮箱</td></tr><tr><td style="text-align:center;">3</td><td>RUN</td><td>镜像运行执行的脚本</td></tr><tr><td style="text-align:center;">4</td><td>ADD</td><td>编译镜像时复制文件到镜像中</td></tr><tr><td style="text-align:center;">5</td><td>CMD</td><td>设置容器的启动命令</td></tr><tr><td style="text-align:center;">6</td><td>LABEL</td><td>添加镜像标签</td></tr><tr><td style="text-align:center;">7</td><td>ENV</td><td>设置容器的环境变量</td></tr><tr><td style="text-align:center;">8</td><td>EXPOESE</td><td>镜像暴露的端口</td></tr><tr><td style="text-align:center;">9</td><td>COPY</td><td>编译时复制文件到镜像中</td></tr><tr><td style="text-align:center;">10</td><td>ENTRYPOINT</td><td>设置容器的入口程序</td></tr><tr><td style="text-align:center;">11</td><td>VOLUME</td><td>设置容器的挂载卷</td></tr><tr><td style="text-align:center;">12</td><td>USER</td><td>设置运行 RUN CMD ENTRYPOIN 的用户名</td></tr><tr><td style="text-align:center;">13</td><td>WORKDIR</td><td>设置 RUN CMD ENTRYPOINT COPY ADD 的工作目录</td></tr><tr><td style="text-align:center;">14</td><td>ARG</td><td>设置编译镜像时加入的参数</td></tr><tr><td style="text-align:center;">15</td><td>ONBUILD</td><td>设置镜像的构建命令</td></tr><tr><td style="text-align:center;">16</td><td>STOPSIGNAL</td><td>设置容器的退出信号量</td></tr></tbody></table></div><h2 id="_4-docker-网络" tabindex="-1"><a class="header-anchor" href="#_4-docker-网络" aria-hidden="true">#</a> 4.docker 网络</h2><ol><li>安装了 docker 后，主机上就会多出一个 docker0 网卡，该网卡是桥接模式，使用了 evth-pair 技术，相当于连通各个容器的路由器</li><li>每启动一个 docker 容器，docker 就会给 docker 容器分配一个容器 ip，容器网卡都是成对出现的，因为 evth-pair 就是一对虚拟设备接口，一端连接协议，另一端成对的网卡彼此相连</li></ol><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>Docker中的网络（network）提供容器之间的通信能力，它可以将多个容器连接到同一个虚拟网络中，使得它们可以互相通信和共享资源。下面是Docker网络的相关内容：</p><ol><li>Docker中的网络类型： <ul><li>bridge：默认的网络类型，它为容器提供一个自己的私有网络，使得它们可以通过容器名称或者别名相互通信。</li><li>host：容器和宿主机共享同一个网络命名空间，容器的网络直接绑定到宿主机的网络接口上。</li><li>overlay：用于连接不同主机上的容器，可以在多个Docker宿主机之间建立虚拟网络。</li></ul></li><li>Docker网络相关的命令： <ul><li>docker network ls：列出所有的Docker网络。</li><li>docker network create：创建一个新的Docker网络。</li><li>docker network inspect：查看一个Docker网络的详细信息。</li><li>docker network connect：将一个容器连接到一个指定的Docker网络。</li><li>docker network disconnect：将一个容器从一个指定的Docker网络中断开连接。</li></ul></li><li>Docker中的网络别名： <ul><li>Docker容器有自己的名称，可以通过容器名称直接进行通信。</li><li>可以为Docker容器指定一个或多个网络别名，这样其他容器可以通过别名来访问它。</li></ul></li><li>Docker中的端口映射： <ul><li>Docker容器中的应用程序通常会监听一个特定的端口。</li><li>可以使用端口映射（port mapping）将Docker容器内的端口映射到宿主机上的某个端口上，从而可以通过宿主机的IP地址和映射的端口来访问容器中的应用程序。</li></ul></li><li>Docker中的DNS解析： <ul><li>Docker内置了一个DNS服务器，它能够自动解析Docker网络中容器的名称和别名。</li><li>可以使用容器名称或者别名作为访问容器的域名。</li></ul></li><li>Docker网络的高级特性： <ul><li>容器之间的连接和断开连接可以通过Docker API进行控制。</li><li>可以通过Docker插件来扩展Docker网络的功能。</li><li>Docker Swarm支持多个容器之间的负载均衡和服务发现。</li></ul></li></ol><h3 id="_4-1-自定义网络" tabindex="-1"><a class="header-anchor" href="#_4-1-自定义网络" aria-hidden="true">#</a> 4.1 自定义网络</h3><p>自己创建网络使用「桥接模式」</p><p>自定义网络可以直接使用「容器名」ping 通其他容器</p><div class="table-wrapper"><table><thead><tr><th style="text-align:center;">序号</th><th>命令</th><th>解释</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td><code>docker network ls</code></td><td>列出所有 docker 网络</td></tr><tr><td style="text-align:center;">2</td><td><code>docker network inspect 网络名</code></td><td>查看网络的配置信息</td></tr><tr><td style="text-align:center;">3</td><td><code>docker network create --driver bridge --subnet 自定ip --gateway 自定网关 网络名</code></td><td>自定义一个网络并指定 ip 、网关、网络名</td></tr><tr><td style="text-align:center;">4</td><td><code>docker run -d -P --name 容器名 --net 网络名 镜像名</code></td><td>在自定义网络中启动容器</td></tr><tr><td style="text-align:center;">5</td><td><code>docker network connect 网络名 容器名</code></td><td>将一个网络下的容器与另一个网络连通，这样命令中的容器就相当于到了指定的网络中，即一个容器两个 ip</td></tr></tbody></table></div><h3 id="_4-2-docker-compose" tabindex="-1"><a class="header-anchor" href="#_4-2-docker-compose" aria-hidden="true">#</a> 4.2 docker compose</h3><p>docker compose 可以管理编排容器</p><p>使用 yml 文件配置</p><p>三个步骤：</p><ol><li>docker file</li><li>docker-compose.yml</li><li>docker-compose up</li></ol><h4>安装步骤</h4><ol><li>下载 docker-compose</li></ol><blockquote><p>官方下载地址，很慢，而且版本太高后续案例可能会启动失败</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.29.2/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>国内镜像地址，版本也比较低，推荐使用这个</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://get.daocloud.io/docker/compose/releases/download/1.25.5/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>授权</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>查看版本</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4>测试案例（官网案例）</h4><ol><li>创建并进入目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">mkdir</span> composetest
 <span class="token builtin class-name">cd</span> composetest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建测试文件 ( python 应用 )</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> app.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36),P={start:"3"},E={href:"http://app.py",target:"_blank",rel:"noopener noreferrer"},T=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token keyword">import</span> redis
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
cache <span class="token operator">=</span> redis<span class="token punctuation">.</span>Redis<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;redis&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">6379</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_hit_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    retries <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> cache<span class="token punctuation">.</span>incr<span class="token punctuation">(</span><span class="token string">&#39;hits&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> redis<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span>ConnectionError <span class="token keyword">as</span> exc<span class="token punctuation">:</span>
            <span class="token keyword">if</span> retries <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> exc
            retries <span class="token operator">-=</span> <span class="token number">1</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> get_hit_count<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello World! I have been seen {} times.\\n&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>创建 requirements.txt ，在其中说明使用到的依赖</li></ol><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>flask
redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>创建并编写 Dockerfile</li></ol><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># syntax=docker/dockerfile:1</span>
<span class="token instruction"><span class="token keyword">FROM</span> python:3.7-alpine</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /code</span>
<span class="token instruction"><span class="token keyword">ENV</span> FLASK_APP=app.py</span>
<span class="token instruction"><span class="token keyword">ENV</span> FLASK_RUN_HOST=0.0.0.0</span>
<span class="token instruction"><span class="token keyword">RUN</span> apk add --no-cache gcc musl-dev linux-headers</span>
<span class="token instruction"><span class="token keyword">COPY</span> requirements.txt requirements.txt</span>
<span class="token instruction"><span class="token keyword">RUN</span> pip install -r requirements.txt</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 5000</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;flask&quot;</span>, <span class="token string">&quot;run&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>创建 docker-compose.yml 文件并定义服务</li></ol><blockquote><p>注意下面的 version 版本如果过高，例如使用 3.9 ，之后 docker-compose up 可能会失败</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000&quot;</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;redis:alpine&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>确认所有文件准备完毕</li></ol><figure><img src="http://gitee.com/gzwrrr/typora-img/raw/master/images/image-20220319110958738.png" alt="image-20220319110958738" tabindex="0" loading="lazy"><figcaption>image-20220319110958738</figcaption></figure><ol start="8"><li>执行启动命令</li></ol><blockquote><p>这一步可能会特别慢，主要是拉取镜像的问题，就算可以科学上网也可能构建失败，需要多试几次</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9"><li>在 docker-compose 所在的目录下停止服务</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4>docker-compose 编写规则</h4><p><strong>docker-compose 核心概念：</strong></p><ol><li>服务 service：一个个容器示例</li><li>工程 project：由一组关联的应用容器组成的一个「完整业务单元」，在 docker-compose.yml 文件中定义</li></ol><p><strong>docker-compose 核心配置包含：</strong></p><ol><li><p>version：指定 docker-compose 文件的版本。</p></li><li><p>services：定义了所有的服务，包括每个服务所使用的 Docker 镜像、环境变量、卷等信息。</p></li><li><p>networks：定义应用程序中的网络，以便各个服务可以进行通信。</p></li><li><p>volumes：定义所有的数据卷，包括每个卷所挂载的本地路径等信息。</p></li></ol><p>下面是一份 <code>docker-compose.yml</code> 的示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>latest
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:80&quot;</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/app
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> DATABASE_URL=postgres<span class="token punctuation">:</span>//db/user
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>latest
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_data<span class="token punctuation">:</span>/var/lib/postgresql/data
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> POSTGRES_USER=user
      <span class="token punctuation">-</span> POSTGRES_PASSWORD=password
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">default</span><span class="token punctuation">:</span>
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">db_data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4>常用命令</h4><div class="table-wrapper"><table><thead><tr><th style="text-align:center;">序号</th><th>命令</th><th>解释</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td><code>docker-compose -h</code></td><td>查看帮助</td></tr><tr><td style="text-align:center;">2</td><td><code>docker-compose up</code></td><td>启动所有 docker-compose 服务</td></tr><tr><td style="text-align:center;">3</td><td><code>docker-compose up -d</code></td><td>启动所有 docker-compose 服务并在后台运行</td></tr><tr><td style="text-align:center;">4</td><td><code>docker-compose build</code></td><td>仅构建镜像，不启动容器。</td></tr><tr><td style="text-align:center;">5</td><td><code>docker-compose pull</code></td><td>拉取最新版本的镜像。</td></tr><tr><td style="text-align:center;">6</td><td><code>docker-compose exec yml里的服务id</code></td><td>进入容器示例内部</td></tr><tr><td style="text-align:center;">7</td><td><code>docker-compose ps</code></td><td>展示当前 docker-compose 编排过的运行的所有容器</td></tr><tr><td style="text-align:center;">8</td><td><code>docker-compose top</code></td><td>展示当前 docker-compose 编排过的容器进程</td></tr><tr><td style="text-align:center;">9</td><td><code>docker-compose logs yml里的服务id</code></td><td>查看容器输出日志</td></tr><tr><td style="text-align:center;">10</td><td><code>docker-compose config</code></td><td>检查配置</td></tr><tr><td style="text-align:center;">11</td><td><code>docker-compose config -q</code></td><td>检查配置，有问题才输出</td></tr><tr><td style="text-align:center;">12</td><td><code>docker-compose restart</code></td><td>重启服务</td></tr><tr><td style="text-align:center;">13</td><td><code>docker-compose start</code></td><td>启动服务</td></tr><tr><td style="text-align:center;">14</td><td><code>docker-compose stop</code></td><td>停止正在运行的容器，但不移除它们</td></tr><tr><td style="text-align:center;">15</td><td><code>docker-compose rm</code></td><td>移除已经停止的容器。</td></tr><tr><td style="text-align:center;">16</td><td><code>docker-compose down</code></td><td>停止并删除容器、网络、卷、镜像等</td></tr></tbody></table></div><h3 id="_4-3-docker-swarm" tabindex="-1"><a class="header-anchor" href="#_4-3-docker-swarm" aria-hidden="true">#</a> 4.3 docker swarm</h3><blockquote><p>集群部署</p></blockquote><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>如果遇到无法访问外部环境，可能是因为Docker容器内部网络配置问题导致无法访问互联网。可以尝试使用Docker官方提供的DNS代理解决这个问题。修改Docker daemon的配置文件 <code>/etc/docker/daemon.json</code>，加入如下内容：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;8.8.8.8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8.8.4.4&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后，重新启动Docker daemon：<code>sudo systemctl restart docker</code>。</p><p>如果还是无法解决问题，可以尝试使用代理，配置Docker环境变量：<code>HTTP_PROXY</code>和<code>HTTPS_PROXY</code>。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span><span class="token string">&quot;http://proxy.example.com:8080&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span><span class="token string">&quot;http://proxy.example.com:8080&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重新运行构建命令。</p><h3 id="docker-清理缓存" tabindex="-1"><a class="header-anchor" href="#docker-清理缓存" aria-hidden="true">#</a> Docker 清理缓存</h3><blockquote><p>长时间未清理缓存会过大，曾经出现过 overlay 文件沾满磁盘的情况</p></blockquote><p>::info 相关文章</p>`,36),A={href:"https://blog.csdn.net/Small_StarOne/article/details/123655176",target:"_blank",rel:"noopener noreferrer"},I={href:"https://blog.csdn.net/yhk19970220/article/details/113504458",target:"_blank",rel:"noopener noreferrer"},L=t("p",null,":::",-1);function C(U,Y){const d=r("ExternalLinkIcon"),s=r("router-link");return c(),i("div",null,[u,t("div",k,[m,h,t("p",null,[t("a",v,[e("官方文档地址"),n(d)])])]),t("nav",g,[t("ul",null,[t("li",null,[n(s,{to:"#docker"},{default:a(()=>[e("Docker")]),_:1}),t("ul",null,[t("li",null,[n(s,{to:"#_1-命令"},{default:a(()=>[e("1.命令")]),_:1}),t("ul",null,[t("li",null,[n(s,{to:"#安装与启动"},{default:a(()=>[e("安装与启动")]),_:1})]),t("li",null,[n(s,{to:"#常用基本命令"},{default:a(()=>[e("常用基本命令")]),_:1})]),t("li",null,[n(s,{to:"#常用镜像命令"},{default:a(()=>[e("常用镜像命令")]),_:1})]),t("li",null,[n(s,{to:"#常用容器命令"},{default:a(()=>[e("常用容器命令")]),_:1})]),t("li",null,[n(s,{to:"#其他命令"},{default:a(()=>[e("其他命令")]),_:1})])])]),t("li",null,[n(s,{to:"#_2-容器数据卷"},{default:a(()=>[e("2.容器数据卷")]),_:1})]),t("li",null,[n(s,{to:"#_3-dockerfile"},{default:a(()=>[e("3.dockerfile")]),_:1})]),t("li",null,[n(s,{to:"#_4-docker-网络"},{default:a(()=>[e("4.docker 网络")]),_:1}),t("ul",null,[t("li",null,[n(s,{to:"#概述"},{default:a(()=>[e("概述")]),_:1})]),t("li",null,[n(s,{to:"#_4-1-自定义网络"},{default:a(()=>[e("4.1 自定义网络")]),_:1})]),t("li",null,[n(s,{to:"#_4-2-docker-compose"},{default:a(()=>[e("4.2 docker compose")]),_:1})]),t("li",null,[n(s,{to:"#_4-3-docker-swarm"},{default:a(()=>[e("4.3 docker swarm")]),_:1})])])]),t("li",null,[n(s,{to:"#其他"},{default:a(()=>[e("其他")]),_:1}),t("ul",null,[t("li",null,[n(s,{to:"#docker-清理缓存"},{default:a(()=>[e("Docker 清理缓存")]),_:1})])])])])])])]),b,t("div",y,[x,t("ol",null,[t("li",null,[e("推送镜像："),t("a",_,[e("https://blog.csdn.net/lxy___/article/details/105821141"),n(d)])])])]),f,t("ol",null,[t("li",null,[e("Docker Hub："),t("a",q,[e("https://hub.docker.com/"),n(d)])]),t("li",null,[e("阿里云镜像库："),t("a",w,[e("https://cr.aliyun.com/"),n(d)])]),t("li",null,[e("网易云容器镜像服务："),t("a",D,[e("https://hub-mirror.c.163.com/"),n(d)])]),t("li",null,[e("腾讯云镜像仓库："),t("a",R,[e("https://hub.docker.tencent.com/"),n(d)])]),t("li",null,[e("ustc Docker 镜像站："),t("a",N,[e("https://mirrors.ustc.edu.cn/dockerhub/"),n(d)])]),t("li",null,[e("DaoCloud 镜像站："),t("a",S,[e("https://www.daocloud.io/mirror#accelerator-doc"),n(d)])])]),O,t("ol",P,[t("li",null,[e("在 "),t("a",E,[e("app.py"),n(d)]),e(" 中写入服务内容")])]),T,t("p",null,[t("a",A,[e("docker清理Overlay2占用磁盘空间"),n(d)])]),t("p",null,[t("a",I,[e("Linux Docker容器磁盘出现日志/var/lib/docker/overlay2占用100%"),n(d)])]),L])}const j=l(p,[["render",C],["__file","Docker.html.vue"]]);export{j as default};
