"use client";

import { SignupForm } from "@/components/auth/signup-form";
import { SignupFormData } from "@/lib/auth/schema";
import Link from "next/link";

export default function SignupPage() {
  const handleSubmit = async (data: SignupFormData) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-extrabold">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-primary hover:text-primary/90"
            >
              Sign in
            </Link>
          </p>
        </div>
        <SignupForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
