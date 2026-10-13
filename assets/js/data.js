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
  role: "AI & Machine Learning Engineer · AWS Solutions Architect",
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
    "I'm an AI & Machine Learning Engineer and certified AWS Solutions Architect with a track record of designing secure, scalable, high-performance cloud and hybrid infrastructure. At Digitspot Solutions I first led the architecture of end-to-end AI and data analytics solutions, and I now build and ship AI and cloud systems that turn customer problems into production-ready platforms.",
    "My work spans the full stack of modern cloud: generative and agentic AI, event-driven and serverless design, ETL/ELT pipelines and data warehousing, and DevOps automation. I apply security-by-design throughout — least-privilege identity, network isolation, encryption, monitoring and logging — so that what I build is safe to scale.",
    "I'm a First Class Computer Science graduate of Redeemer's University (4.60/5.00) and have earned four AWS certifications, two at Professional level, in under two years, building on a foundation in cybersecurity and data analytics that goes back to 2019. I'm an AWS Community Builder and a conference speaker, and I learn in public: every build becomes a write-up on Medium or a hands-on tutorial on my YouTube channel, Cloud with Dave, so the knowledge compounds for me and for the engineers who learn from it.",
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
      role: "AI & Machine Learning Engineer",
      company: "Digitspot Solutions Ltd",
      period: "Jan 2026 — Present",
      location: "Lagos, Nigeria",
      points: [
        "Design and build AI, machine learning and cloud solutions on AWS for customer use cases, from prototype to production.",
        "Designed and shipped a production order and delivery platform for a gas distribution business on ECS Fargate, fully defined in Terraform and deployed through GitHub Actions with OIDC (no long-lived AWS keys).",
        "Modernised a university's academic data layer from on-prem SQL Server and .NET Framework to Amazon RDS and .NET 8 on ECS Fargate, encrypted with KMS and accessed only through Secrets Manager.",
      ],
    },
    {
      role: "Data Analytics & Generative AI Solutions Architect",
      company: "Digitspot Solutions Ltd",
      period: "Jun 2025 — Apr 2026",
      location: "Lagos, Nigeria",
      points: [
        "Led the architecture of end-to-end AI and data analytics solutions, integrating cloud and off-cloud components to meet business, operational and regulatory requirements.",
        "Partnered with Business Development and Solution Architecture teams to conceptualise, design and build industry-focused AI solutions for key customer use cases across multiple sectors.",
        "Helped establish and structure a new Software Development Unit with the DevOps team, focused on AI-driven applications for small businesses and startups.",
        "Represented the company as a speaker at #Moonshot2025 alongside Tribe Networks and AWS, on de-risking disruption and funded innovation with AI.",
      ],
    },
    {
      role: "Cloud Educator & Content Creator",
      company: "Cloud with Dave (YouTube)",
      period: "Jan 2025 — Present",
      location: "Lagos, Nigeria",
      points: [
        "Teach AWS through hands-on tutorials, project walkthroughs, certification tips and career advice for aspiring cloud engineers.",
        "Published 26 videos, including a 7-part AWS SAM course and builds with Lambda, EventBridge, DynamoDB, API Gateway, CloudFormation and Amazon Bedrock.",
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

  // ── Learning journey (grouped by year, newest first) ───────
  learning: [
    {
      year: "2026",
      items: [
        { name: "AWS Certified Generative AI Developer – Professional", issuer: "AWS", url: "https://www.credly.com/badges/cbe89b1f-1959-47a1-8d14-7328c1ea882c/public_url" },
        { name: "AWS Certified AI Practitioner", issuer: "AWS", url: "https://www.credly.com/badges/e6b7559c-b459-4977-a026-9a0fc37f3fbf/public_url" },
        { name: "Joined the AWS Community Builders programme", issuer: "AWS" },
      ],
    },
    {
      year: "2025",
      items: [
        { name: "AWS Certified DevOps Engineer – Professional", issuer: "AWS", url: "https://www.credly.com/badges/2878ae68-ac8d-4f0f-90fc-13a684ad6dce/public_url" },
        { name: "Machine Learning Foundations", issuer: "AWS Educate", url: "https://www.credly.com/badges/ed73e61c-19c8-4c85-a746-69297ab5a1ee/public_url" },
        { name: "Introducing Generative AI with AWS", issuer: "Udacity" },
        { name: "DevOps & Site Reliability Mentorship (Cohort 4)", issuer: "LADDER Tech" },
        { name: "AWS CloudFormation Master Class", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-ced48a08-aab9-4068-941e-1c385d7a3352/" },
      ],
    },
    {
      year: "2024",
      items: [
        { name: "AWS Certified Solutions Architect – Associate", issuer: "AWS", url: "https://www.credly.com/badges/62b5ab6a-c517-41e8-8b2f-db8bb0439e0a/public_url" },
        { name: "8 AWS Educate badges: Cloud 101, Compute, Storage, Networking, Databases, Security, Serverless, Cloud Ops", issuer: "AWS Educate" },
        { name: "AWS cloud bootcamp", issuer: "The Incubator Hub" },
      ],
    },
    {
      year: "2023",
      items: [
        { name: "Certified in Cybersecurity (CC)", issuer: "(ISC)²" },
        { name: "9 Critical Infrastructure Protection associate certifications (network, endpoint, email, web, storage, data transfer and more)", issuer: "OPSWAT" },
        { name: "Cybersecurity Consulting Virtual Case Experience", issuer: "PwC Switzerland" },
      ],
    },
    {
      year: "2022",
      items: [
        { name: "Training in CCNA networking, Java SE 8, Oracle SQL and Certified Secure Computer User", issuer: "New Horizons" },
        { name: "Cybersecurity Foundations", issuer: "LinkedIn Learning" },
      ],
    },
    {
      year: "2019 — 2020",
      items: [
        { name: "CS50x: Introduction to Computer Science", issuer: "Harvard University", url: "https://certificates.cs50.io/be56c0b2-8606-4ec2-85f4-580bbb99f2ea.pdf?size=letter" },
        { name: "Data Analytics Consulting Virtual Internship", issuer: "KPMG" },
        { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" },
      ],
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
        "Agentic AI & agent development",
        "Retrieval-augmented generation (RAG)",
        "AI safety & governance",
        "MLOps",
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
        "High availability & disaster recovery",
        "Kubernetes",
        "Site reliability engineering",
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
        "Risk management",
        "Ethical hacking fundamentals",
      ],
    },
  ],

  // ── Leadership & community ─────────────────────────────────
  leadership: [
    {
      title: "AWS Community Builder",
      body: "Selected by AWS in 2026 for the Community Builders programme, which recognises technical practitioners who share knowledge and help others learn AWS through content, talks and community work.",
    },
    {
      title: "Conference speaker: #Moonshot2025",
      body: "Spoke alongside Digitspot Solutions, Tribe Networks and Amazon Web Services on \"De-risking Disruption: A Blueprint for Funded Innovation\", sharing how partner companies are adopting AI and generative AI.",
    },
    {
      title: "Fireside chat: the future of AI in everyday life",
      body: "Joined a March 2026 fireside chat on how AI is reshaping society, work and ethics.",
    },
    {
      title: "Architecture lead for AI & data solutions",
      body: "As Solutions Architect at Digitspot I owned end-to-end solution architecture, guiding technical decisions across business development, solution architecture and DevOps teams, and shaping proposals for customers in multiple sectors.",
    },
    {
      title: "Building a new Software Development Unit",
      body: "Worked with the DevOps team to establish and structure a unit dedicated to AI-driven applications for small businesses and startups, defining how it is organised and what it builds.",
    },
    {
      title: "President, NYSC Education & Environment CDS group",
      body: "Led a community development group of about 100 members through environmental sanitation drives, school outreach on the harm of exam malpractice, and an interschool debate with eight secondary schools that I proposed, planned and delivered.",
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
      title: "Task Alert: serverless event scheduler",
      summary:
        "Users schedule a task and get an email at the right moment. API Gateway and Lambda store events in DynamoDB and create EventBridge schedules that trigger notifications via SNS.",
      tags: ["EventBridge Scheduler", "Lambda", "DynamoDB", "Amplify"],
      url: "https://www.youtube.com/watch?v=7IRufyzbt7o",
      linkLabel: "Watch the build",
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
    { title: "Building Serverless Applications with AWS SAM: A Practical Guide with Real Demos", date: "Jun 2025 · LinkedIn", url: "https://www.linkedin.com/pulse/building-serverless-applications-aws-sama-practical-guide-oladimeji-vpagf" },
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
      degree: "B.Sc. Computer Science · First Class Honours (4.60 / 5.00)",
      school: "Redeemer's University, Ede",
      period: "2018 — 2021",
      detail: "Artificial Intelligence, Machine Learning, Data Mining, Computer Networks, Network Security, Data Structures & Algorithms.",
    },
    {
      degree: "Postgraduate studies, Chaplaincy",
      school: "Redemption Chaplaincy International Academy",
      period: "2024",
      detail: "Pastoral care, ceremonial leadership and corporate social responsibility.",
    },
    {
      degree: "Languages",
      school: "English (fluent) · German (elementary)",
      period: "",
    },
  ],

  // ── Beyond work ────────────────────────────────────────────
  personal: "",
};
