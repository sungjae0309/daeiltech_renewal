import type {
  Solution,
  Category,
  Product,
  Brand,
  NewsItem,
  TrustStat,
  HistoryItem,
  SupportFeature,
} from "./types";

/* ─────────────────────────────────────────
   솔루션
───────────────────────────────────────── */
export const solutions: Solution[] = [
  {
    id: "cell-culture",
    name: "세포 배양 & 생명과학 연구",
    shortName: "세포 배양",
    icon: "🔬",
    description:
      "CO2 인큐베이터, 클린벤치, 바이오리액터 등 세포 배양 환경 구축을 위한 토탈 솔루션",
    longDescription:
      "대일테크는 연구소와 바이오벤처의 세포 배양 환경 구축에 필요한 모든 장비를 제공합니다. CO2 인큐베이터부터 생물안전작업대, 바이오리액터, 배양 시약까지 – 전문 엔지니어의 컨설팅을 통해 최적의 환경을 설계해 드립니다.",
    targetCustomer: "대학 연구실, 기업 연구소, 바이오벤처",
    color: "blue",
    categoryIds: ["incubator", "clean-bench", "bioreactor", "centrifuge"],
    heroImage:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80",
  },
  {
    id: "pharma-biotech",
    name: "제약·바이오 공정",
    shortName: "제약·바이오",
    icon: "💊",
    description:
      "GMP 환경 구축, 안정성 시험, 동결건조 등 제약 공정에 필요한 전문 장비 솔루션",
    longDescription:
      "GMP 규정에 부합하는 제약 공정 장비를 공급합니다. 안정성 시험 챔버, 동결건조기, Fume Hood, Pharmacy Isolator 등 제약·바이오 기업의 엄격한 공정 요구사항을 충족하는 검증된 제품을 제안합니다.",
    targetCustomer: "제약사, 바이오 CRO/CMO, 의약품 개발 기업",
    color: "green",
    categoryIds: ["chamber", "freeze-dryer", "clean-bench", "centrifuge"],
    heroImage:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
  },
  {
    id: "hospital-pharmacy",
    name: "병원 약제 자동화",
    shortName: "병원 약제",
    icon: "🏥",
    description:
      "IV 조제 자동화, 약품 관리 캐비넷, 알약 계수기로 병원 약제부의 업무 효율을 높입니다",
    longDescription:
      "병원 약제부의 조제 오류를 줄이고 업무 효율을 높이는 자동화 시스템을 제공합니다. IV 자동 조제 시스템, 자동 알약 계수기, 약품 및 비품 관리 캐비넷 등 약제부 업무 전반을 지원합니다.",
    targetCustomer: "종합병원, 대학병원 약제부, 병원 구매팀",
    color: "teal",
    categoryIds: ["hospital-auto", "medication-cart"],
    heroImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80",
  },
  {
    id: "pharmacy-auto",
    name: "약국 자동화",
    shortName: "약국 자동화",
    icon: "💼",
    description:
      "조제 자동화 장비로 약국 운영의 정확성과 속도를 향상시킵니다",
    longDescription:
      "약국 운영자를 위한 조제 자동화 솔루션입니다. 정제알약 분쇄기, 자동 알약 계수기, 파우치 자동 검수기를 통해 조제 시간을 단축하고 조제 오류를 최소화합니다.",
    targetCustomer: "지역 약국, 원외 약국, 약국 체인",
    color: "orange",
    categoryIds: ["pharmacy-auto", "hospital-auto"],
    heroImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
  },
  {
    id: "monitoring",
    name: "온도·환경 모니터링",
    shortName: "환경 모니터링",
    icon: "🌡️",
    description:
      "실험실·보관 시설의 온습도를 실시간 모니터링하고 이상 시 즉시 알람을 전송합니다",
    longDescription:
      "의약품, 시약, 혈액 등 온도에 민감한 물질의 보관 환경을 24시간 모니터링합니다. 무선·유선 온습도 센서, 실시간 알람 시스템, 데이터 로깅 및 리포트 기능으로 GMP/병원 환경의 규정 준수를 지원합니다.",
    targetCustomer: "연구소, 병원, 제약사, 혈액원",
    color: "purple",
    categoryIds: ["monitoring", "thermostat"],
    heroImage:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=80",
  },
];

