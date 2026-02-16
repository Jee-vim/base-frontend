import { useAppForm } from "@/components/form";
import { DUMMY_GROUP } from "@/lib/constants";
import { IconEmail } from "@/lib/image";
import { VEmail, VPrice, VRequired } from "@/lib/validation";

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
          children={(f) => (
            <f.FInput label="Name" placeholder="insert name" required />
          )}
          validators={{ onChange: VRequired }}
        />
        <form.AppField
          name="email"
          children={(f) => (
            <f.FInput
              label="Email"
              icon={IconEmail}
              placeholder="insert name"
              required
              disabled
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
          name="switch"
          children={(f) => <f.FInputSwitch label="Switch" />}
        />
        <form.AppField
          name="radio"
          children={(f) => (
            <>
              <f.FInputRadio optionValue={true} optionLabel="true" />
              <f.FInputRadio optionValue={false} optionLabel="false" disabled />
            </>
          )}
        />
        <form.AppField
          name="checkbox"
          children={(f) => <f.FInputCheckbox label="checkbox" disabled />}
        />
        <form.AppField
          name="checkboxMulti"
          children={(f) => (
            <f.FInputCheckboxMulti
              label="Select options"
              options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
                { label: "Option 4", value: "4" },
                { label: "Option 5", value: "5" },
              ]}
            />
          )}
        />
        <form.AppField
          name="area"
          children={(f) => (
            <f.FInputArea
              label="area"
              placeholder="insert name"
              required
              disabled
            />
          )}
          validators={{ onChange: VRequired }}
        />
        <form.AppField
          name="eat"
          children={(f) => (
            <f.FSelect
              label="Eat"
              placeholder="select"
              groups={DUMMY_GROUP}
              disabled
              required
            />
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
              required
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
