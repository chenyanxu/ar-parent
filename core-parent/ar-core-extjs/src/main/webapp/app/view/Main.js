/**
 * 主应用入口
 *
 * date:2015-10-26
 */
Ext.define('ar.view.Main', {
  extend: 'Ext.container.Viewport',
  requires:[
    'ar.view.MainController'
  ],
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  controller:'main',
  items:[
    {
      beforeLayout: function () {
        var me = this, height = Ext.Element.getViewportHeight(); // offset by topmost toolbar height
        me.minHeight = height;
        //me.callParent(arguments);
      },
      html:'<iframe name="main_frame" frameborder="0" src="html/index.html" style="width:100%;height:100%"></iframe>'
    }
  ]
});
