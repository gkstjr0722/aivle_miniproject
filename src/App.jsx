import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import DetailPage from './pages/DetailPage';

function App() {
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    async function loadData() {
      try {
        const booksRes = await fetch('http://localhost:3000/books');
        const reviewsRes = await fetch('http://localhost:3000/reviews');
        const res1 = await booksRes.json()
        setBooks(res1);
        const res2 = await reviewsRes.json()
        setReviews(res2);
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
      }
      setLoading(false);
    }
    loadData();
  }, []);


    //  create 관련 함수 
  const handleCreateBook = async (newBook) => {
    const res = await fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    });
    const savedBook = await res.json();
    setBooks([savedBook, ...books]);
    return savedBook;
  };
  const handleReviewLike = async (id) => {
    const review = reviews.find( r => r.id ===id);

    const res = await fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: review.likes + 1 }),
    });
    const updated = await res.json();
    setReviews(reviews.map((r) => (r.id === id ? updated : r)));
  };

  const handleBookLikes = async (id) => {
    try {
      const book = books.find((b) => b.id === id);

      const res = await fetch(`http://localhost:3001/books/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: book.likes + 1 }),
      });

      const updated = await res.json();
      setBooks(books.map((b) => (b.id === id ? updated : b)));
    } catch (err) {
      console.error(err);
    }
  };


  if (loading) {
    return <div>전체 데이터를 불러오는 중입니다...</div>;
  }
  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>📚 도서관리</h1>
        </div>

        <nav>
          <Link to="/">홈</Link>
          <Link to="/list">도서목록</Link>
          <Link to="/create" className="header button">+ 새 도서 등록</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage books={books} reviews={reviews} />} />
          <Route path="/list" element={<ListPage books={books} />} />
          <Route path="/create" element={<CreatePage onCreateBook={handleCreateBook} />} />
          <Route path="/detail/:id" element={<DetailPage books={books} reviews={reviews} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;