import{_ as l,Q as p,S as i,U as n,a8 as s,W as e,a9 as t,H as c}from"./framework-d7e1aa10.js";const o={},u=t(`<h1 id="k8s-核心概念" tabindex="-1"><a class="header-anchor" href="#k8s-核心概念" aria-hidden="true">#</a> K8S 核心概念</h1><h2 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> NameSpace</h2><blockquote><p>用来对集群资源进行隔离划分，默认只隔离资源，不隔离网络</p></blockquote><p>K8S 自带的命名空间：</p><ol><li>default</li><li>kube-node-lease</li><li>kube-public</li><li>kube-system</li><li>kubernates-dashboard</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取命名空间</span>
kubectl get namespace
<span class="token comment"># 或者</span>
kubectl get ns

<span class="token comment"># 注意下面只会获取 default 下的 pod</span>
kubectl get pods
<span class="token comment"># 加上 -A 会获取全部的 pod </span>
kubectl get pods <span class="token parameter variable">-A</span>

<span class="token comment"># 查看指定命名空间下的 pod</span>
kubectl get pod <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>

<span class="token comment"># 创建命名空间</span>
kubectl create ns <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>

<span class="token comment"># 删除命名空间，会把该命名空间中的所有资源一并删除</span>
kubectl delete ns <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用配置文件创建命名空间：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> &lt;namespace<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意使用配置文件创建的资源一般也是用对应的配置文件删除的：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建</span>
kubectl apply <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>yamlfile<span class="token operator">&gt;</span>
<span class="token comment"># 删除</span>
kubectl delete <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>yamlfile<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pod" tabindex="-1"><a class="header-anchor" href="#pod" aria-hidden="true">#</a> Pod</h2><blockquote><p>运行中的一组容器，Pod 是 K8S 中应用的最小单位</p></blockquote><ol><li>每一个 Pod 都有一个唯一 ID</li><li>Pod 内的所有容器共享网络空间以及存储资源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 pod，会分配给某一个工作节点</span>
kubectl run <span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span> <span class="token parameter variable">--image</span><span class="token operator">=</span><span class="token operator">&lt;</span>imagename<span class="token operator">&gt;</span>

<span class="token comment"># 查看 pod 创建的信息</span>
kubectl describe pod <span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span>

<span class="token comment"># 删除 pod</span>
kubectl delete pod <span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>
<span class="token comment"># 强制删除</span>
kubectl delete pod <span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span> --grace-period<span class="token operator">=</span><span class="token number">0</span> <span class="token parameter variable">--force</span>

<span class="token comment"># 查看 pod 日志</span>
kubectl logs <span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span>

<span class="token comment"># 查看 pod 的 id</span>
kubectl get pod <span class="token parameter variable">-Owide</span>

<span class="token comment"># 进入 pod</span>
kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span> -- /bin/bash

<span class="token comment"># 查看 pod 的运行状态</span>
kubectl describe pods <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用配置文件创建 pod：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> &lt;namespace<span class="token punctuation">&gt;</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> &lt;appname<span class="token punctuation">&gt;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> &lt;imagename<span class="token punctuation">&gt;</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> &lt;podname<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h2><blockquote><p>控制 Pod，使得 Pod 拥有多个副本，可以自愈、扩容等</p></blockquote><ol><li>使用 deployment 创建容器后，Pod 删除或者崩溃时 K8S 会自动再起 Pod</li><li>注意，故障转移需要设置一个比较合理的时间，太短会占用其他机器的资源，太长时间服务不可用也不行</li><li>更新应用时可以做到滚动更新，也可以进行版本回退</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一次 deployment 部署，会创建一个或多个 Pod</span>
kubectl create deployment <span class="token operator">&lt;</span>deployname<span class="token operator">&gt;</span> <span class="token parameter variable">--image</span><span class="token operator">=</span><span class="token operator">&lt;</span>imagename<span class="token operator">&gt;</span>

<span class="token comment"># 注意：普通删除 Pod 的命令是不能删除 deployment 启动的 Pod 的，需要使用下面的命令</span>
kubectl delete deployment <span class="token operator">&lt;</span>deployname<span class="token operator">&gt;</span>

<span class="token comment"># 指定副本的数量</span>
kubectl create deployment <span class="token parameter variable">--image</span><span class="token operator">=</span><span class="token operator">&lt;</span>imagename<span class="token operator">&gt;</span> <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token operator">&lt;</span>num<span class="token operator">&gt;</span>

<span class="token comment"># 查看部署情况</span>
kubectl get deploy

<span class="token comment"># 扩缩容</span>
kubectl sacle <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token operator">&lt;</span>num<span class="token operator">&gt;</span> deploy/<span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span>

<span class="token comment"># 修改 deployment，下面的命令会直接修改对应的 yaml 文件</span>
kubectl edit deploy <span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span>

<span class="token comment"># 滚动更新</span>
kubectl <span class="token builtin class-name">set</span> image deploy/<span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>imagename<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>newimagename<span class="token operator">&gt;</span> <span class="token parameter variable">--record</span>

<span class="token comment"># 查看历史记录</span>
kubectl rollout <span class="token function">history</span> deploy/<span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span>

<span class="token comment"># 查看某个历史记录</span>
kubectl rollout <span class="token function">history</span> deploy/<span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span> <span class="token parameter variable">--revision</span><span class="token operator">=</span><span class="token operator">&lt;</span>num<span class="token operator">&gt;</span>

<span class="token comment"># 回退到上个版本</span>
kubectl rollout undo deploy/<span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span>

<span class="token comment"># 回退指定版本</span>
kubectl rollout undo deploy/<span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span> --to-version<span class="token operator">=</span><span class="token operator">&lt;</span>versionnum<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用配置文件创建 deployment：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> &lt;namespace<span class="token punctuation">&gt;</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> &lt;appname<span class="token punctuation">&gt;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
  	<span class="token key atrule">matchLabels</span><span class="token punctuation">:</span> &lt;appname<span class="token punctuation">&gt;</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> &lt;appname<span class="token punctuation">&gt;</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> &lt;imagename<span class="token punctuation">&gt;</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> &lt;podname<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他工作负载：</p><ol><li>Deployment：无状态部署，比如微服务，提供多副本等功能</li><li>StatefulSet：有状态部署，比如 redis，提供稳定的存储以及网络等功能</li><li>DaemonSet：守护型部署，比如日志收集组件，可以在每个机器都运行一遍</li><li>Job/CronJob：定时任务部署，比如垃圾清理组件，可以在指定时间运行</li></ol><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> Service</h2><blockquote><p>将一组 Pod 公开为网络服务的抽象方法，能进行服务发现与负载均衡</p></blockquote><p>服务类型：</p><ol><li>ClusterIP：集群内访问</li><li>NodePort：集群外也可访问，默认范围是：30000~32767</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建并暴露服务，可以使用 &lt;podname&gt;.&lt;namespace&gt;.svc:&lt;port&gt; 进行访问，类型默认是集群内访问</span>
kubectl expose deploy <span class="token operator">&lt;</span>podname<span class="token operator">&gt;</span> <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> --target-port<span class="token operator">=</span><span class="token operator">&lt;</span>insideport<span class="token operator">&gt;</span> <span class="token parameter variable">--type</span><span class="token operator">=</span>ClusterIP

<span class="token comment"># 获取所有服务</span>
kubectl get <span class="token function">service</span>
<span class="token comment"># 或者</span>
kubectl get svc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用配置文件创建服务：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> &lt;appname<span class="token punctuation">&gt;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> &lt;namespace<span class="token punctuation">&gt;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> &lt;appname<span class="token punctuation">&gt;</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8000</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token comment"># 或者 type: NodePort</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ingress" tabindex="-1"><a class="header-anchor" href="#ingress" aria-hidden="true">#</a> Ingress</h2>`,32),r={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"参考文章",-1),k={href:"https://blog.csdn.net/heiwa110/article/details/127773889",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/qq_45433707/article/details/127153578",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/weixin_38797137/article/details/124251698",target:"_blank",rel:"noopener noreferrer"},b={href:"https://bbs.huaweicloud.com/blogs/359655#:~:text=K8S%E9%9B%86%E7%BE%A4%E4%B8%ADPod%E8%B5%84%E6%BA%90%E5%A4%84%E4%BA%8EPending%E7%8A%B6%E6%80%81%E6%8E%92%E6%9F%A5%E6%80%9D%E8%B7%AF%201%201.Pod%E8%B5%84%E6%BA%90%E5%A4%84%E4%BA%8EPending%E7%8A%B6%E6%80%81%E7%9A%84%E5%8E%9F%E5%9B%A0,2%202.Pod%E8%B5%84%E6%BA%90%E5%A4%84%E4%BA%8EPending%E7%8A%B6%E6%80%81%E7%9A%84%E6%8E%92%E6%9F%A5%E6%80%9D%E8%B7%AF%203%203.%E7%94%B1%E4%BA%8E%E8%B5%84%E6%BA%90%E9%85%8D%E9%A2%9D%E8%AE%BE%E7%BD%AE%E9%97%AE%E9%A2%98%E5%AF%BC%E8%87%B4Pod%E5%A4%84%E4%BA%8EPending%E7%8A%B6%E6%80%81%E7%9A%84%E6%8E%92%E6%9F%A5%E8%BF%87%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},y={href:"https://blog.csdn.net/erhaiou2008/article/details/103907289",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/weixin_41803458/article/details/113243115",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/u010039418/article/details/86578420",target:"_blank",rel:"noopener noreferrer"},f=t(`<blockquote><p>服务网关，统一入口</p></blockquote><p>运行逻辑：</p><ol><li>网络组织方式：使用 Deployment 部署一组 Pod 之后，在上层建立一个 Service 用于服务间或者说不同 Deployment 或 Pod 间的互相调用，这样就组成了一层 Service 网络</li><li>在服务网络上再加一层，统一处理外部请求，并转发到对应的服务上</li></ol><p>这里因为以下一些原因一直无法启动 ingress（调试了好久…）：</p><ol><li>服务器不可达（token 过期）</li><li>服务器资源不足（CPU、内存等不满足要求）</li><li>节点有污点，需要按具体情况配置</li><li>容器无法拉取，这里使用其他人 dockerHub 上的镜像，然后在 yaml 文件上配置启动不拉去镜像，即使用本地镜像，特别注意：本地镜像要每个节点上都有，否则还是会无法拉取</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用于代替的镜像以及配置文件用的都是上面的主要参考文章</span>
<span class="token comment"># 启动 ingress 服务</span>
kubectl apply <span class="token parameter variable">-f</span> ingress.yaml

<span class="token comment"># 验证是否开启</span>
kubectl get pod,svc <span class="token parameter variable">-n</span> ingress-nginx

<span class="token comment"># 成功启动</span>
<span class="token comment"># 下面前两个 Completed 是正常的</span>
NAME                                            READY   STATUS      RESTARTS   AGE
pod/ingress-nginx-admission-create-s2fsm        <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          14m
pod/ingress-nginx-admission-patch-rtctp         <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          14m
pod/ingress-nginx-controller-67cfb7d9c6-bp4rw   <span class="token number">1</span>/1     Running     <span class="token number">0</span>          14m

NAME                                         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                      AGE
service/ingress-nginx-controller             NodePort    <span class="token number">10.96</span>.238.236   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:32069/TCP,443:30934/TCP   14m
service/ingress-nginx-controller-admission   ClusterIP   <span class="token number">10.96</span>.2.231     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                      14m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),x={href:"http://192.168.30.211:32069/%EF%BC%89%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"},E=t(`<figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//k8s/20230426/K8S网关ingress成功启动.png" alt="image-20230426174712399" tabindex="0" loading="lazy"><figcaption>image-20230426174712399</figcaption></figure><h3 id="测试-ingress" tabindex="-1"><a class="header-anchor" href="#测试-ingress" aria-hidden="true">#</a> 测试 Ingress</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>server
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>server
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>server
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>server
        <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/lfy_k8s_images/hello<span class="token punctuation">-</span>server
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9000</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8000</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>server
  <span class="token key atrule">name</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>server
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>server
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8000</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
kubectl apply <span class="token parameter variable">-f</span> test.yaml

<span class="token comment"># 查看服务情况：kubectl get svc -A</span>
default         hello-server                         ClusterIP   <span class="token number">10.96</span>.247.209   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8000</span>/TCP
default         nginx-demo                           ClusterIP   <span class="token number">10.96</span>.82.28     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8000</span>/TCP

<span class="token comment"># 访问 curl 10.96.82.28:8000：输出 nginx 默认页面</span>
<span class="token comment"># 访问 curl 10.96.247.209:8000，输出：Hello World!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="域名访问规则" tabindex="-1"><a class="header-anchor" href="#域名访问规则" aria-hidden="true">#</a> 域名访问规则</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress  
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>host<span class="token punctuation">-</span>bar
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;hello.gontoy.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>server
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;demo.gontoy.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/nginx&quot;</span>  <span class="token comment"># 把请求会转给下面的服务，下面的服务一定要能处理这个路径，不能处理就是404</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo  <span class="token comment">## java，比如使用路径重写，去掉前缀nginx</span>
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 部署上面的转发规则</span>
kubectl apply <span class="token parameter variable">-f</span> domain.yaml

<span class="token comment"># 查看是否创建</span>
kubectl get ingress
<span class="token comment"># 或者</span>
kubectl get ing

<span class="token comment"># 输出如下结果：</span>
NAME               CLASS   HOSTS                              ADDRESS          PORTS   AGE
ingress-host-bar   nginx   hello.gontoy.com,demo.gontoy.com   <span class="token number">192.168</span>.30.212   <span class="token number">80</span>      80s

<span class="token comment"># 修改配置</span>
kubectl edit ing <span class="token operator">&lt;</span>ingressname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：由于不是真的域名，所以本地也要配置 host 域名转发</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># host 文件中添加：</span>
<span class="token number">192.168</span>.30.211 hello.gontoy.com
<span class="token number">192.168</span>.30.211 demo.gontoy.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问成功：</p>`,10),P={href:"https://demo.gontoy.com:30934/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://hello.gontoy.com:30934/",target:"_blank",rel:"noopener noreferrer"},_=t(`<figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//k8s/20230426/K8S网关ingress域名转发1.png" alt="image-20230426181153185" tabindex="0" loading="lazy"><figcaption>image-20230426181153185</figcaption></figure><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//k8s/20230426/https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//k8s/20230426/K8S网关ingress域名转发2.png" alt="image-20230426181250639" tabindex="0" loading="lazy"><figcaption>image-20230426181250639</figcaption></figure><h3 id="路径重写" tabindex="-1"><a class="header-anchor" href="#路径重写" aria-hidden="true">#</a> 路径重写</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress  
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/rewrite-target</span><span class="token punctuation">:</span> /$2
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>host<span class="token punctuation">-</span>bar
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;hello.gontoy.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>server
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;demo.gontoy.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/nginx(/|$)(.*)&quot;</span>  <span class="token comment"># 把请求会转给下面的服务，下面的服务一定要能处理这个路径，不能处理就是404</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo  <span class="token comment">## java，比如使用路径重写，去掉前缀nginx</span>
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流量限制" tabindex="-1"><a class="header-anchor" href="#流量限制" aria-hidden="true">#</a> 流量限制</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>limit<span class="token punctuation">-</span>rate
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/limit-rps</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;limit.gontoy.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Exact
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>demo
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nfs-存储抽象" tabindex="-1"><a class="header-anchor" href="#nfs-存储抽象" aria-hidden="true">#</a> NFS 存储抽象</h2><blockquote><p>直接使用挂在卷的方式会难以管理</p></blockquote><p>存储层可以使用：</p><ol><li>NFS</li><li>Glusterfs</li><li>CephFS</li></ol><p>主节点配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 文件存储</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils

<span class="token comment"># nfs 主节点输入：</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/nfs/data/ *(insecure,rw,sync,no_root_squash)&quot;</span> <span class="token operator">&gt;</span> /etc/exports

<span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /nfs/data
systemctl <span class="token builtin class-name">enable</span> rpcbind <span class="token parameter variable">--now</span>
systemctl <span class="token builtin class-name">enable</span> nfs-server <span class="token parameter variable">--now</span>

<span class="token comment"># 配置生效</span>
exportfs <span class="token parameter variable">-r</span>

<span class="token comment"># 确认生效</span>
exportfs
<span class="token comment"># 输出：</span>
/nfs/data     	<span class="token operator">&lt;</span>world<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从节点配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定主节点</span>
showmount <span class="token parameter variable">-e</span> <span class="token number">192.168</span>.30.211

<span class="token comment"># 执行以下命令挂载 nfs 服务器上的共享目录到本机路径 /root/nfsmount</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /nfs/data

<span class="token comment"># 同步</span>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">192.168</span>.30.211:/nfs/data /nfs/data

<span class="token comment"># 撤销挂载</span>
<span class="token function">umount</span> <span class="token parameter variable">-f</span> /nfs/data

<span class="token comment"># 写入一个测试文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello nfs server&quot;</span> <span class="token operator">&gt;</span> /nfs/data/test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原生挂载-nfs-同步" tabindex="-1"><a class="header-anchor" href="#原生挂载-nfs-同步" aria-hidden="true">#</a> 原生挂载 + NFS 同步</h3><blockquote><p>注意，使用这种方式，将 Pod 删除后同步的目录并不会一同删除，当系统大了之后会产生很多问题</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>demo
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>demo
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>demo
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>demo
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> html
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/share/nginx/html
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> html
          <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
            <span class="token key atrule">server</span><span class="token punctuation">:</span> 172.31.0.4
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data/nginx<span class="token punctuation">-</span>pv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pv-与-pvc" tabindex="-1"><a class="header-anchor" href="#pv-与-pvc" aria-hidden="true">#</a> PV 与 PVC</h3><blockquote><p>多个服务器上的 PV 会组成 PV 池，当需要挂在卷时，通过 PVC 挂载到 PV 池中</p></blockquote><ol><li>PV：PersistentVolume 持久卷</li><li>PVC：PersistentVolumeClaim 持久卷声明</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 主节点创建文件夹：</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /nfs/data/01
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /nfs/data/02
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /nfs/data/03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 PV：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pv01<span class="token punctuation">-</span>10m
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 10M
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data/01
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.30.211
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pv02<span class="token punctuation">-</span>1gi
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data/02
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.30.211
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pv03<span class="token punctuation">-</span>3gi
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 3Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data/03
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.30.211
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 PV</span>
kubectl apply <span class="token parameter variable">-f</span> pv.yaml
<span class="token comment"># 输出：</span>
persistentvolume/pv01-10m created
persistentvolume/pv02-1gi created
persistentvolume/pv03-3gi created

<span class="token comment"># 验证</span>
kubectl get persistentvolume
<span class="token comment"># 输出：</span>
NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   REASON   AGE
pv01-10m   10M        RWX            Retain           Available           nfs                     84s
pv02-1gi   1Gi        RWX            Retain           Available           nfs                     84s
pv03-3gi   3Gi        RWX            Retain           Available           nfs                     84s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 PVC：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pvc
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 200Mi
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 pvc</span>
kubectl apply <span class="token parameter variable">-f</span> pvc.yaml
<span class="token comment"># 输出：</span>
persistentvolumeclaim/nginx-pvc created

<span class="token comment"># 查看绑定情况</span>
kubectl get <span class="token function">pv</span>
<span class="token comment"># 输出：</span>
NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM               STORAGECLASS   REASON   AGE
pv01-10m   10M        RWX            Retain           Available                       nfs                     5m45s
pv02-1gi   1Gi        RWX            Retain           Bound       default/nginx-pvc   nfs                     5m45s
pv03-3gi   3Gi        RWX            Retain           Available                       nfs                     5m45s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是注意，一般 pvc 不会单独创建，而是与 Pod 配置一并写入：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>pvc
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>pvc
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>pvc
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>pvc
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> html
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/share/nginx/html
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> html
          <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
            <span class="token key atrule">claimName</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pvc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configmap-配置文件挂载" tabindex="-1"><a class="header-anchor" href="#configmap-配置文件挂载" aria-hidden="true">#</a> ConfigMap 配置文件挂载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建配置，redis 保存到 k8s 的 etcd；</span>
kubectl create cm redis-conf --from-file<span class="token operator">=</span>redis.conf
<span class="token comment"># 输出：</span>
configmap/redis-conf created

<span class="token comment"># 查看配置集</span>
kubectl get cm
<span class="token comment"># 输出：</span>
NAME               DATA   AGE
kube-root-ca.crt   <span class="token number">1</span>      47h
redis-conf         <span class="token number">1</span>      43s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件形式：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">data</span><span class="token punctuation">:</span>    <span class="token comment">#data是所有真正的数据，key：默认是文件名   value：配置文件的内容</span>
  <span class="token key atrule">redis.conf</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    appendonly yes</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>conf
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 Pod 一起创建：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> redis<span class="token punctuation">-</span>server
      <span class="token punctuation">-</span> <span class="token string">&quot;/redis-master/redis.conf&quot;</span>  <span class="token comment">#指的是redis容器内部的位置</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /data
      <span class="token key atrule">name</span><span class="token punctuation">:</span> data
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /redis<span class="token punctuation">-</span>master
      <span class="token key atrule">name</span><span class="token punctuation">:</span> config
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> data
      <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
      <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>conf
        <span class="token key atrule">items</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> redis.conf
          <span class="token key atrule">path</span><span class="token punctuation">:</span> redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="secret-敏感信息" tabindex="-1"><a class="header-anchor" href="#secret-敏感信息" aria-hidden="true">#</a> Secret 敏感信息</h2>`,36),S={href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://kubernetes.io/zh/docs/reference/glossary/?all=true#term-image",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令格式</span>
kubectl create secret docker-registry <span class="token operator">&lt;</span>任意标识<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
  --docker-server<span class="token operator">=</span><span class="token operator">&lt;</span>你的镜像仓库服务器<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
  --docker-username<span class="token operator">=</span><span class="token operator">&lt;</span>你的用户名<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
  --docker-password<span class="token operator">=</span><span class="token operator">&lt;</span>你的密码<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
  --docker-email<span class="token operator">=</span><span class="token operator">&lt;</span>你的邮箱地址<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> private<span class="token punctuation">-</span>nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> private<span class="token punctuation">-</span>nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> &lt;imagename<span class="token punctuation">&gt;</span>
  <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> &lt;上面的任意标识<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function V(B,T){const a=c("ExternalLinkIcon");return p(),i("div",null,[u,n("div",r,[d,n("ol",null,[n("li",null,[n("a",k,[s("Ingress安装部署"),e(a)]),s(" （主要参考文章）")]),n("li",null,[n("a",v,[s("k8s学习--ingress-nginx所遇问题小记"),e(a)]),s("（这个配置文件也可以）")]),n("li",null,[n("a",m,[s("记安装ingress-nginx遇到的一些坑"),e(a)])]),n("li",null,[n("a",b,[s("K8S集群中Pod资源处于Pending状态排查思路"),e(a)])]),n("li",null,[n("a",y,[s("(k8s) 1 node(s) had taints that the pod didn't tolerate"),e(a)])]),n("li",null,[n("a",g,[s("k8s（kubernetes）拉取本地镜像部署节点"),e(a)])]),n("li",null,[n("a",h,[s("k8s使用本地镜像"),e(a)])])])]),f,n("p",null,[s("成功访问（"),n("a",x,[s("http://192.168.30.211:32069/）："),e(a)])]),E,n("ol",null,[n("li",null,[n("a",P,[s("https://demo.gontoy.com:30934/"),e(a)])]),n("li",null,[n("a",A,[s("https://hello.gontoy.com:30934/"),e(a)])])]),_,n("blockquote",null,[n("p",null,[s("Secret 对象类型用来保存敏感信息，例如密码、OAuth 令牌和 SSH 密钥。 将这些信息放在 secret 中比放在 "),n("a",S,[s("Pod"),e(a)]),s(" 的定义或者 "),n("a",C,[s("容器镜像"),e(a)]),s(" 中来说更加安全和灵活。")])]),q])}const R=l(o,[["render",V],["__file","B-K8S核心概念.html.vue"]]);export{R as default};
