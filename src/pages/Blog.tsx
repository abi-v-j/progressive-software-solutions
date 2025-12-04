import React from 'react';
import { BLOG_POSTS } from '../constants';
import { SectionTitle } from '../components/UI';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-neutralLight min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        <SectionTitle title="Our Blog" subtitle="Latest insights from our experts" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow">
              <img src={post.imageUrl} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
