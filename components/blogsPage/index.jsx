'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogPosts from '@/data/blogPosts';
import blogsPageCover from '@/public/images/blogs/blog page cover.jpg';

export default function BlogPage() {
  const [search, setSearch] = useState('');

  // Filter blog posts by title/content/tag
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase()) ||
    post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-[whitesmoke] text-gray-900">
      {/* Hero Section */}
      <section
        className="relative py-[8rem] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url("${blogsPageCover.src}")` }}
      >
        <div className="absolute h-full w-full bg-white/50" />
        <div className="text-center px-4 z-[2] text-black">
          <div className="p-2 md:text-[2rem] no-underline flex items-center justify-center">
              <span className='text'>S</span>
              <span className='text'>E</span>
              <span className='text'>N</span>
              <span className='text'>E</span>
              <div className="loader-container">
                <div className="loader hero-loader"></div>
                <span className='loader-text'>C</span>
              </div>
              <span className='text'>A</span>
            </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-10">            
            Your African Trade Partner
          </h1>
          <div className="mt-6 flex justify-center">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-l-md border-none text-white bg-zinc-950"
            />
            <button
              onClick={() => setSearch(search)}
              className="bg-[#1c9d2a] text-black px-4 py-2 rounded-r-md"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Popular Articles</h2>

        {filteredPosts.length === 0 ? (
          <p className="text-gray-600">No articles found for “{search}”</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Featured Article */}
            <Link href={`/blog/${filteredPosts[0].slug}`} className="group text-gray-900 no-underline hover:underline">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{filteredPosts[0].title}</h3>
                  <span className="inline-block bg-[#0c5814] text-white text-xs px-2 py-1 rounded">
                    {filteredPosts[0].category}
                  </span>
                </div>
              </div>
            </Link>

            {/* Sidebar Articles */}
            <div className="space-y-6">
              {filteredPosts.slice(1, 4).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="flex items-center gap-4 group text-gray-900 no-underline hover:underline">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-lg object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className=''>
                    <h4 className="text-md font-semibold">{post.title}</h4>
                    <span className="inline-block bg-[#0c5814] text-white text-xs mt-1 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

        {filteredPosts.length === 0 ? (
          <p className="text-gray-600">No articles found for “{search}”</p>
        ) : (
          <div className="flex gap-8">

            {/* Sidebar Articles */}
            <div className="grid md:grid-cols-3 gap-8">
              {filteredPosts.slice(4).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="flex flex-col max-w-sm items-center p-2 rounded-lg gap-4 group bg-white shadow-md text-gray-900 no-underline hover:underline">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={100}
                    height={100}
                    className="w-full h-60 rounded-lg object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className=''>
                    <h4 className="text-md font-semibold">{post.title}</h4>
                    <span className="inline-block bg-[#0c5814] text-white text-xs mt-1 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
