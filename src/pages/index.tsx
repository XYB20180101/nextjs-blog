import { getSortedPostsData } from "@/lib/post";
import Link from "next/link";

export default function Index({ allPostsData }: any) {
  return (
    <div>
      <div>首页123</div>
      <Link href="/posts/first-post">first-post</Link>
      <img src="/cute.jpg" width={`100px`} />
      <ul>
        {allPostsData.map(({ id, date, title }: any) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

/**
 * @date 2024-04-16
 *
 * 我理解为，首页
 */
