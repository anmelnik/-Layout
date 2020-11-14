import {useState} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = "GET", body = nul, headers = {}) => {
        try {
            await fetch(url, {method, body, headers})
        } catch (e) {

        }

    }, [])

    return {loading, request}
}