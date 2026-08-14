/* ==========================================================================
   PHASE 2 — EV MARKET REVIEW DEMO — INTERACTION ENGINE
   ========================================================================== */

// -----------------------------------------------------------------------
// HARDCODED DEMO QUESTION
// -----------------------------------------------------------------------
const DEMO_QUESTION = "Analyze India's EV market and suggest growth opportunities for a startup entering this space in 2026";

// -----------------------------------------------------------------------
// HARDCODED 3 ASSUMPTIONS for Context Check Card
// -----------------------------------------------------------------------
const ASSUMPTIONS = [
  "You're asking about the Indian domestic EV market (cars, two-wheelers, three-wheelers, and commercial vehicles), not global.",
  "\"Startup\" refers to an early-stage company with limited capital ($1-5M seed), not an established automotive OEM.",
  "Growth opportunities should be actionable for 2026 entry — considering current policy frameworks like FAME III and PLI incentives."
];

// -----------------------------------------------------------------------
// HARDCODED ANSWER (raw HTML) with annotation spans pre-embedded
// The spans use classes: hl-blue, hl-yellow, hl-red
// They are invisible until .review-active is toggled on parent
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
// TOOLTIP DATA — keyed by color + index
// -----------------------------------------------------------------------
const TOOLTIP_DATA = {
  blue: [
    {
      title: "Assumed Market Data",
      desc: "The figure \"2.1 million units in FY2025\" is based on VAHAN dashboard aggregated registrations. Actual sales may differ from registrations by 5-8%.",
      actions: ["Verify with SIAM data", "Adjust figure"]
    },
    {
      title: "Projected Estimate",
      desc: "The $100B market size projection is sourced from NITI Aayog's 2024 report and CEEW's \"India EV Outlook 2030\" study. Assumptions include sustained policy support.",
      actions: ["View NITI Aayog report", "Change projection source"]
    },
    {
      title: "Industry Benchmark",
      desc: "The 30-40% cost reduction from BaaS is based on Sun Mobility's published pricing model. Actual reduction varies by battery chemistry and swap frequency.",
      actions: ["See Sun Mobility pricing", "Request sensitivity analysis"]
    }
  ],
  yellow: [
    {
      title: "AI Inference — Subsidy Impact",
      desc: "The ₹25,000–₹40,000 subsidy range is inferred from FAME II terminal rates extrapolated to FAME III. Official FAME III rates are not yet finalized for all vehicle categories.",
      actions: ["Show reasoning chain", "Flag for manual review"]
    },
    {
      title: "AI Inference — Market Gap",
      desc: "The 18% Tier-2/3 penetration figure is inferred from Ather Energy's Q3 FY25 investor deck and Ola Electric's retail outlet distribution data, not from a unified industry report.",
      actions: ["View source data points", "Request primary research"]
    },
    {
      title: "AI Inference — Banking Hesitancy",
      desc: "The assessment of traditional banks' reluctance is based on RBI's 2024 Financial Stability Report commentary on \"new asset classes\" and anecdotal fintech founder interviews.",
      actions: ["Show full reasoning", "Remove inference"]
    }
  ],
  red: [
    {
      title: "Verification Issue — Fleet Commitment",
      desc: "Amazon India's 2025 full-fleet electrification claim could not be verified. Amazon's 2023 sustainability report states a target of 10,000 EVs by 2025, not 100% fleet conversion. Flipkart's commitment references a 2030 timeline, not 2025.",
      actions: ["Open source", "Rewrite with verified info", "Remove claim"]
    },
    {
      title: "Verification Issue — Charging Station Count",
      desc: "The figure of 12,146 public charging stations could not be verified against the Bureau of Energy Efficiency (BEE) registry. The BEE's last published count (Jan 2025) lists 8,738 operational stations. The higher figure may include planned or under-construction stations.",
      actions: ["Open source", "Use BEE verified count", "Flag as unverified"]
    },
    {
      title: "Verification Issue — Policy Attribution",
      desc: "The phrase \"UPI of EV charging\" and its attribution to the Ministry of Power's 2025 EV policy draft could not be verified. No official MoP document uses this exact terminology.",
      actions: ["Open source", "Remove attribution", "Rewrite claim"]
    }
  ]
};

