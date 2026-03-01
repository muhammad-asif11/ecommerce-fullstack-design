import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

const Login = () => {
  return (
    <AuthLayout>
      {/* <SignupForm /> */}
      <AuthForm mode="login" />;
    </AuthLayout>
  );
};

export default Login;
