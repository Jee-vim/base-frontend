import CDialog from "@/components/shared/custom/dialog";
import CDrawer from "@/components/shared/custom/drawer";
import { useAppContext } from "@/components/shared/layout/context-provider";
import { OV } from "@/lib/constants";

export default function DemoOverlay() {
  const { setOpenOverlay } = useAppContext();

  const handleForm = () => {
    setOpenOverlay({
      id: OV.FORM,
    });
  };

  const handleOpen = () => {
    setOpenOverlay({
      id: OV.CONFIRMATION,
    });
  };
  return (
    <div className="flex items-center gap-5">
      <CDrawer trigger={<button type="button">manual drawer</button>}>
        hel
      </CDrawer>
      <CDialog trigger={<button type="button">manual dialog</button>}>
        helo
      </CDialog>
      <button type="button" onClick={handleOpen}>
        auto
      </button>
      <button type="button" onClick={handleForm}>
        auto form
      </button>
    </div>
  );
}
