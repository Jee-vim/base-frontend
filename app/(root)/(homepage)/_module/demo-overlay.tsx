import { UIDialog } from "@/components/ui";
import { UIDrawer } from "@/components/ui";
import { useAppContext } from "@/components/layout/context-provider";
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
      <UIDrawer trigger={<button type="button">manual drawer</button>}>
        hel
      </UIDrawer>
      <UIDialog trigger={<button type="button">manual dialog</button>}>
        helo
      </UIDialog>
      <button type="button" onClick={handleOpen}>
        auto
      </button>
      <button type="button" onClick={handleForm}>
        auto form
      </button>
    </div>
  );
}
