import React from "react";
import { useForm } from "react-hook-form";

const Reacthookform = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} type="text" placeholder="Name" />
        <input {...register("email")} type="email" placeholder="Email" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Reacthookform;
