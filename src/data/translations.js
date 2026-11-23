export const translations = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      community: "Community",
      download: "Download",
      faq: "FAQ",
      support: "Support",
      langSwitch: "العربية"
    },
    home: {
      heroTitlePrefix: "Customize your Brawlhalla ",
      heroTitleHighlight: "your way.",
      heroDesc: "A lightweight, ultra-fast native Windows desktop studio engineered specifically for exploring, previewing, and applying cosmetic modifications to Brawlhalla with bit-exact atomic rollbacks.",
      downloadBtn: "Download",
      exploreBtn: "Explore features",
      metaSafe: "100% Client-Side & Safe",
      metaDetection: "Sub-Millisecond Win32 Detection",
      metaRollback: "Bit-Exact Rollback",
      mockupHeader: "SKINNER STUDIO",
      mockupWelcome: "Skinner Customizer",
      mockupSubtitle: "Real-time cosmetic workbench",
      mockupRoster: "ROSTER",
      mockupRosterVal: "70+ Legends",
      mockupCatalog: "CATALOG",
      mockupCatalogVal: "790+ Costumes",
      mockupModules: "Studio Modules",
      mockupActive: "ACTIVE",
      mockupModule1: "Costume & Weapon Studio",
      mockupModule2: "Knockout (KO) Effects",
      mockupModule3: "GameBanana Maps & Addons",
      chipTop: "70+ Legends & 2,100+ Weapons",
      chipBottom: "Bit-Exact Atomic Rollback",
      tabCustomizer: "Customizer Studio",
      tabLegends: "Legends Roster",
      tabKoGrid: "KO Effects",
      tabKoDetail: "KO Editor",
      whyEyebrow: "WHY CHOOSE SKINNER?",
      whyTitle: "The ultimate cosmetic studio, engineered for speed.",
      whyDesc: "Everything you need to customize your character skins, weapons, and stages with instant rollbacks.",
      exploreAll: "Explore all features"
    },
    featuresPage: {
      eyebrow: "CAPABILITIES & ARCHITECTURE",
      title: "Built for speed, safety, and precision.",
      description: "Explore the architecture powering Skinner. Combining a memory-safe Rust host, Microsoft Edge WebView2, and React 19 with a high-throughput .NET 8 vector rendering engine.",
      badge: "Skinner Native Engine",
      showcaseTitle: "Inside Skinner Studio",
      showcaseDesc: "Explore real, high-resolution views of the native Windows application in action.",
      tabCustomizer: "Customizer Studio (Wu Shang)",
      tabLegends: "Complete 70+ Legends Roster",
      tabKoGrid: "KO Effects Library",
      tabKoDetail: "KO Replacement & Testing",
      items: [
        {
          title: "Complete Roster & Catalog",
          description: "Instant Game.swz decryption and parsing of all 70+ playable Legends, 790+ costumes, and 2,100+ weapon skins in under 250 milliseconds."
        },
        {
          title: "Independent Weapon Loadouts",
          description: "Equip primary and secondary weapon skins from any costume across all 14 weapon types (Sword, Scythe, Gauntlets, Blasters, Spear, and more)."
        },
        {
          title: "Bit-Exact Safety & Rollbacks",
          description: "Cryptographic SHA-256 fingerprinting before any modification. Instant 1-click rollback restores official assets without re-verifying Steam files."
        },
        {
          title: "Dynamic Palette Recoloring",
          description: "Real-time color palette preview chips and custom scheme baking directly into vector character asset SWFs."
        },
        {
          title: "Maps & Community Addons",
          description: "Browse, preview, and 1-click install community arenas and custom stages from GameBanana with modular component toggles."
        },
        {
          title: "Zero Idle Disk Thrashing",
          description: "Sub-millisecond Win32 Toolhelp32 game detection and intelligent file stat caching ensure maximum performance and 60+ FPS navigation."
        }
      ]
    },
    communityPage: {
      eyebrow: "COMMUNITY SUPPORTER",
      title: "Support Skinner Studio.",
      description: "Skinner is 100% free and open-source for the entire Brawlhalla community. You can help our project grow and support future updates.",
      supporterTitle: "Community Supporter",
      supporterDesc: "No payments or subscriptions required. Your star on GitHub and active participation in our Discord community help us develop new features, skins, and modding tools.",
      features: [
        "Star the repository on GitHub",
        "Join our active community Discord",
        "Suggest new skins, legends & features",
        "Help test early experimental builds",
        "Share feedback and report issues"
      ],
      starBtn: "Star on GitHub",
      discordBtn: "Join Discord"
    },
    downloadPage: {
      eyebrow: "DOWNLOAD SKINNER",
      title: "Get Skinner for Windows.",
      description: "Download the latest verified release archive. Self-contained, portable, and requires no administrative privileges or setup.",
      cardTitle: "Skinner for Windows x64",
      cardSubtitle: "Portable Package · Version {version} · Windows 10 / 11 (64-bit)",
      detailWin: "Windows x64",
      detailSigned: "Ed25519 Signed",
      detailZip: "Portable ZIP",
      downloadMain: "Download Skinner {version} (Official Release)",
      downloadComingSoon: "Download link coming soon"
    },
    changelogPage: {
      eyebrow: "VERSION HISTORY",
      title: "Changelog.",
      description: "A verified record of improvements, architectural optimizations, and releases across Skinner.",
      githubBtn: "View full commit log & releases on GitHub",
      disclaimer: "Release notes reflect verified production builds distributed on official Skinner channels."
    },
    faqPage: {
      eyebrow: "HELP CENTER",
      title: "Frequently asked questions.",
      description: "Quick answers about Skinner, safety, customization, and rollbacks.",
      items: [
        {
          q: "How to get free skins in Brawlhalla using Skinner Studio?",
          a: "Skinner Studio allows you to explore, preview, and equip all 790+ character costumes and 2,100+ weapon cosmetics directly in Brawlhalla for free on your PC. It operates 100% locally and includes an instant 1-click rollback button to restore original game files at any time."
        },
        {
          q: "Is Skinner safe to use with Brawlhalla?",
          a: "Yes. Skinner operates purely on local client-side visual assets (such as vector SWF files, stage backgrounds, and UI sprites). It does not hook game memory, alter netcode, or inject runtime cheats. All modifications are purely cosmetic."
        },
        {
          q: "How does the single-click rollback system work?",
          a: "Before applying any cosmetic modification or map, Skinner creates a bit-exact snapshot of the original official game files inside .studio_backups/. Clicking 'Rollback All' instantly restores original files to pristine condition without needing to re-verify game cache through Steam."
        },
        {
          q: "Can I equip weapon skins independently from character costumes?",
          a: "Absolutely! Skinner gives you complete creative freedom to equip any primary and secondary weapon skins from any costume across all 14 weapon types (Sword, Hammer, Blasters, Spear, Rocket Lance, Katars, Bow, Axe, Gauntlets, Scythe, Cannon, Orb, Greatsword, Battle Boots)."
        },
        {
          q: "How do custom maps and community addons work?",
          a: "Skinner features a dedicated Addons page connected to GameBanana. You can browse, preview screenshots, and 1-click download community arenas. Skinner automatically unpacks .bmod containers, places files into the correct game directories, and lets you toggle individual stage elements (backgrounds, platforms) on or off."
        },
        {
          q: "Is Skinner completely free?",
          a: "Yes! Skinner is 100% free and community-oriented. All 70+ playable Legends, hundreds of costumes, weapon combinations, and map addons are accessible to everyone without subscriptions or paywalls."
        },
        {
          q: "How does the cryptographic auto-updater work?",
          a: "Skinner automatically discovers official GitHub releases and verifies each package using Ed25519 digital signatures and SHA-256 checksums against an embedded official public key, guaranteeing authenticity and security."
        }
      ]
    },
    footer: {
      slogan: "A high-performance native desktop studio for Brawlhalla cosmetic customization.",
      explore: "Explore",
      community: "Community",
      legal: "Legal",
      privacy: "Privacy policy",
      terms: "Terms of use",
      support: "Support",
      rights: "All rights reserved.",
      disclaimer: "Independent community project · Not affiliated with Ubisoft or Blue Mammoth Games."
    },
    supportPage: {
      title: "Support & Help",
      description: "Need help, want to report an issue, or chat with the community? Join our official Discord server.",
      discordTitle: "Official Discord Server",
      discordDesc: "Our dedicated hub for live technical assistance, troubleshooting, feature discussions, and community updates.",
      discordBtn: "Join Discord Server",
      noticeTip: "Quick Tip:",
      noticeText: "If you run into any game visual issues, Skinner includes a single-click \"Rollback All\" button inside Settings that restores 100% of official game files instantly."
    },
    aboutPage: {
      title: "Built independently. Engineered for players.",
      description: "Skinner is an ultra-fast native Windows desktop studio designed to give Brawlhalla players complete creative control over character costumes, weapon combinations, and stages.",
      storyHeading: "A dedicated studio for player creativity.",
      storyP1: "Skinner was born out of a desire for a clean, secure, and modern cosmetic experience for Brawlhalla. We believe players should be able to express themselves with complete aesthetic freedom without dealing with messy manual file replacements, risky third-party injectors, or fragile workarounds.",
      storyP2: "By combining high-performance native Windows technologies with cryptographic verification and modern UI design, Skinner provides a studio-grade workbench that respects both player safety and game performance.",
      principlesHeading: "What drives Skinner development.",
      valSpeedTitle: "Sub-Millisecond Speed",
      valSpeedText: "Instant Game.swz decryption and zero idle disk thrashing for 60+ FPS navigation.",
      valSafetyTitle: "Bit-Exact Safety",
      valSafetyText: "Automatic SHA-256 snapshots and atomic rollback guarantees 100% game integrity.",
      valCommunityTitle: "Community First",
      valCommunityText: "100% free and community-driven cosmetic studio with no subscriptions or paywalls.",
      valIndepTitle: "Transparent & Independent",
      valIndepText: "Client-side modifications only. Never touches game memory or anti-cheat systems."
    },
    legalPage: {
      privacyTitle: "Privacy Policy.",
      termsTitle: "Terms of Use.",
      description: "Legal information and guidelines regarding the Skinner desktop application and official website.",
      dataTitle: "Data Collection & Privacy",
      dataText: "Skinner is engineered with player privacy as a core principle. The Skinner desktop application operates entirely locally on your Windows computer. It does not collect personal identity information, passwords, game account credentials, or track in-game gameplay sessions.",
      assetTitle: "Local Asset Operations",
      assetText: "All file operations, including SWZ decryption, SWF asset remapping, and backup snapshots, are executed locally within your system's game directory and the .studio_backups/ folder. No game files are uploaded to external servers.",
      networkTitle: "External Network Connections",
      networkIntro: "Network connections made by Skinner are strictly limited to:",
      networkLi1: "Checking official GitHub Releases for application updates via HTTPS.",
      networkLi2: "Querying the GameBanana public API when browsing or downloading community maps and addons on the Addons page.",
      indepTitle: "Independent Project Disclaimer",
      indepText: "Skinner is an independent, community-driven project. It is not affiliated with, endorsed by, or associated with Ubisoft, Blue Mammoth Games, or Brawlhalla. All game assets, character designs, and trademarks are the intellectual property of their respective owners.",
      licenseTitle: "Acceptance of Terms",
      licenseText: "By downloading, extracting, or executing the Skinner desktop application, you agree to comply with and be bound by these Terms of Use.",
      usageTitle: "Permitted Use & Safety",
      usageText: "Skinner is intended solely for client-side aesthetic and cosmetic modification of officially owned copies of Brawlhalla. You agree not to use Skinner to distribute malicious software, bypass fair play rules, or gain unfair competitive advantages.",
      warrantyTitle: "Disclaimer of Warranty",
      warrantyText: "Skinner is provided 'as is' and 'as available', without warranties of any kind. While Skinner incorporates automated cryptographic backups and atomic rollback protection, you use the software at your own discretion."
    },
    notFoundPage: {
      code: "404",
      title: "Page not found.",
      desc: "The page you're looking for doesn't exist or may have moved.",
      backBtn: "Back to home"
    }
  },

  ar: {
    nav: {
      home: "الرئيسية",
      features: "الميزات",
      community: "المجتمع",
      download: "التحميل",
      faq: "الأسئلة الشائعة",
      support: "الدعم",
      langSwitch: "English"
    },
    home: {
      heroTitlePrefix: "خصّص لعبة Brawlhalla ",
      heroTitleHighlight: "على طريقتك.",
      heroDesc: "استوديو مكتبي فائق الأداء لنظام ويندوز، مصمم خصيصاً لاستكشاف وتعديل وتطبيق السكنات، الأسلحة، والمظاهر للعبة Brawlhalla مع ضمان استرجاع الملفات الأصلية بدقة تامة.",
      downloadBtn: "تحميل",
      exploreBtn: "استكشف الميزات",
      metaSafe: "100% محلي وآمن تماماً",
      metaDetection: "كشف لحظي للعبة بدون استهلاك",
      metaRollback: "استرجاع فوري للملفات الأصلية",
      mockupHeader: "استوديو SKINNER",
      mockupWelcome: "لوحة تخصيص Skinner",
      mockupSubtitle: "بيئة التعديل اللحظي للمظاهر",
      mockupRoster: "الأبطال",
      mockupRosterVal: "70+ أسطورة",
      mockupCatalog: "الكتالوج",
      mockupCatalogVal: "790+ سكن ومظهر",
      mockupModules: "وحدات الاستوديو",
      mockupActive: "نشط",
      mockupModule1: "استوديو السكنات والأسلحة",
      mockupModule2: "تأثيرات الإطاحة (KO)",
      mockupModule3: "خرائط وإضافات GameBanana",
      chipTop: "70+ أسطورة و 2,100+ سلاح",
      chipBottom: "استرجاع ذري فوري وآمن",
      tabCustomizer: "استوديو التخصيص",
      tabLegends: "قائمة الأساطير",
      tabKoGrid: "تأثيرات الـ KO",
      tabKoDetail: "معاينة التأثير",
      whyEyebrow: "لماذا تختار SKINNER؟",
      whyTitle: "الاستوديو الشامل للمظاهر، مصمم لأقصى سرعة.",
      whyDesc: "كل ما تحتاجه لتخصيص سكنات الأساطير، الأسلحة، والساحات مع ضمان استرجاع الملفات الأصلية بنقرة واحدة.",
      exploreAll: "استعراض كافة الميزات"
    },
    featuresPage: {
      eyebrow: "القدرات والمعمارية التقنية",
      title: "مصمم للسرعة، الأمان، والدقة التامة.",
      description: "تعرف على البنية التقنية التي تشغل استوديو Skinner. مزيج متكامل من لغة Rust الآمنة و Microsoft Edge WebView2 و React 19 مع محرك رندر متجهات فائق السرعة عبر .NET 8.",
      badge: "محرك Skinner الأصلي",
      showcaseTitle: "لقطات حقيقية من داخل استوديو Skinner",
      showcaseDesc: "معاينة واقعية ومباشرة لواجهة التطبيق وسلاسة التحكم على نظام ويندوز.",
      tabCustomizer: "استوديو تخصيص الأساطير والأسلحة",
      tabLegends: "قائمة كافة الأساطير الـ 70+",
      tabKoGrid: "مكتبة تأثيرات الضربة القاضية (KO)",
      tabKoDetail: "تخصيص ومعاينة تأثيرات الـ KO",
      items: [
        {
          title: "كتالوج وأساطير مكتملة",
          description: "فك تشفير وقراءة لحظية لملف Game.swz لكافة الـ 70+ أسطورة و 790+ سكن و 2,100+ مظهر سلاح في أقل من 250 مللي ثانية."
        },
        {
          title: "حرية دمج الأسلحة بالكامل",
          description: "تجهيز ودمج سكنات السلاحين الأساسي والثانوي من أي مظهر عبر جميع فئات الأسلحة الـ 14 (سيف، منجل، قبضات، قاذفات، رمح، والمزيد)."
        },
        {
          title: "أمان واسترجاع ذري Bit-Exact",
          description: "حفظ لقطات مشفرة ببصمة SHA-256 قبل أي تعديل. استرجاع فوري بنقرة واحدة يعيد ملفات اللعبة الأصلية دون الحاجة لإعادة فحص ملفات Steam."
        },
        {
          title: "تلوين ديناميكي للوحات الألوان",
          description: "معاينة حية ومباشرة لشرائح الألوان وحقن لوحات التلوين مباشرة داخل ملفات SWF لرسوم الشخصيات المتجهة."
        },
        {
          title: "خرائط وإضافات المجتمع",
          description: "تصفح ومعاينة وتثبيت ساحات وخرائط مجتمع GameBanana بنقرة واحدة مع إمكانية تفعيل أو تعطيل كل عنصر (خلفيات، منصات) بشكل منفصل."
        },
        {
          title: "صفر استهلاك للقرص في الخلفية",
          description: "كشف حالة اللعبة في 0.14 مللي ثانية عبر Win32 Toolhelp32 وتخزين ذكي للمعلومات الوصفية لضمان تصفح سلس بسرعة 60+ إطاراً."
        }
      ]
    },
    communityPage: {
      eyebrow: "داعم المجتمع",
      title: "دعم مشروع Skinner Studio.",
      description: "برنامج Skinner مجاني تماماً 100% ومفتوح المصدر لكافة لاعبي مجتمع Brawlhalla. يمكنك المساهمة في دعم نمو المشروع واستمرار التحديثات.",
      supporterTitle: "داعم المجتمع (Community Supporter)",
      supporterDesc: "لا توجد أي اشتراكات أو مدفوعات مطلوبة. نجمتك على مستودع GitHub وتفاعلك داخل مجتمع ديسكورد يساعدنا على تطوير ميزات جديدة وسكنات وأدوات تخصيص متقدمة.",
      features: [
        "وضع نجمة (Star) للمستودع على GitHub",
        "الانضمام لمجتمع ديسكورد والمشاركة في النقاشات",
        "اقتراح سكنات وميزات جديدة للأساطير والأسلحة",
        "المساعدة في اختبار التحديثات التجريبية المبكرة",
        "مشاركة الملاحظات والإبلاغ عن الأخطاء التقنية"
      ],
      starBtn: "نجمة على GitHub",
      discordBtn: "انضم للديسكورد"
    },
    downloadPage: {
      eyebrow: "تحميل SKINNER",
      title: "احصل على Skinner لنظام Windows.",
      description: "قم بتحميل أحدث حزمة معتمدة. تطبيق محمول وقائم بذاته بالكامل، لا يتطلب صلاحيات مسؤول أو عملية تثبيت.",
      cardTitle: "Skinner لنظام Windows x64",
      cardSubtitle: "حزمة محمولة · الإصدار {version} · Windows 10 / 11 (64-bit)",
      detailWin: "ويندوز x64",
      detailSigned: "موقّع Ed25519",
      detailZip: "حزمة ZIP محمولة",
      downloadMain: "تحميل Skinner {version} (الإصدار الرسمي)",
      downloadComingSoon: "رابط التحميل سيتوفر قريباً"
    },
    changelogPage: {
      eyebrow: "سجل الإصدارات",
      title: "سجل التغييرات.",
      description: "سجل موثق بالتحسينات المعمارية، تحسينات الأداء، والميزات الجديدة عبر إصدارات Skinner.",
      githubBtn: "عرض سجل التغييرات الكامل على GitHub",
      disclaimer: "ملاحظات الإصدار تعكس النسخ الرسمية المعتمدة والموزعة عبر قنوات Skinner."
    },
    faqPage: {
      eyebrow: "مركز المساعدة",
      title: "الأسئلة الشائعة.",
      description: "إجابات واضحة ومباشرة حول برنامج Skinner، الأمان، التخصيص، وطريقة الاسترجاع.",
      items: [
        {
          q: "كيفية الحصول على سكنات براول هالا مجاناً عبر برنامج Skinner؟",
          a: "يتيح لك برنامج Skinner استكشاف وتجهيز أي سكن من بين أكثر من 790+ سكن لجميع الأساطير الـ 70+ وأكثر من 2,100+ مظهر سلاح مجاناً بالكامل على حاسوبك الشخصي بنقرة زر واحدة، مع ميزة الاسترجاع الفوري للملفات الأصلية دون الحاجة لإعادة تحميل ملفات اللعبة."
        },
        {
          q: "هل استخدام Skinner آمن مع لعبة Brawlhalla؟",
          a: "نعم. يعمل Skinner فقط وبشكل حصري على الملفات الرسومية المحلية من جانب العميل (Client-Side) مثل ملفات الفلاش SWF وخلفيات الساحات. لا يتدخل في ذاكرة اللعبة، ولا يعدل كود الشبكة، ولا يحقن أي برمجيات غش. جميع التعديلات شكلية وتجميلية فقط."
        },
        {
          q: "كيف يعمل نظام الاسترجاع الفوري للملفات الأصلية؟",
          a: "قبل تطبيق أي مظهر أو خريطة، يأخذ Skinner نسخة احتياطية مطابقة بنسبة 100% بالبايت من ملفات اللعبة الرسمية ويحفظها في مجلد .studio_backups/. عند الضغط على 'استرجاع الكل'، يتم استبدال الملفات فوراً بنسخها الرسمية دون الحاجة لإعادة فحص ملفات اللعبة عبر Steam."
        },
        {
          q: "هل يمكنني تجهيز سكنات أسلحة مستقلة عن سكن الشخصية؟",
          a: "بالتأكيد! يمنحك Skinner حرية إبداعية كاملة لاختيار سكن السلاح الأول والسلاح الثاني من أي مظهر تريده عبر جميع فئات الأسلحة الـ 14 (سيف، مطرقة، قاذفات، رمح، لانس، مخالب، قوس، فأس، قبضات، منجل، مدفع، أورب، سيف عظيم، وحذاء قتالي)."
        },
        {
          q: "كيف تعمل الخرائط وإضافات المجتمع؟",
          a: "يحتوي Skinner على صفحة إضافات مخصصة متصلة مباشرة بـ GameBanana. يمكنك تصفح الخرائط ومعاينة الصور وتنزيلها بنقرة واحدة. يقوم البرنامج بفك ضغط ملفات .bmod ونقلها لمساراتها المناسبة، مع إمكانية تشغيل أو إيقاف أي جزء من الخريطة (كالخلفية أو المنصات)."
        },
        {
          q: "هل برنامج Skinner مجاني تماماً؟",
          a: "نعم! برنامج Skinner مجاني 100% وموجه لخدمة المجتمع. جميع الأساطير الـ 70+، ومئات المظاهر والأسلحة والخرائط متاحة بالكامل أمام الجميع دون أي اشتراكات أو رسوم مخفية."
        },
        {
          q: "كيف يعمل نظام التحديث التلقائي المشفر؟",
          a: "يبحث Skinner تلقائياً عن التحديثات الرسمية على GitHub ويتحقق من كل حزمة باستخدام توقيعات رقمية بخوارزمية Ed25519 ومطابقة بصمة SHA-256 مع المفتاح الرسمي المدمج، لضمان أصالة الملفات وسلامتها التامة."
        }
      ]
    },
    footer: {
      slogan: "استوديو مكتبي فائق الأداء لنظام ويندوز لتخصيص سكنات ومظاهر لعبة Brawlhalla.",
      explore: "استكشاف",
      community: "المجتمع",
      legal: "قانوني",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      support: "الدعم الفني",
      rights: "جميع الحقوق محفوظة.",
      disclaimer: "مشروع مجتمعي مستقل · غير تابع لـ Ubisoft أو Blue Mammoth Games."
    },
    supportPage: {
      title: "الدعم الفني والمساعدة",
      description: "هل تحتاج إلى مساعدة أو ترغب في الإبلاغ عن مشكلة؟ انضم مباشرة إلى سيرفر ديسكورد الرسمي.",
      discordTitle: "سيرفر ديسكورد الرسمي",
      discordDesc: "مركز الدعم الفني المباشر لحل المشاكل، الإبلاغ عن الأخطاء، متابعة التحديثات، والتواصل مع مجتمع اللاعبين.",
      discordBtn: "الانضمام لسيرفر Discord",
      noticeTip: "ملاحظة سريعة:",
      noticeText: "إذا واجهت أي خطأ بصري داخل اللعبة، يحتوي برنامج Skinner على زر 'استرجاع الكل' بنقرة واحدة داخل الإعدادات لاستعادة 100% من ملفات اللعبة الأصلية فوراً."
    },
    aboutPage: {
      title: "مشروع مستقل. مصمم خصيصاً للاعبين.",
      description: "برنامج Skinner هو استوديو مكتبي فائق الأداء لنظام ويندوز، يمنح لاعبي Brawlhalla تحكماً إبداعياً كاملاً في سكنات الشخصيات، تشكيلات الأسلحة، والساحات.",
      storyHeading: "استوديو مخصص لإبداع وتخصيص اللاعبين.",
      storyP1: "نشأت فكرة Skinner بدافع توفير تجربة تخصيص مظاهر نظيفة وآمنة وعصرية للعبة Brawlhalla. نؤمن بأن للاعبين كامل الحرية للتعبير عن أسلوبهم الخاص دون الحاجة للتعامل مع استبدال الملفات يدوياً، أو برامج الحقن الخطيرة، أو الحلول الالتفافية الهشة.",
      storyP2: "من خلال الجمع بين تقنيات ويندوز الأصلية فائقة الأداء، والتحقق التشفيري الصارم، والتصميم العصري، يقدم Skinner استوديو احترافياً يضع سلامة اللاعب وسرعة أداء اللعبة في المقام الأول.",
      principlesHeading: "المبادئ الأساسية التي تحكم تطوير Skinner.",
      valSpeedTitle: "سرعة فائقة بأجزاء المللي ثانية",
      valSpeedText: "فك تشفير لحظي لملف Game.swz بدون استهلاك للقرص لضمان تصفح سلس بسرعة 60+ إطاراً.",
      valSafetyTitle: "أمان واسترجاع ذري Bit-Exact",
      valSafetyText: "نسخ احتياطي تلقائي ببصمة SHA-256 وضمان استرجاع فوري لسلامة ملفات اللعبة الأصلية بنسبة 100%.",
      valCommunityTitle: "المجتمع أولاً ومجاني 100%",
      valCommunityText: "استوديو مظاهر مجاني بالكامل ومبني لخدمة المجتمع، بدون اشتراكات أو رسوم مخفية.",
      valIndepTitle: "شفافية واستقلالية تامة",
      valIndepText: "تعديلات رسومية محلية فقط (Client-Side). لا يتدخل إطلاقاً في ذاكرة اللعبة أو أنظمة الحماية ومكافحة الغش."
    },
    legalPage: {
      privacyTitle: "سياسة الخصوصية.",
      termsTitle: "شروط الاستخدام.",
      description: "المعلومات والإرشادات القانونية الخاصة بتطبيق Skinner المكتبي والموقع الرسمي.",
      dataTitle: "جمع البيانات والخصوصية",
      dataText: "تم تصميم Skinner مع وضع خصوصية اللاعبين كركيزة أساسية. يعمل تطبيق Skinner المكتبي بالكامل بشكل محلي على جهازك الشخصي بنظام ويندوز. لا يقوم التطبيق بجمع أي بيانات هوية شخصية، كلمات مرور، بيانات حسابات اللعبة، أو تتبع جلسات اللعب.",
      assetTitle: "العمليات على الملفات المحلية",
      assetText: "جميع العمليات على الملفات، بما في ذلك فك التشفير، وإعادة توجيه رسوم SWF، والنسخ الاحتياطي، تتم محلياً داخل مجلد اللعبة على جهازك ومجلد .studio_backups/. لا يتم رفع أو إرسال أي ملف من ملفات اللعبة إلى أي خادم خارجي.",
      networkTitle: "الاتصالات الشبكية الخارجية",
      networkIntro: "الاتصالات الخارجية لتطبيق Skinner تقتصر بشكل صارم على ما يلي:",
      networkLi1: "التحقق من التحديثات الرسمية للتطبيق عبر GitHub Releases المشفرة (HTTPS).",
      networkLi2: "الاتصال بواجهة برمجة GameBanana العامة عند استعراض أو تنزيل الخرائط وإضافات المجتمع.",
      indepTitle: "إخلاء مسؤولية المشروع المستقل",
      indepText: "برنامج Skinner هو مشروع مجتمعي مستقل. ليس تابعاً أو مدعوماً من قِبل Ubisoft أو Blue Mammoth Games أو لعبة Brawlhalla. كافة حقوق الملكية الفكرية والشخصيات والعلامات التجارية تعود لأصحابها الأصليين.",
      licenseTitle: "قبول الشروط والترخيص",
      licenseText: "بتحميل أو فك ضغط أو تشغيل تطبيق Skinner المكتبي، فإنك توافق على الالتزام بشروط الاستخدام الموضحة هنا.",
      usageTitle: "الاستخدام المسموح والسلامة",
      usageText: "تطبيق Skinner مخصص حصرياً للتعديلات الجمالية والشكلية المحلية على نسختك المرخصة من لعبة Brawlhalla. أنت تتعهد بعدم استخدام التطبيق في توزيع أي برمجيات ضارة أو محاولة تخطي قواعد اللعب النظيف أو الحصول على أي ميزة تنافسية غير عادلة.",
      warrantyTitle: "إخلاء المسؤولية عن الضمان",
      warrantyText: "يتم تقديم برنامج Skinner 'كما هو' وبدون أي ضمانات صريحة أو ضمنية. بالرغم من أن البرنامج يوفر نسخاً احتياطية تلقائية مشفرة واسترجاعاً ذرياً فورياً، فإن استخدامك للبرنامج يقع تحت تقديرك ومسؤوليتك الشخصية."
    },
    notFoundPage: {
      code: "404",
      title: "الصفحة غير موجودة.",
      desc: "الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.",
      backBtn: "العودة للرئيسية"
    }
  }
};
