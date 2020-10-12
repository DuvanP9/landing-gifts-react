export interface IUser {
    username: string
    password:  string
    helperText: string
    isError: boolean
}

export type Action = { type: 'setUsername', payload: string }
| { type: 'setPassword', payload: string }
| { type: 'loginSuccess', payload: string }
| { type: 'loginFailed', payload: string }
| { type: 'setIsError', payload: boolean };
