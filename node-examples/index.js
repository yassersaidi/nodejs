const req = require('./req');
function solveRect(x,y) {
    console.log(`solving for rectangle with ${x} and ${y}`)
    req(x,y,(err,rect) => {
        if(err) console.log(err.message)
        else{
            console.log("The Area is:"+rect.area())
            console.log("The Perimeter is:"+rect.perimeter())
        }
        
    })
}

solveRect(10,10)

solveRect(0,10)

solveRect(2,20)