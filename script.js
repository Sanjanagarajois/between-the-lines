
const genres = [
  ['Fantasy', 'Magic, myth & impossible worlds'],
  ['Romance', 'Longing, chemistry & connection'],
  ['Mystery', 'Clues, secrets & clever twists'],
  ['Science fiction', 'Big ideas & distant futures'],
  ['Literary fiction', 'Beautiful writing & human truth'],
  ['Thriller', 'Tension, danger & momentum'],
  ['Historical', 'Lives shaped by another era'],
  ['Horror', 'The eerie, uncanny & unknown'],
  ['Non-fiction', 'True stories & new perspectives'],
  ['Young adult', 'Coming of age & finding yourself'],
  ['Adventure', 'Journeys, discovery & risk'],
  ['Philosophy', 'Questions that stay with you']
];

const books = [
  { title: 'The God of Small Things', author: 'Arundhati Roy', region: 'indian', genres: ['Literary fiction'], desc: 'A richly layered family story shaped by memory, love and social rules.', tags: ['Beautiful prose', 'Emotional depth', 'Character development'], color: '#8b5b56' },
  { title: 'The White Tiger', author: 'Aravind Adiga', region: 'indian', genres: ['Literary fiction', 'Thriller'], desc: 'A sharp, darkly comic novel about ambition, inequality and reinvention.', tags: ['Unreliable narrator', 'Political intrigue', 'Dark atmosphere'], color: '#b47a45' },
  { title: 'The Namesake', author: 'Jhumpa Lahiri', region: 'indian', genres: ['Literary fiction'], desc: 'An intimate story of family, identity and belonging across generations.', tags: ['Character development', 'Beautiful prose', 'Emotional depth'], color: '#607e78' },
  { title: 'The Palace of Illusions', author: 'Chitra Banerjee Divakaruni', region: 'indian', genres: ['Fantasy', 'Historical'], desc: 'The Mahabharata reimagined through Draupadi’s compelling perspective.', tags: ['Beautiful prose', 'World-building', 'Character development'], color: '#9c654c' },
  { title: 'The Guide', author: 'R. K. Narayan', region: 'indian', genres: ['Literary fiction'], desc: 'A wry, humane novel about reinvention, belief and unexpected change.', tags: ['Character development', 'Humor', 'Big questions'], color: '#8d8759' },
  { title: 'The Immortals of Meluha', author: 'Amish Tripathi', region: 'indian', genres: ['Fantasy', 'Adventure'], desc: 'A myth-inspired adventure that imagines the legend of Shiva anew.', tags: ['World-building', 'Adventure', 'Fast-paced plot'], color: '#657d55' },
  { title: 'The Hobbit', author: 'J. R. R. Tolkien', region: 'international', genres: ['Fantasy', 'Adventure'], desc: 'A cozy, classic quest full of unlikely courage.', tags: ['World-building', 'Adventure', 'Found family'], color: '#7c895d' },
  { title: 'A Darker Shade of Magic', author: 'V. E. Schwab', region: 'international', genres: ['Fantasy', 'Adventure'], desc: 'Parallel Londons, dangerous magic and a magnetic cast.', tags: ['World-building', 'Magic', 'Fast-paced plot'], color: '#574b76' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', region: 'international', genres: ['Romance', 'Literary fiction'], desc: 'Witty misunderstandings, sharp social observation and slow-blooming love.', tags: ['Character development', 'Beautiful prose', 'Romance'], color: '#a56e66' },
  { title: 'The Love Hypothesis', author: 'Ali Hazelwood', region: 'international', genres: ['Romance'], desc: 'A fake-dating setup with banter, warmth and plenty of chemistry.', tags: ['Romance', 'Humor', 'Character development'], color: '#b36d68' },
  { title: 'Gone Girl', author: 'Gillian Flynn', region: 'international', genres: ['Mystery', 'Thriller'], desc: 'A twisty psychological mystery that keeps shifting under your feet.', tags: ['Plot twists', 'Unreliable narrator', 'Dark atmosphere'], color: '#525c50' },
  { title: 'The Thursday Murder Club', author: 'Richard Osman', region: 'international', genres: ['Mystery'], desc: 'A warm, witty amateur-detective mystery with a lovable ensemble.', tags: ['Mystery to solve', 'Humor', 'Character development'], color: '#9a8a64' },
  { title: 'Project Hail Mary', author: 'Andy Weir', region: 'international', genres: ['Science fiction', 'Adventure'], desc: 'A science-heavy space survival story with heart and ingenuity.', tags: ['Science & ideas', 'Fast-paced plot', 'Found family'], color: '#6b8b91' },
  { title: 'Dune', author: 'Frank Herbert', region: 'international', genres: ['Science fiction', 'Fantasy'], desc: 'A sprawling desert epic of politics, ecology and destiny.', tags: ['World-building', 'Political intrigue', 'Science & ideas'], color: '#b58a5b' },
  { title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', region: 'international', genres: ['Literary fiction'], desc: 'An intimate story of friendship, creativity and making things together.', tags: ['Character development', 'Beautiful prose', 'Emotional depth'], color: '#527e78' },
  { title: 'The Secret History', author: 'Donna Tartt', region: 'international', genres: ['Literary fiction', 'Mystery'], desc: 'A dark academic tale of obsession, beauty and a terrible secret.', tags: ['Dark atmosphere', 'Beautiful prose', 'Mystery to solve'], color: '#536c56' },
  { title: 'The Silent Patient', author: 'Alex Michaelides', region: 'international', genres: ['Thriller', 'Mystery'], desc: 'A psychological puzzle built around silence and a shocking reveal.', tags: ['Plot twists', 'Unreliable narrator', 'Fast-paced plot'], color: '#6b7777' },
  { title: 'The Song of Achilles', author: 'Madeline Miller', region: 'international', genres: ['Fantasy', 'Romance', 'Literary fiction'], desc: 'A lyrical retelling of myth, devotion and devastating love.', tags: ['Beautiful prose', 'Emotional depth', 'Romance'], color: '#738e9b' },
  { title: 'Educated', author: 'Tara Westover', region: 'international', genres: ['Non-fiction'], desc: 'A memoir about education, family and finding your own voice.', tags: ['Emotional depth', 'Character development', 'Science & ideas'], color: '#88795f' },
  { title: 'The Hunger Games', author: 'Suzanne Collins', region: 'international', genres: ['Young adult', 'Thriller', 'Science fiction'], desc: 'A propulsive survival story with rebellion at its core.', tags: ['Fast-paced plot', 'Political intrigue', 'Adventure'], color: '#8e4d3d' },
  { title: 'The Shining', author: 'Stephen King', region: 'international', genres: ['Horror'], desc: 'An isolated hotel, a family under pressure and creeping dread.', tags: ['Dark atmosphere', 'Character development', 'Fast-paced plot'], color: '#9b5142' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', region: 'international', genres: ['Non-fiction', 'Philosophy'], desc: 'A sweeping, provocative look at how humans came to shape the world.', tags: ['Science & ideas', 'Big questions', 'Beautiful prose'], color: '#8b765b' },
  { title: 'The Name of the Wind', author: 'Patrick Rothfuss', region: 'international', genres: ['Fantasy'], desc: 'A richly narrated tale of a gifted musician, magic and legend.', tags: ['World-building', 'Beautiful prose', 'Magic'], color: '#815e46' },
  { title: 'The Midnight Library', author: 'Matt Haig', region: 'international', genres: ['Fantasy', 'Literary fiction'], desc: 'A magical premise exploring regret, possibility and second chances.', tags: ['Emotional depth', 'Big questions', 'Magic'], color: '#4f6d76' },
  { title: 'The Martian', author: 'Andy Weir', region: 'international', genres: ['Science fiction', 'Thriller'], desc: 'A stranded astronaut problem-solves his way through impossible odds.', tags: ['Science & ideas', 'Humor', 'Fast-paced plot'], color: '#b77a4e' }
];

const tastes = [
  'Character development', 'Beautiful prose', 'Fast-paced plot',
  'World-building', 'Plot twists', 'Emotional depth', 'Humor',
  'Romance', 'Mystery to solve', 'Dark atmosphere',
  'Science & ideas', 'Found family', 'Adventure', 'Magic',
  'Political intrigue', 'Unreliable narrator', 'Big questions'
];

const podcastData = [
  { title: 'Books and Beyond with Bound', host: 'Tara Khandelwal & Michelle D’Costa', desc: 'Indian authors discuss their books, creative process, research and writing lives.', kind: 'Indian', url: 'https://boundindia.com/resources/podcasts/books-and-beyond-with-bound/' },
  { title: 'The Lit Pickers', host: 'Deepanjana Pal & Supriya Nair', desc: 'Thoughtful conversations about books and reading.', kind: 'Indian', url: 'https://www.maedinindia.in/the-lit-pickers' },
  { title: 'The Hindu On Books', host: 'The Hindu', desc: 'Literary conversations and recommendations covering authors and new releases.', kind: 'Indian', url: 'https://www.thehindu.com/books/' },
  { title: 'The Seen and the Unseen', host: 'Amit Varma', desc: 'Long-form conversations about ideas, society, history and culture.', kind: 'Indian', url: 'https://seenunseen.in/' },
  { title: 'Indian Noir', host: 'Nikesh Murali', desc: 'Atmospheric audio fiction for readers who love horror, crime and suspense.', kind: 'Indian', url: 'https://indiannoir.transistor.fm/' },
  { title: 'The Desi Crime Podcast', host: 'Aishwarya Singh & Aryaan Misra', desc: 'True-crime stories from South Asia. May contain disturbing material.', kind: 'Indian', url: 'https://desicrime.com/' },
  { title: 'The Book Review', host: 'The New York Times', desc: 'Author conversations, reviews and books shaping the literary conversation.', kind: 'International', url: 'https://www.nytimes.com/column/book-review-podcast' },
  { title: 'Literary Friction', host: 'Carrie Plitt & Octavia Bright', desc: 'Conversations with writers about books, culture and ideas.', kind: 'International', url: 'https://www.literaryfriction.com/' },
  { title: 'What Should I Read Next?', host: 'Anne Bogel', desc: 'Tailored book suggestions based on one reader’s taste.', kind: 'International', url: 'https://modernmrsdarcy.com/what-should-i-read-next/' },
  { title: 'The Penguin Podcast', host: 'Penguin Books', desc: 'Interviews with authors about their books and inspirations.', kind: 'International', url: 'https://www.penguin.co.uk/podcasts' },
  { title: 'The Rest Is History', host: 'Tom Holland & Dominic Sandbrook', desc: 'Story-led explorations of historical people and events.', kind: 'International', url: 'https://goalhanger.com/' },
  { title: 'The Rest Is Politics', host: 'Alastair Campbell & Rory Stewart', desc: 'Conversations about current affairs, politics and power.', kind: 'International', url: 'https://goalhanger.com/' },
  { title: 'Empire', host: 'William Dalrymple & Anita Anand', desc: 'History conversations exploring empires and power.', kind: 'International', url: 'https://goalhanger.com/' },
  { title: 'In Our Time', host: 'BBC Radio 4', desc: 'Expert-led discussions spanning history, philosophy, science and culture.', kind: 'International', url: 'https://www.bbc.com/audio' },
  { title: 'You’re Dead to Me', host: 'BBC Radio 4', desc: 'History made entertaining through historians and comedians.', kind: 'International', url: 'https://www.bbc.com/audio' },
  { title: 'Shedunnit', host: 'Caroline Crampton', desc: 'A podcast about detective fiction and the history of crime writing.', kind: 'International', url: 'https://shedunnitshow.com/' }
];

const demoReaders = [
  { name: 'Mira', points: 30, books: ['The Song of Achilles', 'The Midnight Library', 'Pride and Prejudice'], genres: ['Romance', 'Literary fiction'] },
  { name: 'Arjun', points: 40, books: ['The Hobbit', 'Dune', 'The Name of the Wind'], genres: ['Fantasy', 'Science fiction'] },
  { name: 'Sam', points: 20, books: ['Gone Girl', 'The Secret History', 'The Silent Patient'], genres: ['Mystery', 'Thriller'] },
  { name: 'Ananya', points: 30, books: ['The Song of Achilles', 'The Secret History', 'Educated'], genres: ['Literary fiction', 'Non-fiction'] }
];

const $ = id => document.getElementById(id);

function loadArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

let selectedGenres = new Set();
let selectedTastes = new Set();
let library = loadArray('btl_library');
let reviews = loadArray('btl_reviews');
let rating = 5;
let recOffset = 0;
let currentView = 'discover';
let toastTimer = null;

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function persist() {
  try {
    localStorage.setItem('btl_library', JSON.stringify(library));
    localStorage.setItem('btl_reviews', JSON.stringify(reviews));
  } catch (error) {
    console.warn('Could not save data in this browser:', error);
    toast('Browser storage is unavailable. Your changes may not persist.');
  }
  updateCounts();
}

function toast(message) {
  const element = $('toast');
  if (!element) return;
  element.textContent = message;
  element.style.display = 'block';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    element.style.display = 'none';
  }, 2500);
}

function readerPoints() {
  return reviews.reduce((sum, review) => sum + (Number(review.points) || 0), 0);
}

function updateCounts() {
  if ($('libraryCount')) $('libraryCount').textContent = library.length;
  if ($('pointsNav')) $('pointsNav').textContent = `${readerPoints()} pts`;
}

function authorRegion(book) {
  if (book.region) return book.region;

  const indianAuthors = [
    'Arundhati Roy', 'Jhumpa Lahiri', 'Amitav Ghosh',
    'R. K. Narayan', 'Vikram Seth', 'Ruskin Bond',
    'Amish Tripathi', 'Chitra Banerjee Divakaruni',
    'Perumal Murugan', 'Chetan Bhagat', 'Sudha Murty',
    'Aravind Adiga', 'Anita Nair', 'Devdutt Pattanaik'
  ];

  return indianAuthors.some(author =>
    (book.author || '').toLowerCase().includes(author.toLowerCase())
  ) ? 'indian' : 'international';
}

function renderGenres() {
  $('genreGrid').innerHTML = genres.map(([name, description]) => `
    <button type="button"
      class="genre ${selectedGenres.has(name) ? 'selected' : ''}"
      data-genre="${escapeHtml(name)}"
      aria-pressed="${selectedGenres.has(name)}">
      <span class="check">${selectedGenres.has(name) ? '✓' : ''}</span>
      <h3>${escapeHtml(name)}</h3>
      <p>${escapeHtml(description)}</p>
    </button>
  `).join('');

  document.querySelectorAll('[data-genre]').forEach(button => {
    button.onclick = () => {
      const genre = button.dataset.genre;
      selectedGenres.has(genre)
        ? selectedGenres.delete(genre)
        : selectedGenres.add(genre);
      renderGenres();
    };
  });

  $('genreCount').textContent = `${selectedGenres.size} selected`;
  $('toDetails').disabled = selectedGenres.size === 0;
}

function populateBooks() {
  const mode = $('authorMode')?.value || 'all';
  const choices = books.filter(book =>
    mode === 'all' || authorRegion(book) === mode
  );

  const previousSelection = $('bookSelect').value;
  $('bookSelect').innerHTML =
    '<option value="">Select a book you’ve read…</option>' +
    choices.map(book => `
      <option value="${escapeHtml(book.title)}">
        ${escapeHtml(book.title)} — ${escapeHtml(book.author)}
      </option>
    `).join('');

  if (choices.some(book => book.title === previousSelection)) {
    $('bookSelect').value = previousSelection;
  }

  const reviewTitles = [...new Set([
    ...books.map(book => book.title),
    ...library.map(book => book.title)
  ])];

  const previousReview = $('reviewBook').value;
  $('reviewBook').innerHTML =
    '<option value="">Choose a book…</option>' +
    reviewTitles.map(title =>
      `<option value="${escapeHtml(title)}">${escapeHtml(title)}</option>`
    ).join('');

  if (reviewTitles.includes(previousReview)) {
    $('reviewBook').value = previousReview;
  }
}

function renderTastes() {
  $('tasteGrid').innerHTML = tastes.map(taste => `
    <button type="button"
      class="taste ${selectedTastes.has(taste) ? 'selected' : ''}"
      data-taste="${escapeHtml(taste)}"
      aria-pressed="${selectedTastes.has(taste)}">
      ${escapeHtml(taste)}
    </button>
  `).join('');

  document.querySelectorAll('[data-taste]').forEach(button => {
    button.onclick = () => {
      const taste = button.dataset.taste;

      if (selectedTastes.has(taste)) {
        selectedTastes.delete(taste);
      } else if (selectedTastes.size < 3) {
        selectedTastes.add(taste);
      } else {
        toast('Choose up to 3 favourites');
        return;
      }

      renderTastes();
    };
  });
}

function bookCard(book) {
  return `
    <div class="bookpick">
      <div class="cover" style="background:linear-gradient(145deg,${book.color},#252a22)">
        <small>BETWEEN THE LINES</small>
        <strong>${escapeHtml(book.title)}</strong>
        <small>${escapeHtml(book.author)}</small>
      </div>
      <div>
        <h3>${escapeHtml(book.title)}</h3>
        <p>by ${escapeHtml(book.author)}</p>
        <p>${escapeHtml(book.desc)}</p>
        ${book.genres.map(genre =>
          `<span class="tag">${escapeHtml(genre)}</span>`
        ).join('')}
      </div>
    </div>
  `;
}

function showBook() {
  const book = books.find(item => item.title === $('bookSelect').value);
  $('bookPreview').classList.toggle('empty', !book);
  $('bookPreview').innerHTML = book
    ? bookCard(book)
    : 'Your book details will appear here.';

  if (book) {
    book.tags.forEach(tag => {
      if (selectedTastes.size < 3) selectedTastes.add(tag);
    });
  }

  renderTastes();
}

function addBook() {
  const title = $('customBook').value.trim();
  const author = $('customAuthor').value.trim();
  const known = books.find(book => book.title === $('bookSelect').value);

  if (!title && !known) {
    toast('Choose a book or enter a title first');
    return;
  }

  const item = known
    ? { title: known.title, author: known.author, genres: known.genres }
    : {
        title,
        author: author || 'Author not added',
        genres: [...selectedGenres],
        region: 'unknown'
      };

  if (library.some(book => book.title.toLowerCase() === item.title.toLowerCase())) {
    toast('That book is already on your shelf');
    return;
  }

  library.unshift(item);
  persist();
  renderLibrary();
  populateBooks();
  $('customBook').value = '';
  $('customAuthor').value = '';
  toast('Added to your bookshelf ✦');
}

function scoreBook(book) {
  let score = book.genres.filter(genre => selectedGenres.has(genre)).length * 3;
  score += book.tags.filter(tag => selectedTastes.has(tag)).length * 2;

  reviews.filter(review => review.book === book.title).forEach(review => {
    if (Number(review.rating) >= 4) score += 0.5;
  });

  return score;
}

function saveRecommendation(title) {
  const book = books.find(item => item.title === title);
  if (!book) return;

  if (library.some(item => item.title.toLowerCase() === title.toLowerCase())) {
    toast('Already on your bookshelf');
    return;
  }

  library.unshift({
    title: book.title,
    author: book.author,
    genres: book.genres,
    region: authorRegion(book)
  });

  persist();
  renderLibrary();
  renderRecommendations();
  toast('Added to your bookshelf ✦');
}

function renderBookRecommendations() {
  const mode = $('authorMode').value;
  const avoidedTerms = $('avoid').value
    .toLowerCase()
    .split(',')
    .map(term => term.trim())
    .filter(Boolean);

  const readTitles = new Set(library.map(book => book.title.toLowerCase()));

  const list = books
    .filter(book => !readTitles.has(book.title.toLowerCase()))
    .filter(book => mode === 'all' || authorRegion(book) === mode)
    .filter(book => !avoidedTerms.some(term =>
      `${book.title} ${book.author} ${book.desc} ${book.tags.join(' ')}`
        .toLowerCase().includes(term)
    ))
    .map(book => ({ ...book, score: scoreBook(book) }))
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

  const picks = list.slice(recOffset, recOffset + 3);

  return {
    html: picks.map(book => `
      <article class="rec-card">
        <div class="rec-top">
          <div class="mini-cover"
            style="background:linear-gradient(145deg,${book.color},#252a22)">
            ${escapeHtml(book.title)}
          </div>
          <div>
            <h3>${escapeHtml(book.title)}</h3>
            <div class="author">
              ${escapeHtml(book.author)} ·
              ${authorRegion(book) === 'indian' ? 'Indian author' : 'International author'}
            </div>
            <div class="match">
              ✦ ${book.score > 0 ? Math.min(99, 72 + book.score * 4) + '% TASTE MATCH' : 'A NEW DISCOVERY'}
            </div>
          </div>
        </div>
        <p>${escapeHtml(book.desc)}</p>
        <div>${book.tags.slice(0, 3).map(tag =>
          `<span class="tag">${escapeHtml(tag)}</span>`
        ).join('')}</div>
        <button type="button" class="btn" style="margin-top:14px"
          data-save-book="${escapeHtml(book.title)}">
          ＋ Add to bookshelf
        </button>
      </article>
    `).join(''),
    total: list.length
  };
}

function renderPodcastRecommendations() {
  const mode = $('authorMode').value;
  const list = podcastData.filter(podcast =>
    mode === 'all' ||
    (mode === 'indian'
      ? podcast.kind === 'Indian'
      : podcast.kind === 'International')
  );

  const picks = list.slice(recOffset, recOffset + 3);

  return {
    html: picks.map(podcast => `
      <article class="podcast-card">
        <span class="tag">🎙 ${escapeHtml(podcast.kind)} PODCAST</span>
        <h3>${escapeHtml(podcast.title)}</h3>
        <strong>${escapeHtml(podcast.host)}</strong>
        <p>${escapeHtml(podcast.desc)}</p>
        <a class="btn primary" href="${escapeHtml(podcast.url)}"
          target="_blank" rel="noopener noreferrer">
          Explore podcast ↗
        </a>
      </article>
    `).join(''),
    total: list.length
  };
}

function renderRecommendations() {
  const type = $('recommendationType').value;
  let html = '';
  let total = 0;

  if (type === 'books') {
    const result = renderBookRecommendations();
    html = result.html;
    total = result.total;
    $('recIntro').textContent =
      `Matched to ${[...selectedGenres].join(', ') || 'your reading mood'}${selectedTastes.size ? ' and the story elements you love' : ''}.`;
  } else if (type === 'podcasts') {
    const result = renderPodcastRecommendations();
    html = result.html;
    total = result.total;
    $('recIntro').textContent = 'Podcast picks based on your author discovery mode.';
  } else {
    const booksResult = renderBookRecommendations();
    const podcastsResult = renderPodcastRecommendations();
    html = booksResult.html + podcastsResult.html;
    total = Math.max(booksResult.total, podcastsResult.total);
    $('recIntro').textContent = 'Books and podcasts for your reading mood.';
  }

  $('recommendations').innerHTML = html ||
    '<div class="empty">No more matches. Try changing your filters or refining your taste.</div>';

  $('moreRecs').disabled = recOffset + 3 >= total;
  $('moreRecs').textContent = $('moreRecs').disabled
    ? 'You’re all caught up'
    : 'Show me more ↗';

  document.querySelectorAll('[data-save-book]').forEach(button => {
    button.onclick = () => saveRecommendation(button.dataset.saveBook);
  });
}

function renderLibrary() {
  $('libraryList').innerHTML = library.length
    ? library.map(book => {
        const known = books.find(item => item.title === book.title);
        const color = known?.color || '#697769';

        return `
          <div class="library-item">
            <div class="mini-cover"
              style="height:70px;width:48px;min-width:48px;background:${color};font-size:10px">
              ${escapeHtml(book.title)}
            </div>
            <div>
              <h4>${escapeHtml(book.title)}</h4>
              <p>${escapeHtml(book.author || 'Author not added')}</p>
              <p>${escapeHtml((book.genres || []).join(' · ') || 'Your personal pick')}</p>
            </div>
          </div>
        `;
      }).join('')
    : '<div class="empty" style="grid-column:1/-1">Your shelf is waiting for its first story. Head to Discover to add a book.</div>';

  updateCounts();
}

function renderStars() {
  $('stars').innerHTML = [1, 2, 3, 4, 5].map(number => `
    <button type="button"
      class="star ${number <= rating ? 'on' : ''}"
      data-star="${number}"
      aria-label="${number} stars">★</button>
  `).join('');

  document.querySelectorAll('[data-star]').forEach(button => {
    button.onclick = () => {
      rating = Number(button.dataset.star);
      renderStars();
    };
  });
}

function renderReviews() {
  $('reviewList').innerHTML = reviews.length
    ? [...reviews].reverse().map(review => `
        <div class="review-item">
          <div class="review-title">
            <span>${escapeHtml(review.book)}</span>
            <span style="color:#d89a38">
              ${'★'.repeat(Math.max(0, Math.min(5, Number(review.rating) || 0)))}
              <span style="color:var(--line)">
                ${'★'.repeat(5 - Math.max(0, Math.min(5, Number(review.rating) || 0)))}
              </span>
            </span>
          </div>
          <p>${escapeHtml(review.text)}</p>
          <small>Reader review · ${escapeHtml(review.date || '')}</small>
        </div>
      `).join('')
    : '<div class="empty">No reviews just yet. Be the first to leave a note in the margins.</div>';

  updateCounts();
}

function renderCommunity() {
  const points = readerPoints();

  $('communityScore').innerHTML = `
    YOUR READER SCORE: <strong>${points} POINTS</strong><br>
    <span class="subtle">Earn 10 points for every unique book review you post. Matches use a ±10 point range and at least one shared book.</span>
  `;

  const myBooks = new Set([
    ...library.map(book => book.title.toLowerCase()),
    ...reviews.map(review => review.book.toLowerCase())
  ]);

  const matches = demoReaders
    .map(reader => ({
      ...reader,
      shared: reader.books.filter(title => myBooks.has(title.toLowerCase())),
      distance: Math.abs(reader.points - points)
    }))
    .filter(reader => reader.distance <= 10 && reader.shared.length > 0)
    .sort((a, b) => b.shared.length - a.shared.length);

  $('readerMatches').innerHTML = matches.length
    ? matches.map(reader => `
        <article class="reader-card">
          <span class="tag">
            ${reader.points} POINTS ·
            ${reader.distance === 0 ? 'SAME SCORE' : reader.distance + ' POINTS AWAY'}
          </span>
          <h3>${escapeHtml(reader.name)}</h3>
          <p>Shared books: ${reader.shared.map(escapeHtml).join(', ')}</p>
          <p>Also enjoys: ${reader.genres.map(escapeHtml).join(', ')}</p>
          <button type="button" class="btn primary" data-connect>
            Connect ↗
          </button>
        </article>
      `).join('')
    : '<div class="empty" style="grid-column:1/-1">Add books and post reviews to find readers with overlapping taste and a similar score.</div>';

  document.querySelectorAll('[data-connect]').forEach(button => {
    button.onclick = () => toast('Real reader connections need accounts and a shared server.');
  });
}

function switchWizardPage(page) {
  const pages = ['genreStage', 'detailsStage', 'resultsStage'];

  pages.forEach((id, index) => {
    $(id).classList.toggle('hidden', index !== page);
  });

  ['step1', 'step2', 'step3'].forEach((id, index) => {
    $(id).classList.toggle('done', index <= page);
  });

  $('stepLabel').textContent = [
    '01 / Your reading mood',
    '02 / Your reading DNA',
    '03 / Your next chapter'
  ][page];

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchView(view) {
  currentView = view;

  ['discover', 'library', 'reviews', 'community'].forEach(name => {
    const section = $(name + 'View');
    if (section) section.classList.toggle('hidden', name !== view);

    document.querySelectorAll(`[data-view="${name}"]`).forEach(button => {
      button.classList.toggle('active', name === view);
    });
  });

  if (view === 'library') renderLibrary();

  if (view === 'reviews') {
    renderReviews();
    populateBooks();
  }

  if (view === 'community') renderCommunity();
}

function submitReview(event) {
  event.preventDefault();

  const book = $('reviewBook').value.trim();
  const text = $('reviewText').value.trim();

  if (!book || !text) {
    toast('Choose a book and write a few words');
    return;
  }

  // One review per book prevents repeated points from the same browser.
  if (reviews.some(review =>
    review.book.trim().toLowerCase() === book.toLowerCase()
  )) {
    toast('You’ve already reviewed this book.');
    return;
  }

  reviews.push({
    book,
    text,
    rating,
    points: 10,
    date: new Date().toLocaleDateString(undefined, {
      month: 'short',
      year: 'numeric'
    })
  });

  persist();
  renderReviews();
  renderCommunity();
  $('reviewText').value = '';
  rating = 5;
  renderStars();
  toast('Review posted · +10 points ✦');
}

function initializeApp() {
  renderGenres();
  renderTastes();
  populateBooks();
  renderStars();
  renderLibrary();
  renderReviews();

  // Add the points tab without requiring an HTML change.
  const nav = document.querySelector('.navright');

  if (nav && !$('pointsNav')) {
    const pointsButton = document.createElement('button');
    pointsButton.id = 'pointsNav';
    pointsButton.textContent = `${readerPoints()} pts`;
    pointsButton.title = 'Your reader points';
    pointsButton.dataset.view = 'community';
    pointsButton.onclick = () => switchView('community');
    nav.appendChild(pointsButton);
  }

  document.querySelectorAll('[data-view]').forEach(button => {
    button.onclick = () => switchView(button.dataset.view);
  });

  $('toDetails').onclick = () => switchWizardPage(1);
  $('backGenres').onclick = () => switchWizardPage(0);
  $('backGenresBottom').onclick = () => switchWizardPage(0);
  $('bookSelect').onchange = showBook;
  $('addBook').onclick = addBook;

  $('authorMode').addEventListener('change', () => {
    recOffset = 0;
    populateBooks();
    showBook();
  });

  $('getRecs').onclick = () => {
    if (!$('bookSelect').value && selectedTastes.size === 0) {
      toast('Pick a book or a few story elements first');
      return;
    }

    recOffset = 0;
    renderRecommendations();
    switchWizardPage(2);
  };

  $('editTaste').onclick = () => switchWizardPage(1);

  $('moreRecs').onclick = () => {
    recOffset += 3;
    renderRecommendations();
  };

  $('libraryDiscover').onclick = () => {
    switchView('discover');
    switchWizardPage(0);
  };

  $('recommendationType').addEventListener('change', () => {
    recOffset = 0;
    renderRecommendations();
  });

  $('reviewForm').addEventListener('submit', submitReview);

  updateCounts();
  renderCommunity();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
