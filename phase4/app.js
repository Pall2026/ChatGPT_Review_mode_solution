/* ==========================================================================
   PHASE 4 — DYNAMIC TOPICS & VISUAL REASONING GRAPH
   ========================================================================== */

// -----------------------------------------------------------------------
// TOPICS DATA REGISTRY
// -----------------------------------------------------------------------
const TOPICS_DATA = {
  "ev-market": {
    question: "Analyze India's EV market and suggest growth opportunities for a startup entering this space in 2026",
    assumptions: [
      "You're asking about the Indian domestic EV passenger vehicle market.",
      "\"Startup\" refers to an early-stage company with limited capital ($1-5M seed), not an established automotive OEM.",
      "Growth opportunities should be actionable for 2026 entry — considering current government policy frameworks and incentive schemes."
    ],
    answerHTML: `
      <h2>India's EV Passenger Market: Growth Opportunities for 2026</h2>
      <h3>1. Consumer Market Overview</h3>
      <p>As requested, focusing exclusively on the <strong>domestic passenger EV market</strong> (consumer two-wheelers and private cars), the landscape is driven heavily by retail consumers. In FY2025, private EV sales crossed <span class="hl-blue" data-tip="blue" data-idx="0">2.1 million units</span>, almost entirely dominated by electric scooters and motorcycles.</p>
      <p><span class="hl-yellow" data-tip="yellow" data-idx="0">Government subsidies under FAME III have reduced the average consumer cost of an electric two-wheeler by approximately ₹25,000–₹40,000</span>, bridging the upfront cost gap with traditional petrol scooters. The consumer EV market is projected to reach <span class="hl-blue" data-tip="blue" data-idx="1">$100 billion by 2030</span>.</p>
      <hr>
      <h3>2. Key Growth Segments (Passenger Vehicles)</h3>
      <p><strong>a) Two-Wheeler Consumer EVs:</strong> Companies like Ola Electric, Ather Energy, and TVS have established early dominance in major cities. However, <span class="hl-yellow" data-tip="yellow" data-idx="1">Tier-2 and Tier-3 cities remain vastly underserved, representing less than 18% of current EV two-wheeler sales despite comprising over 60% of India's two-wheeler demand</span>.</p>
      <p><strong>b) Private Passenger Cars (4W):</strong> While still nascent, the personal car segment is growing rapidly, led by Tata Motors and Mahindra. Adoption is primarily constrained by upfront costs and charging anxiety.</p>
      <p><strong>c) Public Charging Infrastructure:</strong> For passenger vehicles, range anxiety is the #1 deterrent. India currently has approximately <span class="hl-red" data-tip="red" data-idx="1">12,146 public charging stations as of March 2025</span><span class="inline-citation-badge" data-source-idx="1">BEE India</span>, significantly below the global benchmark.</p>
      <hr>
      <h3>3. Startup Opportunities for 2026 Entry</h3>
      <p><strong>Opportunity 1 — Battery-as-a-Service (BaaS):</strong> <span class="hl-blue" data-tip="blue" data-idx="2">Decoupling battery cost from vehicle purchase can reduce upfront EV prices by 30-40%</span>, making adoption viable for price-sensitive Indian consumers. Startups like Sun Mobility and Battery Smart have validated the model; however, coverage outside top-8 metros remains minimal.</p>
      <p><strong>Opportunity 2 — EV Financing & Insurance:</strong> <span class="hl-yellow" data-tip="yellow" data-idx="2">Traditional banks remain hesitant to finance EVs due to uncertain residual values and limited actuarial data for battery degradation</span>. A fintech-first approach — using telematics data for dynamic risk assessment — could unlock a ₹40,000 crore lending opportunity.</p>
      <p><strong>Opportunity 3 — Charging Network Aggregation:</strong> Rather than deploying physical chargers, a software platform aggregating existing charge points (BPCL, Tata Power, EESL) into a unified discovery-booking-payment layer could become the <span class="hl-red" data-tip="red" data-idx="2">"UPI of EV charging"<span class="inline-citation-badge" data-source-idx="2">MoP Draft</span> — a concept the Ministry of Power has actively endorsed in its 2025 EV policy draft.</span></p>
      <hr>
      <h3>4. Risks & Considerations</h3>
      <p>Startups entering this space should account for <strong>lithium-ion cell import dependency</strong> (India imports over 80% of its Li-ion cells from China), potential subsidy rollbacks post-election cycles, and the competitive pressure from well-funded incumbents like Tata Motors and Mahindra Electric who are aggressively expanding their EV portfolios.</p>
      <p>Overall, the Indian EV ecosystem in 2026 presents a generational opportunity — but success will depend on <strong>execution speed, regulatory navigation, and building trust</strong> in a market still early in its adoption curve.</p>
    `,
    guidedEditTarget: 0, // Assumption 1 (0-indexed)
    targetEditText: "You're asking about the Indian commercial fleet market.",
    alternativeAnswerHTML: `
      <h2>India's EV Market: Commercial Fleet Electrification Strategy (2026)</h2>
      <h3>1. The Commercial Fleet Imperative</h3>
      <p>As you've specified a focus on commercial fleets, the market dynamics shift significantly. The unit economics for B2B fleet electrification (last-mile delivery, ride-hailing, employee transport) have already achieved parity with ICE vehicles due to high asset utilization (over 100km/day). The total cost of ownership (TCO) for a commercial EV is now <span class="hl-blue" data-tip="blue" data-idx="0">18-22% lower than diesel equivalents</span> over a 4-year lifecycle.</p>
      <hr>
      <h3>2. Key Sub-Segments</h3>
      <p><strong>a) Three-Wheeler Cargo (L5 Category):</strong> This is the fastest-growing segment for logistics. Companies like Euler Motors and Altigreen are pioneering this space. <span class="hl-yellow" data-tip="yellow" data-idx="0">Demand from e-commerce giants is outstripping supply by a ratio of 3:1</span>.</p>
      <p><strong>b) Two-Wheeler Gig Fleets:</strong> Zomato, Swiggy, and Zepto are actively incentivizing delivery partners to switch to EVs. <span class="hl-red" data-tip="red" data-idx="0">Amazon and Flipkart have committed to electrifying 100% of their delivery fleets by 2025</span><span class="inline-citation-badge" data-source-idx="0">Amazon Report</span> (Note: See verification check on this claim).</p>
      <hr>
      <h3>3. B2B Startup Opportunities</h3>
      <p><strong>Opportunity 1 — Full-Stack Fleet-as-a-Service (FaaS):</strong> Rather than selling vehicles, providing a bundled offering (Vehicle + Driver + Charging + Maintenance) on a per-km or per-month contract. Startups like Zypp Electric and BluSmart are leading this, but <span class="hl-yellow" data-tip="yellow" data-idx="1">Tier-2 hubs for regional logistics are completely untapped</span>.</p>
      <p><strong>Opportunity 2 — B2B Charging Hubs:</strong> Dedicated mega-charging depots tailored for commercial fleets, featuring fast-DC chargers, driver rest areas, and heavy-duty battery swapping stations. <span class="hl-red" data-tip="red" data-idx="1">India currently has only 12,146 public charging stations</span><span class="inline-citation-badge" data-source-idx="1">BEE India</span>, most of which are inadequate for commercial fleet turnaround times.</p>
      <hr>
      <h3>4. Risks & Considerations</h3>
      <p>Fleet startups must solve the <strong>driver retention crisis</strong> and manage the complex operational logistics of charging downtime. Success in 2026 will belong to startups that master software-defined fleet management rather than just hardware procurement.</p>
    `,
    tooltips: {
      blue: [
        { title: "Assumed Market Data", desc: "The figure \"2.1 million units in FY2025\" is based on VAHAN dashboard aggregated registrations. Actual sales may differ from registrations by 5-8%." },
        { title: "Projected Estimate", desc: "The $100B market size projection is sourced from NITI Aayog's 2024 report and CEEW's \"India EV Outlook 2030\" study." },
        { title: "Industry Benchmark", desc: "The 30-40% cost reduction from BaaS is based on Sun Mobility's published pricing model. Actual reduction varies by battery chemistry." }
      ],
      yellow: [
        { title: "AI Inference — Subsidy Impact", desc: "The ₹25,000–₹40,000 subsidy range is inferred from FAME II terminal rates extrapolated to FAME III. Official rates not yet finalized.", hasReasoningMap: true, reasoningId: "ev-yellow-0" },
        { title: "AI Inference — Market Gap", desc: "The 18% Tier-2/3 penetration figure is inferred from Ather and Ola retail distribution data, not a unified industry report.", hasReasoningMap: true, reasoningId: "ev-yellow-1" },
        { title: "AI Inference — Banking Hesitancy", desc: "Assessment based on RBI's 2024 Financial Stability Report commentary and anecdotal fintech founder interviews.", hasReasoningMap: true, reasoningId: "ev-yellow-2" }
      ],
      red: [
        { title: "Verification Issue — Fleet Commitment", desc: "Amazon's 2023 sustainability report states 10,000 EVs by 2025, not 100% fleet. Flipkart references 2030 timeline." },
        { title: "Verification Issue — Charging Stations", desc: "BEE lists 8,738 operational stations (Jan 2025). The 12,146 figure may include planned stations." },
        { title: "Verification Issue — Policy Attribution", desc: "\"UPI of EV charging\" is not in any official MoP document. It originates from media/industry commentary." }
      ]
    },
    alternativeTooltips: {
      blue: [
        { title: "TCO Calculation", desc: "The 18-22% lower TCO assumes 100km/day utilization, comparing a ₹3.5L EV cargo 3W against a ₹2.8L diesel equivalent over 48 months." }
      ],
      yellow: [
        { title: "AI Inference — Market Demand", desc: "The 3:1 demand-supply gap is inferred from wait times for Euler HiLoad and Mahindra Treo Zor across top 5 metro dealerships.", hasReasoningMap: true, reasoningId: "ev-alt-yellow-0" },
        { title: "AI Inference — Tier-2 Hubs", desc: "Untapped status is inferred from current deployment data of Zypp and BluSmart, which are >90% concentrated in NCR and Bengaluru.", hasReasoningMap: true, reasoningId: "ev-alt-yellow-1" }
      ],
      red: [
        { title: "Verification Issue — Fleet Commitment", desc: "Amazon's 2023 sustainability report states 10,000 EVs by 2025, not 100% fleet. Flipkart references 2030 timeline." },
        { title: "Verification Issue — Charging Stations", desc: "BEE lists 8,738 operational stations (Jan 2025). The 12,146 figure may include planned stations." }
      ]
    },
    sources: [
      { title: "Amazon India Sustainability Report 2023", meta: "sustainability.aboutamazon.in • Published Dec 2023", body: `<p>Amazon's Climate Pledge commits the company to net-zero carbon by 2040.</p><div class="source-highlight"><p><strong>Key finding:</strong> "Amazon India has deployed over 6,000 electric delivery vehicles, with a target of <strong>10,000 EVs by end of 2025</strong>. This represents partial fleet electrification, not a complete 100% transition."</p></div>` },
      { title: "Bureau of Energy Efficiency — EV Charging Registry", meta: "beeindia.gov.in • Last updated Jan 2025", body: `<p>The BEE maintains the official registry of public EV charging stations.</p><div class="source-highlight"><p><strong>Official count:</strong> "As of January 2025, there are <strong>8,738 operational public charging stations</strong>. An additional 3,408 are 'under installation' or 'awaiting commissioning'."</p></div>` },
      { title: "Ministry of Power — Draft EV Charging Policy 2025", meta: "powermin.gov.in • Draft circulated Mar 2025", body: `<p>The policy outlines a framework for interoperability between charge point operators.</p><div class="source-highlight"><p><strong>Key finding:</strong> The draft does not use "UPI of EV charging." It references "a unified digital layer for charge point discovery and payment." <strong>The specific branding originates from industry commentary</strong>, not official policy.</p></div>` }
    ],
    autoCorrections: {
      "red-0": "Amazon India has set a target of deploying 10,000 electric delivery vehicles by 2025 (not 100% fleet). Flipkart targets full fleet electrification by 2030",
      "red-1": "8,738 operational public charging stations as of January 2025 (BEE verified), with 3,408 additional stations under installation",
      "red-2": "\"unified charging platform\" — a concept described in media coverage of the Ministry of Power's 2025 EV policy draft"
    },
    followUps: {
      "Elaborate on BaaS opportunity": `<h3>Battery-as-a-Service: Deep Dive</h3><p>The BaaS model decouples the battery from the vehicle purchase price. Key players like <strong>Sun Mobility</strong> and <strong>Battery Smart</strong> have proven unit economics in metro corridors. The whitespace lies in Tier-2/3 expansion.</p>`,
      "What about regulatory risks?": `<h3>Regulatory Risk Analysis</h3><p>The Indian EV policy landscape carries notable risks for 2026 entrants, primarily <strong>FAME III expiry uncertainty</strong> and <strong>State-level fragmentation</strong>.</p>`
    }
  },

  "solar-energy": {
    question: "Evaluate opportunities for a Solar Energy startup in rural India targeting off-grid agricultural applications.",
    assumptions: [
      "Targeting purely off-grid or weak-grid agricultural regions, not urban rooftop solar.",
      "Focusing on commercial viability (B2B/B2C hybrid), not NGO/grant-based deployment.",
      "Considering the PM-KUSUM scheme subsidies as a primary driver."
    ],
    answerHTML: `
      <h2>Solar Energy: Off-Grid Agricultural Opportunities</h2>
      <h3>1. The Agricultural Energy Deficit</h3>
      <p>Indian agriculture remains highly energy-intensive, with irrigation accounting for massive diesel consumption. Currently, <span class="hl-blue" data-tip="blue" data-idx="0">over 8 million diesel pumps are actively used across Indian farms</span>, resulting in high operational costs and significant carbon emissions.</p>
      <p><span class="hl-yellow" data-tip="yellow" data-idx="0">The PM-KUSUM scheme has successfully solarized 1.5 million pumps to date, primarily driven by state-level subsidy matching in Gujarat and Rajasthan</span>. However, maintenance of these systems remains a massive challenge, leading to a <span class="hl-blue" data-tip="blue" data-idx="1">22% system downtime rate</span> after the first two years.</p>
      <hr>
      <h3>2. Startup Opportunities</h3>
      <p><strong>Opportunity 1 — Solar Pump Micro-Grids:</strong> Startups can deploy centralized solar micro-grids (10-50kW) that sell "water-as-a-service" to clustered smallholder farmers. <span class="hl-red" data-tip="red" data-idx="0">Recent policy changes explicitly allow startups to bypass DISCOMs and sell directly to farmers without a distribution license</span>.</p>
      <p><strong>Opportunity 2 — Predictive Maintenance IoT:</strong> <span class="hl-yellow" data-tip="yellow" data-idx="1">Given the high failure rate of inverters in rural areas due to dust and grid fluctuations</span>, an IoT overlay providing predictive maintenance can secure AMC (Annual Maintenance Contracts) from larger solar EPCs.</p>
      <p><strong>Opportunity 3 — Cold Storage:</strong> Farm-gate solar cold storage can reduce post-harvest losses. <span class="hl-red" data-tip="red" data-idx="1">The Ministry of Agriculture guarantees 100% upfront capital subsidy for solar cold rooms under 5 metric tons</span>, lowering the barrier to entry significantly.</p>
    `,
    tooltips: {
      blue: [
        { title: "Baseline Metric", desc: "The figure of 8 million diesel pumps is cited from the CEEW 2023 report on agricultural energy transition." },
        { title: "Downtime Estimate", desc: "The 22% downtime rate is an aggregate metric drawn from rural energy NGO surveys (2022-2024)." }
      ],
      yellow: [
        { title: "AI Inference — KUSUM Impact", desc: "The 1.5 million figure is inferred by combining PM-KUSUM Component B and C targets with state-level implementation reports.", hasReasoningMap: true, reasoningId: "solar-yellow-0" },
        { title: "AI Inference — Hardware Failure", desc: "Inferred from generic solar installation failure modes; dust and grid fluctuations are assumed primary causes in rural India.", hasReasoningMap: false }
      ],
      red: [
        { title: "Verification Issue — Licensing", desc: "The Electricity Act 2003 and subsequent amendments still require specific state regulatory approvals for micro-grids. Selling 'water' is unregulated, but selling 'electricity' peer-to-peer still faces regulatory hurdles in most states." },
        { title: "Verification Issue — Subsidy Amount", desc: "The Ministry of Agriculture provides a 35-50% back-ended capital subsidy for solar cold storage under the MIDH scheme, not a 100% upfront subsidy." }
      ]
    },
    sources: [
      { title: "Electricity Rules (Micro-grid) 2024", meta: "cercind.gov.in", body: `<p>Guidelines for rural electrification.</p><div class="source-highlight"><p><strong>Key finding:</strong> "While micro-grids under 50kW are exempt from full licensing, state nodal agency registration is mandatory, and peer-to-peer tariff rates must be capped."</p></div>` },
      { title: "Mission for Integrated Development of Horticulture (MIDH)", meta: "midh.gov.in", body: `<p>Cold chain infrastructure subsidies.</p><div class="source-highlight"><p><strong>Key finding:</strong> "Solar cold storages are eligible for a credit-linked, back-ended subsidy of 35% of the project cost in general areas, and 50% in hilly/scheduled areas."</p></div>` }
    ],
    autoCorrections: {
      "red-0": "Startups selling 'water-as-a-service' avoid electricity licensing, though selling surplus peer-to-peer power still requires state nodal agency registration",
      "red-1": "The Ministry of Agriculture provides a 35-50% back-ended capital subsidy for solar cold rooms under the MIDH scheme"
    },
    followUps: {}
  },

  "ai-healthcare": {
    question: "Analyze the entry strategy for a B2B AI Healthcare startup in India focusing on diagnostic radiology.",
    assumptions: [
      "Targeting B2B (hospitals/clinics), not direct-to-consumer apps.",
      "Focusing specifically on diagnostic radiology (X-ray, MRI, CT analysis).",
      "Assuming a SaaS or per-scan pricing model."
    ],
    answerHTML: `
      <h2>AI in Diagnostic Radiology: India Entry Strategy</h2>
      <h3>1. Market Deficit</h3>
      <p>India faces a severe radiologist shortage, with an estimated <span class="hl-blue" data-tip="blue" data-idx="0">ratio of 1 radiologist per 100,000 people</span>. This bottleneck causes significant delays in diagnostic reporting, especially in Tier-2 and Tier-3 cities.</p>
      <p><span class="hl-yellow" data-tip="yellow" data-idx="0">Hospitals are highly receptive to AI triage tools that pre-screen chest X-rays for TB and pneumonia, as this immediately increases radiologist throughput by up to 40%</span>.</p>
      <hr>
      <h3>2. Go-to-Market Strategy</h3>
      <p><strong>PACS Integration:</strong> The most successful strategy is zero-footprint integration directly into the hospital's existing Picture Archiving and Communication System (PACS). <span class="hl-red" data-tip="red" data-idx="0">Most Indian hospitals use cloud-native PACS systems with modern APIs, making integration trivial</span>.</p>
      <p><strong>Data Privacy Compliance:</strong> <span class="hl-yellow" data-tip="yellow" data-idx="1">Indian healthcare data cannot be processed on servers outside the country due to the strict enforcement of the Digital Personal Data Protection (DPDP) Act 2023 guidelines on health data</span>.</p>
      <p><strong>Regulatory Clearance:</strong> <span class="hl-red" data-tip="red" data-idx="1">AI diagnostic tools are classified as Class A non-regulated medical devices under CDSCO, meaning startups can deploy immediately without clinical trials</span>.</p>
    `,
    tooltips: {
      blue: [
        { title: "Demographic Data", desc: "The 1:100,000 ratio is widely cited by the Indian Radiological & Imaging Association (IRIA)." }
      ],
      yellow: [
        { title: "AI Inference — ROI", desc: "The 40% throughput increase is inferred from vendor claims (like Qure.ai) rather than independent clinical validation across diverse hospital settings.", hasReasoningMap: true, reasoningId: "health-yellow-0" },
        { title: "AI Inference — Data Localization", desc: "The DPDP Act 2023 actually takes a 'blacklist' approach to cross-border data flows, but hospital procurement policies enforce strict local data residency.", hasReasoningMap: false }
      ],
      red: [
        { title: "Verification Issue — PACS Infrastructure", desc: "A significant majority of mid-tier Indian hospitals use legacy, on-premise PACS systems (often pirated or outdated versions) without standard API access, making integration a major technical hurdle." },
        { title: "Verification Issue — CDSCO Classification", desc: "Under the Medical Devices Rules (2020 amendment), software intended for clinical diagnosis (SaMD) is classified as Class B or C (depending on risk) and requires CDSCO registration and clinical investigation data." }
      ]
    },
    sources: [
      { title: "Healthcare IT Market Survey India 2023", meta: "nasscom.in", body: `<p>Hospital infrastructure report.</p><div class="source-highlight"><p><strong>Key finding:</strong> "Over 65% of mid-sized hospitals (50-200 beds) still rely on legacy on-premise PACS implementations lacking DICOMweb or RESTful APIs."</p></div>` },
      { title: "CDSCO Medical Device Classification 2022", meta: "cdsco.gov.in", body: `<p>Regulatory framework for Software as a Medical Device (SaMD).</p><div class="source-highlight"><p><strong>Key finding:</strong> "Software that provides diagnostic information for serious diseases is classified as Class C. Triage software is typically Class B. Both require regulatory approval and clinical performance evaluation."</p></div>` }
    ],
    autoCorrections: {
      "red-0": "Integration is challenging as many mid-tier Indian hospitals use legacy on-premise PACS systems lacking modern API access",
      "red-1": "AI diagnostic tools are classified as Class B or C Medical Devices (SaMD) under CDSCO, requiring clinical performance evaluation and formal registration"
    },
    followUps: {}
  }
};

