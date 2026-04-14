/**
 * Opportunities Page — 机会 / Opportunities
 * Design: CTA-focused with glass cards, inspired by Stanford HAI
 */
import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, Mail, ArrowRight, UserPlus, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const opportunities = [
  {
    id: "phd",
    icon: GraduationCap,
    titleZh: "博士研究生",
    titleEn: "Ph.D. Students",
    descZh: "SAIFS 欢迎对人工智能金融、AI伦理与治理等方向有浓厚研究兴趣的优秀学生申请博士项目。我们提供优厚的奖学金和一流的研究环境。",
    descEn: "SAIFS welcomes outstanding students with strong research interests in AI-Fin and AI Ethics to apply for our Ph.D. program. We offer generous scholarships and a world-class research environment.",
    color: "oklch(0.75 0.12 75)",
    requirementsZh: ["计算机科学、金融学、经济学等相关专业背景", "较强的数学和编程能力", "良好的英语读写能力"],
    requirementsEn: ["Background in Computer Science, Finance, Economics or related fields", "Strong mathematical and programming skills", "Good English reading and writing abilities"],
  },
  {
    id: "master",
    icon: Users,
    titleZh: "硕士研究生",
    titleEn: "Master Students",
    descZh: "我们的硕士项目注重理论与实践的结合，培养学生在AI-Fin领域的专业能力和创新思维。",
    descEn: "Our Master's program emphasizes the integration of theory and practice, cultivating students' professional abilities and innovative thinking in AI-Fin.",
    color: "oklch(0.70 0.17 165)",
    requirementsZh: ["本科相关专业背景", "对AI与金融交叉领域有热情", "具备团队协作精神"],
    requirementsEn: ["Bachelor's degree in related fields", "Passion for AI and finance intersection", "Teamwork spirit"],
  },
  {
    id: "postdoc",
    icon: Briefcase,
    titleZh: "博士后",
    titleEn: "Postdoc",
    descZh: "为进一步推进人工智能与金融深度融合，建设国际一流的教学科研团队，上海人工智能金融学院现面向海内外公开招聘博士后若干名，诚邀优秀青年人才加盟，共同探索前沿领域。",
    descEn: "To further promote the deep integration of AI and finance and build a world-class teaching and research team, SAIFS is now openly recruiting postdoctoral researchers. We invite outstanding young talents to join us in exploring frontier fields.",
    color: "oklch(0.78 0.10 230)",
    requirementsZh: ["已获得或即将获得计算机科学、人工智能或相关领域的博士学位，年龄一般不超过35周岁", "在相关研究方向上取得了优秀的学术成果，具备独立开展高水平科研工作的能力", "具备良好的职业道德、团队合作精神和严谨的学术规范意识", "在顶级AI会议或期刊上以第一作者身份发表过多篇论文者优先"],
    requirementsEn: ["Ph.D. in Computer Science, AI or related fields, typically under 35 years old", "Excellent academic achievements with ability to conduct independent high-level research", "Good professional ethics, teamwork spirit and rigorous academic standards", "Priority to those with multiple first-author papers at top AI conferences or journals"],
  },
  {
    id: "intern",
    icon: UserPlus,
    titleZh: "博士实习生",
    titleEn: "Ph.D. Intern",
    descZh: "为进一步推进人工智能与金融深度融合，建设国际一流的教学科研团队，上海人工智能金融学院现面向海内外公开招聘博士实习生若干名，诚邀优秀青年人才加盟，共同探索前沿领域。",
    descEn: "To further promote the deep integration of AI and finance, SAIFS is recruiting Ph.D. interns. We invite outstanding young talents to join us in exploring frontier fields.",
    color: "oklch(0.60 0.15 150)",
    requirementsZh: ["海内外知名高校计算机科学、人工智能或相关专业的在读博士生", "在以下一个或多个领域有深入研究或项目经验：大模型安全、大模型幻觉、智能体、Graph RAG、多模态、时间序列", "具备扎实的编程能力和算法基础，熟练掌握至少一种深度学习框架", "具备良好的沟通能力、团队合作精神和强烈的求知欲", "有高水平学术论文发表者优先，可保证3个月以上全职实习者优先"],
    requirementsEn: ["Ph.D. students from reputable domestic or international universities in CS, AI or related fields", "Deep research or project experience in: LLM security, LLM hallucination, Agents, Graph RAG, Multimodal, Time series", "Solid programming and algorithm skills, proficient in at least one deep learning framework", "Good communication, teamwork and strong thirst for knowledge", "Priority to those with high-quality publications or able to intern for 3+ months full-time"],
  },
  {
    id: "assistant",
    icon: BookOpen,
    titleZh: "助理教授",
    titleEn: "Assistant Professor",
    descZh: "为进一步推进人工智能与金融深度融合，建设国际一流的教学科研团队，上海人工智能金融学院现面向海内外公开招聘助理教授若干名，诚邀青年学者加盟。",
    descEn: "To further promote the deep integration of AI and finance and build a world-class team, SAIFS is recruiting Assistant Professors. We invite young scholars to join us.",
    color: "oklch(0.55 0.15 280)",
    requirementsZh: ["已获得或即将获得计算机科学、人工智能学科博士学位", "在大模型安全、大模型幻觉、智能体、Graph RAG、多模态、时间序列等相关领域具有深入研究", "具备独立开展科研工作的能力", "具有良好的职业道德、团队合作精神和学术规范意识", "在顶级AI会议或期刊发表多篇论文者优先"],
    requirementsEn: ["Ph.D. in Computer Science or AI (or will obtain soon)", "Deep research in LLM security, hallucination, Agents, Graph RAG, Multimodal, Time series", "Ability to conduct independent research", "Good professional ethics, teamwork and academic standards", "Priority to those with multiple publications at top AI conferences/journals"],
  },
];

