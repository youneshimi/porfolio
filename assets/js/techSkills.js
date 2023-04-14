const techSkills = [
    {
        title: "Languages",
        skills: [
            { icon: `<i class="fa-brands fa-square-js text-yellow-500"></i>`, name: "JavaScript", label: "" },
            { icon: `<i class="fa-brands fa-html5 fa-lg text-green-600"></i>`, name: "HTML5", label: "" },
            { icon: `<i class="fa-brands fa-css3-alt fa-lg text-blue-600"></i>`, name: "CSS3", label: "" },
            { icon: `<i class="fa-brands fa-php fa-sm text-violet-600"></i>`, name: "PHP", label: "" },
            { icon: `<i class="fa-brands fa-python fa-sm text-blue-600"></i>`, name: "Python", label: "" },
            { icon: `<i class="fa-brands fa-java fa-sm text-red-600"></i>`, name: "Java", label: "" },
            { icon: `<i class="fa-brands fa-c fa-sm text-blue-600"></i>`, name: "C", label: "" },
            { icon: `<i class="fa-brands fa-c fa-sm text-blue-600"></i>`, name: "C++", label: "" },

        ]
    },
    {
        title: "Front-end",
        skills: [
            { icon: `<i class="fa-brands fa-react text-yellow-600"></i>`, name: "React" , label: "" },
            { icon: `<i class="fa-brands fa-bootstrap text-green-600"></i>`, name: "Bootstrap", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "Tailwind", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "JQuary", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-yellow-300"></i>`, name: "EJS", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-red-600"></i>`, name: "Angular", label: "" },

        ]
    },
    {
        title: "Back-end",
        skills: [
            { icon: `<i class="fa-brands fa-node fa-sm text-green-600"></i>`, name: "Node.js", label: "" },
            { icon: `<i class="fa-brands fa-node-js text-green-600"></i>`, name: "Express.js", label: "" },
            { icon: `<i class="fa-brands fa-laravel" style="color: #f20d12;"></i>`, name: "Laravel", label: "" },
            { icon: `<i class="fa-brands fa-symfony"></i>`, name: "symfony", label: "" },
        ]
    },
    {
        title: "Database",
        skills: [
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "MongoDB", label: "" },
            { icon: `<i class="fa-solid fa-server fa-xs text-yellow-300"></i>`, name: "MySql", label: "" },
            { icon: `<i class="fa-solid fa-server fa-xs text-red-600"></i>`, name: "Oracle", label: "" },
            { icon: `<i class="fa-solid fa-server fa-xs text-yellow-300"></i>`, name: "FireBase", label: "" },
        ]
    },
    {
        title: "Dev Tools",
        skills: [
            { icon: `<i class="fa-brands fa-git text-yellow-500"></i>`, name: "Git", label: "" },
            { icon: `<i class="fa-brands fa-github"></i>`, name: "GitHub", label: "" },
        ]
    },
    {
        title: "Mobile Development",
        skills: [
            { icon: `<i class="fa-solid fa-code fa-xs text-blue-400"></i>`, name: "Flutter", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-blue-700"></i>`, name: "Dart", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-700"></i>`, name: "React-Native", label: "" },
        ]
    },
    {
        title: "Design Tools",
        skills: [
            { icon: `<i class="fa-solid fa-bezier-curve fa-xs text-yellow-400"></i>`, name: "Adobe Photoshop", label: "" },
            { icon: `<i class="fa-solid fa-bezier-curve fa-xs text-orange-600"></i>`, name: "Adobe Illustrator", label: "" },
            { icon: `<i class="fa-brands fa-figma  text-orange-400"></i>`, name: "Figma", label: "" },
        ]
    },
];
const parent = document.getElementById("tech-skills");

const getSkill = (skills) => {
    const skillHtml = skills.map(skill =>
        `<p class="text-md text-gray-700 dark:text-gray-200">
            ${skill.icon}
            ${skill.name}
            <code class="text-sm text-gray-500 dark:text-gray-300">${skill.label}</code>
        </p>`);

    return skillHtml.join(" ");
}

const html = techSkills.map(tech =>
    `<div>
        <h2 class="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">${tech.title}</h2>
        ${getSkill(tech.skills)}
    </div>`
);


parent.innerHTML = html.join(" ");