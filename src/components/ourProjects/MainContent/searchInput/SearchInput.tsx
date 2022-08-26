import React, {Dispatch, FC, SetStateAction} from 'react';
import {useForm} from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../../styles/OurProjects.module.css'


interface IItem {
    id: number
    title: string
    description: string
}

interface IData {
    id: number,
    name: string,
    name_ru: string
    name_hy: string
}


interface IProps {
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
    show: boolean
    locale: string,
    data: Array<IData>
    results: Array<IItem>
    setResultsSearch: (param: string) => void
    setResultsPortfolioType: (param: number) => void
    SetInputText: Dispatch<SetStateAction<string>>
}

const SearchInput: FC<IProps> = ({
                                     handleClick,
                                     show,
                                     data,
                                     locale,
                                     SetInputText,
                                     results,
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
            <Select setResultsPortfolioType={setResultsPortfolioType} data={data} locale={locale}
                    handleClick={handleClick} show={show}/>
            <Input  {...register("search")} />
            <button className={styles.search_button}><SearchIcon/></button>
        </form>
    );
};

export default SearchInput;