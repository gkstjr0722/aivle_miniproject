import BookReportDetailItem from './BookReportDetailItem'

function BookReportDetailList ({review, bookname}){
    return (
    <ul className="post-list">
      {review.map(p => (
        <BookReportDetailItem
          key={p.id}
          id={p.id}
          bookname = {bookname}
          review={p.content}
          nickname={p.nickname}
          likes={p.likes}
          
        />
      ))}
    </ul>
    )

}
export default BookReportDetailList