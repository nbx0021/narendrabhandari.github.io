export interface ProjectDetail {
  title: string;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  fallbackImage?: string;
  tags: { label: string; color: string }[];
  techStack: string[];
  details?: ProjectDetail[];
  liveUrl?: string;
  githubUrl: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: "finbert",
    title: "FinBERT Sentiment Engine",
    description:
      "AI-Powered Financial Data Pipeline integrating NewsAPI, Hugging Face models, and Supabase for semantic search.",
    image: "/images/finbert_thumbnail.png",
    fallbackImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800",
    tags: [
      { label: "NLP", color: "secondary" },
      { label: "Data Pipeline", color: "accent" },
    ],
    techStack: ["Python", "Hugging Face", "Supabase", "pgvector"],
    details: [
      {
        title: "Resilient Data Ingestion",
        text: "Engineered a fault-tolerant extraction layer integrating NewsAPI and GNews RSS feeds, implementing automated failover logic and defensive parsing to bypass strict free-tier rate limits and ensure continuous ingestion of messy web data.",
      },
      {
        title: "AI-Enriched Medallion Architecture",
        text: "Orchestrated a Bronze/Silver/Gold pipeline that runs three specialized Hugging Face models natively on GPU, utilizing FinBERT for tone detection and BERT-NER to map extracted company names directly to regional NSE/NYSE stock tickers.",
      },
      {
        title: "Semantic Search Implementation",
        text: "Stored structured outputs and vector embeddings in Supabase (PostgreSQL), utilizing the pgvector extension and custom RPC functions to enable cosine-distance semantic search, replacing rigid SQL keyword queries with conceptual context matching.",
      },
      {
        title: "Cross-Domain Financial Analytics",
        text: "Developed daily synchronization tasks with yfinance to merge unstructured NLP sentiment data with structured end-of-day stock prices, building complex SQL views to generate daily 'Market Mood' indicators and price-correlation signals.",
      },
    ],
    githubUrl: "https://github.com/nbx0021/finbert-sentiment-engine",
    linkLabel: "View Github",
  },
  {
    id: "arth-insight",
    title: "Arth-Insight",
    description:
      "A Financial Analytics Engine utilizing dbt for transformation, BigQuery for warehousing, and Docker for containerization.",
    image: "/images/arth-insight.png",
    tags: [
      { label: "Fintech", color: "primary" },
      { label: "Engineering", color: "accent" },
    ],
    techStack: ["dbt", "BigQuery", "Docker"],
    liveUrl: "https://arth-insight-ding.onrender.com/",
    githubUrl: "https://github.com/nbx0021/arth-insight",
    linkLabel: "Live Demo",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Data Pipeline",
    description:
      "In-Memory Lakehouse architecture processing transaction data with PySpark and Databricks.",
    image: "/images/e_commerce.png",
    tags: [
      { label: "Big Data", color: "secondary" },
      { label: "Lakehouse", color: "purple" },
    ],
    techStack: ["PySpark", "Databricks", "Delta Lake"],
    githubUrl:
      "https://github.com/nbx0021/Ecommerce-Data-Analysis-with-PySpark-",
    linkLabel: "View Demo",
  },
  {
    id: "youtube",
    title: "YouTube Velocity v4.0",
    description:
      "Automated data extraction and trend analysis pipeline using GitHub Actions and BigQuery.",
    image: "/images/youtube.png",
    tags: [{ label: "Automation", color: "red" }],
    techStack: ["Python", "GitHub Actions", "BigQuery"],
    liveUrl: "https://youtube-velocity-tracker.streamlit.app/",
    githubUrl: "https://github.com/nbx0021/youtube-analytics-pipeline",
    linkLabel: "Live demo",
  },
  {
    id: "crypto",
    title: "Crypto Whale Tracker",
    description:
      "Real-time streaming pipeline processing continuous Binance WebSocket trade data.",
    image: "/images/crypto-whale.png",
    tags: [
      { label: "Streaming", color: "primary" },
      { label: "Real-Time", color: "purple" },
    ],
    techStack: ["PySpark", "Redpanda", "PostgreSQL", "Docker"],
    details: [
      {
        title: "Real-Time Data Ingestion",
        text: "Architected continuous ingestion connecting Binance WebSocket API via Redpanda to decouple downstream processing.",
      },
      {
        title: "Distributed Stream Processing",
        text: 'Engineered PySpark Structured Streaming for live topic consumption with tumbling 1-min windows to detect "whale" anomalies.',
      },
      {
        title: "Full-Stack Data Delivery",
        text: "Integrated PostgreSQL with Django, utilizing Django Channels to push live upserts and alerts to a frontend UI.",
      },
      {
        title: "Infrastructure Optimization",
        text: "Containerized via Docker Compose, designing hybrid-execution to run memory-intensive PySpark workloads natively, bypassing OOM restraints.",
      },
    ],
    githubUrl: "https://github.com/nbx0021/crypto-whale-tracker",
    linkLabel: "View Github",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Control Tower",
    description:
      "End-to-End automated Medallion Architecture pipeline navigating data extraction, processing, and cloud ingestion.",
    image: "/images/supply-chain.png",
    tags: [
      { label: "Data Engineering", color: "accent" },
      { label: "Data Pipeline", color: "yellow" },
    ],
    techStack: ["Airflow", "PySpark", "dbt", "Neon"],
    details: [
      {
        title: "Pipeline Orchestration",
        text: "Engineered Medallion Architecture (Bronze/Silver/Gold) orchestrated by Apache Airflow (TaskFlow API) to seamlessly manage data pipelines.",
      },
      {
        title: "Distributed Processing",
        text: "Processed 180k+ records using PySpark & Delta Lake, avoiding OOM errors via tuned shuffle partitions.",
      },
      {
        title: "Cloud Data Modeling",
        text: "Built Python/SQLAlchemy ingestion scripts to push Gold-layer data to Neon Serverless PostgreSQL and dbt models to resolve schema drift.",
      },
      {
        title: "Reliability & Security",
        text: "Implemented Airflow sensors for readiness, Pytest for Spark data validation, and secured credentials management.",
      },
    ],
    githubUrl: "https://github.com/nbx0021/supply-chain-control-tower",
    linkLabel: "View Github",
  },
  {
    id: "business360",
    title: "Business 360",
    description:
      "Comprehensive Brick & Mortar and E-commerce dashboard offering 360-degree business insights.",
    image: "/images/financial view.png",
    tags: [
      { label: "Business Insights", color: "primary" },
      { label: "Power Query", color: "accent" },
    ],
    techStack: ["Power BI", "DAX", "SQL"],
    liveUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiN2YwNjMyMDgtMDRjMC00ZDYwLTk0Y2YtYWZmMGM0MDM0MDk2IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    githubUrl: "https://github.com/nbx0021/Business-Insights-360",
    linkLabel: "View Dashboard",
  },
  {
    id: "shield",
    title: "Shield Insurance",
    description:
      "Risk assessment and policy analysis dashboard empowering data-driven insurance strategies.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
    tags: [
      { label: "Insurance", color: "primary" },
      { label: "Power Query", color: "accent" },
      { label: "Visualizations", color: "secondary" },
    ],
    techStack: ["Excel", "Power BI", "SQL"],
    liveUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNzRiODI5OWQtZDA0OS00OGZmLTg2NWMtNGIyNzM5MjkyNGJhIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    githubUrl: "https://github.com/nbx0021/Shield-Insurance-Analysis",
    linkLabel: "View Report",
  },
  {
    id: "goodcabs",
    title: "Good-cabs Analysis",
    description:
      "Transport data analysis optimizing route efficiency and fleet allocation.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800",
    tags: [
      { label: "Python Notebook", color: "accent" },
      { label: "Visualizations", color: "secondary" },
    ],
    techStack: ["Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/nbx0021/Goodcabs-Data-Analysis-Project",
    linkLabel: "View Notebook",
  },
];
