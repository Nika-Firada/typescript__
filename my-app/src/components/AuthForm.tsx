import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller, SubmitHandler, useFormState } from "react-hook-form";
import { loginValidation, passwordValidation } from "./Validation";


interface ISignInForm {
  login: string;
  password:string;
}
const AuthForm: React.FC = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);
  const {errors} = useFormState({
    control
  })
  return (
    <div className="auth-form">
      <Typography variant="h4" component="div">
        Sign In
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className="auth-form__subtitle"
      >
        To Get Access
      </Typography>
      <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field: { onChange, value, } }) => (
            <TextField
              label="Log In"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              onChange={onChange}
              value={value}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Password"
              size="small"
              type='password'
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              onChange={onChange}
              value={value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button
          sx={{ marginTop: 2 }}
          disableElevation={true}
          fullWidth={true}
          type="submit"
          variant="contained"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
