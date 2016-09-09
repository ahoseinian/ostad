import {observable} from 'mobx';

class LoginStore {
  @observable open = false;
  toggle=()=>{
    this.open = !this.open;
  }
}

export default new LoginStore();
