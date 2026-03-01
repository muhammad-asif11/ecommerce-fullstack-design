"use client";
import { useEffect, useMemo, useState } from "react";
import Button from "../share/Button";
import { FormFields } from "../utills/types";
import { SingUpForm } from "../utills/const";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
type AuthMode = "login" | "signup";

type Props = {
  mode: AuthMode;
};

const AuthForm: React.FC<Props> = ({ mode }) => {
  const isLogin = mode === "login";
  const isSignup = mode === "signup";

  const [user, setUser] = useState<FormFields>({
    name: "",
    email: "",
    password: "",
  });
  // ====== for Signup ======
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name as keyof FormFields]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(mode, user);

    try {
      setLoading(true);

      if (isSignup) {
        const res = await axios.post("/api/users/signup", user);
        toast.success("Signup successful!");
        router.push(`/login?email=${user.email}`);
      }

      if (isLogin) {
        const res = await axios.post("/api/users/login", user);
        toast.success("Login successful!");
        router.push("/profile"); // or dashboard
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isSignup) {
      setDisable(!(user.email && user.password && user.name));
    } else {
      setDisable(!(user.email && user.password));
    }
  }, [user]);
  // ===== end signup logic ====

  // Auto Fill Email in Login Mode
  useEffect(() => {
    if (isLogin) {
      const params = new URLSearchParams(window.location.search);
      const emailFromQuery = params.get("email");

      if (emailFromQuery) {
        setUser((prev) => ({
          ...prev,
          email: emailFromQuery,
        }));
      }
    }
  }, [isLogin]);
  // ✅ Filter fields based on mode
  const fields = useMemo(() => {
    if (isLogin) {
      return SingUpForm.filter((field) => field.name !== "name");
    }
    return SingUpForm;
  }, [isLogin]);

  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-semibold mb-2">
        {isLogin ? "Log in to Exclusive" : "Create an account"}
      </h2>

      <p className="text-gray-500 mb-8">
        {isLogin ? "Enter your details below" : "Enter your details below"}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((item) => (
          <div key={item.id}>
            <input
              id={item.name}
              name={item.name}
              type={item.type}
              required
              placeholder={item.label}
              // value={user[item.name]}
              value={user[item.name as keyof FormFields]}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-black py-2 outline-none transition"
            />
          </div>
        ))}

        {isSignup && (
          <article className="grid gap-4">
            <Button
              type="submit"
              title={
                loading
                  ? "Processing..."
                  : isLogin
                    ? "Log In"
                    : "Create Account"
              }
              style="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded transition hover:cursor-pointer"
              disabled={loading}
            />

            <Button
              type="submit"
              title="Sign up with Google"
              style="w-full border border-gray-300 py-3 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition hover:cursor-pointer"
              icon="Google"
            />
          </article>
        )}
        {isLogin && (
          <article className="flex justify-between place-items-center">
            <Button
              type="submit"
              title="Log In"
              style="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded transition hover:cursor-pointer"
            />
            <Button
              type="submit"
              title="Forget Password ?"
              style="text-red-500 font-medium transition hover:cursor-pointer"
            />
          </article>
        )}
        <p className="text-sm text-center mt-4 flex gap-4 place-items-center justify-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Link
            href={isLogin ? "/signup" : "/login"}
            className="font-medium underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
