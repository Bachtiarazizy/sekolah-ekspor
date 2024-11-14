"use client";

import { CircleHelp, Compass, Layout, LayoutDashboard, List, Package, ShoppingCart, User2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: Layout,
    label: "Analytics",
    href: "/dashboard/admin/analytics",
  },
  {
    icon: List,
    label: "Courses",
    href: "/dashboard/admin/courses",
  },

  {
    icon: CircleHelp,
    label: "Help center",
    href: "/customer-service",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
