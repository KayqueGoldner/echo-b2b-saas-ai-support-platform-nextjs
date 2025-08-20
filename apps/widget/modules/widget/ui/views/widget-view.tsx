"use client";

import { WidgetHeader } from "../components/widget-header";
import { WidgetFooter } from "../components/widget-footer";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  return (
    <main className="min-h-screen min-w-screen flex size-full flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6">
          <p className="font-semibold text-3xl">Hi There! 👋</p>
          <p className="font-semibold text-lg">How can we help you today?</p>
        </div>
      </WidgetHeader>
      <div className="flex-1 flex">widget view {organizationId}</div>
      <WidgetFooter />
    </main>
  );
};
