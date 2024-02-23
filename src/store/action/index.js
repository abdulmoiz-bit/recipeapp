export const deletehandler = (todo) => {
return {
   type: 'DELETE',
   payload: todo
}
}

export const edithandler = (todo) => {
    return {
        type : 'EDIT',
        payload: todo
    }
}