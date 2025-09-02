import { HomeIcon, InboxIcon } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";

import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

import { screenAtom } from "../../atoms/widget-atoms";

export const WidgetFooter = () => {
  const screen = useAtomValue(screenAtom);
  const setScreen = useSetAtom(screenAtom);

  return (
    <footer className="flex items-center justify-between border-t bg-background">
      <Button
        size="icon"
        variant="ghost"
        className="h-14 flex-1 rounded-none"
        onClick={() => setScreen("selection")}
      >
        <HomeIcon
          className={cn("size-5", screen === "selection" && "text-primary")}
        />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="h-14 flex-1 rounded-none"
        onClick={() => setScreen("inbox")}
      >
        <InboxIcon
          className={cn("size-5", screen === "inbox" && "text-primary")}
        />
      </Button>
    </footer>
  );
};
