import CDialog from "@/components/shared/custom/dialog";
import CDrawer from "@/components/shared/custom/drawer";

export default function Page() {
  return (
    <div>
      page
      <CDrawer trigger={<button type="button">show</button>}>hel</CDrawer>
      <CDialog trigger={<button type="button">show</button>}>helo</CDialog>
    </div>
  );
}
