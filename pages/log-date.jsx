import { useDispatch } from 'react-redux'
import { logDate } from '../actions'

const LogDate = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logDate())
        }}
      >
        log...
      </button>
    </div>
  )
}

export default LogDate
