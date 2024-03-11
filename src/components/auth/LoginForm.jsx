import {useForm } from "react-hook-form"
import Field from "../../commons/Field";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
export default function LoginForm(){
    const navigate = useNavigate()
    const {setAuth} = useAuth()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const submitForm = (formData)=>{
        console.log(formData);
        const user = {...formData}
        setAuth({user})
        navigate("/")
    }
    return (
        <form
            className="" 
            onSubmit={handleSubmit(submitForm)}
        >
            <div className="mb-6">
                <Field label="Email" error={errors.email}>
                    <input
                        {...register("email", {required:"Email Id is required"})}
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

            <div className="mb-6">
                <Field>
                    <button
                        className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                        Login
                    </button>
                </Field>
            </div>
            
        </form>
    );
}