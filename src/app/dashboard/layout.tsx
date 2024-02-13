import SideNav from "@/src/app/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-5/6 w-full flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
     <div    className=" z-0 m-0 p-0 mt-0 h-full w-full  "
      style={{ backgroundImage: `url('/bg-ds.png')`
      }}>
      {children}
      </div> 
      
    </div>
  );
}
