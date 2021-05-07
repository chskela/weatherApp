import useSWR from 'swr';

import config from '../configs/config';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useFetchData(position, city = null) {
  const {API_KEY, URI} = config;
  const {latitude, longitude} = position;
  const query = city ? `q=${city}` : `lat=${latitude}&lon=${longitude}`;
  const uri = `${URI}${query}&units=metric&appid=${API_KEY}`;

  const {data, error, isValidating} = useSWR(uri, fetcher);
  console.log(isValidating);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
