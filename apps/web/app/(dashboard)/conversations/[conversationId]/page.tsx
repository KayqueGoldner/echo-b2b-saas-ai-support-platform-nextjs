import { Id } from "@workspace/backend/_generated/dataModel";
import { ConversationIdView } from "@/modules/dashboard/ui/views/conversation-id-view";

interface ConversationIdPageProps {
  params: Promise<{ conversationId: string }>;
}

const ConversationIdPage = async ({ params }: ConversationIdPageProps) => {
  const { conversationId } = await params;

  return (
    <ConversationIdView
      conversationId={conversationId as Id<"conversations">}
    />
  );
};

export default ConversationIdPage;
