const classes = require("./5e-SRD-Classes.json")

let keys = []

classes.map(item => {

    Object.keys(item).map(key => {
        if (!keys.includes(key)) {
            keys.push(key)
        }
    })

})

console.log(keys)
