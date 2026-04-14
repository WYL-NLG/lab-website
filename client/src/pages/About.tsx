/**
 * About Page — Light & Refined
 * Clean white backgrounds, SAIFS blue-indigo accents
 */
import { motion } from "framer-motion";
import { Brain, Shield, BookOpen, Globe, Users, Lightbulb } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/about-section-nfUWCSNJv8kpcx7upcaHpD.webp";

const aiPpeDirections = [
  { 
    icon: Shield, 
    titleZh: "数据隐私与安全", 
    titleEn: "Data Privacy & Security",
    descZh: "研究如何保护用户数据的隐私，防止数据泄露和滥用",
    descEn: "Research on protecting user data privacy and preventing leaks"
  },
  { 
    icon: BookOpen, 
    titleZh: "算法公正与透明", 
    titleEn: "Algorithm Fairness & Transparency",
    descZh: "确保人工智能算法的公正性和透明度，减少偏见和歧视",
    descEn: "Ensuring fairness and transparency in AI algorithms"
  },
  { 
    icon: Globe, 
    titleZh: "可信人工智能", 
    titleEn: "Trustworthy AI",
    descZh: "构建可信人工智能理论研究、测试基准及开放平台",
    descEn: "Building theoretical research, benchmarks and open platforms for trustworthy AI"
  },
  { 
    icon: Users, 
    titleZh: "社会公平与包容性", 
    titleEn: "Social Equity & Inclusion",
    descZh: "解决数字鸿沟和社会不平等问题，促进公平的AI发展",
    descEn: "Addressing digital divide and social inequality"
  },
  { 
    icon: Lightbulb, 
    titleZh: "人机协作与关系", 
    titleEn: "Human-AI Collaboration",
    descZh: "研究人类与AI系统之间的协作，包括人机界面设计",
    descEn: "Research on human-AI collaboration and interface design"
  },
  { 
    icon: Globe, 
    titleZh: "国际合作与安全治理", 
    titleEn: "International Cooperation & Security Governance",
    descZh: "制定国际性的人工智能安全和规范框架",
    descEn: "Developing international AI safety and regulatory frameworks"
  },
];

export default function About() {
  const { language, t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_IMG} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        <div className="container relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-medium text-primary tracking-[0.2em] uppercase mb-4 block"
          >
            About SAIFS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6"
          >
            {t("about.hero")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <p className="text-base text-muted-foreground leading-[1.9] mb-6">
                {t("about.intro1")}
              </p>
              <p className="text-base text-muted-foreground leading-[1.9] mb-6">
                {t("about.intro2")}
              </p>
              <p className="text-base text-muted-foreground leading-[1.9]">
                {language === "zh" ? (
                  <>
                    <strong className="text-foreground">上海人工智能金融学院（简称SAIFS）</strong>于2023年在华东师范大学成立，是全球首家围绕人工智能与金融跨界交叉打造的教育和研究机构。SAIFS强调在超越知识点的通识教育的基础上，培养集金融知识、人工智能技术和实践经验于一身的新一代人工智能金融（AI-Fin）领军型卓越人才。
                  </>
                ) : (
                  <>
                    <strong className="text-foreground">The Shanghai Artificial Intelligence Finance School (SAIFS)</strong> was established at ECNU in 2023 as the world's first educational and research institution focused on the intersection of AI and finance. SAIFS emphasizes general education beyond knowledge points, cultivating a new generation of AI-Fin talents with financial knowledge, AI technology, and practical experience.
                  </>
                )}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-lg font-display text-brand-gradient mb-4">{t("about.vision")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {t("about.visionDesc")}
                </p>
                <div className="section-divider my-6" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-display text-brand-gradient">{t("about.founded")}</div>
                    <div className="text-xs text-muted-foreground mt-1">2023</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display text-accent-gradient">{t("about.globalFirst")}</div>
                    <div className="text-xs text-muted-foreground mt-1">AI-Fin</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Fin Center */}
      <section id="aifin-center" className="scroll-mt-28 pt-4 py-20 bg-[oklch(0.97_0.005_260)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                <Brain size={20} className="text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-foreground">
                {t("about.aifinCenter")}
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 lg:p-12"
          >
            <p className="text-base text-muted-foreground leading-[1.9] mb-6">
              {t("about.aifinDesc1")}
            </p>
            <p className="text-base text-muted-foreground leading-[1.9]">
              {t("about.aifinDesc2")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI-PPE Center */}
      <section id="aippe-center" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.55_0.12_200_/_8%)] flex items-center justify-center">
                <Shield size={20} className="text-[oklch(0.55_0.12_200)]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-foreground">
                {t("about.aippeCenter")}
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-muted-foreground leading-[1.9] mb-12 max-w-3xl"
          >
            {t("about.aippeDesc")}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiPpeDirections.map((item, i) => (
              <motion.div
                key={item.titleZh}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-xl p-6 transition-all duration-400 hover:border-[oklch(0.55_0.12_200_/_20%)] hover:-translate-y-1"
              >
                <item.icon size={20} className="text-[oklch(0.55_0.12_200)] mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-2 font-sans">
                  {language === "zh" ? item.titleZh : item.titleEn}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {language === "zh" ? item.descZh : item.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
