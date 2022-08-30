import React, {useCallback, useEffect, useState} from "react";
import {getPortfolioData} from "../../helpers/Api";
import {IProps} from '../../types/ourProject/type'

const MainProjectHook = (props: IProps) => {

    const {locale, portfolioTypesArray, itemsArray} = props

    const [showButton, setShowButton] = useState<boolean>(true)
    const [mainData, setMainData] = useState([...itemsArray])
    const [inputText, SetInputText] = useState<string>('')
    const [offset, setOffset] = useState<number>(0)
    const [portfolioType, SetPortfolioType] = useState<undefined | number | string>(3)

    useEffect(() => {
        if (window) {
            localStorage.setItem('portfolioType', '3')

        }
    }, [])

    const setResultsPortfolioOffset = useCallback(async (new_offset:number) => {
        const {data} = await getPortfolioData(4, 4, portfolioType, '', locale)
        setMainData([...mainData, ...data.results])
        setShowButton(false);
        setOffset(new_offset);
    }, [mainData])


    const setResultsSearch = useCallback(async (search: string) => {

        SetInputText(search)
        const {data} = await getPortfolioData(4, 0, portfolioType, search, locale)
        setMainData([...data.results])
    }, [mainData])

    const setResultsPortfolioType = useCallback(async (param: number) => {
        SetPortfolioType(param)
        const {data} = await getPortfolioData(4, offset, param, '', locale)
        if (data) {
            setMainData([...data.results])
        }
        setShowButton(true)
        setOffset(0)
        localStorage.setItem('portfolioType', param.toString())
    }, [mainData])

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
