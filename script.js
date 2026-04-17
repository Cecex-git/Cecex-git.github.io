const technologies = [
    "Microsoft Fabric",
    "Power BI",
    "DAX",
    "Data Modeling",
    "Business Intelligence",
    "GitHub Copilot CLI",
    "GitHub Pages"
];

const projects = [
    {
        title: "VideoGames Sales Fabric / Power BI Test",
        description:
            "An analytics project focused on video game sales, developed using Microsoft Fabric, Power BI, and GitHub Copilot CLI to explore data, model insights, and communicate results through dashboards.",
        status: "First featured project",
        repository: "https://github.com/Cecex-git/VideoGames-sales-Fabric-PBI-Test",
        liveLabel: "Repository",
        detailsLabel: "GitHub profile",
        detailsUrl: "https://github.com/Cecex-git",
        stack: ["Microsoft Fabric", "Power BI", "DAX", "Data Analysis", "CI/CD"]
    }
];

const technologyList = document.querySelector("#technology-list");
const projectList = document.querySelector("#project-list");

technologyList.innerHTML = technologies
    .map((technology) => `<div class="tag">${technology}</div>`)
    .join("");

projectList.innerHTML = projects
    .map(
        (project) => `
            <article class="project-card">
                <div class="project-meta">
                    <span class="project-status">${project.status}</span>
                    <div>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                    <div class="project-stack">
                        ${project.stack
                            .map((item) => `<span class="stack-pill">${item}</span>`)
                            .join("")}
                    </div>
                </div>
                <div class="project-links">
                    <a class="project-link primary" href="${project.repository}" target="_blank" rel="noreferrer">
                        ${project.liveLabel}
                    </a>
                    <a class="project-link" href="${project.detailsUrl}" target="_blank" rel="noreferrer">
                        ${project.detailsLabel}
                    </a>
                </div>
            </article>
        `
    )
    .join("");
