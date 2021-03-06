import React from "react";
import { useSelector } from "react-redux";

// Interfaces
import { AppState } from "../../dtos/AppState";
import IDev from "../../dtos/IDev";

// Components
import TitleHeader from "../../components/TitleHeader";
import DevCard from "../../components/DevCard";

import { Container, Devs } from "./styles";

const History: React.FC = () => {
  const searchedDevs = useSelector<AppState, IDev[]>(
    (state) => state.searches.searchedDevs
  );

  return (
    <Container>
      <TitleHeader title='Histórico de buscas' goBack={true} />

      <Devs>
        {searchedDevs &&
          searchedDevs.map((search) => (
            <DevCard key={search.id} devData={search} />
          ))}
      </Devs>
    </Container>
  );
};

export default History;
