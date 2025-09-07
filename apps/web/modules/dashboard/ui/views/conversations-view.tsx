import Image from "next/image";

interface ConversationsViewProps {}

const ConversationsView = ({}: ConversationsViewProps) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-y-4 bg-muted">
      <div className="flex flex-1 items-center justify-center gap-x-2">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <p className="font-semibold text-lg">Echo</p>
      </div>
    </div>
  );
};

export default ConversationsView;
