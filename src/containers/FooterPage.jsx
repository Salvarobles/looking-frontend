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
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:flex sm:justify-between">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Link to={'/'}><Footer.Link>Looking</Footer.Link></Link>
                <Link to={'salva-robles'}><Footer.Link>Salvador Robles Gómez</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/Salvarobles/">Github</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/salvador-robles-g%C3%B3mez-613ba329b/">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link>Privacy Policy</Footer.Link>
                <Footer.Link>Terms &amp; Conditions</Footer.Link>
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
            <Footer.Icon href="https://github.com/Salvarobles/" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterPage;
