class UserView {
  constructor() {
    this.app = document.getElementById('app');
  }

  displayUser(user) {
    this.app.innerHTML = '';
    user.forEach(user => {
      const userElement = document.createElement('div');
      userElement.innerHTML = `<h3>${user.nama}</h3><p>ID: ${user.id_user} - KTP: ${user.ktp} - KK: ${user.kk}</p>`;
      this.app.appendChild(userElement);
    })
  }
}