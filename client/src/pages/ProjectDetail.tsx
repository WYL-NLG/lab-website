/**
 * Project Detail Page — 项目详情
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Users, Calendar, Mail, Beaker, Scale, Brain, Globe } from "lucide-react";

const projects = [
  {
    id: "shanghai-aifin-index",
    icon: "TrendingUp",
    title: "全球金融科技中心发展指数",
    subtitle: "Global AI-Finance Center Index (GAIFC)",
    desc: "全球AI金融中心指数（GAIFC）旨在衡量主要金融中心中，金融体系与算力、算法和数据——视为继资本与劳动之后的新型关键生产要素——的融合程度。GAIFC构建「硅基指标」体系，刻画城市在AI要素投入、金融业与AI产业互动以及由此产生的产出与价值。",
    color: "oklch(0.75 0.12 75)",
    tags: ["AI-Fin", "硅基经济学", "全球指数"],
    objectives: [
      "构建基于「硅基经济学」的全球AI金融中心评价体系",
      "衡量金融体系与算力、算法、数据三大新型生产要素的融合程度",
      "刻画「金融如何培育AI、AI如何反哺金融」的双循环闭环机制",
      "为不同城市在政策设计、资源配置和产业演化方面提供可比较的分析框架",
    ],
    highlights: [
      "首个基于「硅基经济学」理论的全球AI金融中心指数",
      "覆盖北美、欧洲、东亚、中东与大洋洲的22个核心城市",
      "包括旧金山-圣何塞、纽约、伦敦、北京、上海、深圳、杭州等全球主要金融中心",
      "评估AI如何赋能金融以及金融如何培育AI的双向互动机制",
    ],
    cities: ["旧金山-圣何塞", "纽约", "波士顿", "洛杉矶", "芝加哥", "伦敦", "巴黎", "苏黎世-日内瓦", "法兰克福", "多伦多", "北京", "上海", "深圳", "广州", "杭州", "香港", "新加坡", "东京", "首尔", "悉尼", "墨尔本", "迪拜-阿布扎比"],
    team: ["邵怡蕾", "吴宗翰", "汤傲成"],
    link: "https://www.gftci.org.cn/gaifc",
    researchTeam: {
      "研究主管兼总编辑": ["邵怡蕾，华东师范大学上海人工智能金融学院院长、教授"],
      "首席研究员": [
        "李真，华东师范大学经济与管理学院教授",
        "温南夫，华东师范大学上海人工智能金融学院助理研究员",
      ],
      "研究员": [
        "汤傲成，华东师范大学上海人工智能金融学院助理教授",
        "吴宗翰，华东师范大学上海人工智能金融学院助理教授",
        "金培振，华东师范大学经济与管理学院副教授",
        "郁淼淼，华东师范大学统计学院助理教授",
      ],
    },
  },
];

const iconMap: Record<string, any> = {
  TrendingUp,
  Beaker,
  Scale,
  Brain,
  Globe,
};

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <h1 className="text-2xl font-display">未找到该项目</h1>
          <Link href="/projects" className="text-primary mt-4 inline-block">
            返回项目页面
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[project.icon];

  return (
    <div>
      <section className="pt-32 pb-16">
        <div className="container">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            返回项目页面
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `color-mix(in oklch, ${project.color} 12%, transparent)` }}
            >
              {Icon && <Icon size={28} style={{ color: project.color }} />}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
                {project.title}
              </h1>
              <p className="text-sm text-muted-foreground tracking-wider">{project.subtitle}</p>
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
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {project.desc}
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
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <h2 className="text-xl font-display text-foreground mb-6">研究目标</h2>
                <ul className="flex flex-col gap-4">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: project.color }} />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <h2 className="text-xl font-display text-foreground mb-6">项目特色</h2>
                <ul className="flex flex-col gap-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: project.color }} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <h2 className="text-xl font-display text-foreground mb-6">项目信息</h2>

                {project.researchTeam && (
                  <div className="pb-6 border-b border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <Users size={16} className="text-muted-foreground" />
                      <h3 className="text-sm font-semibold text-foreground">工作人员和研究人员</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(project.researchTeam).map(([role, members]) => (
                        <div key={role}>
                          <h4 className="text-xs font-medium text-primary mb-2">{role}</h4>
                          <ul className="space-y-1">
                            {members.map((member, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground">
                                {member}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.cities && project.cities.length > 0 && (
                  <div className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe size={16} className="text-muted-foreground" />
                      <h3 className="text-sm font-semibold text-foreground">覆盖城市</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.cities.map((city) => (
                        <span
                          key={city}
                          className="px-2 py-1 rounded text-xs bg-primary/8 text-primary"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.link && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold text-foreground mb-3">项目链接</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                    >
                      {project.link}
                    </a>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
