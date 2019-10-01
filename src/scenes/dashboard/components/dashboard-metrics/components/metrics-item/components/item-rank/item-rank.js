import React from "react";
import RankContainer from "./components/rank-container";
import RankTitle from "./components/rank-title";

const ItemRank = ({ itemRank }) => (
  <RankContainer>
    <RankTitle>
      {/* eslint-disable-line */}
      {`#${itemRank}`}
    </RankTitle>
  </RankContainer>
);

export default ItemRank;