/* ─────────────────────────────────────────
   카테고리
───────────────────────────────────────── */
export const categories: Category[] = [
  { id: "incubator", name: "배양기기", parentId: null, slug: "incubator" },
  { id: "clean-bench", name: "생물안전 & 클린 장비", parentId: null, slug: "clean-bench" },
  { id: "bioreactor", name: "바이오리액터", parentId: null, slug: "bioreactor" },
  { id: "centrifuge", name: "원심분리기", parentId: null, slug: "centrifuge" },
  { id: "freezer", name: "냉동·보존 장비", parentId: null, slug: "freezer" },
  { id: "freeze-dryer", name: "동결건조기", parentId: null, slug: "freeze-dryer" },
  { id: "chamber", name: "제약용 챔버 & 오븐", parentId: null, slug: "chamber" },
  { id: "thermostat", name: "항온조 & 칠러", parentId: null, slug: "thermostat" },
  { id: "monitoring", name: "모니터링 시스템", parentId: null, slug: "monitoring" },
  { id: "hospital-auto", name: "병원 약제 자동화", parentId: null, slug: "hospital-auto" },
  { id: "pharmacy-auto", name: "약국 자동화", parentId: null, slug: "pharmacy-auto" },
  { id: "medication-cart", name: "의약품 카트", parentId: null, slug: "medication-cart" },
  { id: "analysis", name: "분석 장비", parentId: null, slug: "analysis" },
];

