# System Architecture: Review & Reasoning Application

This document outlines the proposed full-stack architecture required to power the dynamic features demonstrated in the ChatGPT Review & Reasoning frontend prototype.

## High-Level Architecture Diagram

The system follows a modern microservices architecture, utilizing a Retrieval-Augmented Generation (RAG) pipeline combined with a specialized verification engine.

```mermaid
flowchart TD
    subgraph Client [Client-Side Application]
        UI[Chat Interface Prototype]
        Overlay[Reasoning Map Canvas]
        Review[Inline Review & Edit System]
        UI --> Overlay
        UI --> Review
    end

    subgraph API [API Gateway & Orchestration]
        Gateway[API Gateway / Load Balancer]
        Orchestrator[Request Orchestrator]
        Gateway <--> Orchestrator
    end

    subgraph CoreAI [AI & Verification Services]
        LLM[Primary Generative LLM]
        Verifier[Fact Verification Engine]
        GraphGen[Reasoning Graph Generator]
        LLM <--> Verifier
        Verifier --> GraphGen
    end

    subgraph Data [Data & Retrieval Tier]
        VectorDB[(Vector Database)]
        DocStore[(Source Document Store)]
    end

    Client <-->|WebSockets / SSE| Gateway
    Orchestrator <--> LLM
    Verifier <--> VectorDB
    Verifier <--> DocStore
```

## Component Breakdown

### 1. Client-Side Application (Frontend)
*   **Chat Interface:** Handles user input, multi-turn conversational context, and streams the incoming HTML tokens.
*   **Inline Review & Edit System:** Parses the annotated HTML stream. Handles the state management for flags (red, yellow, green), interactive tooltips, and the "Compare" module to track user edits against original responses.
*   **Reasoning Map Canvas:** A dynamic layout engine that calculates positions and renders the D3-style graphs showing the relationships between inferences and their underlying sources.

### 2. API Gateway & Orchestrator
*   **API Gateway:** Manages rate limiting, authentication, and maintains persistent Server-Sent Events (SSE) connections with the client for streaming responses.
*   **Request Orchestrator:** The "traffic cop" that takes the user's prompt, passes it to the LLM, and intercepts the output to run it through the Verification Engine before streaming it back to the client.

### 3. AI & Verification Services
*   **Primary Generative LLM:** Generates the initial draft response and extracts key inferences/claims that need checking.
*   **Fact Verification Engine:** The core of the review system. It takes the LLM's claims, queries the Vector DB for semantic matches, and evaluates the evidence. It annotates the draft text with confidence scores:
    *   `[Green]`: Verified Data
    *   `[Yellow]`: Inferred / Anecdotal Data
    *   `[Red]`: Unverified / Contradictory Data
*   **Reasoning Graph Generator:** A microservice that structures the verification results into a logical node/edge JSON graph representing the logical steps taken to reach an inference.

### 4. Data & Retrieval Tier (RAG)
*   **Vector Database:** (e.g., Pinecone, Weaviate) Stores high-dimensional embeddings of all verified source material for rapid semantic similarity search.
*   **Source Document Store:** (e.g., S3, MongoDB) Holds the raw text and metadata (author, date, URL) of the source documents so the UI can display exact quotes and citations in the right sidebar.

---

## Data Flow Sequence

The following sequence diagram illustrates the step-by-step data flow when a user submits a prompt, demonstrating how the backend orchestrates the verification process and streams the results to the UI.

```mermaid
sequenceDiagram
    participant User
    participant UI as Client Interface
    participant API as Request Orchestrator
    participant LLM as Primary LLM
    participant Verifier as Fact Verifier
    participant DB as Vector DB & Sources

    User->>UI: Submits Query
    UI->>API: POST /chat/query (Streaming Request)
    API->>LLM: Generate Draft Response & Extract Claims
    LLM-->>API: Draft Output + Extracted Claims
    
    rect rgb(200, 220, 250)
        Note right of API: Asynchronous Verification Pipeline
        API->>Verifier: Validate Claims against Knowledge Base
        Verifier->>DB: Semantic Search for Evidence
        DB-->>Verifier: Verified Sources & Contradictions
        Verifier-->>API: Annotated Response (Red/Yellow/Green flags)
    end
    
    API->>UI: Stream Annotated HTML Response (SSE)
    UI-->>User: Displays Output with Inline Highlights

    User->>UI: Clicks "Show Reasoning Map"
    UI->>API: GET /reasoning/graph/{inference_id}
    API->>GraphGen: Construct Graph for inference
    GraphGen-->>API: Graph Nodes & Edges JSON
    API-->>UI: Return Graph JSON
    UI-->>User: Renders Canvas Overlay
```
