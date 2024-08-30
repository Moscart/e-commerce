"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [dialogApi, setDialogApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [dialogCurrent, setDialogCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setDialogCurrent(api.selectedScrollSnap());
    dialogApi?.scrollTo(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    dialogApi?.on("select", () => {
      setDialogCurrent(dialogApi.selectedScrollSnap());
    });
  }, [api, dialogApi]);

  const Navigation = ({
    className,
    api,
    current,
  }: {
    className?: string;
    current?: number;
    api?: CarouselApi;
  }) => (
    <div className={cn(`hidden sm:flex justify-between pt-6`, className)}>
      {[1, 2, 3, 4].map((_, index) => (
        <div
          className={`rounded-lg bg-white ${
            index === current ? "ring-4 ring-primary" : ""
          }`}
        >
          <Image
            src={`/assets/image-product-${index + 1}-thumbnail.jpg`}
            alt="Product 1"
            height={80}
            width={80}
            onDragStart={(e) => e.preventDefault()}
            className={`sm:w-28 sm:h-3w-28 lg:w-20 lg:h-20 xl:w-24 xl:h-24  rounded-lg hover:opacity-50 ${
              index === current ? "opacity-50" : ""
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        </div>
      ))}
    </div>
  );
  return (
    <main className="min-h-[calc(100vh_-_72px)] lg:min-h-[calc(100vh_-_122px)]">
      <div className="sm:py-10 lg:py-28 sm:max-w-lg lg:max-w-6xl sm:mx-auto lg:px-10 lg:grid lg:grid-cols-2">
        <Carousel
          opts={{ watchDrag: false }}
          className="lg:px-10"
          setApi={setApi}
        >
          <Dialog>
            <DialogTrigger
              onClick={(e) => window.innerWidth <= 640 && e.preventDefault()}
            >
              <CarouselContent>
                {[1, 2, 3, 4].map((_, index) => (
                  <CarouselItem key={_}>
                    <Image
                      alt="product"
                      src={`/assets/image-product-${index + 1}.jpg`}
                      width={1000}
                      height={1000}
                      onDragStart={(e) => e.preventDefault()}
                      className="aspect-[4/3] lg:aspect-square object-cover object-top w-full sm:rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </DialogTrigger>
            <DialogContent>
              <Carousel
                opts={{ loop: true, watchDrag: false }}
                className=""
                setApi={setDialogApi}
              >
                <CarouselContent>
                  {[1, 2, 3, 4].map((_, index) => (
                    <CarouselItem key={_}>
                      <Image
                        alt="product"
                        src={`/assets/image-product-${index + 1}.jpg`}
                        width={1000}
                        height={1000}
                        onDragStart={(e) => e.preventDefault()}
                        className="aspect-square sm:rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                  <CarouselPrevious className="-left-4 scale-150" />
                  <CarouselNext className="-right-4 scale-150" />
                </div>
              </Carousel>
              <Navigation
                className="pt-2"
                current={dialogCurrent}
                api={dialogApi}
              />
            </DialogContent>
          </Dialog>
          <div className="sm:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <CarouselPrevious className="left-6" />
            <CarouselNext className="right-6" />
          </div>
          <Navigation current={current} api={api} />
        </Carousel>
        <div className="p-6 flex flex-col gap-6 sm:p-0 sm:pt-10 lg:px-10 lg:justify-center">
          <div className="grid gap-2 lg:gap-6">
            <div className="font-bold text-xs lg:text-sm text-gray-500 tracking-[0.15rem] uppercase">
              Sneaker Company
            </div>
            <div className="font-bold text-3xl lg:text-5xl">
              Fall Limited Edition Sneakers
            </div>
            <p className="text-gray-500 text-pretty text-[15px] lg:text-base">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="font-bold flex lg:flex-col lg:items-start lg:justify-normal lg:gap-2 justify-between items-center">
            <div className="flex gap-3">
              <div className="text-3xl">$125.00</div>
              <Badge className="h-fit bg-black hover:bg-black self-center">
                50%
              </Badge>
            </div>
            <div className="line-through text-gray-500">$250.00</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid grid-cols-5 sm:grid-cols-3 bg-gray-100 rounded-md overflow-hidden">
              <Button
                className="col-span-1 px-0 bg-transparent rounded-r-none group hover:bg-transparent"
                size={"lg"}
              >
                <Minus
                  className="h-4 w-4 text-primary group-hover:text-primary/50 transition-all"
                  strokeWidth={3}
                />
              </Button>
              <input
                type="number"
                className="col-span-3 sm:col-span-1 bg-transparent text-center font-bold flex-grow focus:outline-none"
                min={0}
                defaultValue={0}
              />
              <Button
                className="col-span-1 px-0 bg-transparent rounded-l-none group hover:bg-transparent"
                size={"lg"}
              >
                <Plus
                  className="h-4 w-4 text-primary group-hover:text-primary/50 transition-all"
                  strokeWidth={3}
                />
              </Button>
            </div>
            <Button
              className="w-full font-bold text-black shadow-primary/50 shadow-lg"
              size={"lg"}
            >
              <ShoppingCart className="w-4 h-4 me-3" strokeWidth={3} />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
