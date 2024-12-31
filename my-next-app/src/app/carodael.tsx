import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Example content for each slide
const slideContent = [
  {
    title: "keeruveee ninakku ariyoo ee year already kazhinju",
    imageUrl: "/images/1.png",
  },
  {
    title: "enikku ariyam ee year korachu okke preshnam indayirunnu",
    imageUrl: "/images/2.png",
  },
  {
    title: "but nammal athalla nammal evide parayane",
    imageUrl: "/images/3.png",
  },
  {
    title: "inna mutheee",
    imageUrl: "/images/4.png",
  },
  {
    title: "ith ente chekarekkaa vendi matram",
    imageUrl: "/images/5.png",
  },
  {
    title: "enikku keerune bhayankare nalla friend ayittu kittye and.......",
    imageUrl: "/images/6.gif",
  },
  {
    title: "and I'm happy that you're still with mee💝",
    imageUrl: "/images/7.gif",
  },
  {
    title: "I'll give you a million flowers if I could",
    imageUrl: "/images/8.gif",
  },
  {
    title: "Happy New Year chekareeeeeee🎉🎉🎉",
    imageUrl: "/images/9.gif",
  },
];

export function CarouselDemo() {
  return (
    <Carousel className="relative w-full max-w-md md:max-w-lg lg:max-w-xl font-fun ">
      {" "}
      {/* Added min-h */}
      <CarouselContent>
        {slideContent.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-2 md:p-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-between space-y-4 p-8 md:p-12 lg:p-16 h-[400px]">
                  {/* Text at the top */}
                  <div className="text-center">
                    {/* Same size for title and slide name */}
                    <span className="text-3xl font-bold">{slide.title}</span>
                  </div>

                  {/* Image at the bottom */}
                  <div className="w-full flex justify-center">
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-[200px] "
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-300" />
      <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-300" />
    </Carousel>
  );
}
