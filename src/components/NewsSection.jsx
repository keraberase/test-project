import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import NewsPreview from "./NewsPreview";
import NewsGalleryComponent from './NewsGalleryComponent New';
import { useLanguage } from '../LanguageContext';

const NewsSection = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    // Додаємо подію для відслідковування змін розміру екрану
    window.addEventListener('resize', handleResize);

    // Чистимо подію при виході з компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  let count = Math.floor(windowWidth / 300); 
  if (count > 4) count = 4;
  
  // визначаємо кількість постів в одному ряду при данній ширині екрану


  const apiUrl = process.env.REACT_APP_APIURL;
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [news, setNews] = useState([]);
  const [firstNews, setFirstNews] = useState();
  
  const [postsPerPage, setPostsPerPage] = useState(count);
  const [isMore, setIsMore] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [isSecond, setIsSecond] = useState(false);
  
  const handleCLickLoadNews = () => {
    if (postsPerPage === count) { //перевіряємо чи це перше натискання, якщо так - подвоюємо кількість постів на сторінці
      setIsSecond(true);
      setPostsPerPage(count * 2);   //аби після першої генерації (де 1 рядок новин) додавалося ще 2 рядки.
    } else {
      setPageCount(pageCount=> pageCount + 1);
    } 
    return pageCount; //додаємо до генерації + сторінку 
  }
  useEffect(() => {
    const fetchFirstNews = async () => {
      const response = await fetch(apiUrl +'api/posts/first', {
        method: "GET",
        mode: "cors"
      })
        .then(async (response) => {
          if (response !== undefined) {
            const data = await response.json();
            setFirstNews(data.data);
          } else {
            console.log("Something went wrong with answer. StatusCode: " + response.statusCode); // Щось не так з відповіддю
          }
        }, (error) => {
          console.log('Something went wron with the request',error); //Щось не так з запитом
        });
    }
    fetchFirstNews();
    
  }, [postsPerPage, pageCount]); 
  useEffect(() => {
    //Ми використовуємо useEffect для отримання новин з API
    const fetchNews = async () => {
      const response = await fetch(apiUrl +'api/posts/?page='+ pageCount +'&per_page='+ postsPerPage, {
        method: "GET",
        mode: "cors"
      })
        .then(async (response) => {
          if (response !== undefined) {
            const data = await response.json();
            
            if (isSecond) { 
              setNews(data.data);
              setIsSecond(false);
            } else {
              setNews(news.concat(data.data));  
            }
            
            if (data.links.next == null) {
              setIsMore(false); //Ховаємо кнопку "показати більше" якщо вже показані усі пости
            }
          } else {
            console.log("Something went wrong with answer. StatusCode: " + response.statusCode); // Щось не так з відповіддю
          }
        }, (error) => {
          console.log('Something went wron with the request',error); //Щось не так з запитом
        });
    }
  


    // Викликаємо функцію отримання новин під час завантаження компонента
    
    fetchNews();
    
  }, [postsPerPage, pageCount]); 
  let language = i18n.language;
  if (language == 'ua') {
    language = 'uk_UA';
  }


  


  return <div className="news_section" id="news">
    <h1>{t("news.headline")}</h1>
      {firstNews && // перевіряємо, чи firstNews було встановлено
      <NewsPreview
        id={firstNews.id}
        key={firstNews.id}
        title={firstNews.title ? firstNews.title[language] : ''}
        date={firstNews.date}
        mediaType={firstNews.media[0].type}
        mediaUrl={firstNews.media[0].url}
      />
    }
      
    <div className="content news_section_content">
      <div className="box-for-news-gallery">
        {news.map((props, index) => (
          <NewsGalleryComponent
            id={index}
            key={props.id}
            title={props.title[language]}
            date={props.date}
            mediaType={props.media[0].type}
            mediaUrl={props.media[0].url}
          />
        ))
        }
      </div>
      <button onClick={handleCLickLoadNews} className={isMore ? "load-more-button" : "load-more-button hidden"}>{t("news.button")}</button> 
    </div>
  </div>;
};

export default NewsSection;
