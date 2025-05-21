import React from "react";
import { Palette, Clock, Award, Sparkles } from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 xl:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center">
      <div className="w-12 h-12 rounded-lg bg-[#d1f33a] flex items-center justify-center mb-4 text-gray-900">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Online ordering",
      description:
        "Enjoy the convenience of shopping anytime and anywhere through our online ordering.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premium Quality",
      description:
        "Durable, soft fabrics that maintain their shape, color, and comfort wash after wash.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Turnaround",
      description:
        "From design approval to delivery in as little as 3-5 business days.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Perfect Prints",
      description:
        "Advanced printing technology for vibrant, detailed designs that last.",
    },
  ];

  return (
    <section className="py-16 xl:py-32 bg-gray-50 md:px-10 xl:px-16">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Printora?
          </h2>
          <p className="text-gray-600 text-lg">
            We combine cutting-edge technology with premium quality materials to
            deliver custom t-shirts that exceed expectations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
