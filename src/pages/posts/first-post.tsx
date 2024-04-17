import Link from "next/link";
import Head from "next/head";
import styles from "./post.module.css";
import Alert from "@/components/alert";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>改了一个标题</title>
      </Head>
      <style jsx>{``}</style>
      我的第一个next页面
      <Link href="/">
        <span className={styles.colorBlue}>返回首页</span>
      </Link>
      <Link href="/about">about</Link>
      <Alert type={`success`}></Alert>
      <Alert type={`error`}></Alert>
    </div>
  );
}
