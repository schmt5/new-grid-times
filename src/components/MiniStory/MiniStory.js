import React from 'react';
import styled from 'styled-components/macro';

const MiniStory = ({ id, image, title }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Title>{title}</Title>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  flex: 0 0 200px;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 220 / 132;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  color: var(--color-gray-900);
`;

export default MiniStory;
