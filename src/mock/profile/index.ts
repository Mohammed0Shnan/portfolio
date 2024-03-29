import { SkillsEnum } from "@/constants";
import Education from "@/dto/education";
import Profile from "@/dto/profile";
import Skill from "@/dto/skill";

export const PROFILE: Profile = {
  firstName: "Mohammed",
  lastName: "Shnan",
  position: "Software Engineer",
  summary: [
    "Six years of Software Development experience, including Five years Specialising in Mobile Development",
    "Two years in Backend & 5 years of experience in databases (SQL , NO SQL), Always striving for improved outcomes",
    "By combining my advanced knowledge of software development I aim to meet and surpass client expectations, consistently delivering exceptional results",
    "I am a proactive self-learner with proficiency in Java & Spring Boot, These self-acquired skills complement my technical repertoire and allow me to adapt swiftly to evolving technologies"
  ],
  email: "mohammed0shnan@gmail.com",
  profilePhotoLink: "/assets/images/me.png",
  linkedin: "https://www.linkedin.com/in/mohammad-shnan-0a1799220/",
  github: "https://github.com/Mohammed0Shnan",
  phoneNumber: "+971544512271",
  whatsappNumber: "+971544512271",
  skills: [
    { label: SkillsEnum.Javascript, icon: "skill-icons:javascript" },
    { label: SkillsEnum.Flutter, icon:"skill-icons:flutter-dark" },
    { label: SkillsEnum.Typescript, icon: "skill-icons:typescript" },
    { label: SkillsEnum.Java, icon: "skill-icons:java-light" },
    { label: SkillsEnum.HTML, icon: "skill-icons:html" },
    { label: SkillsEnum.CSS, icon: "skill-icons:css" },
    { label: SkillsEnum.ReactJs, icon: "skill-icons:react-light" },
    { label: SkillsEnum.NextJs, icon: "skill-icons:nextjs-light" },
    { label: SkillsEnum.MUI, icon: "skill-icons:materialui-light" },
    { label: SkillsEnum.TailwindCSS, icon: "skill-icons:tailwindcss-light" },
    { label: SkillsEnum.Responsive, icon: "mdi:responsive" },
    { label: SkillsEnum.ReactRedux, icon: "skill-icons:redux" },
    { label: SkillsEnum.ApexCharts, icon: "flat-color-icons:line-chart" },
    { label: SkillsEnum.FarmerMotion, icon: "tdesign:animation" },
    { label: SkillsEnum.RestAPI, icon: "eos-icons:api" },
    { label: SkillsEnum.GraphQL, icon: "skill-icons:graphql-light" },
    {
      label: SkillsEnum.ObjectOrientedProgramming,
      icon: "fluent-mdl2:split-object",
    },
    {
      label: `${SkillsEnum.SocketIO} & ${SkillsEnum.Websocket}`,
      icon: "devicon:socketio",
    },
    { label: SkillsEnum.Security, icon: "mdi:security" },
    { label: SkillsEnum.JWT, icon: "logos:jwt-icon" },
    { label: SkillsEnum.NodeJs, icon: "skill-icons:nodejs-light" },
    { label: SkillsEnum.ExpressJs, icon: "skill-icons:expressjs-light" },
    { label: SkillsEnum.NestJs, icon: "skill-icons:nestjs-light" },
    { label: SkillsEnum.SpringBoot, icon: "devicon:spring" },
    { label: SkillsEnum.SQL, icon: "tabler:sql" },
    { label: SkillsEnum.NoSQL, icon: "fxemoji:document" },
    { label: SkillsEnum.MongoDB, icon: "vscode-icons:file-type-mongo" },
    { label: SkillsEnum.MySQL, icon: "skill-icons:mysql-light" },
    { label: SkillsEnum.Mongoose, icon: "devicon:mongoose-wordmark" },
    { label: SkillsEnum.Sequelize, icon: "skill-icons:sequelize-light" },
    { label: SkillsEnum.SwaggerUI, icon: "devicon:swagger" },
    { label: SkillsEnum.PayPalPayment, icon: "logos:paypal" },
    { label: SkillsEnum.Stripe, icon: "cib:cc-stripe" },
    { label: SkillsEnum.StrapiCMS, icon: "logos:strapi-icon" },
    { label: SkillsEnum.Redis, icon: "skill-icons:redis-light" },
    { label: SkillsEnum.Caching, icon: "octicon:cache-16" },
    { label: SkillsEnum.RabbitMQ, icon: "logos:rabbitmq-icon" },
    { label: SkillsEnum.Microservice, icon: "carbon:microservices-1" },
    { label: SkillsEnum.ReactNative, icon: "tabler:brand-react-native" },
    {
      label: SkillsEnum.Cryptography,
      icon: "flat-color-icons:data-encryption",
    },
    { label: SkillsEnum.Git, icon: "skill-icons:git" },
    { label: SkillsEnum.Github, icon: "devicon:github" },
    { label: SkillsEnum.Gitlab, icon: "devicon:gitlab" },
    { label: SkillsEnum.Nginx, icon: "skill-icons:nginx" },
    { label: SkillsEnum.AWS, icon: "skill-icons:aws-light" },
    { label: SkillsEnum.AWSEC2, icon: "logos:aws-ec2" },
    { label: SkillsEnum.AWSS3, icon: "logos:aws-s3" },
    { label: SkillsEnum.LoadBalance, icon: "tabler:load-balancer" },
    { label: SkillsEnum.Docker, icon: "skill-icons:docker" },
  ],
};
