import { useState } from "react";

import { Check, X, Zap, Crown, Sparkles } from "lucide-react";

import "./Pricing.css";

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small organizations getting started.",
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: Zap,
      popular: false,
      features: [
        "Basic waste tracking",
        "Collection schedules",
        "Basic analytics",
        "Limited reports",
        "Email support",
      ],
      unavailable: ["Advanced route monitoring"],
    },

    {
      name: "Professional",
      description: "Everything you need to grow sustainably.",
      monthlyPrice: 999,
      yearlyPrice: 799,
      icon: Crown,
      popular: true,
      features: [
        "Advanced waste tracking",
        "Smart collection schedules",
        "Advanced analytics",
        "Unlimited reports",
        "Route monitoring",
        "Priority support",
      ],
      unavailable: [],
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        {/* HEADER */}
        <div className="pricing-heading">
          <span className="pricing-tag">
            <Sparkles size={15} />
            SIMPLE & TRANSPARENT
          </span>

          <h2>
            Plans That <span>Grow With Your Impact.</span>
          </h2>

          <p>
            Choose the right plan for your organization and start making a
            greener difference.
          </p>

          {/* BILLING TOGGLE */}
          <div className="billing-toggle">
            <button
              className={!yearly ? "billing-active" : ""}
              onClick={() => setYearly(false)}
              type="button"
              aria-pressed={!yearly}
            >
              Monthly
            </button>

            <button
              className={yearly ? "billing-active" : ""}
              onClick={() => setYearly(true)}
              type="button"
              aria-pressed={yearly}
            >
              Yearly
              <span className="save-badge">SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="pricing-cards">
          {plans.map((plan) => {
            const Icon = plan.icon;

            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                className={`price-card ${plan.popular ? "popular-card" : ""}`}
                key={plan.name}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Sparkles size={14} />
                    MOST POPULAR
                  </div>
                )}

                <div className="plan-icon">
                  <Icon size={26} />
                </div>

                <h3>{plan.name}</h3>

                <p className="plan-description">{plan.description}</p>

                <div className="plan-price">
                  <span className="currency">₹</span>
                  <strong>{price.toLocaleString("en-IN")}</strong>
                  <span className="price-period">
                    /{price === 0 ? "forever" : "month"}
                  </span>
                </div>

                {yearly && plan.popular && (
                  <p className="yearly-note">Billed annually at ₹9,588/year</p>
                )}

                <a
                  href="#contact"
                  className={`plan-button ${
                    plan.popular ? "popular-button" : ""
                  }`}
                >
                  {plan.monthlyPrice === 0
                    ? "Get Started Free"
                    : "Choose Professional"}
                </a>

                <div className="plan-divider"></div>

                <h4>What's included</h4>

                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-check">
                        <Check size={15} />
                      </span>
                      {feature}
                    </li>
                  ))}

                  {plan.unavailable.map((feature) => (
                    <li className="disabled-feature" key={feature}>
                      <span className="feature-cross">
                        <X size={15} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="pricing-note">
          No hidden fees. No complicated commitments. Start building a cleaner
          future with EcoTrack.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
