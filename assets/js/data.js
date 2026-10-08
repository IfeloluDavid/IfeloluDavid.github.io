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

  links: {
    linkedin: "https://www.linkedin.com/in/ifelolu-david/",
    medium: "https://medium.com/@ifeloludavid",
    github: "https://github.com/IfeloluDavid",
    instagram: "https://www.instagram.com/i.daveed/",
  },

  about: [
    "I'm a certified AWS Solutions Architect with a track record of designing secure, scalable, high-performance cloud and hybrid infrastructure. Today I lead the architecture of end-to-end AI and data analytics solutions at Digitspots Solutions, turning customer problems across multiple sectors into production-ready systems.",
    "My work spans the full stack of modern cloud: generative and agentic AI, event-driven and serverless design, ETL/ELT pipelines and data warehousing, and DevOps automation. I apply security-by-design throughout — least-privilege identity, network isolation, encryption, monitoring and logging — so that what I build is safe to scale.",
    "I hold a B.Sc. in Computer Science from Redeemer's University (4.60/5.00) and have earned four AWS certifications, two at Professional level, in under two years. I learn in public: every build becomes a write-up on Medium, so the knowledge compounds for me and for the engineers who read it.",
  ],

  highlights: [
    { value: "4×", label: "AWS Certified, incl. 2 Professional" },
    { value: "75%", label: "Faster decision-making delivered through analytics" },
    { value: "4.60/5", label: "B.Sc. Computer Science" },
    { value: "3+ yrs", label: "Building data & cloud solutions" },
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
      name: "AWS Certified Generative AI Developer – Professional",
      level: "Professional",
      issuer: "Amazon Web Services",
      date: "May 2026",
      summary: "Production GenAI on AWS: foundation-model integration, agentic AI, prompt engineering, cost and performance optimisation, security and Responsible AI.",
      credentialUrl: "https://www.credly.com/badges/cbe89b1f-1959-47a1-8d14-7328c1ea882c/public_url",
    },
    {
      name: "AWS Certified AI Practitioner",
      level: "Foundational",
      issuer: "Amazon Web Services",
      date: "Mar 2026",
      summary: "AI, ML and generative AI concepts on AWS, choosing the right technique for each use case and applying it responsibly.",
      credentialUrl: "https://www.credly.com/badges/e6b7559c-b459-4977-a026-9a0fc37f3fbf/public_url",
    },
    {
      name: "AWS Certified DevOps Engineer – Professional",
      level: "Professional",
      issuer: "Amazon Web Services",
      date: "Nov 2025",
      summary: "Continuous delivery on AWS, automating resilient infrastructure deployments, enforcing policy, monitoring and event management.",
      credentialUrl: "https://www.credly.com/badges/2878ae68-ac8d-4f0f-90fc-13a684ad6dce/public_url",
    },
    {
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
      items: [
        "Generative AI on AWS",
        "Agentic AI",
        "Foundation model integration",
        "Prompt engineering",
        "Machine learning",
        "Responsible AI",
        "Amazon Rekognition",
      ],
    },
    {
      group: "Cloud Architecture & DevOps",
      items: [
        "AWS Well-Architected",
        "Hybrid & multi-AZ design",
        "Serverless & microservices",
        "Event-driven architecture",
        "Amazon EKS & ECR",
        "EC2 & Auto Scaling",
        "CloudFormation (IaC)",
        "CI/CD automation",
      ],
    },
    {
      group: "Data Engineering & Analytics",
      items: [
        "Python",
        "SQL",
        "ETL / ELT pipeline design",
        "Data warehousing",
        "Data modelling",
        "Amazon EMR & big data",
        "Kinesis & DynamoDB",
        "Amazon OpenSearch",
        "Power BI (DAX)",
        "Tableau & geospatial maps",
      ],
    },
    {
      group: "Cloud Security",
      items: [
        "Security by design",
        "IAM & least privilege",
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
      title: "Teaching through writing",
      body: "I document what I build on Medium and LinkedIn, including a tutorial republished by AWS Tip, so other engineers can learn faster.",
    },
  ],

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "Real-time data pipeline",
      summary:
        "A fully automated, serverless pipeline that ingests streaming events with Kinesis Data Streams, processes them in Lambda and persists results to DynamoDB.",
      tags: ["Kinesis", "Lambda", "DynamoDB", "Serverless"],
      url: "https://ifeloludavid.medium.com/building-a-real-time-data-pipeline-with-aws-kinesis-lambda-and-dynamodb-my-journey-%EF%B8%8F-972773f2d777",
    },
    {
      title: "Serverless face detection",
      summary:
        "An S3 upload triggers Lambda, which calls Amazon Rekognition to detect faces and emails the results through SNS, with no servers to manage.",
      tags: ["Rekognition", "Lambda", "S3", "SNS"],
      url: "https://awstip.com/face-detection-with-amazon-rekognition-and-aws-lambda-43bf6b61842b",
    },
    {
      title: "Highly available web tier",
      summary:
        "A fault-tolerant web application using an Auto Scaling group behind an Application Load Balancer, spread across multiple Availability Zones.",
      tags: ["EC2 Auto Scaling", "ALB", "Multi-AZ"],
      url: "https://ifeloludavid.medium.com/building-highly-available-web-applications-with-aws-simulearn-173b13efba45",
    },
  ],

  // ── Writing ────────────────────────────────────────────────
  articles: [
    {
      title: "Amazon OpenSearch Service: The Engine Behind Search, Logs, and Real-Time Dashboards",
      date: "Medium · Dec 2025",
      url: "https://ifeloludavid.medium.com/amazon-opensearch-service-the-engine-behind-search-logs-and-real-time-dashboards-4d8cbb4b0c54",
    },
    {
      title: "Building Highly Available Web Applications with AWS SimuLearn",
      date: "Medium · Nov 2024",
      url: "https://ifeloludavid.medium.com/building-highly-available-web-applications-with-aws-simulearn-173b13efba45",
    },
    {
      title: "Building a Real-Time Data Pipeline with AWS Kinesis, Lambda, and DynamoDB: My Journey",
      date: "Medium",
      url: "https://ifeloludavid.medium.com/building-a-real-time-data-pipeline-with-aws-kinesis-lambda-and-dynamodb-my-journey-%EF%B8%8F-972773f2d777",
    },
    {
      title: "Face Detection with Amazon Rekognition and AWS Lambda",
      date: "AWS Tip",
      url: "https://awstip.com/face-detection-with-amazon-rekognition-and-aws-lambda-43bf6b61842b",
    },
    {
      title: "Human Creativity and AI: The Infinity of Imagination, Knowledge and Experience",
      date: "LinkedIn",
      url: "https://www.linkedin.com/pulse/human-creativity-ai-infinity-imagination-knowledge-ifelolu-oladimeji",
    },
  ],

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
