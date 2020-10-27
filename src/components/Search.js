// import React, { useState } from 'react'

// export default function Search({ goSearch }) {

//     const [searchValue, setSearchValue] = useState('')


//     function onHandleChange(ev) {
//         const { value } = ev.target
//         setSearchValue(value)
//     }

//     function onSearch() {
//         goSearch(searchValue)
//     }

//     return (
//         <div className="search flex align-center justify-center">
//             <div className="content-wrap flex">

            
//                 <input className=""
//                     value={searchValue}
//                     type='text' placeholder="Which city would you like to check the weather for?"
//                     onChange={onHandleChange}
//                 ></input>
//                 <button onClick={onSearch}>Search</button>
//             </div>
//         </div>
//     )
// }
