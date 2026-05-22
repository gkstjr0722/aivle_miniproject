function DetailPageReviewItem ({id, bookname,review, nickname, likes}){
    return (
        <li>
            <h4>{bookname}</h4>
            <p>{nickname}: {review}</p>
            <button >👍 {likes}</button>
            <button >삭제하기</button>
        </li>
    )
}

export default DetailPageReviewItem