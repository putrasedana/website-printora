import emailjs from "emailjs-com";
import { useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const SERVICE_ID = "service_eoupyme";
const TEMPLATE_ID = "template_7xcw6ln";
const PUBLIC_KEY = "2Vkc4VpnHCptjlLMi";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const timeField =
      form.current.querySelector<HTMLInputElement>('input[name="time"]');
    if (timeField) {
      const now = new Date().toLocaleString("id-ID", {
        dateStyle: "long",
        timeStyle: "short",
      });
      timeField.value = now;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("Email sent successfully. Status:", result.status);
        alert("Message sent successfully!");
        form.current?.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Have questions? We're here to help. Reach out to us through any of
              the following channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d1f33a] focus:border-transparent"
                    placeholder="Your name"
                    name="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d1f33a] focus:border-transparent"
                    placeholder="your@email.com"
                    name="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d1f33a] focus:border-transparent"
                    placeholder="How can we help?"
                    name="message"
                  ></textarea>
                </div>
                <input type="hidden" name="time" id="time-field" />
                <button
                  type="submit"
                  className="w-full bg-[#d1f33a] text-gray-900 font-medium py-2 px-6 rounded-lg hover:bg-[#bde834] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#333] mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+62 857-0412-8095</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#333] mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">printoraofc@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#333] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Jl. Tukad Badung, Renon, Denpasar Selatan, Kota Denpasar,
                      Bali 80226
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#333] mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
