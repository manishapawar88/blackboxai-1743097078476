// Sample content data
const contentData = {
    recommended: [
        {
            id: 1,
            title: "Avengers: Endgame",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5056/1375056-h-0a5c0a0a0a0a",
            type: "movie",
            duration: "3h 2m",
            rating: 4.8
        },
        {
            id: 2,
            title: "The Lion King",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3826/1373826-h-0a5c0a0a0a0a",
            type: "movie",
            duration: "1h 58m",
            rating: 4.5
        },
        {
            id: 3,
            title: "Frozen 2",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3827/1373827-h-0a5c0a0a0a0a",
            type: "movie",
            duration: "1h 43m",
            rating: 4.3
        },
        {
            id: 4,
            title: "Black Panther",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3828/1373828-h-0a5c0a0a0a0a",
            type: "movie",
            duration: "2h 15m",
            rating: 4.7
        },
        {
            id: 5,
            title: "Toy Story 4",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3829/1373829-h-0a5c0a0a0a0a",
            type: "movie",
            duration: "1h 40m",
            rating: 4.2
        },
        {
            id: 6,
            title: "Captain Marvel",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3830/1373830-h-0a5c0a0a0a0a",
            type: "movie",
            duration: "2h 4m",
            rating: 4.4
        }
    ],
    sports: [
        {
            id: 101,
            title: "IPL 2023",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/SPORT/IPL/ME/400236118",
            type: "live",
            duration: "Live",
            rating: 4.9
        },
        {
            id: 102,
            title: "FIFA World Cup",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/SPORT/FOOTBALL/400236118",
            type: "live",
            duration: "Live",
            rating: 4.8
        }
    ],
    kids: [
        {
            id: 201,
            title: "Mickey Mouse",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/KIDS/MICKEY/400236118",
            type: "series",
            duration: "22m",
            rating: 4.5
        },
        {
            id: 202,
            title: "Peppa Pig",
            thumbnail: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/KIDS/PEPPA/400236118",
            type: "series",
            duration: "15m",
            rating: 4.3
        }
    ]
};

// Function to create content cards
function createContentCards() {
    // Recommended content
    const recommendedContainer = document.querySelector('#recommendedContainer');
    contentData.recommended.forEach(item => {
        createCard(item, recommendedContainer);
    });

    // Sports content
    const sportsContainer = document.createElement('div');
    sportsContainer.id = 'sportsContainer';
    document.querySelector('.container').appendChild(createSection('Live Sports', sportsContainer));
    contentData.sports.forEach(item => {
        createCard(item, sportsContainer);
    });

    // Kids content
    const kidsContainer = document.createElement('div');
    kidsContainer.id = 'kidsContainer';
    document.querySelector('.container').appendChild(createSection('Kids', kidsContainer));
    contentData.kids.forEach(item => {
        createCard(item, kidsContainer);
    });
}

function createSection(title, container) {
    const section = document.createElement('div');
    section.className = 'px-6 py-8';
    section.innerHTML = `<h2 class="text-2xl font-semibold mb-4">${title}</h2>`;
    container.className = 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4';
    section.appendChild(container);
    return section;
}

function createCard(item, container) {
    const card = document.createElement('div');
    card.className = 'group cursor-pointer';
    card.addEventListener('click', () => {
        window.location.href = 'player.html';
    });
    card.innerHTML = `
        <div class="relative overflow-hidden rounded-lg mb-2">
            <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <div class="flex items-center">
                    <span class="text-yellow-400 text-sm mr-2">★ ${item.rating}</span>
                    <span class="text-gray-300 text-xs">${item.duration}</span>
                </div>
            </div>
        </div>
        <h3 class="text-sm font-medium group-hover:text-blue-400">${item.title}</h3>
    `;
    container.appendChild(card);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createContentCards();
    
    // Search functionality
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Searching for: ${searchInput.value}`);
            // Actual search implementation would go here
        }
    });
});