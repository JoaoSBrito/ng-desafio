export const validateUser = (user: string) => {
  return user?.toString().length > 4
}

export const validatePassword = (senha: string) => {
  return senha?.toString().length>6
}



