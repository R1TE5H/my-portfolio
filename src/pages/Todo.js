import React from "react";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

export default function Todo() {
  const schema = Joi.object({
    name: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="section center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="header"
          style={{
            width: "300px",
            padding: "20px 10%",
            background: `var(--smoke)`,
          }}
        >
          <p className="subHead">Your To-Do List</p>
        </form>
      </div>
    </>
  );
}
