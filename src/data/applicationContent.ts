// Full application content with BibTeX references

export interface Section {
  key: string;
  title: string;
  wordLimit: number;
  content: string;
}

export interface Citation {
  key: string;
  type: string;
  title: string;
  author: string;
  year: string;
  url?: string;
  note?: string;
  journal?: string;
  institution?: string;
  volume?: string;
  pages?: string;
}

export const citations: Record<string, Citation> = {
  ifg_s114_2025: {
    key: "ifg_s114_2025",
    type: "misc",
    title: "Local Government Section 114 (Bankruptcy) Notices",
    author: "Institute for Government",
    year: "2025",
    url: "https://www.instituteforgovernment.org.uk/explainer/local-authority-section-114-notices",
    note: "Eight councils issued Section 114 notices between 2018 and 2023"
  },
  commons_turnout_2024: {
    key: "commons_turnout_2024",
    type: "techreport",
    title: "Turnout at Elections",
    author: "House of Commons Library",
    year: "2024",
    url: "https://commonslibrary.parliament.uk/research-briefings/cbp-8060/",
    note: "Local election turnout in England has been consistently below 35% in recent years"
  },
  hm_treasury_atr_2024: {
    key: "hm_treasury_atr_2024",
    type: "misc",
    title: "Algorithmic Transparency Recording Standard: HMT Modelling - Policy Engine",
    author: "HM Treasury",
    year: "2024",
    url: "https://www.gov.uk/algorithmic-transparency-records/hmt-modelling-policy-engine"
  },
  obr_council_tax_2025: {
    key: "obr_council_tax_2025",
    type: "misc",
    title: "Council Tax",
    author: "Office for Budget Responsibility",
    year: "2025",
    url: "https://obr.uk/forecasts-in-depth/tax-by-tax-spend-by-spend/council-tax/",
    note: "OBR estimates council tax will raise £50.2 billion in 2025-26"
  },
  entitledto_ctr_2025: {
    key: "entitledto_ctr_2025",
    type: "misc",
    title: "Council Tax Reduction Schemes in England 2025/26",
    author: "Entitledto",
    year: "2025",
    url: "https://www.entitledto.co.uk/blog/2025/may/20/council-tax-reduction-schemes-in-england-202526/",
    note: "Annual survey of all 296 billing authorities; 313 total schemes"
  },
  stroud_ctr_2025: {
    key: "stroud_ctr_2025",
    type: "misc",
    title: "Council Tax Support Scheme 2025-2026",
    author: "Stroud District Council",
    year: "2025",
    url: "https://stroud.moderngov.co.uk/documents/s14698/Item+10+-+Council+Tax+Support+Scheme+2025-26.pdf",
    note: "Stroud continues to provide up to 100% Council Tax Support, maintained since 2013"
  },
  dudley_ctr_2025: {
    key: "dudley_ctr_2025",
    type: "misc",
    title: "Changes likely in Council Tax Reduction Scheme",
    author: "Dudley Metropolitan Borough Council",
    year: "2025",
    url: "https://councilnews.dudley.gov.uk/news/changes-likely-in-council-tax-reduction-scheme",
    note: "Minimum payment increased from 23% to 60% for working age claimants"
  },
  no10_innovation_fellowship_2026: {
    key: "no10_innovation_fellowship_2026",
    type: "misc",
    title: "No10 Innovation Fellowship Programme",
    author: "UK Government",
    year: "2026",
    url: "https://no10innovationfellows.campaign.gov.uk/",
    note: "Flagship initiative bringing world-class technical talent into government"
  },
  nuffield_2024: {
    key: "nuffield_2024",
    type: "misc",
    title: "Enhancing, Localising and Democratising Tax-Benefit Policy Analysis",
    author: "Nuffield Foundation",
    year: "2024",
    url: "https://www.nuffieldfoundation.org/project/enhancing-localising-and-democratising-tax-benefit-policy-analysis"
  },
  policyengine_two_child_2025: {
    key: "policyengine_two_child_2025",
    type: "misc",
    title: "Removing the Two-Child Benefit Limit",
    author: "PolicyEngine",
    year: "2025",
    url: "https://policyengine.org/uk/research/uk-two-child-limit",
    note: "Compares cost estimates with OBR, IFS, JRF, and Resolution Foundation"
  },
  policyengine_uc_2021: {
    key: "policyengine_uc_2021",
    type: "misc",
    title: "Analysing Autumn Budget Universal Credit Reforms with PolicyEngine",
    author: "PolicyEngine",
    year: "2021",
    url: "https://policyengine.org/uk/research/analysing-autumn-budget-universal-credit-reforms-with-policyengine"
  },
  policyengine_childcare_2024: {
    key: "policyengine_childcare_2024",
    type: "misc",
    title: "Childcare Programmes in PolicyEngine UK",
    author: "PolicyEngine",
    year: "2024",
    url: "https://policyengine.org/uk/research/uk-childcare-report"
  },
  policyengine_budget_2025: {
    key: "policyengine_budget_2025",
    type: "misc",
    title: "UK Autumn Budget 2025",
    author: "PolicyEngine",
    year: "2025",
    url: "https://policyengine.org/uk/autumn-budget-2025",
    note: "Includes OBR comparison dashboard validating PolicyEngine estimates"
  },
  policyengine_scottish_budget_2026: {
    key: "policyengine_scottish_budget_2026",
    type: "misc",
    title: "Scottish Budget 2026-27 Interactive",
    author: "PolicyEngine",
    year: "2026",
    url: "https://www.policyengine.org/uk/scottish-budget-2026-27"
  },
  policyengine_givecalc_uk_2025: {
    key: "policyengine_givecalc_uk_2025",
    type: "misc",
    title: "GiveCalc UK: Charitable Giving Calculator",
    author: "PolicyEngine",
    year: "2025",
    url: "https://www.policyengine.org/uk/givecalc"
  },
  policyengine_obbba_2025: {
    key: "policyengine_obbba_2025",
    type: "misc",
    title: "OBBBA Household-by-Household Explorer",
    author: "PolicyEngine",
    year: "2025",
    url: "https://policyengine.org/us/obbba-household-by-household",
    note: "Interactive tool showing how the One Big Beautiful Bill Act affects individual households"
  },
  policyengine_claude_2025: {
    key: "policyengine_claude_2025",
    type: "misc",
    title: "PolicyEngine Claude Code Plugin",
    author: "PolicyEngine",
    year: "2025",
    url: "https://github.com/PolicyEngine/policyengine-claude",
    note: "Multi-agent AI workflow for encoding tax-benefit policies"
  },
  metr_2025: {
    key: "metr_2025",
    type: "misc",
    title: "Measuring AI Ability to Complete Long Tasks",
    author: "METR",
    year: "2025",
    url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/",
    note: "AI task completion capability has been doubling approximately every 7 months"
  },
  policyengine_interactive_ideas_2026: {
    key: "policyengine_interactive_ideas_2026",
    type: "misc",
    title: "UK Policy Interactive Ideas (2023-2025): 146 Potential Topics",
    author: "PolicyEngine",
    year: "2026",
    url: "https://policyengine.github.io/nuffield-2025-interactive/",
    note: "Consolidated list demonstrating feasibility of 100+ interactives over three years"
  },
  nagappan_tdd_2008: {
    key: "nagappan_tdd_2008",
    type: "article",
    title: "Realizing Quality Improvement Through Test Driven Development",
    author: "Nagappan, N. et al.",
    year: "2008",
    journal: "Empirical Software Engineering",
    volume: "13(3)",
    pages: "289-302"
  },
  george_tdd_2004: {
    key: "george_tdd_2004",
    type: "article",
    title: "A Structured Experiment of Test-Driven Development",
    author: "George, B. and Williams, L.",
    year: "2004",
    journal: "Information and Software Technology",
    volume: "46(5)",
    pages: "337-342"
  },
  dpga_2024: {
    key: "dpga_2024",
    type: "misc",
    title: "Digital Public Goods Standard",
    author: "Digital Public Goods Alliance",
    year: "2024",
    url: "https://digitalpublicgoods.net/standard/"
  }
};

