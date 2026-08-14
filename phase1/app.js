/* ==========================================================================
   PREMIUM CHAT SYSTEM CONTROLLER - APPS & INTERACTION ENGINE
   ========================================================================== */

// --- MOCK DATABASE OF VERIFIED SOURCE SUMMARIES FOR CITATIONS ---
const SOURCE_DATABASE = {
  "wikipedia": {
    title: "Wikipedia",
    url: "https://wikipedia.org/wiki/Delhi",
    logo: "W",
    logoColor: "#ffffff",
    logoBg: "#000000",
    snippet: "Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. It is bordered by the state of Haryana on three sides and by Uttar Pradesh to the east."
  },
  "maps of india": {
    title: "Maps of India",
    url: "https://mapsofindia.com/delhi",
    logo: "M",
    logoColor: "#ffffff",
    logoBg: "#10a37f",
    snippet: "Maps of India is the largest online portal providing geographical, historical, and demographic maps of India. Official Census data shows that Delhi recognizes Urdu and Punjabi as secondary official languages alongside Hindi and English."
  },
  "default": {
    title: "Verified AI Citations",
    url: "https://chatgpt.pro/sources",
    logo: "A",
    logoColor: "#ffffff",
    logoBg: "#2f2f2f",
    snippet: "Verified source index consulted dynamically by our web-retrieval engine to establish geographical facts and language census statistics."
  }
};

// --- MULTI-CHAT FLOW DATABASE ---
const CHATS_DATA = {
  "languages-delhi": [
    {
      role: "user",
      content: "Explain the official languages of Delhi, their cultural background, and any key insights from census statistics."
    },
    {
      role: "assistant",
      content: `
        <div class="message-content">
          <ul>
            <li>Tamil</li>
            <li>Malayalam</li>
            <li>Nepali</li>
          </ul>
          <p>speakers significantly.</p>
          
          <hr>
          
          <h2>Official Languages of Delhi</h2>
          <p>Delhi officially recognizes:</p>
          <ul>
            <li>Hindi</li>
            <li>English</li>
            <li>Punjabi</li>
            <li>Urdu</li>
          </ul>
          <p>Punjabi and Urdu were granted additional official language status due to their large historical populations.
            <a href="#" class="citation-pill" data-source="maps of india">
              <svg class="citation-pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Maps of India +1</span>
            </a>
          </p>
          
          <hr>
          
          <h2>Key Insight</h2>
          <p>Delhi is not just "Hindi-speaking."</p>
          <p>It is actually:</p>
          <ul>
            <li>a Punjabi-influenced metropolitan Hindi city,</li>
            <li>with strong Urdu heritage,</li>
            <li>and massive migrant linguistic diversity.</li>
          </ul>
          <p>The census shows Hindi dominance, but culturally Delhi is deeply shaped by Punjabi migration after Partition.</p>
          <p>Many "Hindi-speaking Delhi families" today are ethnically Punjabi families who shifted linguistically over generations.
            <a href="#" class="citation-pill" data-source="wikipedia">
              <svg class="citation-pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>Wikipedia</span>
            </a>
          </p>
        </div>
      `,
      sources: ["wikipedia", "maps of india"]
    }
  ],
  "delhi-languages": [
    {
      role: "user",
      content: "Can you elaborate on Delhi's historical connection with Urdu and its evolution over the centuries?"
    },
    {
      role: "assistant",
      content: `
        <div class="message-content">
          <h2>Urdu's Roots in Delhi</h2>
          <p>Urdu's connection with Delhi dates back to the establishment of the Delhi Sultanate in the 12th century. It emerged as a hybrid language blending Persian, Arabic, and Sanskrit dialects.</p>
          <p>By the time Shah Jahan established Shahjahanabad (Old Delhi) in the 17th century, Urdu had evolved into the primary literary and conversational language of the Mughal court and town squares. Famous poets like Ghalib, Mir Taqi Mir, and Zauq lived and wrote their timeless ghazals in the lanes of Chandni Chowk.</p>
          <p>Today, while it has taken a secondary official role, Urdu remains a vital cultural pillar, heavily influencing Bollywood dialogue, local culinary names, and traditional musical forms like Qawwali.
            <a href="#" class="citation-pill" data-source="wikipedia">
              <svg class="citation-pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>Wikipedia</span>
            </a>
          </p>
        </div>
      `,
      sources: ["wikipedia"]
    }
  ],
  "learning-algebra": [
    {
      role: "user",
      content: "Help me understand foundational algebra, like quadratic equations."
    },
    {
      role: "assistant",
      content: `
        <div class="message-content">
          <h2>Algebra Foundations & Quadratic Equations</h2>
          <p>Algebra serves as the language of mathematics, replacing concrete numbers with variables (like <em>x</em> and <em>y</em>) to describe universal rules.</p>
          <h3>The Quadratic Equation</h3>
          <p>A quadratic equation is any variable equation of the second degree, meaning it contains at least one term squared. The standard form is:</p>
          <p style="text-align: center; font-size: 1.15rem; margin: 16px 0; font-family: var(--font-display); font-weight: 600;">
            ax² + bx + c = 0
          </p>
          <p>Where <em>a</em>, <em>b</em>, and <em>c</em> are numerical coefficients, and <em>a</em> cannot be zero. To solve for <em>x</em>, we use the famous <strong>Quadratic Formula</strong>:</p>
          <p style="text-align: center; font-size: 1.15rem; margin: 16px 0; font-family: var(--font-display); font-weight: 600; color: var(--accent);">
            x = [-b ± √(b² - 4ac)] / 2a
          </p>
          <p>The term inside the square root (<em>b² - 4ac</em>) is called the <strong>discriminant</strong>. It tells you how many real answers exist: positive means two real solutions, zero means one solution, and negative means two complex/imaginary solutions.</p>
        </div>
      `,
      sources: []
    }
  ],
  "verification-design": [
    {
      role: "user",
      content: "What is Verification-First Design 2026?"
    },
    {
      role: "assistant",
      content: `
        <div class="message-content">
          <h2>Verification-First Design 2026</h2>
          <p>Verification-First Design is an advanced engineering paradigm popularized in 2026. It reverses the traditional "write code first, verify later" sequence.</p>
          <p>In this workflow, the developer first establishes formal bounds, automated sandbox diagnostics, and automated visual regressions <em>before</em> any actual business logic is committed. This guarantees that code is correct-by-construction.</p>
          <h3>Core Tenets:</h3>
          <ul>
            <li><strong>Zero-Trust Compilations:</strong> Any build environment is treated as isolated and sandboxed by default.</li>
            <li><strong>Static Schema Audits:</strong> Form validations and data models are mathematically proven using type systems before runtime.</li>
            <li><strong>Visual Constancy:</strong> Dynamic anchors and relative layouts are locked down against style regressions in every state.</li>
          </ul>
        </div>
      `,
      sources: []
    }
  ],
  "slides-layout": [
    {
      role: "user",
      content: "How do I optimize the box layout in Google Slides?"
    },
    {
      role: "assistant",
      content: `
        <div class="message-content">
          <h2>Google Slides: Box Layout Optimization</h2>
          <p>Designing modern Google Slides presentations requires careful handling of bounding box containers to ensure perfect alignment and cognitive breathing room.</p>
          <h3>Key Tips:</h3>
          <ul>
            <li><strong>Reduce Text-Box Padding:</strong> Zero out the default internal margins (padding) of your text shapes. This allows you to align text bounding boxes perfectly flush with image edges.</li>
            <li><strong>The Rule of Thirds Grid:</strong> Turn on gridlines and draw imaginary boundaries. Set important imagery on the focal grid intersections, and group explanatory text columns neatly below.</li>
            <li><strong>Harmonious Spacing:</strong> Keep the spacing between your vertical content blocks uniform. If the gap between text box A and B is 24px, ensure the gap between B and C is precisely 24px.</li>
          </ul>
        </div>
      `,
      sources: []
    }
  ],
  "freelance-tips": [
    {
      role: "user",
      content: "Give me freelance content writing tips."
    },
    {
      role: "assistant",
      content: `
        <div class="message-content">
          <h2>Freelance Content Writing: Strategies for Scale</h2>
          <p>Scaling a content writing business from scratch requires a combination of high-grade editorial skills and solid commercial habits.</p>
          <ul>
            <li><strong>Define a High-Value Niche:</strong> Avoid writing generic articles. Specialize in complex fields like B2B SaaS, medical writing, or financial technology where clients pay substantial premiums for domain knowledge.</li>
            <li><strong>Build a Live Portfolio:</strong> Create an elegant personal site showcasing your best copy. If you have no client work yet, write comprehensive mock guides and host them on Medium or a custom domain.</li>
            <li><strong>Outreach Automation:</strong> Send 5-10 highly customized, value-first cold emails daily to marketing heads of funded startups. Pitch specific content opportunities instead of just sending resumes.</li>
          </ul>
        </div>
      `,
      sources: []
    }
  ]
};

