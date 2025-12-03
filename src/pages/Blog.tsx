import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/UI';
import { BLOG_POSTS } from '../constants';

export const Blog: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-neutralLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Tech Insights" 
          subtitle="Stay updated with the latest trends, tutorials, and success stories from the tech world." 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-2">
                   <span>{post.date}</span>
                   <span>•</span>
                   <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-neutralDark mb-3 hover:text-brand transition-colors">
                  <Link to="#">{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto pt-4">
                  <Link to="#" className="text-brand font-bold text-sm hover:underline">Read Article</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
