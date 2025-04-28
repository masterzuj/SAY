if ("webkitSpeechRecognition" in window) {
  let speechRecognition = new webkitSpeechRecognition();
  let final_transcript = "";

  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.lang = 'de-DE';

  speechRecognition.onstart = () => {
    document.querySelector("#status").style.display = "block";
  };
  speechRecognition.onerror = () => {
    document.querySelector("#status").style.display = "none";
    console.log("Speech Recognition Error");
  };
  speechRecognition.onend = () => {
    document.querySelector("#status").style.display = "none";
    console.log("Speech Recognition Ended");
  };

  speechRecognition.onresult = (event) => {
    let interim_transcript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
		
		
		
		final_transcript2 = event.results[i][0].transcript;
		
		
			$("#blub").html(final_transcript2);
	
	$("#blub").animate({ "opacity": "1" }, "fast" );
	
	$("#blub").animate({ "bottom": "+=300px", "opacity": "0" }, "slow" );
	
	$("#blub").animate({ "bottom": "0px" }, "fast" );
		
		
		

		
		
      } else {
		  
		  
		  
		   interim_transcript += event.results[i][0].transcript;
		  
		  
		  
		  
       
      }
    }

	
  };


speechRecognition.start();

  document.querySelector("#start").onclick = () => {
    speechRecognition.start();
  };
  document.querySelector("#stop").onclick = () => {
    speechRecognition.stop();
  };
} else {
  console.log("Speech Recognition Not Available");
}
