"use client";

import { useState } from "react";
import { SigninFormData, signinSchema } from "@/lib/auth/schema";
import { SIGNIN_FORM_DEFAULT_VALUES } from "@/lib/constants/default-values";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormSetError } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRootError,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SigninFormProps {
  onSubmit: (
    data: SigninFormData,
    setError: UseFormSetError<SigninFormData>
  ) => Promise<boolean>;
}

const SigninForm = ({ onSubmit }: SigninFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    defaultValues: SIGNIN_FORM_DEFAULT_VALUES,
  });

  // Handle form submission
  const handleSubmit = async (data: SigninFormData) => {
    setIsSubmitting(true);
    try {
      const success = await onSubmit(data, form.setError);
      // Only reset on success
      if (success) {
        form.reset();
      }
    } catch (error) {
      console.error("Signin failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        {/* Card Title and Description */}
        <div className="space-y-1 text-center">
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>
            Enter your information to sign in to your account
          </CardDescription>
        </div>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormRootError />
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export { SigninForm };
