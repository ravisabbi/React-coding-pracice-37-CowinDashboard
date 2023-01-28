import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysData} = props

  const DataFormatter = num => {
    if (num > 1000) {
      return `${(num / 1000).toString()}k`
    }
    return num.toString()
  }

  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-coverage-heading">Vaccination Coverage</h1>

      <BarChart width={900} height={400} data={last7DaysData} margin={{top: 5}}>
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'grey',
            strokeWidth: 1,
            fontFamily: 'Roboto',
            fontSize: 15,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'grey',
            strokeWidth: 0.5,
            fontFamily: 'Roboto',
            fontSize: 15,
          }}
        />

        <Legend
          wrapperStyle={{
            paddingTop: 20,
            fontSize: 12,
            fontFamily: 'Roboto',
            textAlign: 'center',
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose1"
          fill="#2d87bb"
          barSize="20%"
          radius={[10, 10, 5, 5]}
        />
        <Bar
          dataKey="dose2"
          name="Dose2"
          fill="#f54394"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
