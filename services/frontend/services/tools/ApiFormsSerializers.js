export const serializeRegistrationErrors = error => {
    if(!error || Object.keys(error) === 0) return {name: null, message: null}

    let name, message, step

    for (const key in error) {
        name = convertFieldName(key)
        message = convertFieldError(error[key][0])
    }

    const firstStepFields = ['email', 'password1', 'password1']
    step = firstStepFields.some(field => field === name) ? 1 : 2

    return {name, message, step}
}

const convertFieldName = name => {
    switch (name) {
        case 'middle_name':
            return 'name'

        case 'upload_user':
            return 'file'

        case 'addres':
            return 'city'

        default:
            return name
    }
}

const convertFieldError = message => {
    switch (message) {
        case 'A user is already registered with this e-mail address.':
            return 'email is registered'
        default:
            return null
    }
}