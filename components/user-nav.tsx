import { CreditCard, LogOut, ShoppingBag, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignOutButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Btn } from "@/components/ui/btn"

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Btn variant="ghost" className="relative h-8 w-fit rounded-full ">
          {/* <Avatar className="h-8 w-8"> */}
          {/* <AvatarImage src="/favicon.ico" alt="Profile Image" /> */}
          <div className="flex items-center justify-center gap-x-2">
            <span>Menu</span>
            <UserButton afterSignOutUrl="/" />
          </div>
          {/* <AvatarFallback>User</AvatarFallback> */}
          {/* </Avatar> */}
        </Btn>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Aditya</p>
            <p className="text-xs leading-none text-muted-foreground">
              araj52444@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <Link href='/profile'>
              Profile
            </Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShoppingBag className="mr-2 h-4 w-4" />
            <Link href='/cart'>
              Cart
            </Link>
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Orders</span>
            <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <SignOutButton>
            Log out
          </SignOutButton>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}