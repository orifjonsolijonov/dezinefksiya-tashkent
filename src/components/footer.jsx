
import { data } from "autoprefixer";
import logo from "../assets/images/logo.png";
import { Footer } from "flowbite-react";

export default function footer() {
  return (
    <Footer container>
      <div className="mt-[10rem] w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={logo}
            alt="Flowbite Logo"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">Avzalliklar</Footer.Link>
            <Footer.Link href="#">Xizmatlar</Footer.Link>
            <Footer.Link href="#">Savollar</Footer.Link>
            <Footer.Link href="#">Bog'lanish</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Dezinfeksiyatashkent™" year={2024} />
      </div>
    </Footer>
  );
}
