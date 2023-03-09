import React from 'react'
import BarChart from './BarChart'
import ChartBar from './chartBar'
import DoughnutChart from './DoughnutChart'
import PolarAreaChart from './PolarAreaChart'

const Analytic = () => {
  return (
    <div>
      <BarChart />
      <ChartBar />
      <DoughnutChart/>
      <PolarAreaChart/>
    </div>
  )
}

export default Analytic;