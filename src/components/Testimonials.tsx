import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Event Organizer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote:
      "The shirts arrived faster than expected and everyone at our charity run loved them! The colors were vibrant and the printing was flawless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Small Business Owner",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    quote:
      "I've been ordering custom shirts for my coffee shop staff for years, and Printora delivers the best quality by far. The shirts hold up wash after wash.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Graphic Designer",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
    quote:
      "As a designer, I'm particular about how my work is printed. Printora reproduces my complex designs perfectly every time.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Bachelor Party Organizer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote:
      "Our custom bachelor party shirts were a huge hit! The online design tool was super easy to use and the quality exceeded expectations.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 xl:py-32 bg-gray-50 md:px-10 xl:px-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it – see what customers have to say
            about their Printora experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl p-8 shadow mb-2">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                          <div className="flex justify-center mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                fill={
                                  i < testimonial.rating ? "#d1f33a" : "none"
                                }
                                className={`h-4 w-4 ${
                                  i < testimonial.rating
                                    ? "text-[#d1f33a]"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-3/4 flex items-center">
                        <blockquote>
                          <p className="text-gray-700 text-lg italic leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 xl:-translate-x-16 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-8 xl:translate-x-16 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-[#d1f33a]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
