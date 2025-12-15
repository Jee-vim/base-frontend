"use client";
import CDialog from "@/components/shared/custom/dialog";
import CDrawer from "@/components/shared/custom/drawer";
import { useAppContext } from "@/components/shared/layout/context-provider";
import { OV } from "@/lib/constants";
import { useAllBanner, useGetBanner, usePostReview } from "@/services/queries";
import Form from "./form";

export default function Index() {
  const { respAllBanner } = useAllBanner();
  const { respGetBanner } = useGetBanner("some-id");
  const { postReview } = usePostReview();

  const { setOpenOverlay } = useAppContext();

  const handleReview = () => {
    postReview("some-body");
  };

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
    <div className="flex gap-4 flex-col">
      <CDrawer trigger={<button type="button">show</button>}>hel</CDrawer>
      <CDialog trigger={<button type="button">show</button>}>helo</CDialog>
      <button type="button" onClick={handleOpen}>
        show
      </button>
      <button type="button" onClick={handleForm}>
        show
      </button>
      <Form />
    </div>
  );
}
