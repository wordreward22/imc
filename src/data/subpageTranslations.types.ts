// Comprehensive Multilingual Content for All Subpages (EN, AR, KU)
// Extracted from official IMC Elementor WordPress dumps

export interface SubpageItem {
  title: string;
  desc?: string;
}

export interface AdvantageCardItem {
  num: number | string;
  title: string;
  desc: string;
}

export interface StatItemData {
  number: string;
  label: string;
  icon?: "pin" | "globe" | "shield" | "award";
}

export interface RepairsTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  media: {
    title: string;
    accentWord: string;
    intro: string;
    items: SubpageItem[];
  };
  form: {
    subtitle: string;
    title: string;
    accentWord: string;
    nameLabel: string;
    companyLabel: string;
    emailLabel: string;
    phoneLabel: string;
    cityLabel: string;
    countryLabel: string;
    buttonText: string;
    sendingText: string;
    successTitle: string;
    successDesc: string;
    resetText: string;
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface AboutTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  values: {
    subtitle: string;
    title: string;
    accentWord: string;
    watermark: string;
    items: Array<{ title: string; desc: string }>;
  };
  cummins: {
    subtitle: string;
    title: string;
    accentWord: string;
    historyTitle: string;
    historyDesc: string;
    valuesTitle: string;
    valuesDesc: string;
    videoBadge: string;
    videoSubtitle: string;
    watchButton: string;
  };
  alkan: {
    subtitle: string;
    title: string;
    accentWord: string;
    p1: string;
    p2: string;
    videoButton: string;
    badgeTag: string;
    badgeTitle: string;
  };
  counters: {
    c1Number: string;
    c1Label: string;
    c2Number: string;
    c2Label: string;
    c3Number: string;
    c3Label: string;
  };
}

export interface MasterRebuildTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular1: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
    buttonText: string;
  };
  media: {
    title: string;
    accentWord: string;
    intro: string;
    items: SubpageItem[];
  };
  circular2: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  advantage: {
    subtitle: string;
    title: string;
    accentWord: string;
    watermark: string;
    cards: AdvantageCardItem[];
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface TrainingTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  curriculum: {
    subtitle: string;
    title: string;
    accentWord: string;
    watermark: string;
    cards: AdvantageCardItem[];
  };
  form: {
    subtitle: string;
    title: string;
    accentWord: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    companyLabel: string;
    notesLabel: string;
    buttonText: string;
    sendingText: string;
    successTitle: string;
    successDesc: string;
    resetText: string;
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface CareersTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  advantages: {
    subtitle: string;
    title: string;
    accentWord: string;
    watermark: string;
    cards: AdvantageCardItem[];
  };
  form: {
    subtitle: string;
    title: string;
    accentWord: string;
    nameLabel: string;
    emailLabel: string;
    educationLabel: string;
    educationOptions: { bachelors: string; masters: string; diploma: string };
    phoneLabel: string;
    cvLabel: string;
    cvHint: string;
    cvSelected: string;
    buttonText: string;
    sendingText: string;
    successTitle: string;
    successDesc: string;
    resetText: string;
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface ContactTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  narrative: {
    subtitle: string;
    title: string;
    accentWord: string;
    desc: string;
    officeLabel: string;
    baghdadAddress: string;
    basraAddress: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
  };
  form: {
    inquiryTag: string;
    title: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    serviceLabel: string;
    serviceOptions: { power: string; parts: string; service: string };
    messageLabel: string;
    submitButton: string;
    sendingText: string;
    successTitle: string;
    successDesc: string;
    resetText: string;
  };
  workshops: {
    tag: string;
    title: string;
    baghdadTag: string;
    baghdadTitle: string;
    baghdadAddress: string;
    baghdadHours: string;
    baghdadBadge: string;
    basraTag: string;
    basraTitle: string;
    basraAddress: string;
    basraHours: string;
    basraBadge: string;
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface EnginesTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular1: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  media: {
    title: string;
    accentWord: string;
    intro: string;
    items: SubpageItem[];
  };
  circular2: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface CumminsKitTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  packagesTag: string;
  packagesTitle: string;
  packagesAccent: string;
  packagesIntro: string;
  kits: Array<{ name: string; tag: string; desc: string; includes: string }>;
  circular: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
    buttonText: string;
  };
  media: {
    title: string;
    accentWord: string;
    intro: string;
    items: SubpageItem[];
  };
  risks: {
    subtitle: string;
    title: string;
    accentWord: string;
    watermark: string;
    cards: AdvantageCardItem[];
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
  techTabs: {
    subtitle: string;
    title: string;
    accentWord: string;
    tabs: Array<{ id: string; label: string; title: string; desc: string; points: string[] }>;
  };
}

export interface FleetGuardTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  media: {
    title: string;
    accentWord: string;
    intro: string;
    items: SubpageItem[];
  };
  advantages: {
    subtitle: string;
    title: string;
    accentWord: string;
    watermark: string;
    cards: AdvantageCardItem[];
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface OilsTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  media: {
    title: string;
    accentWord: string;
    intro: string;
    items: SubpageItem[];
  };
  advantages: {
    subtitle: string;
    title: string;
    accentWord: string;
    watermark: string;
    cards: AdvantageCardItem[];
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface RenewablePowerTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  media: {
    title: string;
    accentWord: string;
    intro: string;
    items: SubpageItem[];
  };
  solutions: {
    subtitle: string;
    title: string;
    accentWord: string;
    watermark: string;
    cards: AdvantageCardItem[];
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface PreventativeMaintenanceTranslations {
  hero: { subtitle: string; title: string; accentWord: string; watermark: string };
  circular: {
    subtitle: string;
    title: string;
    accentWord: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeText: string;
  };
  media: {
    title: string;
    accentWord: string;
    intro: string;
    items: SubpageItem[];
  };
  packages: {
    subtitle: string;
    title: string;
    accentWord: string;
    watermark: string;
    cards: AdvantageCardItem[];
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
    stats: StatItemData[];
  };
}

export interface SubpagesDictionary {
  masterRebuild: MasterRebuildTranslations;
  repairs: RepairsTranslations;
  about: AboutTranslations;
  training: TrainingTranslations;
  careers: CareersTranslations;
  contact: ContactTranslations;
  engines: EnginesTranslations;
  cumminsKit: CumminsKitTranslations;
  fleetGuard: FleetGuardTranslations;
  oils: OilsTranslations;
  renewablePower: RenewablePowerTranslations;
  preventativeMaintenance: PreventativeMaintenanceTranslations;
}
