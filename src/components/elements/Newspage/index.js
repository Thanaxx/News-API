import React from 'react'
import Allnewspage from '../Allnews';
import Headline from '../Headlines';
import SeeMoreNews from '../MoreNews';
import TopStoryPage from '../TopStories';
import {NewsmainPage, MainStories, AllNews, Headlines, TopStories, SimilarNews} from './NewsStyle'

function News() {

  return(
      <>
        <NewsmainPage>
            <MainStories>
                <AllNews>
                   <Allnewspage />
                </AllNews>

                <Headlines>
                  <Headline />
                </Headlines>
            </MainStories>

            <TopStories>
                <TopStoryPage />
            </TopStories>

            <SimilarNews>
                <SeeMoreNews />
            </SimilarNews>
        </NewsmainPage>
      </>
  )
}

export default News;
