"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    title: "産業用ロボットアーム",
    description:
      "高精度な動作制御と柔軟な作業能力を備えた次世代の産業用ロボット。AIによる自己学習機能を搭載し、複雑な製造工程を自動化します。",
    image: "/images/robot-arm.jpg",
    features: ["AI搭載", "高精度制御", "自己学習"],
  },
  {
    title: "自律走行ロボット",
    description:
      "高度なセンサーとナビゲーションシステムを搭載した自律移動ロボット。物流や警備、点検業務など、様々な現場で活躍します。",
    image: "/images/autonomous-robot.jpg",
    features: ["自律走行", "障害物回避", "マルチタスク"],
  },
  {
    title: "協働ロボット",
    description:
      "人との安全な協働作業を実現する新しい形のロボット。直感的な操作と高い安全性で、人とロボットの新しい関係を築きます。",
    image: "/images/collaborative-robot.jpg",
    features: ["安全設計", "簡単操作", "人協働"],
  },
];

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-purple-50-50 py-24">
      {/* 装飾的な背景要素 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#72727212_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-[-10%]">
          <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            革新的なロボットソリューション
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            最先端技術を結集し、未来の働き方を実現するロボットを開発しています
          </p>
        </motion.div>

        <div className="mt-20 space-y-32">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* 画像セクション */}
              <div className="relative w-full lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* テキストセクション */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                    {solution.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {solution.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-white shadow-lg transition-shadow hover:shadow-xl"
                  >
                    詳細を見る
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
