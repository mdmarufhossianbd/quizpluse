"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";


const ParticipationQuizzes = () => {
  return (
    <Card className="p-4">
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://nextui.org/images/hero-card-complete.jpeg"
        width={270}
      />
    </CardBody>
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h1 className="font-bold">Title</h1>
      <p className="">Total Points</p>
      <p className="">Earned Points</p>
    </CardHeader>
  </Card>
  );
};

export default ParticipationQuizzes;
