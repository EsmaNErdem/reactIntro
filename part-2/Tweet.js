const Tweet = ({name, username, date, tweet}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>@{username}</h2>
            <p>{date}</p>
            <p>{tweet}</p>

        </div>
    );
}