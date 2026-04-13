/**
 * Opportunity Detail Page — 机会详情
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, UserPlus, BookOpen, CheckCircle2, ArrowLeft, Mail } from "lucide-react";

const opportunities = [
  {
    id: "phd",
    icon: "GraduationCap",
    title: "博士研究生",
    subtitle: "Ph.D. Students",
    desc: "SAIFS 欢迎对人工智能金融、AI伦理与治理等方向有浓厚研究兴趣的优秀学生申请博士项目。我们提供优厚的奖学金和一流的研究环境。",
    color: "oklch(0.75 0.12 75)",
    requirements: ["计算机科学、金融学、经济学等相关专业背景", "较强的数学和编程能力", "良好的英语读写能力"],
    details: [
      "SAIFS 博士项目致力于培养 AI 与金融交叉领域的顶尖研究人才",
      "奖学金覆盖学费、生活费及国际会议差旅费用",
      "学生将有机会参与国内外顶级学术合作项目",
      "毕业后可获得华东师范大学博士学位",
    ],
  },
  {
    id: "master",
    icon: "Users",
    title: "硕士研究生",
    subtitle: "Master Students",
    desc: "我们的硕士项目注重理论与实践的结合，培养学生在AI金融领域的专业能力和创新思维。",
    color: "oklch(0.70 0.17 165)",
    requirements: ["本科相关专业背景", "对AI与金融交叉领域有热情", "具备团队协作精神"],
    details: [
      "培养具备 AI 金融实战能力的专业人才",
      "课程设置涵盖机器学习、金融工程、伦理治理等核心领域",
      "提供企业实习和项目实践机会",
      "优秀毕业生可获得优先推荐读博或就业机会",
    ],
  },
  {
    id: "postdoc",
    icon: "Briefcase",
    title: "博士后",
    subtitle: "Postdoc",
    desc: "为进一步推进人工智能与金融深度融合，建设国际一流的教学科研团队，上海人工智能金融学院现面向海内外公开招聘博士后若干名，诚邀优秀青年人才加盟，共同探索前沿领域。",
    color: "oklch(0.78 0.10 230)",
    requirements: ["已获得或即将获得计算机科学、人工智能或相关领域的博士学位，年龄一般不超过35周岁", "在相关研究方向上取得了优秀的学术成果，具备独立开展高水平科研工作的能力", "具备良好的职业道德、团队合作精神和严谨的学术规范意识", "在顶级AI会议或期刊上以第一作者身份发表过多篇论文者优先"],
    details: [
      {
        title: "科研工作",
        items: [
          "围绕人工智能与金融交叉领域（包括但不限于大模型安全、大模型幻觉、智能体、Graph RAG、多模态、时间序列等）开展前沿学术研究，产出具有国际影响力的研究成果",
          "以主要作者身份在顶级学术会议或高水平期刊发表论文",
          "积极申报并承担国家博士后科学基金、国家自然科学基金青年项目、上海市'超级博士后'等科研项目",
          "参与学院重点科研平台和团队建设，协助指导研究生",
        ],
      },
      {
        title: "学术合作与交流",
        items: [
          "参与组织高水平学术活动，与国内外顶尖高校、科研机构及产业界建立并维护良好的学术合作关系",
          "协助学院完成安排的其他科研相关工作",
        ],
      },
      {
        title: "学院公共事务",
        items: [
          "参与学院的学术活动、学术服务及相关行政与公共事务",
          "协助完成学院安排的其他教学与科研相关工作",
        ],
      },
    ],
    salary: [
      "提供具有国际竞争力的薪酬待遇及福利保障",
      "提供充足的科研启动经费和一流的科研环境，支持依托华东师范大学的平台优势申报国家'博新计划'、上海市'超级博士后'激励计划等人才项目",
      "提供清晰的职业发展路径，优秀博士后出站后可优先申请学院助理教授等职位",
    ],
  },
  {
    id: "intern",
    icon: "UserPlus",
    title: "博士实习生",
    subtitle: "Ph.D. Intern",
    desc: "为进一步推进人工智能与金融深度融合，建设国际一流的教学科研团队，上海人工智能金融学院现面向海内外公开招聘博士实习生若干名，诚邀优秀青年人才加盟，共同探索前沿领域。",
    color: "oklch(0.60 0.15 150)",
    requirements: ["海内外知名高校计算机科学、人工智能或相关专业的在读博士生", "在以下一个或多个领域有深入研究或项目经验：大模型安全、大模型幻觉、智能体、Graph RAG、多模态、时间序列", "具备扎实的编程能力和算法基础，熟练掌握至少一种深度学习框架", "具备良好的沟通能力、团队合作精神和强烈的求知欲", "有高水平学术论文发表者优先，可保证3个月以上全职实习者优先"],
    details: [
      {
        title: "科研工作",
        items: [
          "在导师指导下，深度参与人工智能与金融交叉领域的前沿科研项目",
          "负责数据处理、模型设计、算法实现与实验验证等具体研究工作",
          "整理研究成果，撰写高质量学术论文",
        ],
      },
      {
        title: "团队协作",
        items: [
          "参与团队内部的学术讨论和技术分享会",
          "协助导师完成部分项目管理和沟通工作",
        ],
      },
    ],
    salary: [
      "提供有竞争力的实习津贴和福利补贴",
      "获得与学术界和工业界顶尖学者共同研究的机会，积累宝贵的前沿项目经验",
      "表现优异者可获得留用机会或强有力的推荐信",
      "支持以实习期间的研究成果发表高水平学术论文",
    ],
  },
  {
    id: "assistant",
    icon: "BookOpen",
    title: "助理教授",
    subtitle: "Assistant Professor",
    desc: "为进一步推进人工智能与金融深度融合，建设国际一流的教学科研团队，上海人工智能金融学院现面向海内外公开招聘助理教授若干名，诚邀青年学者加盟。",
    color: "oklch(0.55 0.15 280)",
    requirements: ["已获得或即将获得计算机科学、人工智能学科博士学位", "在大模型安全、大模型幻觉、智能体、Graph RAG、多模态、时间序列等相关领域具有深入研究", "具备独立开展科研工作的能力", "具有良好的职业道德、团队合作精神和学术规范意识", "在顶级AI会议或期刊发表多篇论文者优先"],
    details: [
      {
        title: "教学工作",
        items: [
          "承担学院本科生及研究生相关课程的教学任务",
          "参与课程体系建设与教学内容创新，推动交叉学科高质量人才培养",
          "指导本科生、硕士生及博士生的学习与科研工作",
        ],
      },
      {
        title: "科研工作",
        items: [
          "围绕人工智能与金融交叉领域开展前沿学术研究，形成具有国际影响力的研究成果",
          "以第一作者或通讯作者身份在顶级学术会议或高水平期刊发表论文",
          "积极申报并承担国家级，省部级及其他科研项目",
          "参与学院重点科研平台和科研团队建设",
        ],
      },
      {
        title: "学科与平台建设",
        items: [
          "参与学院学科发展规划、科研方向凝练及实验室建设",
          "推动人工智能技术在金融领域的理论创新与应用研究",
          "与国内外高校、科研机构及产业界建立并维护学术合作关系",
        ],
      },
      {
        title: "学院公共事务",
        items: [
          "参与学院的学术活动、学术服务及相关行政与公共事务",
          "协助完成学院安排的其他教学与科研相关工作",
        ],
      },
    ],
    salary: [
      "提供具有国际竞争力的薪酬待遇",
      "提供完善的职业发展支持与良好的学术环境",
      "依托华东师范大学平台优势，支持并协助入选者申报国家海外高层次青年人才项目（海外优青）、上海市'白玉兰'系列人才计划等各类高水平人才项目",
    ],
  },
];

const iconMap: Record<string, any> = {
  GraduationCap,
  Users,
  Briefcase,
  UserPlus,
  BookOpen,
};

export default function OpportunityDetail() {
  const params = useParams<{ id: string }>();
  const opp = opportunities.find((o) => o.id === params.id);

  if (!opp) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <h1 className="text-2xl font-display">未找到该机会</h1>
          <Link href="/opportunities" className="text-primary mt-4 inline-block">
            返回机会页面
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[opp.icon];

  return (
    <div>
      <section className="pt-32 pb-16">
        <div className="container">
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            返回机会页面
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `color-mix(in oklch, ${opp.color} 12%, transparent)` }}
            >
              {Icon && <Icon size={28} style={{ color: opp.color }} />}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
                {opp.title}
              </h1>
              <p className="text-sm text-muted-foreground tracking-wider">{opp.subtitle}</p>
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
            {opp.desc}
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
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <h2 className="text-xl font-display text-foreground mb-6">岗位职责</h2>
                <ul className="flex flex-col gap-6">
                  {opp.details.map((section: any, i: number) => (
                    <li key={i}>
                      <h3 className="text-base font-semibold text-foreground mb-2">{section.title}</h3>
                      <ul className="flex flex-col gap-2 pl-4">
                        {section.items.map((item: string, j: number) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-foreground" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
                <h2 className="text-xl font-display text-foreground mb-6">基本要求</h2>
                <ul className="flex flex-col gap-3">
                  {opp.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: opp.color }} />
                      {req}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-4">申请方式</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    请将您的简历、研究计划和相关材料发送至以下邮箱：
                  </p>
                  <a
                    href="mailto:saifsadministration@sem.ecnu.edu.cn"
                    className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                  >
                    <Mail size={14} />
                    saifsadministration@sem.ecnu.edu.cn
                  </a>
                </div>

                {opp.salary && opp.salary.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="text-sm font-semibold text-foreground mb-4">薪酬与支持</h3>
                    <ul className="flex flex-col gap-2">
                      {opp.salary.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: opp.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
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
