export interface IPortfolioType {
    id: number,
    name: string,
    name_ru: string
    name_hy: string
}

export interface IItem {
    id: number
    title: string
    description: string
}

export interface IProps {
    locale: string
    portfolioTypesArray: Array<IPortfolioType>
    itemsArray: Array<IItem>
}

export interface ISingleData {
    id?: number
    title?: string
    description?: string
    subtitle_1?: string
    description_1?: string
    subtitle_2?: string
    description_2?: string
    subtitle_3?: string | null
    description_3?: string | null
    image_1_1?: string
    image_1_2?: string
    image_1_3?: string
    image_1_4?: string
    image_1_5?: string
    image_2_1?: string
    image_2_2?: string
    image_2_3?: string
    image_2_4?: string
    image_2_5?: string
    portfolio_type: Array<IPortfolioType>
}

export interface IPropID {
    data: ISingleData
}