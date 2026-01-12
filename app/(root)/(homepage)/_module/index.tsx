"use client";
import DemoForm from "./demo-form";
import DemoMapper from "./demo-mapper";
import DemoOverlay from "./demo-overlay";
import DemoQueries from "./demo-queries";

export default function Index() {
  return (
    <div className="flex gap-4 flex-col container">
      <DemoOverlay />
      <DemoForm />
      <DemoQueries />
      <DemoMapper />
    </div>
  );
}
