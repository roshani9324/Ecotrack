import {
  Building2,
  Truck,
  ChartNoAxesCombined,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Connect Your Organization",
    description:
      "Register your organization and set up your waste management system in a few simple steps.",
    points: [
      "Easy organization setup",
      "Manage your team",
      "Customize your dashboard",
    ],
  },
  {
    number: "02",
    icon: Truck,
    title: "Monitor Waste Collection",
    description:
      "Keep track of collection activities, vehicles and daily waste management operations.",
    points: [
      "Monitor collection activity",
      "Track fleet operations",
      "Manage collection schedules",
    ],
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Analyze & Improve",
    description:
      "Review performance reports and use useful insights to improve your operations.",
    points: [
      "View performance reports",
      "Analyze collection data",
      "Improve efficiency",
    ],
  },
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">
        {/* Heading */}
        <div className="how-heading">
          <span className="how-tag">HOW IT WORKS</span>

          <h2>
            How EcoTrack <span>Works</span>
          </h2>

          <p>
            Getting started with smarter waste management is simple. Follow
            these three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="how-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="how-card" key={step.number}>
                <div className="how-card-top">
                  <span className="how-number">{step.number}</span>

                  <div className="how-icon">
                    <Icon size={28} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p className="how-description">{step.description}</p>

                <ul className="how-list">
                  {step.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={17} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {index !== steps.length - 1 && (
                  <div className="how-card-arrow">
                    <ArrowRight size={19} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="how-bottom">
          <div className="how-bottom-content">
            <h3>Ready to Make a Difference?</h3>
            <p>Start building a cleaner and greener future with EcoTrack.</p>
          </div>

          <a href="#contact" className="how-btn">
            Get Started <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
