import React, { useEffect, useState } from "react";
import axios from "axios";
const Convert = ({ language, searchItem }) => {
  const [translation, setTranslation] = useState("");
  const [debounced, setDebounced] = useState(searchItem);
  useEffect(() => {
    const get_timeId = setTimeout(() => {
      setDebounced(searchItem);
    }, 500);
    return () => {
      clearInterval(get_timeId);
    };
  }, [searchItem]);
  useEffect(() => {
    const get_translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounced,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslation(data.data.translations[0].translatedText);
    };
    get_translate();
  }, [language, debounced]);
  return <div className="ui header">{translation}</div>;
};
export default Convert;
