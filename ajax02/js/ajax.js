var $={
				ajax:function(options){
					//url
					var url=options.url;//得到的地址
					if(url===undefined){
						throw new Error("ajax必须要写url");
						return;
					}
					//请求类型
					var type=options.type||"get";//默认get请求
					var datatype=options.datatype||"string";
					var xhr=null;
					if (window.XMLHttpRequest) {
						xhr=new XMLHttpRequest();
					} else{
						xhr=new ActiveXObject("Microsoft.XMLHTTP");
					}
					xhr.onreadystatechange=function(){
						if (xhr.readyState==4) {
							if(xhr.status>=200&&xhr.status<300||xhr.status==304){
								if ((typeof options.success)==="function") {
									var response="";
									if(datatype=="string"){
										response=xhr.responseText;
									}else if(datatype=="json"){
										response=JSON.parse(xhr.responseText);
									}
									options.success(response);
								}
							}
						}
					}
					xhr.open(type,url,true);
					xhr.send(null);
				}
			}