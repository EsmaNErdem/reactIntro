const Person = (props) => {

    return (
        <div>
            <p>Learn some information about this person.</p>
            <p>Their name: {props.name.slice(0,6)}</p>
            <h3>{props.age >= 18 ? "Please go vote!" : "You must be 18 to vote!"}</h3>
            <ul>
                Hobbies:
                {props.hobbies.map(h =>
                    (
                        <li>
                            {h}
                        </li>
                    )
                )}
            </ul>

        </div>
    );
}