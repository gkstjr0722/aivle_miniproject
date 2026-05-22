import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import DetailPage from './pages/DetailPage'

function App () {

  const bookState = {
      id: 2,
      title: "시련",
      author: "아서 밀러 (지은이), 최영 (옮긴이)",
      tag: [],
      likes: 0,
      content: "'민음사 세계문학전집' 286권. 현대 사회와 그 안에서 왜곡되어 가는 인간의 비극을 선명하게 그린 현대 희곡의 거장 아서 밀러의 대표작. 1950년대 미국의 공산주의자 색출 운동인 매카시즘의 광풍 한가운데 발표된 시대의 역작으로, 당시 미국 사회의 왜곡된 모습을 1690년대 어느 폐쇄적인 공동체에서 일어난 마녀 사냥에 투영하여 사회적으로 큰 반향을 일으켰다.",
      coverImageUrl: "",
      createdAt: "2026-05-22T09:29:00.000Z",
      updatedAt: "2026-05-22T09:29:00.000Z"
    };
  const reportList = [
  {
      id: 1,
      bookid: 2,
      nickname: "홍길동",
      content: "설정이 흥미롭고 전개가 다이나믹해요.",
      likes: 0,
     
    },
      {
      id: 2,
      bookid: 2,
      nickname: "홍길동2",
      content: "설정이2 흥미롭고 전개가 다이나믹해요.",
      likes: 0,
     
    }
  ];
  
  /*
  const [bookPosts, setBookPosts] = useState([]);
  const [reportPosts, setReportPosts] = useState([]);

  useEffect ( ()=>{
    async function loadBooks(){
      try{
        const res = await fetch ('http://localhost:3000/books');
        const data = await res.json();
        setBookPosts(data);
      }catch (err){
        console.error(err);
      }
    }
    async function loadReport(){
        try{
          const res = await fetch ('http://localhost:3000/reviews');
          const data = await res.json();
          setReportPosts(data);
        }catch (err){
          console.error(err);
        }
    }
    loadPosts();
    loadReport();
  }, []) 
 
  const handleAddBook = async (newPost)=>{
    try {
      const res = await fetch ('http://localhost:3000/books',
        {
          method: 'POST',
          header: {'Content-Type': 'application/json'},
          body: JSON.stringify(newPost),
        })
        const saved = await res.json();
        setBookPosts ({...bookPosts, saved});
    }catch(err) {
        console.error(err)
    }
  }
  
  const handleAddReport = async (newReview)=>{
    try {
      const res = await fetch ('http://localhost:3000/reviews',
        {
          method: 'POST',
          header: {'Content-Type': 'application/json'},
          body: JSON.stringify(newReview),
        })
        const saved = await res.json();
        setReportPosts ({...reportPosts, saved});
    }catch(err) {
        console.error(err)
    }
  }

  const handleDeleteBook = async () => {


  }

  const handleUpdateBook = async ()=> {

  }

  const handleBookLikes = async()=> {
    try{
      const res = await fetch ()
    }catch (err){
      console.error(err)
    }
  }
 */

  return (
    <>
    <h4> hello</h4>
    <Header />
    <DetailPage  bookState={bookState} reviewList={reportList} />
    </>
  );
}

export default App
