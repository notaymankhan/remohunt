import { IconSearch, IconMapPin, IconBriefcase, IconRecharging } from '@tabler/icons-react';
const dropDownData = [
    {
        title: "Job Categories",
        icon: IconSearch,
        options:['QA','DevOps','SoftwareEngineering','DataScience','CustomerSuccess','MarketingAndSales','DesignAndCreative','ProductAndOperations','FinanceAndLegal','HrAndRecruiting','Others'],

    },
    {
        title: "Location",
        icon: IconMapPin,
        options:['Delhi','Bengaluru','Hyderabad','Gurgaon','Tokyo','Sydney','Toronto','San Francisco','London','New York'],

    },
    {
        title:"Experience Level",
        icon: IconBriefcase,
        options:['Entry Level','Mid Level','Senior Level'],

    },
    {
        title:'Job Type',
        icon: IconRecharging,
        options:['Full Time','Part Time','Contract','Internship','Freelance'],

    },
];

const jobList = [
    {
        jobTitle: "Software Engineer",
        company: "Google",
        applicants: "1000",
        experience: "Entry Level",
        jobType: "Full Time",
        location: "Delhi",
        package: "100K",
        postedDaysAgo: "12",
        description: "Join Google as a Software Engineer and work on cutting-edge technologies to build innovative products. Collaborate with a talented team to solve complex problems and make a significant impact on millions of users worldwide."
    },
    {
        jobTitle: "Software Engineer",
        company: "Spotify",
        applicants: "1000",
        experience: "Entry Level",
        jobType: "Full Time",
        location: "Delhi",
        package: "100K",
        postedDaysAgo: "12",
        description: "Spotify is looking for a Software Engineer to help us enhance our music streaming platform. You'll work with a dynamic team to develop new features, improve performance, and ensure a seamless user experience."
    },
    {
        jobTitle: "Engineering Manager",
        company: "Walmart",
        applicants: "1000",
        experience: "Entry Level",
        jobType: "Full Time",
        location: "Delhi",
        package: "100K",
        postedDaysAgo: "12",
        description: "Walmart is seeking an Engineering Manager to lead a team of engineers in developing scalable solutions for our e-commerce platform. This role requires strong leadership skills and a passion for driving innovation."
    },
    {
        jobTitle: "Software Engineer",
        company: "Slack",
        applicants: "1000",
        experience: "Entry Level",
        jobType: "Full Time",
        location: "Delhi",
        package: "100K",
        postedDaysAgo: "12",
        description: "Slack is hiring a Software Engineer to contribute to our collaboration platform. You'll work on developing new features, optimizing performance, and ensuring the reliability of our services for millions of users."
    },
    {
        jobTitle: "Digital Marketing Specialist",
        company: "Meta",
        applicants: "1000",
        experience: "Entry Level",
        jobType: "Full Time",
        location: "Delhi",
        package: "100K",
        postedDaysAgo: "12",
        description: "Meta is looking for a Digital Marketing Specialist to join our team. You'll be responsible for creating and executing marketing campaigns, analyzing performance metrics, and driving user engagement across our platforms."
    },
    {
        jobTitle: "UI/UX Engineer",
        company: "Figma",
        applicants: "1000",
        experience: "Entry Level",
        jobType: "Full Time",
        location: "Delhi",
        package: "100K",
        postedDaysAgo: "12",
        description: "Figma is seeking a UI/UX Engineer to design and implement user interfaces for our design tool. You'll work closely with designers and developers to create intuitive and visually appealing experiences for our users."
    },
    {
        jobTitle: "Product Manager",
        company: "Amazon",
        applicants: "1000",
        experience: "Entry Level",
        jobType: "Full Time",
        location: "Delhi",
        package: "100K",
        postedDaysAgo: "12",
        description: "Amazon is hiring a Product Manager to oversee the development and launch of new products. You'll work with cross-functional teams to define product requirements, manage timelines, and ensure successful delivery."
    },
    {
        jobTitle: "Software Engineer",
        company: "Netflix",
        applicants: "1000",
        experience: "Entry Level",
        jobType: "Full Time",
        location: "Delhi",
        package: "100K",
        postedDaysAgo: "12",
        description: "Netflix is looking for a Software Engineer to join our team. You'll be responsible for developing and maintaining our streaming platform, ensuring high performance and reliability for millions of users worldwide."
    },
    {
        jobTitle: "QA Engineer",
        company: "Microsoft",
        applicants: "1000",
        experience: "Experienced",
        jobType: "Full Time",
        location: "Delhi",
        package: "100K",
        postedDaysAgo: "12",
        description: "Microsoft is seeking a QA Engineer to ensure the quality and reliability of our software products. You'll work with development teams to design test plans, execute tests, and identify and resolve issues."
    },
    {
        jobTitle: "DevOps Engineer",
        company: "Nike",
        applicants: "25",
        experience: "Mid Level",
        jobType: "Full Time",
        location: "Delhi",
        package: "150K",
        postedDaysAgo: "1",
        description: "Nike is hiring a DevOps Engineer to manage our cloud infrastructure and deployment pipelines. You'll work with development teams to automate processes, improve system reliability, and ensure seamless deployments."
    },

];

export {dropDownData,jobList};