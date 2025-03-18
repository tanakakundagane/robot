"use client";

import { motion } from "framer-motion";
import { Users2, Trophy, Target } from "lucide-react";

const companyInfo = {
  name: "株式会社未来ロボティクス",
  established: "2020年4月",
  capital: "1億円",
  employees: "120名",
  address: "東京都渋谷区テック通り1-2-3",
  business: "ロボット開発・製造・販売、AI研究開発",
};

const achievements = [
  {
    icon: Users2,
    number: "120",
    label: "従業員数",
    suffix: "名",
  },
  {
    icon: Trophy,
    number: "50",
    label: "特許取得数",
    suffix: "件",
  },
  {
    icon: Target,
    number: "98",
    label: "顧客満足度",
    suffix: "%",
  },
];

export function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b  py-24">
      {/* 装飾的な背景要素 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#72727212_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-100/40 to-purple-100/40 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              会社概要
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              未来のロボット技術で、より良い社会を創造する
            </p>
          </motion.div>

          {/* 実績数値 */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="mt-4"
                >
                  <div className="text-3xl font-bold text-gray-900">
                    {item.number}
                    <span className="text-xl">{item.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* 会社情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20"
          >
            <div className="overflow-hidden rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm">
              <div className="grid gap-6 text-left sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">会社名</div>
                  <div className="text-lg font-medium text-gray-900">
                    {companyInfo.name}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">設立</div>
                  <div className="text-lg font-medium text-gray-900">
                    {companyInfo.established}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">資本金</div>
                  <div className="text-lg font-medium text-gray-900">
                    {companyInfo.capital}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">従業員数</div>
                  <div className="text-lg font-medium text-gray-900">
                    {companyInfo.employees}
                  </div>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <div className="text-sm text-gray-600">所在地</div>
                  <div className="text-lg font-medium text-gray-900">
                    {companyInfo.address}
                  </div>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <div className="text-sm text-gray-600">事業内容</div>
                  <div className="text-lg font-medium text-gray-900">
                    {companyInfo.business}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
