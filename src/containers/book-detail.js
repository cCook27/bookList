
const BookDetail = (props) => {
  if(!props.book) {
    return <div>Select a book to get started.</div>
  }

  return (
    <div>
      <h3>Details for:</h3>
      <div>Title: {props.book.title}</div>
      <div>Pages: {props.book.pages}</div>
    </div>
  );
}

export default BookDetail;