import {useForm} from 'react-hook-form';
import Field from '../common/Field';
import {useNavigate} from 'react-router';

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    navigate('/');
  };

  return (
    <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="mb-6 text-2xl font-bold lg:text-[28px]">Login to your account</h2>
      {/* email  */}
      <Field label="Email" error={errors.email}>
        <input
          className={`auth-input ${errors.email ? 'border-red-500': 'border-grey-200'}`}
          name="email"
          type="email"
          id="email"
          {...register('email', { required: 'Email is required' })}
        />
      </Field>
      {/* password  */}
      <Field label="Password" error={errors.password}>
        <input
          className={`auth-input ${errors.password ? 'border-red-500': 'border-grey-200'}`}
          name="password"
          type="password"
          id="password"
          {...register('password', { 
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
         })}
        />
      </Field>
      {/* Submit  */}
      <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;