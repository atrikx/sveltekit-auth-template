
export const checkFormBeforeSend = ({form, data, cancel}: any, setDisplayInvalidEmailTrue: VoidFunction, setDisplayInvalidEmailFalse: VoidFunction) => {
    
    if (data.get('email') !== 'admin') {
        console.log(data.get('email'), data.get('password'));
        console.log('wrong admin');
        setDisplayInvalidEmailTrue();
        cancel()
        return
    }
    setDisplayInvalidEmailFalse();

}
