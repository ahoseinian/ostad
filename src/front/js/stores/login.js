import { observable } from 'mobx';

class LoginStore {
  @observable open = false;
  @observable user = document.getElementById('app').dataset.user ? JSON.parse(document.getElementById('app').dataset.user) : false;
  toggle = () => this.open = !this.open;
}

export default new LoginStore();
