// write your DOM code here.
// DOM element references
const passengersCounter = document.querySelector(".passenger_queue_count")
const joinButton	= document.querySelector(".join_queue")
const leaveButton = document.querySelector(".leave_queue")
const joinQueueButton = document.querySelector(".join_taxi_queue")
const taxiCounter = document.querySelector(".taxi_queue_count")
const departButton = document.querySelector(".depart")

// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events

joinButton.addEventListener("click", function(){
    taxiQueue.joinQueue()
    localStorage.setItem("passengerQueueIncr",JSON.stringify(taxiQueue.queueLength()))
    passengersCounter.innerHTML=JSON.parse(localStorage.getItem("passengerQueueIncr"))
})

leaveButton.addEventListener("click",function(){
    taxiQueue.leaveQueue()
    localStorage.setItem("passengerQueueDec",JSON.stringify(taxiQueue.queueLength()))
    passengersCounter.innerHTML = JSON.parse(localStorage.getItem("passengerQueueDec"))
    
})

joinQueueButton.addEventListener("click",function(){
    taxiQueue.joinTaxiQueue()
    localStorage.setItem("taxiCounter",JSON.stringify())
    taxiCounter.innerHTML = taxiQueue.joinTaxiQueue()
})

departButton.addEventListener("click",function(){
    taxiCounter.innerHTML = taxiQueue.taxiDepart()
})

