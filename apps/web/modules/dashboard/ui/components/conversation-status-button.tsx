import { ArrowRightIcon, ArrowUpIcon, CheckIcon } from "lucide-react";

import { Doc } from "@workspace/backend/_generated/dataModel";
import { Button } from "@workspace/ui/components/button";
import { Hint } from "@workspace/ui/components/hint";

interface ConversationStatusButtonProps {
  status: Doc<"conversations">["status"];
  onClick: () => void;
  disabled?: boolean;
}

export const ConversationStatusButton = ({
  onClick,
  status,
  disabled,
}: ConversationStatusButtonProps) => {
  if (status === "resolved") {
    return (
      <Hint text="Mark as unresolved">
        <Button
          size="sm"
          variant="tertiary"
          onClick={onClick}
          disabled={disabled}
        >
          <CheckIcon />
          Resolved
        </Button>
      </Hint>
    );
  }

  if (status === "escalated") {
    return (
      <Hint text="Mark as resolved">
        <Button
          size="sm"
          variant="warning"
          onClick={onClick}
          disabled={disabled}
        >
          <ArrowUpIcon />
          Escalated
        </Button>
      </Hint>
    );
  }

  return (
    <Hint text="Mark as escalated">
      <Button
        size="sm"
        variant="destructive"
        onClick={onClick}
        disabled={disabled}
      >
        <ArrowRightIcon />
        Unresolved
      </Button>
    </Hint>
  );
};
