import { useState } from "react";
import { Sidebar } from "../../components/common/sideBar";
import { Menu } from "../../components/common/menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemGrid from "./ItemGrid";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const ThreeTwo = () => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "AF Submission",
    },
  ]);

  const onEventResize = (data) => {
    const { start, end } = data;

    setEvents((events) => {
      events[0].start = start;
      events[0].end = end;
      return { events: [...events] };
    });
  };

  const onEventDrop = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="md:block">
        <Menu />

        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="xl:col-span-1 lg:col-span-2 hidden lg:block" />

              <div className="col-span-3 lg:col-span-3 xl:col-span-4">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="timeline" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="timeline">TimeLine</TabsTrigger>
                        <TabsTrigger value="af" className="relative">
                          AF
                        </TabsTrigger>
                        <TabsTrigger value="ds">DS</TabsTrigger>
                        <TabsTrigger value="sa">SA</TabsTrigger>
                        <TabsTrigger value="sepqm">SEPQM</TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent
                      value="timeline"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <DnDCalendar
                        defaultDate={moment().toDate()}
                        defaultView="month"
                        events={events}
                        localizer={localizer}
                        onEventDrop={onEventDrop}
                        onEventResize={onEventResize}
                        resizable
                        style={{ height: "100vh" }}
                      />
                    </TabsContent>

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