// --- INITIAL DATA SEED FOR RECENTS (RELIANT ON SCREENSHOT LIST) ---
const RECENT_CHATS_SEEDS = [
  { id: "languages-delhi", title: "Languages in Delhi Population" },
  { id: "delhi-languages", title: "Delhi languages and population" },
  { id: "verification-design", title: "Verification-First Design 2026" },
  { id: "slides-layout", title: "Google Slides Box Layout" },
  { id: "freelance-tips", title: "Freelance Content Writing Tips" },
  { id: "sectional-timing", title: "Sectional Timing in SSC" },
  { id: "survey-request", title: "Survey Participation Request" },
  { id: "factors-1008", title: "Factors of 1008 Divisible by 8" },
  { id: "perfect-powers", title: "Perfect Powers Divisible by 7" },
  { id: "india-birth", title: "India Birth Rate Stats" },
  { id: "career-phd", title: "Career Guidance with PhD" },
  { id: "ai-survey", title: "AI Survey Participation" },
  { id: "role-suggestions", title: "Role Suggestions for You" }
];

// --- APP GLOBAL STATE ---
const State = {
  activeChatId: null,
  activeModel: "chatgpt",
  sidebarOpen: true,
  voiceModeActive: false,
  microphoneMuted: false,
  cameraActive: false
};