export const sections: Section[] = [
  {
    key: "project_summary",
    title: "Project summary",
    wordLimit: 250,
    content: `PolicyEngine builds interactive tools that help everyone in the UK—regardless of policy expertise—understand how tax and benefit policy affects their country, their community, and their household. Nuffield's first grant built constituency and local authority infrastructure now validated at the highest levels of government. This project extends that investment in two directions: Budget interactives delivered overnight to all 650 constituencies, and a council tax policy platform enabling policymakers and the public to understand local schemes, compare across authorities, and design reforms with fiscal and distributional analysis. With eight councils issuing Section 114 notices since 2018 [@ifg_s114_2025] and local election turnout below 35% [@commons_turnout_2024], citizens need tools spanning national announcements to local choices. A single parent in Stroud pays nothing toward Council Tax; an identical household in Dudley pays 60%. These variations—313 English schemes, plus Scotland, Wales, and Northern Ireland—remain invisible to the tools informing debate at every level.

Our open-source model, validated with 10 Downing Street and reviewed by HM Treasury [@hm_treasury_atr_2024], delivers two committed deliverables—council tax platform and overnight Budget analysis—plus 100+ policy interactives across three years, with topics selected through quarterly reviews with the Foundation.

This work directly supports Nuffield's priority of building trustworthy institutions. By making policy variation transparent from Westminster to town halls, we equip citizens, journalists, and local democracy reporters to hold decision-makers accountable. PolicyEngine creates the analytical infrastructure that democratic participation requires.`
  },
  {
    key: "a_research_questions",
    title: "A. Research questions",
    wordLimit: 200,
    content: `This project addresses three research questions about making tax-benefit microsimulation accessible from Westminster to town halls.

First, how can overnight Budget analysis and 100+ policy interactives inform national debate? Building on PolicyEngine's validation with 10 Downing Street, we test whether rapid-response tools—delivering constituency-level impacts overnight following fiscal announcements—shape public understanding when attention peaks.

Second, how can a council tax policy platform reveal hidden local variation and enable reform design? Council tax raises £50 billion annually [@obr_council_tax_2025], yet England's 313 distinct CTR schemes [@entitledto_ctr_2025], Scotland's and Wales's national schemes, and Northern Ireland's domestic rates remain invisible. We will build tools enabling policymakers and the public to understand schemes, compare across authorities, and design reforms with fiscal and distributional analysis.

Third, which dissemination approaches maximise adoption among underserved audiences at both national and local levels? Local journalists lack tools to contextualise Budget impacts for their constituencies or compare council tax decisions across authorities. We will pursue partnerships with organisations like the BBC Local Democracy Reporting Service and Local Government Association to identify effective approaches for democratising policy evidence.`
  },
  {
    key: "b_case_for_importance",
    title: "B. Case for importance",
    wordLimit: 700,
    content: `This project addresses a critical need: validating and enhancing microsimulation's capacity to inform policy on the UK's most pressing issues. Since summer 2025, PolicyEngine's model has been validated at the highest level of UK government. Nikhil Woodruff, PolicyEngine co-founder and CTO, joined 10 Downing Street's Data Science team (10DS) through its innovation fellowship programme [@no10_innovation_fellowship_2026]. There, he and 10DS staff built 10ds-microsim—a direct extension of policyengine-uk for government internal use. Through intensive red-teaming, Downing Street analysts validated the model against their own methodologies and official Treasury projections. Following his initial six-month secondment, 10DS offered Nikhil a two-year extension at 80% FTE to continue PolicyEngine projects within government—an endorsement he accepted. This collaboration, documented in forthcoming work by Woodruff, positions PolicyEngine as a credible partner for policy research at the highest levels of UK government.

Government analysts compared PolicyEngine outputs against internal Treasury models, tested edge cases, and stress-tested assumptions. The model passed scrutiny that few external tools have faced. This unprecedented access—and the resulting confidence in our methodology—creates opportunities for public-facing tools built on the same validated foundation. What works inside Number 10 can now inform public debate.

Beyond this government validation, our estimates consistently align with IFS, OBR, and Resolution Foundation. Our two-child limit analysis [@policyengine_two_child_2025] compares cost estimates across all major scorekeepers, finding agreement within expected ranges. Earlier Universal Credit analysis [@policyengine_uc_2021] similarly matched IFS and Resolution Foundation estimates. HM Treasury has published an algorithmic transparency record exploring further government use [@hm_treasury_atr_2024]. This triangulation across multiple authoritative sources reinforces confidence in PolicyEngine outputs.

The previous Nuffield grant [@nuffield_2024] built infrastructure proving valuable beyond expectations: 650 constituency and local authority models, comprehensive childcare cost modelling [@policyengine_childcare_2024], an AI-assisted policy exploration pilot, and validation dashboards. These capabilities have attracted attention from the UK's most powerful policy institutions, demonstrating that Nuffield investment generates returns across the policy ecosystem.

This validated infrastructure enables two forms of national policy engagement. First, rapid Budget analysis—delivering constituency-level impacts overnight when public attention peaks. Resolution Foundation and IFS publish national analysis within hours, but lack the local granularity that MPs, local journalists, and advocacy groups need. This grant builds capacity to match their pace while providing constituency and local authority breakdowns they cannot. Second, over 100 policy interactives across three years on topics in the news—the two-child limit, free school meals, PIP reforms, pension changes—each showing personal, community, and national impacts. This output builds relationships with local journalists and advocacy groups while ensuring readiness for major policy moments.

A significant gap remains: Council Tax Reduction. Council tax raises over 50 billion pounds annually [@obr_council_tax_2025], yet no comprehensive microsimulation model captures the full complexity of support schemes across the UK. England's 313 distinct local authority schemes [@entitledto_ctr_2025] create unprecedented policy variation; Scotland and Wales have national CTR schemes with different rules; Northern Ireland has domestic rates with its own rebate system. Identical households face dramatically different outcomes depending on location. The variation is stark: Stroud offers 100% support [@stroud_ctr_2025] while Dudley requires 60% minimum payments [@dudley_ctr_2025]. These differences affect the poorest households most severely yet receive little scrutiny because the information is inaccessible.

Currently, no tool enables local councillors, journalists, or researchers to explore how scheme choices affect constituents or compare approaches across authorities. This gap matters for local democracy. When councils vote on CTR scheme changes, they lack distributional analysis of consequences. When local journalists cover council tax decisions, they cannot contextualise their authority's choices against neighbours. This project will build genuinely novel capability by integrating Council Tax Reduction into PolicyEngine, enabling unprecedented analysis of local fiscal policy. For the first time, local decision-makers will have the same analytical power currently available only to central government.

This research aligns directly with Nuffield Foundation priorities. The Foundation's commitment to a prosperous and fair society finds expression in PolicyEngine's distributional analysis capabilities. The goal of an inclusive society resonates with our poverty measurement tools. Most fundamentally, the Foundation's vision of technology serving people's needs manifests in PolicyEngine's accessibility—allowing journalists, advocates, and citizens to explore complex policy questions without technical expertise. By democratising access to fiscal analysis from Westminster to town halls, PolicyEngine embodies the principle that powerful analytical tools should serve society broadly.`
  },
  {
    key: "c_impact_and_influence",
    title: "C. Impact and influence",
    wordLimit: 700,
    content: `Impact Areas

This project addresses three primary impact areas: informing change to policies, systems or legislation; improving or advancing understanding or awareness of an issue; and providing opportunity and building capability.

This project will inform policy and legislative change during critical moments (Budgets, manifestos), improve understanding of distributional consequences at both national and local levels, and build capability across diverse stakeholders who currently lack access to rigorous policy analysis.

Our outputs directly inform policy debates when public attention peaks. Our rapid Budget analysis capacity ensures findings reach media and MPs overnight—matching the pace set by Resolution Foundation and IFS. The council tax platform creates an entirely new category of local policy impact: for the first time, councillors considering CTR scheme changes will see distributional consequences before voting, local journalists will contextualise their council's choices against neighbours, and advocacy groups will show members exactly how their area compares.

The council tax platform targets audiences systematically excluded from policy analysis. The BBC Local Democracy Reporting Service employs over 150 journalists covering local government, yet these reporters currently lack tools to compare council tax policies across authorities. Our platform changes this: a reporter in Dudley can show readers within 30 seconds how their council's 60% minimum payment [@dudley_ctr_2025] compares to Stroud's 100% support [@stroud_ctr_2025]. We will brief this network at launch and provide ongoing support as councils update schemes. Engagement with the Local Government Association in England, COSLA in Scotland, and WLGA in Wales ensures UK-wide coverage while encouraging adoption by councils seeking to communicate their own policies to residents.

Our engagement strategy connects five audiences in a reinforcing system. Government and parliamentary users access constituency-level analysis tools through targeted sessions, building on existing HM Treasury relationships established through Nikhil Woodruff's position at 10 Downing Street. When MPs and officials use these tools, their inquiries generate media interest, creating natural news hooks for journalists serving all 650 constituencies. Our rapid Budget analysis capacity ensures findings reach quality outlets within news cycles, amplifying parliamentary discussions into public debate.

National media coverage drives civil society adoption. NGOs and charities gain access to the same analytical capabilities used by government, with pre-built templates lowering technical barriers while strict political neutrality ensures organisations across the political spectrum can conduct rigorous distributional analysis. As civil society organisations incorporate PolicyEngine findings into their advocacy, academic researchers scrutinise both methodology and conclusions. Conference presentations across nine to twelve venues over three years and annual symposia convene 50-100 users for case study presentations and methodology discussions.

Local media represent a distinct and underserved audience. Regional and local newspapers lack the analytical resources of national outlets, yet their coverage shapes how millions understand policy changes affecting their communities. We develop constituency-specific features including automated local reports, embeddable widgets for council websites, and dashboards summarising key impacts for individual local authorities.

These interconnections create accountability loops: parliamentary usage generates media citations, which amplify civil society advocacy, which attracts academic scrutiny, which improves our methods, which strengthens governmental confidence. Local coverage creates parallel loops through councils, local media, and community organisations.

We measure success through adoption rates across these audiences, citation patterns during policy moments, council adoption of the platform, local media usage metrics, and documented improvements in evidence quality within public debate compared to baseline periods. We target 75 or more external citations over three years and active use by at least 50 local authorities by project end.`
  },
  {
    key: "d_methods_approach_activities",
    title: "D. Methods, approach and activities",
    wordLimit: 2800,
    content: `PolicyEngine builds interactive tools that help everyone in the UK—regardless of policy expertise—understand how tax and benefit policy affects their country, their community, and their household. This project funds UK capacity to build these tools and reach audiences beyond Westminster—particularly the local journalists, councillors, and advocacy groups who lack access to sophisticated policy analysis.

Building on our validation work with 10 Downing Street (see Case for Importance), PolicyEngine has demonstrated it can produce analysis that meets the highest standards of government scrutiny. This validation provides the foundation for the public-facing interactives proposed here.

This application commits to two concrete deliverables—council tax policy platform and overnight Budget analysis—plus 100+ policy interactives across three years with topics selected through quarterly reviews with the Foundation. This structure provides concrete outputs while embedding the Foundation as an active partner in priority-setting, ensuring that our publishing cadence serves the most important emerging policy moments rather than defaulting to a predetermined list that may miss the debates that matter most.

**COMMITTED ACTIVITIES**

Council Tax Reduction is one of Britain's most locally-varied policies, yet no public tool lets people explore how their council's choices compare to others. When the national Council Tax Benefit was abolished in 2013, England devolved scheme design to its 296 billing authorities, creating 313 distinct schemes with dramatically different rules. Scotland and Wales retained national CTR schemes set by their devolved governments. Northern Ireland operates domestic rates with a separate rebate system. No existing tool models this UK-wide variation comprehensively.

The local variation is existential for affected households. Stroud District Council offers up to 100% support with no minimum payment required [@stroud_ctr_2025], meaning a low-income household pays nothing toward their council tax bill. Dudley Metropolitan Borough Council, by contrast, now requires working-age claimants to pay at least 60% of their council tax bill regardless of income—up from 23% the previous year [@dudley_ctr_2025]. An identical household with identical income pays nothing in Stroud while paying over half their bill in Dudley. This hidden variation affects the poorest households most severely, yet receives little scrutiny because the information is inaccessible. Local journalists lack tools to compare their council's scheme to neighbours. Councillors considering reforms cannot easily model the effects. Advocacy groups cannot show members how their area compares.

We will build a council tax policy platform where policymakers and the public can understand how Council Tax Reduction schemes operate, compare rules across authorities, and design reforms with fiscal, distributional, and household-level analysis. Users select their local authority and see how their council's CTR rules compare to others, what households like theirs would pay under different schemes, and what reforms would mean for local budgets and individual bills. This platform gives local journalists, councillors, and advocacy groups the same analytical power currently available only to well-resourced central government departments.

AI-assisted development accelerates our encoding capacity. PolicyEngine has developed a Claude Code plugin [@policyengine_claude_2025] that orchestrates 18 specialized AI coding agents to collect documentation, encode policy rules, generate tests, and validate implementations. In our US TANF implementation across 50 states, this multi-agent workflow reduced encoding time by approximately 80%. Research from METR shows AI task completion capability doubling approximately every seven months, accelerating to every four months in 2024-25 for coding tasks [@metr_2025]. SWE-Bench Verified scores have risen from 33% to over 70% in just one year. By project end, we expect AI assistance to handle substantial portions of the scheme documentation and initial encoding work, with human review ensuring accuracy. This trajectory makes encoding all UK schemes—313 English local schemes plus national schemes for Scotland, Wales, and Northern Ireland—tractable within Year 1.

Budget announcements create brief windows when public attention peaks and political positions form. Traditional think tank reports arrive weeks later, when the moment has passed. The same infrastructure that enables government analysts to test policy options in minutes can translate Budget announcements into public-facing interactives overnight—if the preparatory work is done. Our Budget interactives let users customise household characteristics and see instantly how each policy component affects them year by year over their entire working life, with expandable tooltips explaining each provision's calculation—a level of personalised analysis previously impossible outside government.

This project sustains and expands that rapid-response capacity while building a sustainable publishing rhythm between major events. Beyond fiscal events, we are moving to weekly UK publishing. Each week brings an interactive exploring a policy question such as how the two-child limit affects families in different areas, what extending free school meals would cost specific constituencies, or how PIP changes affect disabled households. Recent examples include our Autumn Budget 2025 dashboard [@policyengine_budget_2025], the Scottish Budget 2026-27 interactive [@policyengine_scottish_budget_2026], and GiveCalc UK for charitable giving analysis [@policyengine_givecalc_uk_2025]. In the US, our OBBBA household-by-household tool [@policyengine_obbba_2025] demonstrates the interactive household impact format we will apply to UK policy. This consistent output builds audience among local journalists and advocacy groups, refines our production process, and ensures we are ready when major policy moments arrive.

Each year delivers an Autumn Budget interactive overnight—matching Resolution Foundation and IFS pace—a Spring fiscal event or major policy interactive, and 40 or more weekly interactives ramping up over Year 1. Over three years this translates to six major fiscal event interactives, more than 100 weekly policy interactives [@policyengine_interactive_ideas_2026], and constituency-level data for all 650 seats updated after each event.

**FLEXIBLE ACTIVITIES**

We maintain capacity for interactives responding to policy moments as they emerge. The governance structure for these activities represents a deliberate innovation in funder-grantee collaboration: rather than presenting the Foundation with a fixed menu of outputs and returning only to report on completion, we propose genuine joint priority-setting through quarterly reviews. This directly addresses the risk that responsive work becomes a scattershot collection of activities without strategic coherence. The quarterly reviews make the Foundation an active participant in deciding what matters most, bringing together our real-time understanding of audience demand and production capacity with the Foundation's strategic perspective on which policy debates most warrant public engagement tools.

When a specific local authority hits the news—a Section 114 notice, controversial CTR scheme change, or unusual poverty outcomes—we could produce a deep dive comparing that area to similar councils and showing how alternative policies would affect local households.

**HOW WE WORK**

Traditional think tanks produce PDF reports that get read once and filed away. We build interactive tools that people return to repeatedly, with dashboards that let users explore personal impacts, compare areas, and test reform scenarios. PolicyEngine uses open-source microsimulation infrastructure under an Apache 2.0 licence. The underlying calculations are publicly available for anyone to review, validate, or extend. We build the accessible interactive layer on top of this open foundation, ensuring our work benefits from distributed scrutiny while remaining usable by non-technical audiences.

Test-driven development underpins all technical work. Before implementing any policy rule, we write test cases specifying expected outputs for known inputs, drawing on worked examples from official guidance and published statistics. The test suite runs automatically whenever code changes. This methodology proved essential during government validation, where comprehensive test coverage built confidence in our outputs. External validation complements internal quality assurance. Advisory board members review methodology before launch. Beta testing with target users identifies usability issues before public release.`
  },
  {
    key: "e_research_engagement_team",
    title: "E. Research engagement team",
    wordLimit: 500,
    content: `The project brings together a distributed team with complementary expertise spanning policy economics, software engineering, and government practice. Max Ghenis (PI, PolicyEngine CEO, 20% FTE) supervises all workstreams from the US, where his experience founding the UBI Center and working as a data scientist at Google—alongside degrees from UC Berkeley (B.A. Operations Research) and MIT (M.S. Development Economics)—positions him to lead dissemination strategy and ensure UK work aligns with PolicyEngine's broader mission. Working closely with Max, Nikhil Woodruff (PolicyEngine CTO and UK Director, 10% FTE) leads technical architecture and UK strategic direction with a B.Sc. in Computer Science from Durham University and previous experience as UBI Center UK Research Director. Since late 2025, Nikhil has been seconded 80% to 10 Downing Street's Data Science team (10DS). Following his initial six-month secondment, 10DS offered Nikhil a two-year extension at 80% FTE to continue PolicyEngine projects within government—an endorsement he accepted. This arrangement strengthens rather than limits this project: his position inside government provides firsthand understanding of how civil servants analyse policy, ensures ongoing model improvement through direct feedback, and creates a bridge between our external tool and government needs. His remaining 10% focuses on architectural decisions, advisory board coordination, and ensuring technical quality across deliverables.

This strategic leadership enables Vahid Ahmadi (UK Research Associate, 75% FTE) to serve as the project's primary UK researcher and day-to-day operational lead. Previously a pre-doctoral researcher at the Centre for Macroeconomics at the London School of Economics, with an M.Sc. in Economics from the University of Munich and a B.Sc. in Electrical Engineering from Sharif University of Technology, Vahid combines policy economics expertise with technical fluency. He leads model development—particularly council tax reforms and distributional analysis—produces policy analyses and research outputs, and coordinates engagement activities including targeted roundtables, regional workshops, and research partnerships. As the primary point of contact for UK partners, Vahid manages relationships with parliamentary researchers, think tanks, and local authority analysts, balancing expert stakeholder engagement with fostering adoption among local organisations.

Anthony Volk (Full-stack Engineer, contractor, 30% FTE) translates this research agenda into accessible tools, leading UI development including the AI policy authoring interface and constituency-level analysis toolkit. With infrastructure research experience at the Institute for State Effectiveness and degrees from Harvard University, Anthony ensures the authoring tools meet accessibility standards for non-technical users while maintaining analytical rigour.

Team coordination leverages these complementary positions through weekly calls and shared project management tools. Max provides strategic oversight and leads high-profile dissemination including media engagement and presentations to national policymakers. Nikhil's government position offers insider perspective on civil service needs and model validation. Vahid serves as the operational centre, coordinating practitioner engagement while managing day-to-day execution. Anthony translates this work into accessible products through demonstrations and documentation.`
  },
  {
    key: "g_quality_assurance_risk",
    title: "G. Quality assurance and risk",
    wordLimit: 350,
    content: `Quality Assurance Approach

PolicyEngine employs complementary quality controls throughout development. Our approach begins with test-driven development: before implementing any calculation, we write test cases derived from legislation, official examples, or published analyses. Code must pass all tests before release, and these tests form a regression suite that runs automatically with every change [@nagappan_tdd_2008; @george_tdd_2004].

Each major output undergoes multi-source validation. Household examples are compared with official calculators and published cases, aggregate totals validated against HMRC, DWP, and MHCLG administrative data, and distributional patterns checked against IFS, Resolution Foundation, and OBR analyses. Major deliverables undergo advisory board review before publication. New features are tested with both technical users who validate methodology and non-technical users who assess usability. When errors are identified post-publication, they are acknowledged and corrected within 24 hours.

Final sign-off rests with designated team members: council tax requires approval from Nikhil Woodruff and Max Ghenis; Budget analyses are led by Vahid Ahmadi with Max's review; web features are developed by Anthony Volk with Nikhil's technical oversight.

Limitations and Risks

Council tax data presents the most immediate challenge: England's 313 distinct CTR schemes are documented inconsistently, and some parameters may prove difficult to obtain. Scotland, Wales, and Northern Ireland have national schemes that are better documented but require separate data sources. We address this through multiple sources—MHCLG, Scottish Government, Welsh Government, and NI Executive data, direct authority contact, and freedom of information requests—while transparently documenting gaps.

Rapid Budget analysis creates tension between speed and accuracy. We mitigate this through mandatory two-person review and template-based workflows that standardise calculations. Model errors reaching publication, though less likely given our testing regime, would carry reputational consequences; test-driven development, external validation, and our public corrections policy provide protection.

Microsimulation inherently involves uncertainty: survey data has sampling error, behavioural responses are estimated, and policy implementation may differ from legislation. We communicate uncertainty clearly and make model limitations visible through validation dashboards.`
  },
  {
    key: "h_legal_ethical",
    title: "H. Legal and ethical considerations",
    wordLimit: 700,
    content: `Data Protection

PolicyEngine uses survey microdata from the Family Resources Survey, Survey of Personal Incomes, and Wealth and Assets Survey under licence from the UK Data Service. We comply with all licence terms: no attempt to identify respondents, secure data storage with access controls, no redistribution of raw microdata.

We ensure GDPR compliance throughout. We do not collect personally identifiable information from website users by default; analytics are aggregate and anonymised. Council tax rates constitute published administrative data; the property band distributions we use are aggregate statistics only.

AI-powered features require additional considerations. User queries are processed solely for response generation and not stored for training. We provide clear disclosure that AI features involve third-party services such as OpenAI and Anthropic.

Ethical Considerations

The primary ethical risk is potential misuse: tools could generate misleading analysis influencing policy debate. We maintain safeguards including test-driven development to reduce errors, external validation against official statistics, advisory board review of major outputs, and transparent methodology enabling external scrutiny.

User guidance explains appropriate uses and limitations. All outputs include caveats such as "microsimulation estimates, not forecasts." When errors occur, we acknowledge them within 24 hours and maintain visible correction notices.

Political neutrality is fundamental. PolicyEngine does not advocate for specific policies. We analyse proposals from across the political spectrum, describing impacts rather than judging whether policies are "good" or "bad."

AI interfaces introduce specific challenges. Large language models can generate plausible but incorrect information; we mitigate this by validating AI responses against direct model access and flagging experimental features. We build uncertainty communication into AI responses and provide links to full methodology.

Presenting distributional analysis involves framing choices. We publish multiple metrics rather than only those favouring particular narratives, use standard definitions (OECD equivalisation, 60% median poverty line), and enable users to run analyses with different assumptions.

PolicyEngine democratises access to analysis previously concentrated in well-resourced institutions. We address power dynamics by prioritising accessibility features, offering direct support to civil society users, and ensuring free access with no premium tiers.

Ethical Clearance

This project does not involve human subjects research, collection of primary data from individuals, vulnerable populations, or deception. As software development using public and licensed data, formal ethical clearance does not apply. We maintain rigorous standards through UK Data Service licence compliance, GDPR compliance, advisory board oversight, and commitment to transparency. PolicyEngine is certified as a UN Digital Public Good [@dpga_2024].`
  },
  {
    key: "j_timetable",
    title: "J. Timetable",
    wordLimit: 700,
    content: `The project runs for 36 months from July 2026 to June 2029, structured around two committed deliverables (council tax policy platform, overnight Budget analysis) plus 100+ policy interactives with topics selected through quarterly reviews with the Foundation.

**2026 (July-December):** The project launches with council tax data collection and structure implementation across all UK nations. Budget preparation begins weeks before the announcement: building interactive templates, pre-modelling policies floated in media, and preparing constituency breakdowns. The team delivers Autumn Budget 2026 analysis overnight following the Chancellor's statement. This period establishes the quarterly review rhythm with the Foundation. By year-end: council tax data pipeline operational, Autumn Budget analysis complete, first quarterly progress report delivered.

**2027 (January-December):** The first half focuses on encoding council tax schemes across all UK nations—313 distinct English schemes plus national schemes for Scotland, Wales, and Northern Ireland. Spring fiscal event 2027 analysis demonstrates continued rapid-response capacity. By mid-year, the council tax platform launches publicly with a validation report—the first major committed deliverable. The second half produces a council tax policy brief demonstrating analytical capabilities for local government. Autumn Budget 2027 analysis maintains the annual rhythm. Year-end deliverables: two Budget analyses, complete council tax platform, policy brief, Year 1 progress report.

**2028 (January-December):** Year two continues Spring and Autumn Budget analyses while deepening capabilities through flexible development activities. The mid-grant review at Month 24 provides comprehensive progress assessment. The second half produces a thematic deep-dive report synthesising insights across model components. Year-end deliverables: two Budget analyses, thematic report, mid-grant progress report.

**2029 (January-June):** The final six months complete outstanding flexible development while ensuring documentation and operational integration. Spring fiscal event analysis if scheduled. The comprehensive final report synthesises three years of development and documents outcomes. All outputs delivered before grant end.

**Key milestones:** Council tax data collection (Month 3, September 2026). Council tax implementation (Month 9, March 2027). Public launch (Month 12, June 2027). First Budget analysis (Month 5, November 2026). Policy brief (Month 18, December 2027). Mid-grant review (Month 24, June 2028). Final Budget analysis (Month 29, November 2028). All outputs complete (Month 36, June 2029).

**Interim reporting:** Year 1 progress report (Month 12), mid-grant progress report (Month 24), final report (Month 36). Quarterly briefings maintain ongoing communication with the Foundation.

**Risk mitigation:** Council tax implementation includes a three-month buffer before Year 1 deadline. Budget analyses rely on established rapid-response protocols. Flexible activities can be re-prioritised through quarterly reviews. Staff continuity and cross-training provide backup capacity.`
  }
];
