import { SkillsEnum } from "@/constants";
import Company from "@/dto/company";
import Experience from "@/dto/experience";
import Skill from "@/dto/skill";
import moment from "moment";

export const EXPERIENCES: Experience[] = [
  {
    position: "Software Engineer",
    company: { name: "Aqary International", link: "https://www.linkedin.com/company/aqary-international/mycompany/" },
    startDate: {
      date: moment({
        year: 2023,
        month: 1,
        day: 1,
      }).toDate(),
      isPresent: false,
    },
    endDate: {
      date: null,
      isPresent: true,
    },
    responsibilities: [
      "Mobile Application Developer And Supervisor"
      , "Business Requirement Translation"
      , "System Analyst",
    ],
    skills: [
      { label: SkillsEnum.Flutter },
      { label: SkillsEnum.Dart },
      { label: SkillsEnum.Bloc },
      { label: SkillsEnum.FireBase },
      { label: SkillsEnum.FireStorage },
      { label: SkillsEnum.Github },
      { label: SkillsEnum.RestAPI },
      { label: SkillsEnum.Responsive },
      { label: SkillsEnum.RealTimeDatabase },
      { label: SkillsEnum.GraphQL },
      { label: SkillsEnum.Testing },
    ],
    assetURL: "/assets/images/flutter.svg",
  },

  //
  {
    position: "Senior Flutter Developer",
    company: { name: "AL-Nawras Digital/District", link: "https://www.linkedin.com/in/al-nawras-digital-solutions/?originalSubdomain=ae" },
    startDate: {
      date: moment({
        year: 2022,
        month: 2,
        day: 1,
      })
        .utc()
        .toDate(),
      isPresent: false,
    },
    endDate: {
      date: moment({
        year: 2023,
        month: 0,
        day: 1,
      }).toDate(),
      isPresent: false,
    },
    responsibilities: [
      "Mobile Application Developer",
      "Cloud Backend Developer",
      "Publishing And Support",
    ],
    skills: [
      { label: SkillsEnum.Flutter },
      { label: SkillsEnum.Dart },
      { label: SkillsEnum.Bloc },
      { label: SkillsEnum.FireBase },
      { label: SkillsEnum.FireStorage },
      { label: SkillsEnum.RealTimeDatabase },
      { label: SkillsEnum.Stripe },
      { label: SkillsEnum.GraphQL },
      { label: SkillsEnum.Testing },
      { label: SkillsEnum.Publishing },
      { label: SkillsEnum.Support },
      { label: SkillsEnum.Javascript },
      { label: SkillsEnum.Typescript },
      { label: SkillsEnum.CloudFunction },
      { label: SkillsEnum.NodeJs },

    ],
    assetURL: "/assets/images/cloud.png",
  },
  {
    position: "Flutter Developer",
    company: { name: "Yes Soft", link: "https://ae.linkedin.com/company/yes-soft" },
    startDate: {
      date: moment({
        year: 2019,
        month: 1,
        day: 1,
      })
        .utc()
        .toDate(),
      isPresent: false,
    },
    endDate: {
      date: moment({
        year: 2022,
        month: 0,
        day: 1,
      }).toDate(),
      isPresent: false,
    },
    responsibilities: [
      "Mobile Application Developer",
      "Architectural System Design",
      "Unit Testing And Integration Testing"
    ],
    skills: [
      { label: SkillsEnum.Flutter },
      { label: SkillsEnum.Dart },
      { label: SkillsEnum.Bloc },
      { label: SkillsEnum.FireBase },
      { label: SkillsEnum.FireStorage },
      { label: SkillsEnum.RealTimeDatabase },
      { label: SkillsEnum.Testing },

    ],
    assetURL: "/assets/images/flutter.svg",
  },
  {
    position: "Spring boot Developer",
    company: { name: "B-Wire", link: "https://www.b-wire.co/" },
    startDate: {
      date: moment({
        year: 2018,
        month: 8,
        day: 1,
      })
        .utc()
        .toDate(),
      isPresent: false,
    },
    endDate: {
      date: moment({
        year: 2021,
        month: 0,
        day: 1,
      }).toDate(),
      isPresent: false,
    },
    responsibilities: [
      "Fulfilling non-functional and functional requirements",
      "Building microservices And system distribution"
    ],
    skills: [
      { label: SkillsEnum.SpringBoot },
      { label: SkillsEnum.Java },
      { label: SkillsEnum.SQL },
      { label: SkillsEnum.Microservice },
      { label: SkillsEnum.RabbitMQ },
      { label: SkillsEnum.Testing },
      { label: SkillsEnum.Caching },
      { label: SkillsEnum.Security },
      { label: SkillsEnum.RestAPI },
      { label: SkillsEnum.Docker },


    ],
    assetURL: "/assets/images/spring.png",
  },
];
