/**
 * Team Page — Light & Refined with real avatars
 * Clean white cards, SAIFS blue-indigo accents
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";

interface Member {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  category: string;
  avatar?: string;
}

const AVATARS: Record<string, string> = {
  "邵怡蕾": "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/shao-yilei_91f1a2ed.jpg",
  "文青松": "https://d2xsxph8kpxj0f.cloudfront.net/310419663030386668/VtxKsVYCNS3ckeWH93PHhR/wenqingsong_3094f98b.jpg",
  "吴宗翰": "/avatars/wu-zonghan.png",
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
  { key: "professor", labelZh: "教授", labelEn: "Professor", color: "oklch(0.52 0.18 270)" },
  { key: "assistant-professor", labelZh: "助理教授", labelEn: "Assistant Professor", color: "oklch(0.55 0.12 200)" },
  { key: "assistant-researcher", labelZh: "助理研究员", labelEn: "Assistant Researcher", color: "oklch(0.50 0.15 180)" },
  { key: "phd", labelZh: "博士研究生", labelEn: "PhD Student", color: "oklch(0.45 0.20 280)" },
  { key: "master", labelZh: "硕士研究生", labelEn: "Master Student", color: "oklch(0.55 0.10 150)" },
];

const members: Member[] = [
  { id: "shao-yilei", name: "邵怡蕾", nameEn: "Shao Yilei", role: "教授（创院院长）", roleEn: "Professor (Founding Dean)", category: "professor" },
  { id: "wen-qingsong", name: "文青松", nameEn: "Wen Qingsong", role: "兼职教授", roleEn: "Adjunct Professor", category: "professor" },
  { id: "tang-aocheng", name: "汤傲成", nameEn: "Tang Aocheng", role: "助理教授", roleEn: "Assistant Professor", category: "assistant-professor" },
  { id: "wu-zonghan", name: "吴宗翰", nameEn: "Wu Zonghan", role: "助理教授", roleEn: "Assistant Professor", category: "assistant-professor" },
  { id: "wang-junlin", name: "汪俊霖", nameEn: "Wang Junlin", role: "助理研究员", roleEn: "Assistant Researcher", category: "assistant-researcher" },
  { id: "wen-nanfu", name: "温南夫", nameEn: "Wen Nanfu", role: "助理研究员", roleEn: "Assistant Researcher", category: "assistant-researcher" },
  { id: "hu-zhongbo", name: "胡忠博", nameEn: "Hu Zhongbo", role: "博士研究生", roleEn: "PhD Student", category: "phd" },
  { id: "liu-yang", name: "刘洋", nameEn: "Liu Yang", role: "博士研究生", roleEn: "PhD Student", category: "phd" },
  { id: "lu-wenyi", name: "陆文益", nameEn: "Lu Wenyi", role: "博士研究生", roleEn: "PhD Student", category: "phd" },
  { id: "wang-yuanlong", name: "王源龙", nameEn: "Wang Yuanlong", role: "博士研究生", roleEn: "PhD Student", category: "phd" },
  { id: "hao-muqin", name: "郝牧青", nameEn: "Hao Muqing", role: "硕士研究生", roleEn: "Master Student", category: "master" },
];

function getInitials(name: string) {
  return name.slice(0, 1);
}

export default function Team() {
  const { language, t } = useLanguage();

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
            Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6"
          >
            {t("team.title")}
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
              ? "SAIFS 汇聚了来自人工智能、金融学、经济学、哲学等多学科的优秀研究者，共同探索 AI 与金融的交叉前沿。"
              : "SAIFS brings together excellent researchers from multiple disciplines including AI, finance, economics, and philosophy to explore the frontiers of AI and finance."}
          </motion.p>
        </div>
      </section>

      {/* Team by category */}
      {categories.map((cat) => {
        const catMembers = members.filter((m) => m.category === cat.key);
        if (catMembers.length === 0) return null;
        return (
          <section key={cat.key} className="py-10">
            <div className="container">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div
                  className="w-1.5 h-7 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h2 className="text-xl sm:text-2xl font-display text-foreground">
                  {language === "zh" ? cat.labelZh : cat.labelEn}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {catMembers.map((member, i) => {
                  const avatarUrl = AVATARS[member.name];
                  return (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                    >
                      <Link href={`/team/${member.id}`} className="block">
                        <div className="glass-card rounded-2xl p-6 group transition-all duration-400 hover:-translate-y-1 hover:border-primary/15 hover:shadow-[0_8px_30px_oklch(0.52_0.18_270_/_8%)] cursor-pointer">
                          {/* Avatar */}
                          <div className="flex items-center gap-4">
                            {avatarUrl ? (
                              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 ring-2 ring-border group-hover:ring-primary/20 transition-all">
                                <img
                                  src={avatarUrl}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center text-lg font-display text-white/90 shrink-0"
                                style={{
                                  background: `linear-gradient(135deg, ${cat.color}, color-mix(in oklch, ${cat.color} 70%, oklch(0.3 0 0)))`,
                                }}
                              >
                                {getInitials(member.name)}
                              </div>
                            )}
                            <div>
                              <h3 className="text-base font-semibold text-foreground font-sans">
                                {language === "zh" ? member.name : member.nameEn}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {language === "zh" ? member.role : member.roleEn}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Spacer */}
      <div className="h-20" />
    </div>
  );
}
