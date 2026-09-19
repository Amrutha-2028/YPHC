
/* =========================================
   RESEARCH PAPER DATA
   Add all your papers inside this object.
========================================= */

const paperData = {

    paper1: {
        title: "The Multidimensional Burden of Endometriosis",

        leader: "Maria Boussoussa",

        team: "Layel Boussabah, Yahya Arafa, Hajar Hamida, Ahmed Elseidy, Ebtessam Amri, Haneen Al-shareefi",

        desc: "This research explores endometriosis, a chronic gynecological condition characterised by tissue growing outside the uterus.",

        link: "https://drive.google.com/file/d/1xBf5M5_tt6fU2J2x2A4aSlj0a-VHHqbF/view?usp=sharing",

        
    },
    paper2: {
        title: "How Does Childhood Trauma Contribute to Borderline Personality Disorder",

        leader: "Siheli Silva",

        team: "Randa Wang, Lohara Liyanarachchi, Naureen S. Akand, Seyuni Imbulgoda, Logan Wu, Anna Kovacs",

        desc: "This paper analyzes how childhood trauma (such as abuse, neglect, and family dysfunction) interacts with genetic predispositions and its influence to Borderline Personality Disorder (BPD). The paper examines the  neurological impacts, and reviews many resources to treat the condition",

        link: "https://drive.google.com/file/d/1bI0IUIog9u75D2QlIUUZhYH1z23HRQ6r/view?usp=sharing",

        
    }


    /*
    ADD MORE PAPERS LIKE THIS:

    ,

    paper2: {
        title: "Your Next Research Paper",
        leader: "Lead Author",
        team: "Team Members",
        desc: "Description of the research.",
        link: "YOUR_PAPER_LINK",
        img: "assets/img/your-next-image.jpeg"
    }

    */
};


/* =========================================
   GENERATE RESEARCH CARDS
========================================= */

function displayPapers() {

    const grid = document.getElementById("researchGrid");

    if (!grid) return;

    grid.innerHTML = "";

    Object.entries(paperData).forEach(([paperId, paper]) => {

        // Create card
        const card = document.createElement("div");

        card.className = "paper-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `View ${paper.title}`);

        // Create flyer image
        const preview = document.createElement("div");

        preview.className = "flyer-preview";

        preview.style.backgroundImage =
            `url("${paper.img}")`;

        // Create text section
        const info = document.createElement("div");

        info.className = "paper-info";

        // Paper title
        const title = document.createElement("h3");

        title.textContent = paper.title;

        // Lead author
        const leader = document.createElement("p");

        leader.className = "leader";
        leader.textContent = "Lead: " + paper.leader;

        // Team
        const team = document.createElement("p");

        team.className = "team-mini";
        team.textContent = "Team: " + paper.team;

        // Assemble card
        info.append(title, leader, team);

        card.append(preview, info);

        // Open modal when card is clicked
        card.addEventListener("click", () => {
            openModal(paperId);
        });

        // Also allow keyboard access
        card.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openModal(paperId);
            }

        });

        grid.appendChild(card);

    });

}


/* =========================================
   OPEN MODAL
========================================= */

function openModal(paperId) {

    const paper = paperData[paperId];

    if (!paper) {
        console.error("Paper not found:", paperId);
        return;
    }

    // Fill in the selected paper's information
    document.getElementById("modalTitle").textContent =
        paper.title;

    document.getElementById("modalLead").textContent =
        "Lead: " + paper.leader;

    document.getElementById("modalTeam").textContent =
        "Team: " + paper.team;

    document.getElementById("modalDescription").textContent =
        paper.desc;

    // Set the selected paper's image
    document.getElementById("modalFlyer").style.backgroundImage =
        `url("${paper.img}")`;

    // Set the selected paper's link
    document.getElementById("modalLink").href =
        paper.link;

    // Show modal
    document.getElementById("paperModal").style.display =
        "block";

    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    document.getElementById("paperModal").style.display =
        "none";

    document.body.style.overflow = "auto";

}


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("paperModal");

    if (event.target === modal) {
        closeModal();
    }

});


/* =========================================
   CLOSE WITH ESCAPE KEY
========================================= */

window.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================
   LOAD THE RESEARCH GALLERY
========================================= */

displayPapers();