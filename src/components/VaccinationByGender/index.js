import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {genderData} = props
  return (
    <div className="vaccination-by-gender-container">
      <h1 className="vaccination-by-gender-heading">Vaccination by Gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          data={genderData}
          innerRadius="50%"
          outerRadius="60%"
          dataKey="count"
          startAngle={180}
          endAngle={0}
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#2d87bb" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          verticalAlign="bottom"
          layout="horizontal"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
