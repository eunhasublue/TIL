import Link from "next/link";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>welcome nextjs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_start=0&end=10"
//   );
//   const posts = await res.json();

//   return {
//     porps: {
//       posts,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&end=10"
  );
  const posts = await res.json();

  return {
    porps: {
      posts,
    },
  };
};
