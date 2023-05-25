function TaxiQueue() {
	let peopleCounter =  0
	var taxi = 0

	function joinQueue() {
		peopleCounter++
	}

	function leaveQueue() {
		peopleCounter--
	}

	function joinTaxiQueue() {
		taxi++
	}

	function queueLength() {
		if (peopleCounter < 0){
			peopleCounter = 0
		}
		 return peopleCounter
	}

	function taxiQueueLength() {
		return taxi
	}

	function taxiDepart(){
	 if(peopleCounter >= 12 && taxi > 0){
		peopleCounter = peopleCounter - 12
		taxi --
	 	}
	}
	function setLocalStorage(key,value) {
		localStorage.setItem(key,value)

	}
	function getLocalStorage(key){
		return localStorage.getItem(key)
	}
	//function getNewcounter(value1, value2){
	//	peopleCounter = value1
	//	taxi = value2
	//}
	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,
		setLocalStorage,
		getLocalStorage
	}
}
