 function useLogin(opts){
  let valid = "garparw"
  let validPass = "garparw123client"
  let user = [
    {
      "username": "Katoive",
      "password": "katoive123client"
    },
    {
      "username": "Nego",
      "password": "Negodev123Client"
    },
    {
      "username": "Nicat",
      "password": "NicatFirdovsiEyşın"
    }
  ]
  if(opts.username !== user.username) return {
    success: false,
    message: " Username Undefined"
  }
  if(opts.password !== user.password) return {
    success: false,
    message: "Password Invalid"
  }
  if(opts.username === user.username && opts.password !== user.password) return {
    success: false,
    message: "Incorrect User"
  }
  if(opts.username !== user.username && opts.password === user.password) return {
    success: false,
    message: "Incorrect User"
  }
  if(opts.username !== user.username && opts.password !== user.password) return {
    success: false,
    message: "Incorrect User"
  }
  return {
    success: true,
    message: "Authorization Succesfull"
  }
}
export { useLogin }