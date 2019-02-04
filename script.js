direct = new Vue({
	el: "#direct",
	methods: {
		selectUser: function(a){
			this.selectedUser = a;
		}
	},
	beforeMount: function(){
		this.selectedUser = this.users[0];
	},
	data: {
		"me": {
			"id": "1",
			"img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg",
			"name": "Ahmet Can",
		},
		"users": [
			{
				"id": "2",
				"img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg",
				"name": "Ali Can",
				"time": "22:30",
				"preview": "son mesaj"
			},
			{
				"id": "3",
				"img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg",
				"name": "Mehmet",
				"time": "22:30",
				"preview": "son mesaj 2"
			}
		],
		"chats": [
			{
				"from":"2",
				"to":"1",
				"time":"2019-01-01 20:30",
				"message":"selam"
			},
			{
				"from":"1",
				"to":"2",
				"time":"2019-01-01 20:30",
				"message":"a.selam"
			},
			{
				"from":"3",
				"to":"1",
				"time":"2019-01-01 20:30",
				"message":"selam üçten"
			},
			{
				"from":"1",
				"to":"3",
				"time":"2019-01-01 20:30",
				"message":"a.selam birden üçe"
			}
		],
		selectedUser: null
	}
});

document.querySelector('.chat[data-chat=user2]').classList.add('active-chat');
document.querySelector('.user[data-chat=user2]').classList.add('active');

var friends = {
		list: document.querySelector('ul.people'),
		all: document.querySelectorAll('.left .user'),
		name: ''
	},
	chat = {
		container: document.querySelector('.container .right'),
		current: null,
		user: null,
		name: document.querySelector('.container .right .top .name')
	};

friends.all.forEach(function(f) {
	f.addEventListener('mousedown', function() {
		f.classList.contains('active') || setAciveChat(f);
	});
});

function setAciveChat(f) {
	friends.list.querySelector('.active').classList.remove('active');
	f.classList.add('active');
	chat.current = chat.container.querySelector('.active-chat');
	chat.user = f.getAttribute('data-chat');
	chat.current.classList.remove('active-chat');
	chat.container.querySelector('[data-chat="' + chat.user + '"]').classList.add('active-chat');
	friends.name = f.querySelector('.name').innerText;
	chat.name.innerHTML = friends.name;
}
