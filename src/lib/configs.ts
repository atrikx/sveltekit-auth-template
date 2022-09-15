

// Svelte endpoints
export const urlMyAccount = '/account'
export const urlSignUp = '/signup'
export const urlSignIn = '/signin'

// Svelte forms
export const inputsWidth = "60%"
export const buttonsWidth = "50%"
export const formInputsSignIn: { name: string, placeholder: string, type: string }[] = [
    {name: 'email', placeholder: 'Email', type: "text"},
    {name: 'password', placeholder: 'Password', type: "password"},
]
export const formInputsSignUp: { name: string, placeholder: string, type: string }[] = [
    {name: 'username', placeholder: 'Username', type: "text"},
    {name: 'email', placeholder: 'Email', type: "text"},
    {name: 'password', placeholder: 'Password', type: "password"},
]

// API endpoints
export const apiUrl = 'http://127.0.0.1:8000'
export const apiNewAccount = apiUrl + '/criar-conta'
export const apiLogin = apiUrl + '/login'
export const apiMyAccount = apiUrl + '/minha-conta'

