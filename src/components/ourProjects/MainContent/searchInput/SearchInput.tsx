import React, {Dispatch, FC, SetStateAction} from 'react';
import {useForm} from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../../styles/OurProjects.module.css'


interface IData {
    id: number,
    name: string,
    name_ru: string
    name_hy: string
}


interface IProps {
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
    showSelect: boolean
    locale: string,
    portfolioTypesArray: Array<IData>
    setResultsSearch: (param: string) => void
    setResultsPortfolioType: (param: number) => void
}

const SearchInput: FC<IProps> = ({
                                     handleClick,
                                     showSelect,
                                     portfolioTypesArray,
                                     locale,
                                     setResultsSearch,
                                     setResultsPortfolioType
                                 }) => {
    const {register, handleSubmit, setValue} = useForm({mode: 'all'});

    const onSubmit = handleSubmit(async ({search}) => {
        await setResultsSearch(search)
        setValue('search','',{
            shouldValidate: true,
            shouldDirty: true
        })
    })

    return (
        <form className={styles.search_input_block} onSubmit={onSubmit}>
            <Select setResultsPortfolioType={setResultsPortfolioType} portfolioTypesArray={portfolioTypesArray} locale={locale}
                    handleClick={handleClick} showSelect={showSelect}/>
            <Input  {...register("search")} />
            <button className={styles.search_button}><SearchIcon/></button>
        </form>
    );
};

export default SearchInput;