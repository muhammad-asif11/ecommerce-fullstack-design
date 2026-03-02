import { Icon } from "../share/Icon";

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Healths & Beauty",
];

const CategorySidebar = () => {
  return (
    <div className="w-full sm:w-[250px] border-0 sm:border-r pr-6">
      <ul className="space-y-4 text-sm">
        {categories.map((cat, i) => (
          <li
            key={i}
            className="flex justify-between items-center cursor-pointer hover:text-black text-gray-600"
          >
            {cat}
            {i < 2 && <Icon name="arrow" className="text-lg" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
