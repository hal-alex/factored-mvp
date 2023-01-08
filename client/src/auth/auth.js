import {Buffer} from "buffer"

export const getLocalToken = () => {
    console.log("getLocalToken hit")
    return window.localStorage.getItem("token")
}

export const validateOrFetchToken = () => {
    const localToken = getLocalToken()
    // console.log(localToken)
    if (!localToken) {
        return
    }
    // console.log("validateOrFetchToken hit")
    const splitLocalToken = localToken.split(".")
    if (splitLocalToken.length !== 3) {
        return
    }
    return JSON.parse(Buffer.from(splitLocalToken[1], "base64"))
}

export const isAuthenticated = () => {
    const userPayload = validateOrFetchToken()
    if (!userPayload) return
    const currentTime = Math.round(Date.now() / 1000)
    // console.log(currentTime)
    // console.log(userPayload.exp)
    return currentTime < userPayload.exp
}

