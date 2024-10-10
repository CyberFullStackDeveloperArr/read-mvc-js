class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.fetchUser().then(user => this.view.displayUser(user));
  }
}
