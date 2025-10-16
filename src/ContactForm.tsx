import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { formInput } from "./services/contactForm.zod";
import type z from "zod";
import { useState } from "react";

const ContactForm = () => {
  type FormInput = z.infer<typeof formInput>;
  const [confirmSubmit, setConfirmSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    mode: "onChange",
    resolver: zodResolver(formInput),
  });
  const name = watch("name");
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    setConfirmSubmit(true);
  };

  return (
    <div className="flex justify-center pt-20">
      {!confirmSubmit ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-1 p-20 rounded-xl"
        >
          <div className="mb-4">
            <label className="font-bold text-2xl">Name:</label>
            <br />
            <input
              {...register("name")}
              className="border-1 h-10 w-[500px] p-2"
            />
            <br />
            {errors?.name && (
              <div className="text-red-700 text-lg">{errors.name.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="font-bold text-2xl">Email:</label>
            <br />
            <input
              {...register("email")}
              className="border-1 p-2 h-10 w-[500px]"
            />
            <br />
            {errors?.email && (
              <div className="text-red-700 text-lg">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="font-bold text-2xl">Message:</label>
            <br />
            <input
              {...register("message")}
              className="border-1 p-2 h-10 w-[500px]"
            />
            <br />
            {errors?.message && (
              <div className="text-red-700 text-lg">
                {errors.message.message}
              </div>
            )}
          </div>
          <input
            type="submit"
            className="w-[500px] h-15 text-2xl cursor-pointer text-center bg-blue-700 text-white"
          />
        </form>
      ) : (
        <div className="font-bold text-3xl">Thank You {name}</div>
      )}
    </div>
  );
};

export default ContactForm;
