export type Language = "en" | "ja"

export const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ja", label: "Japanese" },
]

type Project = {
  title: string
  description: string
  tags: string[]
  year: string
}

type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
}

type Content = {
  nav: {
    about: string
    projects: string
    experience: string
    resume: string
  }
  languageLabel: string
  about: {
    name: string
    title: string
    tagline: string
  }
  projects: {
    heading: string
    items: Project[]
  }
  experience: {
    heading: string
    items: ExperienceItem[]
  }
  resume: {
    heading: string
    intro: string
    download: string
    education: string
    educationDetail: string
    skills: string
  }
  footer: string
}

export const content: Record<Language, Content> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      resume: "Resume",
    },
    languageLabel: "Language",
    about: {
      name: "Kouta Hebert",
      title: "Software Developer",
      tagline:
        "BComp Honours CS, University of Guelph, 2026",
    },
    projects: {
      heading: "Projects",
      items: [
        {
          title: "Hanabi Design System",
          description:
            "A token-driven component library that unified design and code across six product teams.",
          tags: ["React", "TypeScript", "Figma"],
          year: "2024",
        },
        {
          title: "Murasaki Analytics",
          description:
            "A real-time dashboard that turns dense event data into clear, actionable stories.",
          tags: ["Next.js", "D3", "Postgres"],
          year: "2023",
        },
        {
          title: "Koe Voice Notes",
          description:
            "A minimalist voice journaling app focused on speed, privacy, and quiet typography.",
          tags: ["Swift", "Design", "Audio"],
          year: "2022",
        },
      ],
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Senior Product Designer",
          company: "Sora Labs",
          period: "2022 — Present",
          description:
            "Lead design for the core platform, partnering closely with engineering to ship accessible, performant features.",
        },
        {
          role: "Front-End Engineer",
          company: "Studio Kumo",
          period: "2020 — 2022",
          description:
            "Built design systems and marketing sites for early-stage startups across Asia and Europe.",
        },
        {
          role: "Designer",
          company: "Freelance",
          period: "2018 — 2020",
          description:
            "Worked with founders to design brands, interfaces, and the occasional album cover.",
        },
      ],
    },
    resume: {
      heading: "Resume",
      intro:
        "A concise overview of my background. Download the full PDF for the complete picture.",
      download: "Download PDF",
      education: "Education",
      educationDetail: "B.A. in Interaction Design — Tokyo Institute of Design, 2018",
      skills: "Skills",
    },
    footer: "Designed & built by Aoi Tanaka.",
  },
  ja: {
    nav: {
      about: "概要",
      projects: "プロジェクト",
      experience: "経歴",
      resume: "履歴書",
    },
    languageLabel: "言語",
    about: {
      name: "田中 葵",
      title: "プロダクトデザイナー兼開発者",
      tagline:
        "丁寧なデザインと信頼できるエンジニアリングが出会う、穏やかでアクセシブルなデジタル体験をつくっています。",
    },
    projects: {
      heading: "プロジェクト",
      items: [
        {
          title: "花火デザインシステム",
          description:
            "デザインとコードを6つのプロダクトチームで統一した、トークン駆動のコンポーネントライブラリ。",
          tags: ["React", "TypeScript", "Figma"],
          year: "2024",
        },
        {
          title: "紫アナリティクス",
          description:
            "膨大なイベントデータを、明確で実行可能なストーリーへと変えるリアルタイムダッシュボード。",
          tags: ["Next.js", "D3", "Postgres"],
          year: "2023",
        },
        {
          title: "声 ボイスノート",
          description:
            "速度、プライバシー、静かなタイポグラフィにこだわったミニマルな音声日記アプリ。",
          tags: ["Swift", "デザイン", "オーディオ"],
          year: "2022",
        },
      ],
    },
    experience: {
      heading: "経歴",
      items: [
        {
          role: "シニアプロダクトデザイナー",
          company: "ソラ・ラボ",
          period: "2022 — 現在",
          description:
            "コアプラットフォームのデザインを主導し、エンジニアリングと密接に連携してアクセシブルで高性能な機能を提供。",
        },
        {
          role: "フロントエンドエンジニア",
          company: "スタジオ雲",
          period: "2020 — 2022",
          description:
            "アジアとヨーロッパの初期段階のスタートアップ向けにデザインシステムとマーケティングサイトを構築。",
        },
        {
          role: "デザイナー",
          company: "フリーランス",
          period: "2018 — 2020",
          description:
            "創業者と協力して、ブランド、インターフェース、時にはアルバムジャケットまでデザイン。",
        },
      ],
    },
    resume: {
      heading: "履歴書",
      intro:
        "経歴の概要です。全体像はPDFをダウンロードしてご覧ください。",
      download: "PDFをダウンロード",
      education: "学歴",
      educationDetail: "インタラクションデザイン学士 — 東京デザイン工科大学、2018年",
      skills: "スキル",
    },
    footer: "田中 葵 によるデザインと開発。",
  },
}
