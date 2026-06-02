import "./Benefits.scss";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: "🚚",
      title: "Free Delivery",
      description: "Orders above ₹999",
    },
    {
      id: 2,
      icon: "↩️",
      title: "Easy Returns",
      description: "7-day hassle-free",
    },
    {
      id: 3,
      icon: "✓",
      title: "100% Authentic",
      description: "Weaver certified",
    },
    {
      id: 4,
      icon: "☎️",
      title: "Support",
      description: "Mon–Sat, 9am–7pm",
    },
  ];

  return (
    <div className="benefits">
      <div className="benefits-container">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-item">
            <div className="benefit-icon">{benefit.icon}</div>
            <div className="benefit-text">
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
