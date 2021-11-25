export type SkillsSection = {
    name: string;
    skills: Array<string>;
}

export const mySkills: Array<SkillsSection> = [
    {
        name: 'Languages',
        skills: ['Java', 'Kotlin', 'TypeScript', 'Python']
    },
    {
        name: 'Java tools and libs',
        skills: ['Spring', 'Spring Boot', 'Maven', 'Gradle', 'JUnit', 'Spock', 'Mockito', 'Hibernate', 'MyBatis']
    },
    {
        name: 'Web',
        skills: ['Angular', 'React', 'HTML', 'CSS']
    },
    {
        name: 'Db',
        skills: ['Oracle', 'PostgreSQL']
    },
    {
        name: 'VCS',
        skills: ['Git']
    },
    {
        name: 'Architecture and patterns',
        skills: ['Microservices', 'Hexagonal', 'DDD', 'REST API', 'TDD']
    },
    {
        name: 'DevOps',
        skills: ['Jenkins', 'Docker']
    }
]
