"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const navigation = {
  company: [
    { name: "会社概要", href: "/about" },
    { name: "採用情報", href: "/careers" },
    { name: "お知らせ", href: "/news" },
  ],
  solutions: [
    { name: "産業用ロボット", href: "/solutions#industrial" },
    { name: "協働ロボット", href: "/solutions#collaborative" },
    { name: "自律移動ロボット", href: "/solutions#autonomous" },
  ],
  legal: [
    { name: "プライバシーポリシー", href: "/privacy" },
    { name: "利用規約", href: "/terms" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "お問い合わせ", href: "/contact", icon: Mail },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900 py-12 text-white">
      {/* 装飾的な背景要素 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* 会社情報 */}
          <div>
            <h3 className="text-lg font-semibold">会社情報</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ソリューション */}
          <div>
            <h3 className="text-lg font-semibold">ソリューション</h3>
            <ul className="mt-4 space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 法的情報 */}
          <div>
            <h3 className="text-lg font-semibold">法的情報</h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h3 className="text-lg font-semibold">ソーシャル</h3>
            <ul className="mt-4 space-y-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* コピーライト */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} 株式会社未来ロボティクス All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
