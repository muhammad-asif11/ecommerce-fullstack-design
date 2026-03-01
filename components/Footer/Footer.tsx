import FooterColumn from "./FooterColumn";
import SubscribeForm from "./SubscribeForm";
import SocialIcons from "./SocialIcons";
import { footerSections } from "../utills/footerData";
import Image from "../share/Image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Layout */}
        <div
          className="grid gap-10 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5"
        >
          {/* Exclusive */}
          <FooterColumn title="Exclusive">
            <p className="text-white font-medium">Subscribe</p>
            <SubscribeForm />
          </FooterColumn>

          {/* Dynamic Sections */}
          {footerSections.map((section, index) => (
            <FooterColumn
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Download App */}
          <FooterColumn title="Download App">
            <p className="text-sm text-gray-400">
              Save $3 with App New User Only
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-3">
              <Image src="/Qr-Code.png" alt="App" />
              <div className="flex flex-col gap-2">
                <Image src="/google-play-store.png" alt="Google App" />
                <Image src="/appstore.png" alt="Google App" />
              </div>
            </div>

            <SocialIcons />
          </FooterColumn>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Rimel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
