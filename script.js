const planets=[
    {
        name: "TRAPPIST-1e",
        type: "Rocky Planet",
        distance: "40.7 light-years",

        description: "Rocky planet in the habitable zone of its star. ",
    article: " TRAPPIST-1e is one of the most intrguing exoplanets discovered so far. Located about 40 light-years away, it is a small, rocky, earth-sized planet orbiting a small red dwarf star TRAPPIST_1. It was discovered in 2017 by the TRAPPIST telescope and is part of a system of seven planets, three of which are located in the habitable zone. This means that they could potentially support liquid water on their surfaces, making them prime candidates for the search for extraterrestrial life. The planet's size and mass suggest that it has a rocky composition, similar to Earth, and its proximity to its star means that it receives a similar amount of energy as Earth does from the Sun. However, due to its close orbit, it is likely tidally locked, meaning one side always faces the star while the other remains in darkness. This could lead to extreme temperature differences between the two sides. Despite these challenges, TRAPPIST-1e remains a fascinating target for future observations and studies.",
        color1: "#899cad" , 
        color2: "#1e3153"
    },

    { 
        name: " TRAPPIST-1f",
        type: "Rocky Planet",
        distance: "40.7 light-years",
        description: "Earth-sized exoplanet in the TRAPPIST-1 system, potentially habitable and suitable for liquid water.",
        article: "TRAPPIST-1f is a nearly Earth-sized world that orbits a small, cool red dwarf star about 39.5 light-years away. It lies within the system’s habitable zone, meaning it could potentially allow liquid water under the right atmospheric conditions. However, its close orbit also exposes it to harmful X-ray and ultraviolet radiation from its active star, which could damage or strip away an atmosphere over time. Scientists think any water on its surface may be frozen as ice, but a thick atmosphere could possibly trap enough heat to make some areas more suitable for life. For now, TRAPPIST-1f remains a promising but unproven candidate in the search for habitable worlds.",
        color1: "#b7d6c5" ,
        color2: "#477260"
    },
    {

        name: "Kepler-186f",
        type: "Rocky Planet",
        distance: "580 light-years",
        description: "Super-Earth exoplanet located in the habitable zone of its star.",
        article: "TRAPPIST-1f is a nearly Earth-sized world that orbits a small, cool red dwarf star about 39.5 light-years away. It lies within the system’s habitable zone, meaning it could potentially allow liquid water under the right atmospheric conditions. However, its close orbit also exposes it to harmful X-ray and ultraviolet radiation from its active star, which could damage or strip away an atmosphere over time. Scientists think any water on its surface may be frozen as ice, but a thick atmosphere could possibly trap enough heat to make some areas more suitable for life. For now, TRAPPIST-1f remains a promising but unproven candidate in the search for habitable worlds.",
        color1: "#a2eeb2" ,
        color2: "#418c68"
    },
    {
        name: "Kepler-452b",
        type: "Super-Earth candidate",
        distance: "1,400 light-years",
        description: "Potentially habitable exoplanet orbiting a Sun-like star.",
        article: "Kepler-452b is often nicknamed “Earth’s older cousin.” It circles a Sun-like star in almost the same amount of time Earth takes to orbit our Sun, but it is much larger—about 60% wider than Earth. Its star is older and brighter than ours, which means Kepler-452b may have spent billions of years receiving increasing amounts of heat. If it has a thick atmosphere and liquid water, it could once have been a fascinating place for life to develop. But scientists have not yet seen its surface or atmosphere, so Kepler-452b could be a rocky super-Earth, an ocean world, or a very different kind of planet altogether.",
        color1: "#e1c4ed" ,
        color2: "#8f7092"
    },
    {
        name: "Proxima Centauri b",
        type: "Rocky Planet",
        distance: "4.24 light-years",
        description: "Earth-sized exoplanet orbiting within the habitable zone of Proxima Centauri.",
        article: "Proxima Centauri b is our nearest known exoplanet neighbor, just over four light-years away. It is slightly more massive than Earth and circles its small red dwarf star every 11 days, in the region where temperatures could allow liquid water. But its nearby star has a stormy personality: Proxima Centauri produces powerful flares and bursts of ultraviolet and X-ray radiation that may have stripped away the planet’s atmosphere long ago. That makes life on the surface a difficult possibility—but if Proxima b has held onto a thick atmosphere, an ocean, or a strong magnetic field, it could still be one of the most exciting worlds for scientists to investigate.",
        color1: "#dbc1b7" ,
        color2: "#a85f38"
    },
    {
        name: "K2-18b",
        type: " Sub-Neptune exoplanet",
        distance: "124 light-years",
        description: "Exoplanet with a thick atmosphere, potentially containing water vapor.",
        article: "K2-18b is one of the most mysterious worlds astronomers have found. It is much larger than Earth—about 2.4 times wider and over eight times as massive—and may be wrapped in a hydrogen-rich atmosphere above a deep ocean. Webb telescope observations have detected methane and carbon dioxide in its atmosphere, making it a possible “Hycean” world: a warm, ocean-covered planet unlike anything in our solar system. That sounds promising for life, but it is far from proof; its ocean may be too hot, too deep, or hidden below high-pressure ice. K2-18b is exciting because it shows scientists that potentially life-friendly environments might not always look like Earth.",
        color1: "#89b8f3" ,
        color2: "#426bbc"

    },
    {
        name: "TOI-700e",
        type: "Rocky Planet",
        distance: "101 light-years",
        description: "Earth-sized exoplanet with liquid water potential.",
        article: "TOI-700e is a small rocky planet about 101 light-years away, and it is one of the most Earth-sized worlds discovered by NASA’s TESS mission. At roughly 92% of Earth’s width, it travels around a cool red dwarf star every 28 days. What makes it especially interesting is that it shares its system with another potentially habitable planet, TOI-700d—giving scientists two nearby worlds to compare. TOI-700e receives a little more light than Earth, so it may be warm enough for liquid water if it has a suitable atmosphere. However, no atmosphere or oceans have been detected yet, so whether it could support life remains an open question.",
        color1: "#ceab52" ,
        color2: "#9e5226"
    },
    {
        name: " HD 189733 b",
        type: "Hot Jupiter",
        distance: "64.5 light-years",
        description: "Gas giant exoplanet with extreme weather conditions.",
        article: "HD 189733b may look like a beautiful blue marble, but it is one of the most dangerous planets known. This hot Jupiter is larger than Jupiter and races around its star in only 2.2 days, leaving it locked in extreme heat. Its deep blue color does not come from oceans—it comes from a blazing, hazy atmosphere that may contain tiny glass particles. Scientists think winds can roar across the planet at thousands of miles per hour, possibly driving molten glass sideways through the sky. It is far too hot and stormy to support life, but its wild weather makes it an unforgettable example of how strange exoplanets can be.",
    color1: "#2781e7" ,
    color2: "#0640b5",
    },
    {   
        name: "55 Cancri e",
        type: "Super-Earth",
        distance: "41 light-years",
        description: "Rocky exoplanet with a high surface temperature.",
        article: "55 Cancri e is a “lava world” that sounds more like science fiction than a place in our galaxy. This super-Earth is about twice Earth’s width and orbits extremely close to its star, completing a year in less than 18 hours. Its surface may be covered by a global ocean of molten rock, glowing under temperatures hot enough to melt metal. On its cooler nightside, vaporized rock may condense into sparkling clouds before falling back toward the lava below. Scientists are also studying hints of an atmosphere, but this world is far too hot for life as we know it.",
        color1: "#ff502d" ,
        color2: "#672607"
    },
    {
        name: "PSR B1257+12 b",
        type: "Super-Earth",
        distance: "300 light-years",
        description: "First discovered exoplanet orbiting a pulsar.",
        article: "PSR B1257+12 b is the first confirmed exoplanet discovered around a pulsar, a highly magnetized, rapidly rotating neutron star. It is a super-Earth, about 4.2 times the mass of Earth, and orbits its host star every 6.3 days. The discovery of this planet was groundbreaking because it showed that planets can form around dead stars, challenging our understanding of planetary system formation.",
        color1: "#8a2be2" ,
        color2: "#4b0082",
    },
    { 
        name: "TOI-849 b",
        type: "Sub-Neptune",
        distance: "736 light-years",
        description: "Sub-Neptune exoplanet with a unique atmospheric composition.",
        article: " TOI-849b is one of the strangest exoplanets known: it is about the size of Neptune but roughly 41 times as massive as Earth, making it unusually dense. It orbits its star every 18.4 hours at a blistering temperature of about 1,800 K (around 1,500°C). Scientists think it may be the exposed core of a giant planet whose thick gas atmosphere was stripped away by intense starlight and heat. Another possibility is even more unusual: it may have never formed a large atmosphere in the first place. Either way, TOI-849b could offer a rare glimpse at the hidden core of a giant planet.",
        color1: "#1e90ff" ,
        color2: "#00008b",
    },
    {
        name: "WASP-76b",
        type: "Hot Jupiter",
        distance: "640 light-years",
        description: "Hot Jupiter exoplanet with a unique atmospheric composition.",
        article:"WASP-76b is an ultra-hot gas giant about 640 light-years away. It is nearly twice Jupiter's size and completes an orbit around its star in just 1.8 days. One side permanently faces the star and heats above 2,400°C—hot enough to turn metals into vapor. Powerful winds carry iron vapor to the planet’s darker, cooler side, where it condenses into droplets that may fall as molten iron rain. This extreme “metal weather” makes WASP-76b far too hostile for life, but it gives astronomers an amazing look at how alien atmospheres behave.", 
        color1: "#ff502d" ,
        color2: "#672607",
    },
];
   




