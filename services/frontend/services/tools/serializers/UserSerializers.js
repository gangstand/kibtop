export const serializeUserData = user => ({
    userId: user.id,
    surname: user.first_name,
    name: user.middle_name,
    email: user.email,
    city: user.addres,
    avatar: user.upload_user,
})