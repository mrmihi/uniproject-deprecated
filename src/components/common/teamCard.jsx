import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function TeamCard({ memberName, memberEmail, memberRoles }) {
  return (
    <CardContent className="grid gap-6">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>DI</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{memberName}</p>
            <p className="text-sm text-muted-foreground">{memberEmail}</p>
          </div>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Roles
              <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" align="end">
            <Command>
              <CommandList>
                <CommandEmpty>No roles found.</CommandEmpty>
                <CommandGroup>
                  {memberRoles.map((item, index) => (
                    <CommandItem
                      key={index}
                      className="teamaspace-y-1 flex flex-col items-start px-4 py-2"
                    >
                      <p>{item.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.roleDescription}
                      </p>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center justify-between space-x-4"></div>
    </CardContent>
  );
}
