import React from 'react';
import { CheckCircle, CreditCard, Briefcase, Shield } from 'lucide-react';

const WhyTrustSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Verified Skills",
      description: "AI-powered ratings ensure artisans' expertise is authentic.",
      color: "green",
    },
    {
      icon: Briefcase,
      title: "Professional Portfolios",
      description: "View artisans' best work with ease.",
      color: "blue",
    },
    {
      icon: CreditCard,
      title: "Verified Skills",
      description: "Transparent pricing and market demand analysis.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "A safe space for artisans and customers to connect.",
      color: "gray",
    },
  ];

  const getIconColor = (color) => {
    switch (color) {
      case "green":
        return "text-green-600";
      case "blue":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Trust Craft Connect
        </h2>
      </div>

      {/* Feature Grid - 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-xl"
            >
              <div className="flex-shrink-0 mr-4">
                <Icon className={`w-8 h-8 ${getIconColor(feature.color)}`} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyTrustSection;