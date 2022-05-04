import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MoreNewsWrap, Title, NewsNames, NewsCard, Picture, Details} from './MoreStyle'

function SeeMoreNews() {

    const [moreNews, setMoreNews] = useState([]);
    const [visible, setVisible] = useState(8);

    useEffect(() => {
        axios
        .get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=uxE31FdZQhmnKzpPFOkRkkaKh5XAB7gN')
        .then(result => {
            setMoreNews(result.data.results)
            console.log(result.data.results)
        })
        .catch(error => console.log(error))
    }, [])

  return (
    <>
        <MoreNewsWrap>
            <Title>
                <h3>SIMILAR NEWS </h3>
            </Title>

            <NewsNames>
                {moreNews.slice(0, visible).map((more) => {
                    return(
                        <NewsCard>
                            <a href={more.url}>
                                <Picture>
                                    <img src={more.multimedia[0].url} alt="" />
                                </Picture>

                                <Details>
                                    <h3>{more.title}</h3>
                                    <p className='author'>{more.author}</p>
                                    <p>{more.abstract}</p>
                                </Details>
                            </a>
                        </NewsCard>
                    )
                })}
            </NewsNames>
        </MoreNewsWrap>
    </>
  )
}

export default SeeMoreNews