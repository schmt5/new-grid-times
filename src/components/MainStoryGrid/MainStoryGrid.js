import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas: 
    'main-story main-story secondary-stories'
    'advertisement advertisement advertisement'
    'opinion-stories opinion-stories opinion-stories';
    column-gap: 24px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas: 
    'main-story main-story secondary-stories secondary-stories opinion-stories'
    'main-story main-story advertisement advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
 
  @media ${QUERIES.tabletAndUp} {
    padding-right: 24px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1px;
  background-color: var(--color-gray-300);
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    background-color: var(--color-gray-100);
    column-gap: 2rem;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    border-left: 1px solid var(--color-gray-300);
    padding-left: 24px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 24px;
  }
`;

export default MainStoryGrid;
