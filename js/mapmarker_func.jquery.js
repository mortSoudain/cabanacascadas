		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "-41.084544", "longitude":"-72.640895", "icon": "img/map-marker2.png", "baloon_text": 'Aquí se encuentra <strong>CabañaCascadas!</strong>'}
			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 10,
			center	:  "-41.084544, -72.640895",
			markers	: myMarkers
		});