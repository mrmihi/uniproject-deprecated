import { Button } from "@/components/ui/button";
import { Sidebar } from "../../components/common/sideBar";
import { Menu } from "../../components/common/menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardsPage from "./Cards.view/page";
import ItemGrid from "./ItemGrid";
const ThreeTwo = () => {
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
                  {/* <CardsPage /> */}

                  <Tabs defaultValue="af" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="af" className="relative">
                          AF
                        </TabsTrigger>
                        <TabsTrigger value="ds">DS</TabsTrigger>
                        <TabsTrigger value="sa">SA</TabsTrigger>
                        <TabsTrigger value="sepqm">SEPQM</TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent
                      value="af"
                      className="border-none p-0 outline-none"
                    >
                      <ItemGrid module={"af"} />
                    </TabsContent>

                    <TabsContent
                      value="ds"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <ItemGrid module={"ds"} />
                    </TabsContent>

                    <TabsContent
                      value="sa"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <ItemGrid module={"sa"} />
                    </TabsContent>

                    <TabsContent
                      value="sepqm"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <ItemGrid module={"sepqm"} />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeTwo;
