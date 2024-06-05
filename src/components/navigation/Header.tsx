"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu.tsx"
import { Link } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () =>{

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <Link to="/home">Home</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link to="/about">About Me</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <ScrollArea>
                <Link to="/projects/ecommerce">ECommerce Project</Link>
              </ScrollArea>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
};

export default Header