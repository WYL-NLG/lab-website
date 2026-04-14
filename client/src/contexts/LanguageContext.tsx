import { createContext, useContext, useState, useEffect } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") as Language || "zh";
    }
    return "zh";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    const translations: Record<string, Record<Language, string>> = {
      "nav.home": { zh: "首页", en: "Home" },
      "nav.about": { zh: "关于我们", en: "About" },
      "nav.team": { zh: "研究团队", en: "Team" },
      "nav.projects": { zh: "研究项目", en: "Projects" },
      "nav.papers": { zh: "发表论文", en: "Papers" },
      "nav.news": { zh: "新闻动态", en: "News" },
      "nav.opportunities": { zh: "机会", en: "Opportunities" },
      "hero.subtitle": { zh: "Shanghai AI-Finance School, ECNU", en: "Shanghai AI-Finance School, ECNU" },
      "hero.title1": { zh: "华东师范大学", en: "East China Normal University" },
      "hero.title2": { zh: "上海人工智能", en: "Shanghai Artificial Intelligence" },
      "hero.title3": { zh: "金融学院", en: "Finance School" },
      "hero.desc": { zh: "我们培养的是将人工智能与金融智慧融入世界的未来塑造者", en: "We nurture future shapers who integrate AI and finance into the world" },
      "hero.author": { zh: "— 创院院长 邵怡蕾教授", en: "— Dean, Prof. Shao Yilei" },
      "hero.learnMore": { zh: "了解更多", en: "Learn More" },
      "hero.researchTeam": { zh: "研究团队", en: "Research Team" },
      "stats.year": { zh: "创立年份", en: "Founded" },
      "stats.centers": { zh: "研究中心", en: "Research Centers" },
      "stats.members": { zh: "核心成员", en: "Core Members" },
      "stats.first": { zh: "全球首家", en: "World's First" },
      "centers.title": { zh: "研究中心", en: "Research Centers" },
      "centers.learnMore": { zh: "了解更多", en: "Learn More" },
      "news.title": { zh: "最新动态", en: "Latest News" },
      "news.viewAll": { zh: "查看全部", en: "View All" },
      "news.readMore": { zh: "阅读更多", en: "Read More" },
      "cta.title": { zh: "加入我们，塑造未来", en: "Join Us, Shape the Future" },
      "cta.desc": { zh: "SAIFS 致力于培养集金融知识、人工智能技术和实践经验于一身的新一代 AI-Fin 领军型卓越人才。", en: "SAIFS cultivates a new generation of AI-Fin talents with financial knowledge, AI expertise, and practical experience." },
      "cta.viewOpportunities": { zh: "查看机会", en: "View Opportunities" },
      "cta.contactUs": { zh: "联系我们", en: "Contact Us" },
      "footer.quickLinks": { zh: "快速链接", en: "Quick Links" },
      "footer.contact": { zh: "联系方式", en: "Contact" },
      "footer.copyright": { zh: "© 2026 上海人工智能金融学院 SAIFS. All rights reserved.", en: "© 2026 Shanghai AI-Finance School SAIFS. All rights reserved." },
      "footer.ecnu": { zh: "华东师范大学 East China Normal University", en: "East China Normal University" },
      "about.hero": { zh: "学院介绍", en: "About SAIFS" },
      "about.intro1": { zh: "华东师范大学，简称华东师大，是中国著名的综合性研究型大学，位列国家双一流、985和211工程。华东师大成立于1951年10月16日，是以大夏大学（1924年）和光华大学（1925年）为基础，在大夏大学原址上创办的。", en: "East China Normal University (ECNU) is a prestigious comprehensive research university in China, listed in the Double First Class, 985, and 211 projects. Founded on October 16, 1951, it was established on the site of the former Daxia University (1924) and Guanghua University (1925)." },
      "about.intro2": { zh: "科技的迅速发展，特别是人工智能（AI）的飞跃进步，作用于金融业对于更高效、更安全、更智能的解决方案的持续需求，便催生出了新生的人工智能金融（AI-Fin）。AI-Fin 不同于 FinTech，也不同于 TechFin，AI 与金融的结合将以迅猛的速度前所未有的颠覆金融业的微观格局与世界政治经济格局。", en: "The rapid development of technology, especially artificial intelligence (AI), combined with the financial industry's continuous demand for more efficient, secure, and intelligent solutions, has given birth to a new field: AI-Fin. AI-Fin differs from FinTech and TechFin - the integration of AI and finance will swiftly and unprecedentedly transform the micro-structure of the financial industry and the global political economy." },
      "about.intro3": { zh: "上海人工智能金融学院（简称SAIFS）于2023年在华东师范大学成立，是全球首家围绕人工智能与金融跨界交叉打造的教育和研究机构。SAIFS强调在超越知识点的通识教育的基础上，培养集金融知识、人工智能技术和实践经验于一身的新一代人工智能金融（AI-Fin）领军型卓越人才。", en: "The Shanghai Artificial Intelligence Finance School (SAIFS) was established at ECNU in 2023 as the world's first educational and research institution focused on the intersection of AI and finance. SAIFS emphasizes general education beyond knowledge points, cultivating a new generation of AI-Fin talents with financial knowledge, AI technology, and practical experience." },
      "about.vision": { zh: "愿景", en: "Vision" },
      "about.visionDesc": { zh: "SAIFS致力于与全球的学术机构、金融机构、科技公司和政府部门建立广泛的合作网络，通过推广AI与金融的交叉研究和应用，改善金融服务的效率和质量，为社会创造价值。", en: "SAIFS is committed to establishing extensive cooperation networks with global academic institutions, financial institutions, tech companies, and government departments to improve financial service efficiency and quality through AI-finance research and applications." },
      "about.founded": { zh: "创立年份", en: "Founded" },
      "about.globalFirst": { zh: "全球首家", en: "World's First" },
      "about.aifin": { zh: "AI-Fin", en: "AI-Fin" },
      "about.aifinFull": { zh: "人工智能金融", en: "Artificial Intelligence Finance" },
      "about.aifinCenter": { zh: "AI-Fin（人工智能金融）研究中心", en: "AI-Fin (Artificial Intelligence Finance) Research Center" },
      "about.aifinDesc1": { zh: "AIFin结合了AI技术和金融学理论与实践，旨在利用AI技术（包括机器学习、深度学习，自然语言处理等）来改善和优化金融服务的质量和效率。AIFin不是FinTech的2.0升级，而是金融业的一次大换道，所有现在以及未来的金融从业者都需要重新培训和适配到AIFin的时代。", en: "AI-Fin combines AI technology with financial theory and practice, aiming to improve and optimize financial service quality and efficiency using AI technologies (including machine learning, deep learning, and NLP). AI-Fin is not an upgrade of FinTech 2.0, but a complete transformation of the financial industry." },
      "about.aifinDesc2": { zh: "学院将建设 AI-Fin 研究中心，聚焦人工智能在金融领域的各项应用，研究怎样融合金融学的理论与人工智能的技术提升金融服务的效率并兼顾公平公正与伦理，未来将发布上海人工智能金融指数（Shanghai AI-Finance Index）和年度报告。", en: "The school will establish the AI-Fin Research Center, focusing on various applications of AI in finance, researching how to integrate financial theory with AI technology to improve service efficiency while maintaining fairness and ethics. The Shanghai AI-Finance Index and annual reports will be published in the future." },
      "about.aippe": { zh: "AI-PPE", en: "AI-PPE" },
      "about.aippeFull": { zh: "人工智能伦理与治理", en: "AI Ethics and Governance" },
      "about.aippeCenter": { zh: "AI-PPE（人工智能伦理与治理）研究中心", en: "AI-PPE (AI Ethics and Governance) Research Center" },
      "about.aippeDesc": { zh: "AI-PPE 研究中心将与华东师范大学经济与管理学院、马克思主义学院、政治与国际关系学院以及哲学系合作，共同研究AI时代的全球哲学-政治学-经济学（PPE）思想前沿问题。", en: "The AI-PPE Research Center collaborates with the School of Economics and Management, School of Marxism, School of Politics and International Relations, and Department of Philosophy at ECNU to research frontier issues in global PPE (Philosophy-Politics-Economics) in the AI era." },
      "team.title": { zh: "研究团队", en: "Research Team" },
      "team.professor": { zh: "教授", en: "Professor" },
      "team.assistantProfessor": { zh: "助理教授", en: "Assistant Professor" },
      "team.assistantResearcher": { zh: "助理研究员", en: "Assistant Researcher" },
      "team.phd": { zh: "博士研究生", en: "PhD Student" },
      "team.master": { zh: "硕士研究生", en: "Master Student" },
      "papers.title": { zh: "发表论文", en: "Publications" },
      "papers.year": { zh: "年份", en: "Year" },
      "papers.author": { zh: "作者", en: "Authors" },
      "papers.keyword": { zh: "关键词", en: "Keyword" },
      "papers.type": { zh: "类型", en: "Type" },
      "papers.searchPlaceholder": { zh: "搜索...", en: "Search..." },
      "papers.clearFilters": { zh: "清除筛选", en: "Clear Filters" },
      "papers.found": { zh: "找到", en: "Found" },
      "papers.papers": { zh: "篇论文", en: "papers" },
      "projects.title": { zh: "研究项目", en: "Research Projects" },
      "projects.desc": { zh: "SAIFS 的研究项目覆盖人工智能金融、伦理治理、可信AI等多个前沿方向，致力于推动AI与金融的深度融合。", en: "SAIFS's research projects cover AI finance, ethics governance, trustworthy AI and other frontier directions, committed to promoting deep integration of AI and finance." },
      "news.pageTitle": { zh: "新闻动态", en: "News" },
      "news.desc": { zh: "了解上海人工智能金融学院的最新资讯、研究进展与活动公告。", en: "Stay updated with the latest news, research progress, and announcements from SAIFS." },
      "opportunities.title": { zh: "机会", en: "Opportunities" },
      "opportunities.assistantProfessor": { zh: "助理教授", en: "Assistant Professor" },
      "opportunities.postdoc": { zh: "博士后", en: "Postdoctoral Researcher" },
      "opportunities.phdIntern": { zh: "博士实习生", en: "PhD Intern" },
    };

    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
