import { useAppForm } from "@/components/shared/form";
import { IconEmail } from "@/lib/image";
import { VRequired } from "@/lib/validation";

export default function Form() {
  const form = useAppForm({
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="name"
          children={(f) => <f.InputForm label="Name" />}
          validators={{ onChange: VRequired }}
        />
        <form.AppField
          name="gender"
          children={(f) => <f.InputForm label="Gender" icon={IconEmail} />}
          validators={{ onChange: VRequired }}
        />
        <form.SubmitBtn />
      </form>
    </div>
  );
}
