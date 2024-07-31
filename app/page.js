import * as React from "react";
import Bar from "./components/Bar";
import BarHeader from "./components/BarHeader";

const Home = async () => {
  const res = await fetch("https://exchange.birrtrade.com/exchange", {cache: "no-cache"} );
  const data = await res.json();
  const exchange = data.exchange;

  return (
    <div className="page-container">
      <BarHeader />
      {exchange.map((item, index) => {
        return <Bar key={index} data={item} rank={index} />;
      })}
    </div>
  );
};

export default Home;
