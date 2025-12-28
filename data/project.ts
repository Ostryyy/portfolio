export type Project = {
  slug: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  cover?: string;
  liveUrl?: string;
  repoUrl?: string;
  youtubeId?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "briefly-ai",
    title: "Briefly AI",
    short:
      "Next.js web app that turns audio/video files or YouTube links into multi-level summaries with live SSE job status.",
    description:
      "End-to-end processing pipeline: download/transcode via yt-dlp + FFmpeg, transcription with Whisper, and LLM summarization. Includes JWT auth, job history, strict prod setup (Docker + health endpoints), and a strong test suite (Vitest + Playwright) with full mock mode for cheap and fast E2E runs.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Server-Sent Events (SSE)",
      "OpenAI (Whisper + LLM)",
      "FFmpeg",
      "yt-dlp",
      "Vitest",
      "Playwright",
      "Docker",
    ],
    repoUrl: "https://github.com/Ostryyy/briefly-ai",
    screenshots: [
      "/projects/briefly-ai/starting.jpg",
      "/projects/briefly-ai/processing-status-SUMMARIZING.jpg",
      "/projects/briefly-ai/processing-status-ready.jpg",
      "/projects/briefly-ai/summary.jpg",
    ],
  },

  {
    slug: "ecommerce",
    title: "E-Commerce Store",
    short:
      "Full-stack e-commerce app built with .NET 8 and Angular 20, featuring cart, orders, and Stripe payments.",
    description:
      "Layered backend architecture (API/Core/Infrastructure) with SQL Server persistence and Redis-backed cart/caching. Integrates Stripe Checkout and webhooks, includes authentication with ASP.NET Identity, and uses SignalR + modern Angular UI tooling for a smooth storefront experience.",
    tech: [
      "ASP.NET Core (.NET 8)",
      "Entity Framework Core",
      "SQL Server",
      "Redis",
      "Stripe",
      "Angular 20",
      "TypeScript",
      "Angular Material",
      "Tailwind CSS",
      "SignalR",
      "Docker Compose",
    ],
    repoUrl: "https://github.com/Ostryyy/ecommerce",
    screenshots: [
      "/projects/e-commerce/home.jpg",
      "/projects/e-commerce/shop.jpg",
      "/projects/e-commerce/cart.jpg",
      "/projects/e-commerce/checkout.jpg",
      "/projects/e-commerce/confirmation.jpg",
      "/projects/e-commerce/summary.jpg",
    ],
  },

  {
    slug: "network-security",
    title: "Phishing Detection Pipeline",
    short:
      "Machine learning project for phishing detection with an end-to-end training pipeline and FastAPI inference.",
    description:
      "Implements data ingestion (MongoDB), schema-based validation (YAML), preprocessing, model training/selection, and experiment tracking with MLflow (DagsHub). Exposes a /train endpoint and a CSV-based /predict upload that returns an HTML report with predictions.",
    tech: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "pandas",
      "NumPy",
      "MongoDB (PyMongo)",
      "MLflow",
      "DagsHub",
      "Docker",
      "YAML",
      "Jinja2",
    ],
    repoUrl: "https://github.com/Ostryyy/network-security",
  },

  {
    slug: "student-performance",
    title: "Student Performance Predictor",
    short:
      "End-to-end ML app that predicts a student's math score from demographics and exam results.",
    description:
      "Includes EDA + training notebooks and a reusable pipeline (ingestion → transformation → model trainer). Ships with a Flask web UI for live predictions and serialized artifacts (preprocessor + model) to keep training and inference consistent.",
    tech: [
      "Python",
      "Flask",
      "scikit-learn",
      "pandas",
      "NumPy",
      "XGBoost",
      "CatBoost",
      "Jupyter Notebook",
      "matplotlib",
    ],
    repoUrl: "https://github.com/Ostryyy/student-performance",
  },

  {
    slug: "sentiment-analysis-movie-reviews",
    title: "Movie Review Sentiment Analysis",
    short:
      "Classic NLP pipeline that classifies movie reviews as positive or negative using TF-IDF features.",
    description:
      "Builds a text classification baseline using TF-IDF vectorization and Multinomial Naive Bayes. Evaluated with confusion matrix and classification report, plus examples for predicting sentiment on new custom review texts.",
    tech: [
      "Python",
      "scikit-learn",
      "TF-IDF",
      "Multinomial Naive Bayes",
      "NLTK movie_reviews corpus",
      "Jupyter Notebook",
      "pandas",
      "NumPy",
      "Plotly",
    ],
    repoUrl: "https://github.com/Ostryyy/sentiment_analysis_movie_reviews",
  },

  {
    slug: "digit-recognition",
    title: "Digit Recognition (SVM)",
    short:
      "Handwritten digit classifier trained on scikit-learn's digits dataset with detailed error analysis.",
    description:
      "Explores the dataset, visualizes samples, trains an SVM (SVC) model, and evaluates results using a confusion matrix and misclassification inspection to understand where the model fails.",
    tech: [
      "Python",
      "scikit-learn",
      "SVM (SVC)",
      "Jupyter Notebook",
      "NumPy",
      "pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
    repoUrl: "https://github.com/Ostryyy/digit_recognation",
  },

  {
    slug: "fashion-mnist-classifier",
    title: "Fashion-MNIST Classifier (SVM Baseline)",
    short:
      "Image classifier for Fashion-MNIST using a strong SVM baseline and per-class evaluation metrics.",
    description:
      "Loads Fashion-MNIST via TensorFlow/Keras, normalizes and flattens images, trains an SVC model, and evaluates accuracy with confusion matrix and a full classification report across all classes.",
    tech: [
      "Python",
      "TensorFlow/Keras",
      "scikit-learn",
      "SVM (SVC)",
      "Jupyter Notebook",
      "NumPy",
      "pandas",
      "Matplotlib",
      "Seaborn",
    ],
    repoUrl: "https://github.com/Ostryyy/image_recognition_fashion_mnist",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
