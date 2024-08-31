import Cart from "@/components/cart";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="p-6 lg:p-0 lg:px-10 flex justify-between items-center lg:max-w-6xl lg:mx-auto lg:border-b">
        <div className="flex gap-4 lg:gap-14">
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Menu className="h-6 w-6 text-gray-500" strokeWidth={2} />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <div className="grid gap-5 my-16">
                <Link href={"#"} className="font-bold text-lg">
                  Collections
                </Link>
                <Link href={"#"} className="font-bold text-lg">
                  Men
                </Link>
                <Link href={"#"} className="font-bold text-lg">
                  Women
                </Link>
                <Link href={"#"} className="font-bold text-lg">
                  About
                </Link>
                <Link href={"#"} className="font-bold text-lg">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center">
            <Image
              src={"/assets/logo.svg"}
              width={0}
              height={0}
              alt="Cart"
              className="w-max relative -top-0.5"
            />
          </div>
          <div className="hidden lg:flex gap-8 text-gray-500">
            <div className="relative py-12">
              <Link href={"#"} className="peer hover:text-black">
                Collections
              </Link>
              <Separator
                className={
                  "hidden bg-primary h-[3px] absolute bottom-0 w-full peer-hover:block"
                }
              />
            </div>
            <div className="relative py-12">
              <Link href={"#"} className="peer hover:text-black">
                Men
              </Link>
              <Separator
                className={
                  "hidden bg-primary h-[3px] absolute bottom-0 w-full peer-hover:block"
                }
              />
            </div>
            <div className="relative py-12">
              <Link href={"#"} className="peer hover:text-black">
                Women
              </Link>
              <Separator
                className={
                  "hidden bg-primary h-[3px] absolute bottom-0 w-full peer-hover:block"
                }
              />
            </div>
            <div className="relative py-12">
              <Link href={"#"} className="peer hover:text-black">
                About
              </Link>
              <Separator
                className={
                  "hidden bg-primary h-[3px] absolute bottom-0 w-full peer-hover:block"
                }
              />
            </div>
            <div className="relative py-12">
              <Link href={"#"} className="peer hover:text-black">
                Contact
              </Link>
              <Separator
                className={
                  "hidden bg-primary h-[3px] absolute bottom-0 w-full peer-hover:block"
                }
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:gap-10">
          <Popover>
            <PopoverTrigger className="flex justify-center items-center">
              <ShoppingCart
                className="w-5 h-5 lg:w-6 lg:h-6 hover:text-gray-800 text-gray-500"
                strokeWidth={2}
              />
            </PopoverTrigger>
            <PopoverContent className="">
              <div className="p-5 font-bold">Cart</div>
              <Separator />
              <Cart />
            </PopoverContent>
          </Popover>
          <Image
            src={"/assets/image-avatar.png"}
            width={24}
            height={24}
            alt="Cart"
            className="hover:ring-2 lg:hover:ring-2 hover:ring-primary rounded-full lg:w-8 lg:h-8"
          />
        </div>
      </header>
      {children}
    </>
  );
}
