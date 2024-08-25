import { fireEvent, render, } from '@testing-library/react-native'
import LandingScreen from '../../src/app/features/authentication/screen/landing-screen'
import useLogin from '../../src/app/features/authentication/hook/useLogin'
jest.useFakeTimers();

jest.mock('../../src/app/hooks/useAppTheme', () => (
    jest.fn(() => ({
        appColors: {},
        setThemeMode: jest.fn()
    }))
))

jest.mock('../../src/app/features/authentication/hook/useLogin', () => (
    jest.fn(() => ({
        isLoading: false,
        LoginFormik: {
            setFieldValue: jest.fn(),
            submitForm: jest.fn(),
            values: {
                usr: '',
                pwd: ''
            },
            errors: {
                usr: '',
                pwd: ''
            }
        },
        onLogin: jest.fn()
    }))
))

describe('Login sheet test', () => {
    it('should render login sheet correctly', () => {
        const component = render(
            <LandingScreen />
        )

        expect(component).toMatchSnapshot()
    })

    it('should simulate the login flow', async () => {
        const LoginFormik = {
            setFieldValue: jest.fn(),
            submitForm: jest.fn(),
            values: {
                usr: '',
                pwd: ''
            },
            errors: {
                usr: '',
                pwd: ''
            }
        }
        useLogin.mockReturnValue({
            isLoading: false,
            LoginFormik: LoginFormik
        })

        const component = render(
            <LandingScreen />
        )

        const { findByTestId } = component

        const loginSheetOpener = await findByTestId('login-sheet-opener') //login  button to open bottom sheet
        expect(loginSheetOpener).toBeDefined()

        fireEvent.press(loginSheetOpener) //open bottomsheet

        const loginSheet = await findByTestId('login-sheet')
        expect(loginSheet).toBeDefined() //assert bottom sheet is opened

        const usernameInput = await findByTestId('username')
        const passwordInput = await findByTestId('password')
        const loginBtn = await findByTestId('login-btn')

        //assert all bottom sheet components are mounted
        expect(usernameInput).toBeDefined()
        expect(passwordInput).toBeDefined()
        expect(loginBtn).toBeDefined()

        fireEvent.press(loginBtn) //click login without any credential entered
        LoginFormik.errors.usr = 'Username is required'
        LoginFormik.errors.pwd = 'Password is required' //simulate errors without credentials
        component.rerender(<LandingScreen />)
        const usernameInputError = await findByTestId('username-error')
        const passwordInputError = await findByTestId('password-error')
        // Assert error messages displayed
        expect(usernameInputError.children).toEqual(['Username is required'])
        expect(passwordInputError.children).toEqual(['Password is required']) 

        const username = 'some user name'
        const password = 'some password'
        fireEvent.changeText(usernameInput, username) // enter user name
        expect(LoginFormik.setFieldValue).toHaveBeenCalledWith('usr', username)
        LoginFormik.values.usr = username
        LoginFormik.errors.usr = ''
        component.rerender(<LandingScreen />)
        expect(usernameInput.props.value).toEqual(username) //assert user name is entered


        fireEvent.changeText(passwordInput, password) //enter password
        expect(LoginFormik.setFieldValue).toHaveBeenCalledWith('pwd', password)
        LoginFormik.values.pwd = password
        LoginFormik.errors.pwd = ''
        component.rerender(<LandingScreen />)
        expect(passwordInput.props.value).toEqual(password) //assert password is entder

        fireEvent.press(loginBtn) // click login button

        expect(LoginFormik.submitForm).toHaveBeenCalled() // Assert submit form is called
    })
})