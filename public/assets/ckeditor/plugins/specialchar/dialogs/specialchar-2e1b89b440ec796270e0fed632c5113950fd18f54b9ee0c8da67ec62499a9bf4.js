CKEDITOR.dialog.add("specialchar",function(e){var t,n,a=e.lang.specialchar,l=function(n){var a;"a"==(n=n.data?n.data.getTarget():new CKEDITOR.dom.element(n)).getName()&&(a=n.getChild(0).getHtml())&&(n.removeClass("cke_light_background"),t.hide(),n=e.document.createElement("span"),n.setHtml(a),e.insertText(n.getText()))},i=CKEDITOR.tools.addFunction(l),o=function(e,a){var l;if("span"==(a=a||e.data.getTarget()).getName()&&(a=a.getParent()),"a"==a.getName()&&(l=a.getChild(0).getHtml())){n&&r(null,n);var i=t.getContentElement("info","htmlPreview").getElement();t.getContentElement("info","charPreview").getElement().setHtml(l),i.setHtml(CKEDITOR.tools.htmlEncode(l)),a.getParent().addClass("cke_light_background"),n=a}},r=function(e,a){"span"==(a=a||e.data.getTarget()).getName()&&(a=a.getParent()),"a"==a.getName()&&(t.getContentElement("info","charPreview").getElement().setHtml("&nbsp;"),t.getContentElement("info","htmlPreview").getElement().setHtml("&nbsp;"),a.getParent().removeClass("cke_light_background"),n=void 0)},s=CKEDITOR.tools.addFunction(function(t){var n,a=(t=new CKEDITOR.dom.event(t)).getTarget();n=t.getKeystroke();var i="rtl"==e.lang.dir;switch(n){case 38:(n=a.getParent().getParent().getPrevious())&&(n=n.getChild([a.getParent().getIndex(),0]),n.focus(),r(null,a),o(null,n)),t.preventDefault();break;case 40:(n=a.getParent().getParent().getNext())&&(n=n.getChild([a.getParent().getIndex(),0]))&&1==n.type&&(n.focus(),r(null,a),o(null,n)),t.preventDefault();break;case 32:l({data:t}),t.preventDefault();break;case i?37:39:(n=a.getParent().getNext())?1==(n=n.getChild(0)).type?(n.focus(),r(null,a),o(null,n),t.preventDefault(!0)):r(null,a):(n=a.getParent().getParent().getNext())&&((n=n.getChild([0,0]))&&1==n.type?(n.focus(),r(null,a),o(null,n),t.preventDefault(!0)):r(null,a));break;case i?39:37:(n=a.getParent().getPrevious())?((n=n.getChild(0)).focus(),r(null,a),o(null,n),t.preventDefault(!0)):(n=a.getParent().getParent().getPrevious())?((n=n.getLast().getChild(0)).focus(),r(null,a),o(null,n),t.preventDefault(!0)):r(null,a)}});return{title:a.title,minWidth:430,minHeight:280,buttons:[CKEDITOR.dialog.cancelButton],charColumns:17,onLoad:function(){for(var t,n,l=this.definition.charColumns,o=e.config.specialChars,r=CKEDITOR.tools.getNextId()+"_specialchar_table_label",c=['<table role="listbox" aria-labelledby="'+r+'" style="width: 320px; height: 100%; border-collapse: separate;" align="center" cellspacing="2" cellpadding="2" border="0">'],g=0,d=o.length;g<d;){c.push('<tr role="presentation">');for(var u=0;u<l;u++,g++){if(t=o[g]){t instanceof Array?(n=t[1],t=t[0]):(n=t.replace("&","").replace(";","").replace("#",""),n=a[n]||t);var p="cke_specialchar_label_"+g+"_"+CKEDITOR.tools.getNextNumber();c.push('<td class="cke_dark_background" style="cursor: default" role="presentation"><a href="javascript: void(0);" role="option" aria-posinset="'+(g+1)+'"',' aria-setsize="'+d+'"',' aria-labelledby="'+p+'"',' class="cke_specialchar" title="',CKEDITOR.tools.htmlEncode(n),'" onkeydown="CKEDITOR.tools.callFunction( '+s+', event, this )" onclick="CKEDITOR.tools.callFunction('+i+', this); return false;" tabindex="-1"><span style="margin: 0 auto;cursor: inherit">'+t+'</span><span class="cke_voice_label" id="'+p+'">'+n+"</span></a>")}else c.push('<td class="cke_dark_background">&nbsp;');c.push("</td>")}c.push("</tr>")}c.push("</tbody></table>",'<span id="'+r+'" class="cke_voice_label">'+a.options+"</span>"),this.getContentElement("info","charContainer").getElement().setHtml(c.join(""))},contents:[{id:"info",label:e.lang.common.generalTab,title:e.lang.common.generalTab,padding:0,align:"top",elements:[{type:"hbox",align:"top",widths:["320px","90px"],children:[{type:"html",id:"charContainer",html:"",onMouseover:o,onMouseout:r,focus:function(){var e=this.getElement().getElementsByTag("a").getItem(0);setTimeout(function(){e.focus(),o(null,e)},0)},onShow:function(){var e=this.getElement().getChild([0,0,0,0,0]);setTimeout(function(){e.focus(),o(null,e)},0)},onLoad:function(e){t=e.sender}},{type:"hbox",align:"top",widths:["100%"],children:[{type:"vbox",align:"top",children:[{type:"html",html:"<div></div>"},{type:"html",id:"charPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:28px;height:40px;width:70px;padding-top:9px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"},{type:"html",id:"htmlPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:14px;height:20px;width:70px;padding-top:2px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"}]}]}]}]}]}});