// -----------------------------------------------------------------------
// SOURCE DOCUMENT (for right sidebar) — shown when "Open source" is clicked on red
// -----------------------------------------------------------------------
const SOURCE_DOCUMENTS = [
  {
    title: "Amazon India Sustainability Report 2023",
    meta: "sustainability.aboutamazon.in • Published Dec 2023",
    body: `<p>Amazon's Climate Pledge commits the company to net-zero carbon by 2040 across all global operations.</p>
<p>In India, Amazon has focused on electrifying its last-mile delivery fleet as part of this broader goal.</p>
<div class="source-highlight">
  <p><strong>Key finding:</strong> "As of December 2023, Amazon India has deployed over 6,000 electric delivery vehicles across 100+ cities, with a stated target of scaling to <strong>10,000 electric vehicles by the end of 2025</strong>. This represents a partial fleet electrification, not a complete 100% transition of all delivery operations."</p>
</div>
<p>The report further notes that full fleet electrification depends on adequate charging infrastructure deployment, particularly in Tier-2 and Tier-3 cities where Amazon's delivery network is expanding most rapidly.</p>
<p>Flipkart's sustainability roadmap, published separately, references a <strong>2030 timeline</strong> for complete fleet electrification — five years later than the AI-generated claim suggested.</p>`
  },
  {
    title: "Bureau of Energy Efficiency — EV Charging Registry",
    meta: "beeindia.gov.in • Last updated Jan 2025",
    body: `<p>The Bureau of Energy Efficiency (BEE) maintains the official registry of public EV charging stations under the Ministry of Power's guidelines.</p>
<div class="source-highlight">
  <p><strong>Official count:</strong> "As of January 31, 2025, there are <strong>8,738 operational public EV charging stations</strong> registered with the BEE across India. An additional 3,408 stations are classified as 'under installation' or 'awaiting commissioning'."</p>
</div>
<p>The discrepancy between the BEE's official count of 8,738 and the figure of 12,146 cited in the AI response likely stems from including both operational and planned stations in the higher figure.</p>
<p>Major charge point operators include Tata Power (2,100+ stations), BPCL (1,400+ stations), EESL (800+ stations), and Charge Zone (650+ stations).</p>`
  },
  {
    title: "Ministry of Power — Draft EV Charging Policy 2025",
    meta: "powermin.gov.in • Draft circulated Mar 2025",
    body: `<p>The Ministry of Power's 2025 draft policy on EV charging infrastructure outlines a framework for interoperability between charge point operators.</p>
<p>The policy emphasizes open protocols, standardized payment systems, and roaming agreements between networks.</p>
<div class="source-highlight">
  <p><strong>Key finding:</strong> The draft policy does not use the phrase "UPI of EV charging" in any section. It does reference the need for "a unified digital layer for charge point discovery and payment, analogous to existing unified payment interfaces." The specific branding as <strong>"UPI of EV charging" appears to originate from industry commentary and media coverage</strong>, not from the official policy document.</p>
</div>
<p>The policy proposes mandatory OCPP 2.0.1 compliance for all new charge points and a central registry managed by the BEE.</p>`
  }
];


// -----------------------------------------------------------------------
// APP STATE
// -----------------------------------------------------------------------
const State = {
  phase: "welcome",       // welcome | asked | answered | reviewing
  sidebarOpen: true,
  rightSidebarOpen: false,
  reviewActive: false
};

// -----------------------------------------------------------------------
// DOM REFS
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
// WELCOME SCREEN — with the demo question as a suggestion chip
// -----------------------------------------------------------------------
function renderWelcomeScreen() {
  State.phase = "welcome";
  DOM.chatThread.innerHTML = `
    <div class="welcome-screen">
      <div class="welcome-orb">AI</div>
      <h1>What can I help with?</h1>
      <p>Ask me anything — or try the demo prompt below to see the review system in action.</p>
      <div class="suggestion-chips">
        <button class="suggestion-chip" id="demo-chip">
          <span class="chip-icon">📊</span>${DEMO_QUESTION}
        </button>
      </div>
    </div>
  `;

  document.getElementById("demo-chip").addEventListener("click", () => {
    DOM.chatInput.value = DEMO_QUESTION;
    triggerSend();
  });
}

