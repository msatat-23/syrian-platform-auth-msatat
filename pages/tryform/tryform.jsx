import { useForm } from "react-hook-form";
import './form.css';
export default function ReactHookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("FORM DATA:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input
                {...register("email",
                    {
                        required: "email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "البريد غير صالح",
                        }
                    }
                )}
                placeholder="Email"
                className="input"
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            <input
                {...register("password", {
                    required: "password is required",
                    minLength: {
                        value: 6,
                        message: "يجب أن تحتوي كلمة المرور على الأقل 6 احرف"
                    }
                })}
                placeholder="Password"
                type="password"
                className="input"
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            <button className="button" type="submit">Submit</button>
        </form>
    );
}



