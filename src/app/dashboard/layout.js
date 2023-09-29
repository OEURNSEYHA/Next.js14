import Link from "next/link";
import "../globals.css";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex flex-row gap-5">
      <div className="w-[20%] h-[100vh] bg-slate-600">
        <Link href={"/dashboard/table"}> table</Link>
        <Link href={"/dashboard/table2"}> Table2 </Link>
      </div>
      <div className="w-[82%]">
      {children}

      </div>

    </section>
  );
}
