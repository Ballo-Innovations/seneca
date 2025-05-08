'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import blogPosts from '@/data/blogPosts'; // Ensure this path is correct
import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';
import './style.css';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ post }) {
  // const post = blogPosts.find((p) => p.slug === params.slug);

  const [processed, setProcessed] = useState({ html: '', toc: [] });

  useEffect(() => {
    const div = document.createElement('div');
    div.innerHTML = post.content;

    const headings = [];
    const headingElements = div.querySelectorAll('h2, h3');

    headingElements.forEach((el) => {
      const text = el.textContent;
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      el.id = id;
      headings.push({ text, id, level: el.tagName.toLowerCase() });
    });

    setProcessed({ html: div.innerHTML, toc: headings });
  }, [post.content]);

  if (!post) return <div>Post not found</div>;

  return (
    <section className="blog-post relative min-h-screen bg-gradient-to-b from-[whitesmoke] to-white text-gray-900 py-16 md:px-6 nav-padding w-screen overflow-hidden">
      {/* <div className="absolute -left-[4rem] lg:-left-5 top-[50%] h-[40%] w-[5rem] shape rounded-md" /> */}
      <div className="md:px-20 mx-auto z-[1] relative">
        <div className="absolute right-[-40%] md:right-[2%] top-0 h-40 w-72 bg-[#16761f] rounded-md z-[-1]" />

        <h1 className="lg:max-w-5xl text-4xl font-bold mb-4 leading-tight text-gray-900 md:px-5">
          {post.title}
        </h1>

        <div className="text-sm text-green-950 mb-2 px-[0.75rem] md:px-5">
          {post.date} · {post.category}
        </div>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="md:rounded-md mb-8 w-full md:h-[30rem] object-cover shadow-xl"
        />

        {/* Table of Contents */}
        <div className="flex flex-col lg:flex-row">
        {processed.toc.length > 0 && (
            <motion.aside
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block w-[25%] sticky top-[8rem] h-[75vh] bg-[#0d6115] text-white border border-gray-200 p-4 rounded-md shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-2">Table of Contents</h2>
              <ul className="space-y-2 list-disc">
                {processed.toc.map((item, i) => (
                  <li key={i} className={`${item.level === 'h3' ? 'ml-4 text-lg' : ''}`}>
                    <a href={`#${item.id}`} className="text-white no-underline hover:underline">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          )}

          <article
            className="blog-article flex-1 text-lg leading-relaxed text-gray-900 space-y-6 md:mx-16"  
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(processed.html) }}
          />
        </div>
      </div>
    </section>
  );
}
