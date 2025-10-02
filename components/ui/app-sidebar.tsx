import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { Calendar, ClosedCaption, Home, LogOut, Search, Settings } from "lucide-react"
import Link from "next/link"
import { FaComment, FaMoneyBill } from "react-icons/fa"
import { GiOneEyed } from "react-icons/gi"
import { IoLockClosed } from "react-icons/io5"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Button } from "./button"

export function AppSidebar() {

    const items = [
        {
            title: "Profile",
            url: "#",
            icon: Home,
        },
        {
            title: "All Tiffin Service provider",
            url: "#",
            icon: GiOneEyed,
        },
        {
            title: "All Orders",
            url: "#",
            icon: GiOneEyed,
        },
        {
            title: "Cancelled Order",
            url: "#",
            icon: IoLockClosed,
        },
        {
            title: "Plans",
            url: "#",
            icon: Calendar,
        },
        {
            title: "Payments & Subscriptions",
            url: "#",
            icon: FaMoneyBill,
        },
        {
            title: "Customer Reviews",
            url: "#",
            icon: FaComment,
        },
    ]


    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarGroupLabel className="p-1 m-2 bg-gradient-to-l from-green-100 to-green-700 text-transparent bg-clip-text font-thin text-3xl">Green Bites</SidebarGroupLabel>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarGroup />
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <Link href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <div className=" flex justify-between items-center bg-gradient-to-r from-indigo-400 to-gray-100 p-2 backdrop-blur-2xl shadow-lg rounded-md  m-0">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="font-light tracking-tighter">
                        Tony Stark
                    </div>
                    <div className="font-thin ">
                       <LogOut  className=""/> 
                    </div>
                    
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}