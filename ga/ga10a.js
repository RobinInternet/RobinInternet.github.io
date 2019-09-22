// JavaScript Document
var addata=new Array();
console.log("RUN!!!")
function ga (type,wz,id,v) {
console.log("参数输出：（TWIV"+type+"-"+wz+"-"+id+"-"+v);
var err=0;
var use=0;
	if(v=="1.0aT"){
		if(type=="blog"){
			//开始获取文章
			if(wz=="test"){
				//测试文章
				var zsid=parseInt(id.substring(3,8))
				if(ad_data(190922)!="allright"){err=1}else{
					console.log("完整ID："+id+"整数ID："+zsid);
					document.getElementById(id).src=addata[zsid];
					console.log("设置参数完成:src"+addata[zsid]);
					use=1;
				};
			};
		};
	};
if(use!=1){return "OK~>1.0aT"}else{"Error~1.0aT"};	
}
function ad_data (p) {
var run=0;
	if(p==190922){
		addata[0]="https://mr-robin.top/images/gen.svg";
		addata[1]="https://i.loli.net/2019/08/12/hECZio4TGJAQWXS.png";
		addata[2]="https://blog.conoha.vip/moe/favicon.jpg"
		run=1;
		}
		
console.log("装载数据完成");
if(run!=1){
	return "error";
	}else{
	return "allright";
		}
	}

function f1(){//js中的函数
}