// -----------------------------------------------------------------------
// REASONING GRAPHS REGISTRY
// -----------------------------------------------------------------------
const REASONING_GRAPHS = {
  "ev-yellow-0": {
    inference: "FAME III subsidies reduce consumer EV cost by ₹25K–₹40K",
    sources: [
      { id: "s1", type: "green", text: "FAME II terminal rate was ₹10,000 per kWh of battery capacity." },
      { id: "s2", type: "yellow", text: "Media leaks suggest FAME III will cap two-wheeler subsidies at ₹30,000 max." },
      { id: "s3", type: "green", text: "Average battery size for an Indian electric scooter is 2.5 to 3.5 kWh." }
    ],
    edges: [
      { from: "s1", to: "inference", label: "Extrapolated baseline" },
      { from: "s2", to: "inference", label: "Sets upper bound" },
      { from: "s3", to: "s1", label: "Calculates total subsidy" }
    ]
  },
  "ev-yellow-1": {
    inference: "Tier-2/3 cities represent <18% of EV sales but >60% of demand",
    sources: [
      { id: "s1", type: "green", text: "SIAM 2023 report: 62% of all two-wheeler (ICE) sales occur outside top 20 cities." },
      { id: "s2", type: "red", text: "Assumption: EV demand perfectly mirrors ICE demand geographically." },
      { id: "s3", type: "green", text: "Ather & Ola store footprint: 80% concentrated in Metro/Tier-1." }
    ],
    edges: [
      { from: "s1", to: "s2", label: "Used as proxy for" },
      { from: "s2", to: "inference", label: "Generates 60% demand stat" },
      { from: "s3", to: "inference", label: "Correlates to low sales stat" }
    ]
  },
  "ev-yellow-2": {
    inference: "Traditional banks hesitate to finance EVs due to battery degradation risks",
    sources: [
      { id: "s1", type: "green", text: "RBI 2024 Report: Banks showing caution on 'new mobility asset classes'." },
      { id: "s2", type: "yellow", text: "Anecdotal: 4 fintech founders cited 'battery residual value' as the main blocker." },
      { id: "s3", type: "green", text: "EV resale values drop by 40% after 3 years vs 25% for ICE vehicles." }
    ],
    edges: [
      { from: "s1", to: "inference", label: "Confirms broad hesitation" },
      { from: "s2", to: "inference", label: "Provides specific reason" },
      { from: "s3", to: "s2", label: "Justifies the concern" }
    ]
  },
  "solar-yellow-0": {
    inference: "1.5 million pumps solarized driven by state-level subsidy matching",
    sources: [
      { id: "s1", type: "green", text: "MNRE Portal: 1.2 million pumps installed under Component B." },
      { id: "s2", type: "red", text: "Extrapolated 300K additional pumps from unverified state reports." },
      { id: "s3", type: "green", text: "Gujarat and Rajasthan state budgets show 100% utilization of KUSUM matching funds." }
    ],
    edges: [
      { from: "s1", to: "inference", label: "Baseline verified data" },
      { from: "s2", to: "inference", label: "Adds unverified padding" },
      { from: "s3", to: "inference", label: "Confirms state-level driver" }
    ]
  },
  "health-yellow-0": {
    inference: "AI triage increases radiologist throughput by up to 40%",
    sources: [
      { id: "s1", type: "yellow", text: "Vendor marketing material (Qure.ai) claims 40-50% time savings." },
      { id: "s2", type: "red", text: "Assumption: Vendor claims hold true in public district hospitals." },
      { id: "s3", type: "green", text: "Peer-reviewed study (2022): AI pre-screening reduces reading time by 15-20% for negative scans." }
    ],
    edges: [
      { from: "s1", to: "inference", label: "Direct source of 40% claim" },
      { from: "s2", to: "s1", label: "Generalizes the claim" },
      { from: "s3", to: "inference", label: "Contradicts the 40% magnitude" }
    ]
  },
  "ev-alt-yellow-0": {
    inference: "Demand from e-commerce giants is outstripping supply by a ratio of 3:1",
    sources: [
      { id: "s1", type: "yellow", text: "Euler Motors and Mahindra dealerships report 3-6 month wait times for L5 cargo EVs." },
      { id: "s2", type: "red", text: "Assumption: Wait times equate exactly to a 3:1 demand-to-supply ratio." },
      { id: "s3", type: "green", text: "Flipkart and Amazon have publicly announced massive fleet expansion RFPs." }
    ],
    edges: [
      { from: "s1", to: "inference", label: "Indicates supply constraint" },
      { from: "s2", to: "inference", label: "Generates the specific 3:1 metric" },
      { from: "s3", to: "s1", label: "Drives the demand surge" }
    ]
  },
  "ev-alt-yellow-1": {
    inference: "Tier-2 hubs for regional logistics are completely untapped",
    sources: [
      { id: "s1", type: "green", text: "BluSmart and Zypp Electric operational footprint maps (2024)." },
      { id: "s2", type: "yellow", text: "Data shows >90% of their combined fleets operate within NCR and Bengaluru limits." },
      { id: "s3", type: "red", text: "Assumption: Absence of these two specific startups means the ENTIRE market is untapped." }
    ],
    edges: [
      { from: "s1", to: "s2", label: "Provides baseline data" },
      { from: "s2", to: "inference", label: "Shows concentration in Tier-1" },
      { from: "s3", to: "inference", label: "Overgeneralizes the conclusion" }
    ]
  }
};

