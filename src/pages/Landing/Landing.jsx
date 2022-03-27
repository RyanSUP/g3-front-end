import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'>
          Left content area
        </div>
        <div className='col-8'>
          right content area
          <div className="row">
            <div className="col">
              right content area a
            </div>
          </div>
          <div className="row">
            <div className="col">
              right content area b
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
