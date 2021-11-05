export type EducationItemInfo = {
    university: string;
    degree: string;
    from: string;
    to: string;
    faculty: string;
    speciality?: string;
}

export const myEducation: Array<EducationItemInfo> = [
    {
        university: 'Adam Mickiewicz University',
        degree: 'M.Eng in Computer Science',
        from: 'March 2020',
        to: 'September 2021',
        faculty: 'Faculty of Mathematics and Computer Science',
        speciality: 'System Security'
    },
    {
        university: 'Poznan University of Technology',
        degree: 'B.Eng in Computer Science',
        from: 'October 2016',
        to: 'February 2020',
        faculty: 'Faculty of Computing'
    }
]
