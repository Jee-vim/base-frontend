import {
  useAllBanner,
  useAllUser,
  useGetBanner,
  usePostReview,
} from "@/services/queries";

export default function DemoQueries() {
  const { respAllBanner } = useAllBanner();
  const { respGetBanner } = useGetBanner("some-id");
  const { respAllUser, isLoadUser } = useAllUser({ search: "blabla" });
  const { postReview } = usePostReview();

  const handleReview = () => {
    postReview("some-body");
  };
  return (
    <div>
      <button type="button" onClick={handleReview}>
        post review
      </button>
    </div>
  );
}
