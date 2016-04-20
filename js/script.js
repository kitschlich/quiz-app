$(document).ready(function() {

	var currentQuestion = 0;

	var questions = [
		{
			img: "img/maple.jpg",
			text: "These trees have a fruit called samaras which occur in distinctive pairs each containing one seed enclosed in a nutlet attached to a flattened wing of fibrous, papery tissue.",
			ans1: "Birch",
			ans2: "Yew",
			ans3: "Maple",
			ans4: "Ash",
			correct: "ans3"
		},
		{
			img: "img/birch.jpg",
			text: "This tree holds great historical significance in the culture of North India, where the thin bark coming off in winter was extensively used as writing paper.",
			ans1: "Yew",
			ans2: "Birch",
			ans3: "Maple",
			ans4: "Ash",
			correct: "ans2"			
		},
		{
			img: "img/ash.jpg",
			text: "This tree's common name traces back to the Old English for spear.",
			ans1: "Oak",
			ans2: "Birch",
			ans3: "Maple",
			ans4: "Ash",
			correct: "ans4"			
		},
		{
			img: "img/yew.jpg",
			text: "This tree is often found in churchyards in England, Wales, Scotland, Ireland, France and northern areas of Spain.",
			ans1: "Yew",
			ans2: "Birch",
			ans3: "Oak",
			ans4: "Ash",
			correct: "ans1"			
		},
		{
			img: "img/oak.jpg",
			text: "Planks of wood from this tree were common on high status Viking longships in the 9th and 10th centuries.",
			ans1: "Oak",
			ans2: "Birch",
			ans3: "Maple",
			ans4: "Ash",
			correct: "ans1"			
		}
	];

	var score = 0;

	function nextQuestion() {
		$('img').attr('src', questions[currentQuestion].img);
		$('.question-text').html(questions[currentQuestion].text);
		$('#lbAns1').html(questions[currentQuestion].ans1);
		$('#lbAns2').html(questions[currentQuestion].ans2);
		$('#lbAns3').html(questions[currentQuestion].ans3);
		$('#lbAns4').html(questions[currentQuestion].ans4);

		var percentProgress = (currentQuestion + 1) / 5 * 100;
		$('.progress-bar').css('width', percentProgress + '%');
		$('#progressLabel').html('Question ' + (currentQuestion + 1) + ' of 5');
	};

	$('.answers').submit(function(e) {
		if ($('input:checked')[0].id == questions[currentQuestion].correct) {
			score++;
			console.log(score);
		};

		$('input:checked').prop('checked', false);
		
		currentQuestion++;

		if (currentQuestion === 5) {
			alert('You finished the quiz! Your score is ' + score + ' out of 5.');
		} else {
			nextQuestion();
		}
		e.preventDefault();
	});

	nextQuestion();

});