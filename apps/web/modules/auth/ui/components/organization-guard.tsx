"use client";

import { useOrganization } from "@clerk/nextjs";

import { AuthLayout } from "../layouts/auth-layout";
import { OrgSelectionView } from "../views/org-selection-view";

interface OrganizationGuardProps {
  children: React.ReactNode;
}

export const OrganizationGuard = ({ children }: OrganizationGuardProps) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectionView />
      </AuthLayout>
    );
  }

  return <>{children}</>;
};
