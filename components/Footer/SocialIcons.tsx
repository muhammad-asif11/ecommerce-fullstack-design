import { Icon } from "../share/Icon";
import { IconName } from "../utills/const";

interface SocialItem {
  name: IconName;
  href: string;
}

const socialIcons: SocialItem[] = [
  { name: "facebook", href: "#" },
  { name: "twitter", href: "#" },
  { name: "instagram", href: "#" },
  { name: "linkedIn", href: "#" },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-4 mt-4">
      {socialIcons.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="text-gray-400 hover:text-white transition duration-300 hover:scale-110"
        >
          <Icon name={item.name} className="text-lg" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
