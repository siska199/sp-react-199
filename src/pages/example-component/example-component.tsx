import InputBase from "@components/ui/input/input-base";
import { TEventOnChange } from "@typescript/ui-d";
import { useState } from "react";

const ExampleComponentPage = () => {
  const [form, setForm] = useState({
    test: {
      name: "test",
      label: "Test",
      value: "",
    },
  });

  const handleOnChange = (e: TEventOnChange) => {
    const name = e.target.name as keyof typeof form;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: {
        ...form[name],
        value,
      },
    });
  };

  return (
    <article className="p-4">
      <InputBase {...form.test} onChange={handleOnChange} />
    </article>
  );
};

export default ExampleComponentPage;
