//app 主窗口容器

Ext.define('ar.view.login.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',
    data: {
        username: '',
        password: '',
        loginType:null,
        vcode:'',
        vcodeHidden:false,
        vcodeUrl:'/images/kaptcha'
    }
});