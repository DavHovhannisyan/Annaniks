import axios from "axios";


const API = axios.create({
    baseURL: 'https://admin.annaniks.com/api/',
    responseType: 'json'
})

API.interceptors.request.use((config) => {
    if (config) {
        return config
    }
}, (err) => Promise.reject(err))


export function getPortfolioType() {
    return (
        API.get('portfolio-type')
    )
}

export function getPortfolioData(limit?: number, offset?: number, portfolio_type?: number | string, search?: string, locale?: any) {
    return (
        API.get('portfolio', {
                params: {
                    limit: 4,
                    offset: offset || 0,
                    portfolio_type: portfolio_type || 3,
                    search: search || '',
                    language: locale
                }
            }
        )
    )
}

export function getPortfolioSingleData(id: number, locale?: any) {
    return (
        API.get(`portfolio/${id}`, {
            params: {
                language: locale
            }
        })
    )
}
export function getPosition(locale?: any) {
    return (
        API.get(`position`, {
            params: {
                language: locale
            }
        })
    )
}



export default API
