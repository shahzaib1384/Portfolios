export const portfolioData = {
  personal: {
    name: "Shahzaib Haider",
    title: "AI & Full-Stack Developer | Data Analyst",
    email: "shahzaib1384@gmail.com",
    phone: "+92 317 582 6478",
    location: "Taxila, Pakistan",
    linkedin: "https://www.linkedin.com/in/shahzaibhaider2751",
    github: "https://github.com/shahzaib1384",
    resume: "https://drive.google.com/file/d/1qwBejlOWV1fuKlXi0Xm5JoaUNa27Riz2/view?usp=drive_link",
    tagline: "I build intelligent systems — from AI models to full-stack apps to data dashboards.",
    bio: "Computer Science graduate specializing in AI, Full-Stack Development, and Data Analytics. I build intelligent systems — AI models, full-stack apps, and data pipelines that solve real-world problems. Passionate about uncovering patterns in data and engineering end-to-end applications.",
    stats: [
      { label: "Projects Built", value: "5+" },
      { label: "AI FYP Completed", value: "1" },
      { label: "Active Internship", value: "1" },
      { label: "Graduating", value: "Jun 2026" }
    ]
  },
  skills: {
    languages: ["Python", "C++", "SQL", "JavaScript", "HTML", "CSS"],
    frameworks: ["React", "FastAPI", "REST APIs", "NLP"],
    aiMlData: [
      "Machine Learning",
      "Deep Learning",
      "LSTM",
      "CNN",
      "ViT",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "Power BI"
    ],
    toolsConcepts: ["MongoDB", "OOP", "Git", "Web Scraping", "Data Visualization"]
  },
  projects: [
    {
      id: "safesocial",
      title: "SafeSocial – AI Privacy Protection Web App",
      duration: "Oct 2025 – Apr 2026",
      isFeatured: true,
      isFyp: true,
      githubUrl: "https://github.com/shahzaib1384/SafeSocial",
      liveDemoUrl: "https://safesocial-omega.vercel.app/",
      demoVideoUrl: "https://youtu.be/Qfvo2Jaknfc?si=4J8NXdyG6m1bRQhI",
      problem: "Social media users unknowingly expose sensitive personal information in public comments and posts, with no real-time protection layer.",
      solution: "An AI-powered privacy protection platform that detects and flags sensitive information in real-time using NLP, Regex, and web scraping, giving users instant feedback on their privacy exposure risk.",
      keyAchievements: [
        "Built full-stack AI privacy platform as Final Year Project",
        "Integrated real-time privacy analysis and monitoring via REST APIs",
        "Reduced potential privacy exposure through intelligent NLP detection",
        "Combined web scraping, Regex pattern matching, and NLP in one pipeline"
      ],
      techStack: {
        languages: ["Python", "JavaScript"],
        frameworks: ["React", "FastAPI", "NLP"],
        aiMlData: [],
        toolsConcepts: ["MongoDB", "Regex", "REST APIs", "Web Scraping"]
      },
      architectureFlow: [
        "User Input",
        "React Frontend",
        "FastAPI Backend",
        "NLP + Regex Privacy Engine",
        "MongoDB Storage",
        "Real-time API Monitoring",
        "Privacy Risk Report to User"
      ]
    },
    {
      id: "food-recognition",
      title: "Food Recognition & Calorie Estimation App",
      duration: "Oct 2025 – Dec 2025",
      isFeatured: false,
      isFyp: false,
      githubUrl: "https://github.com/TAHA283/FoodRecognition",
      liveDemoUrl: null,
      problem: "People struggle to accurately track calorie intake because manually identifying food and estimating calories from real images is unreliable and time-consuming.",
      solution: "AI-powered app using Vision Transformer (ViT) and CNN models to classify food items from photos and estimate calorie content with high accuracy, paired with personalized diet recommendations.",
      keyAchievements: [
        "High-accuracy food classification using ViT + CNN ensemble",
        "Built and exposed REST API backend via FastAPI",
        "Included real-time food scanning and diet recommendation engine"
      ],
      techStack: {
        languages: ["Python"],
        frameworks: ["FastAPI", "REST APIs"],
        aiMlData: ["Deep Learning", "CNN", "ViT", "Scikit-learn", "NumPy"],
        toolsConcepts: []
      },
      architectureFlow: [
        "Food Image Input",
        "CNN Feature Extractor + ViT Classifier",
        "Calorie Estimator",
        "FastAPI REST API",
        "Diet Recommendation Engine",
        "User Response"
      ]
    },
    {
      id: "stock-price-predictor",
      title: "Stock Price Predictor",
      duration: "Mar 2025 – Apr 2025",
      isFeatured: false,
      isFyp: false,
      githubUrl: "https://github.com/zaryab404/stock-price-tracker",
      liveDemoUrl: null,
      problem: "Predicting stock price trends from noisy historical data requires models that can capture long-term time dependencies accurately.",
      solution: "LSTM-based deep learning model trained on historical stock data with feature engineering and hyperparameter tuning to improve forecast accuracy over traditional statistical methods.",
      keyAchievements: [
        "Built end-to-end LSTM time-series forecasting pipeline",
        "Improved accuracy through data preprocessing and feature engineering",
        "Visualized actual vs predicted prices using Matplotlib and Seaborn"
      ],
      techStack: {
        languages: ["Python"],
        frameworks: [],
        aiMlData: ["LSTM", "Deep Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        toolsConcepts: []
      },
      architectureFlow: [
        "Historical Stock Data",
        "Data Preprocessing + Feature Engineering",
        "LSTM Model Training",
        "Hyperparameter Tuning",
        "Prediction Output",
        "Matplotlib / Seaborn Visualization"
      ]
    },
    {
      id: "sports-management",
      title: "Sports Management System",
      duration: "Apr 2023 – Jun 2023",
      isFeatured: false,
      isFyp: false,
      githubUrl: "https://github.com/shahzaib1384/SportsManagementSystem",
      liveDemoUrl: null,
      problem: "Managing multi-sport tournament brackets, teams, and player rosters manually is error-prone and time-consuming.",
      solution: "Java OOP-based desktop application with structured team and player management, scheduling logic, and tournament bracket generation for multiple sports.",
      keyAchievements: [
        "Designed full OOP class hierarchy in Java",
        "Built add/remove logic for teams and players",
        "Implemented multi-sport tournament bracket scheduling"
      ],
      techStack: {
        languages: ["Java"],
        frameworks: [],
        aiMlData: [],
        toolsConcepts: ["OOP", "Data Structures"]
      },
      architectureFlow: [
        "Tournament Setup",
        "Java OOP Models",
        "Team & Player Management",
        "Bracket Scheduling Logic",
        "Console Output Interface"
      ]
    },
    {
      id: "flight-booking",
      title: "Flight Booking System",
      duration: "Apr 2023 – May 2023",
      isFeatured: false,
      isFyp: false,
      githubUrl: "https://github.com/shahzaib1384/FlightBookingSystem",
      liveDemoUrl: null,
      problem: "Simulating real-world airline seat allocation and reservation management programmatically in a structured console environment.",
      solution: "C++ console application enabling users to search flights, select seats, and manage bookings with real seat allocation and reservation logic.",
      keyAchievements: [
        "Designed seat allocation and reservation logic from scratch",
        "Built full booking flow: search → select → confirm",
        "Simulated real-world airline booking system behavior"
      ],
      techStack: {
        languages: ["C++"],
        frameworks: [],
        aiMlData: [],
        toolsConcepts: ["OOP", "Data Structures"]
      },
      architectureFlow: [
        "Flight Search Query",
        "Seat Reservation Interface",
        "Allocation Logic Validation",
        "OOP Passenger Roster Store",
        "Booking Confirmation PDF/Console"
      ]
    }
  ],
  experience: [
    {
      role: "Data Analyst Intern",
      company: "DevelopersHub Corporation",
      duration: "Apr 2026 – Present",
      githubRepo: "https://github.com/shahzaib1384/DevelopersHub-Datascience-Internship",
      certificateUrl: "https://drive.google.com/file/d/1V7e7RAM0PGH7T6bnMHkiQvzVwHwsn6SG/view?usp=drive_link",
      responsibilities: [
        "Cleaned and transformed real-world datasets using Python and Power BI, improving data quality for business reporting.",
        "Conducted exploratory data analysis (EDA) to uncover patterns and trends, supporting data-driven business decisions.",
        "Designed interactive Power BI dashboards to communicate key business insights to stakeholders."
      ]
    }
  ],
  education: [
    {
      degree: "BS Computer Science",
      institution: "COMSATS University Islamabad",
      duration: "Oct 2022 – Jun 2026",
      specialization: "Data Science Specialization"
    },
    {
      degree: "FSC Pre-Engineering",
      institution: "Jinnah Education System",
      duration: "Apr 2020 – May 2022",
      specialization: null
    },
    {
      degree: "Matriculation",
      institution: "Jinnah Education System",
      duration: "Apr 2018 – May 2020",
      specialization: null
    }
  ],
  certifications: [
    {
      name: "Data Scientist Certificate",
      issuer: "micro1",
      certificateUrl: "https://drive.google.com/file/d/1vLVY_BQxs6l2C1vL0FOp7FMWSJ4DvMSQ/view?usp=drive_link"
    }
  ]
};
