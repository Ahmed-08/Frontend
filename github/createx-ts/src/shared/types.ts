export type CartProductType = {
    id: number,
    category: string,
    title: string,
    price: number,
    teacher: string,
    image: string,
    
}


export type EventDataType = {
    id: number,
    topic: string,
    category: string,
    month: string,
    day: number,
    time: string
    themes?: string[]
}

export type btnPropsType = {
    text: string,
    className: string
    width: string
}

export type InputsType = {
    email: string,
    password: string,
    fullName?: string,
    checkbox?: false
}

interface User{
    fullName: string,
    email: string,
    password: string,
}

export type UserType = {
    accessToken: string,
    user: User
}