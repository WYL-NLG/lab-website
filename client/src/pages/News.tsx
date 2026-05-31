/**
 * News Page — 最新动态 / News
 */
import { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Calendar, ArrowRight, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { newsList } from "../data/newsData";

const PAGE_SIZE = 15;
const STORAGE_KEY = "news_page_state";

interface NewsPageState {
  newsId: string;
  keyword: string;
  yearFilter: string;
  currentPage: number;
  scrollY: number;
}

export default function News() {
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();
  const [keyword, setKeyword] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [customPage, setCustomPage] = useState("");
  const [pendingRestore, setPendingRestore] = useState<NewsPageState | null>(null);
  const hasRestoredRef = useRef(false);

  const filteredNews = useMemo(() => {
    const sortedNews = [...newsList].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return sortedNews.filter((item) => {
      const title = language === "zh" ? item.titleZh : item.titleEn;
      const excerpt = language === "zh" ? item.excerptZh : item.excerptEn;
      const matchesKeyword =
        !keyword ||
        title.toLowerCase().includes(keyword.toLowerCase()) ||
        excerpt.toLowerCase().includes(keyword.toLowerCase());
      const matchesYear = !yearFilter || item.date.includes(yearFilter);
      return matchesKeyword && matchesYear;
    });
  }, [keyword, yearFilter, language]);

  const totalPages = Math.max(1, Math.ceil(filteredNews.length / PAGE_SIZE));
  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredNews.slice(start, start + PAGE_SIZE);
  }, [filteredNews, currentPage]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  useEffect(() => {
    let restoreState: NewsPageState | null = null;

    const historyState = window.history.state?.newsPageState;
    if (historyState) {
      restoreState = historyState as NewsPageState;
    } else {
      const savedState = sessionStorage.getItem(STORAGE_KEY);
      if (savedState) {
        try {
          restoreState = JSON.parse(savedState) as NewsPageState;
        } catch {
          sessionStorage.removeItem(STORAGE_KEY);
        }
      }
    }

    if (restoreState) {
      setKeyword(restoreState.keyword || "");
      setYearFilter(restoreState.yearFilter || "");
      setCurrentPage(restoreState.currentPage || 1);
      setPendingRestore(restoreState);
      hasRestoredRef.current = true;
      if (historyState) {
        window.history.replaceState({ ...window.history.state, newsPageState: null }, "");
      }
    }
  }, []);

  useEffect(() => {
    if (!pendingRestore) return;
    const state = pendingRestore;
    setPendingRestore(null);

    const el = document.getElementById(`news-${state.newsId}`);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        sessionStorage.removeItem(STORAGE_KEY);
      });
    } else {
      setTimeout(() => {
        const retryEl = document.getElementById(`news-${state.newsId}`);
        if (retryEl) {
          retryEl.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          window.scrollTo({ top: state.scrollY, behavior: "smooth" });
        }
        sessionStorage.removeItem(STORAGE_KEY);
      }, 200);
    }
  }, [pendingRestore, paginatedNews]);

  useEffect(() => {
    if (!hasRestoredRef.current) {
      const timer = setTimeout(() => window.scrollTo(0, 0), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNewsClick = (newsId: string) => {
    const state: NewsPageState = {
      newsId,
      keyword,
      yearFilter,
      currentPage,
      scrollY: window.scrollY,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    try {
      window.history.replaceState(
        { ...window.history.state, newsPageState: state },
        ""
      );
    } catch {}
    setLocation(`/news/${newsId}`);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const handleCustomPage = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(customPage, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      setCustomPage("");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const clearFilters = () => {
    setKeyword("");
    setYearFilter("");
    setCurrentPage(1);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const hasActiveFilters = keyword || yearFilter;

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
            Latest News
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6"
          >
            {t("news.pageTitle")}
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
            {t("news.desc")}
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
            <div className="flex flex-wrap gap-6">
              {/* Keyword Search */}
              <div className="flex-1 min-w-[200px]">
                <span className="text-xs font-medium text-muted-foreground mb-2 block">
                  {language === "zh" ? "关键词" : "Keyword"}
                </span>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={language === "zh" ? "搜索关键词..." : "Search keywords..."}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  {keyword && (
                    <button
                      onClick={() => setKeyword("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Year Filter */}
              <div>
                <span className="text-xs font-medium text-muted-foreground mb-2 block">
                  {language === "zh" ? "年份" : "Year"}
                </span>
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
                  {language === "zh" ? "找到" : "Found"} {filteredNews.length} {language === "zh" ? "条新闻" : "news"}
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

      {/* News List */}
      <section className="pb-28">
        <div className="container">
          <div className="flex flex-col gap-4">
            {paginatedNews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {language === "zh" ? "没有找到匹配的新闻" : "No matching news found"}
                </p>
              </div>
            ) : (
              paginatedNews.map((item, i) => (
                <div key={item.id} id={`news-${item.id}`}>
                  <div
                    onClick={() => handleNewsClick(item.id)}
                    className="group block glass-card rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:border-primary/15 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <Calendar size={16} className="text-primary mt-1 shrink-0" />
                      <time className="text-sm text-primary font-medium">{item.date}</time>
                    </div>
                    <h3 className="text-lg sm:text-xl font-display text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                      {language === "zh" ? item.titleZh : item.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {language === "zh" ? item.excerptZh : item.excerptEn}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      {language === "zh" ? "阅读更多" : "Read More"} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
              </div>
            ))
            )}
          </div>

          {filteredNews.length > 0 && totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex items-center justify-center gap-4"
            >
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-inherit"
              >
                <ChevronLeft size={16} />
                {language === "zh" ? "上一页" : "Previous"}
              </button>

              <span className="text-sm text-muted-foreground">
                {language === "zh" ? "第" : "Page"} {currentPage} {language === "zh" ? "页" : ""} {language === "zh" ? "共" : "of"} {totalPages} {language === "zh" ? "页" : ""}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-inherit"
              >
                {language === "zh" ? "下一页" : "Next"}
                <ChevronRight size={16} />
              </button>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {language === "zh" ? "跳转到" : "Go to"}
                </span>
                <form onSubmit={handleCustomPage} className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={customPage}
                    onChange={(e) => setCustomPage(e.target.value)}
                    placeholder={currentPage.toString()}
                    className="w-16 px-3 py-2 rounded-lg border border-border text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg border border-border text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {language === "zh" ? "跳转" : "Go"}
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
