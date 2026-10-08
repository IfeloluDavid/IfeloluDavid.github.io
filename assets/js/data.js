/*
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this file to update the website.
 * ─────────────────────────────────────────────────────────────
 *  Everything on the page is rendered from this object, so you
 *  never need to touch the HTML to add a job, certificate, skill
 *  or article.
 *
 *  • Any list left empty ([]) hides its section automatically.
 *  • Entries marked "TODO" are templates — replace them with your
 *    real details (from LinkedIn) or delete them.
 *  • Put your photo at assets/img/profile.jpg and set `photo`
 *    below. Without a photo, your initials are shown.
 */
window.SITE = {
  name: "Ifelolu David",
  initials: "ID",
  role: "Solutions Architect",
  // One sentence that a recruiter should remember.
  tagline:
    "I design resilient, scalable cloud systems on AWS — and write openly about how they work so others can build them too.",
  location: "", // TODO e.g. "Lagos, Nigeria · Open to remote & relocation"
  photo: "", // e.g. "assets/img/profile.jpg"
  resume: "", // e.g. "assets/Ifelolu-David-CV.pdf" — adds a "Download CV" button
  email: "", // TODO your professional email — adds an "Email me" button

  links: {
    linkedin: "https://www.linkedin.com/in/ifelolu-david/",
    medium: "https://medium.com/@ifeloludavid",
    github: "https://github.com/IfeloluDavid",
    instagram: "https://www.instagram.com/i.daveed/",
  },

  about: [
    "I'm a Solutions Architect focused on Amazon Web Services. My work sits where business goals meet infrastructure: choosing the right services, designing for failure, and keeping systems simple enough that teams can run them with confidence.",
    "I learn in public. Every lab, build and certification becomes a write-up on Medium — from highly available web tiers behind Application Load Balancers to serverless, event-driven pipelines with Kinesis, Lambda and DynamoDB, and computer-vision workflows with Amazon Rekognition.",
    "I believe the best engineers are teachers, and the best leaders are learners. I bring both habits to every team I join.",
  ],

  // Short, scannable proof points shown under the hero.
  // TODO: replace with real numbers (years of experience, certs earned, people mentored…)
  highlights: [
    { value: "AWS", label: "Primary cloud platform" },
    { value: "4+", label: "Published technical articles" },
    { value: "Serverless", label: "Event-driven architecture" },
    { value: "Always", label: "Learning in public" },
  ],

  // ── Experience ─────────────────────────────────────────────
  // Most recent first. `points` should be outcomes, ideally with numbers.
  experience: [
    {
      role: "Solutions Architect",
      company: "", // TODO company name
      period: "", // TODO e.g. "2023 — Present"
      location: "",
      points: [
        "Design highly available architectures across multiple Availability Zones using Auto Scaling groups and Application Load Balancers.",
        "Build serverless, event-driven data pipelines with Amazon Kinesis, AWS Lambda and Amazon DynamoDB.",
        // TODO add measurable outcomes, e.g. "Cut infrastructure cost by 30% by…"
      ],
    },
    // TODO copy your other LinkedIn roles here:
    // { role: "", company: "", period: "", location: "", points: ["", ""] },
  ],

  // ── Certifications ─────────────────────────────────────────
  // Add each credential with its verification link — verifiable
  // badges are what convince hiring managers.
  certifications: [
    // TODO replace with your real certifications from LinkedIn, e.g.:
    // {
    //   name: "AWS Certified Solutions Architect – Associate",
    //   issuer: "Amazon Web Services",
    //   date: "2024",
    //   credentialUrl: "https://www.credly.com/badges/…",
    // },
  ],

  // ── Skills ─────────────────────────────────────────────────
  skills: [
    {
      group: "Cloud & Architecture",
      items: [
        "AWS Well-Architected design",
        "High availability & fault tolerance",
        "Multi-AZ deployments",
        "Elastic Load Balancing",
        "EC2 Auto Scaling",
      ],
    },
    {
      group: "Serverless & Data",
      items: [
        "AWS Lambda",
        "Amazon Kinesis Data Streams",
        "Amazon DynamoDB",
        "Amazon S3",
        "Amazon SNS",
        "Event-driven design",
      ],
    },
    {
      group: "Search, Analytics & AI",
      items: [
        "Amazon OpenSearch Service",
        "Log analytics & dashboards",
        "Amazon Rekognition",
      ],
    },
    {
      group: "Professional",
      items: [
        "Technical writing",
        "Knowledge sharing",
        "Stakeholder communication",
        "Git & GitHub",
      ],
    },
  ],

  // ── Leadership & community ─────────────────────────────────
  leadership: [
    {
      title: "Teaching through writing",
      body: "I turn hands-on cloud work into step-by-step guides on Medium, including a tutorial republished by the AWS Tip publication, so other engineers can learn faster.",
    },
    // TODO add roles where you led people, e.g.:
    // { title: "Team Lead — <Project/Org>", body: "Led a team of 6 engineers to…" },
    // { title: "Mentor — <Community>", body: "Mentored 20+ aspiring cloud engineers…" },
    // { title: "Organiser / Speaker — <Event>", body: "…" },
  ],

  // ── Projects (with links) ──────────────────────────────────
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
        "An S3 upload triggers Lambda, which calls Amazon Rekognition to detect faces and emails the results through SNS — no servers to manage.",
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

  // ── Writing (Medium) ───────────────────────────────────────
  articles: [
    {
      title:
        "Amazon OpenSearch Service: The Engine Behind Search, Logs, and Real-Time Dashboards",
      date: "Dec 2025",
      url: "https://ifeloludavid.medium.com/amazon-opensearch-service-the-engine-behind-search-logs-and-real-time-dashboards-4d8cbb4b0c54",
    },
    {
      title: "Building Highly Available Web Applications with AWS SimuLearn",
      date: "Nov 2024",
      url: "https://ifeloludavid.medium.com/building-highly-available-web-applications-with-aws-simulearn-173b13efba45",
    },
    {
      title:
        "Building a Real-Time Data Pipeline with AWS Kinesis, Lambda, and DynamoDB: My Journey",
      date: "",
      url: "https://ifeloludavid.medium.com/building-a-real-time-data-pipeline-with-aws-kinesis-lambda-and-dynamodb-my-journey-%EF%B8%8F-972773f2d777",
    },
    {
      title: "Face Detection with Amazon Rekognition and AWS Lambda",
      date: "AWS Tip",
      url: "https://awstip.com/face-detection-with-amazon-rekognition-and-aws-lambda-43bf6b61842b",
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    // TODO e.g. { school: "University of …", degree: "B.Sc. Computer Science", period: "2016 — 2020" },
  ],

  // ── Beyond work (from Instagram / personal life) ───────────
  // A couple of human details make you memorable. Leave empty to hide.
  personal: "",
};
