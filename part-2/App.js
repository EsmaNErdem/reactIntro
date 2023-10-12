const App = () => {
    return (
    <div>
        <Tweet
        name="Smokey Baker"
        username="smokesthekitty"
        tweet="I love treats!"
        date={new Date().toDateString()}
        />
        <Tweet
        name="Smokey Baker"
        username="smokesthekitty"
        tweet="I love mommy!"
        date={new Date().toDateString()}
        />
        <Tweet
        name="Smokey Baker"
        username="smokesthekitty"
        tweet="I love daddy!"
        date={new Date().toDateString()}
        />
    </div>
    
    );
}