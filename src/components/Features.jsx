import { MapPin, Truck, BarChart3, Recycle, ArrowUpRight } from "lucide-react";
import "./Features.css";

const features = [
  {
    icon: MapPin,
    number: "01",
    title: "Smart Route Optimization",
    description:
      "Plan efficient collection routes to reduce unnecessary travel and save time.",
    color: "green",
  },
  {
    icon: Truck,
    number: "02",
    title: "Live Fleet Monitoring",
    description:
      "Track waste collection vehicles and monitor their activities from one place.",
    color: "blue",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Analytics & Reports",
    description:
      "Understand collection performance with organized reports and insights.",
    color: "orange",
  },
  {
    icon: Recycle,
    number: "04",
    title: "Waste Management",
    description:
      "Organize waste collection activities and support sustainable operations.",
    color: "purple",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-heading">
          <span className="section-tag">OUR FEATURES</span>
          <h2>
            Everything You Need for
            <span> Smarter Waste Management</span>
          </h2>
          <p>
            Powerful tools to simplify waste collection, improve operations and
            support a cleaner environment.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <div className={`feature-icon ${feature.color}`}>
                    <Icon size={25} />
                  </div>
                  <span className="feature-number">{feature.number}</span>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <a href="#how-it-works" className="feature-link">
                  Explore More <ArrowUpRight size={17} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