// -----------------------------------------------------------------------
// APP STATE
// -----------------------------------------------------------------------
const State = {
  phase: "welcome",
  activeTopic: null,
  sidebarOpen: true,
  reviewActive: false,
  originalAnswerHTML: "",
  resolutions: {},
  editedTexts: {},
  totalFlags: 0,
  currentEditTarget: null,
  lastQuery: "",
  feedbackAsked: false
};

// -----------------------------------------------------------------------
// DOM CACHE
// -----------------------------------------------------------------------
const DOM = {};
function cacheDom() {
  DOM.sidebar = document.getElementById("sidebar");
  DOM.sidebarToggleClose = document.getElementById("sidebar-toggle-close");
  DOM.sidebarToggleOpen = document.getElementById("sidebar-toggle-open");
  DOM.chatThread = document.getElementById("chat-thread-container");
  DOM.chatScroller = document.getElementById("chat-scroller");
  DOM.chatInputFooter = document.querySelector(".chat-input-sticky-footer");
  DOM.chatInput = document.getElementById("main-chat-input");
  DOM.sendBtn = document.getElementById("send-btn");
  DOM.newChatBtn = document.getElementById("new-chat-btn");
  
  DOM.reviewTooltip = document.getElementById("review-tooltip");
  DOM.tooltipIcon = document.getElementById("tooltip-icon");
  DOM.tooltipTitle = document.getElementById("tooltip-title");
  DOM.tooltipDesc = document.getElementById("tooltip-description");
  DOM.tooltipActions = document.getElementById("tooltip-actions");
  
  DOM.rightSidebar = document.getElementById("right-sidebar");
  DOM.closeRightSidebar = document.getElementById("close-right-sidebar");
  DOM.readerTitle = document.getElementById("reader-title");
  DOM.readerMeta = document.getElementById("reader-meta");
  DOM.readerBody = document.getElementById("reader-body");
  
  DOM.editModalBackdrop = document.getElementById("edit-modal-backdrop");
  DOM.editOriginalText = document.getElementById("edit-original-text");
  DOM.editRewriteInput = document.getElementById("edit-rewrite-input");
  DOM.editApplyBtn = document.getElementById("edit-apply-btn");
  DOM.editCancelBtn = document.getElementById("edit-cancel-btn");
  DOM.editModalClose = document.getElementById("edit-modal-close");
  
  DOM.comparisonBackdrop = document.getElementById("comparison-backdrop");
  DOM.comparisonOriginal = document.getElementById("comparison-original");
  DOM.comparisonCorrected = document.getElementById("comparison-corrected");
  DOM.comparisonStats = document.getElementById("comparison-stats");
  DOM.comparisonClose = document.getElementById("comparison-close");
  DOM.comparisonKeep = document.getElementById("comparison-keep-original");
  DOM.comparisonApply = document.getElementById("comparison-apply-corrected");

  // Reasoning Graph
  DOM.reasoningBackdrop = document.getElementById("reasoning-backdrop");
  DOM.reasoningClose = document.getElementById("reasoning-close");
  DOM.reasoningCanvas = document.getElementById("reasoning-canvas");
  DOM.reasoningEdges = document.getElementById("reasoning-edges");
  DOM.reasoningNodes = document.getElementById("reasoning-nodes");
  DOM.reasoningLabels = document.getElementById("reasoning-labels");
}

