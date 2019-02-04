direct = new Vue({
	el: "#direct",
	data: {
		"me": _me,
		"allMessages": _allMessages,
		selectedUser: _emptyUser
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
				return _users;
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

direct.selectedUser = direct.users[0];