// --- DOM ELEMENTS REFERENCE ---
const DOM = {
  sidebar: document.getElementById("sidebar"),
  sidebarToggleClose: document.getElementById("sidebar-toggle-close"),
  sidebarToggleOpen: document.getElementById("sidebar-toggle-open"),
  sidebarSearch: document.getElementById("sidebar-search"),
  recentChatsList: document.getElementById("recent-chats-list"),
  pinnedChatsList: document.getElementById("pinned-chats-list"),
  chatThreadContainer: document.getElementById("chat-thread-container"),
  chatScroller: document.getElementById("chat-scroller"),
  mainChatInput: document.getElementById("main-chat-input"),
  modelSelectBtn: document.getElementById("model-select-btn"),
  modelDropdown: document.getElementById("model-dropdown"),
  activeModelName: document.getElementById("active-model-name"),
  voiceModeTrigger: document.getElementById("voice-mode-trigger"),
  voiceOverlay: document.getElementById("voice-overlay"),
  closeVoiceOverlay: document.getElementById("close-voice-overlay"),
  voiceStatusText: document.getElementById("voice-status-text"),
  voiceSubtitleText: document.getElementById("voice-subtitle-text"),
  voiceMuteBtn: document.getElementById("voice-mute-btn"),
  voiceCamBtn: document.getElementById("voice-cam-btn"),
  endVoiceBtn: document.getElementById("end-voice-mode-btn"),
  citationPopover: document.getElementById("citation-popover-card"),
  newChatBtn: document.getElementById("new-chat-btn"),
  shareChatBtn: document.getElementById("share-chat-btn"),
  profileTriggerBtn: document.getElementById("profile-trigger-btn"),
  
  // Assumption Modal
  assumptionModalBackdrop: document.getElementById("assumption-modal-backdrop"),
  assumptionList: document.getElementById("assumption-list"),
  extraContextInput: document.getElementById("extra-context-input"),
  btnEditPrompt: document.getElementById("btn-edit-prompt"),
  btnProceedAssumptions: document.getElementById("btn-proceed-assumptions"),

  // Review Tooltip
  reviewTooltip: document.getElementById("review-tooltip"),
  tooltipIcon: document.getElementById("tooltip-icon"),
  tooltipTitle: document.getElementById("tooltip-title"),
  tooltipDesc: document.getElementById("tooltip-description"),
  tooltipActions: document.getElementById("tooltip-actions"),

  // Right Sidebar
  rightSidebar: document.getElementById("right-sidebar"),
  closeRightSidebarBtn: document.getElementById("close-right-sidebar"),
  readerTitle: document.getElementById("reader-title"),
  readerMeta: document.getElementById("reader-meta"),
  readerBody: document.getElementById("reader-body")
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderRecentChatsList();
  loadChatThread(State.activeChatId);
  setupEventListeners();
  autoGrowInput();
});

// ==========================================================================
// RENDER METHODS
// ==========================================================================

function renderRecentChatsList(filterQuery = "") {
  DOM.recentChatsList.innerHTML = "";
  
  const query = filterQuery.toLowerCase().trim();
  const filtered = RECENT_CHATS_SEEDS.filter(item => 
    item.title.toLowerCase().includes(query)
  );
  
  if (filtered.length === 0) {
    DOM.recentChatsList.innerHTML = `
      <div style="padding: 12px; font-size: 0.8rem; color: var(--text-muted); text-align: center;">
        No chats found
      </div>
    `;
    return;
  }

  filtered.forEach(chat => {
    const li = document.createElement("li");
    li.className = `chat-item ${chat.id === State.activeChatId ? 'active' : ''}`;
    li.setAttribute("data-chat-id", chat.id);
    
    li.innerHTML = `
      <button class="chat-btn">
        <svg class="icon chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="chat-title-text">${chat.title}</span>
      </button>
    `;
    
    li.querySelector("button").addEventListener("click", () => {
      selectChat(chat.id);
    });
    
    DOM.recentChatsList.appendChild(li);
  });
}

function loadChatThread(chatId) {
  DOM.chatThreadContainer.innerHTML = "";
  const thread = CHATS_DATA[chatId];
  
  if (!thread) {
    // Generate a default empty welcome screen if selected chat is empty
    DOM.chatThreadContainer.innerHTML = `
      <div class="welcome-screen" style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; margin-top:20vh; text-align:center; gap:16px; opacity: 0.85;">
        <div class="profile-avatar" style="width:48px; height:48px; font-size:1.1rem; background: var(--accent);">AI</div>
        <h2 style="font-family: var(--font-display); font-weight:600;">How can I help you today?</h2>
        <p style="color:var(--text-secondary); font-size:0.875rem; max-width:380px;">Ask a math problem, analyze a UI mock-up, draft a contract, or kickstart creative work.</p>
      </div>
    `;
    return;
  }
  
  thread.forEach(msg => {
    const row = document.createElement("div");
    row.className = `chat-message-row ${msg.role}`;
    
    if (msg.role === "user") {
      row.innerHTML = `<div class="message-bubble">${escapeHtml(msg.content)}</div>`;
    } else {
      // Build Aggregated Source Deck Footer if present
      let sourcesDeckHtml = "";
      if (msg.sources && msg.sources.length > 0) {
        let avatarStack = "";
        msg.sources.forEach(srcKey => {
          const dbObj = SOURCE_DATABASE[srcKey] || SOURCE_DATABASE["default"];
          avatarStack += `
            <div class="source-avatar-icon" style="background-color: ${dbObj.logoBg}; color: ${dbObj.logoColor}">
              ${dbObj.logo}
            </div>
          `;
        });
        
        sourcesDeckHtml = `
          <div class="sources-deck-wrapper" id="source-deck-trigger">
            <div class="sources-avatar-stack">
              ${avatarStack}
            </div>
            <span class="sources-label">Sources</span>
          </div>
        `;
      }
      
      row.innerHTML = `
        <div class="message-content-wrapper">
          ${msg.content}
        </div>
        <div class="chat-actions-footer">
          <div class="footer-actions-left">
            <button class="footer-btn" aria-label="Copy Response">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
            <button class="footer-btn btn-review-action" aria-label="Review Assumptions">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </button>
            <button class="footer-btn" aria-label="View Sources">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </button>
            <button class="footer-btn" aria-label="Share">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            </button>
          </div>
          ${sourcesDeckHtml}
        </div>
      `;
    }
    
    DOM.chatThreadContainer.appendChild(row);
  });
  
  // Setup citation hovering on new elements
  setupCitationListeners();
  scrollToBottom();
}

