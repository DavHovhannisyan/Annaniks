import React, {useCallback, useEffect, useState} from "react";
import {getPortfolioData} from "../../helpers/Api";
import {IProps} from '../../types/ourProject/type'

const MainProjectHook = (props: IProps) => {

    const {locale, itemsArray} = props
    const [showButton, setShowButton] = useState<boolean>(true)
    const [mainData, setMainData] = useState([...itemsArray])
    const [inputText, SetInputText] = useState<string>('')
    const [offset, setOffset] = useState<number>(4)
    const [portfolioType, SetPortfolioType] = useState<undefined | number | string>(3)

    useEffect(() => {
        if (window) {
            localStorage.setItem('portfolioType', '3')

        }
    }, [])

    const setResultsPortfolioOffset = useCallback(async () => {
        console.log(portfolioType)
        const {data} = await getPortfolioData(4, offset, portfolioType, '', locale)
        setMainData([...mainData, ...data.results])
        setShowButton(false);
        setOffset(8)
    }, [offset,portfolioType])


    const setResultsSearch = useCallback(async (search: string) => {
        const {data} = await getPortfolioData(4, 0, portfolioType, search, locale)
        setMainData([...data.results])
        SetInputText(search)
    }, [inputText,portfolioType])

    const setResultsPortfolioType = useCallback(async (param: number) => {
        SetPortfolioType(param)
        const {data} = await getPortfolioData(4, 0, param, '', locale)
        if (data) {
            setMainData([...data.results])
        }
        setShowButton(true)
        setOffset(4)
        SetInputText('')
        SetPortfolioType(param)
        localStorage.setItem('portfolioType', param.toString())
    }, [portfolioType])

    return {
        setResultsPortfolioOffset,
        setResultsSearch,
        setResultsPortfolioType,
        mainData,
        inputText,
        showButton,
        offset,
        setOffset
    }
}
export default MainProjectHook