// -----------------------------------------------------------------------
// INIT
// -----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  renderWelcomeScreen();
  setupEventListeners();
  autoGrowInput();
});

// -----------------------------------------------------------------------
// WELCOME SCREEN & TOPIC SELECTION
// -----------------------------------------------------------------------
function renderWelcomeScreen() {
  State.phase = "welcome";
  State.activeTopic = null;
  DOM.chatThread.innerHTML = `
    <div class="welcome-screen">
      <div class="welcome-orb">AI</div>
      <h1>What can I help with?</h1>
      <p>Select the dynamic topic below to explore the AI reasoning graph and review system.</p>
      <div class="suggestion-chips" style="flex-direction:column; align-items:center;">
        <button class="suggestion-chip topic-btn" data-topic="ev-market">
          <span class="chip-icon">🚗</span>India EV Market Analysis 2026
        </button>
      </div>
    </div>
  `;

  document.querySelectorAll(".topic-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const topicId = e.currentTarget.dataset.topic;
      selectTopic(topicId);
    });
  });
}

function selectTopic(topicId) {
  State.activeTopic = JSON.parse(JSON.stringify(TOPICS_DATA[topicId]));
  State.totalFlags = (State.activeTopic.tooltips.blue?.length || 0) + 
                     (State.activeTopic.tooltips.yellow?.length || 0) + 
                     (State.activeTopic.tooltips.red?.length || 0);
  State.resolutions = {};
  State.editedTexts = {};
  
  DOM.chatInput.value = State.activeTopic.question;
  triggerSend();
}

// -----------------------------------------------------------------------
// EVENTS
// -----------------------------------------------------------------------
function setupEventListeners() {
  DOM.newChatBtn.addEventListener("click", () => {
    State.phase = "welcome";
    State.activeTopic = null;
    State.resolutions = {};
    State.editedTexts = {};
    DOM.chatInput.value = "";
    DOM.chatInput.style.height = "auto";
    DOM.rightSidebar.classList.add("closed");
    DOM.reviewTooltip.classList.add("hidden");
    const compareBackdrop = document.getElementById("comparison-backdrop");
    if (compareBackdrop) compareBackdrop.classList.add("hidden");
    renderWelcomeScreen();
  });

  DOM.sendBtn.addEventListener("click", triggerSend);
  DOM.chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); triggerSend(); }
  });

  DOM.sidebarToggleClose.addEventListener("click", () => DOM.sidebar.classList.add("collapsed"));
  DOM.sidebarToggleOpen.addEventListener("click", () => DOM.sidebar.classList.remove("collapsed"));

  DOM.closeRightSidebar.addEventListener("click", () => DOM.rightSidebar.classList.add("closed"));

  // Tooltip hover
  let tooltipTimeout;
  DOM.reviewTooltip.addEventListener("mouseenter", () => clearTimeout(tooltipTimeout));
  DOM.reviewTooltip.addEventListener("mouseleave", () => {
    tooltipTimeout = setTimeout(() => DOM.reviewTooltip.classList.add("hidden"), 250);
  });

  DOM.chatThread.addEventListener("mouseover", (e) => {
    const span = e.target.closest("[data-tip]");
    if (!span || !State.reviewActive) return;
    const key = `${span.dataset.tip}-${span.dataset.idx}`;
    if (State.resolutions[key]) return; 
    clearTimeout(tooltipTimeout);
    showTooltip(span);
  });

  DOM.chatThread.addEventListener("mouseout", (e) => {
    const span = e.target.closest("[data-tip]");
    if (!span) return;
    tooltipTimeout = setTimeout(() => DOM.reviewTooltip.classList.add("hidden"), 250);
  });

  // Tooltip action delegation
  DOM.tooltipActions.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const action = btn.dataset.action;
    const key = btn.dataset.key;

    if (action === "accept") resolveHighlight(key, "accepted");
    else if (action === "reject") resolveHighlight(key, "rejected");
    else if (action === "edit") openEditModal(key);
    else if (action === "open-source") { 
      DOM.reviewTooltip.classList.add("hidden"); 
      openRightSidebar(parseInt(btn.dataset.docIdx, 10)); 
    }
    else if (action === "auto-correct") applyAutoCorrection(key);
    else if (action === "show-reasoning") {
      DOM.reviewTooltip.classList.add("hidden");
      openReasoningGraph(btn.dataset.reasoningId);
    }
  });

  // Edit modal
  DOM.editApplyBtn.addEventListener("click", applyEdit);
  DOM.editCancelBtn.addEventListener("click", () => DOM.editModalBackdrop.classList.add("hidden"));
  DOM.editModalClose.addEventListener("click", () => DOM.editModalBackdrop.classList.add("hidden"));

  // Comparison panel
  DOM.comparisonClose.addEventListener("click", () => DOM.comparisonBackdrop.classList.add("hidden"));
  DOM.comparisonKeep.addEventListener("click", () => {
    // Revert the live answer back to the original baseline
    const content = document.getElementById("answer-content");
    if (content) {
      content.innerHTML = State.originalAnswerHTML;
    }
    
    // Clear all resolutions and edits
    State.resolutions = {};
    State.editedTexts = {};
    
    // Exit review mode cleanly
    State.reviewActive = false;
    if (content) content.classList.remove("review-active");
    const btn = document.getElementById("btn-toggle-review");
    if (btn) {
      btn.classList.remove("active");
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>Review`;
    }
    const legend = document.getElementById("review-legend");
    const progress = document.getElementById("review-progress");
    if (legend) legend.classList.add("hidden");
    if (progress) progress.classList.add("hidden");
    DOM.reviewTooltip.classList.add("hidden");
    State.phase = "answered";
    
    DOM.comparisonBackdrop.classList.add("hidden");
    showFollowupNotice("Changes discarded. Original response kept.");
  });
  DOM.comparisonApply.addEventListener("click", () => {
    // Build the corrected HTML the same way openComparison does
    const correctedEl = document.createElement("div");
    correctedEl.innerHTML = State.originalAnswerHTML;

    Object.entries(State.resolutions).forEach(([key, status]) => {
      const [color, idx] = key.split("-");
      const span = correctedEl.querySelector(`[data-tip="${color}"][data-idx="${idx}"]`);
      if (!span) return;

      if (status === "rejected") {
        // Remove the flagged text entirely from the answer
        const parentP = span.closest("p");
        if (parentP && parentP.textContent.trim() === span.textContent.trim()) {
          // The whole paragraph was just this flagged claim — remove the whole paragraph
          parentP.remove();
        } else {
          // Remove just the span text, leave surrounding sentence
          span.remove();
        }
      } else if (status === "edited" && State.editedTexts[key]) {
        const s = document.createElement("span");
        s.textContent = State.editedTexts[key];
        span.replaceWith(s);
      } else if (status === "accepted") {
        // Keep the text as plain (remove highlight wrapper)
        const s = document.createElement("span");
        s.textContent = span.textContent;
        span.replaceWith(s);
      }
    });

    // Apply corrected HTML to the live answer
    const content = document.getElementById("answer-content");
    if (content) {
      content.innerHTML = correctedEl.innerHTML;
    }

    // Exit review mode cleanly
    State.reviewActive = false;
    if (content) content.classList.remove("review-active");
    const btn = document.getElementById("btn-toggle-review");
    if (btn) {
      btn.classList.remove("active");
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>Review`;
    }
    const legend = document.getElementById("review-legend");
    const progress = document.getElementById("review-progress");
    if (legend) legend.classList.add("hidden");
    if (progress) progress.classList.add("hidden");
    DOM.reviewTooltip.classList.add("hidden");
    State.phase = "answered";

    DOM.comparisonBackdrop.classList.add("hidden");
    showFollowupNotice("✓ Corrected version is now your active response.");
  });

  // Reasoning Graph
  DOM.reasoningClose.addEventListener("click", () => {
    DOM.reasoningBackdrop.classList.add("hidden");
    DOM.reasoningNodes.innerHTML = "";
    DOM.reasoningEdges.innerHTML = "";
    DOM.reasoningLabels.innerHTML = "";
  });
}

