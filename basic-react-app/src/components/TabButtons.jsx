export default function TabButtons(props) {
    function handleClick() {
        console.log('Hey');
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}