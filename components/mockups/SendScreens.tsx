import { AppShot } from "./Phone";
import details from "@/public/mockups/send-1-details.jpg";
import transport from "@/public/mockups/send-2-transport.jpg";
import found from "@/public/mockups/send-3-found.jpg";

/** Aellpr Send app screens (client-supplied designs), one per step. */
export const sendScreens = [
  <AppShot key="details" src={details} alt="Aellpr Send app: enter pickup and drop-off points, a product photo, quantity, value and estimated weight" />,
  <AppShot key="transport" src={transport} alt="Aellpr Send app: choose public or private transport and review the delivery price" />,
  <AppShot key="found" src={found} alt="Aellpr Send app: a nearby commuter is found, with route details and a button to generate the pickup OTP" />,
];
