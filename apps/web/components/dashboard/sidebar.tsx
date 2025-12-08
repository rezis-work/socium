"use client";

import Image from "next/image";
import { Card } from "../ui/card";
import { authClient } from "@/lib/auth/client";

export function Sidebar() {
  const { data: session } = authClient.useSession();

  console.log(session);

  if (!session) {
    return (
      <div className="space-y-6">
        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-muted animate-pulse" />
            <div className="flex-1 min-w-0 space-y-2">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-3 bg-muted rounded animate-pulse w-2/3" />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <Image
            src={
              session?.user.image ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            }
            alt="your profile"
            className="w-14 h-14 rounded-full object-cover"
            width={60}
            height={60}
          />
          <div className="flex-1 min-w-0">
            <div className="font-semibold truncate">{session?.user.email}</div>
            <div className="text-sm text-muted-foreground truncate">
              {session?.user.name}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
