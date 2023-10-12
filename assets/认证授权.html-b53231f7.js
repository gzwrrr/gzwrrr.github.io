import{_ as p,Q as o,S as h,U as e,a8 as a,W as i,a9 as n,H as s}from"./framework-d7e1aa10.js";const r={},c=e("h1",{id:"认证授权",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#认证授权","aria-hidden":"true"},"#"),a(" 认证授权")],-1),l={class:"hint-container info"},d=e("p",{class:"hint-container-title"},"相关文章",-1),A={href:"https://zhuanlan.zhihu.com/p/60522006",target:"_blank",rel:"noopener noreferrer"},u=n('<p>还有一个重要的概念是访问控制策略（AC）。如果我们需要把资源的权限划分到一个很细的粒度，就不得不考虑用户以何种身份来访问受限的资源，选择基于访问控制列表（ACL）还是基于用户角色的访问控制（RBAC）或者其他访问控制策略。</p><p>数字凭证还表现在方方面面，SSH 登录的密匙、JWT 令牌、一次性密码等。</p><p>HAMC、OAuth2，以及凭证技术JWT token。</p><p>OAuth、Open ID、OpenID Connect</p><p>Cookie 、Token in Cookie、Session Token 依然被使用</p><p>随着微服务的发展，API 的设计不仅仅是面向 WEB 或者 Mobile APP，还有BFF（Backend for Frontend）和 Domain API 的认证，以及第三方服务的集成。</p><p>客户端到服务器之间认证和服务器到服务器之间认证是不同的。</p><p>我们把终端用户（Human）参与的通信，叫做 Human-to-machine (H2M)，服务器与服务器之间的通信叫做 Machine-to-machine (M2M)。</p><p><strong>另外值得一提的是，H2M 这种通信方式下，客户端不受控制，由于无法自主分发密匙，认证通信的安全高度依赖 HTTPS。</strong></p><h2 id="认证授权的方式" tabindex="-1"><a class="header-anchor" href="#认证授权的方式" aria-hidden="true">#</a> 认证授权的方式</h2><blockquote><p>认证：authentication，标识身份，解决 <code>who are you</code> 的问题；授权：authorization，授予资源，解决 <code>what can you do</code> 的问题，往往需要配合认证来完成。</p><p>注意：不用太过于纠结一个规范是用于认证还是授权（比如 OAuth），因为在一个系统中认证和授权往往是无法被孤立实现的。</p></blockquote><p>大致分为以下几类（有些是有包含关系的，后续可能再做调整）：</p><ol><li>基本身份验证（HTTP Basic AUthentication）</li><li>公钥登录私钥认证</li><li>OAuth 开放授权标准</li><li>基于令牌的身份验证</li><li>HMAC（AK/SK）认证</li><li>双因素身份验证</li><li>OTP （One time password ）一次性密码</li></ol><h3 id="基本身份验证-http-basic-authentication" tabindex="-1"><a class="header-anchor" href="#基本身份验证-http-basic-authentication" aria-hidden="true">#</a> 基本身份验证（HTTP Basic AUthentication）</h3><p>基本身份验证（HTTP Basic AUthentication）：这是最简单的身份验证形式，需要用户提供用户名和密码才能访问网站。凭据通常以纯文本形式发送，这使得这种方法不太安全。然而，它对于不需要高安全级别的简单网站或内部应用程序很有用。</p><h3 id="公钥登录私钥认证" tabindex="-1"><a class="header-anchor" href="#公钥登录私钥认证" aria-hidden="true">#</a> 公钥登录私钥认证</h3><p>SSH (Secure Shell)默认使用公钥认证方式。在公钥认证中，用户生成一个公私密钥对，其中公钥与服务器共享，私钥安全保存在用户的设备上。当用户尝试与服务器进行身份验证时，服务器向用户发送一个挑战，然后用户用他们的私钥对挑战进行签名，并将签名后的挑战发送回服务器。如果服务器可以通过公钥验证签名，则认证通过。</p><p>与密码身份验证等其他身份验证方法相比，公钥身份验证提供了增强的安全性，因为它不要求用户与服务器共享密码。它还允许无需用户干预的自动身份验证。</p><p>除了公钥身份验证之外，SSH还支持其他身份验证方法，如密码身份验证和基于主机的身份验证。但推荐使用公钥认证，因为它具有更高的安全性和便捷性。</p><h3 id="oauth-开放授权标准" tabindex="-1"><a class="header-anchor" href="#oauth-开放授权标准" aria-hidden="true">#</a> OAuth 开放授权标准</h3><p>OAuth: OAuth是一种广泛使用的认证协议，它允许用户将自己在一个网站上的资源授权给另一个网站，而无需共享自己的证书。通常用于社交登录，可用于第三方网站的用户认证。</p><p>OAuth（开放授权）是一个开放标准，允许用户授权第三方网站访问他们存储在另外的服务提供者上的信息，而不需要将用户名和密码提供给第三方网站或分享他们数据的所有内容。</p><p>OAuth 是一个授权标准，而不是认证标准。提供资源的服务器不需要知道确切的用户身份（session），只需要验证授权服务器授予的权限（token）即可。</p><p>OAuth 的基本思路就是通过授权服务器获取 access token 和 refresh token（refresh token 用于重新刷新access token），然后通过 access token 从资源服务器获取数据 。在特定的场景下还有下面几种模式：</p><ol><li>授权码模式（authorization code）</li><li>简化模式（implicit）</li><li>密码模式（resource owner password credentials）</li><li>客户端模式（client credentials）</li></ol><p>如果需要获取用户的认证信息，OAuth 本身没有定义这部分内容，如果需要识别用户信息，则需要借助另外的认证层，例如 OpenID Connect。</p><h3 id="基于令牌的身份验证" tabindex="-1"><a class="header-anchor" href="#基于令牌的身份验证" aria-hidden="true">#</a> 基于令牌的身份验证</h3><p>基于令牌的身份验证:在这种方法中，用户提供令牌，如JWT (JSON Web令牌)，然后由服务器验证该令牌以验证用户。这种方法比基本身份验证更安全，因为令牌通常是加密的，必要时可以撤销。</p><p>在 OAuth 等分布式的认证、授权体系下，对凭证技术有了更多的要求，比如包含用户 ID、过期等信息，不需要再外部存储中关联。因此业界对 token 做了进一步优化，设计了一种自包含令牌，令牌签发后无需从服务器存储中检查是否合法，通过解析令牌就能获取令牌的过期、有效等信息，这就是JWT （JSON Web Token）。</p><p>JWT 是一种包含令牌（self-contained token），或者叫值令牌 （value token），我们以前使用关联到 session 上的 hash 值被叫做引用令牌（reference token）。</p><p>只需要签名的 secret key 就能校验 JWT 令牌，如果在消息体中加入用户 ID、过期信息就可以实现验证令牌是否有效、过期了，无需从数据库/缓存中读取信息。因为使用了加密算法，所以第一、二部分即使被修改（包括过期信息）也无法通过验证。JWT 优点是不仅可以作为 token 使用，同时也可以承载一些必要信息，省去多次查询。</p><ol><li>JWT token 的第一、二部分只是 base64 编码，肉眼不可读，不应当存放敏感信息</li><li>JWT token 的自包含特性，导致了无法被撤回</li><li>JWT 的签名算法可以自己拟定，为了便于调试，本地环境可以使用对称加密算法，生产环境建议使用非对称加密算法</li></ol><p>当然 OAuth 对 access token 等凭证所选用的技术并没有做出限制，OAuth 并不强制使用 JWT，在使用 JWT 自包含特性的优势时，必须考虑到 JWT 撤回困难的问题。在一些对撤回 token 要求很高的项目中不适合使用JWT，即使采用了一些方案实现（whitelist 和 blacklist）也违背了设计 JWT 的初衷。</p><h3 id="hmac-ak-sk-认证" tabindex="-1"><a class="header-anchor" href="#hmac-ak-sk-认证" aria-hidden="true">#</a> HMAC（AK/SK）认证</h3>',34),S={class:"hint-container info"},O=e("p",{class:"hint-container-title"},"相关文章",-1),k={href:"https://zhuanlan.zhihu.com/p/136590049",target:"_blank",rel:"noopener noreferrer"},T=n('<p>HMAC（AK/SK）认证：在我们对接一些 PAAS 平台和支付平台时，会要求我们预先生成一个 access key（AK） 和 secure key（SK），然后通过签名的方式完成认证请求，这种方式可以避免传输 secure key，且大多数情况下签名只允许使用一次，避免了重放攻击。</p><p>这种基于 AK/SK 的认证方式主要是利用散列的消息认证码 (Hash-based Message Authentication Code) 来实现的，因此有很多地方叫 HMAC 认证，实际上不是非常准确。HMAC 只是利用带有 key 值的哈希算法生成消息摘要，在设计 API 时有具体不同的实现。</p><p>HMAC 在作为网络通信的认证设计中作为凭证生成算法使用，避免了口令等敏感信息在网络中传输。基本过程如下：</p><ol><li>客户端需要在认证服务器中预先设置 access key（AK 或叫 app ID） 和 secure key（SK）</li><li>在调用 API 时，客户端需要对参数和 access key 进行自然排序后并使用 secure key 进行签名生成一个额外的参数 digest</li><li>服务器根据预先设置的 secure key 进行同样的摘要计算，并要求结果完全一致</li><li><strong>注意 secure key 不能在网络中传输，以及在不受信任的位置存放（浏览器等）</strong></li></ol><p>为了让每一次请求的签名变得独一无二，从而实现重放攻击，我们需要在签名时放入一些干扰信息。</p><p>在业界标准中有两种典型的做法：</p><ol><li>质疑/应答算法（OCRA: OATH Challenge-Response Algorithm）</li><li>基于时间的一次性密码算法（TOTP: Time-based One-time Password Algorithm）</li></ol><h3 id="双因素身份验证" tabindex="-1"><a class="header-anchor" href="#双因素身份验证" aria-hidden="true">#</a> 双因素身份验证</h3><p>双因素身份验证:这种方法要求用户提供两种形式的身份验证，如密码和发送到他们手机的代码，以验证自己。这种方法比基本身份验证更安全，可以为处理敏感数据的网站增加额外的安全层。</p><p>双因子认证一般是用户名密码再加一种其他方式的认证，如：短信验证、微信或者QQ授权验证、USB令牌、OTP 令牌等等。例子：阿里云登录控制台需要使用密码 + 虚拟 MFA 进行登录。</p><h3 id="otp-一次性密码" tabindex="-1"><a class="header-anchor" href="#otp-一次性密码" aria-hidden="true">#</a> OTP 一次性密码</h3><p>OTP （One time password ）：一次性密码，例如注册邮件和短信中的认证码</p><h2 id="权限控制模型" tabindex="-1"><a class="header-anchor" href="#权限控制模型" aria-hidden="true">#</a> 权限控制模型</h2><p>大致可以分为：</p><ol><li>UGO（Linux 权限控制）：User、Group、Other 粗粒度控制</li><li>ACL：基于用户的访问控制</li><li>RBAC：基于角色的访问控制</li><li>ABAC：基于属性的访问控制</li><li>NGAC：比 ABAC 更细粒度</li></ol><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>对于云平台资源和服务的安全访问授权，除了访问密钥和安全密钥认证外，还有多种备选方案。其中一些替代方案包括:</p><p>OAuth: OAuth是一种开放的授权标准，允许用户授权第三方应用程序访问他们的资源，而无需共享他们的密码。它通常用于提供对基于云的服务的安全访问，如社交媒体平台和api。</p><p>OpenID Connect: OpenID Connect是建立在OAuth 2.0之上的身份验证协议，提供用户身份验证和授权。它允许用户使用单一身份提供者进行身份验证，然后可以使用该身份提供者访问多个服务。</p><p>JSON Web Tokens (JWT): JWT是一种紧凑的、url安全的方法，用于表示要在双方之间转移的声明。它通常用于RESTful web服务和单页应用程序中的身份验证和授权。</p><p>SAML(安全断言标记语言):SAML是一种基于xml的标准，用于在各方之间交换身份验证和授权数据，特别是在身份提供者和服务提供者之间。它通常用于基于web的单点登录(SSO)，并被基于云的服务广泛支持。</p><p>AWS IAM (Identity and Access Management): AWS IAM是一个web服务，可以让您安全地管理对AWS服务和资源的访问。它为AWS服务提供用户身份验证、访问控制和授权等功能。</p><p>这些只是用于授权对云平台资源和服务的安全访问的访问密钥和安全密钥认证的替代方案的几个例子。身份验证和授权方法的选择将取决于应用程序或服务的特定需求和用例。</p><p>公钥和私钥认证与使用访问密钥和安全密钥进行令牌访问认证没有直接关系。</p><p>公钥和私钥认证是一种单独的认证方法，它使用一对密钥(一个公钥和一个私钥)在双方之间建立信任。这种方法通常用于客户端和服务器之间的安全通信，其中与服务器共享公钥，而私钥安全地保存在客户端设备上。</p><p>另一方面，使用访问密钥和安全密钥的令牌访问身份验证是另一种身份验证方法，它使用使用加密密钥签名和加密的令牌在客户端和服务器之间建立信任。这种方法常用于云平台中授权资源和服务的安全访问。</p><p>虽然这两种方法都使用加密密钥，但它们有不同的目的和用例。公私钥认证用于客户端与服务器之间的安全通信，令牌接入认证用于接入密钥和安全密钥对云平台资源和服务的安全访问。</p><p>在Java生态系统中，有一些可用的工具和框架来解决网站身份验证的问题，例如:</p><p>Spring Security:它是一个广泛使用的基于java的应用程序安全框架，提供身份验证和授权服务。Spring Security支持各种身份验证方法，包括基本身份验证、基于令牌的身份验证和OAuth。</p><p>Apache Shiro:这是另一个为Java应用程序提供身份验证、授权和加密服务的安全框架。Apache Shiro支持各种身份验证方法，包括基本身份验证、基于令牌的身份验证和OAuth。</p><p>JAAS (Java身份验证和授权服务):它是一个为Java应用程序提供身份验证和授权服务的Java框架。JAAS支持各种身份验证方法，包括基本身份验证、基于令牌的身份验证和双因素身份验证。</p><p>根据特定的需求和用例，可以使用这些框架和工具在基于java的web应用程序中实现各种身份验证方法。</p><p>访问密钥和安全密钥并不是特定的身份验证方法，而是在基于令牌的身份验证系统(如Amazon Web Services (AWS)和其他云平台)中常用的访问凭证。</p><p>在基于令牌的身份验证中，用户提供令牌，如JSON Web令牌(JWT)，用于对用户进行身份验证。令牌通常包含用户的访问密钥和安全密钥，用于签名和验证令牌。访问密钥和安全密钥用于为令牌生成加密签名，然后由服务器验证该签名以验证用户身份。</p><p>因此，访问密钥和安全密钥不是独立的身份验证方法，而是基于令牌的身份验证方法的一部分。它们用于提供对AWS等云平台中资源和服务的安全访问。</p><p>使用访问密钥和安全密钥进行基于令牌的身份验证是一种常用的方法，因为它有以下几个优点。</p><p>增强安全性:使用访问密钥和安全密钥的基于令牌的身份验证提供了增强的安全性，因为令牌通常使用加密密钥进行加密和签名。这有助于防止资源和服务被未经授权的访问，降低中间人攻击、跨站脚本攻击等攻击的风险。</p><p>可扩展性:使用访问密钥和安全密钥的令牌身份验证具有高度可扩展性，因为它不需要服务器维护会话状态。这意味着服务器可以处理大量并发请求，而不会使系统过载。</p><p>简化开发:使用访问密钥和安全密钥的基于令牌的身份验证可以简化开发，因为它允许开发人员将身份验证逻辑与应用程序逻辑分离。这使得开发和维护复杂的应用程序更加容易。</p><p>关于访问密钥和安全密钥的使用，访问密钥通常用于标识请求访问资源或服务的用户或应用程序，而安全密钥用于签名令牌并提供身份验证。通过同时使用访问密钥和安全密钥，服务器可以验证请求是否来自有效的用户或应用程序，并且令牌没有被篡改。</p><p>使用访问密钥和安全密钥的基于令牌的身份验证的替代方案包括其他身份验证方法，如基本身份验证、OAuth和双因素身份验证。然而，这些方法都有各自的优缺点，认证方法的选择取决于应用程序的特定需求和用例。</p><p>对于云平台资源和服务的安全访问授权，除了访问密钥和安全密钥认证外，还有多种备选方案。其中一些替代方案包括:</p><p>OAuth: OAuth是一种开放的授权标准，允许用户授权第三方应用程序访问他们的资源，而无需共享他们的密码。它通常用于提供对基于云的服务的安全访问，如社交媒体平台和api。</p><p>OpenID Connect: OpenID Connect是建立在OAuth 2.0之上的身份验证协议，提供用户身份验证和授权。它允许用户使用单一身份提供者进行身份验证，然后可以使用该身份提供者访问多个服务。</p><p>JSON Web Tokens (JWT): JWT是一种紧凑的、url安全的方法，用于表示要在双方之间转移的声明。它通常用于RESTful web服务和单页应用程序中的身份验证和授权。</p><p>SAML(安全断言标记语言):SAML是一种基于xml的标准，用于在各方之间交换身份验证和授权数据，特别是在身份提供者和服务提供者之间。它通常用于基于web的单点登录(SSO)，并被基于云的服务广泛支持。</p><p>AWS IAM (Identity and Access Management): AWS IAM是一个web服务，可以让您安全地管理对AWS服务和资源的访问。它为AWS服务提供用户身份验证、访问控制和授权等功能。</p><p>这些只是用于授权对云平台资源和服务的安全访问的访问密钥和安全密钥认证的替代方案的几个例子。身份验证和授权方法的选择将取决于应用程序或服务的特定需求和用例。</p>',48);function W(_,b){const t=s("ExternalLinkIcon");return o(),h("div",null,[c,e("div",l,[d,e("p",null,[e("a",A,[a("细说API – 认证、授权和凭证"),i(t)])])]),u,e("div",S,[O,e("p",null,[e("a",k,[a("HMAC 算法及其应用"),i(t)])])]),T])}const f=p(r,[["render",W],["__file","认证授权.html.vue"]]);export{f as default};
