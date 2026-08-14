/* ==========================================================================
   PHASE 3 — EV MARKET REVIEW DEMO — INTERACTIVE EDIT, MULTI-TURN, COMPARE
   ========================================================================== */

// -----------------------------------------------------------------------
// DEMO QUESTION & ASSUMPTIONS (same as Phase 2)
// -----------------------------------------------------------------------
const DEMO_QUESTION = "Analyze India's EV market and suggest growth opportunities for a startup entering this space in 2026";

const ASSUMPTIONS = [
  "You're asking about the Indian domestic EV market (cars, two-wheelers, three-wheelers, and commercial vehicles), not global.",
  "\"Startup\" refers to an early-stage company with limited capital ($1-5M seed), not an established automotive OEM.",
  "Growth opportunities should be actionable for 2026 entry — considering current policy frameworks like FAME III and PLI incentives."
];

// -----------------------------------------------------------------------
// HARDCODED ANSWER with annotation spans
// -----------------------------------------------------------------------
const HARDCODED_ANSWER = `
<h2>India's EV Market: Landscape & Growth Opportunities for 2026</h2>

<h3>1. Market Overview</h3>
<p>India's electric vehicle market has experienced <strong>exponential growth</strong>, with EV sales crossing <span class="hl-blue" data-tip="blue" data-idx="0">2.1 million units in FY2025</span>, a 40% year-over-year increase. The two-wheeler segment dominates with over 65% market share, followed by three-wheelers at 20% and four-wheelers at roughly 12%.</p>

<p><span class="hl-yellow" data-tip="yellow" data-idx="0">Government subsidies under FAME III have reduced the average consumer cost of an electric two-wheeler by approximately ₹25,000–₹40,000</span>, making EVs increasingly competitive with ICE alternatives at the point of sale. The total addressable market for EVs in India is projected to reach <span class="hl-blue" data-tip="blue" data-idx="1">$100 billion by 2030</span>, according to NITI Aayog and CEEW estimates.</p>

<hr>

<h3>2. Key Growth Segments</h3>

<p><strong>a) Two-Wheeler EVs (Highest Volume):</strong> Companies like Ola Electric, Ather Energy, and TVS have established early dominance. However, <span class="hl-yellow" data-tip="yellow" data-idx="1">Tier-2 and Tier-3 cities remain vastly underserved, representing less than 18% of current EV two-wheeler sales despite comprising over 60% of India's two-wheeler demand</span>.</p>

<p><strong>b) Commercial Fleet Electrification:</strong> Last-mile delivery and ride-hailing fleets are rapidly transitioning. <span class="hl-red" data-tip="red" data-idx="0">Amazon and Flipkart have committed to electrifying 100% of their delivery fleets by 2025</span>, creating massive demand for light commercial EVs and battery-swapping infrastructure.</p>

<p><strong>c) Charging Infrastructure:</strong> India currently has approximately <span class="hl-red" data-tip="red" data-idx="1">12,146 public charging stations as of March 2025</span>, which translates to a ratio of about 1 charger per 170 EVs — significantly below the global benchmark of 1:10. This gap represents a <strong>critical infrastructure opportunity</strong>.</p>

<hr>

<h3>3. Startup Opportunities for 2026 Entry</h3>

<p><strong>Opportunity 1 — Battery-as-a-Service (BaaS):</strong> <span class="hl-blue" data-tip="blue" data-idx="2">Decoupling battery cost from vehicle purchase can reduce upfront EV prices by 30-40%</span>, making adoption viable for price-sensitive Indian consumers. Startups like Sun Mobility and Battery Smart have validated the model; however, coverage outside top-8 metros remains minimal.</p>

<p><strong>Opportunity 2 — EV Financing & Insurance:</strong> <span class="hl-yellow" data-tip="yellow" data-idx="2">Traditional banks remain hesitant to finance EVs due to uncertain residual values and limited actuarial data for battery degradation</span>. A fintech-first approach — using telematics data for dynamic risk assessment — could unlock a ₹40,000 crore lending opportunity.</p>

<p><strong>Opportunity 3 — Charging Network Aggregation:</strong> Rather than deploying physical chargers, a software platform aggregating existing charge points (BPCL, Tata Power, EESL) into a unified discovery-booking-payment layer could become the <span class="hl-red" data-tip="red" data-idx="2">"UPI of EV charging"</span> — a concept the Ministry of Power has actively endorsed in its 2025 EV policy draft.</p>

<hr>

<h3>4. Risks & Considerations</h3>
<p>Startups entering this space should account for <strong>lithium-ion cell import dependency</strong> (India imports over 80% of its Li-ion cells from China), potential subsidy rollbacks post-election cycles, and the competitive pressure from well-funded incumbents like Tata Motors and Mahindra Electric who are aggressively expanding their EV portfolios.</p>

<p>Overall, the Indian EV ecosystem in 2026 presents a generational opportunity — but success will depend on <strong>execution speed, regulatory navigation, and building trust</strong> in a market still early in its adoption curve.</p>
`;

