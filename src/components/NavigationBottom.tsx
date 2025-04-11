import React from "react";
import { Card, CardContent } from "./ui/card";

export default function NavigationBottom() {
  return (
    <footer>
      <Card className="rounded-none border-0 bg-foreground">
        <CardContent className="w-screen container mx-auto px-0">
          <p className="text-white">NavigationBottom</p>
        </CardContent>
      </Card>
    </footer>
  );
}
