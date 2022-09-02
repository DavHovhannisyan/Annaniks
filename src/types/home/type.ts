
export interface IOurTeam {
    "id": number;
    image: string;
    "last_name":string;
    "first_name": string;
    "profesia": string;
    "description": string;
    "created_date": string;
}


export interface IProps {
    locale?: string
    ourTeamData?: Array<IOurTeam>;
    portfolioData?: any
}