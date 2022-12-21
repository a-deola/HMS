import Card from './Card'


function Box(props) {
  return (
    <div className='grid grid-cols-5 gap-4 md:grid-cols-6 md:gap-2 p-5 '>
    {(props.data).map((patient, index) => 
      <Card 
      key={index}
      initial={patient.firstName[0].toUpperCase()}
      firstName={patient.firstName}
      lastName={patient.lastName}
      department={patient.department}
      lastVisit={patient.lastVisit}
      id={patient._id}
       />)}
    </div>
  )
}

export default Box