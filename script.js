window.direct = new Vue({
	el: "#direct",
	data: {
		"l": {},
		"me": {},
		"_users": [],
		"allMessages": [],
		"selectedUser": {},
		"search": ""
	},
	methods: {
		changeUser: function(user){
			self = this;
			self.selectedUser = _emptyUser;
			setTimeout(function(){
				self.selectedUser = user;
			}, 1);
		}
	},
	computed: {
		users: {
			cache: false,
			get: function() {
				return _.filter(direct._users, function(o){
					return typeof o.name != "undefined" && o.name.toLowerCase().indexOf(direct.search.toLowerCase()) > -1;
				});
			}
		},
		chats: {
			cache: false,
			get: function() {
				return _.filter(direct.allMessages, function(o){
					return o.from == direct.selectedUser.id || o.to == direct.selectedUser.id;
				});
			}
		}
	}
});
	
window.addEventListener("load", function(event) {
	direct.l = _lang;
	direct.me = _me;
	direct._users = _users;
	direct.allMessages = _allMessages;
	direct.selectedUser = _emptyUser;
	direct.selectedUser = direct.users[0];
});