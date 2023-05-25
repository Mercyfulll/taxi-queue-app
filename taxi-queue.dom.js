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
passengersCounter.innerHTML = 0
taxiCounter.innerHTML = 0


// DOM events

joinButton.addEventListener("click", function(){
    taxiQueue.joinQueue()
    taxiQueue.setLocalStorage("passengerQueue",taxiQueue.queueLength())
    passengersCounter.innerHTML = taxiQueue.getLocalStorage("passengerQueue")


})

leaveButton.addEventListener("click",function(){
    taxiQueue.leaveQueue()
    taxiQueue.setLocalStorage("passengerLeave",taxiQueue.queueLength())
    passengersCounter.innerHTML = taxiQueue.getLocalStorage("passengerLeave")
    
})

joinQueueButton.addEventListener("click",function(){
    taxiQueue.joinTaxiQueue()
    taxiQueue.setLocalStorage("taxiCounter",taxiQueue.taxiQueueLength())
    taxiCounter.innerHTML = taxiQueue.getLocalStorage("taxiCounter")
})

departButton.addEventListener("click",function(){
    taxiQueue.taxiDepart()
     taxiQueue.setLocalStorage("depart",)
     taxiCounter.innerHTML = 
    passengersCounter.innerHTML = "" 
})

