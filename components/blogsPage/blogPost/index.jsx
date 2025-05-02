// app/blog/[slug]/page.jsx
import Image from 'next/image';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ post }) {
  return (
    <section className="blog-post relative min-h-screen bg-gradient-to-b from-[whitesmoke] to-white text-gray-900 py-16 px-6 nav-padding">
      <div className="absolute -left-[4rem] lg:-left-5 top-[50%] h-[40%] w-[5rem] shape rounded-md" />
      <div className="max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto z-[1] relative">
        <div className="absolute right-[-30%] md:right-[-10%] top-0 h-40 w-40 shape rounded-md z-[-1]" />        
        <h1 className="text-4xl font-bold mb-4 leading-tight text-gray-900">
          {post.title}
        </h1>                

        <div className="text-sm text-green-950 mb-2">
          {post.date} · {post.category}
        </div>
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-md mb-8 w-full h-[30rem] object-cover shadow-xl"
        />
        <article className="text-lg leading-relaxed text-gray-900 space-y-6">
          {post.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}
