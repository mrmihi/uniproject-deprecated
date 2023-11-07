import { CodeSandboxLogoIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { moduleData } from "@/dashboards/threetwo/data";

export default function Modules() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Modules</CardTitle>
        <CardDescription>Y3S2 Modules</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-1">
        {moduleData.map((item, index) => (
          <div
            key={index}
            className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <CodeSandboxLogoIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {item.moduleName}
              </p>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
