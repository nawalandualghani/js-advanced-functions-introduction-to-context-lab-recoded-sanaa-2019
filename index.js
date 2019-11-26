// Your code here
function createEmployeeRecord(arr){
let employeeRecord={
  firstName: arr[0],
       familyName: arr[1],
       title: arr[2],
       payPerHour: arr[3],
       timeInEvents: [],
       timeOutEvents: []
}
return employeeRecord
}
 function createEmployees(employeedata) {
    return employeedata.map(function(arr){
        return createEmployeeRecord(arr)
    })
}
function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour, 10),
        })
    return employee
}
function createTimeOutEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10),
        })
    return employee
}

function hoursWorkedOnDate(employee, dates){
    let ine = employee.timeInEvents.find(function(e){
        return e.date === dates
    })

    let out= employee.timeOutEvents.find(function(e){
        return e.date === dates
    })

    return (out.hour - ine.hour) / 100
}

function wagesEarnedOnDate(employee, alldate){
    let rawWage = hoursWorkedOnDate(employee, alldate) * employee.payPerHour
    return parseFloat(rawWage.toString())
}

function allWagesFor (employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })
  let payable = eligibleDates.reduce(function(mains, d){
         return mains + wagesEarnedOnDate(employee, d)
     }, 0)

     return payable
 }

 function createEmployeeRecords(ar) {
   return ar.map(function(row){
     return createEmployeeRecord(row)
   })
 }


 function findEmployeeByFirstName(emp,fName){
    return  emp.find(function(ele){
         return ele.firstName==fName;
 })
 }

  function calculatePayroll(arrayOfEmployeeRecords){
     return arrayOfEmployeeRecords.reduce(function(mains, arr){
         return mains + allWagesFor(arr)
     }, 0)
 }
