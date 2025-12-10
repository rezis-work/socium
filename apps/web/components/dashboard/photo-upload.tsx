"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Image as ImageIcon, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { Label } from "../ui/label";

interface PhotoUploadProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (file: File, caption: string) => Promise<void>;
}

export function PhotoUpload({
  open,
  onOpenChange,
  onSubmit,
}: PhotoUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [caption, setCaption] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreview(null);
    setCaption("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !caption.trim()) return;
    setIsUploading(true);
    try {
      await onSubmit(selectedFile, caption);
      clearSelection();
      // onOpenChange(false);
    } catch (error) {
      console.error("Failed to upload post:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new post</DialogTitle>
        </DialogHeader>

        {!preview ? (
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleClick}
            className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
          >
            <Upload className="w-12 h-12 mx-auto" />
            <p className="text-lg">Drag photos here</p>
            <p className="text-sm text-muted-foreground mb-4">
              or click to select from your computer
            </p>
            <Button variant={"outline"}>
              <ImageIcon className="w-4 h-4 mr-2" />
              Select from your computer
            </Button>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              ref={fileInputRef}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={preview}
                alt="preview"
                className="w-full h-64 object-cover rounded-lg"
                width={64}
                height={64}
              />
              <Button
                variant={"ghost"}
                size={"sm"}
                className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                onClick={clearSelection}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="caption">Caption</Label>
              <textarea
                id="caption"
                placeholder="Write a caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                rows={3}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
            </div>

            <DialogFooter>
              <Button
                variant={"outline"}
                onClick={clearSelection}
                disabled={isUploading}
              >
                Back
              </Button>
              <Button
                onClick={handleUpload}
                disabled={isUploading || !caption.trim()}
              >
                {isUploading ? "Sharing..." : "Share"}
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
