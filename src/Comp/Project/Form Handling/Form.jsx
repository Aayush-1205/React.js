import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset(); 
  };
  return (
    <div className="flex mt-10 justify-center">
      <form className="flex gap-10" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("name")}
          className="border-[1px] border-black rounded-md outline-none px-2 py-1 font-semibold"
          placeholder="Name"
          type="text"
        />
        <input
          {...register("email")}
          className="border-[1px] border-black rounded-md outline-none px-2 py-1 font-semibold"
          placeholder="Email"
          type="email"
        />
        <input
          {...register("image")}
          className="border-[1px] border-black rounded-md outline-none px-2 py-1 font-semibold"
          placeholder="Image URL"
          type="text"
        />
        <input
          className="px-4 py-1 bg-black text-white rounded-md font-semibold"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
