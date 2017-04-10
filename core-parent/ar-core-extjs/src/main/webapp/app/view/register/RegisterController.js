Ext.define('ar.view.register.RegisterController', {
  extend: 'Ext.app.ViewController',
  alias:'controller.register',
  onRegister:function(){
    alert('register');
  },
  showLogin:function () {
    this.getView().close();

    var view = Ext.create('ar.view.login.Login');

    view.show();
  }
});
