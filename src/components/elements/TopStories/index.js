import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {AllNewsWrap, Title, NewsNames, NewsBox} from './TopStyle';

function TopStoryPage() {

    const [topStories, setTopStories] = useState([]);
    const [visible, setVisible] = useState(4);
    
    useEffect(() => {
        axios
        .get('https://api.nytimes.com/svc/topstories/v2/us.json?api-key=uxE31FdZQhmnKzpPFOkRkkaKh5XAB7gN')
        .then(result => {
            setTopStories(result.data.results)
            console.log(result.data.results)
        })
        .catch(error => console.log(error))
    }, [])

  return (
    <>
        <AllNewsWrap>
            <Title>
                <h3>TOP STORIES</h3>
            </Title>

            <NewsNames>
                {topStories.slice(0, visible).map((item) => {
                    return(
                        <>
                            <NewsBox>
                                <a href={item.url}>
                                    <h3>{item.title}</h3>
                                    <img src={item.multimedia[0].url} alt=""/>
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

export default TopStoryPage