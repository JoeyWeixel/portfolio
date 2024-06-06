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
import { Label } from "../ui/label"
import { Separator } from "../ui/separator"
import ProjectNav from "../ui/project-nav"

type HeaderProps = Record<string, never>

const projects: { title: string; href: string; description: string }[] = [
  {
    title: "E-Commerce Page",
    href: "/projects/ecommerce",
    description: "Basic E-Commerce page with .NET and SQL backend, TS React Frontend"
  }
]

const Header: React.FC<HeaderProps> = () =>{

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Label className="text-xl">Joey Weixel</Label>
      <Separator orientation="vertical" className="h-4/6"></Separator>
      <NavigationMenu orientation="horizontal" className="w-full h-full text-lg">
        <NavigationMenuList className="gap-10 h-full">
          <NavigationMenuItem className="border-secondary h-full px-4">
            <NavigationMenuLink asChild>
              <Link to="/home">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-primary">
            <NavigationMenuLink asChild>
              <Link to="/about">About Me</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg">Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="flex flex-col justify-start items-center w-[600px] py-4 gap-2">
              {projects.map((project) => (
                <ProjectNav 
                  title={project.title} 
                  href={project.href} 
                  description={project.description}
                />
              ))}
            </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
};

export default Header