export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Custom T-Shirt Design: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of creating eye-catching custom t-shirt designs that stand out and make a lasting impression.",
    content: `
      Custom t-shirt design is more than just putting graphics on fabric—it's an art form that combines creativity, technical knowledge, and an understanding of fashion trends. In this comprehensive guide, we'll explore the essential elements that make a t-shirt design successful.

      First, let's talk about the basics of design composition. A well-balanced design considers the placement, size, and visual hierarchy of elements. The most impactful designs often follow the principle of simplicity, making sure your message is clear and easily readable.

      Color selection plays a crucial role in t-shirt design. Understanding color theory helps you create designs that not only look great but also print well. Remember that different fabric colors will affect how your design appears, so always consider the base color of your shirt when choosing your design palette.

      Typography is another key element. The fonts you choose should not only be legible but also reflect the mood and message of your design. Whether you're going for a vintage look with serif fonts or a modern feel with sans-serif options, consistency in your type choices helps create a cohesive design.

      Finally, consider the printing technique that best suits your design. Screen printing, direct-to-garment (DTG), and vinyl cutting each have their own strengths and limitations. Understanding these can help you design with the end product in mind.
    `,
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Design Tips",
  },
  {
    id: 2,
    title: "Sustainable Fashion: The Rise of Eco-Friendly T-Shirts",
    excerpt:
      "Discover how sustainable materials and ethical manufacturing are shaping the future of custom apparel.",
    content: `
      The fashion industry is experiencing a significant shift towards sustainability, and custom t-shirt production is no exception. This article explores the growing trend of eco-friendly t-shirt manufacturing and its impact on both the environment and consumer choices.

      Organic cotton has become a game-changer in sustainable t-shirt production. Unlike conventional cotton, organic cotton is grown without harmful pesticides and requires less water. This not only reduces environmental impact but also results in softer, more durable garments that are better for sensitive skin.

      Recycled materials are another innovative solution in sustainable fashion. Many manufacturers now use recycled polyester made from plastic bottles, helping to reduce waste while creating high-quality performance fabrics. These materials maintain their shape and color while giving new life to existing resources.

      Water conservation in the dyeing process is crucial for sustainable production. New technologies allow for waterless dyeing methods, significantly reducing the environmental impact of t-shirt manufacturing. These processes not only save water but often result in more vibrant, longer-lasting colors.

      The future of sustainable t-shirt production looks promising, with ongoing innovations in materials and manufacturing processes. From biodegradable packaging to solar-powered facilities, the industry continues to find new ways to reduce its environmental footprint while meeting growing consumer demand for eco-friendly options.
    `,
    image: "/design_baju_1.jpeg",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Sustainability",
  },
  {
    id: 3,
    title: "Team Spirit: Custom Shirts for Sports and Events",
    excerpt:
      "Explore creative ideas for designing team uniforms and event merchandise that builds unity and brand recognition.",
    content: `
      Creating custom shirts for teams and events goes beyond just adding a logo to a t-shirt. It's about building unity, promoting team spirit, and creating memorable merchandise that participants will want to wear long after the event is over.

      When designing team uniforms, consider incorporating elements that reflect your team's identity and values. Colors should be chosen not just for aesthetic appeal but also for their psychological impact. For example, blue often represents trust and stability, while red can signify energy and passion.

      For sporting events, durability and comfort are paramount. Choose moisture-wicking fabrics for athletic wear and consider the range of motion required for different activities. The placement of designs should not interfere with movement or cause discomfort during physical activity.

      Event merchandise requires a different approach. Focus on creating designs that capture the essence of the event while remaining fashionable enough for everyday wear. Limited edition numbering or event-specific details can make shirts feel more special and collectible.

      Don't forget about practical considerations like size ranges and gender-specific fits. A well-designed shirt should look good on everyone, so consider offering multiple style options to accommodate different preferences and body types.
    `,
    image: "https://images.pexels.com/photos/8346232/pexels-photo-8346232.jpeg",
    author: "David Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Events",
  },
  {
    id: 4,
    title: "Color Theory in T-Shirt Design: Making the Right Choice",
    excerpt:
      "Understanding color combinations and their impact on your custom t-shirt designs for maximum visual appeal.",
    content: `
      Color theory is fundamental to creating successful t-shirt designs. The right color combination can make your design pop, while poor color choices can render even the best concept ineffective. Let's dive into the principles of color selection for t-shirt design.

      The color wheel is your best friend when it comes to choosing harmonious color combinations. Complementary colors (those opposite each other on the color wheel) create high contrast and visual impact. Analogous colors (those next to each other) create a more subtle, cohesive look.

      Consider the psychology of colors when designing for specific purposes. Blue conveys trust and professionalism, making it perfect for corporate wear. Red attracts attention and creates excitement, ideal for sports teams. Green suggests growth and environmental consciousness, perfect for eco-friendly brands.

      When designing for different shirt colors, remember that contrast is key for readability. Dark designs on light shirts and light designs on dark shirts typically work best. Always test your design on various shirt colors to ensure it maintains its impact across different options.

      Print methods also affect color choice. Screen printing typically requires separate screens for each color, so limiting your palette can be cost-effective. Digital printing allows for more complex color combinations but may have different requirements for color separation and preparation.
    `,
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
    author: "Emily White",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Design Tips",
  },
];
