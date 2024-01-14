import Select from "react-select";

function Pagination({ post, currentPost, number, postPerPage, setPostPerPage, setNumber }) {
  const options = [
    {
      value: 2,
      label: "2/Page",
    },
    {
      value: 5,
      label: "5/Page",
    },
    {
      value: 10,
      label: "10/Page",
    },
    {
      value: 20,
      label: "20/Page",
    },
  ];

  function ChangePage(pageNumber) {
    if (pageNumber > numberOfPages || pageNumber < 1) {
      return;
    }
    if (pageNumber >= left && pageNumber <= right) {
      setNumber(pageNumber);
    } else if (pageNumber < left) {
      pageNumberArr = [];
      right = pageNumber;
      left = Math.max(right - 4, 1);
      for (var i = left; i <= right; i++) {
        pageNumberArr.push(i);
      }
      setNumber(pageNumber);
    } else if (pageNumber > right) {
      pageNumberArr = [];
      left = pageNumber;
      right = Math.min(left + 4, numberOfPages);
      for (var i = left; i <= right; i++) {
        pageNumberArr.push(i);
      }
      setNumber(pageNumber);
    }
  }

  var pageNumberArr = [];

  const numberOfPages = Math.ceil(post.length / postPerPage.value);
  var left = 1;
  var right = Math.min(left + 4, numberOfPages);
  for (var i = left; i <= right; i++) {
    pageNumberArr.push(i);
  }

  return (
    <div className="page_control">
      <div className="item_count">Total {currentPost.length} items</div>
      <div className="pagination">
        <button className="page_change" onClick={() => ChangePage(1)}>
          Jump to First
        </button>

        <button
          className="page_change"
          onClick={() => ChangePage(number - 1)}
          style={number === 1 ? { cursor: "not-allowed" } : null}
        >
          {"<"}
        </button>
        {pageNumberArr.map((Elem, ind) => {
          return (
            <>
              <button
                key={ind}
                className={Elem === number ? "page_change_selected" : "page_change"}
                onClick={() => ChangePage(Elem)}
              >
                {Elem}
              </button>
            </>
          );
        })}
        <button
          className="page_change"
          onClick={() => ChangePage(number + 1)}
          style={number === numberOfPages ? { cursor: "not-allowed" } : null}
        >
          {">"}
        </button>
        <button className="page_change" onClick={() => ChangePage(numberOfPages)}>
          Jump to Last
        </button>
      </div>
      <div className="dropdown">
        <Select defaultValue={postPerPage} onChange={setPostPerPage} options={options} />
      </div>
      <div className="go_to_page">
        Go To
        <input className="page_input" type="text" onChange={(e) => ChangePage(Number(e.target.value))} />
      </div>
    </div>
  );
}

export default Pagination;
