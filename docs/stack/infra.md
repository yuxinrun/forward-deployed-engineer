---
title: '基础设施这一层：只要「改得对」，但约束必须自己扛'
description: '容器、内网离线、气隙环境、边缘硬件、客户自己的云账户——以及一个没人告诉你的事实：采购与权限流程本身就是交付物。'
---

# 基础设施这一层

先给一个能省很多焦虑的判断：**这一层你只需要「能改别人的实现」，不需要「能从零设计平台」——但现场约束那一档例外，必须自己扛。**

对照[技术栈地图](/stack/ai)里的三档深度：Docker/K8s/CI 达到第 2 档就够用；私有化、审计、数据不出域必须达到第 3 档，因为它没有「回头查文档」的机会。

## 这层的真实覆盖率

| 项 | 覆盖 | 原句 | 本站读法 |
|---|---|---|---|
| Docker / Kubernetes | **4/16** | Roboflow："Strong proficiency in Python; experience with systems-level work (Docker, Kubernetes, networking, Linux)." `[A]` | 高频但不是门槛级；写「熟练」的比写「必须」的少 |
| CI/CD + 测试 + 版本控制 | **4/16** | Deloitte（中译）："交付生产级代码，包括测试、CI/CD、日志、版本控制" `[B]` | <b>这四项是"你真的写生产代码"的证据</b>，比任何框架名重要 |
| Linux + 网络 | **2/16** | 国内岗："熟悉 Linux 系统运维…GPU 算力环境配置与调优" `[B]` | 通用 JD 少写，<b>但「边缘/私有化」子类里是硬要求</b> |
| 主流云三选一 | **5/16** | AWS "Experience working with AWS Services" `[A]` | 会一家就够，关键是<b>会读它的权限模型</b> |
| Terraform / IaC | **1/16** | 只在 J&amp;J 的技能标签里出现 `[B]` | 别把它当必备项学；这是「可以让别人扛」那一栏 |
| GPU / 推理优化 / 硬件 | **2/16** | Roboflow "edge computing hardware and constraints (NVIDIA Jetson, industrial cameras)" `[A]` | 属于<b>边缘 FDE 子赛道</b>，不是通用要求 |

::: warning 一个常见的过度准备
「FDE 必须精通 K8s + Terraform + 可观测全家桶」这类说法在本站样本里<b>找不到支撑</b>：Terraform 1/16，可观测性与成本时延在 JD 层面证据最薄（只有国内岗快照与 Google Cloud 岗的二手摘写）`[B]`。真正在正文里被反复写的是<b>测试、日志、版本控制</b>这三件最朴素的事。
:::

## 四种运行环境，难度不是一种量级

<div class="mp-grid">
  <div class="mp-card">
    <p class="mp-eyebrow">Env 01 · 客户云账户</p>
    <h2 class="mp-h2">你写的东西落在别人的账号里</h2>
    <p class="mp-lead">AWS 的组织化模式就是把语义层与部署直接放进<b>客户自己的 AWS 账户</b> <code>[B]</code>。技术难度最低，政治难度最高：账号权限谁给、账单谁付、离职后谁维护，三件事没一件是纯技术问题。交付结束时客户账户里多了一整套「你没写但确实是别人写的」代码。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Env 02 · 混合云 / 私有化</p>
    <h2 class="mp-h2">系统一半在里面，一半在外面</h2>
    <p class="mp-lead">中软的表述最规整："熟悉企业 IT 系统架构（如身份认证、数据库、API 网关、云服务等），理解私有化、混合云等常见企业级部署模式" <code>[B]</code>。难点是<b>身份与数据的双向边界</b>：外面算、里面存；或者反过来。</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Env 03 · 内网 / 气隙</p>
    <h2 class="mp-h2">你的笔记本连不上任何东西</h2>
    <p class="mp-lead">这是中文驻场复盘里出现频率最高的一类约束：券商「代码不能出机房」，开发机在客户侧、评审靠远程 <code>[C]</code>；从业者讲离线环境时给出过 15GB 离线镜像这种量级的准备物 <code>[C]</code>。技术上一句话：<b>所有依赖必须在没有外网的情况下可复现。</b>（气隙 air-gap 指与公网物理隔离的网络。）</p>
  </div>
  <div class="mp-card">
    <p class="mp-eyebrow">Env 04 · 边缘与物理设备</p>
    <h2 class="mp-h2">车间很吵，摄像头很脏</h2>
    <p class="mp-lead">Roboflow 的岗位描述直接点到工业相机与 Jetson <code>[A]</code>；国内的现场版本是半导体工厂驻场、产线数据接入与倒班配合 <code>[C]</code>，以及那位给每台设备记「外号」、亲手贴二维码的工程师 <code>[C]</code>。这一子赛道对「人在现场」的要求最极端。</p>
  </div>
