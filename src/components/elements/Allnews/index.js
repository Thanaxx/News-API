import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {AllNewsWrap, Title, NewsNames, NewsBox} from './AllStyle'

function Allnewspage() {

    const [news, setNews] = useState([]);
    const [visible, setVisible] = useState(6);

    //fetchin gthe api
    useEffect(() => {
    axios
    .get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uxE31FdZQhmnKzpPFOkRkkaKh5XAB7gN')
    .then(result => {
        setNews(result.data.results)
        console.log(result.data.results)
    })
    .catch(error => console.log(error))
    }, [])

  return (
    <>
        <AllNewsWrap>
            <Title>
                <h3>ALL NEWS</h3>
            </Title>

            <NewsNames>
                {news.slice(0, visible).map((item) => {
                    return(
                        <>
                            <NewsBox>
                                <a href={item.url}>
                                    <img src={item.multimedia[0].url} alt="" />
                                    <p className='author'>{item.byline}</p>
                                    <h3>{item.title}</h3>
                                    <p>{item.abstract}</p>
                                </a>
                            </NewsBox>
                        </>
                    )
                })}
            </NewsNames>
        </AllNewsWrap>
    </>
  )
}

export default Allnewspage