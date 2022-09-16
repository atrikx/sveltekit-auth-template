// Svelte forms
export const formObjectSignUp: InputText[] = [
    {name: 'username', placeholder: 'Username', type: "text"},
    {name: 'email', placeholder: 'Email', type: "text"},
    {name: 'password', placeholder: 'Password', type: "password"}
]
export const formObjectSignIn: InputText[] = [
    {name: 'email', placeholder: 'Email', type: "text"},
    {name: 'password', placeholder: 'Password', type: "password"}
]
export const buttonsWidth = "50%"
export const inputsWidth = "60%"


// Svelte endpoints
export const urlMyAccount = '/account'
export const urlSignUp = '/signup'
export const urlSignIn = '/signin'


// API endpoints
export const apiUrl = 'http://127.0.0.1:8000'
export const apiNewAccount = apiUrl + '/criar-conta'
export const apiMyAccount = apiUrl + '/minha-conta' 
export const apiLogin = apiUrl + '/login'

