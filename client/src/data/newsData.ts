export interface NewsItem {
  id: string;
  folder: string;
  date: string;
  titleZh: string;
  titleEn: string;
  excerptZh: string;
  excerptEn: string;
  coverImage: string;
}

export interface NewsDetailItem extends NewsItem {
  content: string;
}

export const newsList: NewsItem[] = [
  {
    id: "11",
    folder: "文理交叉跨学科培育项目 _ 汤傲成助理教授：《AI职业暴露与劳动力市场重构——多维异质性分析与多智能体动态仿真》_with_images",
    date: "2026-05-08",
    titleZh: "文理交叉跨学科培育项目｜汤傲成助理教授：《AI职业暴露与劳动力市场重构——多维异质性分析与多智能体动态仿真》",
    titleEn: "Interdisciplinary Cultivation Program | Dr. Tang Aocheng: AI Occupational Exposure and Labor Market Restructuring",
    excerptZh: "以大语言模型为核心的生成式人工智能技术自2022年底以来快速扩散，深刻改变了全球劳动力市场的任务分工结构...",
    excerptEn: "Generative AI technology centered on large language models has spread rapidly since late 2022, profoundly changing the task division structure of the global labor market...",
    coverImage: "/avatars/新闻动态/文理交叉跨学科培育项目 _ 汤傲成助理教授：《AI职业暴露与劳动力市场重构——多维异质性分析与多智能体动态仿真》_with_images/cover.jpeg",
  },
  {
    id: "12",
    folder: "精品力作培育项目 _ 邵怡蕾教授：《硅基经济学——面向AGI时代的中国自主经济学理论体系建构》_with_images",
    date: "2026-05-08",
    titleZh: "精品力作培育项目｜邵怡蕾教授：《硅基经济学——面向AGI时代的中国自主经济学理论体系建构》",
    titleEn: "Excellence Cultivation Program | Professor Shao Yilei: Silicon-based Economics",
    excerptZh: "当下，建立在西方新古典经济学碳基假设之上的既有理论框架已难以有效解释AGI带来的深层冲击...",
    excerptEn: "Existing theoretical frameworks based on Western neoclassical economics' carbon-based assumptions struggle to explain the profound impacts brought by AGI...",
    coverImage: "/avatars/新闻动态/精品力作培育项目 _ 邵怡蕾教授：《硅基经济学——面向AGI时代的中国自主经济学理论体系建构》_with_images/cover.jpeg",
  },
  {
    id: "13",
    folder: "华东师范大学校长马余刚院士一行调研上海人工智能金融学院",
    date: "2026-03-24",
    titleZh: "华东师范大学校长马余刚院士一行调研上海人工智能金融学院",
    titleEn: "Dean Ma Yugang of ECNU Visits Shanghai AI-Finance School",
    excerptZh: "2026年3月24日上午，华东师范大学校长、中国科学院院士马余刚率队赴上海人工智能金融学院（SAIFS）开展专项调研...",
    excerptEn: "On the morning of March 24, 2026, Dean Ma Yugang of ECNU led a team to visit SAIFS for a special research session...",
    coverImage: "/avatars/新闻动态/华东师范大学校长马余刚院士一行调研上海人工智能金融学院/images/cover.jpeg",
  },
  {
    id: "14",
    folder: "1U7国际视野系列 _ 普林斯顿校友新书分享会：写给当代人看的丝绸之路_with_images",
    date: "2024-03-13",
    titleZh: "U7国际视野系列｜普林斯顿校友新书分享会：写给当代人看的丝绸之路",
    titleEn: "U7 International Perspective: Princeton Alumni Silk Road Book Sharing",
    excerptZh: "2015年作者彭英之设计了一个月的陆路出行计划，从西安抵达德黑兰，将沿途当代见闻与历史交织，写成《丝路北道》...",
    excerptEn: "In 2015, author Peng Yingzhi planned a one-month overland journey from Xi'an to Tehran...",
    coverImage: "/avatars/新闻动态/1U7国际视野系列 _ 普林斯顿校友新书分享会：写给当代人看的丝绸之路_with_images/images/cover.jpeg",
  },
  {
    id: "15",
    folder: "2SAIFS华师大智金院｜启航：人工智能与金融的深度融合之旅_with_images",
    date: "2024-03-13",
    titleZh: "SAIFS华师大智金院｜启航：人工智能与金融的深度融合之旅",
    titleEn: "SAIFS: Embarking on the Journey of AI-Finance Integration",
    excerptZh: "上海人工智能金融学院（简称SAIFS）于2023年在华东师范大学成立，是全球首家围绕人工智能与金融跨界交叉打造的教育和研究机构...",
    excerptEn: "Shanghai AI-Finance School (SAIFS) was established at ECNU in 2023, the world's first educational and research institution focused on AI-finance cross-disciplinary integration...",
    coverImage: "/avatars/新闻动态/2SAIFS华师大智金院｜启航：人工智能与金融的深度融合之旅_with_images/images/cover.jpeg",
  },
  {
    id: "16",
    folder: "3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images",
    date: "2024-03-18",
    titleZh: "常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪",
    titleEn: "Ivy International Perspective Series: Princeton Alumni Book Sharing - Silk Road Insights",
    excerptZh: "3月16日周六下午，由普林斯顿上海校友会和上海人工智能金融学院联合举办的首场常春藤国际视野系列活动顺利举行...",
    excerptEn: "On Saturday March 16, the first Ivy International Perspective Series event co-hosted by Princeton Shanghai Alumni Association and SAIFS was successfully held...",
    coverImage: "/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/cover.jpeg",
  },
  {
    id: "17",
    folder: "4开启人工智能金融新纪元：人工智能金融MBA项目发布会暨2025年MBA入学招生政策发布会_with_images",
    date: "2024-03-19",
    titleZh: "开启人工智能金融新纪元：人工智能金融MBA项目发布会暨2025年MBA入学招生政策发布会",
    titleEn: "AI-Finance MBA Program Launch & 2025 Admission Policy Release",
    excerptZh: "随着AI技术的不断突破，我们正站在一场前所未有的产业变革潮头...",
    excerptEn: "With continuous breakthroughs in AI technology, we stand at the forefront of an unprecedented industrial transformation...",
    coverImage: "/avatars/新闻动态/4开启人工智能金融新纪元：人工智能金融MBA项目发布会暨2025年MBA入学招生政策发布会_with_images/images/cover.jpeg",
  },
  {
    id: "18",
    folder: "5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images",
    date: "2024-03-29",
    titleZh: "创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！",
    titleEn: "Innovation Leads: ECNU AI-Finance MBA Program Launched",
    excerptZh: "3月24日周日下午，华东师范大学人工智能金融MBA项目发布会在普陀校区逸夫楼一楼报告厅圆满举行...",
    excerptEn: "On Sunday March 24, the ECNU AI-Finance MBA Program Launch was successfully held at the Putuo Campus...",
    coverImage: "/avatars/新闻动态/5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images/images/cover.jpeg",
  },
  {
    id: "19",
    folder: "6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images",
    date: "2024-04-07",
    titleZh: "以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行",
    titleEn: "Problem-Oriented, Innovation-Driven: First Meeting of SAIFS First Council Successfully Held",
    excerptZh: "4月3日周三上午，华东师范大学上海人工智能金融学院第一届理事会第一次会议在普陀校区理科大楼A508会议室召开...",
    excerptEn: "On Wednesday morning, April 3, the first meeting of the first council of SAIFS was held at the Putuo Campus...",
    coverImage: "/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/cover.jpeg",
  },
];