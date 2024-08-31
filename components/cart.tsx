"use client";

import { Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

export default function Cart() {
  const [local, setLocal] = useState(window.localStorage.getItem("totalItems"));
  const handleRemoveCart = () => {
    setLocal("0");
    window.localStorage.removeItem("totalItems");
  };
  return (
    <div className="min-h-[154px] flex flex-col">
      {!local || local == "0" ? (
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
                  <div className="">$125.00 x {local}</div>
                  <div className="font-bold text-black">
                    ${parseInt(local) * 125}.00
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
          <Button className="mt-5 w-full text-black font-bold" size={"lg"}>
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}
