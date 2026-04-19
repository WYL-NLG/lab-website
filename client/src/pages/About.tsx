/**
 * About Page — Light & Refined
 * Clean white backgrounds, SAIFS blue-indigo accents
 */
import { motion } from "framer-motion";
import { Brain, CircuitBoard, Cpu } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/about-section-nfUWCSNJv8kpcx7upcaHpD.webp";

export default function About() {
  const { language, t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_IMG} alt="" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
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

      {/* Silicon-based Economy Research Center */}
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
                <CircuitBoard size={20} className="text-[oklch(0.55_0.12_200)]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-foreground">
                {t("about.aippeCenter")}
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
            <p className="text-base text-muted-foreground leading-[1.9]">
              {t("about.aippeDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial LLM Lab */}
      <section id="llm-lab" className="py-20 bg-[oklch(0.97_0.005_260)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center">
                <Cpu size={20} className="text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-foreground">
                {t("about.llmCenter")}
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
            <p className="text-base text-muted-foreground leading-[1.9]">
              {t("about.llmDesc")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
