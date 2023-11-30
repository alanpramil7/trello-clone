import { OrganizationList } from "@clerk/nextjs";

export default function SelectOrgamizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl="/organization/:id"
      afterSelectOrganizationUrl="/organization/:id"
    />
  );
}
