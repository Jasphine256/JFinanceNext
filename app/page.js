import PackageRow from "@/components/compositions/Packages";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-start justify-start p-1 sm:p-4">
      <PackageRow/>
      <PackageRow/>
    </div>
  );
}
