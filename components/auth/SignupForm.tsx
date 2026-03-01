"use client";
import { useState } from "react";
import { SingUpForm } from "../utills/const";
import { SINGUPFORM } from "../utills/types";
import Button from "../share/Button";

const SignupForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
      <p className="text-gray-500 mb-8">Enter your details below</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {SingUpForm.map((item: SINGUPFORM) => (
          <div key={item.id}>
            <input
              id={item.name}
              name={item.name}
              type={item.type}
              required
              placeholder={item.label}
              value={form[item.name as keyof typeof form]}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-black py-2 outline-none transition"
            />
          </div>
        ))}

        {/* Create Account Button */}
        <Button
          type="submit"
          title="Create Account"
          style="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded transition"
        />
        {/* Google Button */}
        <Button
          type="submit"
          title="Sign up with Google"
          style="w-full border border-gray-300 py-3 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          icon="Google"
        />

        {/* Login Link */}
        <p className="text-sm text-center mt-4">
          Already have account?{" "}
          <a href="/login" className="font-medium underline">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