/* ─────────────────────────────────────────
   제품
───────────────────────────────────────── */
export const products: Product[] = [
  // ── 세포 배양
  {
    id: "co2-incubator-170l",
    name: "CO2 인큐베이터 170L",
    brand: "INFORS",
    model: "Multitron Pro 170",
    categoryId: "incubator",
    solutionIds: ["cell-culture"],
    shortDescription: "고균일 CO2 분포와 정밀 온도 제어로 세포 배양 최적 환경 구현",
    description:
      "INFORS Multitron Pro는 업계 최고 수준의 CO2 균일도와 온도 안정성을 자랑하는 프리미엄 세포 배양 인큐베이터입니다. 직접 가열 방식으로 오염을 최소화하고, 고온 제염(≥90℃) 기능으로 내부 오염을 효과적으로 제거합니다.",
    features: [
      "±0.1℃ 고정밀 온도 제어",
      "CO2 농도 균일도 ±0.1%",
      "고온 제염(≥90℃) 자동 사이클",
      "터치스크린 컨트롤러 & 원격 모니터링",
      "외부 CO2 실린더 연결 지원",
    ],
    specs: [
      { label: "용량", value: "170 L" },
      { label: "온도 범위", value: "RT+3℃ ~ 50℃" },
      { label: "CO2 범위", value: "0 ~ 20%" },
      { label: "내부 재질", value: "전해 연마 스테인리스" },
      { label: "외형 치수(WxDxH)", value: "670 x 680 x 900 mm" },
      { label: "전원", value: "220V / 60Hz" },
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    ],
    catalogUrl: "#",
    isFeatured: true,
    isNew: false,
  },
  {
    id: "shaking-incubator",
    name: "쉐이킹 인큐베이터",
    brand: "INFORS",
    model: "Multitron Cell",
    categoryId: "incubator",
    solutionIds: ["cell-culture", "pharma-biotech"],
    shortDescription: "세포 배양부터 미생물 배양까지, 진동 균일도가 탁월한 쉐이킹 인큐베이터",
    description:
      "INFORS Multitron Cell은 세포·미생물 배양에 최적화된 쉐이킹 인큐베이터입니다. 진동 균일도가 우수하여 플라스크 전 영역에서 균일한 배양이 가능하며, 스택 구성으로 공간 효율을 극대화합니다.",
    features: [
      "진폭 25mm / 최대 500rpm",
      "±0.1℃ 고정밀 온도 제어",
      "최대 3단 스택 구성 가능",
      "다양한 플라스크 홀더 제공",
      "알람 및 데이터 로깅 기능",
    ],
    specs: [
      { label: "내부 용량", value: "68 L" },
      { label: "온도 범위", value: "4℃ ~ 60℃" },
      { label: "진탕 속도", value: "20 ~ 500 rpm" },
      { label: "진폭", value: "25 mm" },
      { label: "최대 적재", value: "30 kg" },
    ],
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&q=80",
    catalogUrl: "#",
    isFeatured: true,
  },
  {
    id: "biosafety-cabinet",
    name: "생물안전작업대 Class II",
    brand: "ESCO",
    model: "Streamline SC2",
    categoryId: "clean-bench",
    solutionIds: ["cell-culture", "pharma-biotech"],
    shortDescription: "NSF/ANSI 49 인증, 작업자·시료·환경 모두를 보호하는 BSC Class II",
    description:
      "ESCO Streamline은 NSF/ANSI 49 및 EN 12469 인증을 획득한 생물안전작업대입니다. 독자적인 Sentinel Gold 마이크로프로세서 컨트롤러로 기류 속도를 실시간 모니터링하며, 자외선 살균과 직접 배기 옵션을 지원합니다.",
    features: [
      "NSF/ANSI 49 & EN 12469 인증",
      "Sentinel Gold 마이크로프로세서 제어",
      "UV 살균 조명 내장",
      "에너지 절감 ECM 블로워",
      "가스·진공 밸브 연결 옵션",
    ],
    specs: [
      { label: "내부 너비", value: "1200 mm (1200형)" },
      { label: "HEPA 필터 효율", value: "99.99% (0.3μm)" },
      { label: "유입 풍속", value: "0.53 m/s" },
      { label: "하강 풍속", value: "0.33 m/s" },
      { label: "소음", value: "≤57 dB(A)" },
    ],
    image:
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80",
    catalogUrl: "#",
    isFeatured: true,
  },
  {
    id: "bioreactor-lab",
    name: "바이오리액터 (랩용)",
    brand: "Sartorius",
    model: "BIOSTAT A Plus",
    categoryId: "bioreactor",
    solutionIds: ["cell-culture", "pharma-biotech"],
    shortDescription: "세포 배양 및 미생물 발효 공정 개발을 위한 랩 스케일 바이오리액터",
    description:
      "Sartorius BIOSTAT A Plus는 배치·fed-batch·연속 배양 등 다양한 배양 모드를 지원하는 랩 스케일 바이오리액터입니다. 통합 DCU(Digital Control Unit)로 pH, DO, 온도, 교반 속도 등 주요 파라미터를 정밀 제어합니다.",
    features: [
      "0.5L ~ 20L 배양 용기 지원",
      "pH, DO, 온도, 교반 통합 제어",
      "생물안전 Class II 설계",
      "BioPAT® 통합 모니터링 가능",
      "SIP/CIP 지원 (스테인리스 베셀)",
    ],
    specs: [
      { label: "배양 용량", value: "0.5 ~ 20 L" },
      { label: "교반 속도", value: "30 ~ 1500 rpm" },
      { label: "온도 범위", value: "4 ~ 60℃" },
      { label: "pH 범위", value: "2.0 ~ 12.0" },
      { label: "DO 범위", value: "0 ~ 200%" },
    ],
    image:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80",
    catalogUrl: "#",
    isFeatured: false,
  },
  // ── 냉동·보존
  {
    id: "freezer-80c",
    name: "-80℃ 초저온 냉동고",
    brand: "Thermo Scientific",
    model: "TSX Series Upright",
    categoryId: "freezer",
    solutionIds: ["cell-culture", "pharma-biotech"],
    shortDescription: "시료 보호를 위한 -86℃ 초저온 냉동고, 에너지 절감형 인버터 컴프레서",
    description:
      "Thermo Scientific TSX 시리즈는 최적화된 단열 설계와 인버터 컴프레서로 에너지 소비를 30% 절감한 초저온 냉동고입니다. 정전 시 최대 96시간 온도 유지 성능과 실시간 알람 시스템을 갖추고 있습니다.",
    features: [
      "-86℃ 도달 및 유지",
      "인버터 컴프레서 에너지 절감",
      "정전 시 최대 96시간 유지",
      "실시간 온도 데이터 로깅",
      "RS-485 원격 모니터링 연결",
    ],
    specs: [
      { label: "온도 범위", value: "-40℃ ~ -86℃" },
      { label: "용량", value: "570 L (Upright)" },
      { label: "소비 전력", value: "약 9.5 kWh/day" },
      { label: "외형 치수(WxDxH)", value: "775 x 835 x 1955 mm" },
      { label: "내부 선반", value: "6단 (표준)" },
    ],
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
    catalogUrl: "#",
    isFeatured: true,
  },
  // ── 제약 챔버
  {
    id: "stability-chamber",
    name: "약품 안정성 시험 챔버",
    brand: "Binder",
    model: "KBF-S Series",
    categoryId: "chamber",
    solutionIds: ["pharma-biotech"],
    shortDescription: "ICH 가이드라인 적합, 항온·항습 약품 안정성 시험 전용 챔버",
    description:
      "Binder KBF-S 시리즈는 ICH Q1A 가이드라인에 완전 부합하는 약품 안정성 시험 챔버입니다. 온도 25℃/60%RH (Zone II), 30℃/65%RH (Zone III), 40℃/75%RH (Zone IV) 조건을 정밀하게 구현합니다.",
    features: [
      "ICH Q1A 조건 완전 충족",
      "광조사 옵션 (ICH Q1B 적합)",
      "21 CFR Part 11 준수 소프트웨어",
      "독립 안전 회로 (2중 보호)",
      "IQ/OQ 밸리데이션 지원",
    ],
    specs: [
      { label: "온도 범위", value: "0 ~ 70℃" },
      { label: "습도 범위", value: "10 ~ 90% RH" },
      { label: "용량", value: "240 / 720 / 1400 L" },
      { label: "온도 균일도", value: "±0.5℃" },
      { label: "습도 균일도", value: "±3% RH" },
    ],
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    catalogUrl: "#",
    isFeatured: true,
  },
  {
    id: "freeze-dryer",
    name: "동결건조기 (랩 스케일)",
    brand: "Telstar",
    model: "LyoQuest-85",
    categoryId: "freeze-dryer",
    solutionIds: ["pharma-biotech"],
    shortDescription: "단백질·바이오의약품·식품 건조에 최적화된 랩 스케일 동결건조기",
    description:
      "Telstar LyoQuest-85는 소형이면서도 산업 수준의 정밀 제어 기능을 갖춘 랩 스케일 동결건조기입니다. GAMP 5 기반 SCADA 소프트웨어와 21 CFR Part 11을 지원하여 GMP 환경에서도 활용 가능합니다.",
    features: [
      "선반 온도 -85℃ ~ +60℃",
      "Ice Condenser 용량 8 kg",
      "자동 밸브 제어 및 레시피 관리",
      "21 CFR Part 11 준수",
      "인원 최소화 무인 운전 지원",
    ],
    specs: [
      { label: "선반 면적", value: "0.25 m²" },
      { label: "선반 온도", value: "-85 ~ +60℃" },
      { label: "Ice Condenser", value: "8 kg / -85℃" },
      { label: "진공 도달", value: "< 0.01 mbar" },
      { label: "선반 수", value: "4단" },
    ],
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
    catalogUrl: "#",
    isFeatured: false,
  },
  // ── 병원 자동화
  {
    id: "pill-counter",
    name: "자동 알약 계수기",
    brand: "Daeiltech",
    model: "ACMS-Pro",
    categoryId: "hospital-auto",
    solutionIds: ["hospital-pharmacy", "pharmacy-auto"],
    shortDescription: "광학 센서로 조제 오류를 없애는 고속 자동 알약 계수기",
    description:
      "대일테크 ACMS-Pro는 고정밀 광학 센서를 활용해 알약의 수량을 자동으로 계수하는 시스템입니다. 시간당 최대 5,000정을 처리하며, 이물질 및 파손 정제를 자동 감지해 조제 오류를 원천 차단합니다.",
    features: [
      "시간당 최대 5,000정 처리",
      "광학 센서 이물질 자동 감지",
      "파손 정제 별도 분류",
      "재고 관리 시스템 연동",
      "자가 세척 기능",
    ],
    specs: [
      { label: "처리 속도", value: "최대 5,000정/시간" },
      { label: "계수 정확도", value: "99.99%↑" },
      { label: "적용 정제 크기", value: "Ø 3 ~ 20 mm" },
      { label: "호퍼 용량", value: "3 L" },
      { label: "전원", value: "220V / 60Hz" },
    ],
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
    catalogUrl: "#",
    isFeatured: true,
    isNew: true,
  },
  {
    id: "iv-dispenser",
    name: "IV 자동 조제 시스템",
    brand: "Daeiltech",
    model: "IVStation-II",
    categoryId: "hospital-auto",
    solutionIds: ["hospital-pharmacy"],
    shortDescription: "약품 혼합 오류를 방지하는 안전한 IV 자동 조제 시스템",
    description:
      "IVStation-II는 바코드 검증과 중량 확인을 통해 IV 조제의 정확성과 안전성을 보장하는 시스템입니다. 음압 캐비닛 내에서 조제가 이루어져 작업자와 환경 모두를 보호합니다.",
    features: [
      "바코드 스캔 이중 검증",
      "중량 기반 정확도 확인",
      "음압 격리 작업 환경",
      "처방전 연동 및 기록 자동화",
      "작업 영상 녹화 기능",
    ],
    specs: [
      { label: "작업 공간", value: "600 x 600 x 550 mm (WxDxH)" },
      { label: "음압 수준", value: "-15 Pa 이상" },
      { label: "HEPA 효율", value: "99.99% (0.3μm)" },
      { label: "중량 측정 정밀도", value: "±0.01 g" },
      { label: "저장 용량", value: "500건/일 이상" },
    ],
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80",
    catalogUrl: "#",
    isFeatured: true,
  },
  // ── 온도 모니터링
  {
    id: "wireless-monitoring",
    name: "무선 온습도 모니터링 시스템",
    brand: "Daeiltech",
    model: "ACMS Wireless",
    categoryId: "monitoring",
    solutionIds: ["monitoring"],
    shortDescription: "냉동고·냉장고·항온실을 실시간 감시, 이상 시 SMS·앱 즉시 알람",
    description:
      "ACMS Wireless는 무선 온습도 센서와 클라우드 플랫폼을 결합한 통합 모니터링 시스템입니다. 배터리 교체 없이 최대 5년 운용 가능한 LoRa 센서와 모바일 앱 알람으로 24시간 보관 환경을 안전하게 관리합니다.",
    features: [
      "LoRa 무선 통신 (배터리 5년)",
      "SMS·앱 이중 알람",
      "클라우드 데이터 로깅 (5년 보관)",
      "PDF 자동 레포트 생성",
      "GMP/의약품 콜드체인 규정 준수",
    ],
    specs: [
      { label: "온도 측정 범위", value: "-40 ~ +85℃" },
      { label: "습도 측정 범위", value: "0 ~ 100% RH" },
      { label: "측정 정확도", value: "±0.3℃ / ±2% RH" },
      { label: "무선 통신", value: "LoRa (최대 1 km)" },
      { label: "배터리 수명", value: "최대 5년" },
    ],
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80",
    catalogUrl: "#",
    isFeatured: true,
    isNew: true,
  },
  // ── 항온조
  {
    id: "thermostat-lauda",
    name: "항온조 / 순환 항온기",
    brand: "LAUDA",
    model: "Proline RP 855",
    categoryId: "thermostat",
    solutionIds: ["cell-culture", "pharma-biotech", "monitoring"],
    shortDescription: "LAUDA Proline — 넓은 온도 범위와 탁월한 안정성의 프리미엄 항온조",
    description:
      "LAUDA Proline 시리즈는 독일 엔지니어링의 정밀함을 바탕으로 정밀한 온도 제어가 필요한 실험·생산 공정에서 글로벌 표준으로 사용되고 있습니다. 넓은 온도 범위와 강력한 펌프 성능으로 대용량 순환 제어가 가능합니다.",
    features: [
      "넓은 온도 범위: -30 ~ +200℃",
      "±0.01℃ 고정밀 온도 안정성",
      "강력한 펌프 최대 40 L/min",
      "Modbus/RS-232/USB 통신",
      "독립 과열 방지 시스템",
    ],
    specs: [
      { label: "온도 범위", value: "-30 ~ +200℃" },
      { label: "온도 안정성", value: "±0.01℃" },
      { label: "펌프 유량", value: "최대 40 L/min" },
      { label: "욕조 용량", value: "10 L" },
      { label: "냉각 능력 (20℃)", value: "1800 W" },
    ],
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80",
    catalogUrl: "#",
    isFeatured: false,
  },
  // ── 원심분리기
  {
    id: "centrifuge-refrigerated",
    name: "냉장 원심분리기",
    brand: "Eppendorf",
    model: "Centrifuge 5910 Ri",
    categoryId: "centrifuge",
    solutionIds: ["cell-culture", "pharma-biotech"],
    shortDescription: "대용량 플레이트 처리와 냉장 기능을 갖춘 Eppendorf 다목적 원심분리기",
    description:
      "Eppendorf Centrifuge 5910 Ri는 Cell Culture 워크플로우에 최적화된 냉장 대용량 원심분리기입니다. 다양한 로터 선택으로 튜브부터 플레이트까지 폭넓게 활용할 수 있으며, 에코 모드로 에너지를 절감합니다.",
    features: [
      "최대 5,000 × g",
      "온도 범위 -10 ~ +40℃",
      "플레이트, 튜브 등 다양한 로터",
      "원터치 밸런스 체크",
      "에코 모드 에너지 절감",
    ],
    specs: [
      { label: "최대 속도", value: "5,000 rpm" },
      { label: "최대 RCF", value: "5,000 × g" },
      { label: "온도 범위", value: "-10 ~ +40℃" },
      { label: "최대 용량", value: "4 × 750 mL" },
      { label: "소음", value: "≤55 dB(A)" },
    ],
    image:
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80",
    catalogUrl: "#",
    isFeatured: false,
  },
];

