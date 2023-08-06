export default function CounterResetButton({resetMethod}) {

    return (
        <>
            <div className="resetCount">
                <button className="resetButton" onClick={() => resetMethod()}>
                    reset
                </button>
            </div>
        </>
    )
}