import * as Yup from 'yup'

/**Login dform data */
export const LoginData = {
    usr: '',
    pwd: ''
}

export const LoginSchema = Yup.object().shape({
    usr: Yup.string().required('Username/Email is required'),
    pwd: Yup.string().required('Password is required')
})