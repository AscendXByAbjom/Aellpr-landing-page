import { send } from "@/content/site";
import { ProductScene } from "./ProductScene";
import { sendScreens } from "@/components/mockups/SendScreens";
import sendLogo from "@/public/brand/aellpr-send.png";

export function SendScene() {
  return (
    <ProductScene
      id="send"
      {...send}
      logo={sendLogo}
      screens={sendScreens}
      cta="send"
    />
  );
}
