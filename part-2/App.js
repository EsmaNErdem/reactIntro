const App = () => {
    return (
    <div>
        <Tweet
        name="Smokey Baker"
        username="smokesthekitty"
        tweet="I love treats!"
        date={new Date().toDateString()}
        />
    </div>
    );
}