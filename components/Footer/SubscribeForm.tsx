import { Icon } from "../share/Icon";

const SubscribeForm: React.FC = () => {
  return (
    <form
      className="flex flex-col gap-3"
      aria-label="Newsletter subscription form"
    >
      <label htmlFor="email" className="text-sm text-gray-400">
        Get 10% off your first order
      </label>

      <div className="flex border border-gray-600 rounded-md overflow-hidden focus-within:border-white transition">
        <input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          className="bg-transparent px-3 py-2 text-sm outline-none w-full text-white placeholder-gray-500"
          aria-required="true"
        />
        <button
          type="submit"
          className="px-4 text-white text-sm font-medium farrow"
          aria-label="Submit email"
        >
          <Icon name="farrow" className="text-lg" />
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
