import { getAllPostIds, getPostDataById } from "@/lib/post";
import Head from "next/head";
import Date from "@/components/date";

export default function Detail({ data }: { data: any }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      详情页面：{data.date}
      <div dangerouslySetInnerHTML={data.contentHtml}></div>
      <Date datestring={data.date}></Date>
    </div>
  );
}

export async function getStaticPaths() {
  console.log("getStaticPaths");
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const data = getPostDataById(params.id);
  return {
    props: {
      data,
    },
  };
}
