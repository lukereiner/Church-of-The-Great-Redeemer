"use client";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface Alert {
  title: string;
  description: string;
  date_for_alert: string;
  date: string;
}

export function AlertBanner() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const response = await fetch(
          (process.env.NEXT_PUBLIC_STRAPI_URL as string) + "/api/alerts"
        );
        const data = await response.json();
        const adjustedData = data.data.map((alert: Alert) => ({
          title: alert.title,
          description: alert.description,
          date: alert.date_for_alert,
        }));
        setAlerts(adjustedData);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    }
    fetchAlerts();
  }, []);

  return (
    <div>
    {alerts.map((alert, index) => {
      const targetDate = new Date(alert.date);
      targetDate.setDate(targetDate.getDate() + 1)
      targetDate.setHours(23, 59, 59, 0)
      const today = new Date();

      console.log('target: ' + targetDate);
      console.log('today: ' + today);

      if (targetDate >= today) {
        return (
          <div key={index} className="flex items-center justify-center pt-4">
            <Alert
              variant="destructive"
              className="flex items-center justify-center max-w-xl text-center space-x-2 p-4 border-4 border-red-500"
            >
              <div>
                <div className="flex items-center justify-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  <AlertTitle className="text-2xl">{alert.title}</AlertTitle>
                </div>
                <AlertDescription className="text-xl mt-1">
                  {alert.description}
                </AlertDescription>
              </div>
            </Alert>
          </div>
        );
      }
      return null; // Return null if the date is not in the future
    })}
  </div>
  );
}
