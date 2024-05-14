export default function TabButtons(props, {onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{props.children}</button>
        </li>
    );
}