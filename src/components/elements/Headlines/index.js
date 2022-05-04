import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {TopNewsWrap, Title, TopNames, HeadlineName} from './HeadlineStyle'

function Headline() {

    const [headNews, setHeadNews] = useState([]);
    const [visible, setVisible] = useState(12);

    useEffect(() => {
        axios
        .get('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=uxE31FdZQhmnKzpPFOkRkkaKh5XAB7gN')
        .then(result => {
            setHeadNews(result.data.results)
            console.log(result.data.results)
        })
        .catch(error => console.log(error))
    }, [])

  return (
    <>
        <TopNewsWrap>
            <Title>
                <h3>HEADLINES</h3>
            </Title>

            <TopNames>
                {headNews.slice(0, visible).map((top) => {
                    return(
                        <HeadlineName>
                            <a href={top.url}>
                                <h3>{top.title}</h3>
                                <p className='desc'>{top.abstract}</p>
                                <p className='snippet'>{top.subsection}</p>
                            </a>
                        </HeadlineName>
                    )
                })}
            </TopNames>
        </TopNewsWrap>
    </>
  )
}

export default Headline