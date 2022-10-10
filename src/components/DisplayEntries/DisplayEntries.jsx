import EntryPresenter from "../EntryPresenter";

const DisplayEntries = (props) => {
    return (
        <ul>
            {props.parentEntries.map(element => <li><EntryPresenter postObject={element}/></li>)}
        </ul>
    )
}
 
export default DisplayEntries;


        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Post</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {props.parentEntries.map((entry, index) => {
        //             return (
        //                 <tr>
        //                     <td>{index + 1}</td>
        //                     <td>{entry.name}</td>
        //                     <td>{entry.post}</td>
        //                 </tr>
        //             )
        //         })}
        //     </tbody>
        // </table>