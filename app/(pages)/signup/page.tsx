import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <AuthLayout>
      {/* <SignupForm /> */}
      <AuthForm mode="signup" />;
    </AuthLayout>
  );
};

export default Signup;
