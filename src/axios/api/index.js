import { endpoints } from "../endpoints"

export const getPlatformInsights = (setData, setLoading) => {
    return endpoints.
        getPlatformInsights().then((res) => {
            if (res.status === 200) {
                setData(res.data.data)
                setLoading(false)
            }
        }).catch((err) => {
            console.log()
        })
}