// -----------------------------------------------------------------------
// EVENT LISTENERS
// -----------------------------------------------------------------------
function setupEventListeners() {
  // Send
  DOM.sendBtn.addEventListener("click", triggerSend);
  DOM.chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      triggerSend();
    }
  });

  // Sidebar toggle
  DOM.sidebarToggleClose.addEventListener("click", () => toggleSidebar(false));
  DOM.sidebarToggleOpen.addEventListener("click", () => toggleSidebar(true));

  // Context Check Modal
  DOM.btnEditPrompt.addEventListener("click", () => {
    hideModal();
    DOM.chatInput.value = DEMO_QUESTION;
    DOM.chatInput.focus();
    // Remove the user message row
    const lastUser = DOM.chatThread.querySelector(".chat-message-row.user:last-of-type");
    if (lastUser) lastUser.remove();
  });

  DOM.btnProceed.addEventListener("click", () => {
    hideModal();
    streamAnswer();
  });

  // Close right sidebar
  DOM.closeRightSidebar.addEventListener("click", closeRightSidebar);

  // Tooltip hover persistence
  let tooltipTimeout;
  DOM.reviewTooltip.addEventListener("mouseenter", () => clearTimeout(tooltipTimeout));
  DOM.reviewTooltip.addEventListener("mouseleave", () => {
    tooltipTimeout = setTimeout(() => DOM.reviewTooltip.classList.add("hidden"), 250);
  });

  // Delegated hover for highlights
  DOM.chatThread.addEventListener("mouseover", (e) => {
    const span = e.target.closest(".hl-blue, .hl-yellow, .hl-red");
    if (!span || !State.reviewActive) return;
    clearTimeout(tooltipTimeout);
    showTooltip(span);
  });

  DOM.chatThread.addEventListener("mouseout", (e) => {
    const span = e.target.closest(".hl-blue, .hl-yellow, .hl-red");
    if (!span) return;
    tooltipTimeout = setTimeout(() => DOM.reviewTooltip.classList.add("hidden"), 250);
  });

  // Tooltip action delegation — "Open source" for red highlights
  DOM.tooltipActions.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    if (btn.dataset.action === "open-source") {
      DOM.reviewTooltip.classList.add("hidden");
      openRightSidebar(parseInt(btn.dataset.docIdx, 10));
    }
  });
}

// -----------------------------------------------------------------------
// SEND / SUBMIT
// -----------------------------------------------------------------------
function triggerSend() {
  const text = DOM.chatInput.value.trim();
  if (!text) return;

  DOM.chatInput.value = "";
  DOM.chatInput.style.height = "36px";

  // Clear welcome
  const welcome = DOM.chatThread.querySelector(".welcome-screen");
  if (welcome) DOM.chatThread.innerHTML = "";

  // Append user bubble
  const userRow = document.createElement("div");
  userRow.className = "chat-message-row user";
  userRow.innerHTML = `<div class="message-bubble">${escapeHtml(text)}</div>`;
  DOM.chatThread.appendChild(userRow);
  scrollToBottom();

  State.phase = "asked";

  // Show Context Check Card after brief delay
  setTimeout(() => showContextModal(), 500);
}

// -----------------------------------------------------------------------
// CONTEXT CHECK MODAL
// -----------------------------------------------------------------------
function showContextModal() {
  DOM.assumptionList.innerHTML = "";
  ASSUMPTIONS.forEach((text, i) => {
    const card = document.createElement("div");
    card.className = "assumption-card";
    card.innerHTML = `
      <div class="assumption-num">${i + 1}</div>
      <div class="assumption-text">${text}</div>
    `;
    DOM.assumptionList.appendChild(card);
  });
  DOM.extraContextInput.value = "";
  DOM.modalBackdrop.classList.remove("hidden");
}

