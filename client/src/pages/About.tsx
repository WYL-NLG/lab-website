/**
 * About Page — Light & Refined
 * Clean white backgrounds, SAIFS blue-indigo accents
 */
import { motion } from "framer-motion";
import { Brain, Shield, BookOpen, Globe, Users, Lightbulb } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/about-section-nfUWCSNJv8kpcx7upcaHpD.webp";

const aiPpeDirections = [
  { icon: Shield, title: "数据隐私与安全", desc: "研究如何保护用户数据的隐私，防止数据泄露和滥用" },
  { icon: BookOpen, title: "算法公正与透明", desc: "确保人工智能算法的公正性和透明度，减少偏见和歧视" },
  { icon: Globe, title: "可信人工智能", desc: "构建可信人工智能理论研究、测试基准及开放平台" },
  { icon: Users, title: "社会公平与包容性", desc: "解决数字鸿沟和社会不平等问题，促进公平的AI发展" },
  { icon: Lightbulb, title: "人机协作与关系", desc: "研究人类与AI系统之间的协作，包括人机界面设计" },
  { icon: Globe, title: "国际合作与安全治理", desc: "制定国际性的人工智能安全和规范框架" },
];

export default function About() {
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
            学院介绍
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
                华东师范大学，简称"华东师大"，是中国著名的综合性研究型大学，位列国家"双一流"、"985"和"211"工程。华东师大成立于1951年10月16日，是以大夏大学（1924年）和光华大学（1925年）为基础，在大夏大学原址上创办的。
              </p>
              <p className="text-base text-muted-foreground leading-[1.9] mb-6">
                科技的迅速发展，特别是人工智能（AI）的飞跃进步，作用于金融业对于更高效、更安全、更智能的解决方案的持续需求，便催生出了新生的人工智能金融（AI-Fin）。AI-Fin 不同于 FinTech，也不同于 TechFin，AI 与金融的结合将以迅猛的速度前所未有的颠覆金融业的微观格局与世界政治经济格局。
              </p>
              <p className="text-base text-muted-foreground leading-[1.9]">
                <strong className="text-foreground">上海人工智能金融学院（简称SAIFS）</strong>于2023年在华东师范大学成立，是全球首家围绕人工智能与金融跨界交叉打造的教育和研究机构。SAIFS强调在超越知识点的通识教育的基础上，培养集金融知识、人工智能技术和实践经验于一身的新一代人工智能金融（AI-Fin）领军型卓越人才。
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
                <h3 className="text-lg font-display text-brand-gradient mb-4">愿景</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  SAIFS致力于与全球的学术机构、金融机构、科技公司和政府部门建立广泛的合作网络，通过推广AI与金融的交叉研究和应用，改善金融服务的效率和质量，为社会创造价值。
                </p>
                <div className="section-divider my-6" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-display text-brand-gradient">2023</div>
                    <div className="text-xs text-muted-foreground mt-1">创立年份</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display text-accent-gradient">全球首家</div>
                    <div className="text-xs text-muted-foreground mt-1">AI-Finance 学院</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Fin Center */}
      <section className="py-20 bg-[oklch(0.97_0.005_260)]">
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
                AI-Fin（人工智能金融）研究中心
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
              AIFin结合了AI技术和金融学理论与实践，旨在利用AI技术（包括机器学习、深度学习、自然语言处理等）来改善和优化金融服务的质量和效率。AIFin不是FinTech的2.0升级，而是金融业的一次大换道，所有现在以及未来的金融从业者都需要重新培训和适配到AIFin的时代。
            </p>
            <p className="text-base text-muted-foreground leading-[1.9]">
              学院将建设 AI-Fin 研究中心，聚焦人工智能在金融领域的各项应用，研究怎样融合金融学的理论与人工智能的技术提升金融服务的效率并兼顾公平公正与伦理，未来将发布上海人工智能金融指数（Shanghai AI-Finance Index）和年度报告。
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI-PPE Center */}
      <section className="py-20">
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
                AI-PPE（人工智能伦理与治理）研究中心
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-muted-foreground leading-[1.9] mb-12 max-w-3xl"
          >
            AI-PPE 研究中心将与华东师范大学经济与管理学院、马克思主义学院、政治与国际关系学院以及哲学系合作，共同研究AI时代的全球哲学-政治学-经济学（PPE）思想前沿问题。
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiPpeDirections.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-xl p-6 transition-all duration-400 hover:border-[oklch(0.55_0.12_200_/_20%)] hover:-translate-y-1"
              >
                <item.icon size={20} className="text-[oklch(0.55_0.12_200)] mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-2 font-sans">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
