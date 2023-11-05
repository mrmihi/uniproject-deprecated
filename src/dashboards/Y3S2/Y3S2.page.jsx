import { Button } from "@/components/ui/button";
import { Sidebar } from "./sideBar";
import { Menu } from "./menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardsPage from "./Cards.view/page"

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
                <CardsPage/>
                  <Tabs defaultValue="orders" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      {/* <TabsList>
                        <TabsTrigger value="ds" className="relative">
                          DS
                        </TabsTrigger>
                        <TabsTrigger value="af">AF</TabsTrigger>
                        <TabsTrigger value="spqma">SPQMA</TabsTrigger>
                      </TabsList> */}
                      <div className="ml-auto mr-4">
                        <Button>
                          {/* <PlusCircledIcon className="mr-2 h-4 w-4" /> */}
                          Add Card
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="ds"
                      className="border-none p-0 outline-none"
                    >
                    </TabsContent>
                    <TabsContent
                      value="af"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                    </TabsContent>
                    <TabsContent
                      value="spqma"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
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

export default Supplier;