// ==========================================================================
// CORE INTERACTIONS
// ==========================================================================

function selectChat(chatId) {
  State.activeChatId = chatId;
  
  // Update recent highlight
  const allRecentItems = DOM.recentChatsList.querySelectorAll(".chat-item");
  allRecentItems.forEach(item => {
    const isThis = item.getAttribute("data-chat-id") === chatId;
    item.classList.toggle("active", isThis);
  });
  
  // Load conversation
  loadChatThread(chatId);
}

function setupEventListeners() {
  // Assumption Modal Listeners
  DOM.btnEditPrompt.addEventListener("click", () => {
    hideAssumptionModal();
    DOM.mainChatInput.value = pendingUserPrompt;
    DOM.mainChatInput.focus();
    // Simulate removing the appended user row so they can edit and resubmit
    if (DOM.chatThreadContainer.lastChild && DOM.chatThreadContainer.lastChild.classList.contains('user')) {
      DOM.chatThreadContainer.removeChild(DOM.chatThreadContainer.lastChild);
    }
  });

  DOM.btnProceedAssumptions.addEventListener("click", () => {
    hideAssumptionModal();
    startAssistantStreaming();
  });

  // Chat Thread Delegate Listeners
  DOM.chatThreadContainer.addEventListener("click", (e) => {
    const reviewBtn = e.target.closest(".btn-review-action");
    if (reviewBtn) {
      const messageRow = reviewBtn.closest(".chat-message-row");
      const contentBlock = messageRow.querySelector(".message-content");
      if (contentBlock) {
        contentBlock.classList.toggle("review-mode-active");
        
        if (contentBlock.classList.contains("review-mode-active") && !contentBlock.dataset.reviewed) {
          simulateParsingReviewHighlights(contentBlock);
          contentBlock.dataset.reviewed = "true";
        }
      }
    }
  });

  let tooltipTimeout;

  DOM.chatThreadContainer.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (target.classList.contains("highlight-blue") || target.classList.contains("highlight-yellow") || target.classList.contains("highlight-red")) {
      clearTimeout(tooltipTimeout);
      
      const type = target.dataset.reviewType;
      const rect = target.getBoundingClientRect();
      
      DOM.reviewTooltip.style.top = `${rect.bottom + window.scrollY + 8}px`;
      DOM.reviewTooltip.style.left = `${Math.max(16, rect.left + window.scrollX - 160 + (rect.width/2))}px`;
      
      if (type === "assumption") {
        DOM.reviewTooltip.className = "review-tooltip theme-blue";
        DOM.tooltipIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;
        DOM.tooltipTitle.textContent = "Assumed Context";
        DOM.tooltipDesc.textContent = "This context was assumed by the AI and not explicitly requested in the prompt.";
        DOM.tooltipActions.innerHTML = `
          <button><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Remove assumption</button>
          <button><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Modify context</button>
        `;
      } else if (type === "inference") {
        DOM.reviewTooltip.className = "review-tooltip theme-yellow";
        DOM.tooltipIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
        DOM.tooltipTitle.textContent = "AI Inference";
        DOM.tooltipDesc.textContent = "This statement is a logical inference based on available information, not directly supported by cited evidence.";
        DOM.tooltipActions.innerHTML = `
          <button><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h4l2-9 5 18 3-9h6"/></svg> Show full reasoning</button>
          <button><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Remove inference</button>
        `;
      } else if (type === "error") {
        DOM.reviewTooltip.className = "review-tooltip theme-red";
        DOM.tooltipIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
        DOM.tooltipTitle.textContent = "Verification Issue";
        DOM.tooltipDesc.textContent = "Source verification issue detected. The cited text could not be found or the source is stale.";
        DOM.tooltipActions.innerHTML = `
          <button class="open-sidebar-action"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Open source document</button>
          <button><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg> Rewrite with verified info</button>
        `;
      }
    }
  });

  DOM.chatThreadContainer.addEventListener("mouseout", (e) => {
    const target = e.target;
    if (target.classList.contains("highlight-blue") || target.classList.contains("highlight-yellow") || target.classList.contains("highlight-red")) {
      tooltipTimeout = setTimeout(() => {
        DOM.reviewTooltip.classList.add("hidden");
      }, 300);
    }
  });

  DOM.reviewTooltip.addEventListener("mouseover", () => {
    clearTimeout(tooltipTimeout);
  });
  
  DOM.reviewTooltip.addEventListener("mouseout", () => {
    tooltipTimeout = setTimeout(() => {
      DOM.reviewTooltip.classList.add("hidden");
    }, 300);
  });

  // Tooltip Action Listeners
  DOM.tooltipActions.addEventListener("click", (e) => {
    const openSidebarBtn = e.target.closest(".open-sidebar-action");
    if (openSidebarBtn) {
      DOM.reviewTooltip.classList.add("hidden");
      openRightSidebar();
    }
  });

  // Close Right Sidebar
  DOM.closeRightSidebarBtn.addEventListener("click", () => {
    DOM.rightSidebar.classList.add("closed");
  });

  // Sidebar Search
  DOM.sidebarSearch.addEventListener("input", (e) => {
    renderRecentChatsList(e.target.value);
  });
  
  // Collapsing Sidebar (Top Right drawer button)
  DOM.sidebarToggleClose.addEventListener("click", () => {
    toggleSidebar(false);
  });
  
  // Expanding Sidebar (Top Left button)
  DOM.sidebarToggleOpen.addEventListener("click", () => {
    toggleSidebar(true);
  });
  
  // New Chat Click
  DOM.newChatBtn.addEventListener("click", () => {
    const newId = `new-chat-${Date.now()}`;
    const newTitle = `New Chat Session`;
    
    // Add to Seeds array at index 0
    RECENT_CHATS_SEEDS.unshift({ id: newId, title: newTitle });
    
    // Empty data initial
    CHATS_DATA[newId] = [];
    
    // Select and load
    State.activeChatId = newId;
    renderRecentChatsList();
    loadChatThread(newId);
    
    DOM.mainChatInput.focus();
  });

  // Model Selection Dropdown Toggle
  DOM.modelSelectBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = DOM.modelDropdown.classList.contains("hidden");
    DOM.modelSelectBtn.classList.toggle("active", isOpen);
    DOM.modelDropdown.classList.toggle("hidden", !isOpen);
  });
  
  // Select Model Click
  const dropdownItems = DOM.modelDropdown.querySelectorAll(".dropdown-item");
  dropdownItems.forEach(item => {
    item.addEventListener("click", (e) => {
      dropdownItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      
      const modelCode = item.getAttribute("data-model");
      State.activeModel = modelCode;
      
      const titleSpan = item.querySelector(".dropdown-item-title");
      DOM.activeModelName.textContent = titleSpan.textContent;
      
      DOM.modelDropdown.classList.add("hidden");
      DOM.modelSelectBtn.classList.remove("active");
    });
  });
  
  // Click outside closes popovers
  document.addEventListener("click", (e) => {
    if (!DOM.modelSelectBtn.contains(e.target) && !DOM.modelDropdown.contains(e.target)) {
      DOM.modelDropdown.classList.add("hidden");
      DOM.modelSelectBtn.classList.remove("active");
    }
    
    if (!e.target.closest(".citation-pill") && !DOM.citationPopover.contains(e.target)) {
      hideCitationPopover();
    }
  });
  
  // Keyboard triggers inside textarea
  DOM.mainChatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      triggerUserMessage();
    }
  });

  // Voice Mode Triggers
  if (DOM.voiceModeTrigger) DOM.voiceModeTrigger.addEventListener("click", openVoiceOverlay);
  DOM.closeVoiceOverlay.addEventListener("click", closeVoiceOverlay);
  DOM.endVoiceBtn.addEventListener("click", closeVoiceOverlay);
  
  DOM.voiceMuteBtn.addEventListener("click", () => {
    State.microphoneMuted = !State.microphoneMuted;
    DOM.voiceMuteBtn.classList.toggle("muted", State.microphoneMuted);
    DOM.voiceMuteBtn.innerHTML = State.microphoneMuted ? `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="1" y1="1" x2="23" y2="23"/>
        <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
        <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ` : `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    `;
    DOM.voiceSubtitleText.textContent = State.microphoneMuted ? "Microphone muted" : "Listening to ambient audio...";
    DOM.voiceStatusText.textContent = State.microphoneMuted ? "Muted" : "Advanced Voice";
  });

  DOM.voiceCamBtn.addEventListener("click", () => {
    State.cameraActive = !State.cameraActive;
    DOM.voiceCamBtn.classList.toggle("active", State.cameraActive);
    DOM.voiceCamBtn.classList.toggle("muted", !State.cameraActive);
  });
  
  // Custom Profile Click opens a tiny mock options alert
  DOM.profileTriggerBtn.addEventListener("click", () => {
    alert("Profile Settings (Go Plan Premium):\n- User: Pallavi Pandey\n- Limits: Unlimited o1 speed\n- Customizations: Dark Mode Custom (Activated)");
  });
  
  DOM.shareChatBtn.addEventListener("click", () => {
    alert("Copied custom, glassmorphic share link to your clipboard!");
  });
}

