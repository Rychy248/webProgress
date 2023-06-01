//jshint esversion:6

function getDate() {
    let today = new Date();
    let options = {
        weekday:"long",
        month:"short",
        day:"numeric",
        year:"numeric"
    }
    
    let splitedData = today.toLocaleDateString("en-US", options).replace(/,/g,"").split(" "); //[ 'Sunday', 'May', '28,', '2023' ]
    let dayMsg =  splitedData[0] == "Sunday" || splitedData[0] == "Saturday" ? "Its a weekend day" : "Its a work day";
    
    
    let todayData = {
        dayName: splitedData[0],
        date: `${splitedData[2]}/${splitedData[1]}/${splitedData[3]}`,
        dayMsg:dayMsg
    };

    return todayData
};


module.exports = { getDate }