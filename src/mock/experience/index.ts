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

    ],
    assetURL: "/assets/images/th.jpg",
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
      { label: SkillsEnum.Javascript },
      { label: SkillsEnum.Typescript },
      { label: SkillsEnum.NodeJs },

    ],
    assetURL: "/assets/images/web-development-2.png",
  },
];
