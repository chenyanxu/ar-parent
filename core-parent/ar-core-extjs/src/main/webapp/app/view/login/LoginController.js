Ext.define('ar.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias:'controller.login',
  onLogin:function(){
    var vm=this.getView().lookupViewModel();

    window.frames.main_frame.loginSuccess(vm.get('username'),vm.get('loginType')?vm.get('loginType').rb:0);
    this.getView().close();
  },
  showRegister:function () {
    this.getView().close();

    var view = Ext.create('ar.view.register.Register');

    view.show();
  }
});
