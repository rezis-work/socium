import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Heart, MessageCircle } from "lucide-react";

interface Post {
  id: string;
  user: {
    username: string;
    avatar: string;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const mockPosts: Post[] = [
  {
    id: "1",
    user: {
      username: "johndoe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    caption: "Beautiful mountain view from my hike today! 🏔️ #nature #hiking",
    likes: 42,
    comments: 8,
    timestamp: "2024-01-15T14:30:00Z",
  },
  {
    id: "2",
    user: {
      username: "sarahsmith",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    caption: "Homemade pasta night with friends! 🍝 So delicious!",
    likes: 156,
    comments: 23,
    timestamp: "2024-01-15T12:15:00Z",
  },
  {
    id: "3",
    user: {
      username: "mikejohnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=400&fit=crop",
    caption: "My new furry friend! Meet Whiskers 🐱 #catsofinstagram",
    likes: 89,
    comments: 12,
    timestamp: "2024-01-14T18:45:00Z",
  },
  {
    id: "4",
    user: {
      username: "emilywilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    caption: "Sunset at the beach 🌅 Perfect end to a perfect day!",
    likes: 203,
    comments: 31,
    timestamp: "2024-01-14T16:20:00Z",
  },
  {
    id: "5",
    user: {
      username: "davidchen",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
    caption:
      "New coding setup! Ready for some productive hours 💻 #developerlife",
    likes: 67,
    comments: 5,
    timestamp: "2024-01-13T20:10:00Z",
  },
];

export function Feed() {
  return (
    <div className="space-y-6">
      {mockPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          {/* user info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={post.user.avatar}
                alt={post.user.username}
                width={64}
                height={64}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-semibold text-sm">
                {post.user.username}
              </span>
            </div>
          </div>
          {/* post image */}
          <div className="aspect-square relative">
            <Image
              src={post.image}
              alt="post"
              className="w-full h-full object-cover"
              height={600}
              width={600}
            />
          </div>
          <div className="p-4 space-y-3">
            {/* like and comment buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant={"ghost"} size={"sm"}>
                  <Heart className="w-6 h-6 text-foreground" />
                </Button>
                <Button variant={"ghost"} size={"sm"}>
                  <MessageCircle className="w-6 h-6 text-foreground" />
                </Button>
              </div>
            </div>

            {/* like and comment count */}
            <div className="text-sm font-semibold">{post.likes} likes</div>
            {/* caption */}
            <div className="text-sm">
              <span className="font-semibold">{post.user.username} </span>
              {post.caption}
            </div>
            {/* view all comments */}
            {post.comments > 0 && (
              <div className="text-sm text-muted-foreground">
                View all {post.comments} comments
              </div>
            )}

            {/* timestamp */}
            <div className="text-xs text-muted-foreground uppercase">
              {new Date(post.timestamp).toLocaleString()}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
