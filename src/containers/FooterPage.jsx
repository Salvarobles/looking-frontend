import { Footer } from "flowbite-react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between gap-5 sm:flex sm:justify-between md:grid md:grid-cols-1">
          <div>
            <Footer.Brand
              src="/image/logo.png"
              alt="Flowbite Logo"
              name="Looking"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Looking</Footer.Link>
                <Footer.Link href="#">Salvador Robles Gómez</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex justify-between items-start sm:flex sm:items-center sm:justify-between">
          <Link to={'/'}>
            <Footer.Copyright by="Looking" year={2024} />
          </Link>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterPage;
