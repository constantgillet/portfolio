import Head from "next/head";
import Container from "../../components/Container";
import { getAllPostsId, getPostData } from "../../lib/posts";
import { Separator } from "../../components/Separator";
import TitleSeparator from "../../components/TitleSeparator";
import Image from "next/image";

export default function PostPage({ postData }) {
  return (
    <div className="min-h-screen pt-10">
      <Head>
        <title>{postData?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="flex justify-center flex-col">
          {postData?.hero_image ? (
            <Image
              src={`/images/${postData?.hero_image}`}
              width={852}
              height={425}
            />
          ) : (
            <div></div>
          )}

          <h1 className={"text-center text-2xl font-bold mt-6"}>
            {postData?.title}
          </h1>
          <TitleSeparator />
        </div>
        <div className="max-w-fit mx-auto my-7 px-5 border-black dark:border-white border-t border-b text-center font-light text-sm">
          {postData?.date
            ? new Date(postData.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : ""}
        </div>
        <Separator className={"mb-8"} />
        <div
          dangerouslySetInnerHTML={{ __html: postData?.contentHtml }}
          className="post-content"
        ></div>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  const postsId = getAllPostsId();
  const pathList = [];

  for (const postId of postsId) {
    pathList.push({ params: { id: postId } });
  }

  return {
    paths: pathList,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData: postData,
    },
  };
}
