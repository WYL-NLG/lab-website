/**
 * Papers Page — 发表论文
 * Design: Clean list with hover effects and input filters
 */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Calendar, Search, X } from "lucide-react";
import { Link } from "wouter";

const papers = [
  {
    id: "ai-driven-financial-risk",
    year: "2025",
    title: "Towards Competent AI for Fundamental Analysis in Finance: A Benchmark Dataset and Evaluation",
    authors: "Wu Z, Zou C, Wang J, Wang C, Yang H, Shao Y",
    venue: "arXiv preprint arXiv:2506.07315",
    tags: ["Financial AI", "Fundamental Analysis", "Benchmark"],
  },
];

export default function Papers() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");

  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      const matchesKeyword =
        !searchKeyword ||
        paper.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        paper.authors.toLowerCase().includes(searchKeyword.toLowerCase());
      const matchesYear =
        !yearFilter || paper.year.toLowerCase().includes(yearFilter.toLowerCase());
      const matchesAuthor =
        !authorFilter || paper.authors.toLowerCase().includes(authorFilter.toLowerCase());
      return matchesKeyword && matchesYear && matchesAuthor;
    });
  }, [searchKeyword, yearFilter, authorFilter]);

  const clearFilters = () => {
    setSearchKeyword("");
    setYearFilter("");
    setAuthorFilter("");
  };

  const hasActiveFilters = searchKeyword || yearFilter || authorFilter;

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
            Publications
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6"
          >
            发表论文
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
            SAIFS 研究团队在人工智能金融、算法伦理、可信AI等领域持续产出高质量学术成果。
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card rounded-2xl p-6"
          >
            {/* Search Bar */}
            <div className="mb-4">
              <span className="text-xs font-medium text-muted-foreground mb-2 block">搜索</span>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="搜索论文标题或作者..."
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

            {/* Input Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Year Filter */}
              <div>
                <span className="text-xs font-medium text-muted-foreground mb-2 block">年份</span>
                <input
                  type="text"
                  placeholder="输入年份..."
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Author Filter */}
              <div>
                <span className="text-xs font-medium text-muted-foreground mb-2 block">作者</span>
                <input
                  type="text"
                  placeholder="输入作者名..."
                  value={authorFilter}
                  onChange={(e) => setAuthorFilter(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  找到 {filteredPapers.length} 篇论文
                </span>
                <button
                  onClick={clearFilters}
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  <X size={14} />
                  清除筛选
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Papers List */}
      <section className="pb-28">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-4">
            {filteredPapers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">没有找到匹配的论文</p>
              </div>
            ) : (
              filteredPapers.map((paper, i) => (
                <motion.article
                  key={paper.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                >
                  <Link href={`/papers/${paper.id}`} className="block">
                    <div className="glass-card rounded-xl p-6 group transition-all duration-400 hover:border-primary/20 hover:-translate-y-0.5 cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                          <FileText size={18} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-foreground font-sans leading-snug mb-2 group-hover:text-primary transition-colors">
                            {paper.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{paper.authors}</p>
                          <div className="flex items-center gap-4 flex-wrap">
                            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar size={12} />
                              {paper.year}
                            </span>
                            <span className="text-xs text-muted-foreground italic">{paper.venue}</span>
                            <div className="flex gap-2 ml-auto">
                              {paper.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/8 text-primary"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
