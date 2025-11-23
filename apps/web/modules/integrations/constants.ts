export const INTEGRATIONS = [
  {
    id: "html" as const,
    title: "HTML",
    icon: "/languages/html5.svg",
  },
  {
    id: "react" as const,
    title: "React",
    icon: "/languages/react.svg",
  },
  {
    id: "nextjs" as const,
    title: "Next.js",
    icon: "/languages/nextjs.svg",
  },
  {
    id: "javascript" as const,
    title: "JavaScript",
    icon: "/languages/javascript.svg",
  },
];

export type IntegrationId = (typeof INTEGRATIONS)[number]["id"];

export const HTML_SCRIPT = `<script data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const REACT_SCRIPT = `<script data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const NEXTJS_SCRIPT = `<script data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const JAVASCRIPT_SCRIPT = `<script data-organization-id="{{ORGANIZATION_ID}}"></script>`;
