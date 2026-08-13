export default async function Page({ params }) {
  const { slug } = await params;

  // Fetch your blog post by its slug
  const languages = ["python", "java", "javascript", "cpp", "cs"];

  if (languages.includes(slug)) {
    return <div>My Post: {slug}</div>;
  } else {
    return <div>Post not found</div>;
  }
}