// -----------------------------------------------------------------------
// TOOLTIP DATA
// -----------------------------------------------------------------------
const TOOLTIP_DATA = {
  blue: [
    { title: "Assumed Market Data", desc: "The figure \"2.1 million units in FY2025\" is based on VAHAN dashboard aggregated registrations. Actual sales may differ from registrations by 5-8%." },
    { title: "Projected Estimate", desc: "The $100B market size projection is sourced from NITI Aayog's 2024 report and CEEW's \"India EV Outlook 2030\" study." },
    { title: "Industry Benchmark", desc: "The 30-40% cost reduction from BaaS is based on Sun Mobility's published pricing model. Actual reduction varies by battery chemistry." }
  ],
  yellow: [
    { title: "AI Inference — Subsidy Impact", desc: "The ₹25,000–₹40,000 subsidy range is inferred from FAME II terminal rates extrapolated to FAME III. Official rates not yet finalized." },
    { title: "AI Inference — Market Gap", desc: "The 18% Tier-2/3 penetration figure is inferred from Ather and Ola retail distribution data, not a unified industry report." },
    { title: "AI Inference — Banking Hesitancy", desc: "Assessment based on RBI's 2024 Financial Stability Report commentary and anecdotal fintech founder interviews." }
  ],
  red: [
    { title: "Verification Issue — Fleet Commitment", desc: "Amazon's 2023 sustainability report states 10,000 EVs by 2025, not 100% fleet. Flipkart references 2030 timeline." },
    { title: "Verification Issue — Charging Stations", desc: "BEE lists 8,738 operational stations (Jan 2025). The 12,146 figure may include planned stations." },
    { title: "Verification Issue — Policy Attribution", desc: "\"UPI of EV charging\" is not in any official MoP document. It originates from media/industry commentary." }
  ]
};

// -----------------------------------------------------------------------
// SOURCE DOCUMENTS
// -----------------------------------------------------------------------
const SOURCE_DOCUMENTS = [
  {
    title: "Amazon India Sustainability Report 2023",
    meta: "sustainability.aboutamazon.in • Published Dec 2023",
    body: `<p>Amazon's Climate Pledge commits the company to net-zero carbon by 2040.</p>
<p>In India, Amazon has focused on electrifying its last-mile delivery fleet.</p>
<div class="source-highlight"><p><strong>Key finding:</strong> "Amazon India has deployed over 6,000 electric delivery vehicles, with a target of <strong>10,000 EVs by end of 2025</strong>. This represents partial fleet electrification, not a complete 100% transition."</p></div>
<p>Flipkart's roadmap references a <strong>2030 timeline</strong> for complete fleet electrification.</p>`
  },
  {
    title: "Bureau of Energy Efficiency — EV Charging Registry",
    meta: "beeindia.gov.in • Last updated Jan 2025",
    body: `<p>The BEE maintains the official registry of public EV charging stations.</p>
<div class="source-highlight"><p><strong>Official count:</strong> "As of January 2025, there are <strong>8,738 operational public charging stations</strong>. An additional 3,408 are 'under installation' or 'awaiting commissioning'."</p></div>
<p>The discrepancy likely stems from including both operational and planned stations.</p>`
  },
  {
    title: "Ministry of Power — Draft EV Charging Policy 2025",
    meta: "powermin.gov.in • Draft circulated Mar 2025",
    body: `<p>The policy outlines a framework for interoperability between charge point operators.</p>
<div class="source-highlight"><p><strong>Key finding:</strong> The draft does not use "UPI of EV charging." It references "a unified digital layer for charge point discovery and payment." <strong>The specific branding originates from industry commentary</strong>, not official policy.</p></div>
<p>The policy proposes mandatory OCPP 2.0.1 compliance for all new charge points.</p>`
  }
];