// -----------------------------------------------------------------------
// SEND
// -----------------------------------------------------------------------
function triggerSend() {
  const text = DOM.chatInput.value.trim();
  if (!text) return;
  
  State.lastQuery = text;
  DOM.chatInput.value = "";
  DOM.chatInput.style.height = "36px";

  const welcome = DOM.chatThread.querySelector(".welcome-screen");
  if (welcome) DOM.chatThread.innerHTML = "";

  appendUserBubble(text);
  scrollToBottom();

  if (State.phase === "welcome" || State.phase === "asked") {
    State.phase = "asked";
    if (!State.activeTopic) {
      // Fallback if user types something randomly before selecting
      State.activeTopic = JSON.parse(JSON.stringify(TOPICS_DATA["ev-market"]));
      State.totalFlags = 9;
    }
    
    // Hide chat input area
    if (DOM.chatInputFooter) {
      DOM.chatInputFooter.style.display = "none";
    }

    setTimeout(() => showContextModal(), 500);
  } else {
    handleFollowup(text);
  }
}

function appendUserBubble(text) {
  const row = document.createElement("div");
  row.className = "chat-message-row user";
  row.innerHTML = `<div class="message-bubble">${escapeHtml(text)}</div>`;
  DOM.chatThread.appendChild(row);
}

