import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import TeamMembers from "./teamMember";
import Modules from "./modules";

export function Sidebar({ className, playlists }) {
  return (
    <div className={cn("pb-12 border-r-4", className)}>
      <div className="space-y-4 py-4 px-2">
        <TeamMembers />
        <Separator />
        <Modules />
      </div>
    </div>
  );
}
