import { Button } from "@/components/ui/button";
import { Sidebar } from "./sideBar";
import { Menu } from "./menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardsPage from "./Cards.view/page";

const Supplier = () => {
  return (
    <>
      <div className="hidden md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4">
                <div className="h-full px-4 py-6 lg:px-8">
                  <CardsPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supplier;
