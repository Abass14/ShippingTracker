import { useFormik } from "formik"
import { useLoginMutation } from "../../../services/authentication"
import { LoginData, LoginSchema } from "../form/form"
import { useAppDispatch } from "../../../store/hooks/useDispatch"
import { setUser } from "../../../store/slices/authentication"

const useLogin = () => {
    const [signIn, {isLoading}] = useLoginMutation()
    const dispatch = useAppDispatch()

    const LoginFormik = useFormik({
        initialValues: LoginData,
        validationSchema: LoginSchema,
        onSubmit: value => {
            onLogin(value)
        }
    })

    const onLogin = async (values: typeof LoginData) => {
        const response = await signIn(values).unwrap()
        dispatch(setUser(response))
    }

    return {
        isLoading,
        LoginFormik,
        onLogin
    }
}

export default useLogin