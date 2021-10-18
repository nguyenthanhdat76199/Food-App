export const addUser = (userPass) =>{
    return {
        type: 'ADD',
        payload: userPass,
    }
}