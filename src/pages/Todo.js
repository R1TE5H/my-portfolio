import React, { useState } from "react";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

export default function Todo() {
  const schema = Joi.object({
    item: Joi.string().min(3).max(100).required().label("To-Do"),
  });

  const [items, setItems] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  const onSubmit = (data) => setItems([...items, data]);
  return (
    <>
      <div className="section center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="header"
          style={{
            minWidth: "300px",
            width: "60% ",
            padding: "20px 20px",
            background: `var(--smoke)`,
            borderRadius: "20px",
          }}
        >
          <p className="subHead">Your To-Do List</p>
          <div className="rows center">
            <input
              placeholder="Add an To-Do"
              type="text"
              {...register("item")}
              style={{ height: "50px", borderRadius: "20px", border: "none" }}
            />
            <button type="submit">Hello</button>
          </div>
          {errors.item && <p style={{ color: "red" }}>{errors.item.message}</p>}

          <div className="columns">
            {items.map((items) => (
              <div
                style={{ width: "100%", marginTop: "20px" }}
                key={items.item}
              >
                <div
                  className="rows"
                  style={{
                    width: "80%",
                    height: "60px",
                    background: `var(--sunset)`,
                    borderRadius: "20px",
                    padding: "0px 20px",
                  }}
                >
                  <p>{items.item}</p>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}
