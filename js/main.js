var quotes = [
	"That's one small step for a man, one giant leap for mankind - Neil Armstrong",
	"The Universe is under no obligation to make sense to you - Neil deGrasse Tyson",
	"I would like to die on Mars. Just not on impact - Elon Musk",
	"If we can conquer space, we can conquer childhood hunger - Buzz Aldrin",
	"The eternal silence of these infinite spaces frightens me - Blaise Pascal"
];
var index = 0;
var app = new Vue({
	el: '#app',
	data: {
		index: index,
		message: quotes[index]
	},
	created: function () {
		var self = this;
		document.getElementById('app').style.visibility = 'visible';
		setInterval(function () {
			self.message = quotes[self.index];
			self.index = (self.index + 1) % 5;
		}, 3000);
	}
})