export default function Opportunities() {
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-medium text-primary tracking-[0.2em] uppercase mb-4 block"
          >
            Opportunities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6"
          >
            {language === "zh" ? "加入我们" : "Join Us"}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-muted-foreground max-w-2xl leading-relaxed"
          >
            {language === "zh"
              ? "SAIFS 正在寻找对 AI 与金融交叉领域充满热情的研究者和学生。无论你是博士生、硕士生还是博士后，我们都期待你的加入。"
              : "SAIFS is looking for researchers and students passionate about the intersection of AI and finance. Whether you are a Ph.D. student, Master's student, or postdoctoral researcher, we look forward to your joining."}
          </motion.p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="pb-20">
        <div className="container">
          <div className="flex flex-col gap-8">
            {opportunities.map((opp, i) => (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={`/opportunities/${opp.id}`} className="block">
                  <div
                    className="glass-card rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                    style={{ borderColor: "transparent" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `color-mix(in oklch, ${opp.color} 25%, transparent)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                    }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex items-center gap-4 lg:w-72 shrink-0">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `color-mix(in oklch, ${opp.color} 12%, transparent)` }}
                        >
                          <opp.icon size={22} style={{ color: opp.color }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-display text-foreground">{language === "zh" ? opp.titleZh : opp.titleEn}</h3>
                          <p className="text-xs text-muted-foreground tracking-wider">{language === "zh" ? opp.titleEn : opp.titleZh}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{language === "zh" ? opp.descZh : opp.descEn}</p>
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-foreground mb-2 tracking-wider uppercase font-sans">
                            {language === "zh" ? "基本要求" : "Basic Requirements"}
                          </h4>
                          <ul className="flex flex-col gap-1.5">
                            {(language === "zh" ? opp.requirementsZh : opp.requirementsEn).map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: opp.color }} />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/6 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <Mail size={32} className="text-primary mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-4">
                {language === "zh" ? "有意向？请联系我们" : "Interested? Contact Us"}
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm leading-relaxed">
                {language === "zh"
                  ? "请将您的简历、研究计划和相关材料发送至以下邮箱，我们会尽快与您联系。"
                  : "Please send your resume, research plan and related materials to the following email, and we will contact you as soon as possible."}
              </p>
              <a
                href="mailto:saifsadministration@sem.ecnu.edu.cn"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[0_4px_20px_oklch(0.52_0.18_270_/_25%)] hover:-translate-y-0.5"
              >
                {language === "zh" ? "发送邮件" : "Send Email"}
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
