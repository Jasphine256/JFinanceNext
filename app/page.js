import PackageRow from "@/components/Packages";
import Banner from "@/components/widgets/Banner";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-start justify-start p-1 sm:p-4 mt-16">
      <Banner text={"Welcome Mikhael"} balance={"200,000"}/>
      <PackageRow title="Loan Packages" type="loans"/>
      <PackageRow title="Saving Packages" type="savings"/>
    </main>
  );
}
