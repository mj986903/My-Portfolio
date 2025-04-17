import { DiHtml5, DiCss3, DiJavascript1, DiDotnet, DiMysql, DiJava, DiPython ,DiDocker   } from "react-icons/di";

const ProjectsData = [
  {
    id: "1",
    name: "Text Editor",
    image: "./text-editor.png",
    icons: [DiHtml5, DiCss3, DiJava],
    description: "Text Editor is a text editing application designed to provide users with the ability to convert plain text into various formats and styles.",
    github: "https://github.com/mj986903/Text-Editor",
    demo: "#",
  },
  {
    id: "2",
    name: "Book Store Management System",
    image: "./book-store.jpg",
    icons: [DiPython, DiDocker],
    description: "Book Store API building using Python Flask",
    github: "https://github.com/mj986903/Book-Store-Python",
    demo: "#",
  },
  {
    id: "3",
    name: "Invoice Processing System",
    image: "./invoice-processing.png",
    icons: [ DiCss3, DiJava, DiMysql ],
    description: "It helps organizations streamline their accounts payable processes, reduce manual errors, improve efficiency, and gain better visibility and control over their financial operations.",
    github: "https://github.com/mj986903/Invoice-Processing-System",
    demo: "#",
  },
  {
    id: "4",
    name: "Visitor Management System",
    image: "./visitor-management.png",
    icons: [DiHtml5, DiCss3, DiJavascript1, DiJava, DiMysql],
    description: "It provides a systematic approach to handling visitor entry, registration, and monitoring while enhancing security and efficiency.",
    github: "https://github.com/mj986903/Visitor-Management-System",
    demo: "#",
  },
  {
    id: "5",
    name: "Quizwhiz",
    image: "./quiz-whiz.png",
    icons: [DiHtml5, DiCss3, DiJavascript1, DiDotnet, DiMysql ],
    description: "QuizWhiz is a dynamic and interactive quiz application that allows users to create, manage, and take random quizzes seamlessly.",
    github: "https://github.com/mj986903/QuizWhiz",
    demo: "#",
  },
];

export default ProjectsData;
