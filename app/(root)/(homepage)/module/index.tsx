"use client";
import DemoForm from "./demo-form";
import DemoOverlay from "./demo-overlay";
import DemoQueries from "./demo-queries";

export default function Index() {
  return (
    <div className="flex gap-4 flex-col container">
      <DemoOverlay />
      <DemoForm />
      <DemoQueries />
    </div>
  );
}
