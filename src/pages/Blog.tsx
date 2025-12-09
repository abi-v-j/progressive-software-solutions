import React from 'react';
import { BLOG_POSTS } from '../constants';
import { SectionTitle } from '../components/UI';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const Blog: React.FC = () => {
  return (
    <>
      {/* ✅ SEO META */}
      <SEO
        title="Software Development Blog | Progressive Software Solutions & Training"
        description="Read the latest software development tutorials, industry insights, and technology trends from Progressive Software Solutions & Training."
        canonical="https://www.progressivesst.com/blog"
        ogImage="https://www.progressivesst.com/og-blog.jpg"
      />

      <div className="pt-24 pb-20 bg-neutralLight min-h-screen">
        <div className="max-w-7xl mx-auto px-4">

          {/* ✅ FORCE SINGLE H1 FOR SEO SAFETY */}
          <h1 className="sr-only">Software Development Blog</h1>

          <SectionTitle
            title="Our Blog"
            subtitle="Latest insights from our experts"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow"
              >
                {/* ✅ Image SEO Fixed */}
                <img
                  src={post.imageUrl}
                  alt={`${post.title} blog article cover`}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  {/* ✅ H2 UNDER PAGE H1 */}
                  <h2 className="font-bold mb-2 text-lg">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>

                  {/* ✅ INTERNAL LINKING — PREVENTS ORPHAN POSTS */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-brand text-sm font-semibold hover:underline"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Blog;
