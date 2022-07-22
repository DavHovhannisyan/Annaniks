
interface IUsers {
    id:string;
    name:string;
    age:string
}

interface IInitialState {
    usersListStatus:string;
    usersList: IUsers[]
}
const initialState:IInitialState = {
    usersListStatus:"",
    usersList:[]
};

export default function reducer(state = initialState, action:any) {
    switch (action.type) {

        default: {
            return state
        }
    }
}
