import NavLinks from "@/src/app/dashboard/nav-links";

export default function SideNav() {
  return (
    <section className="bg-[#262945] h-full  flex flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="flex flex-col ">
          <NavLinks />
        </div>
      </div>
    </section>
  );
}
