/*
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this file to update the website.
 * ─────────────────────────────────────────────────────────────
 *  Everything on the page is rendered from this object, so you
 *  never need to touch the HTML to add a job, certificate, skill
 *  or article.
 *
 *  • Any list left empty ([]) hides its section automatically.
 *  • Photos live in assets/img/.
 */
window.SITE = {
  name: "Ifelolu David Oladimeji",
  shortName: "Ifelolu David",
  initials: "ID",
  role: "AI & Data Analytics Solutions Architect",
  tagline:
    "I architect secure, scalable AI and data platforms on AWS — and turn them into measurable business outcomes.",
  location: "Lagos, Nigeria · Open to global & remote roles",
  photo: "assets/img/profile.jpg",
  aboutPhoto: "assets/img/candid.jpg",
  resume: "", // e.g. "assets/Ifelolu-David-CV.pdf" — adds a "Download CV" button
  email: "ifelolud@gmail.com",

  // Shown as a badge in the hero.
  recognition: {
    title: "AWS Community Builder",
    image: "assets/img/badges/aws-community-builder.png",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/ifelolu-david/",
    medium: "https://medium.com/@ifeloludavid",
    github: "https://github.com/IfeloluDavid",
    youtube: "https://www.youtube.com/@ifeloludavid",
    instagram: "https://www.instagram.com/i.daveed/",
  },

  about: [
    "I'm a certified AWS Solutions Architect with a track record of designing secure, scalable, high-performance cloud and hybrid infrastructure. Today I lead the architecture of end-to-end AI and data analytics solutions at Digitspots Solutions, turning customer problems across multiple sectors into production-ready systems.",
    "My work spans the full stack of modern cloud: generative and agentic AI, event-driven and serverless design, ETL/ELT pipelines and data warehousing, and DevOps automation. I apply security-by-design throughout — least-privilege identity, network isolation, encryption, monitoring and logging — so that what I build is safe to scale.",
    "I hold a B.Sc. in Computer Science from Redeemer's University (4.60/5.00) and have earned four AWS certifications, two at Professional level, in under two years. I'm an AWS Community Builder, and I learn in public: every build becomes a write-up on Medium or a hands-on tutorial on my YouTube channel, Cloud with Dave, so the knowledge compounds for me and for the engineers who learn from it.",
  ],

  highlights: [
    { value: "4×", label: "AWS Certified, incl. 2 Professional" },
    { value: "AWS", label: "Community Builder" },
    { value: "2", label: "Client systems taken to production on AWS in 2026" },
    { value: "75%", label: "Faster decision-making delivered through analytics" },
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      role: "AI & Data Analytics Solutions Architect",
      company: "Digitspots Solutions Limited",
      period: "Jun 2025 — Present",
      location: "Lagos, Nigeria",
      points: [
        "Lead the architecture of end-to-end AI and data analytics solutions, integrating cloud and off-cloud components to meet business, operational and regulatory requirements.",
        "Partner with Business Development and Solution Architecture teams to conceptualise, design and build industry-focused AI solutions for key customer use cases across multiple sectors.",
        "Helping establish and structure a new Software Development Unit with the DevOps team, focused on AI-driven applications for small businesses and startups.",
        "Designed and shipped a production order and delivery platform for a gas distribution business on ECS Fargate, fully defined in Terraform and deployed through GitHub Actions with OIDC (no long-lived AWS keys).",
        "Modernised a university's academic data layer from on-prem SQL Server and .NET Framework to Amazon RDS and .NET 8 on ECS Fargate, encrypted with KMS and accessed only through Secrets Manager.",
        "Drive solution ideation, prototyping and deployment of intelligent systems, ensuring scalability, performance and seamless integration into customer environments.",
      ],
    },
    {
      role: "Technical Data Analyst",
      company: "Redemption City PMD",
      period: "Jul 2023 — Present",
      location: "Mowe, Nigeria",
      points: [
        "Lead data initiatives that support strategic decision-making using Python, SQL, Excel, Power BI (DAX) and Tableau, including geospatial maps.",
        "Delivered insights that reduced decision-making turnaround by 75%, improving operational efficiency across the organisation.",
        "Built data models, interactive dashboards and reports that guide leadership on growth opportunities.",
        "Own the collection, extraction, cleaning and transformation of central database data for accuracy, consistency and analysis-readiness.",
      ],
    },
  ],

  // ── Certifications (newest first) ──────────────────────────
  certifications: [
    {
      badge: "assets/img/badges/genai-developer-pro.png",
      name: "AWS Certified Generative AI Developer – Professional",
      level: "Professional",
      issuer: "Amazon Web Services",
      date: "May 2026",
      summary: "Production GenAI on AWS: foundation-model integration, agentic AI, prompt engineering, cost and performance optimisation, security and Responsible AI.",
      credentialUrl: "https://www.credly.com/badges/cbe89b1f-1959-47a1-8d14-7328c1ea882c/public_url",
    },
    {
      badge: "assets/img/badges/ai-practitioner.png",
      name: "AWS Certified AI Practitioner",
      level: "Foundational",
      issuer: "Amazon Web Services",
      date: "Mar 2026",
      summary: "AI, ML and generative AI concepts on AWS, choosing the right technique for each use case and applying it responsibly.",
      credentialUrl: "https://www.credly.com/badges/e6b7559c-b459-4977-a026-9a0fc37f3fbf/public_url",
    },
    {
      badge: "assets/img/badges/devops-pro.png",
      name: "AWS Certified DevOps Engineer – Professional",
      level: "Professional",
      issuer: "Amazon Web Services",
      date: "Nov 2025",
      summary: "Continuous delivery on AWS, automating resilient infrastructure deployments, enforcing policy, monitoring and event management.",
      credentialUrl: "https://www.credly.com/badges/2878ae68-ac8d-4f0f-90fc-13a684ad6dce/public_url",
    },
    {
      badge: "assets/img/badges/solutions-architect-associate.png",
      name: "AWS Certified Solutions Architect – Associate",
      level: "Associate",
      issuer: "Amazon Web Services",
      date: "Dec 2024",
      summary: "Designing well-architected distributed systems that are secure, scalable, resilient, efficient and fault-tolerant.",
      credentialUrl: "https://www.credly.com/badges/62b5ab6a-c517-41e8-8b2f-db8bb0439e0a/public_url",
    },
  ],

  // ── Skills ─────────────────────────────────────────────────
  skills: [
    {
      group: "AI & Machine Learning",
      // Thumbnails live in assets/img/videos/<id>.jpg
    items: [
        "Generative AI on AWS",
        "Amazon Bedrock",
        "Agentic AI",
        "Foundation model integration",
        "Prompt engineering",
        "Machine learning",
        "Responsible AI",
        "Amazon Rekognition",
        "Amazon Q & PartyRock",
      ],
    },
    {
      group: "Cloud Architecture & DevOps",
      // Thumbnails live in assets/img/videos/<id>.jpg
    items: [
        "AWS Well-Architected",
        "Hybrid & multi-AZ design",
        "Serverless & microservices",
        "Event-driven architecture",
        "Amazon EKS & ECR",
        "EC2 & Auto Scaling",
        "Amazon ECS on Fargate",
        "Terraform & CloudFormation",
        "GitHub Actions CI/CD",
        "CodePipeline, CodeBuild & Beanstalk",
        "AWS SAM",
        "Amazon RDS (PostgreSQL, SQL Server)",
        ".NET modernisation with AWS Transform",
      ],
    },
    {
      group: "Data Engineering & Analytics",
      // Thumbnails live in assets/img/videos/<id>.jpg
    items: [
        "Python",
        "SQL",
        "ETL / ELT pipeline design",
        "Data warehousing",
        "Data modelling",
        "Amazon EMR & big data",
        "AWS Glue & Athena",
        "Amazon Redshift",
        "Kinesis & DynamoDB",
        "EventBridge, SES & SNS",
        "Amazon OpenSearch",
        "Power BI (DAX)",
        "Tableau & geospatial maps",
      ],
    },
    {
      group: "Cloud Security",
      // Thumbnails live in assets/img/videos/<id>.jpg
    items: [
        "Security by design",
        "IAM & least privilege",
        "OIDC federation, zero static keys",
        "AWS KMS & Secrets Manager",
        "Network security",
        "Encryption",
        "Monitoring & logging",
        "Secure deployments",
      ],
    },
  ],

  // ── Leadership & community ─────────────────────────────────
  leadership: [
    {
      title: "AWS Community Builder",
      body: "Selected by AWS for the Community Builders programme, which recognises technical practitioners who share knowledge and help others learn AWS through content, talks and community work.",
    },
    {
      title: "Architecture lead for AI & data solutions",
      body: "At Digitspots I own end-to-end solution architecture, guiding technical decisions across business development, solution architecture and DevOps teams, and shaping proposals for customers in multiple sectors.",
    },
    {
      title: "Building a new Software Development Unit",
      body: "Working with the DevOps team to establish and structure a unit dedicated to AI-driven applications for small businesses and startups, defining how it is organised and what it builds.",
    },
    {
      title: "Leading data-driven decision making",
      body: "At Redemption City PMD I lead the organisation's data initiatives, giving leadership dashboards and recommendations that cut decision turnaround by 75%.",
    },
    {
      title: "Educator: Cloud with Dave",
      body: "I run Cloud with Dave, a YouTube channel of hands-on AWS tutorials, and write in-depth guides on Medium (several republished by AWS Tip) to help cloud engineers and data professionals build practical skills.",
    },
  ],

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      featured: true,
      title: "Order & delivery platform for a gas distributor",
      context: "Client engagement · DevOps · 2026",
      summary:
        "A production system that staff use daily to take orders, track gas cylinder stock and dispatch drivers. Every push to main is tested, migrated and deployed automatically.",
      points: [
        "ALB → ECS Fargate → RDS PostgreSQL across two AZs, with chained security groups so only the load balancer is public.",
        "All infrastructure in Terraform; GitHub Actions authenticates with OIDC, so no AWS access keys exist anywhere.",
        "Secrets generated by Terraform into Secrets Manager; CloudWatch dashboard and four alarms routed through SNS.",
        "Diagnosed five real production failures from CloudTrail, container logs and ECR errors, then hardened the pipeline to migrate before deploying.",
      ],
      tags: ["Terraform", "ECS Fargate", "RDS", "GitHub Actions", "OIDC"],
      url: "https://ifeloludavid.medium.com/how-i-took-a-gas-distribution-business-live-on-aws-fargate-8c3841d0b5ea",
    },
    {
      featured: true,
      title: "University data platform modernisation",
      context: "Client engagement · Microsoft Workloads · 2026",
      summary:
        "Moved a university's academic records off an exposed on-prem SQL Server and onto a secure AWS data foundation, alongside a .NET Framework 4.8 → .NET 8 upgrade.",
      points: [
        "Amazon RDS for SQL Server, encrypted at rest with KMS and reachable only from the application's security group.",
        "Credentials resolved at runtime from Secrets Manager and scoped by IAM to a single ECS task; TLS enforced in transit.",
        "Used AWS Transform for the EF6 → EF Core 8 code conversion, and made the data-migration strategy call that no tool can make.",
        "Set explicit log retention and documented the remaining trade-offs openly, such as single-AZ for this phase.",
      ],
      tags: ["RDS SQL Server", "KMS", "Secrets Manager", ".NET 8", "AWS Transform"],
      url: "https://ifeloludavid.medium.com/from-legacy-sql-server-to-a-modern-data-foundation-on-aws-76d69b763126",
    },
    {
      title: "Serverless ETL pipeline",
      summary:
        "Raw data lands in S3, AWS Glue catalogues and transforms it, and Athena queries the results, with production practices for monitoring and cost.",
      tags: ["S3", "Glue", "Athena", "Lambda"],
      url: "https://awstip.com/building-modern-etl-pipelines-on-aws-a-practical-guide-for-cloud-engineers-9f47c2d6396d",
    },
    {
      title: "Real-time data pipeline",
      summary:
        "Streaming events ingested with Kinesis Data Streams, processed in Lambda and persisted to DynamoDB, fully automated and serverless.",
      tags: ["Kinesis", "Lambda", "DynamoDB"],
      url: "https://ifeloludavid.medium.com/building-a-real-time-data-pipeline-with-aws-kinesis-lambda-and-dynamodb-my-journey-%EF%B8%8F-972773f2d777",
    },
    {
      title: "Finance tracker",
      summary:
        "Users log expenses, set monthly budgets, see spending charts and get alerts when they overspend. Serverless on AWS with a CI/CD pipeline.",
      tags: ["Serverless", "DynamoDB", "CI/CD"],
      url: "https://awstip.com/managing-personal-finances-can-be-chaotic-but-building-a-solution-for-it-thats-the-fun-part-e305b7b0f9dc",
    },
    {
      title: "Dave's Drive cloud storage",
      summary:
        "A scalable, secure file storage system with uploads, retrieval and access management built from managed AWS services.",
      tags: ["S3", "Lambda", "API Gateway", "Cognito"],
      url: "https://ifeloludavid.medium.com/daves-drive-aws-powered-cloud-storage-system-d4ca25647aca",
    },
    {
      title: "Serverless face detection",
      summary:
        "An S3 upload triggers Lambda, which calls Amazon Rekognition to detect faces and emails the results through SNS.",
      tags: ["Rekognition", "Lambda", "S3", "SNS"],
      url: "https://awstip.com/face-detection-with-amazon-rekognition-and-aws-lambda-43bf6b61842b",
    },
    {
      title: "Weather info fetcher",
      summary:
        "Enter a city and get live weather in moments: a cloud-native app that orchestrates API Gateway and Lambda with a public weather API.",
      tags: ["API Gateway", "Lambda", "S3"],
      url: "https://awstip.com/building-a-serverless-weather-info-fetcher-with-aws-8fe8772672aa",
    },
  ],

  // ── Writing ────────────────────────────────────────────────
  articles: [
    { title: "From Legacy SQL Server to a Modern Data Foundation on AWS", date: "Sep 2026", url: "https://ifeloludavid.medium.com/from-legacy-sql-server-to-a-modern-data-foundation-on-aws-76d69b763126" },
    { title: "How I Took a Gas Distribution Business Live on AWS Fargate", date: "Aug 2026", url: "https://ifeloludavid.medium.com/how-i-took-a-gas-distribution-business-live-on-aws-fargate-8c3841d0b5ea" },
    { title: "Amazon OpenSearch Service: The Engine Behind Search, Logs, and Real-Time Dashboards", date: "Dec 2025", url: "https://ifeloludavid.medium.com/amazon-opensearch-service-the-engine-behind-search-logs-and-real-time-dashboards-4d8cbb4b0c54" },
    { title: "Building Modern ETL Pipelines on AWS: A Practical Guide for Cloud Engineers", date: "Dec 2025 · AWS Tip", url: "https://awstip.com/building-modern-etl-pipelines-on-aws-a-practical-guide-for-cloud-engineers-9f47c2d6396d" },
    { title: "I Built a Finance Tracker with AWS: CI/CD, Serverless, DynamoDB & More", date: "Apr 2025 · AWS Tip", url: "https://awstip.com/managing-personal-finances-can-be-chaotic-but-building-a-solution-for-it-thats-the-fun-part-e305b7b0f9dc" },
    { title: "Dave's Drive: AWS-Powered Cloud Storage System", date: "Mar 2025", url: "https://ifeloludavid.medium.com/daves-drive-aws-powered-cloud-storage-system-d4ca25647aca" },
    { title: "Face Detection with Amazon Rekognition and AWS Lambda", date: "Jan 2025 · AWS Tip", url: "https://awstip.com/face-detection-with-amazon-rekognition-and-aws-lambda-43bf6b61842b" },
    { title: "Building a Serverless Weather Info Fetcher with AWS", date: "Jan 2025 · AWS Tip", url: "https://awstip.com/building-a-serverless-weather-info-fetcher-with-aws-8fe8772672aa" },
    { title: "Building Highly Available Web Applications with AWS SimuLearn", date: "Nov 2024", url: "https://ifeloludavid.medium.com/building-highly-available-web-applications-with-aws-simulearn-173b13efba45" },
    { title: "Unlocking Big Data Potential with Amazon Redshift", date: "Oct 2024", url: "https://ifeloludavid.medium.com/unlocking-big-data-potential-with-amazon-redshift-capabilities-and-real-world-use-cases-5b0f5d284de8" },
    { title: "Building a Real-Time Data Pipeline with AWS Kinesis, Lambda, and DynamoDB", date: "Medium", url: "https://ifeloludavid.medium.com/building-a-real-time-data-pipeline-with-aws-kinesis-lambda-and-dynamodb-my-journey-%EF%B8%8F-972773f2d777" },
    { title: "Human Creativity and AI: The Infinity of Imagination, Knowledge and Experience", date: "LinkedIn", url: "https://www.linkedin.com/pulse/human-creativity-ai-infinity-imagination-knowledge-ifelolu-oladimeji" },
  ],

  // ── Videos (YouTube: Cloud with Dave) ───────────────────────
  videos: {
    channel: "https://www.youtube.com/@ifeloludavid",
    summary: "26 hands-on tutorials, including a 7-part AWS SAM course",
    // Thumbnails live in assets/img/videos/<id>.jpg
    items: [
      { id: "qShPG8j0n-I", title: "Generative AI on AWS (Part 1): Building a Real-World Knowledge Base" },
      { id: "nzLSHQfzkOE", title: "How I Built an AI Assistant for a Company Using Amazon Q" },
      { id: "m2Gmosxmz4U", title: "End-to-End DevOps Pipeline on AWS: Node.js, CodeBuild, CodePipeline, Beanstalk" },
      { id: "f8ckMuXgzco", title: "AWS SAM course, Module 1: Creating Your First SAM App" },
      { id: "pENlhT8g1YM", title: "Real-Time Email Automation on AWS: DynamoDB Streams + Lambda + SES" },
      { id: "vg0d99oCNlc", title: "How to Pass AWS SAA on Your First Try, Even as a Beginner" },
    ],
  },

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree: "B.Sc. Computer Science · 4.60 / 5.00",
      school: "Redeemer's University, Ede",
      period: "2018 — 2021",
      detail: "Artificial Intelligence, Machine Learning, Data Mining, Computer Programming, Design & Analysis of Algorithms.",
    },
  ],

  // ── Beyond work ────────────────────────────────────────────
  personal: "",
};
