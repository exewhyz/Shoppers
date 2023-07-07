"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { SignOutButton, UserButton } from "@clerk/nextjs";

import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import NavbarActions from "@/components/navbar-actions";
import { useRouter } from "next/navigation";

const Menu = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    const router = useRouter();

    return (
        <>
            <Button
                onClick={onOpen}
                className="ml-auto bg-transparent text-black sm:hidden"
            >
                <AlignJustify size={20} />
            </Button>

            <Dialog open={open} as="div" className="relative z-40 sm:hidden" onClose={onClose}>

                {/* Background color and opacity */}
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                {/* Dialog position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">

                        {/* Close button */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>

                        <div className="flex flex-col gap-5 m-auto">
                            {/* <CategoryNav/> */}
                            <NavbarActions />
                            {/* <UserButton
                                showName
                                userProfileMode="navigation"
                                userProfileUrl="/user-profile"
                                afterSignOutUrl="/"
                            /> */}
                            <Button onClick={() => router.push('/user-profile')}>
                                Profile
                            </Button>
                            <Button>
                                <SignOutButton />
                            </Button>
                </div>
            </Dialog.Panel>
        </div >
            </Dialog >
        </>
    );
};

export default Menu;
