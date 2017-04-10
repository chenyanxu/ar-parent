Ext.define('ar.view.login.Login', {
  extend: 'Ext.window.Window',
  requires: [
    'ar.view.login.LoginModel',
    'kalix.view.components.common.VCodeImage',
    'ar.view.login.LoginController'
  ],
  controller:'login',
  width: 450,
  height: 450,
  defaults: {
    margin: '0 75 10 75',
    width: 300
  },
  viewModel:'login',
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
      name:'rb',
      items: [
        {boxLabel: '学生', inputValue: 0,checked:true},
        {boxLabel: '教师', inputValue: 1}
      ],
      bind:{
        value:'{loginType}'
      }
    },
    {
      xtype: 'textfield',
      height: 50,
      emptyText: '账号',
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
      emptyText: '密码',
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
      xtype: 'container',
      layout: 'hbox',
      bind: {
        hidden: '{vcodeHidden}'
      },
      items: [
        {
          xtype: 'textfield',
          height: 50,
          width:95,
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
      xtype: 'container',
      margin: '10 75 10 75',
      layout: 'hbox',
      items: [
        {
          xtype: 'checkbox',
          inputValue: '1',
          boxLabel: '记住密码'
        },
        {
          xtype: 'tbspacer',
          flex: 1
        },
        {
          xtype:'label',
          html:'<u style=\'color:#4c8ba1;\'>忘记密码？</u>',
          margin:'8 0 0 0'
        }
      ]
    },
    {
      xtype: 'button',
      style: 'background-color:#4c8ba1',
      height: 50,
      border: false,
      handler: 'onLogin',
      text: '登录'
    },
    {
      xtype:'label',
      html:'还不是会员？<u style=\'color:#4c8ba1;cursor:pointer\'>立即注册</u>',
      listeners:{
        click:'showRegister',element:'el'
      }
    }
  ]
});
