import { IconBriefcase,IconMapPin,IconRecharging,IconSearch, icons } from "@tabler/icons-react";

const searchFields =[
    {
        title:"Job Title",
        icon: IconSearch,
        options:['QA','DevOps','SoftwareEngineering','DataScience','CustomerSuccess','MarketingAndSales','DesignAndCreative','ProductAndOperations','FinanceAndLegal','HrAndRecruiting','Others']
    },
    {
        title:"Location",
        icon: IconMapPin,
        options:['Delhi','Bengaluru','Hyderabad','Gurgaon','Tokyo','Sydney','Toronto','San Francisco','London','New York']

    },
    {
        title:"Skills",
        icon: IconRecharging,
        options:["HTML","CSS","JavaScript","React","Node","Python","Java","C++","C#","Ruby","PHP","SQL","MongoDB","PostgreSQL","MySQL","AWS","Azure","GCP","Docker","Kubernetes","Jenkins","Git","Jira","Confluence","Slack","Trello","Asana","Figma","Sketch","AdobeXD","Photoshop","Illustrator","InDesign","AfterEffects","PremierePro","FinalCutPro","Blender","Maya","Unity","UnrealEngine","AutoCAD","SolidWorks","Fusion360","SketchUp","Revit","Rhino","Grasshopper","Lumion","Vray","Enscape","Twinmotion","Photoscan","Agisoft","Zbrush","SubstancePainter","Substance"]

    }
]

const talentData = [
    {
        name: "Alice Johnson",
        role: "Frontend Developer",
        company: "Facebook",
        topSkills: ["JavaScript", "CSS", "HTML"],
        about: "Passionate about creating interactive and responsive web applications. Enjoys working in fast-paced environments and learning new technologies.",
        expectedCtc: "$80k - 150k",
        location: "San Francisco, USA",
        image: "avatar-7"
    },
    {
        name: "Bob Smith",
        role: "Backend Developer",
        company: "Amazon",
        topSkills: ["Node.js", "Express", "PostgreSQL"],
        about: "Experienced in building scalable backend systems. Loves solving complex problems and optimizing performance.",
        expectedCtc: "$90k - 200k",
        location: "Seattle, USA",
        image: "avatar-9"
    },
    {
        name: "Catherine Lee",
        role: "Full Stack Developer",
        company: "Microsoft",
        topSkills: ["Angular", "Node.js", "MySQL"],
        about: "Skilled in both frontend and backend development. Enjoys working on end-to-end solutions and collaborating with cross-functional teams.",
        expectedCtc: "$100k - 220k",
        location: "Austin, USA",
        image: "avatar-7"
    },
    {
        name: "David Brown",
        role: "DevOps Engineer",
        company: "Netflix",
        topSkills: ["Docker", "Kubernetes", "AWS"],
        about: "Specializes in automating deployment pipelines and managing cloud infrastructure. Passionate about improving system reliability and efficiency.",
        expectedCtc: "$110k - 240k",
        location: "Los Angeles, USA",
        image: "avatar-9"
    },
    {
        name: "Emily Davis",
        role: "Data Scientist",
        company: "Spotify",
        topSkills: ["Python", "TensorFlow", "SQL"],
        about: "Expert in data analysis and machine learning. Enjoys uncovering insights from data and building predictive models.",
        expectedCtc: "$120k - 250k",
        location: "New York, USA",
        image: "avatar-7"
    },
    {
        name: "Frank Wilson",
        role: "Mobile Developer",
        company: "Apple",
        topSkills: ["Swift", "Kotlin", "React Native"],
        about: "Experienced in developing mobile applications for both iOS and Android. Passionate about creating seamless user experiences.",
        expectedCtc: "$100k - 230k",
        location: "Cupertino, USA",
        image: "avatar-9"
    }
];

export {searchFields, talentData};