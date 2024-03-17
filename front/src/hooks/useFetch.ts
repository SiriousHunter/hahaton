import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export const useFetch = (requestOptions: AxiosRequestConfig) => {
  const [isFetchingData, setIsFetchingData] = useState(false)
  const [isErrorFetching, setIsErrorFetching] = useState(false)
  const [data, setData] = useState(null)

  // useEffect(async () => {
  //   setIsFetchingData(true)
  //   try {
  //     const res = await axios(requestOptions)
  //
  //     setData(res.data)
  //   } catch (e) {
  //     setIsErrorFetching(true)
  //   }
  //   setIsFetchingData(false)
  // }, [])

  return {
    isFetchingData,
    isErrorFetching,
    data
  }
}
