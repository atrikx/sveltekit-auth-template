

// Svelte endpoints
export const urlSignUp = '/new-account'
export const urlMyAccount = '/account'
export const urlSignIn = '/login'

// Svelte forms
export const formInputsSignIn: { name: string, placeholder: string, type: string }[] = [
    {name: 'email', placeholder: 'Email', type: "text"},
    {name: 'password', placeholder: 'Password', type: "password"},
]

// API endpoints
export const apiUrl = 'http://127.0.0.1:8000'
export const apiNewAccount = apiUrl + '/criar-conta'
export const apiLogin = apiUrl + '/login'
export const apiMyAccount = apiUrl + '/minha-conta'

