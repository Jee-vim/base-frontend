import { useAppForm } from "@/components/form";
import { DUMMY_GROUP } from "@/lib/constants";
import { IconEmail } from "@/lib/image";
import { VBool, VEmail, VPrice, VRequired } from "@/lib/validation";

export default function DemoForm() {
  const form = useAppForm({
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="max-w-xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="name"
          children={(f) => <f.FInput label="Name" placeholder="insert name" />}
          validators={{ onChange: VRequired }}
        />
        <form.AppField
          name="email"
          children={(f) => (
            <f.FInput
              label="Email"
              icon={IconEmail}
              placeholder="insert name"
            />
          )}
          validators={{ onChange: VEmail }}
        />
        <form.AppField
          name="price"
          children={(f) => (
            <f.FInputPrice label="Price" placeholder="insert name" />
          )}
          validators={{ onChange: VPrice }}
        />
        <form.AppField
          name="radio"
          children={(f) => (
            <>
              <f.FInputRadio optionValue={true} label="true" />
              <f.FInputRadio optionValue={false} label="false" />
            </>
          )}
          validators={{ onChange: VBool }}
        />
        <form.AppField
          name="checkbox"
          children={(f) => (
            <f.FInputCheckbox optionValue={"12345"} label="checkbox" />
          )}
        />
        <form.AppField
          name="checkboxMulti"
          children={(f) => (
            <div className="flex flex-col gap-[8px] mt-[8px]">
              {Array.from({ length: 5 }).map((_, id) => {
                return (
                  <f.FInputCheckboxMulti
                    key={id}
                    optionValue={String(id)}
                    label={`checkbox ${id}`}
                  />
                );
              })}
            </div>
          )}
        />
        <form.AppField
          name="area"
          children={(f) => (
            <f.FInputArea label="area" placeholder="insert name" />
          )}
          validators={{ onChange: VRequired }}
        />
        <form.AppField
          name="eat"
          children={(f) => (
            <f.FSelect label="Eat" placeholder="select" groups={DUMMY_GROUP} />
          )}
          validators={{ onChange: VRequired }}
        />
        <form.AppField
          name="fruit"
          children={(f) => (
            <f.FSelectSearch
              label="Fruit"
              placeholder="select"
              option={DUMMY_GROUP[0].items}
            />
          )}
          validators={{ onChange: VRequired }}
        />
        <form.AppField
          name="password"
          children={(f) => (
            <f.FInputPassword label="Password" placeholder="pass" />
          )}
          validators={{ onChange: VRequired }}
        />
        <form.SubmitBtn />
      </form>
    </div>
  );
}
