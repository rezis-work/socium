import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignupForm = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Enter your information to create a new account
        </CardDescription>
        <CardContent></CardContent>
      </CardHeader>
    </Card>
  );
};

export { SignupForm };
