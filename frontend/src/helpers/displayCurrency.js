const displayINRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: "currency", // Specifies that the number should be formatted as currency
        currency: 'INR',
        minimumFractionDigits: 2 // Ensures that there are always two decimal places
    })

    return formatter.format(num)

}

export default displayINRCurrency