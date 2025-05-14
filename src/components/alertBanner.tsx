import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";

export function AlertBanner() {
  return (
    <div className="flex items-center justify-center pt-4 ">
      <Alert variant="destructive" className="flex items-center justify-center max-w-xl text-center space-x-2 p-4">
        <div>
            <div className="flex items-center justify-center gap-2">
            <AlertCircle className="h-6 w-6" />
            <AlertTitle className="text-2xl">Church Cancelled!</AlertTitle>
            </div>
          <AlertDescription className="text-xl mt-1">
            Due to weather, no church on December 25th
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
}