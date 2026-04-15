/**
 * Home Page — Light & Refined
 * Design: Clean white with SAIFS blue-indigo brand, inspired by Stanford HAI + Bruegel
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Brain, Shield, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/hero-bg-8MkQpmoFr4Tq8bpGQcTRtQ.webp";
const AI_FIN_IMG = "/avatars/AI-FIN.png";
const AI_PPE_IMG = "/avatars/AI-PPE.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

const stats = [
  { zh: { value: "2023", label: "创立年份" }, en: { value: "2023", label: "Founded" } },
  { zh: { value: "2", label: "研究中心" }, en: { value: "2", label: "Research Centers" } },
  { zh: { value: "11+", label: "核心成员" }, en: { value: "11+", label: "Core Members" } },
  { zh: { value: "全球首家", label: "AI-Fin 学院" }, en: { value: "World's First", label: "AI-Fin School" } },
];

const news = [
  {
    id: "1",
    date: "2026-03-24",
    titleZh: "华东师范大学校长马余刚院士一行调研上海人工智能金融学院",
    titleEn: "Dean Ma Yugang of ECNU Visits Shanghai AI-Finance School",
    excerptZh: "2026年3月24日上午，华东师范大学校长、中国科学院院士马余刚率队赴上海人工智能金融学院（SAIFS）开展专项调研...",
    excerptEn: "On the morning of March 24, 2026, Dean Ma Yugang of ECNU led a team to visit SAIFS for a special research session...",
  },
  {
    id: "2",
    date: "2026-03-18",
    titleZh: "你的工作，AI还需要多久才能接手？",
    titleEn: "How Long Before AI Takes Over Your Job?",
    excerptZh: "上周，Andrej Karpathy（特斯拉前 AI 总监）给 342 个美国职业打了 AI 替代风险分，高暴露岗位涉及工资总额高达 3.7 万亿美元...",
    excerptEn: "Last week, Andrej Karpathy (former Tesla AI Director) scored 342 US occupations for AI replacement risk...",
  },
  {
    id: "3",
    date: "2026-03-04",
    titleZh: "邵怡蕾｜AI改写历史终结：从技术-治理双曲线到人工智能素养与人文素养并进的双框架",
    titleEn: "Shao Yilei | AI Rewrites the End of History",
    excerptZh: "人工智能正在重启被福山宣告终结的历史。以'技术-治理'双曲线为核心框架展开分析，可以发现技术指数攀升与治理线性迟滞之间存在'合法性鸿沟'...",
    excerptEn: "AI is restarting history declared ended by Fukuyama. Using the 'technology-governance' dual curve framework...",
  },
];

export default function Home() {
  const { language, t } = useLanguage();

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.99_0.002_260_/_30%)] via-[oklch(0.99_0.002_260_/_20%)] to-[oklch(0.99_0.002_260_/_10%)]" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary tracking-wider uppercase">
                {t("hero.subtitle")}
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-7xl font-display leading-[1.1] tracking-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
            >
              {language === "zh" ? (
                <>
                  <span className="text-foreground">华东师范大学</span>
                  <br />
                  <span className="text-brand-gradient">上海人工智能</span>
                  <br />
                  <span className="text-brand-gradient">金融学院</span>
                </>
              ) : (
                <>
                  <span className="text-foreground">East China</span>
                  <br />
                  <span className="text-brand-gradient">Normal University</span>
                  <br />
                  <span className="text-brand-gradient">Shanghai AI-Finance School</span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl leading-relaxed max-w-xl mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              {t("hero.desc")}
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="text-sm mb-16 italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              {t("hero.author")}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[0_4px_20px_oklch(0.52_0.18_270_/_25%)] hover:-translate-y-0.5"
              >
                {t("hero.learnMore")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                {t("hero.researchTeam")}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative z-20 py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.zh.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center relative"
              >
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />
                )}
                <div className="text-2xl sm:text-3xl font-display text-brand-gradient mb-1.5">
                  {language === "zh" ? stat.zh.value : stat.en.value}
                </div>
                <div className="text-[11px] text-muted-foreground tracking-wider uppercase">
                  {language === "zh" ? stat.zh.label : stat.en.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== RESEARCH CENTERS ===== */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase mb-3 block">
              Research Centers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              {t("centers.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI-Fin Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link href="/about#aifin-center" className="block group">
                <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_40px_oklch(0.52_0.18_270_/_10%)]">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={AI_FIN_IMG}
                      alt="AI-Fin Research Center"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                        <Brain size={20} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-display text-foreground">
                        {language === "zh" ? "AI-Fin 研究中心" : "AI-Fin Research Center"}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {language === "zh" 
                        ? "人工智能金融研究中心，专注于人工智能在金融领域的应用研究，包括智能投资、风险控制、金融科技等方向。"
                        : "The AI-Fin Research Center focuses on AI applications in finance, including intelligent investment, risk control, and fintech."}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      {t("centers.learnMore")} <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* AI-PPE Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link href="/about#aippe-center" className="block group">
                <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-[oklch(0.55_0.12_200_/_20%)] hover:shadow-[0_8px_40px_oklch(0.55_0.12_200_/_10%)]">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={AI_PPE_IMG}
                      alt="AI-PPE Research Center"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[oklch(0.55_0.12_200_/_8%)] flex items-center justify-center">
                        <Shield size={20} className="text-[oklch(0.55_0.12_200)]" />
                      </div>
                      <h3 className="text-xl font-display text-foreground">
                        {language === "zh" ? "AI-PPE 研究中心" : "AI-PPE Research Center"}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {language === "zh" 
                        ? "人工智能伦理与治理研究中心，研究人工智能的伦理问题、法律法规、社会影响，推动AI的负责任发展。"
                        : "The AI-PPE Research Center studies AI ethics, regulations, social impact, and promotes responsible AI development."}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-[oklch(0.55_0.12_200)] font-medium group-hover:gap-2 transition-all">
                      {t("centers.learnMore")} <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NEWS SECTION ===== */}
      <section className="py-24 bg-[oklch(0.97_0.005_260)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase mb-3 block">
                Latest News
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
                {t("news.title")}
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
            >
              {t("news.viewAll")} <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex"
              >
                <Link
                  href={`/news/${item.id}`}
                  className="group flex flex-col glass-card rounded-2xl p-6 transition-all duration-500 hover:border-primary/15 hover:-translate-y-1 w-full"
                >
                  <time className="text-xs text-primary font-medium tracking-wider mb-3 block">
                    {item.date}
                  </time>
                  <h3 className="text-base font-semibold text-foreground leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {language === "zh" ? item.titleZh : item.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {language === "zh" ? item.excerptZh : item.excerptEn}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {t("news.readMore")} <ChevronRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src={HERO_BG}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.99_0.002_260_/_88%)] via-[oklch(0.99_0.002_260_/_70%)] to-[oklch(0.99_0.002_260_/_40%)]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-[oklch(0.25_0.02_260)] mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-[oklch(0.35_0.02_260)] max-w-lg mx-auto mb-10 leading-relaxed">
                {t("cta.desc")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/opportunities"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[oklch(0.45_0.20_280)] text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t("cta.viewOpportunities")}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:saifsadministration@sem.ecnu.edu.cn"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-[oklch(0.45_0.20_280)] text-[oklch(0.45_0.20_280)] font-semibold text-sm transition-all duration-300 hover:bg-[oklch(0.45_0.20_280)] hover:text-white hover:-translate-y-1"
                >
                  {t("cta.contactUs")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
