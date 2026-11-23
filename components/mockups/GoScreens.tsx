import { AppShot } from "./Phone";
import verify from "@/public/mockups/go-1-verify.jpg";
import trip from "@/public/mockups/go-2-trip.jpg";
import request from "@/public/mockups/go-3-request.jpg";

/** Aellpr Go app screens (client-supplied designs), one per step. */
export const goScreens = [
  <AppShot key="verify" src={verify} alt="Aellpr Go app: face scan to verify your identity against your NIN photo" />,
  <AppShot key="trip" src={trip} alt="Aellpr Go app: create a trip with departure and destination, mode of transport, package preference and weight limit" />,
  <AppShot key="request" src={request} alt="Aellpr Go app: a new delivery request with route, package details and price, ready to accept" />,
];
