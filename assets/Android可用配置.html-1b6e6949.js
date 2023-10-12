import{_ as t,Q as o,S as l,U as n,W as e,X as i,a8 as s,a9 as p,H as c}from"./framework-d7e1aa10.js";const r={},d=n("h1",{id:"android-可用配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#android-可用配置","aria-hidden":"true"},"#"),s(" Android 可用配置")],-1),u={class:"table-of-contents"},v=p(`<h2 id="基础依赖" tabindex="-1"><a class="header-anchor" href="#基础依赖" aria-hidden="true">#</a> 基础依赖</h2><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    implementation <span class="token string">&#39;androidx.core:core-ktx:1.12.0&#39;</span>
    implementation <span class="token string">&#39;androidx.appcompat:appcompat:1.4.1&#39;</span>
    implementation <span class="token string">&#39;com.google.android.material:material:1.6.0&#39;</span>
    implementation <span class="token string">&#39;androidx.constraintlayout:constraintlayout:2.1.4&#39;</span>
    testImplementation <span class="token string">&#39;junit:junit:4.+&#39;</span>
    androidTestImplementation <span class="token string">&#39;androidx.test.ext:junit:1.1.5&#39;</span>
    androidTestImplementation <span class="token string">&#39;androidx.test.espresso:espresso-core:3.5.1&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gradle-version-5-4-1" tabindex="-1"><a class="header-anchor" href="#gradle-version-5-4-1" aria-hidden="true">#</a> Gradle Version 5.4.1</h2><ol><li>gradle plugin：3.5.2</li><li>gradle：5.4.1</li><li>kotlin_version：1.3.50</li><li>SDK Version：29</li></ol><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>buildscript <span class="token punctuation">{</span>
    ext<span class="token punctuation">.</span>kotlin_version <span class="token operator">=</span> <span class="token string">&#39;1.3.50&#39;</span>
    repositories <span class="token punctuation">{</span>
        <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">jcenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        
    <span class="token punctuation">}</span>
    dependencies <span class="token punctuation">{</span>
        classpath <span class="token string">&#39;com.android.tools.build:gradle:3.5.2&#39;</span>
        classpath <span class="token interpolation-string"><span class="token string">&quot;org.jetbrains.kotlin:kotlin-gradle-plugin:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">kotlin_version</span></span><span class="token string">&quot;</span></span>
        <span class="token comment">// NOTE: Do not place your application dependencies here; they belong</span>
        <span class="token comment">// in the individual module build.gradle files</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

allprojects <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">jcenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

task <span class="token function">clean</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> Delete<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    delete rootProject<span class="token punctuation">.</span>buildDir
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>apply plugin<span class="token punctuation">:</span> <span class="token string">&#39;com.android.application&#39;</span>
apply plugin<span class="token punctuation">:</span> <span class="token string">&#39;kotlin-android&#39;</span>
apply plugin<span class="token punctuation">:</span> <span class="token string">&#39;kotlin-android-extensions&#39;</span>

android <span class="token punctuation">{</span>
    compileSdkVersion <span class="token number">29</span>
    defaultConfig <span class="token punctuation">{</span>
        applicationId <span class="token interpolation-string"><span class="token string">&quot;com.sunnyweather.android&quot;</span></span>
        minSdkVersion <span class="token number">21</span>
        targetSdkVersion <span class="token number">29</span>
        versionCode <span class="token number">1</span>
        versionName <span class="token interpolation-string"><span class="token string">&quot;1.0&quot;</span></span>
        testInstrumentationRunner <span class="token interpolation-string"><span class="token string">&quot;androidx.test.runner.AndroidJUnitRunner&quot;</span></span>
    <span class="token punctuation">}</span>
    buildTypes <span class="token punctuation">{</span>
        release <span class="token punctuation">{</span>
            minifyEnabled <span class="token boolean">false</span>
            proguardFiles <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string">&#39;proguard-android-optimize.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;proguard-rules.pro&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    implementation <span class="token function">fileTree</span><span class="token punctuation">(</span>dir<span class="token punctuation">:</span> <span class="token string">&#39;libs&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*.jar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;org.jetbrains.kotlin:kotlin-stdlib-jdk7:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">kotlin_version</span></span><span class="token string">&quot;</span></span>
    implementation <span class="token string">&#39;androidx.appcompat:appcompat:1.1.0&#39;</span>
    implementation <span class="token string">&#39;androidx.core:core-ktx:1.1.0&#39;</span>
    implementation <span class="token string">&#39;androidx.constraintlayout:constraintlayout:1.1.3&#39;</span>
    
    testImplementation <span class="token string">&#39;junit:junit:4.12&#39;</span>
    androidTestImplementation <span class="token string">&#39;androidx.test:runner:1.2.0&#39;</span>
    androidTestImplementation <span class="token string">&#39;androidx.test.espresso:espresso-core:3.2.0&#39;</span>
    
    implementation <span class="token string">&#39;androidx.recyclerview:recyclerview:1.0.0&#39;</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;androidx.lifecycle:lifecycle-extensions:2.1.0&quot;</span></span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;androidx.lifecycle:lifecycle-viewmodel-ktx:2.1.0&quot;</span></span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;androidx.lifecycle:lifecycle-livedata-ktx:2.2.0-alpha05&quot;</span></span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;androidx.work:work-runtime:2.2.0&quot;</span></span>
    implementation <span class="token string">&#39;com.google.android.material:material:1.0.0&#39;</span>
    implementation <span class="token string">&#39;com.squareup.retrofit2:retrofit:2.6.1&#39;</span>
    implementation <span class="token string">&#39;com.squareup.retrofit2:converter-gson:2.6.1&#39;</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.0&quot;</span></span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;org.jetbrains.kotlinx:kotlinx-coroutines-android:1.1.1&quot;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(k,b){const a=c("router-link");return o(),l("div",null,[d,n("nav",u,[n("ul",null,[n("li",null,[e(a,{to:"#android-可用配置"},{default:i(()=>[s("Android 可用配置")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#基础依赖"},{default:i(()=>[s("基础依赖")]),_:1})]),n("li",null,[e(a,{to:"#gradle-version-5-4-1"},{default:i(()=>[s("Gradle Version 5.4.1")]),_:1})])])])])]),v])}const x=t(r,[["render",m],["__file","Android可用配置.html.vue"]]);export{x as default};
