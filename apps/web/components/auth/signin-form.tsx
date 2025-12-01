import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SigninForm = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign in to your account</CardTitle>
        <CardDescription>
          Enter your information to sign in to your account
        </CardDescription>
        <CardContent></CardContent>
      </CardHeader>
    </Card>
  );
};

export { SigninForm };
