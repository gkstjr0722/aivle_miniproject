import DetailPageReviewItem from './DetailPageReviewItem'

function DetailPageReviewList ({review, bookname}){
    return (
    <ul className="post-list">
      {review.map(p => (
        <DetailPageReviewItem
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
export default DetailPageReviewList