function toggleSidebar(shouldOpen) {
  State.sidebarOpen = shouldOpen;
  DOM.sidebar.classList.toggle("collapsed", !shouldOpen);
}

function autoGrowInput() {
  DOM.mainChatInput.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight - 12) + "px";
  });
}

// ==========================================================================
// CITATION HOVER & PREVIEW POPUPS
// ==========================================================================

function setupCitationListeners() {
  const pills = DOM.chatThreadContainer.querySelectorAll(".citation-pill");
  pills.forEach(pill => {
    // Hover / Click to reveal
    pill.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      showCitationPopover(pill);
    });
    
    pill.addEventListener("mouseenter", () => {
      showCitationPopover(pill);
    });
  });

  const deck = DOM.chatThreadContainer.querySelector("#source-deck-trigger");
  if (deck) {
    deck.addEventListener("click", (e) => {
      e.stopPropagation();
      alert("Consulted dynamic databases:\n1. Wikipedia (URL verified)\n2. Maps of India statistics (Urdu & Punjabi secondary census files)\nVerified via secure cryptographic signatures.");
    });
  }
}

function showCitationPopover(element) {
  const sourceName = element.getAttribute("data-source").toLowerCase().trim();
  const dbObj = SOURCE_DATABASE[sourceName] || SOURCE_DATABASE["default"];
  
  // Populate Card
  document.getElementById("popover-logo").textContent = dbObj.logo;
  document.getElementById("popover-logo").style.backgroundColor = dbObj.logoBg;
  document.getElementById("popover-logo").style.color = dbObj.logoColor;
  document.getElementById("popover-title").textContent = dbObj.title;
  document.getElementById("popover-url").textContent = dbObj.url.replace("https://", "");
  document.getElementById("popover-snippet").textContent = dbObj.snippet;
  document.getElementById("popover-link-btn").setAttribute("href", dbObj.url);

  // Position Popover nicely with standard collision check (similar to Anchor Position)
  DOM.citationPopover.classList.remove("hidden");
  
  const targetRect = element.getBoundingClientRect();
  const popoverWidth = 300;
  const popoverHeight = 160;
  
  let top = targetRect.bottom + window.scrollY + 8;
  let left = targetRect.left + window.scrollX - 40;
  
  // Collision top/bottom
  if (top + popoverHeight > window.innerHeight + window.scrollY) {
    top = targetRect.top + window.scrollY - popoverHeight - 8;
  }
  
  // Collision left/right
  if (left + popoverWidth > window.innerWidth) {
    left = window.innerWidth - popoverWidth - 16;
  }
  if (left < 0) left = 16;

  DOM.citationPopover.style.top = `${top}px`;
  DOM.citationPopover.style.left = `${left}px`;
  
  // Transition active
  setTimeout(() => {
    DOM.citationPopover.classList.add("active");
  }, 10);
}

