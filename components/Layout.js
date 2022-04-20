import Header from "./Header";
import { Footer } from "./Footer";
import { useEffect } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Cursor />
      <Header />
      <main className={"pt-[92px] pb-16"}>{children}</main>
      <Footer />
    </>
  );
}

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    window.addEventListener("mousemove", (_event) => {
      cursor.style.top = _event.clientY + "px";
      cursor.style.left = _event.clientX + "px";
    });
  }, []);

  return <div id="cursor"></div>;
}
