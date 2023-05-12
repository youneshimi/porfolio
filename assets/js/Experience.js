const Experience = [
    {
        title1: "Web developer",
        year: 2022,
        description: "Company JDI SOFT",
        institute: {
            /* name: "Programming Hero", */
            shortName: "internship <br> Fes-Meknes, Morocco On-site",
            duration: " <br> Jul 2022 - Aug 2022"
        }
    }, {
        title2: "Computer scientist",
        year: 2022,
        description: "Company  INWI",
        institute: {
            /* name: "Programming Hero", */
            shortName: "internship <br> Sefrou, Fez-Meknes, Morocco · Hybrid",
            duration: " <br> apr 2022 - May 2022"
        }
    },
];

const parent = document.getElementById('Experience');

const html = Experience.map((exp, index) =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${exp.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">
                ${index === 0 ? exp.title2 : `<a href="https://inwi.ma" target="_blank" class="text-white hover:text-white">${exp.title}</a>`}
                ${index === 0 ? exp.title1 : `<a href="https://jdi-soft.com/" target="_blank" class="text-white hover:text-white">${exp.title}</a>`}
                </a>
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${exp.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${exp.institute.name}>${exp.institute.shortName}</span> &bull; ${exp.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");
