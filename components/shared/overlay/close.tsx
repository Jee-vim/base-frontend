import { useAppContext } from "../layout/context-provider";

export default function Close() {
  const { closeOverlay } = useAppContext();
  return (
    <button onClick={closeOverlay} type="button">
      Close
    </button>
  );
}
