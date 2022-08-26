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

export function getPortfolioData(limit?: number, offset?: number, portfolio_type?: number, search?: string, locale?: any) {
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

export function getPortfolioTSingleData(id: number, locale?: any) {
    return (
        API.get(`portfolio/${id}`, {
            params: {
                language: locale
            }
        })
    )
}
