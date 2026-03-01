import Link from "next/link";
import { FooterLink } from "../utills/footer";

interface Props {
  title: string;
  links?: FooterLink[];
  children?: React.ReactNode;
}

const FooterColumn = ({ title, links, children }: Props) => {
  return (
    <nav aria-labelledby={`${title}-heading`} className="space-y-4">
      <h3 id={`${title}-heading`} className="text-white text-lg font-semibold">
        {title}
      </h3>

      {links && (
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-gray-400 text-sm transition duration-300 hover:text-white hover:translate-x-1 inline-block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {children}
    </nav>
  );
};

export default FooterColumn;
