function sendMessage(){
	var obj = [
				{
					Name : "mikko",
					Age : 20,
					Height: "80cm",
					profession: "trader"

				},
				{
					Name : "jenni",
					Age : 25,
					Height: "80cm",
					profession: "Accountant"

				},
				{
					Name : "mikko",
					Age : 20,
					Height: "80cm",
					profession: "trader"

				},
				{
					Name : "jenni",
					Age : 25,
					Height: "80cm",
					profession: "Accountant"

				},
				{
					Name : "mikko",
					Age : 20,
					Height: "80cm",
					profession: "trader"

				},
				{
					Name : "jenni",
					Age : 25,
					Height: "80cm",
					profession: "Accountant"

				}
			  ]
	dbparam = JSON.stringify(obj);
	$.ajax({
		url: "./Test.php", 
		type: 'POST',
		data: {info :dbparam},

		dataType: "json"
	

	})
	.done(function(result){
		for(let x of result){
			let content = {Name: x.Name, Age: x.Age, Height: x.Height, profession: x.profession};
		    console.log(content);
		}
	}).fail(function(error){
		console.log(error);
	}).always(function(result){
		//for(let x of result){
		 console.log('done reading');
		
	})
}