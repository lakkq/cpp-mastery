import React from "react";

const plans = [
  {
    name: "Beginner",
    price: "$19",
    desc: "Ideal for beginners who want to start learning C++ with AI assistance.",
    features: [
      "Interactive lessons with AI explanations",
      "Basic coding assignments and quizzes",
      "Simple brain map to track your progress",
      "Community access",
      "Email support",
    ],
  },
  {
    name: "Pro Plan",
    price: "$49",
    desc: "For those who want to deepen their C++ skills with advanced help and detailed learning tools.",
    features: [
      "Advanced coding tasks with AI hints",
      "Personalized brain map",
      "Real-time AI code review",
      "Exclusive webinars",
      "Priority support",
    ],
  },
  {
    name: "Master Plan",
    price: "$99",
    desc: "Perfect for future C++ experts aiming to master the language and build real projects.",
    features: [
      "AI tutor for instant help",
      "Project-based learning with feedback",
      "Custom brain maps",
      "Certificate and career guidance",
      "1-on-1 mentorship",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="pricing">
      <div className="pricing-headline">
        <h2 style={{ margin: 0, fontSize: 28, fontWeight: 500 }}>Pricing</h2>
        <div className="toggle">
          <button type="button" className="active">
            Monthly
          </button>
          <button type="button">Yearly</button>
        </div>
      </div>
      <p style={{ margin: 0, color: "#a8a8a8" }}>
        Here are our plans: Beginner, Pro, and Master — with their descriptions, features, and benefits.
      </p>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className="pricing-card">
            <div className="pricing-tier">{plan.name}</div>
            <div className="price">
              {plan.price}
              <span>/Per month</span>
            </div>
            <p style={{ margin: 0, color: "#a8a8a8", lineHeight: 1.5 }}>{plan.desc}</p>
            <button type="button" className="buy-btn">
              Buy Now →
            </button>
            <ul className="features">
              {plan.features.map((feat) => (
                <li key={feat} className="feature-item">
                  <span className="feature-dot" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
