import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const Charts = ({salaryData}) => {

    const [data, setData] = useState([[]])

    useEffect(() => {
        let dataCopy = [
          
          [`${salaryData.id}`,`${salaryData.id}`],
          [`${salaryData.id}`,`${salaryData.id}`]
        ];
        setData(dataCopy);
        console.log('Data:', dataCopy);
        

    }, [salaryData])

  return (
    <Chart chartType='LineChart' width='100%' height='100%' data={data} legendToggle/>
  )
}

export default Charts