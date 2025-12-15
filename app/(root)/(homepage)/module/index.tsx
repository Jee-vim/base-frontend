"use client";
import CDialog from "@/components/shared/custom/dialog";
import CDrawer from "@/components/shared/custom/drawer";
import { useAppContext } from "@/components/shared/layout/context-provider";
import { OV } from "@/lib/constants";
import { useAllBanner, useGetBanner, usePostReview } from "@/services/queries";

export default function Index() {
  const { respAllBanner } = useAllBanner();
  const { respGetBanner } = useGetBanner("some-id");
  const { postReview } = usePostReview();

  const { setOpenOverlay } = useAppContext();

  const handleReview = () => {
    postReview("some-body");
  };

  const handleOpen = () => {
    setOpenOverlay({
      id: OV.CONFIRMATION,
    });
  };
  return (
    <div>
      <CDrawer trigger={<button type="button">show</button>}>hel</CDrawer>
      <CDialog trigger={<button type="button">show</button>}>helo</CDialog>
      <button type="button" onClick={handleOpen}>
        show
      </button>
    </div>
  );
}
