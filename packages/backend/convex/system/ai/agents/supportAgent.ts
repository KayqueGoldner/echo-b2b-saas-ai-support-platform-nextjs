import { Agent } from "@convex-dev/agent";
import { google } from "@ai-sdk/google";

import { components } from "../../../_generated/api";
import { SUPPORT_AGENT_PROMPT } from "../constants";

export const supportAgent = new Agent(components.agent, {
  name: "My Agent",
  chat: google("gemini-2.5-pro"),
  instructions: SUPPORT_AGENT_PROMPT,
});
