/**
 * Paper Detail Page — 论文详情
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Calendar, Users, Tag, Mail } from "lucide-react";

const papers = [
  {
    id: "ai-driven-financial-risk",
    year: "2025",
    title: "Towards Competent AI for Fundamental Analysis in Finance: A Benchmark Dataset and Evaluation",
    authors: ["Wu Z", "Zou C", "Wang J", "Wang C", "Yang H", "Shao Y"],
    venue: "arXiv:2506.07315",
    tags: ["Financial AI", "Fundamental Analysis", "Benchmark"],
    abstract: "Generative AI, particularly large language models (LLMs), is beginning to transform the financial industry by automating tasks and helping to make sense of complex financial information. One especially promising use case is the automatic creation of fundamental analysis reports, which are essential for making informed investment decisions, evaluating credit risks, guiding corporate mergers, etc. While LLMs attempt to generate these reports from a single prompt, the risks of inaccuracy are significant. Poor analysis can lead to misguided investments, regulatory issues, and loss of trust. Existing financial benchmarks mainly evaluate how well LLMs answer financial questions but do not reflect performance in real-world tasks like generating financial analysis reports. In this paper, we propose FinAR-Bench, a solid benchmark dataset focusing on financial statement analysis, a core competence of fundamental analysis. To make the evaluation more precise and reliable, we break this task into three measurable steps: extracting key information, calculating financial indicators, and applying logical reasoning. This structured approach allows us to objectively assess how well LLMs perform each step of the process. Our findings offer a clear understanding of LLMs current strengths and limitations in fundamental analysis and provide a more practical way to benchmark their performance in real-world financial settings.",
    link: "https://arxiv.org/abs/2506.07315",
  },
];

function getInitials(name: string) {
  return name.slice(0, 1);
}

export default function PaperDetail() {
  const params = useParams<{ id: string }>();
  const paper = papers.find((p) => p.id === params.id);

  if (!paper) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <h1 className="text-2xl font-display">未找到该论文</h1>
          <Link href="/papers" className="text-primary mt-4 inline-block">
            返回论文页面
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="pt-32 pb-16">
        <div className="container">
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            返回论文页面
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
              <FileText size={28} className="text-primary" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground tracking-wider">{paper.year}</span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display text-foreground">
                {paper.title}
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent mb-6"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="glass-card rounded-2xl p-8 lg:p-10 mb-8">
                <h2 className="text-xl font-display text-foreground mb-6">摘要</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {paper.abstract}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <h2 className="text-xl font-display text-foreground mb-6">论文信息</h2>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={16} className="text-muted-foreground" />
                    <h3 className="text-sm font-semibold text-foreground">作者</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.authors.map((author) => (
                      <span
                        key={author}
                        className="px-3 py-1.5 rounded-lg text-sm bg-primary/8 text-primary"
                      >
                        {author}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-muted-foreground" />
                    <h3 className="text-sm font-semibold text-foreground">年份</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{paper.year}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText size={16} className="text-muted-foreground" />
                    <h3 className="text-sm font-semibold text-foreground">arXiv</h3>
                  </div>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    {paper.link}
                  </a>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={16} className="text-muted-foreground" />
                    <h3 className="text-sm font-semibold text-foreground">标签</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/8 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
