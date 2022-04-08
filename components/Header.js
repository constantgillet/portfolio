import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import logotype from "../assets/images/logo.png";

export default function Header() {
  return (
    <header className="fixed bg-black w-full border-b-2 z-50">
      <Container className="flex justify-between">
        <Link href="/">
          <a className="border-r border-r-2 py-6 w-[206px] flex justify-center items-center">
            <Image src={logotype} width={48} height={42} />
          </a>
        </Link>
        <div className="flex items-center">
          <div className="cursor-pointer">
            <div className="border-t-2 w-[33px] my-2"></div>
            <div className="border-t-2 w-[33px] my-2"></div>
            <div className="border-t-2 w-[33px] my-2"></div>
          </div>
        </div>
      </Container>
    </header>
  );
}
