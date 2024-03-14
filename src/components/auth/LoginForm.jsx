import { useForm } from "react-hook-form";
import Field from "../../commons/Field";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status == 200){
        const {user, token} = response.data;
        console.log(response.data)
        if(token){
            const authToken = token.accessToken;
            const refreshToken = token.refreshToken;
            console.log(authToken);
            setAuth({ user, authToken, refreshToken });
            navigate("/");
        }
        
      }
     
      
    } catch (error) {
        console.log(error)
      setError("root.random",{
        type: "random",
        message: `User with email ${formData.email} is not found!`,
      })
    }
  };
  return (
    <form className="" onSubmit={handleSubmit(submitForm)}>
      <div className="mb-6">
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email Id is required" })}
            className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none focus:border-indigo-500 ${
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
            className={`w-full p-3 bg-[#030317] border rounded-md focus:outline-none focus:border-indigo-500 ${
              !!errors.password ? "border-red-500" : "border-gray-200"
            }`}
            type="password"
            name="password"
            id="password"
          />
        </Field>
      </div>
         <p className="text-red">{errors?.root?.random?.message}</p>   
      <div className="mb-6">
        <Field>
          <button className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
            Login
          </button>
        </Field>
      </div>
    </form>
  );
}
