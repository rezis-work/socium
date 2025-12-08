"use client";

import Image from "next/image";
import { Card } from "../ui/card";
import { authClient } from "@/lib/auth/client";
import { ThemeToggle } from "../theme/theme-toggle";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface SuggestedUser {
  id: string;
  username: string;
  avatar: string;
  followedBy: string;
}

const mockSuggestedUsers: SuggestedUser[] = [
  {
    id: "1",
    username: "john_doe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    followedBy: "sarah_smith",
  },
  {
    id: "2",
    username: "emma_wilson",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    followedBy: "mike_jones",
  },
  {
    id: "3",
    username: "alex_chen",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    followedBy: "lisa_brown",
  },
  {
    id: "4",
    username: "sophia_miller",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    followedBy: "david_wilson",
  },
  {
    id: "5",
    username: "michael_taylor",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    followedBy: "jennifer_lee",
  },
];

export function Sidebar() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
  };

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
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <ThemeToggle />
            <Button
              variant={"ghost"}
              size={"icon"}
              className="text-muted-foreground hover:text-foreground"
              onClick={handleSignOut}
              title="Sign out"
            >
              <LogOutIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-muted-foreground">
            Suggestions for you
          </h3>
        </div>

        <div className="space-y-3">
          {mockSuggestedUsers.map((user) => (
            <div key={user.id} className="flex items-center space-x-3">
              <Image
                src={user.avatar}
                alt={user.username}
                className="w-8 h-8 rounded-full object-cover"
                width={40}
                height={40}
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm">{user.username}</div>
                {user.followedBy && (
                  <div className="text-xs text-muted-foreground">
                    Followed by {user.followedBy}
                  </div>
                )}
              </div>
              <Button
                variant={"ghost"}
                size={"sm"}
                className="text-primary hover:text-primary/90 text-xs"
              >
                Follow
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