// -----------------------------------------------------------------------
// CORRECTED VERSIONS (used when user clicks "Use BEE verified count" etc.)
// -----------------------------------------------------------------------
const AUTO_CORRECTIONS = {
  "red-0": "Amazon India has set a target of deploying 10,000 electric delivery vehicles by 2025 (not 100% fleet). Flipkart targets full fleet electrification by 2030",
  "red-1": "8,738 operational public charging stations as of January 2025 (BEE verified), with 3,408 additional stations under installation",
  "red-2": "\"unified charging platform\" — a concept described in media coverage of the Ministry of Power's 2025 EV policy draft"
};

// -----------------------------------------------------------------------
// FOLLOW-UP RESPONSES (multi-turn)
// -----------------------------------------------------------------------
const FOLLOWUP_RESPONSES = {
  "Which flagged claims were corrected?": `<h3>Review Summary</h3>
<p>Based on your review session, here's what was resolved:</p>
<ul>
<li><strong>Fleet electrification claim</strong> — Corrected from "100% by 2025" to Amazon's actual target of 10,000 EVs. Flipkart's timeline corrected to 2030.</li>
<li><strong>Charging station count</strong> — Updated from 12,146 to the BEE-verified figure of 8,738 operational stations.</li>
<li><strong>"UPI of EV charging"</strong> — Attribution corrected to media/industry commentary rather than official MoP policy language.</li>
</ul>
<p>All blue (assumed context) and yellow (AI inference) annotations were reviewed and accepted as reasonable.</p>`,

  "Elaborate on BaaS opportunity": `<h3>Battery-as-a-Service: Deep Dive</h3>
<p>The BaaS model decouples the battery — typically 35-45% of an EV's cost — from the vehicle purchase price. This approach has several advantages for the Indian market:</p>
<ul>
<li><strong>Lower upfront cost:</strong> An electric two-wheeler priced at ₹1.2L can drop to ₹70-80K without the battery, making it competitive with ICE alternatives.</li>
<li><strong>Subscription revenue:</strong> Monthly battery subscription fees of ₹1,500-2,500 create predictable recurring revenue for startups.</li>
<li><strong>Faster charging via swapping:</strong> Battery swap takes 60-90 seconds vs. 3-4 hours for traditional charging, addressing range anxiety.</li>
</ul>
<p>Key players like <strong>Sun Mobility</strong> (backed by Maini Group) and <strong>Battery Smart</strong> (Series B, $65M raised) have proven unit economics in metro corridors. The whitespace lies in Tier-2/3 expansion and commercial fleet partnerships.</p>`,

  "What about regulatory risks?": `<h3>Regulatory Risk Analysis</h3>
<p>The Indian EV policy landscape, while supportive, carries notable risks for 2026 entrants:</p>
<ul>
<li><strong>FAME III expiry uncertainty:</strong> The current subsidy framework expires in 2027. Post-election policy shifts could reduce or restructure incentives — as happened with the FAME II-to-III transition which saw a 6-month gap.</li>
<li><strong>State-level fragmentation:</strong> Each state has its own EV policy (Gujarat, Maharashtra, and Karnataka being the most progressive). A startup operating across states faces compliance complexity with varying subsidy structures, registration fees, and road tax exemptions.</li>
<li><strong>Battery import dependency:</strong> India's PLI scheme for advanced cell chemistry aims to localize production, but domestic gigafactories (Ola, Reliance, Amara Raja) won't reach meaningful scale until 2028-29. Until then, Li-ion cell costs remain vulnerable to China supply chain disruptions.</li>
</ul>
<p>Mitigating these risks requires building a <strong>policy-agnostic business model</strong> — one that remains viable even without subsidies — and maintaining regulatory intelligence as a core competency.</p>`
};

