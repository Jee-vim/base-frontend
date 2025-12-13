import CDrawer from "../custom/drawer";
import CDialog from "../custom/dialog";
import { useBreakpoint } from "@/lib/hook";
import { useAppContext } from "../layout/context-provider";
import OvConfirmation from "./ov-confirmation";
import { OV } from "@/lib/constants";

export default function OverlayWrapper() {
  const { isMobile } = useBreakpoint();
  const { overlay, closeOverlay } = useAppContext();
  const id = overlay?.id;
  const open = overlay?.open || false;
  const isPadding = overlay?.isPadding ?? true;
  const disableOutsideInteraction = overlay?.disableOutsideInteraction || false;

  const Content = () => {
    switch (id) {
      case OV.CONFIRMATION:
        return <OvConfirmation />;
    }
  };

  const sharedProps = {
    open,
    onClose: closeOverlay,
    isPadding,
    disableOutsideInteraction,
    children: <Content />,
  };

  return isMobile ? <CDrawer {...sharedProps} /> : <CDialog {...sharedProps} />;
}
