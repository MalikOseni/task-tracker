
const Tasks = ({tasks}) => {
  return (
    <>
          { tasks.map((e) => (
    <h3 key={e.id}>{e.text}</h3>
              ))}
    </>
  )
}

export default Tasks
