import Link from "next/link";
import Image from "next/image";

export function Project({ title = "", image, link = "/#" }) {
  return (
    <article className="group col-span-12 sm:col-span-4 bg-white dark:bg-bgDarkSecondary border border-black dark:border-white p-3 ">
      <Link href={link}>
        <a title="Project">
          <div className="border border-black dark:border-white overflow-hidden">
            <img
              src={image}
              width={229}
              height={140}
              alt="Project image"
              className="group-hover:scale-110 transition-transform"
            />
          </div>

          <h3 className="my-2">{title}</h3>
        </a>
      </Link>

      <Link href={link}>
        <a title="Article" className="font-bold underline text-sm">
          Read more
        </a>
      </Link>
    </article>
  );
}
