// app/dashboard/student/search/_components/client-search.tsx
"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import qs from "query-string";

interface ClientSearchProps {
  defaultValue?: string;
}

export default function ClientSearch({ defaultValue = "" }: ClientSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleSearch = (term: string) => {
    setValue(term);

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: term || undefined,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input value={value} onChange={(e) => handleSearch(e.target.value)} className="w-full pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200" placeholder="Search for a course" />
    </div>
  );
}
