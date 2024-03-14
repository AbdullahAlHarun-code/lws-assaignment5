import axios from "axios";
import { useForm } from "react-hook-form";
import Field from "../../commons/Field";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Something went wrong: ${error.message}`,
      });
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(submitForm)}>
      <div className="mb-6">
        <Field label="First Name" error={errors.firstName}>
          <input
            {...register("firstName", {
              required: "First Name is Required",
            })}
            className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.firstName ? "border-red-500" : "border-gray-200"
            }`}
            type="firstName"
            name="firstName"
            id="firstName"
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label="Last Name" error={errors.lastName}>
          <input
            {...register("lastName")}
            className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.lastName ? "border-red-500" : "border-gray-200"
            }`}
            type="lastName"
            name="lastName"
            id="lastName"
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email ID is Required" })}
            className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.email ? "border-red-500" : "border-gray-200"
            }`}
            type="email"
            name="email"
            id="email"
          />
        </Field>
      </div>

      <div className="mb-6">
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.password ? "border-red-500" : "border-gray-200"
            }`}
            type="password"
            name="password"
            id="password"
          />
        </Field>
      </div>

      <p>{errors?.root?.random?.message}</p>
      <div className="mb-6">
        <button
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
          type="submit"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
