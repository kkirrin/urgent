const artists = [
    {
        name: "Магазинам одежды и обуви",
        description: `Теперь не обязательно заказывать дорогостоящую химчистку или даже
        перетяжку. Ваши проблемы с загрязнениями решит очиститель для текстиля`,
        // backgroundUrl: "https://assets.codepen.io/152347/dom-dolla.jpg"
        backgroundUrl: "../src/img/use/image-1.jpg"
    },
    {
        name: "Мебельным салонам",
        description: `Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album "Langata".`,
        backgroundUrl: "../src/img/use/image-1.jpg"
    },
    {
        name: "Магазинам товаров для дома",
        description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
        backgroundUrl: "../src/img/use/image-1.jpg"
    },
    {
        name: "Химчисткам одежды и обуви",
        description: `Tom Gaynor, better known by his stage name “Allday”, is an Australian rapper from Adelaide, South Australia. Allday became active in 2011, when Gaynor began uploading his music for free online. Millennial rapper Allday got his break with a pair of radio hits in his home country of Australia in 2014. "Right Now" and "You Always Know the DJ" were included on his debut album, Startup Cult. Since his debut, Allday continues to establish himself as a household name with tracks like “Wonder Drug” and “Protection” which received ARIA Gold awards.`,
        backgroundUrl: "../src/img/use/image-1.jpg"
    },
    {
        name: "Магазинам спорт товаров",
        description: `Boo Seeka is the artist name of Australian electro-pop singer-songwriter, Ben Gumbleton. After bursting onto the scene in 2015 with his debut song, Kingdom Leader - he has continued to establish himself as a must-see live act with his unmatchable energy, and continuous flow of hits such as Deception Bay, Oh My, Does This Last, Never Enough & Don’t Waste Your Love.`,
        backgroundUrl: "../src/img/use/image-1.jpg"
    },
    {
        name: "авто и мото-салонам",
        description: `Running Touch is a triple threat singer, songwriter and producer.
    His first project ‘A Body Slow’ hit #1 on itunes electronic album. Fast forward to 2018 ‘My Hands’ gained global attention being added to major playlists around the world and voted sexiest song by Triple J listeners.  His follow up Single a collaboration with Hayden James ‘Better Together’ is an international hit that reached #1 on iTunes USA.`,
        backgroundUrl: "../src/img/use/image-1.jpg"
    }
]


export const initFlexSlider = () => {

    const artistsList = document.getElementById('artistsList');
    if (artistsList) {
        artists.forEach((artist, index) => {
            const li = document.createElement('li');
            li.style.backgroundImage = `url(${artist.backgroundUrl})`;
            li.className = index === 0 ? 'active' : '';
            li.innerHTML = `
              <h3 class="">${artist.name}</h3>
              <div class="section-content">
                <div class="inner">
                  <div class="bio">
                    <h2>${artist.name}</h2>
                    <p>${artist.description}</p>
                  </div>
                </div>
              </div>
            `;
            li.addEventListener('click', () => setActive(index));
            artistsList.appendChild(li);
        });

        function setActive(index) {
            const currentActive = artistsList.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            const newActive = artistsList.children[index];
            if (newActive) {
                newActive.classList.add('active');
            }
        }
    }
}