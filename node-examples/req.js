module.exports = (x, y, calback) => {

    if (x <= 0 || y <= 0) {
        setTimeout(() => {
            calback(new Error("equals to zero can't calc, values should be > 0"), null)
        }, 2000)

    }
    else {
        setTimeout(() => {
            calback(null, {
                perimeter : () => (2*(x+y)),
                area : () => (x*y)
            })  
        }, 2000);
    }

}

