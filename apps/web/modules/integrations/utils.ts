import {
  type IntegrationId,
  HTML_SCRIPT,
  REACT_SCRIPT,
  NEXTJS_SCRIPT,
  JAVASCRIPT_SCRIPT,
} from "./constants";

export const createScript = (
  integrationId: IntegrationId,
  organizationId: string
) => {
  switch (integrationId) {
    case "react":
      return REACT_SCRIPT.replace(/{{ORGANIZATION_ID}}/g, organizationId);
    case "nextjs":
      return NEXTJS_SCRIPT.replace(/{{ORGANIZATION_ID}}/g, organizationId);
    case "javascript":
      return JAVASCRIPT_SCRIPT.replace(/{{ORGANIZATION_ID}}/g, organizationId);
    case "html":
      return HTML_SCRIPT.replace(/{{ORGANIZATION_ID}}/g, organizationId);
    default:
      return "";
  }
};
