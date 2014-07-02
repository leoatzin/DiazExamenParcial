Ext.application({
   launch:function(){
   name:'examen-parcial',
       Ext.create('Ext.TabPanel',{
          fullscreen:true,
          tabBarPosition:'bottom',
          items:[
              {
                  title:'IVA',
                  iconCls:'home',
                  html:'Calcular el IVA '
              },
               formulario1
               
              
          ]
       });
   }
});
/*El calculo de IVA*/
var formulario1={
    xtype:'fieldset',
    title:'IVA',
    iconCls:'user',
    items:[
       {
          xtype:'button',
          text:'boton',
          ui:'confirm',
          handler:function(){
              var g=Ext.getCmp('textIva').getValue();
              var res=IVA=SUBTOTAL*0.16;
          Ext.Msg.alert("Resultado de la conversion: "+ res);}
        },
        {
          xtype:'button',
          text:'boton',
          ui:'confirm',
          handler:function(){
              var g=Ext.getCmp('textRetencionIVA').getValue();
              var res=RET_VA=IVA/3*2;
          Ext.Msg.alert("Resultado de la conversion: "+ res);}
        },
        {
          xtype:'button',
          text:'boton',
          ui:'confirm',
          handler:function(){
              var g=Ext.getCmp('textISR').getValue();
              var res=ISR=SUBTOTAL*0.10;
          Ext.Msg.alert("Resultado de la conversion: "+ res);}
        },
        {
          xtype:'button',
          text:'boton',
          ui:'confirm',
          handler:function(){
              var g=Ext.getCmp('textISR').getValue();
              var res=ISR=SUBTOTAL*0.10;
          Ext.Msg.alert("Resultado de la conversion: "+ res);}
        },
        {
          xtype:'button',
          text:'boton',
          ui:'confirm',
          handler:function(){
              var g=Ext.getCmp('textTotal').getValue();
              var res=TOTAL_PAGAR=SUBTOTAL+RET_IVA-IVA-ISR;
          Ext.Msg.alert("Resultado de la conversion: "+ res);}
        },
        
        
        {
          xtype:'textfield',
          placeHolder:'Ingresa los datos'
        },
        {
            html:['<center><h1>Ingresa el valor del subtotal</h1>',
            '<p>calcular</p>',
        '</center>'].join('')
        },
        
       
    ]
    };