function hideCitationPopover() {
  DOM.citationPopover.classList.remove("active");
  setTimeout(() => {
    if (!DOM.citationPopover.classList.contains("active")) {
      DOM.citationPopover.classList.add("hidden");
    }
  }, 200);
}

// ==========================================================================
// STREAMING RESPONSE GENERATOR ENGINE
// ==========================================================================

let pendingUserPrompt = "";

function triggerUserMessage() {
  const content = DOM.mainChatInput.value.trim();
  if (!content) return;
  
  // Clear textarea
  DOM.mainChatInput.value = "";
  DOM.mainChatInput.style.height = "36px";
  
  // Append User Row immediately
  const userRow = document.createElement("div");
  userRow.className = "chat-message-row user";
  userRow.innerHTML = `<div class="message-bubble">${escapeHtml(content)}</div>`;
  
  // Clear the empty welcome screen if it exists
  if (DOM.chatThreadContainer.querySelector(".welcome-screen")) {
    DOM.chatThreadContainer.innerHTML = "";
  }
  
  DOM.chatThreadContainer.appendChild(userRow);
  scrollToBottom();

  // Trigger Assumption Review on short prompts for prototyping purposes
  if (content.length > 5) {
    pendingUserPrompt = content;
    setTimeout(() => {
      showAssumptionModal(content);
    }, 500); // Small delay to simulate AI thinking
    return;
  }

  // Otherwise proceed directly
  startAssistantStreaming();
}

function showAssumptionModal(promptText) {
  // Mock assumptions generated based on the prompt
  const assumptions = [
    "You want detailed statistics, not just a high-level summary.",
    "You are referring to the most recent census data available.",
    "The audience for this response is a general reader without deep technical background."
  ];

  DOM.assumptionList.innerHTML = "";
  
  assumptions.forEach((assumption, index) => {
    const item = document.createElement("div");
    item.className = "assumption-item";
    item.innerHTML = `
      <input type="checkbox" class="assumption-checkbox" id="assume-${index}" checked title="Uncheck to remove this assumption">
      <textarea class="assumption-input" rows="1">${assumption}</textarea>
    `;
    DOM.assumptionList.appendChild(item);
  });

  DOM.extraContextInput.value = "";
  DOM.assumptionModalBackdrop.classList.remove("hidden");
}

function hideAssumptionModal() {
  DOM.assumptionModalBackdrop.classList.add("hidden");
}

function startAssistantStreaming() {
  
  // Append Assistant Typing/Streaming Row
  const assistantRow = document.createElement("div");
  assistantRow.className = "chat-message-row assistant";
  
  const contentWrapper = document.createElement("div");
  contentWrapper.className = "message-content-wrapper";
  
  const streamingBlock = document.createElement("div");
  streamingBlock.className = "message-content";
  
  const cursor = document.createElement("span");
  cursor.className = "streaming-cursor";
  
  streamingBlock.appendChild(cursor);
  contentWrapper.appendChild(streamingBlock);
  assistantRow.appendChild(contentWrapper);
  
  // Generate beautiful loading outline footer actions (hidden while streaming)
  const actionsFooter = document.createElement("div");
  actionsFooter.className = "chat-actions-footer hidden";
  actionsFooter.innerHTML = `
    <div class="footer-actions-left">
      <button class="footer-btn" aria-label="Copy Response"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
      <button class="footer-btn btn-review-action" aria-label="Review Assumptions"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></button>
      <button class="footer-btn" aria-label="View Sources"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></button>
      <button class="footer-btn" aria-label="Share"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg></button>
    </div>
  `;
  assistantRow.appendChild(actionsFooter);
  DOM.chatThreadContainer.appendChild(assistantRow);
  scrollToBottom();

  // Trigger streaming output
  simulateStreamingAI(content, streamingBlock, cursor, actionsFooter);
}

