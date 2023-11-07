import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { DescriptionOutlined } from "@mui/icons-material";

export default function LinkCard({ title, description, module, date }) {
  return (
    <div>
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none">
              Visit
              <ArrowTopRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              {module}
            </div>
            <div>Updated {date}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
