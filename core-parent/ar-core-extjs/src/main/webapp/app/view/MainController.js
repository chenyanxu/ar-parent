Ext.define('ar.view.MainController', {
  extend: 'Ext.app.ViewController',
  alias:'controller.main',
  showLogin:function(){
    var view = Ext.create('ar.view.login.Login');

    view.show();
  },
  showRegister:function () {
    var view = Ext.create('ar.view.register.Register');

    view.show();
  }
});
