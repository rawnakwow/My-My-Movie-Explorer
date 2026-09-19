# 🎬 MovieExplorer

A modern and responsive **Movie Explorer Application** built with React.  
Users can browse TV shows/movies, search for titles, view detailed information, and explore available streaming platforms.

## 🚀 Live Demo

(https://my-my-movie-explorer.vercel.app/)

## 📂 GitHub Repository

https://github.com/rawnakwow/My-My-Movie-Explorer.git

---

# ✨ Features

## 🏠 Home Page

- Modern cinematic hero section
- Application branding and navigation
- Call-to-action button to explore movies
- Responsive layout for all devices
- Footer with application information

---

## 🎬 Movie Listing Page

Users can:

- Browse available movies/shows
- Search movies by title
- View dynamic search results
- Explore movie cards in a responsive grid layout

### Movie Cards Include:

- Movie poster
- Movie/show title
- Rating
- Release date
- Genre information
- See Details button

---

## 🔍 Search Functionality

Movie search is implemented using the TVMaze API.

Endpoint:

```
GET https://api.tvmaze.com/search/shows?q=:query
```

Example:

```
https://api.tvmaze.com/search/shows?q=girls
```

---

## 🌐 API Integration

This project uses the free **TVMaze API**.

### Fetch All Shows

```
GET https://api.tvmaze.com/shows
```

### Search Shows

```
GET https://api.tvmaze.com/search/shows?q=:query
```

---

# 🎞️ Movie Details Modal

Clicking **See Details** opens an interactive modal containing:

- Large movie poster
- Title
- Rating
- Release date
- Runtime
- Overview/Summary
- Genres
- Language
- Status
- Network information

Additional features:

- Close button
- Outside click close
- ESC key close

---

# ▶ Watch Now Feature

Users can select streaming platforms from the Watch Now button.

Available platforms:

- 🎬 Netflix
- ▶ Prime Video
- 🍿 Disney+
- 📺 CBS TV

The selected platform opens a search page for that movie/show.

---

# 🎨 UI/UX Features

- Modern dark cinematic theme
- Violet and pink gradient accents
- Glassmorphism style components
- Smooth hover animations
- Responsive mobile design
- Desktop optimized movie grid
- Clean modal experience

---

# 🛠️ Technologies Used

## Frontend

- React
- JavaScript
- Vite

## Styling

- Tailwind CSS
- Custom CSS

## Icons

- Lucide React

## API

- TVMaze API

---

# 📱 Responsive Design

The application supports:

### Mobile

- Single-column layout
- Touch-friendly buttons
- Stacked components

### Desktop

- Multi-column movie grid
- Optimized spacing
- Large-screen modal layout

---

# 📦 Installation & Setup

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project:

```bash
cd movie-explorer
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Application will run on:

```
http://localhost:5173
```

---

# 🏗️ Production Build

Create production build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

# 📁 Project Structure

```
movie-explorer
│
├── public
│
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieModal.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── layouts
│   │   └── MainLayout.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🔮 Future Improvements

- User authentication
- Favourite movie list
- Watch history
- Advanced filters
- Genre-based browsing
- Real streaming availability API integration

---

# 👨‍💻 Author

Your Name

---

# 📄 License

This project is created for educational purposes.
