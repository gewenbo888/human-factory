import type { Section } from "@/lib/types";

const sec: Section = {
  id: "money-factory",
  num: 13,
  kicker: { en: "Factory 13 · Capital", zh: "工厂 13 · 资本" },
  title: { en: "The Money Factory", zh: "财富工厂" },
  lead: { en: "The family you are born into is the single most powerful predictor of where you will end up — not because money buys talent, but because it buys time, safety, and the freedom to take risks.", zh: "出身家庭是预测人生终点的最有力变量——不是因为钱能买来天赋，而是因为它能买来时间、安全感，以及敢于冒险的自由。" },
  body: [
    { en: "Economists call it the “great gatsby curve”: countries with high income inequality also show low intergenerational mobility. In the United States, a child born in the bottom fifth of the income distribution has roughly an 8% chance of reaching the top fifth — while a child born at the top enjoys a 36% chance of staying there. The lottery of birth sets the odds before a single decision is made.", zh: "经济学家将此称为“盖茨比曲线”：收入不平等程度高的国家，往往代际流动性也更低。在美国，出生于收入最低五分之一家庭的孩子，晋升至最高五分之一的概率约为8%；而出生于顶层的孩子，留在顶层的概率高达36%。命运的彩票，在第一个选择做出之前便已开奖。" },
    { en: "Wealth does not simply pad comfort — it compounds. High-income families invest an estimated four to six times more in “concerted cultivation” per child: private tutors, enrichment activities, travel, and adult-supervised structured time. Sociologist Annette Lareau documented how these investments create not just knowledge gaps, but social-skill gaps — comfort with institutions, negotiation, self-advocacy — that follow children into adulthood.", zh: "财富不仅仅带来舒适，它还会复利增长。高收入家庭在每个孩子身上投入的“精心培养”费用，估计是低收入家庭的四到六倍：私人家教、兴趣班、旅行、成人监督的结构化时间。社会学家安妮特·拉鲁记录了这些投入如何制造出不只是知识差距，更是社交技能差距——与机构打交道的从容、谈判能力、自我倡导——这些差距会伴随孩子进入成年。" },
    { en: "Risk tolerance is perhaps the most underappreciated gift of wealth. When a safety net exists — parents who can absorb a failed venture, a home to return to — entrepreneurship, creative work, and bold career pivots become rational gambles. Without a net, the same gamble is existential. Research on startup founders consistently finds they are disproportionately drawn from middle- and upper-income families, not because the wealthy are more creative, but because they can afford to be wrong.", zh: "抗风险能力，或许是财富最被低估的馈赠。当安全网存在——父母能够兜底一次失败的创业、有家可以回——创业、创意工作和大胆的职业转型就变成了理性的赌注。没有安全网，同样的赌注便成了生存威胁。对创业者的研究反复发现，他们不成比例地来自中高收入家庭，不是因为富人更有创造力，而是因为他们承受得起犯错。" },
    { en: "Networks, too, are a function of capital. Exclusive schools, golf courses, and alumni dinners are not merely status symbols — they are deal-flow channels. Economist Raj Chetty’s analysis of Ivy League admissions found that students from the top 0.1% are more than twice as likely to attend a highly selective college as equally-talented students from the middle class, largely because of “legacy” preferences and extracurricular advantages money buys. Those networks then compound over a lifetime of referrals, board seats, and co-investment.", zh: "人脉也是资本的函数。精英学校、高尔夫球场、校友晚宴不仅仅是身份符号——它们是交易机会的流通渠道。经济学家拉吉·切蒂对常春藤盟校录取的分析发现，来自收入前0.1%家庭的学生进入顶尖高校的概率，是同等才华中产阶级学生的两倍以上，很大程度上源于“校友优待”和金钱购买的课外优势。这些人脉此后在一生的推荐、董事席位与共同投资中持续复利。" },
    { en: "None of this is destiny. Mobility exists — it is simply constrained. Education, geographic relocation, marriage, and rare-but-real institutional interventions (well-funded public schools, Pell grants, national health systems) have all been shown to shift trajectories. The honest picture is probabilistic: starting wealth widens or narrows the band of likely outcomes without sealing any individual’s fate. Understanding the mechanism is the first step toward changing it — both personally and collectively.", zh: "这一切都不是命运。流动性存在——只是受到约束。教育、地理迁移、婚姻，以及真实存在的制度性干预（资金充足的公立学校、佩尔助学金、全民医疗体系），都被证明能够改变人生轨迹。诚实的图景是概率性的：起点财富拓宽或收窄了可能结果的区间，但并不封死任何个体的命运。理解这一机制，是改变它的第一步——无论是对个人还是对整个社会。" },
  ],
  cards: [
    {
      icon: "🎲",
      title: { en: "The Birth Lottery", zh: "出生彩票" },
      body: { en: "Parental income is the strongest single predictor of a child’s eventual income — stronger than test scores, personality, or effort measured in childhood. The die is partially cast before birth.", zh: "父母收入是预测子女最终收入最强的单一变量——强于童年时期测量的考试成绩、个性或努力程度。骰子在出生前便已部分掷定。" },
    },
    {
      icon: "📚",
      title: { en: "Concerted Cultivation", zh: "精心培养" },
      body: { en: "High-income families structure children’s time with lessons, sports, and arts from infancy, building human capital and institutional confidence. Low-income families rely more on “natural growth” — less structured, yet often rich in autonomy and resilience.", zh: "高收入家庭从婴儿期便以课程、体育和艺术填满孩子的时间，积累人力资本与机构自信。低收入家庭更多依赖“自然成长”——结构较少，却往往富含自主性与韧性。" },
    },
    {
      icon: "🛡️",
      title: { en: "Risk as a Luxury Good", zh: "风险是奢侈品" },
      body: { en: "Entrepreneurship, creative careers, and bold pivots require a financial cushion to absorb failure. Without savings or family backup, the rational move is safety — not ambition. Wealth doesn’t create courage; it funds it.", zh: "创业、创意职业和大胆转型都需要财务缓冲来吸收失败。没有储蓄或家庭兜底，理性的选择是安全而非雄心。财富不创造勇气；它资助勇气。" },
    },
    {
      icon: "🤝",
      title: { en: "Network Capital", zh: "人脉资本" },
      body: { en: "Who you know is often worth more than what you know. Wealthy families access high-value networks through elite schools, clubs, and inherited connections — channels that compound across generations and are nearly invisible to outsiders.", zh: "你认识谁，往往比你知道什么更值钱。富裕家庭通过精英学校、俱乐部和遗传人脉接入高价值网络——这些渠道跨代复利，对局外人几乎不可见。" },
    },
    {
      icon: "🏥",
      title: { en: "Health as Capital", zh: "健康即资本" },
      body: { en: "Chronic stress from poverty — “allostatic load” — measurably impairs cognitive development, immune function, and decision-making. Children raised in material scarcity carry a physiological disadvantage into every classroom and workplace they enter.", zh: "贫困带来的慢性压力——“异稳态负荷”——可测量地损害认知发展、免疫功能和决策能力。在物质匮乏中长大的孩子，带着生理上的劣势进入每一间教室和每一个职场。" },
    },
    {
      icon: "🔄",
      title: { en: "Mobility is Real but Rare", zh: "流动真实但罕见" },
      body: { en: "Every generation produces self-made stories — and they are real. But population-level data shows they are the exception: most people end within one quintile of where they started. Policy, education, and geography can shift those odds significantly.", zh: "每一代都有白手起家的故事——它们是真实的。但人口层面的数据显示，这是例外：大多数人最终停留在起点五分位区间内。政策、教育和地理可以显著改变这些概率。" },
    },
  ],
  questions: [
    {
      q: { en: "Does wealth cause success, or do shared genes explain both?", zh: "财富导致成功，还是共享基因同时解释了两者？" },
      a: { en: "Both operate. Twin and adoption studies show about 40–50% of income variation is heritable, partly through traits like conscientiousness and cognitive ability. But the “causally transmitted” portion of parental wealth — the part that works through money itself — still explains a substantial share of outcomes after controlling for genetics.", zh: "两者都在发挥作用。双胞胎和领养研究显示，约40—50%的收入差异具有遗传性，部分通过尽责性和认知能力等特质传递。但父母财富中“因果传递”的部分——通过金钱本身发挥作用的部分——在控制遗传因素后，仍能解释相当大比例的结果差异。" },
    },
    {
      q: { en: "Which interventions most reliably improve mobility?", zh: "哪些干预措施最可靠地提升流动性？" },
      a: { en: "High-quality early childhood education (evidence from Perry Preschool, Chicago CPC), moving to low-poverty neighborhoods before age 13 (Moving to Opportunity study), and access to higher education with income-contingent repayment all show lasting effects on lifetime earnings. No single lever dominates; stacking them works best.", zh: "高质量的早期儿童教育（来自佩里学前项目、芝加哥CPC的证据）、13岁前迁入低贫困社区（“机会迁移”研究），以及获得配合收入比例还款的高等教育，均对终身收入显示出持久效果。没有单一杠杆占主导；叠加使用效果最佳。" },
    },
  ],
  viz: "comparison",
  vizTitle: { en: "Class & Mobility — How Starting Wealth Shapes a Life", zh: "阶层与流动——起点财富如何塑造人生" },
  comparison: {
    aspect: { en: "How starting wealth shapes opportunity, risk-taking, networks, and mobility", zh: "起点财富如何影响机会、冒险、人脉与流动性" },
    dimensions: [
      { en: "Low-income start", zh: "低收入起点" },
      { en: "Middle-class start", zh: "中产阶级起点" },
      { en: "High-wealth start", zh: "高财富起点" },
    ],
    cells: [
      { en: "Opportunity is narrow and local. Quality schooling depends on zip code; enrichment costs crowd out basics. A single health crisis or job loss can derail years of progress. Talent exists in abundance but often goes unspotted — or is spotted too late.", zh: "机会狭窄而地方化。优质教育取决于邮政编码；兴趣培养的费用挤压基本开支。一次医疗危机或失业便可摧毁多年积累。才华大量存在，却往往被忽视——或被发现得太晚。" },
      { en: "Opportunity broadens but remains contingent. Good schools are accessible if you choose the right suburb or test in. College is attainable — often with debt. One generation’s savings buffer risk modestly; a prolonged setback can slide the family back a tier.", zh: "机会扩大，但仍有条件。好学校可以进入——如果你选对了郊区或通过了考试。大学唾手可得——通常伴随债务。上一代的积蓄能适度缓冲风险；持续的挫折可能让家庭滑落一个层级。" },
      { en: "Opportunity is dense and self-reinforcing. Elite schools, mentors, and alumni networks open doors before formal qualifications matter. Failure is survivable — a failed startup becomes a “learning experience” rather than a crisis. Compound interest works on relationships as much as on money.", zh: "机会密集且自我强化。精英学校、导师和校友网络在正式资质尚未发挥作用之前便已开门。失败是可以承受的——一次失败的创业变成“学习经历”而非危机。复利效应在人际关系上的作用不亚于在金钱上。" },
    ],
  },
  accent: "#e8b34a",
};

export default sec;
