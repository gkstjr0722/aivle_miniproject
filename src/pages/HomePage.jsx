import '../App.css';
import BookHomeList from '../components/BookHomeList';
import BookReportHomeList from '../components/BookReportHomeList';

function HomePage({ books, reviews }) {

  const topBooks = [...books]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);

  const topReviews = [...reviews]
  .sort((a, b) => b.likes - a.likes)
  .slice(0, 4);

  return (
    <div className="app">

      <div className="search-box">

        <input
          type="text"
          placeholder="도서 제목으로 검색..."
        />

        <button>
          검색
        </button>

      </div>

      <BookHomeList books={topBooks} />

      <BookReportHomeList reviews={topReviews} books={books} />

    </div>
  );
}

export default HomePage;
