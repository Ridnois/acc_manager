import { forwardRef } from "react";
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu";
import ThemeToggler from "./ThemeToggler";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})


const MainMenu = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="font-bold">
          Options
        </NavigationMenuTrigger>
        <NavigationMenuContent className='min-w-32 p-2'>
          restart
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

export default function Nav() {
  return (
    <nav className='flex justify-between items-center border-b'>
      <p className='font-bold italic bg-gradient-to-r from-accent to-accent-foreground text-clip text-transparent bg-clip-text text-2xl px-4'>
        AM
      </p>
      <div
        className='flex p-4  justify-end gap-4'
      >
        <MainMenu />
        <ThemeToggler />
      </div>
    </nav >
  )
}