// -----------------------------------------------------------------------
// STATE
// -----------------------------------------------------------------------
const State = {
  phase: "welcome",
  sidebarOpen: true,
  reviewActive: false,
  originalAnswerHTML: "",
  // Track resolution state for each highlight: key = "color-idx", value = "accepted" | "rejected" | "edited"
  resolutions: {},
  editedTexts: {},      // key = "color-idx", value = new text
  totalFlags: 9,        // 3 blue + 3 yellow + 3 red
  currentEditTarget: null
};

// -----------------------------------------------------------------------
// DOM
// -----------------------------------------------------------------------
const DOM = {};

function cacheDom() {
  DOM.sidebar = document.getElementById("sidebar");
  DOM.sidebarToggleClose = document.getElementById("sidebar-toggle-close");
  DOM.sidebarToggleOpen = document.getElementById("sidebar-toggle-open");
  DOM.chatThread = document.getElementById("chat-thread-container");
  DOM.chatScroller = document.getElementById("chat-scroller");
  DOM.chatInput = document.getElementById("main-chat-input");
  DOM.sendBtn = document.getElementById("send-btn");
  DOM.modalBackdrop = document.getElementById("context-modal-backdrop");
  DOM.assumptionList = document.getElementById("assumption-list");
  DOM.btnEditPrompt = document.getElementById("btn-edit-prompt");
  DOM.btnProceed = document.getElementById("btn-proceed");
  DOM.extraContextInput = document.getElementById("extra-context-input");
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
// WELCOME SCREEN
// -----------------------------------------------------------------------
function renderWelcomeScreen() {
  State.phase = "welcome";
  DOM.chatThread.innerHTML = `
    <div class="welcome-screen">
      <div class="welcome-orb">AI</div>
      <h1>What can I help with?</h1>
      <p>Ask me anything — or try the demo prompt below to see the interactive review system.</p>
      <div class="suggestion-chips">
        <button class="suggestion-chip" id="demo-chip"><span class="chip-icon">📊</span>${DEMO_QUESTION}</button>
      </div>
    </div>
  `;
  document.getElementById("demo-chip").addEventListener("click", () => {
    DOM.chatInput.value = DEMO_QUESTION;
    triggerSend();
  });
}

// -----------------------------------------------------------------------
// EVENTS
// -----------------------------------------------------------------------
function setupEventListeners() {
  DOM.sendBtn.addEventListener("click", triggerSend);
  DOM.chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); triggerSend(); }
  });

  DOM.sidebarToggleClose.addEventListener("click", () => DOM.sidebar.classList.add("collapsed"));
  DOM.sidebarToggleOpen.addEventListener("click", () => DOM.sidebar.classList.remove("collapsed"));

  DOM.btnEditPrompt.addEventListener("click", () => {
    DOM.modalBackdrop.classList.add("hidden");
    DOM.chatInput.value = DEMO_QUESTION;
    DOM.chatInput.focus();
    const last = DOM.chatThread.querySelector(".chat-message-row.user:last-of-type");
    if (last) last.remove();
  });

  DOM.btnProceed.addEventListener("click", () => {
    DOM.modalBackdrop.classList.add("hidden");
    streamAnswer();
  });

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
    if (State.resolutions[key]) return; // already resolved, no tooltip
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

    if (action === "accept") { resolveHighlight(key, "accepted"); }
    else if (action === "reject") { resolveHighlight(key, "rejected"); }
    else if (action === "edit") { openEditModal(key); }
    else if (action === "open-source") { DOM.reviewTooltip.classList.add("hidden"); openRightSidebar(parseInt(btn.dataset.docIdx, 10)); }
    else if (action === "auto-correct") { applyAutoCorrection(key); }
  });

  // Edit modal
  DOM.editApplyBtn.addEventListener("click", applyEdit);
  DOM.editCancelBtn.addEventListener("click", () => DOM.editModalBackdrop.classList.add("hidden"));
  DOM.editModalClose.addEventListener("click", () => DOM.editModalBackdrop.classList.add("hidden"));

  // Comparison panel
  DOM.comparisonClose.addEventListener("click", () => DOM.comparisonBackdrop.classList.add("hidden"));
  DOM.comparisonKeep.addEventListener("click", () => DOM.comparisonBackdrop.classList.add("hidden"));
  DOM.comparisonApply.addEventListener("click", () => {
    DOM.comparisonBackdrop.classList.add("hidden");
    showFollowupNotice("Corrected version applied to the response.");
  });
}

