import { OrganizationList } from "@clerk/nextjs";

export const OrgSelectionView = () => {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/"
      afterSelectOrganizationUrl="/"
      hidePersonal={true}
      skipInvitationScreen={true}
    />
  );
};
