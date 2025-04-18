import React from "react";
import { Card, CardContent } from "./ui/card";
import Wrapper from "./Wrapper";

export default function NavigationBottom() {
  return (
    <footer>
      <Card className="rounded-none border-0 bg-foreground">
        <CardContent className="w-screen container mx-auto px-0">
          <Wrapper>
            <p className="text-white">NavigationBottom</p>
          </Wrapper>
        </CardContent>
      </Card>
    </footer>
  );
}
