import BookReportDetailList from '../components/BookReportDetailList'
import { useParams } from 'react-router-dom';

function DetailPage({books, reviews, onReviewLike, onReviewEdit, onReviewDelete }){
    const { id } = useParams();
    const book = books.find( b => b.id === Number(id));
    console.log(books)
    console.log(id)
    console.log(book)
    return(
        <>
        <div>
            {/*book.coverImageUrl !='' ? 
            <img src = {book.coverImageUrl} img='img'/> : <></>*/}
            <div>
                <h3>{book.title}</h3>
                <p>{book.content}</p>
                <p>생성일: {book.createAt}</p>
            </div>
        </div>
            <BookReportDetailList
            review= {reviews.filter(p => p.bookid === book.id )}
            bookTitle={book.title}
            onRevieLike={onReviewLike}
            onReviewEdit={onReviewEdit}
            onReviewDelete={onReviewDelete}
            />
        </>

    );
}
export default DetailPage;