import { useState, useEffect } from 'react';
import dataType from '../types';

const useFetch = (id?: string) => {
  const [data, setData] = useState<dataType[]|null>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async (id?:string) => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products${id ? `/${id}` : ''}`);
        const responseData = await res.json();
        if(Array.isArray(responseData)){
            setData(responseData);
        }
        else{
            setData([responseData]);
        }
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setIsLoading(false);
      }
    };

    fetchData(id);
  }, [id]);

  return { data, isLoading, error };
};

export default useFetch;
