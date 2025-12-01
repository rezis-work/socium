import { SigninForm } from "@/components/auth/signin-form";
import Link from "next/link";

export default function SigninPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-extrabold">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:text-primary/90"
            >
              Create an account
            </Link>
          </p>
        </div>
        <SigninForm />
      </div>
    </div>
  );
}
