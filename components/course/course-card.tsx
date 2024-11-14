"use client";

import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Check, Play, Video } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category?: string;
}

const CourseCard = ({ id, title, imageUrl, price, progress, category, chaptersLength, description }: CourseCardProps) => {
  return (
    <Link href={`/course/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-ratio rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
