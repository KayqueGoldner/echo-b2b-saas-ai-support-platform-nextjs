import { ConversationIdLayout } from "@/modules/dashboard/ui/layouts/conversation-id-layout";

interface ConversationIdLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ConversationIdLayoutProps) => {
  return <ConversationIdLayout>{children}</ConversationIdLayout>;
};

export default Layout;
