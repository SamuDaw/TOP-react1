const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function MonthList() {
    return (
        <>
            <h1>Months of the Year</h1>
            <ul>
                {months.map((month, index) => (<li key={index}>{month}</li>))
                }
            </ul>
        </>

    )
}

export default MonthList;