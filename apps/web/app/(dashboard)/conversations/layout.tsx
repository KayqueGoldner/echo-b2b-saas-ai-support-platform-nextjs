import { ConversationsLayout } from "@/modules/dashboard/ui/layouts/conversations-layout";

interface ConversationsLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ConversationsLayoutProps) => {
  return <ConversationsLayout>{children}</ConversationsLayout>;
};

export default Layout;
