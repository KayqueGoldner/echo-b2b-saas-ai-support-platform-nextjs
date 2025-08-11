import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard";

interface DashboardGroupLayoutProps {
  children: React.ReactNode;
}

const DashboardGroupLayout = ({ children }: DashboardGroupLayoutProps) => {
  return (
    <AuthGuard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGuard>
  );
};

export default DashboardGroupLayout;
