/* eslint-disable react-refresh/only-export-components */
import { ArrowRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="py-16 xl:py-24 bg-gradient-to-br from-[#d1f33a]/60 to-white text-gray-900">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your Design to Life?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start creating your custom t-shirts today and experience the perfect
            blend of quality, creativity, and convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285704128095?text=Halo,%20saya%20ingin%20memesan%20kaos%20custom."
              target="_blank"
              rel="noopener"
              className="bg-gray-900 text-[#d1f33a] font-medium py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=printoraofc@gmail.com&su=Ingin%20Bertanya%20Tentang%20Pemesanan%20Kaos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-900 text-gray-900 font-medium py-3 px-8 rounded-full hover:bg-gray-900 hover:text-[#d1f33a] transition-colors duration-300"
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
