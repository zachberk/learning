import "../Form.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container">
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        />
        <p className="validation-error">{errors.fullName?.message}</p>

        <input type="text" placeholder="Email..." {...register("email")} />
        <p className="validation-error">{errors.email?.message}</p>

        <input type="text" placeholder="Age..." {...register("age")} />
        <p className="validation-error">{errors.age?.message}</p>

        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        <p className="validation-error">{errors.password?.message}</p>

        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        <p className="validation-error">{errors.confirmPassword?.message}</p>

        <input type="submit" />
      </div>
    </form>
  );
};
