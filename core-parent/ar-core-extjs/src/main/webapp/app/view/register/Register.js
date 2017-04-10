Ext.define('ar.view.register.Register', {
  extend: 'Ext.window.Window',
  requires: [
    'ar.view.register.RegisterModel',
    'kalix.view.components.common.VCodeImage',
    'ar.view.register.RegisterController'
  ],
  controller:'register',
  width: 450,
  height: 450,
  defaults: {
    margin: '0 75 10 75',
    width: 300
  },
  viewModel:'register',
  align: 'center',
  border: false,
  modal: true,
  resizable: false,
  header: false,
  layout: {
    type: 'vbox'
  },
  items: [
    {
      xtype: 'image',
      src: 'resources/images/ar_login_header.png',
      width: 417,
      height: 60,
      margin: '5 16 5 16',
    },
    {
      xtype: 'radiogroup',
      columns: 4,
      margin:'0 75 0 75',
      items: [
        {boxLabel: '学生', inputValue: '0',checked:true},
        {boxLabel: '教师', inputValue: '1'}
      ]
    },
    {
      xtype: 'textfield',
      height: 50,
      emptyText: '邮箱/手机',
      bind: {
          value: '{username}'
      },
      listeners: {
        afterrender: function () {
          this.focus();
        }
      }
    },
    {
      xtype: 'textfield',
      inputType: 'password',
      emptyText: '6-16位密码，包含字母',
      height: 50,
      bind: {
          value: '{password}'
      },
      listeners: {
        keyup: {
          element: 'el',
          fn: 'onKeyup'
        }
      }
    },
    {
      xtype: 'textfield',
      inputType: 'password',
      emptyText: '确认密码',
      height: 50,
      bind: {
        value: '{confirmPassword}'
      },
      listeners: {
        keyup: {
          element: 'el',
          fn: 'onKeyup'
        }
      }
    },
    {
      xtype: 'container',
      layout: 'hbox',
      bind: {
        hidden: '{vcodeHidden}'
      },
      items: [
        {
          xtype: 'textfield',
          height: 50,
          width: 95,
          margin: '0 5 0 0',
          emptyText: '验证码',
          bind: {
            value: '{vcode}'
          }
        },
        {
          xtype: 'vcodeimage',
          bind: {src: '{vcodeUrl}'}
        }
      ]
    },
    {
      xtype: 'button',
      style: 'background-color:#4c8ba1',
      height: 50,
      border: false,
      handler: 'onRegister',
      text: '注册'
    },
    {
      xtype: 'container',
      layout: 'hbox',
      items: [
        {
          xtype: 'checkbox',
          inputValue: '1',
          boxLabel: '我同意《服务条款》'
        },
        {
          xtype: 'tbspacer',
          flex: 1
        },
        {
          xtype:'label',
          html:'<u style=\'color:#4c8ba1;cursor:hand\'>登录>></u>',
          margin:'8 0 0 0',
          listeners:{
            click:'showLogin',element:'el'
          }
        }
      ]
    }
  ]
});
