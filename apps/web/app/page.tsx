"use client";

import { Feed } from "@/components/dashboard/feed";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Stories } from "@/components/dashboard/stories";
import { Button } from "@/components/ui/button";
import { PhotoUpload } from "@/components/dashboard/photo-upload";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const handleCreatePost = async (file: File, caption: string) => {
    const formData = new FormData();
    formData.append("image", file);

    const uploadResponse = await fetch("/api/v1/upload/image", {
      method: "POST",
      body: formData,
    });
    if (!uploadResponse.ok) {
      throw new Error("Failed to upload image");
    }
    const { filename } = await uploadResponse.json();
    console.log(filename);
    return filename;
  };
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Stories />
            <Feed />
          </div>
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <Sidebar />
          </div>
        </div>
      </div>

      <PhotoUpload
        open={showUploadModal}
        onOpenChange={setShowUploadModal}
        onSubmit={handleCreatePost}
      />
      <Button
        variant={"default"}
        size={"icon"}
        className="fixed bottom-4 right-4 bg-white text-black rounded-full hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800"
        onClick={() => setShowUploadModal(true)}
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
}
