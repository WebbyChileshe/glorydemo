// Real organization details, as published on the Glory Orphanage Facebook page.
export const org = {
  name: "Glory Orphanage",
  fullName: "Glory Orphanage & Community School",
  tagline: "Glorious Sky",
  location: "Luanshya, Zambia",
  description:
    "A home for orphaned and vulnerable children in Luanshya, Zambia, running alongside its own community school.",
  phone: "+260 776 894 943",
  phoneSecondary: "0760 877 585",
  email: "mercybkabwe@gmail.com",
  address:
    "Kamuchanga Street, Kambilombilo Compound, Plot No. 18, Luanshya, Zambia",
  facebookUrl: "https://www.facebook.com/profile.php?id=100063860810855",
  facebookFollowers: "27K+",
  facebookFollowing: "1.1K",
} as const

export const navLinks = [
  { label: "Our Mission", href: "#mission" },
  { label: "Our Children", href: "#pillars" },
  { label: "Moments", href: "#gallery" },
  { label: "Community", href: "#community" },
  { label: "Transparency", href: "#transparency" },
] as const

// NOTE: placeholder figures — swap for Glory Orphanage's real counts before launch.
export const impactStats = [
  { icon: "roofing", value: "—", label: "Children Housed & Loved" },
  { icon: "school", value: "—", label: "Enrolled at the Community School" },
  { icon: "restaurant", value: "Daily", label: "Warm Nutritious Meals" },
  { icon: "verified", value: "—", label: "Years Serving Luanshya" },
] as const

export const pillars = [
  {
    icon: "home",
    accent: "primary",
    title: "Safe Family Sanctuary",
    description:
      "A stable home where every child is housed, fed, and cared for by dedicated house parents in Kambilombilo Compound.",
    footnote: "Sample placeholder",
  },
  {
    icon: "book",
    accent: "amber",
    title: "Community School",
    description:
      "Our own community school gives resident and neighbourhood children alike access to a consistent, quality education.",
    footnote: "Sample placeholder",
  },
  {
    icon: "heart-pulse",
    accent: "primary",
    title: "Health & Wellbeing",
    description:
      "Routine care, nutrition, and emotional support so every child can grow up healthy, safe, and valued.",
    footnote: "Sample placeholder",
  },
  {
    icon: "users",
    accent: "amber",
    title: "Community & Family",
    description:
      "Built and sustained by the Luanshya community — neighbours, volunteers, and well-wishers who show up for these kids.",
    footnote: "Sample placeholder",
  },
] as const

export const donationTiers = [
  {
    amount: 25,
    impact:
      "Sample placeholder — replace with the real cost of a week of meals for one child.",
  },
  {
    amount: 50,
    impact:
      "Sample placeholder — replace with the real cost of school supplies for one child.",
  },
  {
    amount: 100,
    impact:
      "Sample placeholder — replace with the real cost of a month of care for one child.",
  },
  {
    amount: 250,
    impact:
      "Sample placeholder — replace with the real cost of supporting the home for a week.",
  },
] as const

// NOTE: placeholder allocation — replace with Glory Orphanage's real breakdown once available.
export const financialBreakdown = [
  { label: "Child Housing, Food & Healthcare", percent: 70, color: "var(--sanctuary)" },
  { label: "Community School & Learning", percent: 22, color: "var(--amber)" },
  { label: "Administration", percent: 5, color: "#9CA3AF" },
  { label: "Outreach & Fundraising", percent: 3, color: "#D1D5DB" },
] as const

// A real moment shared on the Glory Orphanage Facebook page (lightly trimmed).
export const communityStory = {
  quote:
    "Today we are baking fritters for our kids at Glory Orphanage! Nothing beats homemade treats made with love.",
  source: "Glory Orphanage & Community School",
  sourceDetail: "Shared on Facebook",
  comment: {
    text: "I love the charity work you're doing. May God Almighty continue to bless you.",
    author: "Simon Pitango Sakala",
  },
} as const

export const footerLinks = {
  sanctuary: [
    { label: "Our Mission", href: "#mission" },
    { label: "Our Children", href: "#pillars" },
    { label: "Programs", href: "#pillars" },
    { label: "Recent Moments", href: "#gallery" },
    { label: "Community Stories", href: "#community" },
  ],
  governance: [
    { label: "Transparency", href: "#transparency" },
    { label: "Get Involved", href: "#donate" },
  ],
} as const
