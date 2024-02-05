export enum Moods {
  Light = "light",
  Dark = "dark",
}

export enum HomePageSectionIds {
  Header = "header",
  About = "about",
  Specialize = "specialize",
  Experience = "experience",
  Skills = "skills",
  Projects = "projects",
  Contact = "contact",
}

export interface MenuItem {
  id: string;
  label: string;
  link: string;
  isActive: boolean;
}

export const navbarItems = [
  {
    id: HomePageSectionIds.Header,
    label: "Header",
  },
  {
    id: HomePageSectionIds.About,
    label: "About",
  },
  {
    id: HomePageSectionIds.Skills,
    label: "Skills",
  },
  {
    id: HomePageSectionIds.Specialize,
    label: "Specialize",
  },
  {
    id: HomePageSectionIds.Experience,
    label: "Experience",
  },

  {
    id: HomePageSectionIds.Projects,
    label: "Projects",
  },
  {
    id: HomePageSectionIds.Contact,
    label: "Contact",
  },
];

export enum SkillsEnum {
  Javascript = "Javascript",
  Typescript = "Typescript",
  Java = "Java",
  Android= "Android",
  IOS="IOS",
  play = "Play",
  AppStore ='APP Store',
  BloC = "BloC",
Notifications ='Notifications',
RealTime = "RealTime",
Animations = 'Animations',
SixFBS = "60 FBS",
  Dart= "Dart",
  Bloc = "Bloc",
  CloudFunction="Cloud Function",
  Publishing = "Publishing",
  Support ="Support",
  FireBase= "FireBase",
  FireStorage = "Fire Storage",
  RealTimeDatabase="RealTime Database",
  Testing = "Testing",
  Flutter = "Flutter",
  HTML = "HTML",
  CSS = "CSS",
  ReactJs = "React.js",
  NextJs = "Next.js",
  MUI = "Material UI",
  Responsive = "Responsive Design",
  TailwindCSS = "Tailwind CSS",
  ReactRedux = "React Redux",
  ReduxToolkit = "Redux Toolkit",
  ApexCharts = "Apex Charts",
  FarmerMotion = "Farmer Motion",
  ObjectOrientedProgramming = "Object Oriented Programming",
  OOP = "OOP",
  RestAPI = "Rest API",
  GraphQL = "GraphQL",
  Websocket = "Websocket",
  SocketIO = "Socket IO",
  Security = "Security",
  JWT = "JWT (Json Web Token)",
  NodeJs = "Node.js",
  ExpressJs = "Express.js",
  NestJs = "Nest.js",
  SpringBoot = "Spring Boot",
  Mongoose = "Mongoose",
  Sequelize = "Sequelize",
  SwaggerUI = "Swagger UI",
  PayPalPayment = "PayPal Payment",
  Stripe = "Stripe",
  StrapiCMS = "Strapi CMS",
  Redis = "Redis",
  Caching = "Caching",
  RabbitMQ = "RabbitMQ",
  Microservice = "Microservice",
  SQL = "SQL",
  NoSQL = "NoSQL",
  MongoDB = "MongoDB",
  MySQL = "MySQL",
  ReactNative = "React Native",
  Cryptography = "Cryptography",
  Git = "Git",
  Github = "Github",
  Gitlab = "Gitlab",
  Nginx = "Nginx",
  AWS = "AWS (Amazon Web Services)",
  AWSEC2 = "AWS EC2",
  AWSS3 = "AWS S3",
  LoadBalance = "Load Balance",
  Docker = "Docker",
  SelfLearning = "Self Learning",
  Organized = "Organized",
  Arabic = "Arabic",
  English = "English",
}
