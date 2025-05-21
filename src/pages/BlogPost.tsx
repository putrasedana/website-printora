import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Post not found
            </h1>
            <Link
              to="/blog"
              className="text-[#d1f33a] hover:text-[#bde834] transition-colors duration-200"
            >
              Return to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="bg-gradient-to-b from-[#d1f33a]/10 to-white">
        <div className="container mx-auto px-4 xl:px-8 py-16 xl:py-24">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-900 mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <div className="mb-8">
              <span className="bg-[#d1f33a] text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center text-sm text-gray-500 gap-6 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <div className="relative h-[400px] xl:h-[500px] rounded-xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
