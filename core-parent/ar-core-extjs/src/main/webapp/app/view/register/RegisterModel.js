//app 主窗口容器

Ext.define('ar.view.register.RegisterModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.register',
    data: {
        username: '',
        password: '',
        confirmPassword:'',
        vcode:'',
        vcodeHidden:false,
        vcodeUrl:'/images/kaptcha'
    }
});