import React, { createContext, useCallback, useState } from 'react'
import { STORAGE_NAME } from 'config'
import { Api, ResponseProps } from 'services'

export type User = {
  name: string
}

export type LoginCredentials = {
  email: string
  password: string
  rememberMe: boolean
}

export type RegisterCredentials = {
  name: string
  email: string
  password: string
  terms: boolean
}

export type AuthState = {
  token: string
  user: User
}

export type AuthContextData = {
  user: User
  login(credentials: LoginCredentials): Promise<number>
  register(credentials: RegisterCredentials): Promise<number>
  logout(): void
  updateUser(user: User): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(`${STORAGE_NAME}:token`)
    const user = localStorage.getItem(`${STORAGE_NAME}:user`)

    if (token && user) {
      if (Api.defaults.headers?.authorization)
        Api.defaults.headers.authorization = `Bearer ${token}`
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const login = useCallback(async (loginData: LoginCredentials) => {
    // const { data }: ResponseProps = await Api.post('/login', loginData)
    console.log(loginData)
    const { data, status } = {
      data: {
        token: 'token',
        name: 'Usuário administrator'
      },
      status: 200
    } as ResponseProps
    const { token, name } = data
    localStorage.setItem(`${STORAGE_NAME}:token`, token)
    const user = {
      name
    }
    localStorage.setItem(`${STORAGE_NAME}:user`, JSON.stringify(user))
    if (Api.defaults.headers?.authorization)
      Api.defaults.headers.authorization = `Bearer ${token}`
    setData({ token, user })
    return status
  }, [])

  const register = useCallback(async (registerData: RegisterCredentials) => {
    // const { data }: ResponseProps = await Api.post('/register', registerData)
    console.log(registerData)
    const { data, status } = {
      data: {
        token: 'token',
        name: registerData.name
      },
      status: 200
    } as ResponseProps
    const { token, name } = data
    localStorage.setItem(`${STORAGE_NAME}:token`, token)
    const user = {
      name
    }
    localStorage.setItem(`${STORAGE_NAME}:user`, JSON.stringify(user))
    if (Api.defaults.headers?.authorization)
      Api.defaults.headers.authorization = `Bearer ${token}`
    setData({ token, user })
    return status
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem(`${STORAGE_NAME}:user`, JSON.stringify(user))
      setData({
        token: data.token,
        user
      })
    },
    [setData, data.token]
  )

  const logout = useCallback(() => {
    localStorage.clear()
    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, login, register, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
