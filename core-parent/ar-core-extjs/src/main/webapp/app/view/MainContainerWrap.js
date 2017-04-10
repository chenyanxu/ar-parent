Ext.define('ar.view.MainContainerWrap', {
  extend: 'Ext.container.Container',
  xtype: 'maincontainerwrap',
  beforeLayout: function () {
    var me = this, height = Ext.Element.getViewportHeight() - 50; // offset by topmost toolbar height
    me.minHeight = height;
    me.callParent(arguments);
  },
  html:'<iframe src="html/index.html" style="width:100%;height:100%"></iframe>'
});
