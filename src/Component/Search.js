import React, { useEffect, useState } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("software");
  const [result, setResult] = useState([]);
  useEffect(() => {
    const get_response = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };
    if (term && !result.length) {
      get_response();
    } else {
      const get_timeoutId = setTimeout(() => {
        if (term) {
          get_response();
        }
      }, 1000);

      return () => {
        clearTimeout(get_timeoutId);
      };
    }
  }, [term, result.length]);
  const display_content = result.map((result) => {
    return (
      <div key={result.pageid} className="ui message">
        <div style={{ float: "right" }}>
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="header">{result.title}</div>
        <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
      </div>
    );
  });
  return (
    <div>
      <div className="ui segment">
        <div className="ui form">
          <div className="ui field">
            <label>Search Content</label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      {display_content}
    </div>
  );
};

export default Search;