function hideModal() {
  DOM.modalBackdrop.classList.add("hidden");
}

// -----------------------------------------------------------------------
// STREAM ANSWER — token-by-token render of HARDCODED_ANSWER
// -----------------------------------------------------------------------
function streamAnswer() {
  State.phase = "streaming";

  const assistantRow = document.createElement("div");
  assistantRow.className = "chat-message-row assistant";

  const contentEl = document.createElement("div");
  contentEl.className = "message-content";
  contentEl.id = "answer-content";

  const cursor = document.createElement("span");
  cursor.className = "streaming-cursor";
  contentEl.appendChild(cursor);

  assistantRow.appendChild(contentEl);
  DOM.chatThread.appendChild(assistantRow);
  scrollToBottom();

  // Parse the hardcoded HTML into a flat token list
  const parser = new DOMParser();
  const parsed = parser.parseFromString(`<div>${HARDCODED_ANSWER}</div>`, "text/html");
  const root = parsed.querySelector("div");
  const tokens = flattenNodes(root);

  let idx = 0;
  const speed = 12; // ms per token — fast streaming feel

  const interval = setInterval(() => {
    if (idx >= tokens.length) {
      clearInterval(interval);
      cursor.remove();
      appendReviewButton(assistantRow);
      State.phase = "answered";
      scrollToBottom();
      return;
    }

    const token = tokens[idx];
    if (token.type === "text") {
      contentEl.insertBefore(document.createTextNode(token.value), cursor);
    } else {
      contentEl.insertBefore(token.node, cursor);
    }
    idx++;

    // Throttle scroll
    if (idx % 5 === 0) scrollToBottom();
  }, speed);
}

// Flatten DOM tree into a streamable token list
function flattenNodes(container) {
  const tokens = [];
  container.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(/(\s+)/);
      words.forEach(w => {
        if (w.length > 0) tokens.push({ type: "text", value: w });
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      tokens.push({ type: "element", node: node.cloneNode(true) });
    }
  });
  return tokens;
}

// -----------------------------------------------------------------------
// REVIEW BUTTON — appended after streaming completes
// -----------------------------------------------------------------------
function appendReviewButton(assistantRow) {
  const footer = document.createElement("div");
  footer.className = "review-btn-container";
  footer.innerHTML = `
    <div class="chat-actions-footer">
      <button class="footer-btn" aria-label="Copy" title="Copy response">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      </button>
      <button class="footer-btn" aria-label="Thumbs up" title="Good response">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
      </button>
      <button class="footer-btn" aria-label="Thumbs down" title="Bad response">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm12-13h2.67A2.31 2.31 0 0 1 27 4v7a2.31 2.31 0 0 1-2.33 2H22"/></svg>
      </button>
    </div>
    <button class="btn-review" id="btn-toggle-review">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
      Review
    </button>
  `;
  assistantRow.appendChild(footer);

  // Legend (hidden until review activated)
  const legend = document.createElement("div");
  legend.className = "review-legend hidden";
  legend.id = "review-legend";
  legend.innerHTML = `
    <div class="legend-item"><span class="legend-swatch blue"></span>Assumed context</div>
    <div class="legend-item"><span class="legend-swatch yellow"></span>AI inference</div>
    <div class="legend-item"><span class="legend-swatch red"></span>Verification issue</div>
  `;
  assistantRow.appendChild(legend);

  document.getElementById("btn-toggle-review").addEventListener("click", toggleReview);
}

// -----------------------------------------------------------------------
// TOGGLE REVIEW MODE
// -----------------------------------------------------------------------
function toggleReview() {
  State.reviewActive = !State.reviewActive;

  const content = document.getElementById("answer-content");
  const btn = document.getElementById("btn-toggle-review");
  const legend = document.getElementById("review-legend");

  if (State.reviewActive) {
    content.classList.add("review-active");
    btn.classList.add("active");
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      Exit Review
    `;
    legend.classList.remove("hidden");
    State.phase = "reviewing";
  } else {
    content.classList.remove("review-active");
    btn.classList.remove("active");
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
      Review
    `;
    legend.classList.add("hidden");
    DOM.reviewTooltip.classList.add("hidden");
    State.phase = "answered";
  }
  scrollToBottom();
}