function simulateStreamingAI(userQuery, targetBlock, cursorNode, footerNode) {
  // Synthesize answer text based on query keywords
  let answerHtml = "";
  const queryLower = userQuery.toLowerCase();
  
  if (queryLower.includes("quantum") || queryLower.includes("physics")) {
    answerHtml = `
      <h2>Quantum Computing Foundations</h2>
      <p>Quantum computing is a rapidly-evolving technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers.</p>
      <p>Instead of bits which store 0 or 1, quantum machines use <strong>qubits</strong>. Qubits operate under two main principles:</p>
      <ul>
        <li><strong>Superposition:</strong> The ability to exist in multiple logical states simultaneously.</li>
        <li><strong>Entanglement:</strong> A secure link where state change in one qubit instantly correlates with another, regardless of spatial distance.</li>
      </ul>
      <p>This allows computational processing speeds that scale exponentially for encryption audits and chemical modeling.
        <a href="#" class="citation-pill" data-source="wikipedia">
          <svg class="citation-pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>Wikipedia</span>
        </a>
      </p>
    `;
  } else {
    // Default high-fidelity generative response
    answerHtml = `
      <h2>Insights on "${escapeHtml(userQuery)}"</h2>
      <p>Excellent prompt. Under our active <strong>Model Option: ${State.activeModel.toUpperCase()}</strong>, we perform visual validation, logical reasoning blocks, and citation searches.</p>
      <p>Here is our systematic breakdown of your request:</p>
      <ul>
        <li><strong>Logical Boundary:</strong> Checked and sandboxed securely for high compliance.</li>
        <li><strong>Actionable Strategy:</strong> Deliver concise, verified blocks with zero clutter.</li>
      </ul>
      <p>This guarantees state-of-the-art results, aligned with visual excellence standards.
        <a href="#" class="citation-pill" data-source="wikipedia">
          <svg class="citation-pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>Wikipedia</span>
        </a>
      </p>
    `;
  }

  // Parse HTML into words / token-like fragments to stream fluidly
  const parser = new DOMParser();
  const parsedDoc = parser.parseFromString(`<div>${answerHtml}</div>`, "text/html");
  const contentNode = parsedDoc.querySelector("div");
  
  // Stream word by word
  let currentIndex = 0;
  const childNodes = Array.from(contentNode.childNodes);
  const elementsToRender = [];
  
  // Flat token map of HTML structures
  childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(/(\s+)/);
      words.forEach(w => {
        if (w.trim().length > 0 || w === " ") {
          elementsToRender.push({ type: "text", content: w });
        }
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      elementsToRender.push({ type: "element", node: node.cloneNode(true) });
    }
  });

  const interval = setInterval(() => {
    if (currentIndex >= elementsToRender.length) {
      clearInterval(interval);
      // Finalize
      cursorNode.remove();
      footerNode.classList.remove("hidden");
      setupCitationListeners();
      scrollToBottom();
      
      // Seed newly made chat into memory so it persists during switches!
      if (State.activeChatId.startsWith("new-chat-")) {
        // Update Title in Seeds
        const firstSeed = RECENT_CHATS_SEEDS.find(s => s.id === State.activeChatId);
        if (firstSeed) {
          firstSeed.title = userQuery.length > 25 ? userQuery.substring(0, 25) + "..." : userQuery;
          renderRecentChatsList();
        }
        
        CHATS_DATA[State.activeChatId] = [
          { role: "user", content: userQuery },
          { role: "assistant", content: answerHtml, sources: ["wikipedia"] }
        ];
      }
      return;
    }

    const token = elementsToRender[currentIndex];
    if (token.type === "text") {
      const txtNode = document.createTextNode(token.content);
      targetBlock.insertBefore(txtNode, cursorNode);
    } else if (token.type === "element") {
      // Append complete structures (tags, anchors, citations) beautifully
      targetBlock.insertBefore(token.node, cursorNode);
    }
    
    currentIndex++;
    scrollToBottom();
  }, 45); // Fluid typing rate
}

function scrollToBottom() {
  DOM.chatScroller.scrollTop = DOM.chatScroller.scrollHeight;
}

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ==========================================================================
// FULL-SCREEN ADVANCED VOICE INTERACTIVE OVERLAY & CANVAS PHYSICS WAVE
// ==========================================================================

let canvasContext = null;
let animationFrameId = null;
let audioContext = null;
let audioAnalyser = null;
let microphoneStream = null;

function openVoiceOverlay() {
  State.voiceModeActive = true;
  DOM.voiceOverlay.classList.remove("hidden");
  setTimeout(() => {
    DOM.voiceOverlay.classList.add("active");
  }, 10);
  
  DOM.voiceSubtitleText.textContent = "Listening to ambient audio...";
  DOM.voiceStatusText.textContent = "Advanced Voice";
  
  initVoiceWaveCanvas();
}

function closeVoiceOverlay() {
  State.voiceModeActive = false;
  DOM.voiceOverlay.classList.remove("active");
  
  // Shutdown Audio Analysis
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (microphoneStream) {
    microphoneStream.getTracks().forEach(track => track.stop());
  }
  if (audioContext) {
    audioContext.close();
  }
  
  audioContext = null;
  audioAnalyser = null;
  microphoneStream = null;
  
  setTimeout(() => {
    DOM.voiceOverlay.classList.add("hidden");
  }, 500);
}

function initVoiceWaveCanvas() {
  const canvas = document.getElementById("voice-wave-canvas");
  canvasContext = canvas.getContext("2d");
  
  // Set resolution scale
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvasContext.scale(dpr, dpr);
  
  // Try connecting Web Audio microphone for dynamic interaction!
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        microphoneStream = stream;
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioAnalyser = audioContext.createAnalyser();
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(audioAnalyser);
        audioAnalyser.fftSize = 256;
        
        drawDynamicVocalWave(true);
      })
      .catch(err => {
        console.warn("Microphone access denied/failed. Falling back to premium synthetic ambient visualizer:", err);
        drawDynamicVocalWave(false);
      });
  } else {
    drawDynamicVocalWave(false);
  }
}

