import Link from "next/link";
export default function Article({ className, title, date, text, link = "#" }) {
  return (
    <article className="col-span-4">
      <Link href={link}>
        <a title="Article">
          <h3 className="font-bold uppercase mb-4 text-lg">{title}</h3>
        </a>
      </Link>
      <div className="border-black dark:border-white border-t border-b text-center font-light text-sm py-1">
        {date}
      </div>
      <p className="mt-3">{text}</p>
      <div className="mt-3">
        <Link href={link}>
          <a title="Article" className="font-bold underline">
            Read more
          </a>
        </Link>
      </div>
    </article>
  );
}
