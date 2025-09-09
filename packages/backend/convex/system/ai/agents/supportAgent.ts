import { Agent } from "@convex-dev/agent";
import { google } from "@ai-sdk/google";

import { components } from "../../../_generated/api";

export const supportAgent = new Agent(components.agent, {
  name: "My Agent",
  chat: google("gemini-2.5-pro"),
  instructions: `You are a customer support agent. Use "resolveConversation" tool when user expresses finalization of the conversation. Use "escalateConversation" tool when user expresses frustation, or requests a human explicitly.`,
});
