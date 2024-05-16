import './ItemsDOB.css';

// function ItemsDOB() {
//     return (<div className="DOB">
//         <div>02</div>
//         <div> Jan</div>
//         <div> 1996</div>
//     </div>)
// }

function ItemsDOB(props) {
    const date = props.date;
    const month = props.month;
    const year = props.year;

    return (
        <div className="DOB">
            <div>{date}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}

export default ItemsDOB;
