"use client"

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import MobileSidebar from "@/components/MobileSidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";


const NavBar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 
    border-b border-primary/10 bg-secondary h-16">
        <div className="flex items-center">
            <MobileSidebar/>
            <Link href="/">
                <h1 className={cn(
                    "hidden md:block text-xl md:text-3xl font-bold text-primary"
                )}>
                    friends.ai
                </h1>
            </Link>
        </div>
        <div className="flex items-center gap-x-3">
            <ModeToggle/>
            <Button variant="link" size="sm">
                Upgrade
                <Sparkles className="h-4 w-4 fill-white text-white ml-1"/>
            </Button>
            <UserButton />
        </div>
    </div>
  )
}

export default NavBar