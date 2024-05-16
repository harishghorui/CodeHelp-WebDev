import './Items.css';

// function Items() {
//     return (
//         <div>
//             <div className="items-name">Harish</div>
//         </div>
//     );
// }

// function Items(props) {
//     return (
//         <div className="items-name">
//             {props.name}
//         </div>
//     )
// }

// enable child element
function Items(props) {
    return (
        <div className="items-name">
            <div>{props.name}</div>
            <div>{props.children}</div>
        </div>
    )
}

export default Items;