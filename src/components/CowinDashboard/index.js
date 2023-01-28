import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {vaccineData: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const last7DaysData = data.last_7_days_vaccination.map(item => ({
        vaccineDate: item.vaccine_date,
        dose1: item.dose_1,
        dose2: item.dose_2,
      }))

      const vaccinationByGenderData = data.vaccination_by_gender
      const vaccinationByAgeData = data.vaccination_by_age

      const updatedVaccineData = {
        last7DaysData,
        vaccinationByGenderData,
        vaccinationByAgeData,
      }

      this.setState({
        vaccineData: updatedVaccineData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderingLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderingVaccinationStates = () => {
    const {vaccineData} = this.state
    return (
      <>
        <VaccinationCoverage last7DaysData={vaccineData.last7DaysData} />
        <VaccinationByGender genderData={vaccineData.vaccinationByGenderData} />
        <VaccinationByAge byAgeData={vaccineData.vaccinationByAgeData} />
      </>
    )
  }

  renderingFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-img"
      />
      <h1 className="failure-view-heading">Something went Wrong</h1>
    </div>
  )

  renderingViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderingLoadingView()
      case apiStatusConstants.success:
        return this.renderingVaccinationStates()
      case apiStatusConstants.failure:
        return this.renderingFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowindashbord-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <p className="website-name">Co-WIN</p>
        </div>
        <h1 className="main-heading">CoWIN Vaccination in India</h1>
        {this.renderingViews()}
      </div>
    )
  }
}

export default CowinDashboard
