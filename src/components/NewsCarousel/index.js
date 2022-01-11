import { FlatList } from "react-native";
import { useState, useRef, useCallback, useEffect } from "react";
import NewsCarousel from "../TestNewsCarousel";
import axios from "axios";

function Slide({ data }) {
  return (
    <>
      <NewsCarousel
        newsImage={data.image}
        newsTitle={data.title}
        newsUrl={data.url}
        newsContent={data.subtitle}
      />
    </>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);
  const [newsArr, setNewsArr] = useState([{}]);

  const currentNews = async () => {
    await axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then((response) => {
        console.log(response.data.Data);
        setNewsArr(response.data.Data);
      });
  };

  const getNewsList = newsArr.map((element, indexkey) => {
    return {
      id: element.id,
      url: element.url,
      image: element.imageurl,
      title: element.title,
      subtitle: element.body,
    };
  });

  const indexRef = useRef(index);

  indexRef.current = index;

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  // Use the index
  useEffect(() => {
    console.warn(index);
  }, [index]);

  useEffect(() => {
    currentNews();
  }, []);

  return (
    <FlatList
      data={getNewsList}
      style={{ flex: 1 }}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
    />
  );
}
export default Carousel;
