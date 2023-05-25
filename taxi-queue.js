function TaxiQueue() {
	let peopleCounter = 0
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
	 if(peopleCounter = 12){
		taxi--
	 }
	 if(peopleCounter <= 12){
	 	taxi
	}
	return taxi
}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}
