"use client";

import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BookOpen, Check, Play, Video } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { IconBadge } from "../ui/icon.badge";
import { formatPrice } from "@/lib/format";

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
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-ratio rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">{title}</div>
          <p className="text-xs to-muted-foreground">{category}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 to-slate-500">
              <IconBadge size="sm" icon={BookOpen} />
              <span>
                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
          </div>
          {progress !== null ? <div>Todo</div> : <p className="text-md md:text-sm font-medium text-slate-700">{formatPrice(price)}</p>}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
