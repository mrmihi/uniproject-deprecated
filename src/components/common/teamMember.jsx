import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { teamData } from "@/dashboards/threetwo/data";
import TeamCard from "./teamCard";

export default function TeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>let 'em cook</CardDescription>
      </CardHeader>
      {teamData.map((item, index) => (
        <TeamCard
          key={index}
          memberName={item.memberName}
          memberEmail={item.memberEmail}
          memberRoles={item.roles}
        />
      ))}
    </Card>
  );
}
