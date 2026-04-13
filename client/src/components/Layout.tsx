/**
 * Layout Component — Light & Refined
 * - Clean white navigation with subtle blur
 * - SAIFS inline SVG Logo
 * - Elegant footer with soft background
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, MapPin } from "lucide-react";
import SAIFSLogo from "./SAIFSLogo";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "研究团队", href: "/team" },
  { label: "研究项目", href: "/projects" },
  { label: "发表论文", href: "/papers" },
  { label: "机会", href: "/opportunities" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.99_0.002_260_/_90%)] backdrop-blur-xl border-b border-[oklch(0_0_0_/_6%)] shadow-[0_1px_8px_oklch(0_0_0_/_4%)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <SAIFSLogo className="h-8 sm:h-9 w-auto text-foreground transition-transform duration-300 group-hover:scale-[1.02]" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  location === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-[oklch(0_0_0_/_3%)]"
                }`}
              >
                {item.label}
                {location === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[oklch(0.99_0.002_260_/_95%)] backdrop-blur-xl border-b border-[oklch(0_0_0_/_6%)] overflow-hidden"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location === item.href
                        ? "text-primary bg-[oklch(0.52_0.18_270_/_6%)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-[oklch(0_0_0_/_3%)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="relative border-t border-border bg-[oklch(0.97_0.005_260)] overflow-hidden">
        {/* Decorative soft glow */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[oklch(0.52_0.18_270_/_4%)] rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[150px] bg-[oklch(0.62_0.15_270_/_3%)] rounded-full blur-[100px]" />
        <div className="container py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <SAIFSLogo className="h-7 w-auto text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                全球首家围绕人工智能与金融跨界交叉打造的教育和研究机构。
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide font-sans">
                快速链接
              </h4>
              <div className="flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide font-sans">
                联系方式
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:saifsadministration@sem.ecnu.edu.cn"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={14} />
                  saifsadministration@sem.ecnu.edu.cn
                </a>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>中国上海市普陀区中山北路3663号理科大楼A座5楼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="section-divider mt-12 mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} 上海人工智能金融学院 SAIFS. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              华东师范大学 East China Normal University
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
