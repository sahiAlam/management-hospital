"use client";
import { Container } from "@mui/material";
import axios from "axios";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { formatTimestamp } from "../utils/formatTimestamp";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

interface CalendlyEmbedProps {
  url: string;
  minWidth?: string;
  height?: string;
}
const AppointmentComponent = ({ credential }: any) => {
  const router = useRouter();
  const { currentDoctor } = useSelector((state: any) => state?.doctors);
  console.log("currentDoc", currentDoctor);

  const fetchEventDetails = async (eventUri: any) => {
    const uuid = eventUri.split("/").pop();

    try {
      const response = await axios.get(eventUri, {
        headers: {
          Authorization: `Bearer ${credential.token}`,
        },
      });
      console.log("Event-details:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  // emailSystem();
  useCalendlyEventListener({
    onEventScheduled: async (e: any) => {
      const eventUri = e.data.payload.event.uri;
      const response = await fetchEventDetails(eventUri);
      console.log("Event Scheduled:", response);
      console.log(formatTimestamp(response?.resource.start_time));

      setTimeout(() => {
        router.push("/doctors");
      }, 5000);
    },
  });

  return (
    <>
      <Container maxWidth="lg">
        <InlineWidget url={credential.calendlyUrl}></InlineWidget>
      </Container>
    </>
  );
};

export default AppointmentComponent;