/* ─────────────────────────────────────────
   브랜드
───────────────────────────────────────── */
export const brands: Brand[] = [
  {
    id: "infors",
    name: "INFORS HT",
    country: "스위스",
    logo: "",
    description: "세계 1위 세포 배양 쉐이킹 인큐베이터 브랜드",
    website: "https://www.infors-ht.com",
  },
  {
    id: "sartorius",
    name: "Sartorius",
    country: "독일",
    logo: "",
    description: "바이오공정 장비 및 소모품 글로벌 리더",
    website: "https://www.sartorius.com",
  },
  {
    id: "lauda",
    name: "LAUDA",
    country: "독일",
    logo: "",
    description: "정밀 온도 제어 항온조 분야 독일 명품 브랜드",
    website: "https://www.lauda.de",
  },
  {
    id: "eppendorf",
    name: "Eppendorf",
    country: "독일",
    logo: "",
    description: "원심분리기, 피펫, 시약 바이알 생명과학 전문 기업",
    website: "https://www.eppendorf.com",
  },
  {
    id: "thermo",
    name: "Thermo Scientific",
    country: "미국",
    logo: "",
    description: "분석장비, 냉동고, 소모품 글로벌 1위 기업",
    website: "https://www.thermofisher.com",
  },
  {
    id: "esco",
    name: "ESCO",
    country: "싱가포르",
    logo: "",
    description: "생물안전작업대 및 클린룸 장비 아시아 선도 브랜드",
    website: "https://www.escoglobal.com",
  },
  {
    id: "binder",
    name: "Binder",
    country: "독일",
    logo: "",
    description: "제약·산업용 챔버 및 오븐 독일 전문 브랜드",
    website: "https://www.binder-world.com",
  },
  {
    id: "millipore",
    name: "Millipore",
    country: "미국",
    logo: "",
    description: "순수·초순수 제조장치 및 필터 글로벌 표준",
    website: "https://www.merckmillipore.com",
  },
];

