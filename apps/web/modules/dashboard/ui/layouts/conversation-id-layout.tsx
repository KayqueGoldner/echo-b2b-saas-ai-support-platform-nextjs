import { ContactPanel } from "@/modules/dashboard/ui/components/contact-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";

interface ConversationIdLayoutProps {
  children: React.ReactNode;
}

export const ConversationIdLayout = ({
  children,
}: ConversationIdLayoutProps) => {
  return (
    <ResizablePanelGroup className="h-full flex-1" direction="horizontal">
      <ResizablePanel className="h-full" defaultSize={60}>
        <div className="flex h-full flex-1 flex-col">{children}</div>
      </ResizablePanel>
      <ResizableHandle className="hidden lg:block" />
      <ResizablePanel
        className="hidden lg:block"
        defaultSize={40}
        maxSize={40}
        minSize={20}
      >
        <ContactPanel />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
