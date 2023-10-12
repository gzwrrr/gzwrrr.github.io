import{_ as l,Q as t,S as c,U as n,a8 as s,W as e,a9 as i,H as p}from"./framework-d7e1aa10.js";const o={},r=i(`<h1 id="k8s-安装" tabindex="-1"><a class="header-anchor" href="#k8s-安装" aria-hidden="true">#</a> K8S 安装</h1><h2 id="预处理" tabindex="-1"><a class="header-anchor" href="#预处理" aria-hidden="true">#</a> 预处理</h2><blockquote><p>先修改，否则之后会报错</p></blockquote><p>需要降低 docker 的版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 加入工作节点时卡住报错，相关文章：https://blog.csdn.net/qq_42910468/article/details/126037954</span>
<span class="token punctuation">[</span>WARNING SystemVerification<span class="token punctuation">]</span>: this Docker version is not on the list of validated versions: <span class="token number">23.0</span>.3. Latest validated version: <span class="token number">19.03</span>

<span class="token comment"># 查看版本</span>
yum list docker-ce <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>

<span class="token comment"># 降低版本</span>
yum downgrade <span class="token parameter variable">--setopt</span><span class="token operator">=</span>obsoletes<span class="token operator">=</span><span class="token number">0</span> <span class="token parameter variable">-y</span> docker-ce-18.09.9-3.el7 docker-ce-cli-18.09.9-3.el7 containerd.io

<span class="token comment"># 启动并查看版本</span>
systemctl start <span class="token function">docker</span>
<span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 相关文章：https://blog.csdn.net/weixin_45054797/article/details/112159446</span>
<span class="token punctuation">[</span>WARNING IsDockerSystemdCheck<span class="token punctuation">]</span>: detected <span class="token string">&quot;cgroupfs&quot;</span> as the Docker cgroup driver. The recommended driver is <span class="token string">&quot;systemd&quot;</span><span class="token builtin class-name">.</span> Please follow the guide at https://kubernetes.io/docs/setup/cri/

<span class="token comment"># 修改文件</span>
<span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment"># 添加下面一行配置</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;exec-opts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;native.cgroupdriver=systemd&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 重启</span>
<span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭防火墙：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看防火墙是否开启</span>
firewall-cmd <span class="token parameter variable">--state</span>

<span class="token comment"># 关闭</span>
systemctl stop firewalld.service

<span class="token comment"># 取消开机自启</span>
systemctl disable firewalld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置修改" tabindex="-1"><a class="header-anchor" href="#配置修改" aria-hidden="true">#</a> 配置修改</h2><ol><li>改主机名</li><li>关闭安全组规则</li><li>关闭 swap 分区</li><li>配置统计</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#各个机器设置自己的域名</span>
hostnamectl set-hostname <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>


<span class="token comment"># 将 SELinux 设置为 permissive 模式（相当于将其禁用）</span>
<span class="token function">sudo</span> setenforce <span class="token number">0</span>
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^SELINUX=enforcing$/SELINUX=permissive/&#39;</span> /etc/selinux/config

<span class="token comment">#关闭swap</span>
swapoff <span class="token parameter variable">-a</span>  
<span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab

<span class="token comment">#允许 iptables 检查桥接流量</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/modules-load.d/k8s.conf</span>
br_netfilter
EOF</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>
<span class="token function">sudo</span> <span class="token function">sysctl</span> <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-kubelet、kubeadm、kubectl" tabindex="-1"><a class="header-anchor" href="#安装-kubelet、kubeadm、kubectl" aria-hidden="true">#</a> 安装 kubelet、kubeadm、kubectl</h2><h3 id="下载工具" tabindex="-1"><a class="header-anchor" href="#下载工具" aria-hidden="true">#</a> 下载工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置下载信息、下载三大件</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
   http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
exclude=kubelet kubeadm kubectl
EOF</span>

<span class="token comment"># 下载 kubelet、kubeadm、kubectl</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet-1.20.9 kubeadm-1.20.9 kubectl-1.20.9 <span class="token parameter variable">--disableexcludes</span><span class="token operator">=</span>kubernetes

<span class="token comment"># 启动</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kubelet

<span class="token comment"># 查看 kubelet 的状态，此时应该时未启动，需要在下面 init 之后才会启动</span>
systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引导集群" tabindex="-1"><a class="header-anchor" href="#引导集群" aria-hidden="true">#</a> 引导集群</h3><p>使用 kubeadm 引导集群：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用脚本下载所有需要的镜像</span>
<span class="token function">sudo</span> <span class="token function">tee</span> ./images.sh <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
#!/bin/bash
images=(
kube-apiserver:v1.20.9
kube-proxy:v1.20.9
kube-controller-manager:v1.20.9
kube-scheduler:v1.20.9
coredns:1.7.0
etcd:3.4.13-0
pause:3.2
)
for imageName in \${images[@]} ; do
docker pull registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images/$imageName
done
EOF</span>

<span class="token comment"># 添加执行权限并执行</span>
<span class="token function">chmod</span> +x ./images.sh <span class="token operator">&amp;&amp;</span> ./images.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化主节点" tabindex="-1"><a class="header-anchor" href="#初始化主节点" aria-hidden="true">#</a> 初始化主节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 主节点地址</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.30.211 cluster-endpoint&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts

<span class="token comment"># 主节点初始化</span>
<span class="token comment"># 注意所有网络范围必须不重叠</span>
kubeadm init <span class="token punctuation">\\</span>
--apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.30.211 <span class="token punctuation">\\</span>
--control-plane-endpoint<span class="token operator">=</span>cluster-endpoint <span class="token punctuation">\\</span>
--image-repository registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images <span class="token punctuation">\\</span>
--kubernetes-version v1.20.9 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/16 <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">192.168</span>.0.0/16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 成功后输出如下结果</span>
Your Kubernetes control-plane has initialized successfully<span class="token operator">!</span>

To start using your cluster, you need to run the following as a regular user:

  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
  <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
  <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

Alternatively, <span class="token keyword">if</span> you are the root user, you can run:

  <span class="token builtin class-name">export</span> <span class="token assign-left variable">KUBECONFIG</span><span class="token operator">=</span>/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run <span class="token string">&quot;kubectl apply -f [podnetwork].yaml&quot;</span> with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

You can now <span class="token function">join</span> any number of control-plane nodes by copying certificate authorities
and <span class="token function">service</span> account keys on each <span class="token function">node</span> and <span class="token keyword">then</span> running the following as root:

  kubeadm <span class="token function">join</span> cluster-endpoint:6443 <span class="token parameter variable">--token</span> fsimgi.q1ad5l7cpcojgpa8 <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:4fee369d3fb915ad0e5c64d9db6b4215675ab1a3c626e9800feb5f8478d8b174 <span class="token punctuation">\\</span>
    --control-plane 

Then you can <span class="token function">join</span> any number of worker nodes by running the following on each as root:

kubeadm <span class="token function">join</span> cluster-endpoint:6443 <span class="token parameter variable">--token</span> fsimgi.q1ad5l7cpcojgpa8 <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:4fee369d3fb915ad0e5c64d9db6b4215675ab1a3c626e9800feb5f8478d8b174
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置配置文件</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config
  
<span class="token comment">#查看集群所有节点</span>
kubectl get nodes

<span class="token comment">#根据配置文件，给集群创建资源</span>
kubectl apply <span class="token parameter variable">-f</span> xxxx.yaml

<span class="token comment">#查看集群部署了哪些应用？</span>
<span class="token function">docker</span> <span class="token function">ps</span>   <span class="token operator">==</span><span class="token operator">=</span>   kubectl get pods <span class="token parameter variable">-A</span>
<span class="token comment"># 运行中的应用在docker里面叫容器，在k8s里面叫Pod</span>
kubectl get pods <span class="token parameter variable">-A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装网络组件" tabindex="-1"><a class="header-anchor" href="#安装网络组件" aria-hidden="true">#</a> 安装网络组件</h3><blockquote><p>安装网络组件后主节点才能准备好</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># calico 跟版本有关，需要多试几次，下面是可能使用的几个</span>
<span class="token function">curl</span> https://docs.projectcalico.org/manifests/calico.yaml <span class="token parameter variable">-O</span>
<span class="token comment"># 或者</span>
<span class="token function">curl</span> https://docs.projectcalico.org/v3.7/manifests/calico.yaml <span class="token parameter variable">-O</span>
<span class="token comment"># 或者</span>
<span class="token function">wget</span> https://docs.projectcalico.org/v3.20/manifests/calico.yaml --no-check-certificate
<span class="token comment"># calico.yaml 文件</span>
https://blog.csdn.net/moyuanbomo/article/details/123092448

<span class="token comment"># 启动 calico</span>
kubectl apply <span class="token parameter variable">-f</span> calico.yaml

<span class="token comment"># 查看 pod 情况</span>
kubectl get pods <span class="token parameter variable">-A</span>
<span class="token comment"># 如果以上都没有问题，那么结果应该如下</span>
NAMESPACE     NAME                                      READY   STATUS              RESTARTS   AGE
kube-system   calico-kube-controllers-bcc6f659f-b4hkm   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          57s
kube-system   calico-node-z28h5                         <span class="token number">0</span>/1     Init:2/3            <span class="token number">0</span>          62s
kube-system   coredns-5897cd56c4-k2qsj                  <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          12m
kube-system   coredns-5897cd56c4-rgr62                  <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          12m
kube-system   etcd-k8s1                                 <span class="token number">1</span>/1     Running             <span class="token number">0</span>          12m
kube-system   kube-apiserver-k8s1                       <span class="token number">1</span>/1     Running             <span class="token number">0</span>          12m
kube-system   kube-controller-manager-k8s1              <span class="token number">1</span>/1     Running             <span class="token number">0</span>          12m
kube-system   kube-proxy-mflmv                          <span class="token number">1</span>/1     Running             <span class="token number">0</span>          12m
kube-system   kube-scheduler-k8s1                       <span class="token number">1</span>/1     Running             <span class="token number">0</span>          12m

<span class="token comment"># 查看节点情况</span>
kubectl get nodes
<span class="token comment"># 如果一切正常，那么主节点应该显示就绪</span>
NAME   STATUS   ROLES                  AGE   VERSION
k8s1   Ready    control-plane,master   15m   v1.20.9	


<span class="token comment"># 在其他机器上输入以下命令，用以加入集群</span>
<span class="token comment"># 坑：如果之前使用过 minikube，可能配置文件会有冲突的情况，或者是主机地址不可达，导致无法加入工作节点</span>
kubeadm <span class="token function">join</span> cluster-endpoint:6443 <span class="token parameter variable">--token</span> 37pgy0.l0j1471q4rq1yul7 <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:752d1e7c2e41b6e59f4c7706e0c65cb33fd67c3746ae33c4d13e27e8f1b26981 


<span class="token comment"># 如果一切正常，那么应该看到</span>
kubectl get nodes
NAME   STATUS     ROLES                  AGE     VERSION
k8s1   Ready      control-plane,master   15m     v1.20.9
k8s2   NotReady   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 8m17s   v1.20.9
k8s3   NotReady   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 8m17s   v1.20.9


<span class="token comment"># 额外补充</span>
<span class="token comment"># 重新生成 token，注意 token 是 24 小时有效的</span>
kubeadm token create <span class="token parameter variable">--ttl</span> <span class="token number">0</span> --print-join-command

<span class="token comment"># 清除非主节点上的 token</span>
kubeadm reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功搭建起集群：</p><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//k8s/20230426/K8S集群启动成功.png" alt="image-20230424225306121" tabindex="0" loading="lazy"><figcaption>image-20230424225306121</figcaption></figure><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//k8s/20230426/K8S集群Pods.png" alt="image-20230424225805586" tabindex="0" loading="lazy"><figcaption>image-20230424225805586</figcaption></figure><h3 id="安装可视化面板" tabindex="-1"><a class="header-anchor" href="#安装可视化面板" aria-hidden="true">#</a> 安装可视化面板</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># https://blog.csdn.net/zhangbaoxiang/article/details/107435424</span>
kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml

<span class="token comment"># 成功后看 Pods 应该有</span>
kubernetes-dashboard   dashboard-metrics-scraper-79c5968bdc-jxn4x   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          105s
kubernetes-dashboard   kubernetes-dashboard-658485d5c7-rdpjb        <span class="token number">1</span>/1     Running   <span class="token number">0</span>          105s

<span class="token comment"># 设置访问端口</span>
kubectl edit svc kubernetes-dashboard <span class="token parameter variable">-n</span> kubernetes-dashboard
<span class="token comment"># 修改文件中的内容</span>
type: NodePort

<span class="token comment"># 安全组放行</span>
kubectl get svc <span class="token parameter variable">-A</span> <span class="token operator">|</span><span class="token function">grep</span> kubernetes-dashboard
<span class="token comment"># 结果如下，访问时需要使用 https，端口为如下，此处为 30317</span>
kubernetes-dashboard   dashboard-metrics-scraper   ClusterIP   <span class="token number">10.96</span>.164.141   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8000</span>/TCP                 4m38s
kubernetes-dashboard   kubernetes-dashboard        NodePort    <span class="token number">10.96</span>.91.38     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>:30317/TCP            4m38s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建访问账号，准备一个yaml文件； vi dashUser.yaml</span>
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
  
<span class="token comment"># 创建</span>
kubectl apply <span class="token parameter variable">-f</span> dashUser.yaml

<span class="token comment"># 获取访问令牌</span>
kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard get secret <span class="token variable"><span class="token variable">$(</span>kubectl <span class="token parameter variable">-n</span> kubernetes-dashboard get sa/admin-user <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.secrets[0].name}&quot;</span><span class="token variable">)</span></span> <span class="token parameter variable">-o</span> go-template<span class="token operator">=</span><span class="token string">&quot;{{.data.token | base64decode}}&quot;</span>
eyJhbGciOiJSUzI1NiIsImtpZCI6IjFvV2sxTVRUeFBjWExBSG5KNWw2RTlCTC1XSm1La1RheG5MeXlnYnI5cnMifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLWcyMnpqIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI0MTQwMDEwYi1iMDlmLTRlYjQtYTdiZS0xYWNmM2ZmNDYyY2QiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.wj8AxwfA0MpNK0pL0HXAlCJw-JFl6gm00EUyjdK1C_El-42xn97fsAy7SdOURNPkEjCXUIouzQZceQY78UIw9miyhR-4E0psLpZlcXsihZnCNlc34Sbc_a8EY79kZJZPoj6N96I3rAGktYerQTjVerqgpOWQvkQC4ORxQfHiuHl-NiaGZ9QqBo9IEOCGZaAS3f_J1GLelVR19WYWUaC3Pv3rvFjMN5kQJwV78oZRHXO2Ubg7lmhN6qCLbOw-SdPY9bA9_8Um-ExLQEHeSKIcQGXkDgDlvMDJPA3auTDgew9c3Omd4W1YHBkv2B-1YTUrGDF63bylR3eY7L_U5tY7mQ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功登录：</p><figure><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//k8s/20230426/K8S面板.png" alt="image-20230425003147047" tabindex="0" loading="lazy"><figcaption>image-20230425003147047</figcaption></figure><h2 id="补充-官方安装" tabindex="-1"><a class="header-anchor" href="#补充-官方安装" aria-hidden="true">#</a> 补充：官方安装</h2>`,34),d={href:"https://kubernetes.io/zh-cn/docs/tasks/tools/install-kubectl-linux/",target:"_blank",rel:"noopener noreferrer"},u=i(`<h3 id="下载-kubelet" tabindex="-1"><a class="header-anchor" href="#下载-kubelet" aria-hidden="true">#</a> 下载 kubelet</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装最新版本</span>
<span class="token function">curl</span> <span class="token parameter variable">-LO</span> <span class="token string">&quot;https://dl.k8s.io/release/<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-s</span> https://dl.k8s.io/release/stable.txt<span class="token variable">)</span></span>/bin/linux/amd64/kubectl&quot;</span>

<span class="token comment"># 下载 kubectl 校验和文件</span>
<span class="token function">curl</span> <span class="token parameter variable">-LO</span> <span class="token string">&quot;https://dl.k8s.io/<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-s</span> https://dl.k8s.io/release/stable.txt<span class="token variable">)</span></span>/bin/linux/amd64/kubectl.sha256&quot;</span>

<span class="token comment"># 验证</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> kubectl.sha256<span class="token variable">)</span></span>  kubectl&quot;</span> <span class="token operator">|</span> sha256sum <span class="token parameter variable">--check</span>

<span class="token comment"># 安装 kubelet</span>
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-o</span> root <span class="token parameter variable">-g</span> root <span class="token parameter variable">-m</span> 0755 kubectl /usr/local/bin/kubectl

<span class="token comment"># 查看版本号</span>
kubectl version <span class="token parameter variable">--client</span>
kubectl version <span class="token parameter variable">--client</span> <span class="token parameter variable">--output</span><span class="token operator">=</span>yaml

<span class="token comment"># 通过获取集群状态的方法，检查是否已恰当地配置了 kubectl</span>
kubectl cluster-info
kubectl cluster-info dump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载-minikube" tabindex="-1"><a class="header-anchor" href="#下载-minikube" aria-hidden="true">#</a> 下载 minikube</h3><blockquote><p>模拟集群，会自动下载 kubeadmin、kubelet、kubectl</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载并安装 minikube</span>
<span class="token function">curl</span> <span class="token parameter variable">-LO</span> https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
<span class="token function">install</span> minikube-linux-amd64 /usr/local/bin/minikube

<span class="token comment"># 开启集群</span>
minikube start
<span class="token comment"># 强制启动</span>
minikube start <span class="token parameter variable">--force</span>

<span class="token comment"># 如果下载慢那么使用</span>
minikube delete
minikube start <span class="token parameter variable">--force</span> --image-mirror-country<span class="token operator">=</span><span class="token string">&#39;cn&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写 deployment.yaml 文件，设置配置信息：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> finance
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> finance
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> finance
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> finance
          <span class="token key atrule">image</span><span class="token punctuation">:</span> rossning92/finance
          <span class="token key atrule">resources</span><span class="token punctuation">:</span>
            <span class="token key atrule">limits</span><span class="token punctuation">:</span>
              <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">&quot;128Mi&quot;</span>
              <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">&quot;500m&quot;</span>
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">5000</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> finance<span class="token punctuation">-</span>np<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> finance
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5000</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">5000</span>
      <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动集群</span>
kubectl apply <span class="token parameter variable">-f</span> deployment.yaml

<span class="token comment"># 查看 pods</span>
kubectl get pods

<span class="token comment"># 查看服务</span>
kubectl get <span class="token function">service</span>

<span class="token comment"># 使用 minikube 模拟</span>
minikube <span class="token function">service</span> finance-np-service

<span class="token comment"># 移除集群</span>
kubectl delete <span class="token parameter variable">-f</span> deployment.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><p>:::相关文章</p>`,10),v={href:"https://www.orchome.com/16614#:~:text=%E5%BD%BB%E5%BA%95%E6%B8%85%E7%90%86%E5%8D%B8%E8%BD%BD%20kubeadm%E3%80%81kubectl%E3%80%81kubeletDebian%20%2F%20Ubuntusudosudoapt-get%20remove%20%E4%BC%9A%E5%88%A0%E9%99%A4%E8%BD%AF%E4%BB%B6%E5%8C%85%E8%80%8C%E4%BF%9D%E7%95%99%E8%BD%AF%E4%BB%B6%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6apt-get,purge%20%E4%BC%9A%E5%90%8C%E6%97%B6%E6%B8%85%E9%99%A4%E8%BD%AF%E4%BB%B6%E5%8C%85%E5%92%8C%E8%BD%AF%E4%BB%B6%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6CentOS%20%2F%20RHEL%20%2F%20Fedorasudosudoautoremove%EF%BC%9A%E5%BD%93%E4%BD%BF%E7%94%A8yum%20install%E5%91%BD%E4%BB%A4%E5%AE%89%E8%A3%85%E4%B8%80%E6%9E%9A%E8%BD%AF%E4%BB%B6%E5%8C%85%E6%97%B6%EF%BC%8C",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/1a57035ed451",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,":::",-1);function k(h,g){const a=p("ExternalLinkIcon");return t(),c("div",null,[r,n("blockquote",null,[n("p",null,[s("中文文档地址："),n("a",d,[s("https://kubernetes.io/zh-cn/docs/tasks/tools/install-kubectl-linux/"),e(a)])])]),u,n("p",null,[n("a",v,[s("kubeadm、kubectl、kubelet彻底清理卸载"),e(a)])]),n("p",null,[n("a",m,[s("minikube 安装和删除"),e(a)])]),b])}const y=l(o,[["render",k],["__file","A-K8S安装.html.vue"]]);export{y as default};
