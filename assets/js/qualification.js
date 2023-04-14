const qualifications = [
    {
        title: "Euro-Mediterranean University of Fez - UEMF",
        year: 2024,
        description: "Engineering cycle (in progress)",
        institute: {
            /* name: "Programming Hero", */
            shortName: "Web & Mobile Technology",
            duration: "2021 - 2024"
        }
    },
    {
        title: "Euro-Mediterranean University of Fez - UEMF",
        year: 2022,
        description: "Integrated Preparatory Class",
        institute: {
            shortName: "CPI - School of Digital Engineering and Artificial Intelligence - EIDIA",
            duration: "January 2019 - December 2021"
        }
    },
    {
        title: "Sidi Lahcen El Youssi High School",
        year: 2019,
        description: "Baccalaureate with international option, Physics - International",
        institute: {
            /* name: "Brindaban Govt. College", */
            shortName: "BAC",
            duration: "2019"
        }
    },
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                <a href="https://www.linkedin.com/in/younes-shimi/" target="_blank" class="ml-3">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                </a>
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