const grid = document.querySelector("#planet-grid");
const searchInput = document.querySelector("#search-input");
const modal = document.querySelector("#planet-modal");
const modalTitle = document.querySelector("#modal-title");
const modalMeta = document.querySelector("#modal-meta");
const modalArticle = document.querySelector("#modal-article");
const closeModalButton = document.querySelector("#close-modal");

function openPlanetArticle(planet) {
    modalTitle.textContent = planet.name.trim();
    modalMeta.textContent = `${planet.type} · ${planet.distance} from Earth`;
    modalArticle.textContent = planet.article || "Write your article for this planet in script.js.";
    modal.hidden = false;
}

function closePlanetArticle() {
    modal.hidden = true;
}

function showPlanets(planetsToShow) {
    grid.replaceChildren();

    planetsToShow.forEach(planet => {
        const card = document.createElement("div");
        card.classList.add("planet-card");
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Read more about ${planet.name.trim()}`);
        card.innerHTML = `
            <div class="planet" 
            style="background: linear-gradient(15deg, 
            transparent 0px,
            transparent 15px,
            rgba(255, 255, 255, 0.12) 16px,
            rgba(255, 255, 255, 0.12) 20px),
            linear-gradient(135deg,
            ${planet.color1},
            ${planet.color2});"></div>
            
            
            <h2>${planet.name}</h2>
            <p><strong>Type:</strong> ${planet.type}</p>
            <p><strong>Distance from Earth:</strong> ${planet.distance}</p>
            <p>${planet.description}</p>
        `;
        card.addEventListener("click", () => openPlanetArticle(planet));
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openPlanetArticle(planet);
            }
        });
        grid.appendChild(card);
    });
}

showPlanets(planets);

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const matchingPlanets = planets.filter(planet => 
        planet.name.toLowerCase().includes(searchTerm) ||
        planet.type.toLowerCase().includes(searchTerm) ||
        planet.distance.toLowerCase().includes(searchTerm) ||
        planet.description.toLowerCase().includes(searchTerm)
    );
    showPlanets(matchingPlanets);
});

closeModalButton.addEventListener("click", closePlanetArticle);
modal.addEventListener("click", event => {
    if (event.target === modal) closePlanetArticle();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closePlanetArticle();
});
