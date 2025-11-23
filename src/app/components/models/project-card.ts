

interface ProjteCard{
    title: string;
    imageUrl: string;
    description: string;
    technologies: Array<{name:String}>
    categories: Array<{name:String}>
    githubRepo:string
}

export default ProjteCard