</div>

<EnvSpectrum />

## 上线一条链路，实际要过的五道门

<div class="mp-steps">
  <div class="mp-step">
    <b>01</b>
    <div>
      <strong>权限</strong>
      <p>门禁卡、账号、VPN、跳板机、审批人。<b>Roboflow 甚至把"入职流程 ~5 小时"写进岗位页</b> <code>[B]</code>——甲方流程本身就是交付的一部分，把它当成一个需要工程的模块：列清单、找 owner、留缓冲。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>02</b>
    <div>
      <strong>依赖</strong>
      <p>镜像能不能拉、模型权重从哪来、离线包谁签字带进去。第 03 环境的每一条都会在这一刻收利息。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>03</b>
    <div>
      <strong>出口</strong>
      <p>能不能调用外部 API、数据能不能出域、日志里会不会带敏感字段。OpenAI 那句 "secure and protected information technology systems and related data security obligations" <code>[B]</code> 就是在说这一门。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>04</b>
    <div>
      <strong>观测</strong>
      <p>没有监控的系统不算上线。Deloitte 那句职责里为什么会有「日志」两个字，答案在这里：出事时你要能在<b>客户能接受的方式</b>下知道自己出事了。</p>
    </div>
  </div>
  <div class="mp-step">
    <b>05</b>
    <div>
      <strong>回滚</strong>
      <p>怎么退回上一版、谁有权退、退完之后数据怎么办。第 05 门是「FDE」与「把服务部署上去的人」之间最实的分界——AWS 那句 "own outcomes end-to-end" <code>[A]</code> 落到这里就是一句：<b>你得能把它关回去。</b></p>
    </div>
  </div>
</div>

## 合规词表：会听懂比会做更重要

本站样本里显式写合规条目的 JD 只有 **3/16**：Palantir FDSE 中译「设计数据治理与合规方案（GDPR、HIPAA、FedRAMP）」`[B]`、J&amp;J 的 "AI Governance" 标签 `[B]`、中软的「私有化、混合云」`[B]`。<b>SOC 2 在这批正文里出现 0 次</b>，只出现在解释型文章里。

但这五个词在现场一定会被提到，你需要能立刻接住：

<div class="mp-tags">
  <span>数据驻留 data residency</span>
  <span>SOC 2 审计</span>
  <span>等保 / 信创 / 国产化</span>
  <span>数据不出域</span>
  <span>审计与留痕</span>
  <span>气隙 air-gap</span>
</div>

::: tip 正确姿势
你的目标不是成为合规专家，是<b>在架构讨论里第一时间问出那三个问题</b>：哪些数据不能离开这个房间？谁有权批准例外？出了事要能证明什么？问得出这三句，安全评审从敌人变成同盟军。
:::

<div class="mp-band">
  <div class="mp-band-card">
    <p class="mp-eyebrow">这一层的一句话</p>
    <h2 class="mp-h2">技术难度不在云，在「没有云」</h2>
    <p class="mp-lead">公网可用、依赖能拉、日志有人看的时候，这层的活谁都会。<b>真正拉开差距的是网络断了、包拿不到、审批要两周这三种情况。</b> 准备方式也很朴素：找一个不能上网的虚拟机，把你以为「一条命令就能装好」的东西装一遍。</p>
  </div>
</div>

## 接着读

- [质量这一层：评测、可观测与成本账本](/stack/quality)
- [数据这一层：空值会伪装成正常值](/stack/data)
- [国内现实：甲方、集成商与私有化](/market/china)
- [现场话术与缩写](/field/phrases)
