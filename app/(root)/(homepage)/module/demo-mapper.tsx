import { Mapper } from "@/components/shared/mapper";

export default function DemoMapper() {
  return (
    <div>
      <Mapper
        data={Array.from({ length: 5 })}
        className="grid grid-cols-5 gap-5"
        render={() => <Card />}
      />
      <Mapper isLoading={true} render={() => <Card />} />
      <Mapper render={() => <Card />} />
    </div>
  );
}
function Card() {
  return <div className="h-20 w-full bg-primary">card</div>;
}
