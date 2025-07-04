import BlogPost from "@/components/blogsPage/blogPost";
import blogPosts from "@/data/blogPosts";
import Head from "next/head";

const page = ({ params }) => {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post)
    return <div className="p-12 text-center text-lg">Post not found.</div>;

  // Generate a summary/description from the first paragraph or a fallback
  const summaryMatch = post.content.match(/<p>(.*?)<\/p>/);
  const summary = summaryMatch ? summaryMatch[1] : post.title;
  const canonicalUrl = `https://senecazambia.com/blog/${post.slug}`;
  const imageUrl =
    typeof post.image === "string" && post.image.startsWith("http")
      ? post.image
      : `https://senecazambia.com${post.image}`;

  // JSON-LD structured data for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: summary,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: "Seneca",
    },
    datePublished: post.date,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <>
      <Head>
        <title>{post.title} | Seneca</title>
        <meta name="description" content={summary} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Seneca" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={summary} />
        <meta name="twitter:image" content={imageUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <BlogPost post={post} />
    </>
  );
};

export default page;
