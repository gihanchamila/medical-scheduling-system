import GridContainer from "@/components/grid-container";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GridContainer className="py-10">{children}</GridContainer>;
}
