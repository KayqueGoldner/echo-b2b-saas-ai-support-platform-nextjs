"use client";

import { ChevronRightIcon, MessageSquareTextIcon } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";
import { useMutation } from "convex/react";
import { useState } from "react";

import { Button } from "@workspace/ui/components/button";
import { api } from "@workspace/backend/_generated/api";

import { WidgetHeader } from "../components/widget-header";
import {
  contactSessionIdAtomFamily,
  conversationIdAtom,
  errorMessageAtom,
  organizationIdAtom,
  screenAtom,
} from "../../atoms/widget-atoms";

export const WidgetSelectionScreen = () => {
  const setScreen = useSetAtom(screenAtom);
  const setErrorMessage = useSetAtom(errorMessageAtom);
  const setConversationId = useSetAtom(conversationIdAtom);

  const organizationId = useAtomValue(organizationIdAtom);
  const contactSessionId = useAtomValue(
    contactSessionIdAtomFamily(organizationId || "")
  );

  const createConversation = useMutation(api.public.conversations.create);
  const [isPending, setIsPending] = useState(false);

  const handleNewConversation = async () => {
    if (!organizationId) {
      setScreen("error");
      setErrorMessage("Missing Organization ID");
      return;
    }

    if (!contactSessionId) {
      setScreen("auth");
      return;
    }

    setIsPending(true);

    try {
      const conversationId = await createConversation({
        organizationId,
        contactSessionId,
      });

      setConversationId(conversationId);

      setScreen("chat");
    } catch {
      setScreen("auth");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6">
          <p className="font-semibold text-3xl">Hi There! 👋</p>
          <p className="font-semibold text-lg">Let&apos;s get you started</p>
        </div>
      </WidgetHeader>

      <div className="flex flex-1 flex-col gap-y-4 p-4 overflow-y-auto">
        <Button
          variant="outline"
          className="h-16 w-full justify-between"
          onClick={handleNewConversation}
          disabled={isPending}
        >
          <div className="flex items-center gap-x-2">
            <MessageSquareTextIcon className="size-4" />
            <span>Start Chat</span>
          </div>
          <ChevronRightIcon />
        </Button>
      </div>
    </>
  );
};
