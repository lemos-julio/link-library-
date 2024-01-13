export const addBook = (newBook) => {
    return {
        type: 'ADD_BOOK',
        payload: newBook
    }
}

export const updateFormData = (data) => ({
    type: 'UPDATE_FORM_DATA',
    payload: data
})