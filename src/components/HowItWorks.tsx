import React from "react";
import { Palette, Truck, ShoppingBag, Monitor, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Design Your Shirt",
    description:
      "Design your own design or use the ready-to-use designs in the gallery.",
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Review Your Design",
    description:
      "Double-check your design and make sure everything looks right before ordering.",
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Order via WhatsApp",
    description:
      "Send your design and details to us through WhatsApp for a fast and easy order process.",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Quick Delivery",
    description:
      "Your custom shirts are printed with care and delivered to your door in just 3-5 business days.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 xl:py-32 bg-gray-900 md:px-10 xl:px-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg">
            Creating your custom t-shirts is easy with our simple four-step
            process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-[#d1f33a] text-gray-900 flex items-center justify-center mb-6 mx-auto">
                  {step.icon}
                </div>

                <div className="text-center mb-4">
                  <div className="bg-[#d1f33a]/20 text-[#d1f33a] text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-1 bg-[#d1f33a]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6285704128095?text=Halo,%20saya%20ingin%20memesan%20kaos%20custom."
            target="_blank"
            rel="noopener"
            className="bg-[#d1f33a] text-gray-900 font-medium py-3 px-8 rounded-full hover:bg-[#bde834] transition-colors duration-300 flex items-center justify-center w-[20%] mx-auto"
          >
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
