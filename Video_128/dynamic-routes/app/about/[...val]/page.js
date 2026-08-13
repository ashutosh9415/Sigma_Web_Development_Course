export default async function Page({ params }) {
  const { val } = await params;

  console.log(val);

  return <div>I am about page check console</div>;
}