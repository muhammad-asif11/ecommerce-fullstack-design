// src/components/Icon.tsx
import { ICONS, IconName } from "../utills/const";
import { IconType } from "react-icons";

type Props = {
  name: IconName;
  // size?: number;
  className?: string;
};

export const Icon = ({ name, className }: Props) => {
  const Component: IconType = ICONS[name];
  return <Component className={className} />;
};
