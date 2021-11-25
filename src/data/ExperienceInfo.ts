type ProjectInfo = {
    company: string;
    description: string;
}

export type ExperienceItemInfo = {
    company: string;
    position: string;
    companyType: string;
    from: string;
    to: string;
    description: string;
    technologies: Array<string>;
    projects?: Array<ProjectInfo>
}

export const myExperience: Array<ExperienceItemInfo> = [
    {
        company: 'JCommerce',
        position: 'Java Software Engineer',
        companyType: 'Outsourcing',
        from: 'July 2021',
        to: 'Present',
        description: 'Working for external clients and development of inside-company project.',
        technologies: ['Java', 'Spring', 'Spring Boot', 'Kafka', 'Jenkins', 'Docker',
            'Oracle', 'Git', 'Microservices', 'Groovy'],
        projects: [
            {company: 'ING Bank Slaski', description: 'Working in Mobile Payments team in a bank company. ' +
                    'At the beginning, developing new features and maintenance of existing backend for fledgeling ' +
                    'payment method: BLIK-C (Contacless BLIK). Then, development of backend for brand new payment ' +
                    'method: Visa Mobile. Creating project from scratch, choosing architecture and so on. In both ' +
                    'cases, development was related to microservices architecture but in case of BLIK-C it was partly ' +
                    'about migrating from monolith.'},
            {company: 'JCommerce', description: 'Inside company project. Development of backend for browser RPG game. ' +
                    'Implementation of tasks related to writing and maintaining microservices based on Spring Boot and ' +
                    'communicating by Kafka.'}
        ]
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
