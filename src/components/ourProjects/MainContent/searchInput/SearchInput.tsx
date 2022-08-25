import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../../styles/OurProjects.module.css'

interface IProps {
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
    show: boolean
}

const SearchInput: FC<IProps> = ({handleClick, show}) => {
    const {register, handleSubmit} = useForm({mode: 'all'});

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <form className={styles.search_input_block} onSubmit={onSubmit}>
            <Select handleClick={handleClick} show={show}/>
            <Input {...register("search")} />
            <button className={styles.search_button}><SearchIcon/></button>
        </form>
    );
};

export default SearchInput;