// -----------------------------------------------------------------------
// TOOLTIP — shown on highlight hover
// -----------------------------------------------------------------------
function showTooltip(span) {
  const color = span.classList.contains("hl-blue") ? "blue"
              : span.classList.contains("hl-yellow") ? "yellow"
              : "red";
  const idx = parseInt(span.dataset.idx, 10);
  const data = TOOLTIP_DATA[color]?.[idx];
  if (!data) return;

  // Theme
  DOM.reviewTooltip.className = `review-tooltip theme-${color}`;

  // Icon
  const icons = {
    blue: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
    yellow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    red: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  };

  DOM.tooltipIcon.innerHTML = icons[color];
  DOM.tooltipTitle.textContent = data.title;
  DOM.tooltipDesc.textContent = data.desc;

  // Build action buttons
  DOM.tooltipActions.innerHTML = "";
  data.actions.forEach((label, btnIdx) => {
    const button = document.createElement("button");

    if (label === "Open source" && color === "red") {
      button.dataset.action = "open-source";
      button.dataset.docIdx = idx;
      button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${label}`;
    } else {
      const actionIcons = [
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
      ];
      button.innerHTML = `${actionIcons[btnIdx] || actionIcons[0]}${label}`;
    }

    DOM.tooltipActions.appendChild(button);
  });

  // Position tooltip
  const rect = span.getBoundingClientRect();
  const tooltipW = 340;
  const tooltipH = 220; // estimated

  let top = rect.bottom + 10;
  let left = rect.left + (rect.width / 2) - (tooltipW / 2);

  // Boundary checks
  if (top + tooltipH > window.innerHeight) {
    top = rect.top - tooltipH - 10;
  }
  if (left < 8) left = 8;
  if (left + tooltipW > window.innerWidth - 8) left = window.innerWidth - tooltipW - 8;

  DOM.reviewTooltip.style.top = `${top}px`;
  DOM.reviewTooltip.style.left = `${left}px`;
  DOM.reviewTooltip.classList.remove("hidden");
}

// -----------------------------------------------------------------------
// RIGHT SIDEBAR — Source Document Viewer
// -----------------------------------------------------------------------
function openRightSidebar(docIdx) {
  const doc = SOURCE_DOCUMENTS[docIdx] || SOURCE_DOCUMENTS[0];

  // Show loading state first
  DOM.readerTitle.textContent = "Loading source…";
  DOM.readerMeta.textContent = "Verifying document…";
  DOM.readerBody.innerHTML = `<p style="text-align:center; margin-top:24px; opacity:0.4;">Fetching verified source…</p>`;

  DOM.rightSidebar.classList.remove("closed");
  State.rightSidebarOpen = true;

  // Simulate fetch delay
  setTimeout(() => {
    DOM.readerTitle.textContent = doc.title;
    DOM.readerMeta.textContent = doc.meta;
    DOM.readerBody.innerHTML = doc.body;

    // Scroll to the highlighted paragraph
    setTimeout(() => {
      const hl = DOM.readerBody.querySelector(".source-highlight");
      if (hl) {
        hl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
  }, 600);
}

function closeRightSidebar() {
  DOM.rightSidebar.classList.add("closed");
  State.rightSidebarOpen = false;
}

// -----------------------------------------------------------------------
// SIDEBAR TOGGLE
// -----------------------------------------------------------------------
function toggleSidebar(open) {
  State.sidebarOpen = open;
  DOM.sidebar.classList.toggle("collapsed", !open);
}

// -----------------------------------------------------------------------
// UTILITIES
// -----------------------------------------------------------------------
function autoGrowInput() {
  DOM.chatInput.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  });
}

function scrollToBottom() {
  DOM.chatScroller.scrollTop = DOM.chatScroller.scrollHeight;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