// Organic particle wave rendering utilizing physics and trignometry
function drawDynamicVocalWave(useMic) {
  const canvas = document.getElementById("voice-wave-canvas");
  if (!canvas) return;
  const width = canvas.width / (window.devicePixelRatio || 1);
  const height = canvas.height / (window.devicePixelRatio || 1);
  
  let dataArray = null;
  if (useMic && audioAnalyser) {
    const bufferLength = audioAnalyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
  }
  
  let frame = 0;
  
  function render() {
    if (!State.voiceModeActive) return;
    
    canvasContext.clearRect(0, 0, width, height);
    
    // Get audio data if mic is active
    let volumeScale = 1;
    if (useMic && audioAnalyser && !State.microphoneMuted) {
      audioAnalyser.getByteFrequencyData(dataArray);
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i];
      }
      // Compute average volume
      const average = sum / dataArray.length;
      volumeScale = 0.5 + (average / 60); // dynamic scale from 0.5 to 2.5
    } else {
      // Synthetic ambient pulsation
      volumeScale = 1 + Math.sin(frame * 0.05) * 0.25;
    }
    
    frame++;
    
    // Center coordinates
    const cx = width / 2;
    const cy = height / 2;
    const baseRadius = 60 * volumeScale;
    
    // Draw 3 layers of fluid wave circles with distinct offsets and colors
    drawWaveCircle(cx, cy, baseRadius, frame, "#00f2fe", 0.02, 10, 0.4); // Cyan
    drawWaveCircle(cx, cy, baseRadius - 10, frame + 100, "#10a37f", 0.015, 8, 0.5); // Emerald Green
    drawWaveCircle(cx, cy, baseRadius + 15, frame + 250, "#e040fb", 0.025, 12, 0.3); // Magenta
    
    animationFrameId = requestAnimationFrame(render);
  }
  
  render();
}

function drawWaveCircle(cx, cy, r, frame, color, speed, complexity, opacity) {
  canvasContext.save();
  canvasContext.beginPath();
  canvasContext.strokeStyle = color;
  canvasContext.lineWidth = 2.5;
  canvasContext.globalAlpha = opacity;
  canvasContext.shadowBlur = 15;
  canvasContext.shadowColor = color;
  
  const numPoints = 120;
  
  for (let i = 0; i <= numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    // Layered trigonometric displacement for organic wave deforming
    const offset = Math.sin(angle * complexity + frame * speed) * 8 + 
                   Math.cos(angle * (complexity / 2) - frame * speed * 0.8) * 4;
    const radius = r + offset;
    
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    
    if (i === 0) {
      canvasContext.moveTo(x, y);
    } else {
      canvasContext.lineTo(x, y);
    }
  }
  
  canvasContext.closePath();
  canvasContext.stroke();
  canvasContext.restore();
}

// ==========================================================================
// REVIEW MODE SIMULATOR
// ==========================================================================
function simulateParsingReviewHighlights(contentBlock) {
  const textElements = contentBlock.querySelectorAll("p, li");
  
  if (textElements.length > 0) {
    let count = 0;
    Array.from(textElements).forEach((el) => {
      // Skip very short text, headers, or lines with citations to avoid breaking layout
      if (el.textContent.length < 20 || el.querySelector("a")) return;
      
      const originalText = el.innerHTML;
      
      // Inject some verified green ticks for realism before wrapping
      const textWithTick = count % 2 === 0 ? originalText : originalText + '<span class="highlight-green-tick" title="Verified by AI fact-checker"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>';

      if (count % 3 === 0) {
        el.innerHTML = `<span class="highlight-red" data-review-type="error" title="Click to view verification issue">${textWithTick}</span>`;
      } else if (count % 3 === 1) {
        el.innerHTML = `<span class="highlight-yellow" data-review-type="inference" title="Click to inspect AI inference">${textWithTick}</span>`;
      } else {
        el.innerHTML = `<span class="highlight-blue" data-review-type="assumption" title="Click to manage assumption">${textWithTick}</span>`;
      }
      count++;
    });
  }
}

function openRightSidebar() {
  DOM.rightSidebar.classList.remove("closed");
  
  // Simulate fetching document source
  DOM.readerTitle.textContent = "Loading source...";
  DOM.readerMeta.textContent = "Verifying...";
  DOM.readerBody.innerHTML = `<p style="text-align:center; margin-top:20px; opacity:0.5;">Finding the exact match...</p>`;
  
  setTimeout(() => {
    DOM.readerTitle.textContent = "Quantum Computing foundations";
    DOM.readerMeta.textContent = "en.wikipedia.org/wiki/Quantum_computing";
    DOM.readerBody.innerHTML = `
      <p>Quantum computing is a rapidly-evolving technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers.</p>
      <p class="highlight-red">Instead of bits which store 0 or 1, quantum machines use <strong>qubits</strong>. Qubits operate under two main principles:</p>
      <ul>
        <li>Superposition: The ability to exist in multiple logical states simultaneously.</li>
        <li>Entanglement: A secure link where state change in one qubit instantly correlates with another, regardless of spatial distance.</li>
      </ul>
      <p>This allows computational processing speeds that scale exponentially for encryption audits and chemical modeling.</p>
    `;
    
    // Simulate scroll to highlight
    const highlight = DOM.readerBody.querySelector(".highlight-red");
    if (highlight) {
      setTimeout(() => {
        highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, 800);
}
