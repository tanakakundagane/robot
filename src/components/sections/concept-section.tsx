"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Users } from "lucide-react";

const concepts = [
  {
    icon: Rocket,
    title: "革新的なロボティクス",
    description:
      "最先端のAIと革新的なロボット工学を融合させ、人々の生活を豊かにする次世代のソリューションを創造します。",
  },
  {
    icon: Brain,
    title: "知能化による進化",
    description:
      "深層学習と高度なセンサー技術により、環境を理解し適応する知能ロボットの開発に取り組んでいます。",
  },
  {
    icon: Users,
    title: "人との共生",
    description:
      "テクノロジーは人々の可能性を広げるツール。私たちは人とロボットが調和する未来の実現を目指します。",
  },
];

export function ConceptSection() {
  return (
    <section className="relative min-h-screen overflow-hidden  py-24  inset-0 bg-[linear-gradient(to_right,#72727212_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* アニメーション背景 */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {/* 動く円形グラデーション */}
          <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-blob rounded-full bg-purple-400 opacity-30 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-2000 absolute right-1/4 top-1/3 h-96 w-96 animate-blob rounded-full bg-blue-400 opacity-30 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-4000 absolute bottom-1/4 left-1/3 h-96 w-96 animate-blob rounded-full bg-indigo-200 opacity-30 mix-blend-multiply blur-xl filter" />
        </div>
        {/* オーバーレイを削除 */}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl"
          >
            未来を創る、私たちのビジョン
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-600"
          >
            テクノロジーの力で、人々の暮らしをより豊かに、より便利に。
            私たちは常に未来を見据えて革新を続けています。
          </motion.p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
            >
              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  <concept.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {concept.title}
                </h3>
                <p className="mt-4 text-gray-600">{concept.description}</p>
              </div>
              {/* ホバーエフェクト */}
              <div className="absolute -inset-2 z-0 bg-gradient-to-r from-blue-100/0 via-purple-100 to-indigo-100/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
