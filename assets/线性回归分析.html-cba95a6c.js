import{_ as s,Q as n,S as r,U as l,W as t,X as p,a8 as i,a9 as e,H as a}from"./framework-d7e1aa10.js";const g={},c=l("h1",{id:"线性回归分析",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#线性回归分析","aria-hidden":"true"},"#"),i(" 线性回归分析")],-1),u={class:"table-of-contents"},_=e('<p><strong>基本概念：</strong></p><p>回归分析（Regression Analysis）是确定两种或两种以上变量间相互依赖的定量关系的一种统计分析方法 <strong>按涉及变量个数划分：</strong></p><ul><li>一元回归分析</li><li>多元回归分析</li></ul><p><strong>按自变量和因变量之间关系划分：</strong></p><ul><li>线性回归分析</li><li>非线性回归分析</li></ul><p><strong>回归分析主要解决两个问题：</strong></p><ol><li>一是确定几个变量之间是否存在相关关系，如果存在，找出它们之间适当的数学表达式</li><li>二是根据一个或几个变量的值，预测或控制另一个或几个变量的值</li></ol><br><p><strong>注意：相关性不是因果性</strong></p><p><strong>因变量类型：</strong></p><ol><li>连续数值型变量：对应线性回归，模型有：OLS、GLS</li><li>0-1 型变量：对应 0-1 回归，模型有：logistic 回归</li><li>定序变量：对应定序回归，模型有：probit 定序回归</li><li>计数变量：对应计数回归，模型有泊松回归</li><li>生存变量（截断数据）：对应生存回归，模型有： Cox 等比例风险回归</li></ol><p>回归分析的任务就是：通过研究 X 和 Y 的相关关系，尝试去解释 Y 的形成机制，进而达到通过 X 去预测 Y 的目的</p><p><strong>回归分析的三个重要作用：</strong></p><ol><li>识别重要变量</li><li>判断相关性的方向</li><li>估计权重（回归系数）</li></ol><br><p><strong>数据分类：</strong></p><img src="https://my-photos-1.oss-cn-hangzhou.aliyuncs.com/markdown//建模/20230208/不同数据类型.png" alt="image-20230208143846648" style="zoom:50%;"><p>横截面数据：在某一时间点收集的不同对象的数据</p><p>时间序列数据：对同一对象在不同时间连续观察所取得的数据</p><p>面板数据：横截面数据与时间序列数据综合起来的一种数据资源</p><br><p><strong>回归分析的步骤：</strong></p><ol><li>确定变量。寻找与预测目标的相关影响因素，即自变量，并从中选出主要的影响因素。</li><li>建立预测模型。依据自变量和因变量的历史统计资料进行计算，在此基础上建立回归分析预测模型。</li><li>计算预测误差。回归预测模型是否可用于实际预测，取决于对回归预测模型的检验和对预测误差的计算。</li><li>确定预测值。利用回归预测模型计算预测值，并对预测值进行综合分析，确定最后的预测值</li></ol><br><p>**补充：**分类与预测 不同点：</p><ul><li>分类是预测类对象的分类标号（或离散值），根据训练数据集和类标号属性，构建模型来分类现有数据，并用来分类新数据。</li><li>预测是建立连续函数值模型评估无标号样本类，或评估给定样本可能具有的属性值或值区间，即用来估计连续值或量化属性值，比如预测空缺值。</li></ul><p>相同点：</p><ul><li>分类和预测的共同点是两者都需要构建模型，都用模型来估计未知值。预测中主要的估计方法是「回归分析」</li></ul><h2 id="一元线性回归" tabindex="-1"><a class="header-anchor" href="#一元线性回归" aria-hidden="true">#</a> 一元线性回归</h2><p>线性假定并不要求初始模型都呈严格线性关系，因为自变量和因变量都可通过变量转换成线性模型</p><p>使用线性回归模型建模前，需要对数据进行预处理，可以用 Excel、Stata 等</p><p>变量导致的内生性：如果满足误差项和所有的自变量 x 都不相关，那么称该回归模型具有外生性，如果相关就存在内生性，内生性会导致回归系数估计的不准确：不满足无偏和一致性</p><p>蒙特卡罗模拟可以考察内生性的大小</p><p>要求所有的解释变量（自变量）全部外生很困难，可以弱化这个条件</p><p>核心解释变量时我们感兴趣的变量，我们特别希望得到对其系数的一致估计（当样本容量无限大时，收敛于待估计参数的真值）</p><p>控制变量：对这些变量没太大兴趣</p><p>在实际应用中，主要保证核心解释变量与误差项不相关即可</p><p><strong>四种模型：</strong></p><ol><li>一元线性回归</li><li>双对数模型</li><li>半对数模型（两种）</li></ol><p><strong>步骤：</strong></p><ol><li>描述性数据统计</li><li>计算拟合优度</li><li>标准化回归系数（去除量纲影响，标准化系数的绝对值越大，说明对因变量的影响就越大（只关注显著的回归系数））</li></ol><p><strong>扰动项：</strong></p><ol><li>球型扰动项：满足同方差和无自相关两个条件（横截面数据容易出现异方差问题，时间序列数容易出现自相关问题）</li></ol><p><strong>如果扰动项存在异方差：</strong></p><ol><li>OLS 估计出来的回归系数是无偏、一致的</li><li>假设检验无法使用</li><li>OLS 估计量不再是最优线性无偏估计量</li></ol><p><strong>怎么解决异方差：</strong></p><ol><li>使用 OLS + 稳健的标准误差</li><li>广义的最小二乘法</li></ol><p>原理：方差较小的数据包含的信息较多，可以给予信息量大的数据更大的权重（即方差小的数据给予更大的权重）</p><p><strong>如何检验异方差：</strong></p><ol><li>画出残差与拟合值的散点图</li><li>画残差与自变量的散点图</li><li>BP 检验</li><li>怀特检验</li></ol><p><strong>多重共线性：如果某一解释变量可以由其他的解释变量线性表出，则存在严格多重共线性，这会使得对系数的估计变得不准确</strong></p><p>如何处理多重共线性：</p><ol><li>如果不关心具体的回归系数，只关心整个方程预测被解释变量的能力，可以不必理会多重共线性（假设整个方程是显著的）</li><li>如果关心具体的回归系数，但多重共线性并不影响所关心变量的显著性，那么也可以不必理会</li><li>如果多重共线性影响到所关心变量的显著性，则需要增大样本容量，剔除导致严重共线性的变量（但是不要轻易剔除，因为可能会有内生性的影响），或者是对模型进行修改</li></ol><p><strong>逐步回归分析：</strong></p><p>可以解决共线性</p><ul><li>先前逐步回归</li><li>向后逐步回归</li></ul>',56);function d(h,m){const o=a("router-link");return n(),r("div",null,[c,l("nav",u,[l("ul",null,[l("li",null,[t(o,{to:"#线性回归分析"},{default:p(()=>[i("线性回归分析")]),_:1}),l("ul",null,[l("li",null,[t(o,{to:"#一元线性回归"},{default:p(()=>[i("一元线性回归")]),_:1})])])])])]),_])}const x=s(g,[["render",d],["__file","线性回归分析.html.vue"]]);export{x as default};
