import BlogPost from "@/components/blogsPage/blogPost"
import blogPosts from '@/data/blogPosts';

const page = ({ params }) => {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div className="p-12 text-center text-lg">Post not found.</div>;
  
  return (
    <BlogPost post={post} />
  )
}

export default page