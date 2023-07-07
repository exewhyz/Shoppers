import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import Menu from "@/components/menu";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">SHOPPERSS</p>
          </Link>
          <MainNav data={categories} />
          <Menu/>
          {/* <div className="ml-auto sm:hidden flex items-center space-x-4 ">
            <NavbarActions />
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/user-profile"
              afterSignOutUrl="/"
            />
          </div> */}
          <div className="ml-auto hidden sm:flex items-center space-x-4 ">
            <NavbarActions />
            <UserButton
              showName
              afterSignOutUrl="/"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
