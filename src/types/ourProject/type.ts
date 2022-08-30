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