// -----------------------------------------------------------------------
// CONTEXT MODAL
// -----------------------------------------------------------------------
function showContextModal() {
  const inlineBlock = document.createElement("div");
  inlineBlock.className = "inline-context-check";
  inlineBlock.id = "inline-context-block";

  let html = `
    <div class="inline-context-header">
      <div class="inline-context-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      </div>
      <div>
        <h3>Before I answer, here are a few assumptions I made</h3>
        <p>These assumptions may affect the quality and direction of the response.</p>
      </div>
    </div>
    <div class="inline-context-body" id="inline-assumption-list"></div>
    <div class="add-assumption-container" style="padding: 0 24px 16px 24px;">
      <button id="inline-btn-add-assumption" class="inline-btn secondary" style="width: 100%; justify-content: center; border-style: dashed;">+ Add your own assumption</button>
    </div>
    <div class="inline-context-footer">
      <button id="inline-btn-edit-prompt" class="inline-btn secondary">Edit the prompt</button>
      <button id="inline-btn-proceed" class="inline-btn primary">Proceed <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;margin-left:4px;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
    </div>
  `;

  inlineBlock.innerHTML = html;
  DOM.chatThread.appendChild(inlineBlock);
  
  const listContainer = inlineBlock.querySelector("#inline-assumption-list");
  
  const addAssumptionCard = (text, i, isNew = false) => {
    const card = document.createElement("div");
    card.className = "assumption-card";
    card.id = `assumption-card-${i}`;

    card.innerHTML = `
      <div class="assumption-icon" style="display:flex; align-items:center;">
        <input type="checkbox" class="assumption-checkbox" checked style="width:18px; height:18px; accent-color:#10a37f; cursor:pointer;" title="Uncheck to remove">
      </div>
      <div class="assumption-content">
        <div class="assumption-label">Assumption ${i + 1}</div>
        <div class="assumption-text-container">
          <div class="assumption-text">${escapeHtml(text)}</div>
        </div>
      </div>
      <button class="btn-edit-assumption" data-index="${i}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
        Edit
      </button>
    `;
    listContainer.appendChild(card);
    
    const editBtn = card.querySelector(".btn-edit-assumption");
    editBtn.addEventListener("click", () => {
      const container = card.querySelector(".assumption-text-container");
      if (editBtn.classList.contains("save-mode")) {
        const textarea = container.querySelector("textarea");
        const newText = textarea.value.trim();
        State.activeTopic.assumptions[i] = newText;
        container.innerHTML = `<div class="assumption-text">${escapeHtml(newText)}</div>`;
        editBtn.classList.remove("save-mode");
        editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg> Edit`;
      } else {
        const currentText = State.activeTopic.assumptions[i] || "";
        container.innerHTML = `<textarea class="assumption-text-input">${currentText}</textarea>`;
        editBtn.classList.add("save-mode");
        editBtn.innerHTML = `Save`;
        container.querySelector("textarea").focus();
      }
    });

    const checkbox = card.querySelector(".assumption-checkbox");
    if (checkbox) {
      checkbox.addEventListener("change", (e) => {
        if (!e.target.checked) {
          State.activeTopic.assumptions[i] = null;
          card.style.transition = "opacity 0.2s";
          card.style.opacity = "0";
          setTimeout(() => card.remove(), 200);
        }
      });
    }

    if (isNew) {
      editBtn.click();
    }
  };

  State.activeTopic.assumptions.forEach((text, i) => {
    addAssumptionCard(text, i);
  });

  inlineBlock.querySelector("#inline-btn-add-assumption").addEventListener("click", () => {
    const newIndex = State.activeTopic.assumptions.length;
    State.activeTopic.assumptions.push("");
    addAssumptionCard("", newIndex, true);
    // Scroll to the new assumption
    const newCard = inlineBlock.querySelector(`#assumption-card-${newIndex}`);
    if (newCard) newCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  inlineBlock.querySelector("#inline-btn-edit-prompt").addEventListener("click", () => {
    inlineBlock.remove();
    
    // Restore chat input
    if (DOM.chatInputFooter) {
      DOM.chatInputFooter.style.display = "block";
    }

    DOM.chatInput.value = State.lastQuery || "";
    DOM.chatInput.style.height = "auto";
    DOM.chatInput.focus();
    const rows = DOM.chatThread.querySelectorAll(".chat-message-row.user");
    if (rows.length > 0) rows[rows.length - 1].remove();
    if (State.phase === "asked") State.phase = "welcome";
  });

  inlineBlock.querySelector("#inline-btn-proceed").addEventListener("click", () => {
    // Restore chat input
    if (DOM.chatInputFooter) {
      DOM.chatInputFooter.style.display = "block";
    }

    const activeEdits = inlineBlock.querySelectorAll(".btn-edit-assumption.save-mode");
    activeEdits.forEach(btn => btn.click());
    inlineBlock.querySelectorAll(".btn-edit-assumption").forEach(btn => btn.remove());
    inlineBlock.querySelector(".inline-context-footer").remove();
    const addContainer = inlineBlock.querySelector(".add-assumption-container");
    if (addContainer) addContainer.remove();
    inlineBlock.querySelectorAll(".assumption-checkbox").forEach(cb => {
      cb.disabled = true;
      cb.style.cursor = "default";
    });
    inlineBlock.classList.add("resolved-context");
    
    if (State.activeTopic.guidedEditTarget !== undefined) {
      const targetText = State.activeTopic.assumptions[State.activeTopic.guidedEditTarget];
      const userText = targetText ? targetText.toLowerCase() : "";
      if (userText.includes("commercial") || userText.includes("fleet")) {
        if (State.activeTopic.alternativeAnswerHTML) {
          State.activeTopic.answerHTML = State.activeTopic.alternativeAnswerHTML;
          if (State.activeTopic.alternativeTooltips) {
            State.activeTopic.tooltips = State.activeTopic.alternativeTooltips;
          }
        }
      }
    }
    
    const tooltip = document.getElementById("interactive-goal-tooltip");
    if (tooltip) tooltip.remove();

    streamAnswer();
  });

  if (State.activeTopic.guidedEditTarget !== undefined) {
    const targetCard = inlineBlock.querySelector(`#assumption-card-${State.activeTopic.guidedEditTarget}`);
    if (targetCard) {
      const tooltip = document.createElement("div");
      tooltip.id = "interactive-goal-tooltip";
      tooltip.className = "interactive-goal-tooltip";
      tooltip.innerHTML = `
        <div class="interactive-goal-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="#10a37f" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Interactive Goal
        </div>
        <div class="interactive-goal-body">
          Click the <strong>Edit</strong> button on Assumption ${State.activeTopic.guidedEditTarget + 1}, then change the text to "<strong>${State.activeTopic.targetEditText}</strong>" and save!
        </div>
      `;
      targetCard.appendChild(tooltip);
    }
  }
  
  scrollToBottom();
}

// -----------------------------------------------------------------------
// STREAM ANSWER
// -----------------------------------------------------------------------
function streamAnswer() {
  State.phase = "streaming";
  const assistantRow = document.createElement("div");
  assistantRow.className = "chat-message-row assistant";
  assistantRow.id = "primary-answer-row";

  const contentEl = document.createElement("div");
  contentEl.className = "message-content";
  contentEl.id = "answer-content";

  const cursor = document.createElement("span");
  cursor.className = "streaming-cursor";
  contentEl.appendChild(cursor);
  assistantRow.appendChild(contentEl);
  DOM.chatThread.appendChild(assistantRow);
  scrollToBottom();

  const parser = new DOMParser();
  const parsed = parser.parseFromString(`<div>${State.activeTopic.answerHTML}</div>`, "text/html");
  const tokens = flattenNodes(parsed.querySelector("div"));

  let idx = 0;
  const interval = setInterval(() => {
    if (idx >= tokens.length) {
      clearInterval(interval);
      cursor.remove();
      State.phase = "answered";
      State.originalAnswerHTML = contentEl.innerHTML;
      appendReviewControls(assistantRow);
      setupCitationHandlers(assistantRow);
      scrollToBottom();
      return;
    }
    const token = tokens[idx];
    if (token.type === "text") contentEl.insertBefore(document.createTextNode(token.value), cursor);
    else contentEl.insertBefore(token.node, cursor);
    idx++;
    if (idx % 5 === 0) scrollToBottom();
  }, 12);
}

function flattenNodes(container) {
  const tokens = [];
  container.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split(/(\s+)/).forEach(w => { if (w.length > 0) tokens.push({ type: "text", value: w }); });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      tokens.push({ type: "element", node: node.cloneNode(true) });
    }
  });
  return tokens;
}

// -----------------------------------------------------------------------
// REVIEW CONTROLS & CITATIONS
// -----------------------------------------------------------------------
function setupCitationHandlers(row) {
  const badges = row.querySelectorAll('.inline-citation-badge');
  const hoverCard = document.getElementById('citation-hover-card');
  const hoverTitle = document.getElementById('citation-title');
  const hoverMeta = document.getElementById('citation-meta');
  const hoverBody = document.getElementById('citation-body');
  
  let hoverTimeout;
  
  badges.forEach(badge => {
    badge.addEventListener('mouseenter', (e) => {
      clearTimeout(hoverTimeout);
      const idx = badge.dataset.sourceIdx;
      const source = State.activeTopic.sources[idx];
      if (!source) return;
      
      hoverTitle.textContent = source.title;
      hoverMeta.textContent = source.meta;
      hoverBody.innerHTML = source.body;
      
      hoverCard.style.display = "flex";
      hoverCard.classList.remove("hidden");
      
      const rect = badge.getBoundingClientRect();
      const cardRect = hoverCard.getBoundingClientRect();
      let top = rect.bottom + window.scrollY + 10;
      let left = rect.left + window.scrollX - (cardRect.width / 2) + (rect.width / 2);
      
      if (left < 10) left = 10;
      if (left + cardRect.width > window.innerWidth - 10) left = window.innerWidth - cardRect.width - 10;
      
      hoverCard.style.top = top + "px";
      hoverCard.style.left = left + "px";
    });
    
    badge.addEventListener('mouseleave', () => {
      hoverTimeout = setTimeout(() => {
        hoverCard.style.display = "none";
        hoverCard.classList.add("hidden");
      }, 300);
    });
    
    badge.addEventListener('click', () => {
      const idx = badge.dataset.sourceIdx;
      const source = State.activeTopic.sources[idx];
      if (!source) return;
      const domain = source.meta.split('•')[0].trim();
      document.getElementById('right-sidebar').classList.remove('closed');
      document.getElementById('main-content').classList.add('sidebar-open');
      document.getElementById('reader-title').textContent = source.title;
      document.getElementById('reader-meta').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;margin-right:4px;vertical-align:text-bottom;"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> ${domain}`;
      document.getElementById('reader-body').innerHTML = source.body;
    });
  });
  
  hoverCard.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
  hoverCard.addEventListener('mouseleave', () => {
    hoverTimeout = setTimeout(() => {
      hoverCard.style.display = "none";
      hoverCard.classList.add("hidden");
    }, 300);
  });
}

function appendReviewControls(row) {
  const container = document.createElement("div");
  container.className = "review-btn-container";
  container.id = "review-controls";
  
  const citations = row.querySelectorAll('.inline-citation-badge');
  const uniqueSourceIdxs = new Set();
  citations.forEach(c => uniqueSourceIdxs.add(c.dataset.sourceIdx));
  
  let footerSourcesHtml = "";
  if (uniqueSourceIdxs.size > 0 && State.activeTopic.sources) {
    const listHtml = Array.from(uniqueSourceIdxs).map(idx => {
      const source = State.activeTopic.sources[idx];
      return `<div class="footer-source-icon" title="${source.title}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>`;
    }).join("");
    footerSourcesHtml = `
      <div class="footer-sources-container" id="footer-sources-container">
        <div class="footer-sources-list">${listHtml}</div>
        <span class="footer-sources-label">Sources</span>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="chat-actions-footer">
      <button class="footer-btn" aria-label="Copy" title="Copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
      <button class="footer-btn" aria-label="Thumbs up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg></button>
      ${footerSourcesHtml}
    </div>
    <button class="btn-review" id="btn-toggle-review">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
      Review
    </button>
    <button class="btn-compare hidden" id="btn-compare">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="8" height="18" rx="1"/><rect x="14" y="3" width="8" height="18" rx="1"/></svg>
      Compare
    </button>
  `;
  row.appendChild(container);

  const legend = document.createElement("div");
  legend.className = "review-legend hidden";
  legend.id = "review-legend";
  legend.innerHTML = `
    <div class="legend-item"><span class="legend-swatch blue"></span>Assumed context</div>
    <div class="legend-item"><span class="legend-swatch yellow"></span>AI inference</div>
    <div class="legend-item"><span class="legend-swatch red"></span>Verification issue</div>
  `;
  row.appendChild(legend);

  const progressBar = document.createElement("div");
  progressBar.className = "review-progress-bar hidden";
  progressBar.id = "review-progress";
  progressBar.innerHTML = `
    <div class="progress-header">
      <span class="progress-label">Review Progress</span>
      <span class="progress-count" id="progress-count">0 / ${State.totalFlags} resolved</span>
    </div>
    <div class="progress-track"><div class="progress-fill" id="progress-fill" style="width:0%"></div></div>
  `;
  row.appendChild(progressBar);

  document.getElementById("btn-toggle-review").addEventListener("click", toggleReview);
  document.getElementById("btn-compare").addEventListener("click", openComparison);
}

// -----------------------------------------------------------------------
// TOGGLE REVIEW
// -----------------------------------------------------------------------
function toggleReview() {
  State.reviewActive = !State.reviewActive;
  const content = document.getElementById("answer-content");
  const btn = document.getElementById("btn-toggle-review");
  const legend = document.getElementById("review-legend");
  const progress = document.getElementById("review-progress");
  const compareBtn = document.getElementById("btn-compare");

  if (State.reviewActive) {
    content.classList.add("review-active");
    btn.classList.add("active");
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>Exit Review`;
    legend.classList.remove("hidden");
    progress.classList.remove("hidden");
    State.phase = "reviewing";
    updateProgress();
  } else {
    content.classList.remove("review-active");
    btn.classList.remove("active");
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>Review`;
    legend.classList.add("hidden");
    progress.classList.add("hidden");
    DOM.reviewTooltip.classList.add("hidden");
    State.phase = "answered";

    if (Object.keys(State.resolutions).length > 0) {
      compareBtn.classList.remove("hidden");
    }

    showFeedbackAsk();
  }
  scrollToBottom();
}

// -----------------------------------------------------------------------
// TOOLTIP
// -----------------------------------------------------------------------
function showTooltip(span) {
  const color = span.dataset.tip;
  const idx = parseInt(span.dataset.idx, 10);
  const key = `${color}-${idx}`;
  const data = State.activeTopic.tooltips[color]?.[idx];
  if (!data) return;

  DOM.reviewTooltip.className = `review-tooltip theme-${color}`;

  const icons = {
    blue: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
    yellow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    red: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  };

  DOM.tooltipIcon.innerHTML = icons[color];
  DOM.tooltipTitle.textContent = data.title;
  DOM.tooltipDesc.textContent = data.desc;

  DOM.tooltipActions.innerHTML = "";

  const makeBtn = (cls, icon, label, action, extra = {}) => {
    const b = document.createElement("button");
    b.className = cls;
    b.dataset.action = action;
    b.dataset.key = key;
    Object.assign(b.dataset, extra);
    b.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icon}</svg>${label}`;
    DOM.tooltipActions.appendChild(b);
  };

  makeBtn("action-accept", '<polyline points="20 6 9 17 4 12"/>', "Accept as-is", "accept");

  if (color === "red") {
    makeBtn("", '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>', "Open source", "open-source", { docIdx: idx });
  } else if (color === "yellow" && data.hasReasoningMap) {
    makeBtn("", '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "Show reasoning chain", "show-reasoning", { reasoningId: data.reasoningId });
  }

  makeBtn("action-edit", '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>', "Rewrite", "edit");

  if (color === "red" && State.activeTopic.autoCorrections[key]) {
    makeBtn("action-accept", '<path d="M21.5 2v6h-6M2.5 22v-6h6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38"/>', "Auto-correct with verified data", "auto-correct");
  }

  makeBtn("action-reject", '<path d="M18 6L6 18M6 6l12 12"/>', "Reject / Remove", "reject");

  const rect = span.getBoundingClientRect();
  let top = rect.bottom + 10;
  let left = rect.left + rect.width / 2 - 170;
  if (top + 300 > window.innerHeight) top = rect.top - 300 - 10;
  if (left < 8) left = 8;
  if (left + 340 > window.innerWidth - 8) left = window.innerWidth - 348;
  DOM.reviewTooltip.style.top = `${top}px`;
  DOM.reviewTooltip.style.left = `${left}px`;
  DOM.reviewTooltip.classList.remove("hidden");
}

// -----------------------------------------------------------------------
// RESOLVE & EDIT
// -----------------------------------------------------------------------
function resolveHighlight(key, status) {
  State.resolutions[key] = status;
  DOM.reviewTooltip.classList.add("hidden");

  const [color, idx] = key.split("-");
  const span = document.querySelector(`[data-tip="${color}"][data-idx="${idx}"]`);
  if (!span) return;

  span.classList.remove("hl-accepted", "hl-rejected", "hl-edited", "hl-blue", "hl-yellow", "hl-red");
  if (status === "accepted") span.classList.add("hl-accepted");
  else if (status === "rejected") span.classList.add("hl-rejected");
  else if (status === "edited") span.classList.add("hl-edited");

  updateProgress();
  scrollToBottom();
}

function applyAutoCorrection(key) {
  const correction = State.activeTopic.autoCorrections[key];
  if (!correction) return;
  const [color, idx] = key.split("-");
  const span = document.querySelector(`[data-tip="${color}"][data-idx="${idx}"]`);
  if (!span) return;
  State.editedTexts[key] = correction;
  span.textContent = correction;
  resolveHighlight(key, "edited");
}

function openEditModal(key) {
  DOM.reviewTooltip.classList.add("hidden");
  State.currentEditTarget = key;
  const [color, idx] = key.split("-");
  const span = document.querySelector(`[data-tip="${color}"][data-idx="${idx}"]`);
  if (!span) return;
  DOM.editOriginalText.textContent = span.textContent;
  DOM.editRewriteInput.value = State.editedTexts[key] || "";
  DOM.editModalBackdrop.classList.remove("hidden");
  setTimeout(() => DOM.editRewriteInput.focus(), 100);
}

function applyEdit() {
  const key = State.currentEditTarget;
  if (!key) return;
  const newText = DOM.editRewriteInput.value.trim();
  if (!newText) return;
  const [color, idx] = key.split("-");
  const span = document.querySelector(`[data-tip="${color}"][data-idx="${idx}"]`);
  if (!span) return;
  State.editedTexts[key] = newText;
  span.textContent = newText;
  DOM.editModalBackdrop.classList.add("hidden");
  resolveHighlight(key, "edited");
}

function updateProgress() {
  const resolved = Object.keys(State.resolutions).length;
  const pct = Math.round((resolved / State.totalFlags) * 100);
  const countEl = document.getElementById("progress-count");
  const fillEl = document.getElementById("progress-fill");
  if (countEl) countEl.textContent = `${resolved} / ${State.totalFlags} resolved`;
  if (fillEl) fillEl.style.width = `${pct}%`;

  const compareBtn = document.getElementById("btn-compare");
  if (resolved > 0 && compareBtn) compareBtn.classList.remove("hidden");
}

// -----------------------------------------------------------------------
// COMPARISON PANEL
// -----------------------------------------------------------------------
function openComparison() {
  DOM.comparisonOriginal.innerHTML = State.originalAnswerHTML;

  const correctedEl = document.createElement("div");
  correctedEl.innerHTML = State.originalAnswerHTML;

  Object.entries(State.resolutions).forEach(([key, status]) => {
    const [color, idx] = key.split("-");
    const span = correctedEl.querySelector(`[data-tip="${color}"][data-idx="${idx}"]`);
    if (!span) return;

    if (status === "rejected") {
      const strikethrough = document.createElement("span");
      strikethrough.className = "diff-removed";
      strikethrough.textContent = span.textContent;
      span.replaceWith(strikethrough);
    } else if (status === "edited" && State.editedTexts[key]) {
      const wrapper = document.createElement("span");
      const removed = document.createElement("span");
      removed.className = "diff-removed";
      removed.textContent = span.textContent;
      const added = document.createElement("span");
      added.className = "diff-added";
      added.textContent = " " + State.editedTexts[key];
      wrapper.appendChild(removed);
      wrapper.appendChild(added);
      span.replaceWith(wrapper);
    } else if (status === "accepted") {
      const accepted = document.createElement("span");
      accepted.className = "diff-added";
      accepted.textContent = span.textContent;
      span.replaceWith(accepted);
    }
  });

  DOM.comparisonCorrected.innerHTML = correctedEl.innerHTML;

  const accepted = Object.values(State.resolutions).filter(s => s === "accepted").length;
  const rejected = Object.values(State.resolutions).filter(s => s === "rejected").length;
  const edited = Object.values(State.resolutions).filter(s => s === "edited").length;
  const pending = State.totalFlags - Object.keys(State.resolutions).length;

  DOM.comparisonStats.innerHTML = `
    <div class="comparison-stat"><span class="stat-dot accepted"></span>${accepted} accepted</div>
    <div class="comparison-stat"><span class="stat-dot edited"></span>${edited} edited</div>
    <div class="comparison-stat"><span class="stat-dot rejected"></span>${rejected} rejected</div>
    <div class="comparison-stat"><span class="stat-dot pending"></span>${pending} pending</div>
  `;

  DOM.comparisonBackdrop.classList.remove("hidden");
}

// -----------------------------------------------------------------------
// RIGHT SIDEBAR (Red Tooltip verified sources)
// -----------------------------------------------------------------------
function openRightSidebar(docIdx) {
  const doc = State.activeTopic.sources[docIdx] || State.activeTopic.sources[0];
  DOM.readerTitle.textContent = "Loading source…";
  DOM.readerMeta.textContent = "Verifying…";
  DOM.readerBody.innerHTML = `<p style="text-align:center;margin-top:24px;opacity:0.4;">Fetching verified source…</p>`;
  DOM.rightSidebar.classList.remove("closed");

  setTimeout(() => {
    DOM.readerTitle.textContent = doc.title;
    DOM.readerMeta.textContent = doc.meta;
    DOM.readerBody.innerHTML = doc.body;
    setTimeout(() => {
      const hl = DOM.readerBody.querySelector(".source-highlight");
      if (hl) hl.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
  }, 600);
}

// -----------------------------------------------------------------------
// MULTI-TURN FOLLOW-UP
// -----------------------------------------------------------------------
function handleFollowup(text) {
  let responseHTML = null;
  const followUps = State.activeTopic.followUps;
  
  for (const [question, answer] of Object.entries(followUps)) {
    if (text.toLowerCase().includes(question.toLowerCase().slice(0, 20))) {
      responseHTML = answer;
      break;
    }
  }

  if (!responseHTML) {
    const resolvedCount = Object.keys(State.resolutions).length;
    responseHTML = `<h3>Following up</h3>
<p>Based on your query: "<em>${escapeHtml(text)}</em>"</p>
<p>You have resolved ${resolvedCount} of ${State.totalFlags} flagged items in the current analysis. For deeper insights, you can click on any unresolved highlights to review their source reasoning.</p>`;
  }

  setTimeout(() => streamFollowup(responseHTML), 600);
}

function streamFollowup(html) {
  const row = document.createElement("div");
  row.className = "chat-message-row assistant";
  const content = document.createElement("div");
  content.className = "message-content";
  const cursor = document.createElement("span");
  cursor.className = "streaming-cursor";
  content.appendChild(cursor);
  row.appendChild(content);
  DOM.chatThread.appendChild(row);
  scrollToBottom();

  const parser = new DOMParser();
  const parsed = parser.parseFromString(`<div>${html}</div>`, "text/html");
  const tokens = flattenNodes(parsed.querySelector("div"));

  let idx = 0;
  const interval = setInterval(() => {
    if (idx >= tokens.length) {
      clearInterval(interval);
      cursor.remove();
      // append follow-up suggestions if any
      const suggestions = Object.keys(State.activeTopic.followUps);
      if (suggestions.length > 0) appendFollowupSuggestions(row, suggestions);
      scrollToBottom();
      return;
    }
    const token = tokens[idx];
    if (token.type === "text") content.insertBefore(document.createTextNode(token.value), cursor);
    else content.insertBefore(token.node, cursor);
    idx++;
    if (idx % 5 === 0) scrollToBottom();
  }, 18);
}

function appendFollowupSuggestions(row, suggestions) {
  const chips = document.createElement("div");
  chips.className = "followup-suggestions";
  suggestions.forEach(text => {
    const chip = document.createElement("button");
    chip.className = "followup-chip";
    chip.textContent = text;
    chip.addEventListener("click", () => {
      DOM.chatInput.value = text;
      triggerSend();
    });
    chips.appendChild(chip);
  });
  row.appendChild(chips);
}

function showFollowupNotice(text) {
  const notice = document.createElement("div");
  notice.className = "chat-message-row assistant";
  notice.innerHTML = `<div class="message-content"><p style="color:var(--accent);font-weight:500;">${text}</p></div>`;
  DOM.chatThread.appendChild(notice);
  showFeedbackAsk();
  scrollToBottom();
}

function showFeedbackAsk() {
  if (State.feedbackAsked) return;
  State.feedbackAsked = true;

  // Quick feedback ask
  const feedback = document.createElement("div");
  feedback.className = "chat-message-row assistant";
  feedback.style.marginTop = "4px";
  feedback.innerHTML = `
    <div class="message-content" style="background:var(--bg-surface); padding:16px; border:1px solid var(--border-subtle); border-radius:12px; max-width:420px; font-family:var(--font-sans);">
      <p style="font-size:0.9rem; margin-bottom:12px; color:var(--text-secondary);"><strong>Quick Feedback:</strong> How was your experience using the review and reasoning system?</p>
      <div style="display:flex; gap:8px;">
        <button class="feedback-btn" style="background:transparent; border:1px solid var(--border-subtle); border-radius:6px; padding:8px 12px; color:var(--text-primary); cursor:pointer; font-size:0.85rem; flex:1; transition:all 0.2s;">👍 Great</button>
        <button class="feedback-btn" style="background:transparent; border:1px solid var(--border-subtle); border-radius:6px; padding:8px 12px; color:var(--text-primary); cursor:pointer; font-size:0.85rem; flex:1; transition:all 0.2s;">🤔 Confusing</button>
        <button class="feedback-btn" style="background:transparent; border:1px solid var(--border-subtle); border-radius:6px; padding:8px 12px; color:var(--text-primary); cursor:pointer; font-size:0.85rem; flex:1; transition:all 0.2s;">👎 Needs work</button>
      </div>
    </div>
  `;
  DOM.chatThread.appendChild(feedback);

  const btns = feedback.querySelectorAll(".feedback-btn");
  btns.forEach(b => {
    b.addEventListener("mouseover", () => {
      b.style.backgroundColor = "var(--bg-surface-hover)";
      b.style.borderColor = "var(--border-focus)";
    });
    b.addEventListener("mouseout", () => {
      b.style.backgroundColor = "transparent";
      b.style.borderColor = "var(--border-subtle)";
    });
    b.addEventListener("click", () => {
      const choice = b.textContent;
      if (choice.includes("Confusing") || choice.includes("Needs work")) {
        feedback.innerHTML = `
          <div class="message-content" style="background:var(--bg-surface); padding:16px; border:1px solid var(--border-subtle); border-radius:12px; max-width:420px; font-family:var(--font-sans);">
            <p style="font-size:0.9rem; margin-bottom:8px; color:var(--text-secondary);">We're sorry to hear that. Could you briefly tell us what the problem was?</p>
            <textarea id="feedback-detail-input" rows="3" style="width:100%; background:var(--bg-active); border:1px solid var(--border-subtle); border-radius:6px; padding:8px; color:var(--text-primary); font-family:var(--font-sans); font-size:0.85rem; resize:vertical; margin-bottom:8px;" placeholder="What went wrong?"></textarea>
            <div style="display:flex; justify-content:flex-end;">
              <button id="feedback-submit-btn" class="modal-btn primary-glow" style="padding:6px 12px; font-size:0.85rem;">Submit Feedback</button>
            </div>
          </div>
        `;
        const submitBtn = feedback.querySelector("#feedback-submit-btn");
        submitBtn.addEventListener("click", () => {
          feedback.innerHTML = `
            <div class="message-content" style="background:var(--bg-surface); padding:16px; border:1px solid var(--border-subtle); border-radius:12px; max-width:420px; text-align:center;">
              <p style="font-size:0.9rem; color:var(--accent); margin:0; font-weight:500;">✓ Thanks for your detailed feedback! It helps improve the AI.</p>
            </div>
          `;
        });
      } else {
        feedback.innerHTML = `
          <div class="message-content" style="background:var(--bg-surface); padding:16px; border:1px solid var(--border-subtle); border-radius:12px; max-width:420px; text-align:center;">
            <p style="font-size:0.9rem; color:var(--accent); margin:0; font-weight:500;">✓ Thanks for your feedback! It helps improve the AI.</p>
          </div>
        `;
      }
    });
  });

  scrollToBottom();
}

// -----------------------------------------------------------------------
// REASONING GRAPH ENGINE
// -----------------------------------------------------------------------
function openReasoningGraph(reasoningId) {
  const graphData = REASONING_GRAPHS[reasoningId];
  if (!graphData) return;

  DOM.reasoningNodes.innerHTML = "";
  DOM.reasoningEdges.innerHTML = "";
  DOM.reasoningLabels.innerHTML = "";
  
  DOM.reasoningBackdrop.classList.remove("hidden");

  // Center coordinates (relative to the container)
  const containerW = DOM.reasoningCanvas.clientWidth || 800;
  const containerH = DOM.reasoningCanvas.clientHeight || 600;
  
  const centerX = containerW / 2;
  const centerY = (containerH / 2) + 80; // shifted down further to avoid header and accommodate larger radius

  // 1. Create Central Node
  const centralNode = document.createElement("div");
  centralNode.className = "reasoning-node node-central";
  centralNode.style.left = `${centerX}px`;
  centralNode.style.top = `${centerY}px`;
  centralNode.innerHTML = `<div class="node-header">${graphData.inference}</div>`;
  DOM.reasoningNodes.appendChild(centralNode);

  // 2. Position Source Nodes in a circle/arc around the center
  const radius = 300; // Increased radius to prevent node overlapping, but keeping it within view
  const totalSources = graphData.sources.length;
  // Arc from roughly 160 degrees to 20 degrees for better horizontal spread
  const startAngle = Math.PI * 0.90; 
  const endAngle = Math.PI * 0.10;
  const angleStep = totalSources > 1 ? (endAngle - startAngle) / (totalSources - 1) : 0;

  const nodePositions = { "inference": { x: centerX, y: centerY } };

  graphData.sources.forEach((src, i) => {
    const angle = totalSources > 1 ? startAngle + (i * angleStep) : Math.PI / 2;
    const nx = centerX + radius * Math.cos(angle);
    const ny = centerY - radius * Math.sin(angle); // negative because y goes down

    nodePositions[src.id] = { x: nx, y: ny };

    const snode = document.createElement("div");
    snode.className = `reasoning-node node-source ${src.type}`;
    snode.style.left = `${nx}px`;
    snode.style.top = `${ny}px`;

    const icon = src.type === "green" ? '<polyline points="20 6 9 17 4 12"/>' :
                 src.type === "yellow" ? '<line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>' :
                 '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>';

    const headerText = src.type === "green" ? "Verified Data" :
                       src.type === "yellow" ? "Inferred/Anecdotal" :
                       "Unverified/Contradictory";

    snode.innerHTML = `
      <div class="node-header">
        <div class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">${icon}</svg></div>
        ${headerText}
      </div>
      <div class="node-body">${src.text}</div>
    `;
    DOM.reasoningNodes.appendChild(snode);
  });

  // 3. Draw Edges and Labels
  let svgPaths = "";
  graphData.edges.forEach(edge => {
    const p1 = nodePositions[edge.from];
    const p2 = nodePositions[edge.to];
    if (!p1 || !p2) return;

    // Draw bezier curve for organic feel
    const dx = Math.abs(p2.x - p1.x);
    // Control points to create a gentle curve
    const cp1x = p1.x + (dx * 0.3) * (p1.x < p2.x ? 1 : -1);
    const cp1y = p1.y + 40;
    const cp2x = p2.x - (dx * 0.3) * (p1.x < p2.x ? 1 : -1);
    const cp2y = p2.y - 40;
    svgPaths += `<path d="M ${p1.x} ${p1.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}" />`;

    // Add Edge Label in the middle
    // Approximate midpoint
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;

    const label = document.createElement("div");
    label.className = "edge-label";
    label.style.left = `${midX}px`;
    label.style.top = `${midY}px`;
    label.textContent = edge.label;
    DOM.reasoningLabels.appendChild(label);
  });

  DOM.reasoningEdges.innerHTML = svgPaths;
}

// -----------------------------------------------------------------------
// UTILITIES
// -----------------------------------------------------------------------
function autoGrowInput() {
  DOM.chatInput.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
}
function scrollToBottom() {
  DOM.chatScroller.scrollTop = DOM.chatScroller.scrollHeight;
}
function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
