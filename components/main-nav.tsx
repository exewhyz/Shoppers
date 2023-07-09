"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Btn } from "@/components/ui/btn"

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <div className="ml-5 lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Btn variant="ghost" size="sm" className="p-2 h-5 text-neutral-500 text-sm font-medium transition-colors hover:text-black data-[state=open]:text-black">
              Categories <ChevronDown/>
            </Btn>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 h-fit flex items-center justify-center overflow-y-scroll no-scrollbar" align="end" forceMount>
            <DropdownMenuGroup>
              {routes.map((route) => (
                <DropdownMenuItem key={route.href}>
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-black',
                      route.active ? 'text-black' : 'text-neutral-500'
                    )}
                  >
                    {route.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav
        className="mx-6 hidden lg:flex items-center overflow-x-scroll lg:space-x-6 no-scrollbar">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-black',
              route.active ? 'text-black' : 'text-neutral-500'
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </>

  )
};

export default MainNav;
