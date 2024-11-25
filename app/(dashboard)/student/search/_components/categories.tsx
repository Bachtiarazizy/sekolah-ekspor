"use client";

import { Category } from "@prisma/client";
import React from "react";
import { FiUpload, FiGlobe, FiDollarSign } from "react-icons/fi";

import { IconType } from "react-icons";
import CategoryItem from "./categoty-item";

interface CategoriesProps {
  items: Category[];
}
const IconMap: Record<Category["name"], IconType> = {
  "Ekspor & impor": FiUpload,
  "Digital Marketing": FiGlobe,
  Investment: FiDollarSign,
};
const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto py-3 px-3 bg-secondary md:rounded-tl-3xl md:rounded-bl-xl container mx-auto">
      {items.map((item) => (
        <CategoryItem key={item.id} label={item.name} value={item.id} icon={IconMap[item.name]} />
      ))}
    </div>
  );
};

export default Categories;
