export type ExperienceItemInfo = {
    company: string;
    position: string;
    companyType: string;
    from: string;
    to: string;
    description: string;
    technologies: Array<string>;
}

export const myExperience: Array<ExperienceItemInfo> = [
    {
        company: 'JCommerce',
        position: 'Java Software Engineer',
        companyType: 'Outsourcing',
        from: 'July 2021',
        to: 'Present',
        description: 'TODO',
        technologies: ['Java']
    },
    {
        company: 'Proeko Zarzadzamy Energia',
        position: 'Full-Stack Developer',
        companyType: 'Building management systems',
        from: 'March 2019',
        to: 'June 2021',
        description: 'Development of projects in a company dealing with automation, building management systems, ' +
            'or design of installations and systems for heating, ventilation etc. Implementation of tasks related ' +
            'to writing and maintaining microservices based on Spring Boot. Implementation of front-end application ' +
            'using Angular Framework.',
        technologies: ['Java', 'Angular', 'Spring', 'Spring Boot', 'Hibernate', 'Typescript', 'Jenkins', 'Docker',
            'Oracle', 'Git', 'Microservices']
    },
    {
        company: 'Data System Group',
        position: 'Junior Java Developer',
        companyType: 'GPS monitoring',
        from: 'July 2018',
        to: 'March 2019',
        description: 'Implementation of tasks related to writing and maintaining microservices based on Spark Framework' +
            ' in Java. Code optimization, SQL. Writing and maintaining scripts in Python language, responsible for' +
            ' internal issues. Maintaining technical documentation.',
        technologies: ['Java', 'Python', 'PostgreSQL', 'Git', 'Microservices', 'Spark Java']
    }
]
