export const serializeRegistrationErrors = error => {
    if(!error || Object.keys(error) === 0) return {name: null, message: null}

    let name, message, deskStep, mobileStep

    for (const key in error) {
        name = convertFieldName(key)
        message = convertFieldError(error[key][0])
    }

    const firstStepFields = ['email', 'password1', 'password1']
    deskStep = firstStepFields.some(field => field === name) ? 1 : 2


    mobileStep = name === 'email' ? 1 : 5

    return {name, message, deskStep, mobileStep}
}

const convertFieldName = name => {
    switch (name) {
        case 'username':
            return 'email'

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
        case 'user with this email address already exists.':
            return 'email is registered'
        case 'user with this username already exists.':
                return 'email is registered'
        default:
            return null
    }
}