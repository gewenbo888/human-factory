import type { Section } from "@/lib/types";

const sec: Section = {
  id: "decision-factory",
  num: 14,
  kicker: { en: "Factory 14 · Choice", zh: "工厂 14 · 抉择" },
  title: { en: "The Decision Factory", zh: "决策工厂" },
  lead: { en: "A life is not built in a single grand moment — it is assembled one small fork in the road at a time, each choice narrowing the next, until the accumulated weight of ten thousand micro-decisions becomes the person you are.", zh: "人生不是在某个宏大时刻建成的——它在一个又一个微小的岔路口被逐步拼装，每一个选择都在收窄下一个选择的空间，直到一万个微小决策的累积重量，成为你这个人。" },
  body: [
    { en: "Behavioral economists call it “path dependence”: early choices alter the landscape of available choices downstream. The student who takes one extra AP course gains a GPA advantage; the GPA advantage opens a selective college door; the selective college delivers a network that compounds for decades. None of these effects were visible at the moment of choosing. The power of decisions lies precisely in this invisibility — consequences arrive long after the decision is forgotten.", zh: "行为经济学家称之为“路径依赖”：早期选择改变了下游可用选择的格局。多选一门AP课的学生获得了GPA优势；GPA优势打开了精英大学的大门；精英大学带来的人脉在数十年里持续复利。这些影响在做选择的那一刻都是不可见的。决策的力量正在于这种不可见性——后果在决策被遗忘很久之后才姗姗而来。" },
    { en: "The compounding logic applies symmetrically to avoidance. Not choosing a career — drifting — is itself a choice. Staying in a relationship past its useful life forecloses alternatives that will never be seen. Delaying investment by a decade at 7% annual return costs roughly half the final portfolio. Inaction has compound interest too, accruing quietly against you.", zh: "复利逻辑对回避同样适用。不选择职业——随波逐流——本身就是一种选择。在一段关系中停留过久，封闭了永远不会出现的替代可能。以7%年回报率推算，将投资推迟十年，最终组合价值大约损失一半。不作为也有复利，只是悄悄地在你身上累积。" },
    { en: "Research on decision quality finds that most people systematically overweight immediate costs and underweight long-term returns — a bias called “hyperbolic discounting.” The discomfort of studying tonight feels larger than the abstract benefit of a degree years away. This is not irrationality in a moral sense; it is a cognitive architecture shaped by evolutionary pressures that rewarded immediate action. Understanding the bias does not erase it, but it creates room for designed environments: automatic enrollment in pensions, pre-committed savings, and accountability partners all exploit the architecture to serve long-term selves.", zh: "关于决策质量的研究发现，大多数人系统性地高估即时成本、低估长期回报——这一偏差被称为“双曲贴现”。今晚学习的不适感，比数年后获得学位的抽象收益更真实。这不是道德意义上的非理性；而是被进化压力塑造的认知架构，那些压力奖励的是即时行动。理解这一偏差无法消除它，但能为设计性环境腾出空间：养老金自动加入、预承诺储蓄和问责伙伴，都在利用这一架构服务长远自我。" },
    { en: "Not all decisions are created equal. Stanford psychologist Chip Heath distinguishes “process decisions” — where better information-gathering improves outcomes — from “commitment decisions” — where the act of deciding and not second-guessing is itself the key variable. Marriage, having children, and choosing a city work best when treated as commitments rather than perpetually optimized options. The paradox of choice research (Schwartz, Iyengar) suggests that beyond a threshold, more options erode satisfaction: the best choosers are often those who decide well and then stop deciding.", zh: "并非所有决策都生而平等。斯坦福心理学家奇普·希思区分了“过程性决策”——更好地收集信息能改善结果——和“承诺性决策”——决定本身以及不再犹疑的行为才是关键变量。婚姻、生育和选择城市，当被视为承诺而非持续优化的选项时效果最佳。选择悖论研究（施瓦茨、伊扬格）表明，超过某个阈值后，更多选项会侵蚀满意度：最好的选择者往往是那些做出好决策后便停止选择的人。" },
    { en: "Agency is real, but it is not equally distributed. Decisions made under scarcity — of money, time, attention, or safety — are cognitively taxed in ways that decisions made in abundance are not. The “bandwidth tax” of poverty (Mullainathan & Shafir) shows that managing financial crisis consumes working memory that is then unavailable for long-term planning. Good decisions require not just willpower but slack — the cognitive and material buffer that makes quality deliberation possible. Expanding that slack, personally and collectively, may be the most underrated decision of all.", zh: "能动性是真实的，但并非平等分配。在匮乏——金钱、时间、注意力或安全感——中做出的决策，承受着丰裕条件下不存在的认知税。贫困的“带宽税”（穆莱纳坦与沙菲尔）表明，应对财务危机会消耗工作记忆，使长期规划所需的认知资源不再可用。好的决策不仅需要意志力，还需要余裕——使高质量审慎成为可能的认知与物质缓冲。扩展这种余裕——无论是个人层面还是集体层面——或许是所有决策中最被低估的一个。" },
  ],
  cards: [
    {
      icon: "🎓",
      title: { en: "Education", zh: "教育" },
      body: { en: "Staying one more year in school vs. entering the workforce early produces wage premiums that compound across a career. But the decision is made at 17, often with incomplete information, under family pressure, and with present bias working against future returns.", zh: "多读一年学校与提前进入职场相比，会带来在整个职业生涯中持续复利的薪酬溢价。但这个决定在17岁时做出，往往信息不完整、承受家庭压力，且现时偏误对抗着未来回报。" },
    },
    {
      icon: "💼",
      title: { en: "Career", zh: "职业" },
      body: { en: "Choosing a field at 22 shapes income, identity, network, and geography for decades. Research on occupational switching shows that each year in a mismatched career raises the switching cost — not just economically, but psychologically, as identity fuses with role.", zh: "在22岁选择一个领域，会在数十年内塑造收入、身份、人脉和地理位置。关于职业转换的研究显示，在错配职业中度过的每一年都会提升转换成本——不仅是经济上的，也是心理上的，因为身份与角色逐渐融合。" },
    },
    {
      icon: "💑",
      title: { en: "Relationships", zh: "关系" },
      body: { en: "Who you choose as a long-term partner affects not only happiness but health, income, geography, and the social capital you access. Married people in OECD countries report higher life satisfaction on average — but the quality of the match matters far more than the fact of it.", zh: "选择谁作为长期伴侣，不仅影响幸福感，还影响健康、收入、地理位置和你能接触到的社会资本。OECD国家已婚人士平均报告更高的生活满意度——但匹配质量的重要性远超婚姻这一事实本身。" },
    },
    {
      icon: "📈",
      title: { en: "Investments", zh: "投资" },
      body: { en: "Starting to invest at 25 vs. 35 — assuming identical contributions and a 7% annual return — produces roughly twice the final portfolio by 65. No other single financial decision has the same leverage. Yet the decision feels low-stakes precisely when its stakes are highest.", zh: "从25岁开始投资与从35岁开始——假设相同的投入金额和7%的年回报率——到65岁时最终组合价值相差约一倍。没有其他任何单一财务决策具有同等杠杆。然而，这个决定在其影响最深远的时候，感觉恰恰最无足轻重。" },
    },
    {
      icon: "🌍",
      title: { en: "Migration", zh: "迁移" },
      body: { en: "Moving — to a different city, region, or country — is one of the highest-return decisions a person can make, and one of the least taken. Research shows that rural-to-urban movers in developing countries see wage gains of 30–100% almost immediately. Geographic inertia is real, driven by family ties, risk aversion, and identity anchoring.", zh: "迁移——到不同的城市、地区或国家——是一个人能做出的回报最高的决策之一，也是最少被采取的决策之一。研究显示，发展中国家从农村迁入城市的人，几乎立即获得30—100%的工资增长。地理惰性是真实的，由家庭纽带、风险规避和身份锚定驱动。" },
    },
    {
      icon: "⏳",
      title: { en: "Timing", zh: "时机" },
      body: { en: "The same decision made five years earlier or later can yield radically different outcomes. Graduating into a recession vs. a boom permanently scars early earnings trajectories. Founding a startup before a technology wave vs. after shapes whether you are a pioneer or a latecomer.", zh: "同样的决策提前或推迟五年，可能产生截然不同的结果。在经济衰退期与繁荣期毕业，会永久性地损伤早期收入轨迹。在技术浪潮之前与之后创办公司，决定了你是先驱者还是追赶者。" },
    },
  ],
  questions: [
    {
      q: { en: "Can we actually make better decisions, or is it mostly post-hoc rationalization?", zh: "我们真的能做出更好的决策，还是这大多是事后合理化？" },
      a: { en: "The evidence is cautiously optimistic. Pre-mortems (imagining failure before it happens), structured decision journals, diverse advisory groups, and separating data-gathering from choosing all improve outcomes in measurable ways. But the gains are modest and require sustained effort — there is no decision-making upgrade that installs cleanly.", zh: "证据持谨慎乐观态度。事前验尸（在失败发生前想象失败）、结构化决策日记、多元化顾问团队，以及将信息收集与做决定分开，都能以可测量的方式改善结果。但收益是适度的，需要持续努力——没有任何决策升级能被干净地安装进去。" },
    },
    {
      q: { en: "Is the emphasis on individual choice a way of avoiding structural explanations?", zh: "强调个人选择，是不是在回避结构性解释？" },
      a: { en: "Yes and no. Choice matters within the space that structure allows. But the size of that space varies enormously: someone born in rural poverty makes different decisions under different constraints than someone born into abundance. The honest framing acknowledges both — structure sets the probability distribution; choice moves you within it.", zh: "是也不是。选择在结构允许的空间内发挥作用。但这个空间的大小差异巨大：出生于农村贫困的人，在不同约束下做出不同的决策，与出生于富足环境者迥异。诚实的框架承认两者：结构设定了概率分布；选择在其中移动你的位置。" },
    },
  ],
  viz: "cards",
  accent: "#6ee0a0",
};

export default sec;
