const projects = [
  {
    title: "Enterprise Financial Fraud Auditor — Multi-Agent Gemini System",
    link:
      "https://www.kaggle.com/code/gowthamiganga/agents-intensive-capstone-project-gowthami-ganga",
    tech: "Gemini, Multi-Agent Systems, Vertex AI",
    desc:
      "A multi-agent LLM system for fraud investigation with risk scoring, evidence retrieval, and automated report generation.",
  },
  {
    title: "Credit Card Fraud Detection",
    link:
      "https://github.com/GangaGowthami/Capstone---Credit-Card-Fraud-Detection",
    tech: "Python, Scikit-learn, SMOTE",
    desc:
      "Achieved AUC 0.97 using Logistic Regression with SMOTE for fraud detection.",
  },
  {
    title: "Telecom Churn Prediction",
    link:
      "https://github.com/GangaGowthami/TelecomChurnCasestudy",
    tech: "Python, ML, Classification",
    desc:
      "Classification model to identify high-value customers likely to churn.",
  },
  {
    title: "NLP Ticket Classification",
    link:
      "https://github.com/GangaGowthami/NLP-Case-Study---Automatic-Ticket-Classification",
    tech: "NLP, TF-IDF, Logistic Regression",
    desc:
      "Built a ticket classification model (96% accuracy) for customer support automation.",
  },
  {
    title: "Bike Sharing Demand Prediction",
    link: "https://github.com/GangaGowthami/BikeSharingAssignment",
    tech: "Regression, Python, EDA",
    desc:
      "Predicted bike demand using weather & seasonal features with 80%+ R².",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-24">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="opacity-70 mt-2">{p.desc}</p>
            <p className="text-blue-400 mt-2">{p.tech}</p>

            <a
              href={p.link}
              target="_blank"
              className="text-blue-500 underline mt-3 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
