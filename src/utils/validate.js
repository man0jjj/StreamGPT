export const checkValidData = (email, password) => {

const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const isPasswordValid = /^.{6,}$/.test(password)

if(!isEmailValid) return "Email ID is not Vaild"
if(!isPasswordValid) return "Password invalid minimum 6 characters required"

return null

}