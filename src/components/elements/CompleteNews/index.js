import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FiSearch} from 'react-icons/fi';
import {Container, SearchBox, InputSearch, NewsWrap, NewsBox, LoadMore} from './NewsStyle'
import {BsArrowDownCircle} from 'react-icons/bs';

function NewsSection() {

    const [newsApi, setNewsApi] = useState([])
    const [visible, setVisible] = useState(16)
    const [findNews, setFindNews] = useState('')


    useEffect(() => {
        axios
        .get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uxE31FdZQhmnKzpPFOkRkkaKh5XAB7gN')
        .then(result => {
            setNewsApi(result.data.results)
            console.log(result.data.results)
        })
        .catch(error => console.log(error))
    }, []);

    // load more news
    const loadNews = () => {
        setVisible((prevValue) => prevValue + 8)
    }

    // search
    const handleOnchange = e => {
        setFindNews(e.target.value)
    }

    // filter news by search
    const filterNews = newsApi.filter(newsApi =>
        newsApi.title.toLowerCase().includes(findNews.toLowerCase())
    )

  return (
    <>
        <Container data-aos="zoom-in">
            <SearchBox>
                <InputSearch>
                    <input 
                        type="text" 
                        placeholder='Enter your keywords...'
                        onChange={handleOnchange}
                    />
                    <span>
                        <FiSearch/>
                        </span>
                </InputSearch>
            </SearchBox>

            <NewsWrap>
                {filterNews.slice(0, visible).map((item, index) => {
                    return(
                        <>
                            <NewsBox>
                                <a href={item.url}>
                                    <img src={item.multimedia[0].url} alt="" />
                                    <p className='author'>{item.author}</p>
                                    <h3>{item.title}</h3>
                                    <p>{item.abstract}</p>
                                </a>
                            </NewsBox>
                        </>
                    )
                })}
            </NewsWrap>

            <LoadMore>
                <button onClick={loadNews}><BsArrowDownCircle/></button>
            </LoadMore>
        </Container>
    </>
  )
}

export default NewsSection