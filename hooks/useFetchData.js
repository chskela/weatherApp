import config from '../configs/config';
import { useRequest } from 'ahooks';

export default function useFetchData(city) {
  const { API_KEY, URI } = config;
  const uri = `${URI}q=${city}&units=metric&appid=${API_KEY}`;
  const { data, error } = useRequest(uri);
  return [data, error];
}
