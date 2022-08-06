const date ="06/08/2022"
const month ="August"
const batchinfo = "Plutonium,W3D5,The Topic for today was Nodejs module system"

function printDate(){
    console.log(date)
        function printMonth(){
            console.log(month)
        }
        function getBatchInfo(){
            console.log(batchinfo)
        }
    
}

module.exports.mydate= date
module.exports.mymonth = month
module.exports.mybatchinfo = batchinfo