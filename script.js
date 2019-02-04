direct = new Vue({
	el: "#direct",
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
		"allMessages": [
			{
				"from":"2",
				"to":"1",
				"time":"20:30",
				"message":"selam"
			},
			{
				"from":"1",
				"to":"2",
				"time":"20:30",
				"message":"a.selam"
			},
			{
				"from":"3",
				"to":"1",
				"time":"20:30",
				"message":"selam üçten"
			},
			{
				"from":"1",
				"to":"3",
				"time":"20:30",
				"message":"a.selam birden üçe"
			}
		],
		selectedUser: {
			"id": "0",
			"img": "0",
			"name": "0",
			"time": "0",
			"preview": "0"
		}
	},
	computed: {
		chats: {
			cache: false,
			get: function() {
				return _.filter(direct.allMessages, function(o){
					return o.from == direct.selectedUser.id || o.to == direct.selectedUser.id;
				})
			}
		}
	}
});

direct.selectedUser = direct.users[0];
