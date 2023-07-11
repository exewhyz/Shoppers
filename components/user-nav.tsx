import { CreditCard, LogOut, ShoppingBag, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignOutButton } from "@clerk/nextjs"
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
import { currentUser } from "@clerk/nextjs"

export async function UserNav() {

  const user = await currentUser();
  console.log(user)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Btn variant="ghost" className="relative h-8 w-fit rounded-full ">
          <div className="flex items-center justify-center gap-x-2">
            <span>Menu</span>
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.profileImageUrl} alt="Profile Image" />
              <AvatarFallback>{user?.firstName}</AvatarFallback>
            </Avatar>
          </div>
        </Btn>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.firstName} {user?.lastName}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.emailAddresses[0].emailAddress}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <Link href='/profile'>
              Profile
            </Link>
            <DropdownMenuShortcut>Ctrl+P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShoppingBag className="mr-2 h-4 w-4" />
            <Link href='/cart'>
              Cart
            </Link>
            <DropdownMenuShortcut>Ctrl+C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Orders</span>
            <DropdownMenuShortcut>Ctrl+O</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <SignOutButton>
            Log out
          </SignOutButton>
          <DropdownMenuShortcut>⇧+Ctrl+Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}