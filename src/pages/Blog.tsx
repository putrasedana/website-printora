import React from "react";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const Blog: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-16 xl:py-24 md:px-10 xl:px-16">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h1>
            <p className="text-lg text-gray-600">
              Discover tips, trends, and insights about custom t-shirt design
              and printing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 xl:gap-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d1f33a] text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 xl:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:underline">
                    <Link
                      to={`/blog/${post.id}`}
                      onClick={() =>
                        window.scrollTo({ top: 40, behavior: "smooth" })
                      }
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 gap-4">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
