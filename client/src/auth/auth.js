import Buffer from ""
import { useNavigate } from "react-router-dom"

export const getLocalToken = () => {
    window.localStorage.getItem("token")
}

export const validateOrFetchToken = () => {
    const localToken = getLocalToken()
    if (!localToken) {
        return
    }
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
    return currentTime < userPayload.exp
}

export const handleLogout = () => {

    const navigate = useNavigate()

    window.localStorage.removeItem("token")
    navigate("/")
}
