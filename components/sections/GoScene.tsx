import { go } from "@/content/site";
import { ProductScene } from "./ProductScene";
import { goScreens } from "@/components/mockups/GoScreens";
import goLogo from "@/public/brand/aellpr-go.png";

export function GoScene() {
  return (
    <ProductScene
      id="go"
      {...go}
      logo={goLogo}
      screens={goScreens}
      cta="go"
      mirrored
    />
  );
}
