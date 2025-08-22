"use client";

import { useAtomValue } from "jotai";

import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";
import { screenAtom } from "@/modules/widget/atoms/widget-atoms";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  const screen = useAtomValue(screenAtom);

  const screenComponents = {
    error: <p>TODO: error screen</p>,
    loading: <p>TODO: loading screen</p>,
    auth: <WidgetAuthScreen />,
    voice: <p>TODO: voice screen</p>,
    inbox: <p>TODO: inbox screen</p>,
    selection: <p>TODO: selection screen</p>,
    chat: <p>TODO: chat screen</p>,
    contact: <p>TODO: contact screen</p>,
  };

  return (
    <main className="min-h-screen min-w-screen flex size-full flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
