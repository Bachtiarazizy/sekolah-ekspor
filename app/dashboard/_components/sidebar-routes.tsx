"use client";

import { BarChart, CircleHelp, Compass, Layout, LayoutDashboard, List, Package, ShoppingCart, User2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";

const teacherRoutes = [
  {
    icon: BarChart,
    label: "Analytics",
    href: "/dashboard/teacher/analytics",
  },
  {
    icon: List,
    label: "Courses",
    href: "/dashboard/teacher/courses",
  },
];

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard/student",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/dashboard/student/search",
  },
  {
    icon: CircleHelp,
    label: "Help center",
    href: "/customer-service",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/dashboard/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
