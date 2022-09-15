interface ActionParams {
    form: HTMLFormElement,
    data: FormData, 
    cancel: VoidFunction 
}

interface InputText {
    name: string, 
    placeholder: string, 
    type: string
}