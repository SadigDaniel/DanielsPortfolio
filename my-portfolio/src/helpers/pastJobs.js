import rogerslogo from '../Images/jobIcon/rogerslogo.svg'
import RBC from "../Images/jobIcon/RBC.png";
export const pastJobs = [
    {
        name: "Rogers",
        title: "Full stack Web/Mobile Dev",
        iconName: rogerslogo,
        technologyUsed: ['React', "React Native", "Java", "Javascript", "HTML&CSS", "TypeScript", "Spring Boot"],
        role: ["Used React Js and Type script to develop new features for the website", "Used React Native to develop new features for the mobile app", "Used spring boot and Java to update the database tables ",
    "As a part of the OSS and Diagnostic team at Rogers, the team and I were tasked with creating new features that would assist the technicians to diagnose and fix customer issues "]
    },
    {
        name: "RBC",
        title: "Robotic Process Automation",
        iconName: RBC,
        technologyUsed: ['Python', 'Selenium', 'Jira', 'Jenking', 'GitHub'],
        role: ["Developed an automation script to test out the website", "Automated tasks such as filling out an excel sheet and sending emails", "Created a jenking pipeline that would auto deploy projects in git"]
    },
    {
        name: "RBC",
        title: "Technical Systems Analyst",
        iconName: RBC,
        technologyUsed: ['Linux', 'Bash Scripting'],
        role: ["Learned Linux", "created automation scripts using Linux", "These scripts cleaned one of our node servers to save space and money on the server"],
        extra: ["I was a part of RBC's Summer Code camp", "Was in charge of teaching students the basics of python"]
    }
]