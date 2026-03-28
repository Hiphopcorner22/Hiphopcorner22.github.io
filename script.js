/* VORTEX CINEMA - COMPLETE REWRITE */

const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/original';

// STATE MANAGEMENT
const state = {
    currentItem: null,
    currentType: 'movie',
    currentCategory: 'all',
    currentS: 1,
    currentE: 1,
    currentAnimeAudio: 'sub',
    autoplay: true,
    debounceTimer: null,
    isLoadingMore: false
};

// INITIALIZATION
window.onload = async () => {
    await loadInitialData();
    setupEventListeners();
    refreshPersonalData();
};

async function loadInitialData() {
    try {
        // Load trending
        await fetchRow(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`, 'trendingGrid', 'multi');
        
        // Load movies
        await fetchRow(`${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`, 'movieGrid', 'movie');
        
        // Load TV
        await fetchRow(`${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`, 'tvGrid', 'tv');
        
        // Load anime
        await fetchRow(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16&with_original_language=ja&sort_by=popularity.desc`, 'animeGrid', 'tv');
        
        // Load top rated
        await fetchRow(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`, 'topRatedGrid', 'movie');

        // Set hero to trending item
        const res = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
        const data = await res.json();
        if (data.results.length > 0) {
            updateHero(data.results[0], data.results[0].media_type, true);
        }
    } catch (error) {
        console.error('Error loading initial data:', error);
    }
}

function setupEventListeners() {
    document.getElementById('searchInput').oninput = debounceSearch;
}

function debounceSearch(e) {
    const q = e.target.value.trim();
    clearTimeout(state.debounceTimer);
    
    if (q.length < 2) {
        document.getElementById('dynamicSection').style.display = 'none';
        return;
    }
    
    state.debounceTimer = setTimeout(() => {
        document.getElementById('dynamicSection').style.display = 'block';
        document.getElementById('dynamicTitle').innerText = `Results for "${q}"`;
        fetchRow(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${q}`, 'dynamicGrid', 'multi');
    }, 500);
}

// SWITCH CATEGORY
function switchCategory(category) {
    state.currentCategory = category;
    
    // Hide all sections first
    document.getElementById('trendingSection').style.display = category === 'all' ? 'block' : 'none';
    document.getElementById('movieSection').style.display = category === 'all' || category === 'movie' ? 'block' : 'none';
    document.getElementById('tvSection').style.display = category === 'all' || category === 'tv' ? 'block' : 'none';
    document.getElementById('animeSection').style.display = category === 'all' || category === 'anime' ? 'block' : 'none';
    document.getElementById('topRatedSection').style.display = category === 'all' ? 'block' : 'none';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// FETCH AND DISPLAY GRID
async function fetchRow(url, gridId, type) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const grid = document.getElementById(gridId);
        
        if (!grid) return;
        
        grid.innerHTML = '';
        
        data.results.forEach(item => {
            if (!item.poster_path) return;
            
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-image">
                    <img src="${IMG_PATH}${item.poster_path}" alt="${item.title || item.name}">
                    <div class="card-overlay">
                        <button class="card-play" onclick="event.stopPropagation(); selectAndPlay(${item.id}, '${type || item.media_type}', '${item.title || item.name}')">
                            ▶ Play
                        </button>
                    </div>
                </div>
                <div class="card-info">
                    <h3>${item.title || item.name}</h3>
                    <div class="card-meta">
                        <span class="rating">⭐ ${(item.vote_average || 0).toFixed(1)}</span>
                        <span class="year">${(item.release_date || item.first_air_date || '').substring(0, 4)}</span>
                    </div>
                </div>
            `;
            
            card.onclick = () => updateHero(item, type || item.media_type);
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching row:', error);
    }
}

// UPDATE HERO SECTION
function updateHero(item, type, isInitial = false) {
    state.currentItem = item;
    state.currentType = (type === 'tv' || item.name) ? 'tv' : 'movie';
    
    const backdrop = item.backdrop_path ? `${IMG_PATH}${item.backdrop_path}` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    document.getElementById('heroBackdrop').style.backgroundImage = `url(${backdrop})`;
    document.getElementById('activeTitle').innerText = item.title || item.name;
    document.getElementById('activeDesc').innerText = item.overview || 'No description available';
    
    // HERO META
    const heroMeta = document.getElementById('heroMeta');
    const year = (item.release_date || item.first_air_date || '').substring(0, 4);
    const rating = (item.vote_average || 0).toFixed(1);
    heroMeta.innerHTML = `
        <span class="meta-item">📅 ${year}</span>
        <span class="meta-item">⭐ ${rating}/10</span>
        <span class="meta-item">${state.currentType === 'tv' ? '📺 Series' : '🎬 Movie'}</span>
    `;
    
    // WATCHLIST BUTTON
    const watchlist = JSON.parse(localStorage.getItem('vortex_watchlist')) || [];
    const inList = watchlist.some(i => i.id === item.id);
    
    document.getElementById('heroActions').innerHTML = `
        <button class="play-main-btn" onclick="startPlaying()">▶ Play Now</button>
        <button class="list-btn" onclick="toggleWatchlist()">${inList ? '✓ Watchlist' : '+ Watchlist'}</button>
        <button class="share-btn" onclick="shareTitle()">⤴ Share</button>
    `;
    
    // SHOW/HIDE CONTROLS BASED ON TYPE
    const controls = document.getElementById('controls');
    const animeControls = document.getElementById('animeControls');
    
    if (state.currentType === 'tv') {
        controls.style.display = 'block';
        animeControls.style.display = 'none';
        loadSeriesControls(item.id, item.name);
    } else {
        controls.style.display = 'none';
        animeControls.style.display = 'none';
    }
    
    if (!isInitial) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// START PLAYING
function startPlaying() {
    if (state.currentType === 'movie') {
        const url = `https://www.vidking.net/embed/movie/${state.currentItem.id}?color=e50914&autoPlay=true`;
        openPlayer(url, state.currentItem.title);
        saveToHistory();
    } else {
        const activeEp = document.querySelector('#episodeContainer .selector-btn.active');
        if (activeEp) activeEp.click();
    }
}

// SELECT AND PLAY
function selectAndPlay(id, type, title) {
    // Fetch the item details and play
    fetch(`${BASE_URL}/${type === 'multi' ? 'movie' : type}/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(item => {
            item.media_type = type;
            updateHero(item, type, false);
            setTimeout(() => startPlaying(), 300);
        });
}

// LOAD SERIES CONTROLS
async function loadSeriesControls(id, title) {
    try {
        const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        const sContainer = document.getElementById('seasonContainer');
        sContainer.innerHTML = '';
        
        data.seasons.forEach(s => {
            if (s.season_number === 0 || !s.episode_count) return;
            
            const btn = document.createElement('button');
            btn.className = 'selector-btn';
            btn.innerText = `S${s.season_number}`;
            btn.onclick = () => {
                state.currentS = s.season_number;
                document.querySelectorAll('#seasonContainer .selector-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                loadEpisodes(id, s.season_number, s.episode_count, title);
            };
            sContainer.appendChild(btn);
        });
        
        if (sContainer.firstChild) sContainer.firstChild.click();
    } catch (error) {
        console.error('Error loading series controls:', error);
    }
}

// LOAD EPISODES
function loadEpisodes(seriesId, sNum, count, title) {
    const eContainer = document.getElementById('episodeContainer');
    eContainer.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const btn = document.createElement('button');
        btn.className = 'selector-btn';
        btn.innerText = i;
        btn.onclick = () => {
            state.currentE = i;
            document.querySelectorAll('#episodeContainer .selector-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const server = document.getElementById('serverSelect').value;
            let url = server === 'vidsrc' 
                ? `https://vidsrc.me/embed/tv?tmdb=${seriesId}&sea=${sNum}&epi=${i}` 
                : `https://www.vidking.net/embed/tv/${seriesId}/${sNum}/${i}?color=e50914&autoPlay=true`;
            
            openPlayer(url, `${title} - S${sNum}E${i}`);
            saveToHistory();
        };
        eContainer.appendChild(btn);
    }
}

// ANIME FUNCTIONS
function setAnimeAudio(audio) {
    state.currentAnimeAudio = audio;
    document.querySelectorAll('.audio-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
}

// PLAYER FUNCTIONS
function openPlayer(url, title) {
    document.getElementById('playingTitle').innerText = title;
    document.getElementById('videoPlayer').src = url;
    document.getElementById('playerOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePlayer() {
    document.getElementById('videoPlayer').src = '';
    document.getElementById('playerOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeServer(val) {
    const id = state.currentItem.id;
    let url = '';
    
    if (state.currentType === 'movie') {
        url = val === 'vidsrc' 
            ? `https://vidsrc.me/embed/movie?tmdb=${id}` 
            : `https://www.vidking.net/embed/movie/${id}?color=e50914&autoPlay=true`;
    } else {
        url = val === 'vidsrc' 
            ? `https://vidsrc.me/embed/tv?tmdb=${id}&sea=${state.currentS}&epi=${state.currentE}` 
            : `https://www.vidking.net/embed/tv/${id}/${state.currentS}/${state.currentE}?color=e50914&autoPlay=true`;
    }
    
    document.getElementById('videoPlayer').src = url;
}

function previousEpisode() {
    if (state.currentE > 1) {
        state.currentE--;
        document.querySelectorAll('#episodeContainer .selector-btn')[state.currentE - 1]?.click();
    }
}

function nextEpisode() {
    const epButtons = document.querySelectorAll('#episodeContainer .selector-btn');
    if (state.currentE < epButtons.length) {
        state.currentE++;
        epButtons[state.currentE - 1]?.click();
    }
}

function toggleAutoplay() {
    state.autoplay = !state.autoplay;
    document.getElementById('autoplayBtn').innerText = `Autoplay: ${state.autoplay ? 'ON' : 'OFF'}`;
}

// SIDEBAR FUNCTIONS
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// LOCAL STORAGE FUNCTIONS
function toggleWatchlist() {
    let list = JSON.parse(localStorage.getItem('vortex_watchlist')) || [];
    const index = list.findIndex(i => i.id === state.currentItem.id);
    
    if (index > -1) {
        list.splice(index, 1);
    } else {
        list.push({
            ...state.currentItem,
            type: state.currentType,
            addedAt: new Date().toISOString()
        });
    }
    
    localStorage.setItem('vortex_watchlist', JSON.stringify(list));
    updateHero(state.currentItem, state.currentType);
    refreshPersonalData();
}

function saveToHistory() {
    let history = JSON.parse(localStorage.getItem('vortex_history')) || [];
    history = history.filter(i => i.id !== state.currentItem.id);
    history.push({
        ...state.currentItem,
        type: state.currentType,
        watchedAt: new Date().toISOString(),
        season: state.currentS,
        episode: state.currentE
    });
    localStorage.setItem('vortex_history', JSON.stringify(history.slice(-50)));
    refreshPersonalData();
}

function refreshPersonalData() {
    renderList('vortex_watchlist', 'watchlistList');
    renderList('vortex_history', 'historyList', true);
    renderContinueWatching();
}

function renderContinueWatching() {
    const history = JSON.parse(localStorage.getItem('vortex_history')) || [];
    const container = document.getElementById('continueList');
    const countEl = document.getElementById('continueCount');
    
    if (!history.length) {
        container.innerHTML = '<div class="empty-state">Nothing to continue</div>';
        countEl.innerText = '0';
        return;
    }
    
    const continue_list = [...history].reverse().slice(0, 5);
    countEl.innerText = history.length;
    container.innerHTML = '';
    
    continue_list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'mini-card';
        div.innerHTML = `
            <img src="${IMG_PATH}${item.poster_path}">
            <div class="mini-card-info">
                <h4>${item.title || item.name}</h4>
                <span class="type-tag">${item.type === 'tv' ? 'Series' : 'Movie'}</span>
                ${item.season ? `<span class="ep-tag">S${item.season}E${item.episode}</span>` : ''}
            </div>
        `;
        div.onclick = () => {
            updateHero(item, item.type);
            toggleSidebar();
        };
        container.appendChild(div);
    });
}

function renderList(key, containerId, reverse = false) {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    const container = document.getElementById(containerId);
    const countId = containerId.replace('List', 'Count');
    const countEl = document.getElementById(countId);
    
    if (countEl) countEl.innerText = data.length;
    
    if (!data.length) {
        container.innerHTML = '<div class="empty-state">Nothing yet</div>';
        return;
    }
    
    const list = reverse ? [...data].reverse() : data;
    container.innerHTML = '';
    
    list.slice(0, 10).forEach(item => {
        const div = document.createElement('div');
        div.className = 'mini-card';
        div.innerHTML = `
            <img src="${IMG_PATH}${item.poster_path}">
            <div class="mini-card-info">
                <h4>${item.title || item.name}</h4>
                <span class="type-tag">${item.type === 'tv' ? 'Series' : 'Movie'}</span>
            </div>
        `;
        div.onclick = () => {
            updateHero(item, item.type);
            toggleSidebar();
        };
        container.appendChild(div);
    });
}

function clearData(key) {
    if (confirm(`Are you sure you want to clear this data?`)) {
        localStorage.removeItem(key);
        refreshPersonalData();
    }
}

// UTILITY FUNCTIONS
function scrollRow(id, dir) {
    const grid = document.getElementById(id);
    if (!grid) return;
    const scrollAmount = grid.clientWidth * 0.8;
    grid.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
}

function shareTitle() {
    const title = state.currentItem.title || state.currentItem.name;
    const text = `Check out "${title}" on VORTEX CINEMA!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'VORTEX CINEMA',
            text: text
        });
    } else {
        alert(text);
    }
}