import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {byAgeData} = props
  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination by age</h1>
      <PieChart height={400} width={1000}>
        <Pie
          data={byAgeData}
          outerRadius="60%"
          cx="50%"
          cy="50%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#64c2a6" />
          <Cell name="Above 60" fill="#a3df9f" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