/* ─────────────────────────────────────────
   신뢰 지표
───────────────────────────────────────── */
export const trustStats: TrustStat[] = [
  {
    label: "업력",
    value: "30",
    unit: "년+",
    description: "1990년대 창업, 생명과학 장비 전문 기업",
  },
  {
    label: "취급 브랜드",
    value: "50",
    unit: "개+",
    description: "글로벌 선도 브랜드 공식 파트너",
  },
  {
    label: "납품 기관",
    value: "1,000",
    unit: "곳+",
    description: "대학, 연구소, 병원, 제약사 등",
  },
  {
    label: "제품 카테고리",
    value: "11",
    unit: "개",
    description: "배양기기부터 병원 자동화까지",
  },
];

/* ─────────────────────────────────────────
   뉴스 & 공지
───────────────────────────────────────── */
export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "[공지] 2026 KIMES 한국국제의료기기박람회 참가 안내",
    date: "2026-03-10",
    category: "공지",
    summary:
      "대일테크는 오는 3월 KIMES 2026에 참가합니다. 최신 병원 자동화 시스템과 신제품 무선 온습도 모니터링 솔루션을 직접 체험하실 수 있습니다.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: "news-2",
    title: "ACMS 무선 모니터링 시스템 신제품 출시",
    date: "2026-02-20",
    category: "뉴스",
    summary:
      "LoRa 무선 통신 기반의 ACMS Wireless 신제품을 출시했습니다. 배터리 교체 없이 최대 5년 운용이 가능하며 GMP/콜드체인 규정을 완벽히 충족합니다.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80",
  },
  {
    id: "news-3",
    title: "[이벤트] 상반기 프로모션 — CO2 인큐베이터 구매 시 특가",
    date: "2026-01-15",
    category: "이벤트",
    summary:
      "2026년 상반기 동안 INFORS CO2 인큐베이터 구매 고객에게 온습도 모니터링 센서 2개를 무상 제공합니다. 재고 한정이니 빠르게 문의해 주세요.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80",
  },
];

