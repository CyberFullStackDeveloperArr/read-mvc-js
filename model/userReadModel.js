class UserModel {
    constructor() {
     this.user = [];
    }
  
    fetchUser() {
     return fetch('database/user.json')
        .then(response => response.json())
        .then(data => {
         this.user = data;
         return this.user;
        });
    }
}
  