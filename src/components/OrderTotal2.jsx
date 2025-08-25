import React from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const OrderTotal = () => {
  return (
    <>
      {/* <div> */}
      <div className="flex flex-col w-full items-end ">
        <Card className="max-w-124 w-full">
          <CardHeader>
            <CardTitle>Order Total</CardTitle>
            <CardDescription>
              <div className="flex justify-between">
                <p>14-days meal set</p>
                <p>4200.00 THB</p>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      {/* </div> */}
    </>
  );
};
