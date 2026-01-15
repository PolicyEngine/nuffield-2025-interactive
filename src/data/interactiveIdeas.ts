export interface InteractiveIdea {
  id: number;
  title: string;
  description: string;
  category: string;
}

export const categories = [
  "Universal Credit & Benefits",
  "Income Tax",
  "National Insurance",
  "Housing & Local Government",
  "Energy & Cost of Living",
  "Childcare & Education",
  "Child Poverty & Family Support",
  "Disability Benefits",
  "Scottish & Welsh Devolved Policies",
  "Transport & Mobility",
  "Other Tax & Financial",
] as const;

export type Category = (typeof categories)[number];

export const interactiveIdeas: InteractiveIdea[] = [
  // Universal Credit & Benefits (20 ideas)
  {
    id: 1,
    title: "Universal Credit Uprating (April 2023)",
    description:
      "Calculate how the 10.1% benefit increase (largest ever) affects your household income compared to inflation",
    category: "Universal Credit & Benefits",
  },
  {
    id: 2,
    title: "Cost of Living Payment Eligibility (2023-2024)",
    description:
      "Check if you qualify for £900 means-tested, £300 pensioner, or £150 disability payments across three instalments and multiple qualifying dates",
    category: "Universal Credit & Benefits",
  },
  {
    id: 3,
    title: "Universal Credit Work Allowance Freeze",
    description:
      "Show how frozen work allowance (£379/£631 since 2019) erodes work incentives compared to if it had risen with inflation",
    category: "Universal Credit & Benefits",
  },
  {
    id: 4,
    title: "Benefit Cap Regional Impact",
    description:
      "Compare how the £23k/£15.4k cap affects families differently in London vs regions with varying housing costs",
    category: "Universal Credit & Benefits",
  },
  {
    id: 5,
    title: "Local Housing Allowance Restoration (Autumn 2024)",
    description:
      "Calculate how unfreezing LHA to 30th percentile rents affects your housing benefit after 4-year freeze (2020-2024)",
    category: "Universal Credit & Benefits",
  },
  {
    id: 6,
    title: "Two-Child Limit Interactive",
    description:
      "Show income loss for families with 3+ children (born post-April 2017) and compare to pre-2017 entitlements, with counterfactual poverty rates if policy reversed",
    category: "Universal Credit & Benefits",
  },
  {
    id: 7,
    title: "Pension Credit Uptake Calculator",
    description:
      "Check eligibility and estimate unclaimed Pension Credit (£1.7bn unclaimed annually), including passport benefits and food security impacts",
    category: "Universal Credit & Benefits",
  },
  {
    id: 8,
    title: "Universal Credit Managed Migration",
    description:
      "Calculate changes as tax credits claimants moved to UC (2024-2025 completion), including transitional protection",
    category: "Universal Credit & Benefits",
  },
  {
    id: 9,
    title: "Minimum Income Floor for Self-Employed",
    description:
      "Show how MIF assumption affects UC for self-employed with variable earnings below minimum wage equivalent",
    category: "Universal Credit & Benefits",
  },
  {
    id: 10,
    title: "Child Benefit High Income Charge Reform",
    description:
      "Explore how raising £50k threshold (frozen since 2013) or household-based assessment would affect families",
    category: "Universal Credit & Benefits",
  },
  {
    id: 11,
    title: "Universal Credit Childcare Element Changes (2023)",
    description:
      "Model the 85% coverage with upfront payment barrier removal, showing impact on work incentives for single parents",
    category: "Universal Credit & Benefits",
  },
  {
    id: 12,
    title: "Minimum Wage Increases vs Benefit Tapers",
    description:
      "Show how 9.7% NMW rise (April 2023) and 9.8% rise (April 2024) interact with 55% UC taper and 63% effective taper after rent",
    category: "Universal Credit & Benefits",
  },
  {
    id: 13,
    title: "April 2025 Benefit Uprating Package",
    description:
      "Model the 1.7% increase (September 2024 CPI) versus 6.7% actual inflation to April 2025, showing real-terms cuts by benefit type",
    category: "Universal Credit & Benefits",
  },
  {
    id: 14,
    title: "Pension Triple Lock vs Working-Age Benefits (2023-2025)",
    description:
      "Compare pensioner income growth (triple lock: 10.1%, 8.5%, 2.5%) to working-age benefit freeze, by household type",
    category: "Universal Credit & Benefits",
  },
  {
    id: 15,
    title: "Universal Credit Housing Element Delay",
    description:
      "Calculate financial impact of 5-week wait for first UC housing payment on rent arrears and eviction risk, modeling advance repayment burden",
    category: "Universal Credit & Benefits",
  },
  {
    id: 16,
    title: "Housing Benefit to Universal Credit Migration",
    description:
      "Model managed migration batches (2024-2025): calculate individual household gains/losses and administrative burden",
    category: "Universal Credit & Benefits",
  },
  {
    id: 17,
    title: "16-19 Bursary Fund Eligibility",
    description:
      "Calculate eligibility for vulnerable student bursaries (£1,200) vs discretionary awards, by local authority funding levels",
    category: "Universal Credit & Benefits",
  },
  {
    id: 18,
    title: "No Recourse to Public Funds Housing Crisis",
    description:
      "Model housing insecurity for NRPF families, showing homelessness duty gap and child poverty concentration",
    category: "Universal Credit & Benefits",
  },
  {
    id: 19,
    title: "Benefit Cap Regional Variation",
    description:
      "Show how £23k benefit cap affects households differently by region due to housing cost variation, modeling localized caps",
    category: "Universal Credit & Benefits",
  },
  {
    id: 20,
    title: "Social Housing Allocation Priority Calculator",
    description:
      "Model how different local authority banding systems affect waiting times and homelessness risk for households on housing benefit",
    category: "Universal Credit & Benefits",
  },

  // Income Tax (15 ideas)
  {
    id: 21,
    title: "Personal Allowance & Higher Rate Freeze (2023-2026)",
    description:
      "Calculate fiscal drag impact as £12.57k/£50.27k thresholds frozen while wages rise, showing stealth tax by percentile",
    category: "Income Tax",
  },
  {
    id: 22,
    title: "45p Additional Rate Threshold Cut (April 2023)",
    description:
      "Show effect of lowering top rate threshold from £150k to £125.14k on high earners",
    category: "Income Tax",
  },
  {
    id: 23,
    title: "Dividend Allowance Cuts",
    description:
      "Calculate how reducing tax-free dividends from £2k (2022) to £1k (2023) to £500 (2024) affects small business owners and retirees",
    category: "Income Tax",
  },
  {
    id: 24,
    title: "Marriage Allowance Awareness",
    description:
      "Check eligibility for £252/year tax break (transferring £1,260 allowance) - claimed by only 1.8m of 4m eligible couples",
    category: "Income Tax",
  },
  {
    id: 25,
    title: "Capital Gains Annual Exemption Cuts",
    description:
      "Show impact of reducing CGT allowance from £12.3k to £6k (2023) to £3k (2024) on asset sales",
    category: "Income Tax",
  },
  {
    id: 26,
    title: "Child Benefit Charge Threshold Increase (April 2024)",
    description:
      "Calculate how raising £50k to £60k threshold and £60k-£80k taper affects retention, removing cliff-edge",
    category: "Income Tax",
  },
  {
    id: 27,
    title: "Scottish Income Tax Divergence",
    description:
      "Compare take-home pay in Scotland vs rest of UK across income levels with 6-band system and higher top rates",
    category: "Income Tax",
  },
  {
    id: 28,
    title: "Inheritance Tax Threshold Freeze",
    description:
      "Show how frozen £325k nil-rate band (since 2009) and £175k residence allowance affect estate tax as house prices rise",
    category: "Income Tax",
  },
  {
    id: 29,
    title: "Personal Savings Allowance Trap",
    description:
      "Calculate when basic rate taxpayers (£1,000 allowance) hit the threshold versus higher rate (£500), by savings interest rates",
    category: "Income Tax",
  },
  {
    id: 30,
    title: "Rent-a-Room Relief vs Mortgage Interest",
    description:
      "Compare the £7,500 tax-free lodger income to landlords' restricted mortgage interest relief, by property value",
    category: "Income Tax",
  },
  {
    id: 31,
    title: "High Income Child Benefit Charge Taper",
    description:
      'Show the effective 50%+ marginal rate between £50,000-£60,000 from HICBC clawback, by number of children',
    category: "Income Tax",
  },
  {
    id: 32,
    title: "Trading Allowance vs Expenses",
    description:
      "Model whether the £1,000 trading income allowance beats actual expense deduction for gig economy workers and side hustles",
    category: "Income Tax",
  },
  {
    id: 33,
    title: "Gift Aid Small Donations Scheme",
    description:
      "Calculate charity benefit from the £8,000 annual GASDS limit (25% top-up without declarations) versus full Gift Aid tracking",
    category: "Income Tax",
  },
  {
    id: 34,
    title: "VAT on Private School Fees (January 2025)",
    description:
      "Model 20% VAT adding £3,000-£8,000/year per child, estimate state school demand increase and distributional impact",
    category: "Income Tax",
  },
  {
    id: 35,
    title: "ISA Allowance Freeze",
    description:
      "Calculate inflation erosion of £20,000 ISA limit frozen since 2017/18, compare real-terms value and tax shelter effectiveness",
    category: "Income Tax",
  },

  // National Insurance (9 ideas)
  {
    id: 36,
    title: "National Insurance Reversal (November 2022)",
    description:
      "Compare the brief 1.25pp cut (Sept-Nov 2022) vs reversal under Hunt, showing weekly take-home impact",
    category: "National Insurance",
  },
  {
    id: 37,
    title: "National Insurance Cut Tracker (2023-2024)",
    description:
      "Model the cumulative impact of 12% to 10% to 8% employee NI rate cuts, showing monthly savings by salary band",
    category: "National Insurance",
  },
  {
    id: 38,
    title: "Self-Employed NI Class 2 Abolition (2024)",
    description:
      "Calculate the £3.45/week saving and state pension protection implications for sole traders versus employed equivalents",
    category: "National Insurance",
  },
  {
    id: 39,
    title: "Employer NI Threshold Changes",
    description:
      "Show how the April 2023 £9,100 threshold increase affected small business employment costs versus employee take-home pay",
    category: "National Insurance",
  },
  {
    id: 40,
    title: "NI vs Income Tax Merger Scenarios",
    description:
      "Model hypothetical integration proposals, showing effective rate changes for workers, pensioners, and self-employed",
    category: "National Insurance",
  },
  {
    id: 41,
    title: "NI Upper Earnings Limit Quirks",
    description:
      "Visualize the 2% marginal NI rate above £50,270 versus 40% income tax, highlighting the effective 42% band",
    category: "National Insurance",
  },
  {
    id: 42,
    title: "Student Loan as Effective NI",
    description:
      "Combine NI, income tax, and Plan 2 student loan repayments to show true marginal deduction rates (up to 51%) by age cohort",
    category: "National Insurance",
  },
  {
    id: 43,
    title: "Autumn Statement 2023 - National Insurance Cut",
    description:
      "Calculate impact of 2% NI reduction (12% to 10% for employees), show interaction with Scotland income tax differentials",
    category: "National Insurance",
  },
  {
    id: 44,
    title: "Autumn Budget 2024 - Employer NI Increase",
    description:
      "Estimate wage passthrough of 1.2% employer NI rise (13.8% to 15%) and £5,000 employment allowance increase",
    category: "National Insurance",
  },

  // Housing & Local Government (30 ideas)
  {
    id: 45,
    title: "Council Tax Band Revaluation Simulator (England)",
    description:
      "Estimate how 1991 valuations compare to current values and potential bill changes if rebanded to 2024 prices",
    category: "Housing & Local Government",
  },
  {
    id: 46,
    title: "Right to Buy Discount Caps by Region",
    description:
      "Calculate maximum discount (£96k London, £72k elsewhere) and compare social rent vs mortgage costs",
    category: "Housing & Local Government",
  },
  {
    id: 47,
    title: "Second Home Council Tax Premium",
    description:
      "Show revenue potential if your council adopted 100% premium (doubled bills) vs current policy",
    category: "Housing & Local Government",
  },
  {
    id: 48,
    title: "Stamp Duty Land Tax Cut (September 2022-March 2025)",
    description:
      "Compare temporary nil-rate increase (£125k to £250k, FTB £300k to £425k) vs standard rates",
    category: "Housing & Local Government",
  },
  {
    id: 49,
    title: "Local Housing Allowance Freeze Impact (2020-2024)",
    description:
      "Calculate growing gap between frozen LHA rates and actual rents across different property sizes and areas",
    category: "Housing & Local Government",
  },
  {
    id: 50,
    title: "LHA Freeze Impact Timeline (2023-2024)",
    description:
      "Show growing gap between LHA rates (frozen 2020-2024) and actual rents by region, calculating household shortfall and homelessness correlation",
    category: "Housing & Local Government",
  },
  {
    id: 51,
    title: "Bedroom Tax 10-Year Retrospective",
    description:
      "Calculate cumulative impact of bedroom tax on disabled households 2013-2023, showing forced moves, rent arrears, and proposed abolition effects",
    category: "Housing & Local Government",
  },
  {
    id: 52,
    title: "Temporary Accommodation Cost Calculator",
    description:
      "Compare local authority costs of temporary accommodation vs preventing homelessness through LHA top-ups and rent deposit loans",
    category: "Housing & Local Government",
  },
  {
    id: 53,
    title: "Shared Accommodation Rate Age Threshold",
    description:
      "Model impact of raising SAR age limit from 35 to 40+ (2023 proposals), showing housing security improvement for vulnerable single adults",
    category: "Housing & Local Government",
  },
  {
    id: 54,
    title: "Housing Benefit Taper Relief",
    description:
      "Calculate poverty impact of reducing housing benefit withdrawal rate from 65% to 50-55%, showing work incentive improvements and fiscal cost",
    category: "Housing & Local Government",
  },
  {
    id: 55,
    title: "LHA Restoration to 30th Percentile",
    description:
      "Model April 2024 restoration of LHA to 30th percentile rents: household gains by region, homelessness prevention, and ongoing affordability if frozen again",
    category: "Housing & Local Government",
  },
  {
    id: 56,
    title: "Discretionary Housing Payment Lottery",
    description:
      "Compare DHP availability across councils (£100-£1,000+ per capita), showing postcode lottery and impact of standardized allocation formula",
    category: "Housing & Local Government",
  },
  {
    id: 57,
    title: "Under-Occupancy Penalty by Disability",
    description:
      "Show how bedroom tax disproportionately affects disabled households needing extra space, with regional variation in adapted housing availability",
    category: "Housing & Local Government",
  },
  {
    id: 58,
    title: "Council Tax Revaluation Simulator",
    description:
      "Model impact of rebanding English properties to current values (1991 to 2024), showing band shifts by region and distributional effects",
    category: "Housing & Local Government",
  },
  {
    id: 59,
    title: "Council Tax Band D Rate Postcode Comparison",
    description:
      "Compare Band D rates across neighboring authorities (£1,200-£2,500 range), showing fiscal capacity and service quality correlation",
    category: "Housing & Local Government",
  },
  {
    id: 60,
    title: "Single Person Discount Verification Impact",
    description:
      "Calculate revenue loss from unclaimed/fraudulent 25% SPD, showing council enforcement ROI and vulnerable household protection needs",
    category: "Housing & Local Government",
  },
  {
    id: 61,
    title: "Council Tax Support Scheme Comparator",
    description:
      "Compare 313 distinct CTS schemes: calculate what you'd pay in Stroud (100% reduction) vs Dudley (40% minimum payment) on identical income",
    category: "Housing & Local Government",
  },
  {
    id: 62,
    title: "Council Tax Arrears and Bailiff Fees",
    description:
      "Show cumulative debt spiral from missed council tax payments, including court costs and enforcement charges, with income-based repayment alternatives",
    category: "Housing & Local Government",
  },
  {
    id: 63,
    title: "Council Tax Reduction Taper Interactive",
    description:
      "Model how different CTS taper rates (20-40%) create poverty traps, showing effective marginal tax rates when combined with UC withdrawal",
    category: "Housing & Local Government",
  },
  {
    id: 64,
    title: "Pensioner Council Tax Support Cliff Edge",
    description:
      "Calculate how Pension Credit eligibility gives 100% council tax reduction, creating £1,000+ cliff edge at income threshold",
    category: "Housing & Local Government",
  },
  {
    id: 65,
    title: "Council Tax Debt and Mental Health",
    description:
      "Correlate council tax arrears with mental health crisis service usage, showing impact of income-based payment plans vs enforcement",
    category: "Housing & Local Government",
  },
  {
    id: 66,
    title: "Second Adult Rebate Abolition Impact",
    description:
      "Show how 2013 abolition of Second Adult Rebate affected low-income households with non-dependent adults, ongoing poverty effect",
    category: "Housing & Local Government",
  },
  {
    id: 67,
    title: "Council Tax and Domestic Abuse",
    description:
      "Model financial barriers to leaving abuse (losing SPD, council tax liability in new property), showing impact of proposed CTR exemptions",
    category: "Housing & Local Government",
  },
  {
    id: 68,
    title: "Business Rates Passthrough to Renters",
    description:
      "Calculate how business rates relief for high street landlords (2023-2024) affects commercial rents, showing incidence on small businesses vs property owners",
    category: "Housing & Local Government",
  },
  {
    id: 69,
    title: "Mixed-Use Property Taxation Gap",
    description:
      "Show council tax vs business rates for live-work properties, modeling impact of simplified residential-above-shop taxation",
    category: "Housing & Local Government",
  },
  {
    id: 70,
    title: "Buy-to-Let Business Rates Proposal",
    description:
      "Model applying business rates to large landlord portfolios (10+ properties) instead of council tax, showing revenue potential and rent effects",
    category: "Housing & Local Government",
  },
  {
    id: 71,
    title: "Empty Property Premium Effectiveness",
    description:
      "Compare council tax empty property premiums (100-300%) across councils, showing impact on housing supply and avoidance behavior",
    category: "Housing & Local Government",
  },
  {
    id: 72,
    title: "Student HMO Council Tax Exemption",
    description:
      "Calculate council tax revenue loss from student exemptions, showing distributional impact on non-student residents in university towns",
    category: "Housing & Local Government",
  },
  {
    id: 73,
    title: "Rent Arrears and Eviction Timeline",
    description:
      "Calculate time from first missed payment to eviction order under different council response speeds, showing early intervention savings",
    category: "Housing & Local Government",
  },
  {
    id: 74,
    title: "Stamp Duty First-Time Buyer Relief",
    description:
      "Calculate savings from £425k nil-rate band (£625k in London) for FTBs vs standard £250k threshold, compare by region",
    category: "Housing & Local Government",
  },

  // Energy & Cost of Living (15 ideas)
  {
    id: 75,
    title: "Energy Price Guarantee Interactive (2022-2023)",
    description:
      "Calculate household savings from £2,500 EPG cap vs market rates, including £400 energy bill support",
    category: "Energy & Cost of Living",
  },
  {
    id: 76,
    title: "Warm Home Discount Expansion (2022)",
    description:
      "Check eligibility for £150 rebate under new broader criteria (3m recipients vs 2.2m previously)",
    category: "Energy & Cost of Living",
  },
  {
    id: 77,
    title: "Council Tax Energy Rebate (£150, 2022)",
    description:
      "Show which households in Bands A-D qualified and compare to actual energy cost increases",
    category: "Energy & Cost of Living",
  },
  {
    id: 78,
    title: "Fuel Duty Freeze Extension",
    description:
      "Calculate cumulative savings from 5p cut plus 13-year freeze vs if duty had risen with inflation (RPI)",
    category: "Energy & Cost of Living",
  },
  {
    id: 79,
    title: "National Living Wage Increases",
    description:
      "Show take-home impact of rises: £9.50 to £10.42 (2023) and £10.42 to £11.44 (2024), including UC taper effects",
    category: "Energy & Cost of Living",
  },
  {
    id: 80,
    title: "Energy Bills Support Scheme Distribution",
    description:
      "Show how the £400 energy bill discount (£66-67/month Oct 2022-Mar 2023) reached different household types, including prepayment meter users",
    category: "Energy & Cost of Living",
  },
  {
    id: 81,
    title: "Energy Company Obligation (ECO4) Retrofit Eligibility",
    description:
      "Check eligibility for home insulation grants under ECO4 scheme (2022-2026), estimate energy savings by property type and measures",
    category: "Energy & Cost of Living",
  },
  {
    id: 82,
    title: "Boiler Upgrade Scheme Calculator",
    description:
      "Calculate £5,000-£6,000 grants for heat pumps vs gas boiler costs, model 10-year savings by property size and current heating system",
    category: "Energy & Cost of Living",
  },
  {
    id: 83,
    title: "Great British Insulation Scheme",
    description:
      "Model home insulation support for council tax bands A-D, estimate energy bill savings by insulation type (loft, cavity wall, solid wall)",
    category: "Energy & Cost of Living",
  },
  {
    id: 84,
    title: "Social Housing Decarbonisation Fund Impact",
    description:
      "Show how £3.8bn fund affects social housing tenants, model energy bill reductions from retrofitting by property archetype",
    category: "Energy & Cost of Living",
  },
  {
    id: 85,
    title: "Feed-in Tariff vs Smart Export Guarantee",
    description:
      "Compare returns for solar panel owners under legacy FiT vs SEG rates across suppliers, model by installation size and location",
    category: "Energy & Cost of Living",
  },
  {
    id: 86,
    title: "Standing Charges Interactive",
    description:
      "Show regional variation in electricity/gas standing charges (58p/day variation across GB), calculate impact of Ofgem's proposed reforms",
    category: "Energy & Cost of Living",
  },
  {
    id: 87,
    title: "Prepayment Meter Premium Calculator",
    description:
      "Model the £40-£80/year premium prepayment customers paid before April 2023 cap alignment, show distributional impact",
    category: "Energy & Cost of Living",
  },
  {
    id: 88,
    title: "Energy Price Guarantee Interaction with Benefits (2023)",
    description:
      "Calculate how the £2,500 typical bill cap combined with £900 cost of living payments affected different household types",
    category: "Energy & Cost of Living",
  },
  {
    id: 89,
    title: "Warm Home Discount Eligibility",
    description:
      "Show £150 WHD eligibility gaps (Pension Credit vs broader support group), modeling expansion to all CTS recipients",
    category: "Energy & Cost of Living",
  },

  // Childcare & Education (11 ideas)
  {
    id: 90,
    title: "30 Hours Free Childcare Expansion (April 2024)",
    description:
      "Calculate eligibility and savings under the phased rollout to 9-month-olds, comparing working parent scenarios across England",
    category: "Childcare & Education",
  },
  {
    id: 91,
    title: "Childcare Cost Calculator by Region",
    description:
      "Show how the £2,000 Tax-Free Childcare allowance compares to actual nursery costs in different UK regions, highlighting affordability gaps",
    category: "Childcare & Education",
  },
  {
    id: 92,
    title: "School Holiday Childcare Gap",
    description:
      'Calculate the "childcare cliff" during school holidays for families losing 30 hours term-time provision, by household income',
    category: "Childcare & Education",
  },
  {
    id: 93,
    title: "Childminder vs Nursery Calculator",
    description:
      "Compare costs under Tax-Free Childcare and UC childcare element for different provider types and regional pricing",
    category: "Childcare & Education",
  },
  {
    id: 94,
    title: "Student Loan Repayment Changes (2023)",
    description:
      "Model the switch from RPI to RPI+3% interest and reduced repayment threshold (£25,000 to £21,000 planned), showing lifetime repayment by degree earnings",
    category: "Childcare & Education",
  },
  {
    id: 95,
    title: "Scottish Tuition Fee Advantage Calculator",
    description:
      "Quantify the lifetime financial benefit for Scottish students vs English students, accounting for living costs and graduate earnings",
    category: "Childcare & Education",
  },
  {
    id: 96,
    title: "Maintenance Loan Adequacy Tool",
    description:
      "Compare maximum maintenance loan amounts to actual living costs in university cities, by parental income bands",
    category: "Childcare & Education",
  },
  {
    id: 97,
    title: "Postgraduate Loan Repayment Stacking",
    description:
      "Show combined undergraduate and postgraduate loan repayments as effective marginal tax rates by salary band",
    category: "Childcare & Education",
  },
  {
    id: 98,
    title: "Hunt Spring Budget 2023 - Childcare Expansion",
    description:
      "Model 30 hours free childcare extension to 9-month-olds (by Sept 2025), calculate savings vs childminder/nursery costs by region",
    category: "Childcare & Education",
  },
  {
    id: 99,
    title: "Childcare Subsidy Cliff Edge Analyzer",
    description:
      "Calculate how 15/30-hour free childcare eligibility thresholds (£100k-£300k proposals) create effective marginal tax rates for working parents",
    category: "Childcare & Education",
  },
  {
    id: 100,
    title: "School Breakfast Club Funding Calculator",
    description:
      "Model universal vs targeted breakfast club funding (£315m 2024 proposal), showing reach, nutrition improvement, and interaction with free school meals",
    category: "Childcare & Education",
  },

  // Child Poverty & Family Support (10 ideas)
  {
    id: 101,
    title: "Free School Meals Expansion Impact Calculator (2023)",
    description:
      "Calculate how expanding free school meals eligibility from £7,400 to different thresholds affects families in your constituency, including household savings and child poverty reduction",
    category: "Child Poverty & Family Support",
  },
  {
    id: 102,
    title: "School Uniform Cost Relief Interactive",
    description:
      "Model proposed school uniform cost support schemes against family budgets, showing poverty impact of £150-300 annual grants for families on means-tested benefits",
    category: "Child Poverty & Family Support",
  },
  {
    id: 103,
    title: "Holiday Activities and Food Programme Coverage",
    description:
      "Map HAF programme availability by local authority, calculate access gaps, and show child food insecurity reduction if expanded to all term breaks",
    category: "Child Poverty & Family Support",
  },
  {
    id: 104,
    title: "Best Start Foods Value Tracker",
    description:
      "Show real purchasing power of Healthy Start vouchers (£4.25/week 2023, £8.50 2024) against infant formula and fresh food prices, with regional variation",
    category: "Child Poverty & Family Support",
  },
  {
    id: 105,
    title: "Child Trust Fund Maturity Interactive (2024-2025)",
    description:
      "Show first cohort of CTF children turning 18: how initial payments (£250-500) grew, distributional outcomes, and impact of proposed matched savings policies",
    category: "Child Poverty & Family Support",
  },
  {
    id: 106,
    title: "Kinship Care Allowance Gap",
    description:
      "Calculate financial disadvantage of kinship carers vs foster carers (£132/week average gap), showing child poverty impact of equalizing support",
    category: "Child Poverty & Family Support",
  },
  {
    id: 107,
    title: "Child Poverty Task Force Target Tracker",
    description:
      "Model progress toward proposed 2030 child poverty targets under different UC uplift, employment, and childcare scenarios",
    category: "Child Poverty & Family Support",
  },
  {
    id: 108,
    title: "Food Bank Usage Predictor",
    description:
      "Input local UC sanctions rate, Local Housing Allowance gap, and inflation to predict food bank demand in your area vs actual Trussell Trust data 2023-2025",
    category: "Child Poverty & Family Support",
  },
  {
    id: 109,
    title: "Healthy Eating on Benefits Calculator",
    description:
      "Compare cost of Eatwell Guide diet against UC standard allowance by household type, showing affordability gap and malnutrition risk",
    category: "Child Poverty & Family Support",
  },
  {
    id: 110,
    title: "Food Insecurity Benefits Pathway",
    description:
      "Show which benefit changes (UC uplift, HAF expansion, school meals) most cost-effectively reduce food insecurity for 10 family archetypes",
    category: "Child Poverty & Family Support",
  },

  // Disability Benefits (10 ideas)
  {
    id: 111,
    title: "PIP Voucher System Modeler (Timms Review 2025)",
    description:
      "Explore proposed shift from cash payments to vouchers/catalogs for Daily Living component, showing purchasing power impacts",
    category: "Disability Benefits",
  },
  {
    id: 112,
    title: "PIP Assessment Waiting Time Cost",
    description:
      "Calculate financial loss during the average 26-week assessment period, comparing current benefit levels to foregone PIP payments",
    category: "Disability Benefits",
  },
  {
    id: 113,
    title: "Universal Credit Health Element Impact (April 2026 proposed)",
    description:
      "Model how replacing Limited Capability for Work component with integrated health assessment would affect disabled claimants",
    category: "Disability Benefits",
  },
  {
    id: 114,
    title: "Carer's Allowance Earnings Trap",
    description:
      "Show the £1 earnings cliff where exceeding £139/week loses the entire £76.75 weekly benefit, by care hours provided",
    category: "Disability Benefits",
  },
  {
    id: 115,
    title: "Attendance Allowance Regional Take-Up",
    description:
      "Compare estimated eligible pensioner population to actual claimants by local authority, highlighting under-claiming",
    category: "Disability Benefits",
  },
  {
    id: 116,
    title: "Disability Cost of Living Payment Distribution",
    description:
      "Track the £150-900 extra cost of living payments (2023-2024) by disability benefit type and household composition",
    category: "Disability Benefits",
  },
  {
    id: 117,
    title: "Access to Work Grant vs Lost Earnings",
    description:
      "Calculate whether Access to Work support (up to £66,000/year) closes the disability employment gap for different impairment types",
    category: "Disability Benefits",
  },
  {
    id: 118,
    title: "Scottish Disability Assistance vs PIP",
    description:
      "Compare payment amounts, assessment process, and total annual support under Child Disability Payment and Adult Disability Payment versus DWP equivalents",
    category: "Disability Benefits",
  },
  {
    id: 119,
    title: "Welsh Disability Rights Taskforce Proposals",
    description:
      "Model proposed disability benefits devolution scenarios, showing potential payment differences from DWP rates",
    category: "Disability Benefits",
  },
  {
    id: 120,
    title: "Local Housing Allowance Disability Premiums",
    description:
      "Show how the LHA freeze (2020-2024) interacted with disability premiums, by bedroom entitlement and region",
    category: "Disability Benefits",
  },

  // Scottish & Welsh Devolved Policies (10 ideas)
  {
    id: 121,
    title: "Scottish Income Tax Band Calculator (2023-2025)",
    description:
      "Compare tax liability for Scottish vs rest-of-UK taxpayers across all six Scottish bands, showing progressive differences",
    category: "Scottish & Welsh Devolved Policies",
  },
  {
    id: 122,
    title: "Welsh Income Tax Rate Scenarios",
    description:
      "Model hypothetical Welsh income tax variation (currently unused 10p power), showing revenue and distributional effects",
    category: "Scottish & Welsh Devolved Policies",
  },
  {
    id: 123,
    title: "Scottish Child Payment Expansion (2022-2024)",
    description:
      "Track the increase from under-6s to under-16s at £25/week, showing cumulative anti-poverty impact by family size",
    category: "Scottish & Welsh Devolved Policies",
  },
  {
    id: 124,
    title: "Council Tax Reduction Scotland vs Wales vs England",
    description:
      "Compare support levels for the same household across three systems (national in Scotland/Wales, 296 schemes in England)",
    category: "Scottish & Welsh Devolved Policies",
  },
  {
    id: 125,
    title: "Best Start Grant vs Sure Start Maternity Grant",
    description:
      "Calculate total early years support in Scotland (£1,300+) versus £500 one-off in rest of UK, by number of children",
    category: "Scottish & Welsh Devolved Policies",
  },
  {
    id: 126,
    title: "Scottish Free School Meals Extension",
    description:
      "Model the P1-P5 universal provision vs income-tested elsewhere, showing savings for working families above benefit thresholds",
    category: "Scottish & Welsh Devolved Policies",
  },
  {
    id: 127,
    title: "Welsh Council Tax Reduction Scheme Reform (2024)",
    description:
      "Analyze the shift to single national scheme replacing 22 local schemes, showing winners and losers by local authority",
    category: "Scottish & Welsh Devolved Policies",
  },
  {
    id: 128,
    title: "Land and Buildings Transaction Tax vs Stamp Duty",
    description:
      "Compare first-time buyer and mover costs in Scotland (LBTT) versus England/NI (SDLT), by property price",
    category: "Scottish & Welsh Devolved Policies",
  },
  {
    id: 129,
    title: "Scottish Social Security Agency Take-Up Campaign",
    description:
      "Model potential poverty reduction if Scottish disability/carers benefits reached 100% take-up versus current estimated 75%",
    category: "Scottish & Welsh Devolved Policies",
  },
  {
    id: 130,
    title: "Sewel Motion Impact Tracker",
    description:
      "Calculate how reserved benefit changes (e.g., two-child limit) affect Scottish household incomes despite devolved top-up attempts",
    category: "Scottish & Welsh Devolved Policies",
  },

  // Transport & Mobility (8 ideas)
  {
    id: 131,
    title: "Fuel Duty Freeze Savings (2023-2025)",
    description:
      "Calculate cumulative savings from continued 5p cut and duty freeze vs inflation-linked increases, compare by driving patterns and vehicle efficiency",
    category: "Transport & Mobility",
  },
  {
    id: 132,
    title: "Bus Fare Cap Interactive (£2 then £3)",
    description:
      "Model household savings from £2 bus fare cap (Jan 2023-Oct 2024) then £3 cap (Nov 2024+), compare to previous local fares",
    category: "Transport & Mobility",
  },
  {
    id: 133,
    title: "Electric Vehicle Benefit-in-Kind",
    description:
      "Calculate company car tax savings for EVs (2% BIK 2023-25) vs petrol/diesel, model total cost of ownership by mileage",
    category: "Transport & Mobility",
  },
  {
    id: 134,
    title: "Plug-in Car Grant Phase-Out",
    description:
      "Show impact of £1,500 grant removal (June 2022) on EV affordability, compare purchase costs before/after for different models",
    category: "Transport & Mobility",
  },
  {
    id: 135,
    title: "Clean Air Zone Checker",
    description:
      "Calculate daily charges across Birmingham, Bristol, Bath, Portsmouth CAZs by vehicle type, estimate annual costs for regular users",
    category: "Transport & Mobility",
  },
  {
    id: 136,
    title: "Rail Fares Calculator (2024)",
    description:
      "Model 4.9% March 2024 fare increase impact vs 5.9% January 2024 rise, compare regulated vs unregulated routes",
    category: "Transport & Mobility",
  },
  {
    id: 137,
    title: "Vehicle Excise Duty Changes (April 2025)",
    description:
      "Calculate VED for new cars under revised bands, show first-year premium for high-emission vehicles vs £10 EV rate",
    category: "Transport & Mobility",
  },
  {
    id: 138,
    title: "Workplace Parking Levy Calculator",
    description:
      "Model employee/employer costs if workplace parking charges (like Nottingham's £550/space) expanded to other cities",
    category: "Transport & Mobility",
  },

  // Other Tax & Financial (8 ideas)
  {
    id: 139,
    title: "Non-Dom Status Abolition (2025)",
    description:
      "Estimate tax impact of ending remittance basis for long-term residents (April 2025 implementation)",
    category: "Other Tax & Financial",
  },
  {
    id: 140,
    title: "Capital Gains Tax Increase (October 2024)",
    description:
      "Calculate higher CGT on share sales (10%/20% to 18%/24%), model tax on property vs share disposals by gain size",
    category: "Other Tax & Financial",
  },
  {
    id: 141,
    title: "Pensions Lifetime Allowance Abolition",
    description:
      "Show impact of removing £1.073m LTA (April 2024), model tax changes for high pension savers vs old regime",
    category: "Other Tax & Financial",
  },
  {
    id: 142,
    title: "Pension Credit Underclaim Cost",
    description:
      "Calculate how raising PC take-up saves NHS costs (winter mortality, malnutrition) and reduces pensioner poverty more cost-effectively than universal winter fuel payment",
    category: "Other Tax & Financial",
  },
  {
    id: 143,
    title: "Destitution Risk Index by Postcode",
    description:
      "Combine LHA gap, council tax arrears rate, food bank usage, and UC sanctions to predict destitution risk in your area",
    category: "Other Tax & Financial",
  },
  {
    id: 144,
    title: "Community Food Initiative ROI",
    description:
      "Calculate social value of local food redistribution schemes, showing reduced food waste, poverty alleviation, and NHS savings from improved nutrition",
    category: "Other Tax & Financial",
  },
  {
    id: 145,
    title: "Universal Basic Services Poverty Impact",
    description:
      "Model poverty reduction from free school meals, prescriptions, council tax, and public transport for all vs equivalent cash transfers",
    category: "Other Tax & Financial",
  },
  {
    id: 146,
    title: "Local Authority Financial Distress Impact",
    description:
      "Correlate Section 114 notices with degraded CTS schemes, reduced DHP funding, and child poverty outcomes in Birmingham, Croydon, etc.",
    category: "Other Tax & Financial",
  },
];
