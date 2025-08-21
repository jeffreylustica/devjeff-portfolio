// import { useState, useEffect } from 'react'
// import { client } from '../client'

// const useFetchResume = () => {
//     const [resume, setResume] = useState([])

//     useEffect(() => {
//         const query =  '*[_type == "assets"]{"url": file.asset->url}'

//         client.fetch(query)
//           .then(data => {
//             setResume(data)
//           })
//       }, [])

//     return {resume}
// }

// export default useFetchResume
