import React, { useState, useEffect } from 'react';
import { fetchCoinInfo, fetchCoinTickers } from 'api';
import { useQuery } from 'react-query';
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import Chart from './Chart';
import Price from './Price';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;

  a.active {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0;
`;

interface RouteState {
  state: { name: string };
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

type TParams = {
  coinId: string;
};

export default function Coin() {
  const { coinId } = useParams() as TParams;
  const { state } = useLocation() as RouteState;

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       const infoData = await (
  //         await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //       ).json();
  //       const priceData = await (
  //         await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //       ).json();
  //       setInfo(infoData);
  //       console.log('!!!', priceData);
  //       setPriceInfo(priceData);
  //       setLoading(false);
  //     } catch (err) {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ['info', coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ['tickers', coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );

  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Header>
        <Title>Coins {state?.name || 'loading'}</Title>
      </Header>
      {loading ? 'Loading' : infoData?.name}
      <Overview>
        <OverviewItem>
          <span>Rank:</span>
          <span>{infoData?.rank}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Symbol:</span>
          <span>{infoData?.symbol}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Price:</span>
          <span>{tickersData?.quotes.USD.price.toFixed(3)}</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>Total Suply:</span>
          <span>{tickersData?.total_supply}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Max Suply:</span>
          <span>{tickersData?.max_supply}</span>
        </OverviewItem>
      </Overview>
      <NavLink
        to={`/${coinId}/chart`}
        className={({ isActive }) => (isActive ? 'active' : '')}>
        chart
      </NavLink>
      <NavLink
        to={`/${coinId}/price`}
        className={({ isActive }) => (isActive ? 'active' : '')}>
        price
      </NavLink>
      <Outlet context={{ coinId }} />
    </Container>
  );
}