// -----------------------------------------------------------------------
// SEND
// -----------------------------------------------------------------------
function triggerSend() {
  const text = DOM.chatInput.value.trim();
  if (!text) return;
  DOM.chatInput.value = "";
  DOM.chatInput.style.height = "36px";

  const welcome = DOM.chatThread.querySelector(".welcome-screen");
  if (welcome) DOM.chatThread.innerHTML = "";

  appendUserBubble(text);
  scrollToBottom();

  // If the answer hasn't been shown yet, this is the initial question
  if (State.phase === "welcome" || State.phase === "asked") {
    State.phase = "asked";
    setTimeout(() => showContextModal(), 500);
  } else {
    // This is a follow-up question (multi-turn)
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
  DOM.assumptionList.innerHTML = "";
  ASSUMPTIONS.forEach((text, i) => {
    const card = document.createElement("div");
    card.className = "assumption-card";
    card.innerHTML = `<div class="assumption-num">${i + 1}</div><div class="assumption-text">${text}</div>`;
    DOM.assumptionList.appendChild(card);
  });
  DOM.extraContextInput.value = "";
  DOM.modalBackdrop.classList.remove("hidden");
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
  const parsed = parser.parseFromString(`<div>${HARDCODED_ANSWER}</div>`, "text/html");
  const tokens = flattenNodes(parsed.querySelector("div"));

  let idx = 0;
  const interval = setInterval(() => {
    if (idx >= tokens.length) {
      clearInterval(interval);
      cursor.remove();
      State.phase = "answered";
      State.originalAnswerHTML = contentEl.innerHTML;
      appendReviewControls(assistantRow);
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
// REVIEW CONTROLS
// -----------------------------------------------------------------------
function appendReviewControls(row) {
  const container = document.createElement("div");
  container.className = "review-btn-container";
  container.id = "review-controls";
  container.innerHTML = `
    <div class="chat-actions-footer">
      <button class="footer-btn" aria-label="Copy" title="Copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
      <button class="footer-btn" aria-label="Thumbs up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg></button>
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

  // Legend
  const legend = document.createElement("div");
  legend.className = "review-legend hidden";
  legend.id = "review-legend";
  legend.innerHTML = `
    <div class="legend-item"><span class="legend-swatch blue"></span>Assumed context</div>
    <div class="legend-item"><span class="legend-swatch yellow"></span>AI inference</div>
    <div class="legend-item"><span class="legend-swatch red"></span>Verification issue</div>
  `;
  row.appendChild(legend);

  // Progress bar
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

    // Show Compare if any edits were made
    if (Object.keys(State.resolutions).length > 0) {
      compareBtn.classList.remove("hidden");
    }
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
  const data = TOOLTIP_DATA[color]?.[idx];
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

  // Build action buttons — always: Accept, Reject, Edit. For red: also Open source + Auto-correct
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
  makeBtn("action-edit", '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>', "Rewrite", "edit");
  makeBtn("action-reject", '<path d="M18 6L6 18M6 6l12 12"/>', "Reject / Remove", "reject");

  if (color === "red") {
    makeBtn("", '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>', "Open source", "open-source", { docIdx: idx });
    if (AUTO_CORRECTIONS[key]) {
      makeBtn("action-accept", '<path d="M21.5 2v6h-6M2.5 22v-6h6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38"/>', "Auto-correct with verified data", "auto-correct");
    }
  }

  // Position
  const rect = span.getBoundingClientRect();
  let top = rect.bottom + 10;
  let left = rect.left + rect.width / 2 - 170;
  if (top + 260 > window.innerHeight) top = rect.top - 260 - 10;
  if (left < 8) left = 8;
  if (left + 340 > window.innerWidth - 8) left = window.innerWidth - 348;
  DOM.reviewTooltip.style.top = `${top}px`;
  DOM.reviewTooltip.style.left = `${left}px`;
  DOM.reviewTooltip.classList.remove("hidden");
}

// -----------------------------------------------------------------------
// RESOLVE HIGHLIGHTS
// -----------------------------------------------------------------------
function resolveHighlight(key, status) {
  State.resolutions[key] = status;
  DOM.reviewTooltip.classList.add("hidden");

  const [color, idx] = key.split("-");
  const span = document.querySelector(`[data-tip="${color}"][data-idx="${idx}"]`);
  if (!span) return;

  // Remove old states
  span.classList.remove("hl-accepted", "hl-rejected", "hl-edited", "hl-blue", "hl-yellow", "hl-red");

  if (status === "accepted") span.classList.add("hl-accepted");
  else if (status === "rejected") span.classList.add("hl-rejected");
  else if (status === "edited") span.classList.add("hl-edited");

  updateProgress();
  scrollToBottom();
}

function applyAutoCorrection(key) {
  const correction = AUTO_CORRECTIONS[key];
  if (!correction) return;

  const [color, idx] = key.split("-");
  const span = document.querySelector(`[data-tip="${color}"][data-idx="${idx}"]`);
  if (!span) return;

  State.editedTexts[key] = correction;
  span.textContent = correction;
  resolveHighlight(key, "edited");
}

// -----------------------------------------------------------------------
// INLINE EDIT MODAL
// -----------------------------------------------------------------------
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

// -----------------------------------------------------------------------
// PROGRESS BAR
// -----------------------------------------------------------------------
function updateProgress() {
  const resolved = Object.keys(State.resolutions).length;
  const pct = Math.round((resolved / State.totalFlags) * 100);
  const countEl = document.getElementById("progress-count");
  const fillEl = document.getElementById("progress-fill");
  if (countEl) countEl.textContent = `${resolved} / ${State.totalFlags} resolved`;
  if (fillEl) fillEl.style.width = `${pct}%`;

  // Show Compare button once any items are resolved
  const compareBtn = document.getElementById("btn-compare");
  if (resolved > 0 && compareBtn) compareBtn.classList.remove("hidden");
}

// -----------------------------------------------------------------------
// COMPARISON PANEL
// -----------------------------------------------------------------------
function openComparison() {
  // Original
  DOM.comparisonOriginal.innerHTML = State.originalAnswerHTML;

  // Corrected — clone and apply edits
  const correctedEl = document.createElement("div");
  correctedEl.innerHTML = State.originalAnswerHTML;

  // Process each resolution
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

  // Stats
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
// MULTI-TURN FOLLOW-UP
// -----------------------------------------------------------------------
function handleFollowup(text) {
  // Check if it matches a hardcoded follow-up
  let responseHTML = null;
  for (const [question, answer] of Object.entries(FOLLOWUP_RESPONSES)) {
    if (text.toLowerCase().includes(question.toLowerCase().slice(0, 20))) {
      responseHTML = answer;
      break;
    }
  }

  if (!responseHTML) {
    // Generate context-aware response referencing the review state
    const resolvedCount = Object.keys(State.resolutions).length;
    const editedPhrases = Object.entries(State.editedTexts).map(([k, v]) => `• ${v}`).join("<br>");

    responseHTML = `<h3>Following up on your EV market analysis</h3>
<p>Based on your question and the review session (${resolvedCount} of ${State.totalFlags} items resolved), here's additional context:</p>
<p>Your query: "<em>${escapeHtml(text)}</em>"</p>
${editedPhrases ? `<p><strong>Your corrections so far:</strong><br>${editedPhrases}</p>` : ""}
<p>The analysis framework remains consistent with the corrected data points. For deeper analysis on specific segments, try asking about <strong>BaaS economics</strong>, <strong>regulatory risks</strong>, or <strong>charging infrastructure ROI</strong>.</p>`;
  }

  // Stream the follow-up response
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
      appendFollowupSuggestions(row);
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

function appendFollowupSuggestions(row) {
  const chips = document.createElement("div");
  chips.className = "followup-suggestions";

  const suggestions = [
    "Which flagged claims were corrected?",
    "Elaborate on BaaS opportunity",
    "What about regulatory risks?"
  ];

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
  notice.innerHTML = `<div class="message-content"><p style="color:var(--accent);font-weight:500;">✓ ${text}</p></div>`;
  DOM.chatThread.appendChild(notice);
  scrollToBottom();
}

// -----------------------------------------------------------------------
// RIGHT SIDEBAR
// -----------------------------------------------------------------------
function openRightSidebar(docIdx) {
  const doc = SOURCE_DOCUMENTS[docIdx] || SOURCE_DOCUMENTS[0];
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