/* ─────────────────────────────────────────
   A/S & 지원 특징
───────────────────────────────────────── */
export const supportFeatures: SupportFeature[] = [
  {
    icon: "🛠️",
    title: "전담 엔지니어 지원",
    description:
      "장비별 전문 교육을 이수한 자사 엔지니어가 설치·교육·정기 점검을 직접 수행합니다.",
  },
  {
    icon: "⚡",
    title: "신속 A/S 대응",
    description:
      "긴급 문의 접수 후 24시간 내 현장 출동을 원칙으로 합니다. 수도권 기준 당일 대응 가능합니다.",
  },
  {
    icon: "📋",
    title: "IQ/OQ 밸리데이션",
    description:
      "GMP 환경의 제약·바이오 고객을 위한 IQ/OQ 설치 적격성 평가 문서를 지원합니다.",
  },
  {
    icon: "📞",
    title: "다채널 고객 지원",
    description:
      "전화·이메일·카카오채널을 통해 언제든 문의하실 수 있습니다. 원격 진단 서비스도 제공합니다.",
  },
];

/* ─────────────────────────────────────────
   회사 연혁
───────────────────────────────────────── */
export const companyHistory: HistoryItem[] = [
  {
    year: "2024",
    events: [
      "무선 온습도 모니터링 시스템 ACMS Wireless 출시",
      "Sartorius 바이오공정 장비 공식 딜러 계약",
    ],
  },
  {
    year: "2022",
    events: [
      "병원 약제 자동화 사업부 확대",
      "IV 자동 조제 시스템 IVStation-II 출시",
    ],
  },
  {
    year: "2020",
    events: [
      "LAUDA 항온조 공식 파트너십 체결",
      "코로나19 대응 생물안전장비 공급 확대",
    ],
  },
  {
    year: "2018",
    events: [
      "INFORS HT 공식 딜러 계약",
      "쉐이킹 인큐베이터 국내 시장 1위 공급",
    ],
  },
  {
    year: "2015",
    events: [
      "Thermo Scientific 냉동보존 장비 파트너십",
      "제약·바이오 사업부 신설",
    ],
  },
  {
    year: "2010",
    events: ["Binder 제약용 챔버 공급 개시", "기업부설연구소 인정"],
  },
  {
    year: "2000",
    events: ["대일테크 법인 전환", "Eppendorf 공식 딜러 계약"],
  },
  {
    year: "1995",
    events: ["(주)대일테크 창업", "생명과학 실험 장비 유통·공급 시작"],
  },
];

/* ─────────────────────────────────────────
   헬퍼 함수
───────────────────────────────────────── */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsBySolution(solutionId: string): Product[] {
  return products.filter((p) => p.solutionIds.includes(solutionId));
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
