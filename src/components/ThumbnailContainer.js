import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 12px 32px;
  grid-template-columns: repeat(auto-fill, 155px);
  justify-content: center;
`;

const ContainerTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #e3f4fc;
  grid-column: 1 / -1;
  margin-bottom: 0px;
`;

const Loading = styled.div`
  color: #fff;
`;

const ThumbnailContainer = ({ movies }) => {
  return (
    <GridContainer>
      {movies.length > 0 ? (
        <>
          <ContainerTitle>Popular Movies</ContainerTitle>
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </GridContainer>
  );
};

export default ThumbnailContainer;
