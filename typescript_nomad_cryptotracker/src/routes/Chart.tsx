import { fetchCoinHistory } from 'api';
import React from 'react';
import { useQuery } from 'react-query';
import ApexChart from 'react-apexcharts';
import { useOutletContext } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from 'atoms';

interface CharProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface IError {
  error: string;
}

export default function Chart() {
  const { coinId } = useOutletContext<CharProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );
  const isDark = useRecoilValue(isDarkAtom);

  if (data && Object.keys(data as any).includes('error')) {
    return <div>err</div>;
  }

  return (
    <div>
      {isLoading ? (
        'loading'
      ) : (
        <ApexChart
          series={[
            {
              name: 'sales',
              data: data?.map((price: any) =>
                Math.ceil(price.close)
              ) as number[],
            },
          ]}
          type="line"
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
            },
            stroke: {
              curve: 'smooth',
              width: 2,
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}
