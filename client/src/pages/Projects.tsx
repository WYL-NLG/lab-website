/**
 * Projects Page — 研究项目
 * Design: Timeline-style layout with glass cards
 */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Beaker, TrendingUp, Scale, Brain, Globe, Search, X } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    id: "shanghai-aifin-index",
    icon: TrendingUp,
    titleZh: "全球金融科技中心发展指数",
    titleEn: "Global AI-Finance Center Development Index",
    subtitleZh: "Shanghai AI-Finance Index",
    subtitleEn: "Global AI-Finance Center Index",
    descZh: "构建全面衡量人工智能在金融领域应用深度和广度的综合指数体系，定期发布年度报告，为政策制定者和行业从业者提供决策参考。",
    descEn: "A comprehensive index system measuring the depth and breadth of AI applications in finance, publishing annual reports to provide decision-making references for policymakers and industry practitioners.",
    year: "2025",
    color: "oklch(0.75 0.12 75)",
    tagsZh: ["AI-Fin", "指数研究", "年度报告"],
    tagsEn: ["AI-Fin", "Index Research", "Annual Report"],
  },
];

const allTagsZh = Array.from(new Set(projects.flatMap((p) => p.tagsZh)));
const allTagsEn = Array.from(new Set(projects.flatMap((p) => p.tagsEn)));

export default function Projects() {
  const { language, t } = useLanguage();
  const [yearFilter, setYearFilter] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const title = language === "zh" ? project.titleZh : project.titleEn;
      const desc = language === "zh" ? project.descZh : project.descEn;
      const tags = language === "zh" ? project.tagsZh : project.tagsEn;
      const matchesYear = !yearFilter || project.year.includes(yearFilter);
      const matchesTag = !selectedTag || tags.includes(selectedTag);
      const matchesKeyword =
        !searchKeyword ||
        title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        desc.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        tags.some((tag) => tag.toLowerCase().includes(searchKeyword.toLowerCase()));
      return matchesYear && matchesTag && matchesKeyword;
    });
  }, [yearFilter, selectedTag, searchKeyword, language]);

  const clearFilters = () => {
    setYearFilter("");
    setSelectedTag(null);
    setSearchKeyword("");
  };

  const hasActiveFilters = yearFilter || selectedTag || searchKeyword;
  const allTags = language === "zh" ? allTagsZh : allTagsEn;

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
            Research Projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6"
          >
            {t("projects.title")}
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
            {t("projects.desc")}
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card rounded-2xl p-6"
          >
            {/* Search Bar */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={language === "zh" ? "搜索关键词..." : "Search keywords..."}
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {searchKeyword && (
                  <button
                    onClick={() => setSearchKeyword("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-6">
              {/* Year Filter */}
              <div>
                <span className="text-xs font-medium text-muted-foreground mb-2 block">{t("papers.year")}</span>
                <input
                  type="text"
                  placeholder={language === "zh" ? "输入年份..." : "Enter year..."}
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {t("papers.found")} {filteredProjects.length} {language === "zh" ? "个项目" : "projects"}
                </span>
                <button
                  onClick={clearFilters}
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  <X size={14} />
                  {t("papers.clearFilters")}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-28">
        <div className="container">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent hidden lg:block" />

            <div className="flex flex-col gap-8">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">{language === "zh" ? "没有找到匹配的项目" : "No matching projects found"}</p>
                </div>
              ) : (
                filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="relative lg:pl-20"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-4 top-8 w-5 h-5 rounded-full border-2 hidden lg:flex items-center justify-center"
                      style={{ borderColor: project.color, backgroundColor: `color-mix(in oklch, ${project.color} 20%, transparent)` }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                    </div>

                    <Link href={`/projects/${project.id}`} className="block">
                      <div className="glass-card rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 cursor-pointer" style={{ borderColor: "transparent" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = `color-mix(in oklch, ${project.color} 25%, transparent)`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                        }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `color-mix(in oklch, ${project.color} 12%, transparent)` }}
                          >
                            <project.icon size={22} style={{ color: project.color }} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-xl font-display text-foreground">{language === "zh" ? project.titleZh : project.titleEn}</h3>
                              <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/8 text-primary">
                                {project.year}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground tracking-wider">{language === "zh" ? project.subtitleZh : project.subtitleEn}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{language === "zh" ? project.descZh : project.descEn}</p>
                        <div className="flex flex-wrap gap-2">
                          {(language === "zh" ? project.tagsZh : project.tagsEn).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: `color-mix(in oklch, ${project.color} 10%, transparent)`,
                                color: project.color,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
