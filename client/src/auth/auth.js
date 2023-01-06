export const getLocalToken = () => {
    window.localStorage.getItem("token")
}

export const validateOrFetchToken = () => {
    const localToken = getLocalToken()
    if (!localToken) {
        return
    }
    if (splitLocalToken.length !== 3) {
        return
    }
    const splitLocalToken = localToken.split(".")

}

