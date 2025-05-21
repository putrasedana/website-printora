import React from "react";
import { Award, Users, Truck, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16 md:px-10 xl:px-52">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Printora
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            We're passionate about helping individuals and businesses bring
            their creative visions to life through high-quality custom printed
            apparel.
          </p>
        </div>

        {/* Image + Story Section */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          <img
            src="about-img.jpg"
            alt="Team at work"
            className="rounded-lg shadow-lg w-full lg:w-1/2 lg:h-[500px] object-cover h-auto"
            loading="lazy"
            srcSet="
              about-img.jpg 500w,
              about-img.jpg 1000w"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="flex flex-col justify-center lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 text-justify">
              Launched in 2025, Printora was born from a passion to make custom
              apparel printing accessible to everyone, while upholding the
              highest standards of quality and customer care.
            </p>
            <p className="text-gray-600 text-justify">
              As a newly founded startup, we're excited to begin our journey
              serving creators and businesses alike—helping them bring their
              ideas to life through personalized printed apparel.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Award className="h-8 w-8" />,
              title: "Quality First",
              description: "Premium materials and printing techniques",
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Customer Focus",
              description: "Dedicated support every step of the way",
            },
            {
              icon: <Truck className="h-8 w-8" />,
              title: "Fast Delivery",
              description: "Quick turnaround on all orders",
            },
            {
              icon: <Heart className="h-8 w-8" />,
              title: "Satisfaction",
              description: "100% satisfaction guaranteed",
            },
          ].map((item, index) => (
            <div key={index} className="text-center px-4">
              <div className="bg-[#d1f33a]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-900">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
