import{_ as a,Q as e,S as i,a9 as o}from"./framework-d7e1aa10.js";const r={},l=o('<h1 id="tcp-与-udp" tabindex="-1"><a class="header-anchor" href="#tcp-与-udp" aria-hidden="true">#</a> TCP 与 UDP</h1><p>物理层：传输比特流 bit 数据链路层：传输数据帧 frame 网络层：传输数据包 Packet 或者数据报 datagram 传输层：传输段 segment 应用层：传输消息 message</p><h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h2><ol><li>面向连接的、安全的、面向流的传输层协议</li></ol><h2 id="udp" tabindex="-1"><a class="header-anchor" href="#udp" aria-hidden="true">#</a> UDP</h2><blockquote><p>TODO</p></blockquote><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><h3 id="粘包拆包" tabindex="-1"><a class="header-anchor" href="#粘包拆包" aria-hidden="true">#</a> 粘包拆包</h3><p>TCP 无消息保护边界（UDP 有），可能出现粘包拆包问题，大致有三种情况：</p><ol><li>若干条信息完整地分开送达，属于正常情况，此时消费完一条消息后再从网络缓冲区取就可以了</li><li>若干条信息一起送达（比如原本是发送了两条消息，但是接收时只有一条），此时不知道消息的边界在哪，即 TCP 粘包，当接收方不及时接收套接字缓冲区中数据时，就会出现粘包</li><li>若干条消息分开送达（消息可能不是完整的，比如第一条消息的一部分与第二条消息粘在一起，或者反过来），此时也不知道消息的边界在哪，即 TCP 拆包。这个发生的原因是应用程序写入的数据大于或者小于套接字缓冲区的大小（也会出现粘包问题），报文长度大于 TCP 分段的最大报文长度也会发生拆包</li></ol><p>解决方案：</p><ol><li>使用标准的应用层协议（HTTP、HTTPS）来发送不定长的消息</li><li>（低效）在数据末尾添加划分用的字符，但是这样做需要每次都判断，并且接收时要一个字符一个字符地进行接收</li><li>发送数据块时添加一个数据头，即数据头 + 数据，数据头中放入一些元信息，比如数据的长度</li></ol><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>除了TCP (Transmission Control Protocol) 和 UDP (User Datagram Protocol)，还有一些其他传输层协议。以下是一些常见的传输层协议：</p><ol><li>SCTP (Stream Control Transmission Protocol)：SCTP 是一种类似于TCP的可靠传输协议，但它支持多流的传输，提供了更高的传输效率和更好的拥塞控制，适用于一些特殊的应用场景。</li><li>DCCP (Datagram Congestion Control Protocol)：DCCP 也是类似于TCP和UDP的传输层协议，旨在提供面向连接和面向无连接的服务，并且具备拥塞控制功能。</li><li>RSVP (Resource Reservation Protocol)：RSVP 是一种用于控制网络资源预留的传输层协议，主要用于提供服务质量（QoS）保障，如实时音频和视频传输。</li><li>RUDP (Reliable User Datagram Protocol)：RUDP 是对UDP的扩展，提供了可靠的数据传输，通过添加重传和确认机制，使得数据在不可靠的网络环境中可以可靠地传输。</li><li>MPTCP (Multipath TCP)：MPTCP 允许同时使用多个网络路径传输数据，以提高数据传输的效率和可靠性。</li></ol><p>这些传输层协议在不同的应用场景下有不同的优势，选择合适的协议取决于具体的需求和网络条件。通常，TCP 和 UDP 是最常见和广泛使用的传输层协议，用于大多数的应用层通信。</p>',16),t=[l];function P(c,d){return e(),i("div",null,t)}const n=a(r,[["render",P],["__file","TCP与UDP.html.vue"]]);export{n as default};
