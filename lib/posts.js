import { remark } from "remark";
import html from "remark-html";
import * as path from "path";
import * as fs from "fs";
import * as matter from "gray-matter";

export async function getPostData(id) {
  const fullPath = path.join("./content/posts/", `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllPostsId() {
  const dir = "./content/posts/";
  const files = fs.readdirSync(dir);

  const postIds = [];

  for (const file of files) {
    //Remove file extension
    postIds.push(file.slice(0, file.length - 3));
  }

  return postIds;
}

export async function getLastPosts() {
  const postsIds = getAllPostsId();
  const postList = [];

  for (const postsId of postsIds) {
    const post = await getPostData(postsId);
    postList.push(post);
  }

  const sortedPost = postList.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const lastPosts = [];

  for (let i = 0; i < 3; i++) {
    if (sortedPost[i]) {
      lastPosts.push(sortedPost[i]);
    }
  }

  return lastPosts;
}
