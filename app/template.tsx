"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/store/cart-store";
import { Menu, ShoppingCart, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const total = useCartStore((state) => state.total);
  const resetCartState = useCartStore((state) => state.resetCartState);
  const handleRemoveCart = () => {
    resetCartState();
  };
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
            <PopoverTrigger className="flex justify-center items-center relative">
              <ShoppingCart
                className="w-5 h-5 lg:w-6 lg:h-6 hover:text-gray-800 text-gray-500"
                strokeWidth={2}
              />
              {total > 0 && (
                <Badge className="absolute top-0 right-0 translate-x-1/3 lg:translate-x-1/4 -translate-y-1/4 lg:-translate-y-0 py-0 px-1.5 text-[8px]">
                  {total}
                </Badge>
              )}
            </PopoverTrigger>
            <PopoverContent className="">
              <div className="p-5 font-bold">Cart</div>
              <Separator />
              <div className="min-h-[154px] flex flex-col">
                {total == 0 ? (
                  <div className="text-gray-500 font-bold h-full flex-1 flex justify-center items-center">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="text-gray-500 p-5">
                    <div className="grid gap-4">
                      <div className="flex gap-4 items-center">
                        <div className="flex-shrink-0">
                          <Image
                            src={"/assets/image-product-1-thumbnail.jpg"}
                            alt="Fall Limited Edition Sneakers"
                            width={50}
                            height={50}
                            className="rounded"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="">Fall Limited Edition Sneakers</div>
                          <div className="flex justify-between">
                            <div className="">$125.00 x {total}</div>
                            <div className="font-bold text-black">
                              ${total * 125}.00
                            </div>
                          </div>
                        </div>
                        <Button
                          className="text-gray-500 hover:text-destructive bg-white hover:bg-white"
                          size={"icon"}
                          onClick={() => handleRemoveCart()}
                        >
                          <Trash className="w-4 h-4" strokeWidth={2} />
                        </Button>
                      </div>
                    </div>
                    <Button
                      className="mt-5 w-full text-black font-bold"
                      size={"lg"}
                    >
                      Checkout
                    </Button>
                  </div>
                )}
              </div>
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
