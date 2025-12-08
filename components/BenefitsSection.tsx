import React from "react";

const benefits = [
  {
    title: "The course is purchased once and forever",
    text: "Study anytime that suits you.",
  },
  {
    title: "AI integration will help solve problems",
    text: "Explain topics clearly and quickly with guided prompts.",
  },
  {
    title: "Improve your programming skills",
    text: "Hands-on exercises and challenges with instant feedback.",
  },
  {
    title: "Structure your learning path",
    text: "Take notes directly on the site and stay organized.",
  },
  {
    title: "Stay up-to-date with C++ standards",
    text: "Best practices and industry-ready patterns.",
  },
  {
    title: "Earn certificates and badges",
    text: "Showcase achievements and track your growth.",
  },
  {
    title: "Get personalized code review",
    text: "AI hints and community insight to level up faster.",
  },
  {
    title: "Create your own game",
    text: "Graduate with a finished project and a portfolio piece.",
  },
  {
    title: "Build confidence",
    text: "Step into C++ programming without knowledge gaps.",
  },
];

export function BenefitsSection() {
  return (
    <section className="benefits">
      <div className="benefits-header">
        <h2 style={{ margin: 0, fontSize: 28, fontWeight: 500 }}>More than just course</h2>
        <p style={{ margin: 0, color: "#a8a8a8", maxWidth: 760 }}>
          Step into the C++ programming without any knowledge gaps and change your future.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((item) => (
          <div key={item.title} className="benefit-card">
            <div className="benefit-icon">✦</div>
            <div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
