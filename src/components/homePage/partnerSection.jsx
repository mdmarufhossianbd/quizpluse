import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


// JSON data for partners
const partners = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMgyndp2kyygISgypCYhLxsAbi8gl1rjpZA&s",
    universityName: "Harvard University",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5ywShkB4J3bRYdMeaS-f2UJX1tRcdFn1ug&s",
    universityName: "Stanford University",
  },
  {
    logo: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201902/dome-lighting-by-chris-brown_0.jpg?itok=qcFX3Jzr",
    universityName: "MIT",
  },
];

const PartnerSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <h1 className="text-center text-xl md:text-3xl font-semibold py-6">OUR PARTNERS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {partners.map((partner, index) => (
          <Card key={index} className="w-full p-5">
           
            <CardContent className="text-center">
              <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
                <Image
                  src={partner.logo}
                  alt={`${partner.universityName} logo`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-4 text-lg font-medium">{partner.universityName}</p>
            </CardContent>
          
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
