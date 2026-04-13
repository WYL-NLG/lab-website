/**
 * Person Detail Page — 团队成员详情
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, GraduationCap, BookOpen, Calendar } from "lucide-react";

const AVATARS: Record<string, string> = {
  "邵怡蕾": "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/shao-yilei_91f1a2ed.jpg",
  "文青松": "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/wenqingsong_3094f98b.jpg",
  "吴宗翰": "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/wuzonghan_26c2c942.jpg",
  "汤傲成": "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/tangaocheng_8f24394c.jpg",
  "汪俊霖": "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/wangjunlin_90e79973.jpg",
  "温南夫": "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/wennanfu_b0e1215b.jpg",
  "胡忠博": "/avatars/hu-zhongbo.jpg",
  "郝牧青": "/avatars/hao-muqing.jpg",
  "刘洋": "/avatars/liu-yang.jpg",
  "陆文益": "/avatars/lu-wenyi.jpg",
  "王源龙": "/avatars/wang-yuanlong.jpg",
};

const categories = [
  { key: "professor", label: "教授", color: "oklch(0.52 0.18 270)" },
  { key: "assistant-professor", label: "助理教授", color: "oklch(0.55 0.12 200)" },
  { key: "assistant-researcher", label: "助理研究员", color: "oklch(0.50 0.15 180)" },
  { key: "phd", label: "博士研究生", color: "oklch(0.45 0.20 280)" },
  { key: "master", label: "硕士研究生", color: "oklch(0.55 0.10 150)" },
];

interface Member {
  id: string;
  name: string;
  role: string;
  category: string;
  email?: string;
  bio?: string;
  education?: string[];
  research?: string[];
  publications?: string[];
  recentWorks?: { date: string; title: string; content: string }[];
  policyResults?: string[];
  recentAwards?: string[];
}

const members: Member[] = [
  {
    id: "shao-yilei",
    name: "邵怡蕾",
    role: "教授（创院院长）",
    category: "professor",
    email: "yileishao@sem.ecnu.edu.cn",
    bio: "华东师范大学上海人工智能金融学院院长、教授，华东师范大学上海人工智能金融产业研究院及孵化器主任，联合国大学-华东师范大学人工智能金融联合研究中心主任，普林斯顿大学计算机科学博士。她曾于2021年至2023年担任国际人工智能联合会（IJCAI）中国办公室秘书长，并曾在高盛集团纽约总部任职。作为一位学科跨界的开拓者，她不仅关注人工智能技术在金融领域的应用，更积极探索其在教育和艺术领域的创新融合，并深入思考人工智能的伦理与治理等前沿问题。2025年，她亦首次提出了'硅基经济学'这一新兴理念，致力于从理论到量化地研究智能带来的生产力变革及全球政治经济格局的重塑。",
    education: ["普林斯顿大学计算机科学博士"],
    research: ["人工智能在金融领域的应用", "人工智能在教育和艺术领域的创新融合", "人工智能的伦理与治理", "硅基经济学"],
    publications: [
      "《再见智人，再见'爱人'》，《中国图书评论》，2024年第12期",
      "《生成式人工智能体的世界图景》，《哲学分析》，2024年第3期",
      "《在爱（AI）中：重思AI世的创作》，《电影艺术》，2023年第3期",
    ],
    recentWorks: [
      { date: "2025年2月21日", title: "DeepSeek 与硅基经济学", content: "邵怡蕾教授应邀出席由复旦大学哲学学院、上海社联《探索与争鸣》编辑部主办的'DeepSeek：人工智能的中国时刻？'学术研讨会，并作了题为'DeepSeek 与硅基经济学'的报告。她指出，DeepSeek通过显化'思维粒子'的运动，突破了大语言模型的逻辑推理壁垒，重构智能生产力体系，重塑全球贸易格局，推动中国重返硅基世界的核心。" },
      { date: "2024年11月14日", title: "理性地失控：人类主体性与机器创作的交织", content: "邵怡蕾教授应邀出席2024年中国金鸡百花电影节的金鸡电影论坛·学术论坛，并发表题为《理性地失控：人类主体性与机器创作的交织》的主题演讲。她深入探讨了人类主体性与机器创作在交织与融合中的互动关系，阐释了人行创作的新本体论，并剖析了人类迈入3.0共脑时代所面临的机遇与挑战。" },
      { date: "2024年9月5日", title: "AI全球发展格局与中国身位", content: "邵怡蕾教授出席第六届外滩金融大会（Bund Summit)，并担任外滩圆桌'AI全球发展格局与中国身位：方向、差距与前景'的主席，与微众银行首席人工智能官杨强，中金公司首席经济学家、中金研究院院长彭文生，科大讯飞联合创始人，未来智能董事长胡郁，智谱AI首席执行官张鹏一同探讨全球AI发展的宏观格局以及中国在全球AI格局中的定位和未来前景方向。" },
      { date: "2024年7月31日", title: "AI变革与治理", content: "邵怡蕾教授出席由中国金融四十人论坛（CF40）与美国彼得森国际经济研究所（PIIE）联合主办的CF40-PIIE中美青年圆桌会议第十八期–'AI变革与治理'专题圆桌的主席。她与CF40资深研究员、中国证券监督管理委员会原主席肖钢，PIIE高级研究员Martin Chorzempa，以及北京第四范式智能技术股份有限公司总裁胡时伟共同探讨人工智能技术的发展趋势，以及中美两国在AI研发与全球治理领域深化对话与合作的必要性与重要意义。" },
      { date: "2024年7月6日", title: "从科幻到现实：人形机器人带来的法律思考", content: "邵怡蕾教授出席2024世界人工智能大会WAIC法治论坛并作题为《从科幻到现实：人形机器人带来的法律思考》的主旨报告。她在报告中充分指出人形机器人相关的科研学者应充分关注机器人的法律主体性，并在金融领域的风险管理中得到相应借鉴和启示。" },
      { date: "2024年7月5日", title: "人工智能新进展与社会科学的未来", content: "邵怡蕾教授出席2024世界人工智能大会WAIC中上海市社会科学界联合会主办的'人工智能新进展与社会科学的未来'论坛，并与5位来自国内外的政治学、科学-技术-社会学（STS）、伦理学和量子社会学领域的学者共同参与'智能时代：社会科学何为？'的主题讨论。" },
      { date: "2024年4月25日", title: "联合国大学人工智能国际会议", content: "邵怡蕾教授应邀出席联合国大学驻澳门研究所举办的2024联合国大学人工智能国际会议（UNU Macau AI Conference 2024）。作为'亚太地区的生成式人工智能治理与法律'分论坛的主席，与来自中外的6位人工智能，工程学，政治-经济-哲学，法学以及区域研究等领域的知名专家共同探讨了国际上领先的生成式人工智能发展的治理与法律构建路径。" },
    ],
    policyResults: [
      "2024年2月，应上海市教卫党委邀请约稿，撰写'Sora等人工智能顶尖技术背后团队的组成和特点及对我国该领域人才建设和技术突破的启示'一文。",
      "2024年4月，受上海市教育委员会的委托，与国家教育宏观政策研究院团队共同撰写'人工智能高端人才培养情况调研报告'。",
    ],
  },
  {
    id: "wen-qingsong",
    name: "文青松",
    role: "兼职教授",
    category: "professor",
    email: "qswen@finance.ecnu.edu.cn",
    bio: "华东师范大学上海人工智能金融学院兼职教授，松鼠AI首席科学家与AI研究院院长，牛津大学博士生导师。他曾在Alibaba、Qualcomm、Marvell等全球顶尖科技企业担任重要技术研发领袖，在Georgia Institute of Technology（佐治亚理工学院）获得电子与计算机工程硕士与博士学位。他的研究兴趣涵盖机器学习、数据挖掘和信号处理，特别专注于时间序列人工智能，教育人工智能，大语言模型与智能体等方向。他目前担任IEEE时间序列与时空数据人工智能工作组主席，INNS人工智能教育专委会副主席，并长期担任NeurIPS、ICML、ICLR、KDD、IJCAI、ICASSP等顶会的领域主席，以及担任IEEE Transactions on Pattern Analysis and Machine Intelligence等顶刊的副编辑，并入选福布斯中国最具影响力华人精英TOP 100。",
    education: ["Georgia Institute of Technology (佐治亚理工学院) 电子与计算机工程博士"],
    research: ["机器学习", "数据挖掘", "信号处理", "时间序列人工智能", "教育人工智能", "大语言模型与智能体"],
    publications: [
      "[1] Yaxuan Kong et al., \"Time-MQA: Time Series Multi-Task Question Answering with Context Enhancement,\" ACL 2025. (ACL Main)",
      "[2] Tianlong Xu et al., \"AI-Driven Virtual Teacher for Enhanced Educational Efficiency,\" AAAI 2025. (AAAI/IAAI 2025 Innovative Application Award)",
      "[3] Miao Yu et al., \"A Survey on Trustworthy LLM Agents: Threats and Countermeasures,\" KDD 2025.",
      "[4] Jiaxi Hu et al., \"Improving Nonlinear RNN with Closed-loop Control,\" NeurIPS 2025. (NeurIPS Spotlight, Top 3.5%)",
      "[5] Xiaoming Shi et al., \"Time-MoE: Billion-Scale Time Series Foundation Models with Mixture of Experts,\" ICLR Spotlight, Top 5%.",
      "[6] Shikai Fang et al., \"BayOTIDE: Bayesian Online Multivariate Time Series Imputation with Functional Decomposition,\" ICML 2024. (ICML Spotlight, Top 3.5%)",
      "[7] Qingsong Wen et al., \"Transformers in Time Series: A Survey,\" IJCAI 2023. (Most Influential IJCAI'23 Paper)",
    ],
    recentAwards: [
      "2025 福布斯中国全球最具影响力华人精英Top 100",
      "2025 AAAI创新应用奖",
    ],
  },
  {
    id: "wu-zonghan",
    name: "吴宗翰",
    role: "助理教授",
    category: "assistant-professor",
    email: "zhwu@fem.ecnu.edu.cn",
    bio: "吴宗翰博士是华东师范大学上海人工智能金融学院的助理教授。他于2022年获得悉尼科技大学计算机科学博士学位。他的研究兴趣包括图机器学习和大语言模型，其研究在Google Scholar上的引用次数超过15,000次，并推动了图神经网络在复杂和动态环境下的发展。他的两篇论文被评为KDD 2020和IJCAI 2019的最具影响力论文之一。他的研究荣获2024年IEEE CIS TNNLS杰出论文奖。",
    education: ["悉尼科技大学计算机科学博士"],
    research: ["图机器学习", "大语言模型"],
    publications: [
      "Zonghan Wu, Shirui Pan, Fengwen Chen, Guodong Long, Chengqi Zhang, Philip S. Yu: \"A Comprehensive Survey on Graph Neural Networks,\" IEEE Trans. Neural Networks Learn. Syst. 32(1): 4-24 (2021)",
      "Zonghan Wu, Shirui Pan, Guodong Long, Jing Jiang, Xiaojun Chang, Chengqi Zhang: \"Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks,\" KDD 2020: 753-763",
      "Zonghan Wu, Shirui Pan, Guodong Long, Jing Jiang, Chengqi Zhang: \"Graph WaveNet for Deep Spatial-Temporal Graph Modeling,\" IJCAI 2019: 1907-1913",
    ],
    recentWorks: [
      { date: "", title: "FinAR-Bench", content: "提出面向财务报表分析的大模型基准数据集，系统评测14个大模型在三类核心金融任务中的表现。(https://arxiv.org/pdf/2506.07315)" },
      { date: "", title: "金融幻觉检测器", content: "研发用于识别金融分析报告中事实性与计算性错误的幻觉检测系统，并在2025 WAIC上展出。助力AI在金融领域安全、可靠地落地应用。" },
      { date: "", title: "Awesome-AI-Agents-Live", content: "指导学生开发轻量级AI Agent论文阅读平台，覆盖8,000+篇AI Agent相关领域论文。(https://github.com/SAIFS-AIHub/Awesome-AI-Agents-Live)" },
    ],
    recentAwards: [
      "2024年IEEE神经网络及学习系统会刊最佳论文奖",
    ],
  },
  {
    id: "tang-aocheng",
    name: "汤傲成",
    role: "助理教授",
    category: "assistant-professor",
    email: "actang@fem.ecnu.edu.cn",
    bio: "汤傲成教授是华东师范大学经济与管理学院助理教授，华东师范大学上海人工智能金融学院院长助理。汤教授于2022年8月获得英国剑桥大学博士学位，2023年6月进入华东师范大学担任助理教授，并于2024年入选上海市第十七批BYL计划青年项目。他的研究方向为新兴科技企业的知识产权策略以及人工智能与合成生物企业的产业化进程。他曾承担英国经济与社会科学研究院（ESRC）以及剑桥基金会（Cambridge Trust）联合项目，并获得IEEE科技与工程管理协会年度大会最佳论文奖。",
    education: ["英国剑桥大学 知识产权策略学博士", "英国剑桥大学 工业工程学硕士", "英国帝国理工学院 工程学学士"],
    research: ["知识产权管理", "新兴科技产业化", "高校产学研一体化", "人工智能时代下的知识产权策略"],
    publications: [
      "Tang, A. and Tietze, F. (2021) \"Intellectual Property Strategy Trajectory: A New Visualisation Approach,\" in 2021 R&D Management Conference.",
      "Tang, A., Tietze, F. and Molloy, J. (2019) \"Openness in Intellectual Property Strategies of Synthetic Biology Start-ups,\" in 2019 IEEE Technology & Engineering Management Conference (TEMSCON). IEEE, pp. 1-6.",
    ],
    recentAwards: [
      "2024年入选上海市第十七批BYL计划青年项目",
      "2019年荣获IEEE TEMSCON技术与工程管理大会最佳论文奖",
    ],
  },
  {
    id: "wang-junlin",
    name: "汪俊霖",
    role: "助理研究员",
    category: "assistant-researcher",
    email: "jlwang@sem.ecnu.edu.cn",
    bio: "汪俊霖研究员专注于金融大语言模型研发，创新并完善模型整体设计框架，实现大模型理解金融逻辑的方法与路径。针对'幻觉'问题，设计了可用于复杂金融分析中的模型和工作路径。在加入上海人工智能金融学院之前，汪俊霖曾任职于多家世界顶级私募股权，对冲基金，及投资银行，并于任职期间成功执行了总额约300亿元的投资及资产管理工作。熟悉杠杆收购、平台投资、夹层贷款及特殊机会投资等多种复杂的投资策略，并对这些策略的实际操作流程有深入了解，包括交易获取、研究分析、尽职调查、商业谈判、合同起草、境内外架构构建及银团融资等关键环节。",
    education: ["哥伦比亚大学商学院 会计与基本面分析硕士"],
    research: ["人工智能", "金融", "基本面分析", "私募股权", "对冲基金"],
  },
  {
    id: "wen-nanfu",
    name: "温南夫",
    role: "助理研究员",
    category: "assistant-researcher",
    email: "nfwen@sem.ecnu.edu.cn",
    bio: "温南夫研究员长期致力于推动数字化技术在跨学科领域的创新应用，尤其专注人工智能在宏观金融领域的实践。他结合数学建模与数据驱动方法，探索AI在风险管理、风险定义及金融市场分析中的应用，致力于构建智能化金融决策系统，以提升金融行业的精准度与稳定性。在实际应用方面，他曾主导2022年北京冬奥会数字化餐饮管理系统的研发，推动数据标准化、智能分析及可视化应用。此外，他与银行机构深度合作，共同推进数字人民币的应用试点，在银行业数据安全、系统集成及智能支付等领域积累了丰富的实践经验。未来，他希望进一步推动AI在金融科技和可持续发展领域的深度融合，助力金融行业的数字化转型，优化风险管理体系，并通过科技创新支持可持续金融，为社会经济的长期稳定增长提供技术支撑。",
    education: ["南加州大学 应用数学硕士", "玛丽埃塔学院 数学、应用物理学士"],
    research: ["数据驱动的场景应用，涵盖人工智能金融领域"],
    recentAwards: [
      "国家发明专利：流程化数据处理系统",
      "国家发明专利：基于流程化数据处理系统的可视化管控信息系统",
    ],
  },
  {
    id: "hu-zhongbo",
    name: "胡忠博",
    role: "博士研究生",
    category: "phd",
    email: "5229441003@stu.ecnu.edu.cn",
    bio: "华东师范大学上海人工智能金融学院在读博士生，研究方向有数字经济、人工智能与金融，在《经济学家》《软科学》等期刊发表过文章；主持过省级项目一项。",
    education: ["2025年于杭州电子科技大学获经济学硕士"],
    research: ["数字经济", "人工智能与金融"],
    recentWorks: [
      { date: "", title: "大语言模型驱动下的ABM模拟实验", content: "" },
    ],
    publications: [
      "张辽,胡忠博.数据要素化对共同富裕程度的影响研究[J].软科学,2024,38(11):18-25+33.",
      "张辽,胡忠博,陈松.全球产业链重构下保障中国产业链安全的逻辑思维与战略取向[J].经济学家,2024,(03):35-44.",
    ],
  },
  {
    id: "liu-yang",
    name: "刘洋",
    role: "博士研究生",
    category: "phd",
    email: "52294419005@stu.ecnu.edu.cn",
    bio: "刘洋，湖北武汉人。2022年-2025年任经济统计学专任教师，第七届全国高校经管类实验教学案例大赛全国总决赛教师组特等奖得主。",
    education: [
      "湖南大学 应用统计 硕士",
      "湖北经济学院 金融学 本科",
    ],
    research: ["人工智能金融"],
    recentWorks: [
      { date: "", title: "港股年报爬虫系统", content: "" },
    ],
    publications: [],
  },
  {
    id: "lu-wenyi",
    name: "陆文益",
    role: "博士研究生",
    category: "phd",
    email: "51274419026@stu.ecnu.edu.cn",
    bio: "拥有较强的理科学科背景，本科专业为数学与应用数学，获取理学学士学位。自本科毕业起，一直从事数学教学工作，先后在新东方集团和北京中公教育集团任职，工作内容包括在全国15个省会城市以班级形式面授考研数学课程，包括高等数学，线性代数，概率论与数理统计的基础，强化，提高，冲刺各个阶段课程。",
    education: [
      "本科专业为数学与应用数学，获取理学学士学位",
      "硕士阶段学习和修读完成经济学和金融学基本课程，包括高级微观经济学、高级计量经济学、高级宏观经济学、高级国际经济学、西方经济学流派、高阶量化研究方法、高级货币金融学、公司治理、高级国际金融学、证券投资、金融数学等",
    ],
    research: ["金融市场", "人工智能与机器学习", "货币与汇率理论"],
    recentWorks: [
      { date: "", title: "智能体在科研场景中的应用", content: "基于OpenClaw探索智能体在科研场景中的应用，协助科研团队完成文献调研、数据整理、报告撰写等日常工作，提升团队整体效率" },
      { date: "", title: "ABM理论与大语言模型融合", content: "系统利用ABM理论与方法，并结合大语言模型的最新进展，探索两者在复杂系统仿真中的融合应用路径" },
    ],
    publications: [],
  },
  {
    id: "wang-yuanlong",
    name: "王源龙",
    role: "博士研究生",
    category: "phd",
    email: "15720231152638@stu.xmu.edu.cn",
    bio: "王源龙，厦门大学经济学院世界经济学专业硕士在读，本科毕业于中南大学商学院国际经济与贸易专业。曾参与美国政府军事支出数据库构建、全球经济风险分析等科研项目，协助开发《国际商法》慕课课程，作为核心成员完成一项国家级大学生创新创业项目，获优秀结题。",
    education: [
      "2026.09- 华东师范大学，经济与管理学院 金融学/人工智能，博士",
      "2023.09 - 2026.06 厦门大学，经济学院，世界经济，硕士",
      "2019.09 - 2023.06 中南大学，经济学，国际经济与贸易，学士",
    ],
    research: ["宏观实证", "财政政策", "ABM建模"],
    recentWorks: [
      { date: "", title: "ABM宏观经济建模", content: "" },
    ],
    publications: [],
  },
  {
    id: "hao-muqin",
    name: "郝牧青",
    role: "硕士研究生",
    category: "master",
    email: "51284419005@stu.ecnu.edu.cn",
    bio: "华东师范大学上海人工智能金融学院首届硕士研究生。研究方向为金融大语言模型与跨市场结构化推理，关注如何用本体论（Ontology）方法为LLM构建可解释的金融推理能力。目前正在构建 OntologyX 硅基价值链估值沙盘，探索用大语言模型实现基本面分析的动力学预测。该项目是SAIFS-FinNet金融科教语料库生态中首个公司金融垂直应用。作为学院「上海人工智能金融指数」研究项目成员，全栈开发并部署了GAIFC全球AI金融中心指数可视化平台（gaifc.org.cn/gaifc），并参与编制《全球金融科技中心发展指数》年度报告。其他工作包括：FinNet多模态金融语料库核心开发、中国职业AI暴露度图谱研究、创立 Agent Coffee 可信AI教育平台。此前曾在招商证券投行部实习。",
    education: [
      "2025.09 - 至今　华东师范大学，上海人工智能金融学院，硕士",
      "2021.09 - 2025.06　中南大学，金融学，学士",
    ],
    research: ["金融大模型", "本体推理", "硅基经济学", "金融智能体"],
    recentWorks: [
      { date: "", title: "OntologyX 硅基价值链估值沙盘", content: "探索用大语言模型实现基本面分析的动力学预测，是SAIFS-FinNet金融科教语料库生态中首个公司金融垂直应用" },
      { date: "", title: "GAIFC 全球AI金融中心指数可视化平台", content: "全栈开发并部署GAIFC全球AI金融中心指数可视化平台（gftci.org.cn/gaifc），并参与编制《全球金融科技中心发展指数》年度报告" },
      { date: "", title: "FinNet多模态金融语料库", content: "核心开发人员" },
      { date: "", title: "中国职业AI暴露度图谱研究", content: "研究成员" },
      { date: "", title: "Agent Coffee", content: "创立可信AI教育平台" },
    ],
    publications: [],
  },
];

function getCategoryInfo(categoryKey: string) {
  return categories.find((c) => c.key === categoryKey) || categories[0];
}

export default function PersonDetail() {
  const params = useParams<{ id: string }>();
  const member = members.find((m) => m.id === params.id);

  if (!member) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <h1 className="text-2xl font-display">未找到该成员</h1>
          <Link href="/team" className="text-primary mt-4 inline-block">
            返回团队页面
          </Link>
        </div>
      </div>
    );
  }

  const catInfo = getCategoryInfo(member.category);
  const avatarUrl = AVATARS[member.name];

  return (
    <div>
      <section className="pt-32 pb-16">
        <div className="container">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            返回团队页面
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-6 mb-6"
          >
            {avatarUrl ? (
              <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-primary/10 shrink-0">
                <img src={avatarUrl} alt={member.name} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-display text-white/90 shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${catInfo.color}, color-mix(in oklch, ${catInfo.color} 70%, oklch(0.3 0 0)))`,
                }}
              >
                {member.name.slice(0, 1)}
              </div>
            )}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-2">
                {member.name}
              </h1>
              <p className="text-lg text-muted-foreground">{member.role}</p>
              <span
                className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: `color-mix(in oklch, ${catInfo.color} 12%, transparent)`, color: catInfo.color }}
              >
                {catInfo.label}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base text-muted-foreground max-w-2xl leading-relaxed"
          >
            {member.bio}
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen size={20} style={{ color: catInfo.color }} />
                  <h2 className="text-xl font-display text-foreground">研究方向</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.research?.map((r, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-sm"
                      style={{ backgroundColor: `color-mix(in oklch, ${catInfo.color} 10%, transparent)`, color: catInfo.color }}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {member.publications && member.publications.length > 0 && (
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap size={20} style={{ color: catInfo.color }} />
                    <h2 className="text-xl font-display text-foreground">近期发表</h2>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {member.publications.map((pub, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: catInfo.color }} />
                        {pub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.recentWorks && member.recentWorks.length > 0 && (
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar size={20} style={{ color: catInfo.color }} />
                    <h2 className="text-xl font-display text-foreground">近期工作</h2>
                  </div>
                  <div className="flex flex-col gap-6">
                    {member.recentWorks.map((work, i) => (
                      <div key={i} className="border-l-2 pl-4" style={{ borderColor: catInfo.color }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium" style={{ color: catInfo.color }}>{work.date}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-foreground mb-2">{work.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{work.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {member.policyResults && member.policyResults.length > 0 && (
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen size={20} style={{ color: catInfo.color }} />
                    <h2 className="text-xl font-display text-foreground">资政成果</h2>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {member.policyResults.map((result, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: catInfo.color }} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.recentAwards && member.recentAwards.length > 0 && (
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar size={20} style={{ color: catInfo.color }} />
                    <h2 className="text-xl font-display text-foreground">近期获奖</h2>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {member.recentAwards.map((award, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: catInfo.color }} />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-xl font-display text-foreground mb-6">背景信息</h2>
                
                {member.education && member.education.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap size={16} className="text-muted-foreground" />
                      <h3 className="text-sm font-semibold text-foreground">教育背景</h3>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {member.education.map((edu, i) => (
                        <li key={i} className="text-sm text-muted-foreground">{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-4">联系方式</h3>
                  {member.email ? (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                    >
                      <Mail size={14} />
                      {member.email}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">暂无邮箱信息</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
