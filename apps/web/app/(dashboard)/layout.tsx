import { DashboardLayout } from "@/modules/dashboard/ui/layouts/dashboard-layout";

interface DashboardGroupLayoutProps {
  children: React.ReactNode;
}

const DashboardGroupLayout = ({ children }: DashboardGroupLayoutProps) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardGroupLayout;
