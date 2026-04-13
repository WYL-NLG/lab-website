/**
 * Home Page — Light & Refined
 * Design: Clean white with SAIFS blue-indigo brand, inspired by Stanford HAI + Bruegel
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Brain, Shield, ChevronRight } from "lucide-react";

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
  { value: "2023", label: "创立年份" },
  { value: "2", label: "研究中心" },
  { value: "11+", label: "核心成员" },
  { value: "全球首家", label: "AI-Finance 学院" },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image with light overlay */}
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
                Shanghai AI-Finance School, ECNU
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-7xl font-display leading-[1.1] tracking-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
            >
              <span className="text-foreground">华东师范大学</span>
              <br />
              <span className="text-brand-gradient">上海人工智能</span>
              <br />
              <span className="text-brand-gradient">金融学院</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl leading-relaxed max-w-xl mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              我们培养的是将人工智能与金融智慧融入世界的未来塑造者
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="text-sm mb-16 italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              — 创院院长 邵怡蕾教授
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
                了解更多
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                研究团队
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
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
                key={stat.label}
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
                  {stat.value}
                </div>
                <div className="text-[11px] text-muted-foreground tracking-wider uppercase">
                  {stat.label}
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
              研究中心
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
              <Link href="/about" className="block group">
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
                        AI-Fin 研究中心
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      人工智能金融研究中心，专注于人工智能在金融领域的应用研究，包括智能投资、风险控制、金融科技等方向。
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      了解更多 <ChevronRight size={14} />
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
              <Link href="/about" className="block group">
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
                        AI-PPE 研究中心
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      人工智能伦理与治理研究中心，研究人工智能的伦理问题、法律法规、社会影响，推动AI的负责任发展。
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-[oklch(0.55_0.12_200)] font-medium group-hover:gap-2 transition-all">
                      了解更多 <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
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
            className="rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden bg-gradient-to-br from-[oklch(0.52_0.18_270)] via-[oklch(0.48_0.19_275)] to-[oklch(0.45_0.20_280)]"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[oklch(1_0_0_/_6%)] rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[oklch(1_0_0_/_4%)] rounded-full blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-6">
                加入我们，塑造未来
              </h2>
              <p className="text-white/75 max-w-lg mx-auto mb-10 leading-relaxed">
                SAIFS 致力于培养集金融知识、人工智能技术和实践经验于一身的新一代 AI-Fin 领军型卓越人才。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/opportunities"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[oklch(0.45_0.20_280)] font-medium text-sm transition-all duration-300 hover:shadow-[0_4px_20px_oklch(0_0_0_/_15%)] hover:-translate-y-0.5"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  查看机会
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:saifsadministration@sem.ecnu.edu.cn"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/25 text-white font-medium text-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  联系我们
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
