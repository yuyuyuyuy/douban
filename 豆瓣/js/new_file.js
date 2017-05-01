/*var person=new Object();
person.name="amy"
alert(person.name)

function setName(obj){
return obj.name="Amy";
}
var person=new Object();
setName(person);
alert(person.name)

function add(num1,num2){
  sum=num1+num2;
 }
add(10,40);
alert(sum)

var person=new Object();
person.name="amy";                   //object引用类型new创建法
person.age=29;

var person={
	name:"amy",                       //object字面量创建法,方括号表示属性
	age:29
}
var person={};
person.name="amy";                   //object默认类型加新属性
person.age=29;

function add(args){
	var output="";
	if (typeof args.name=="string"){
		output+="name:"+args.name+"\n"
	}
	if(typeof args.age=="number"){
		output+="age:"+args.age+"\n"
	}
	alert(output)
}
add({                               //object字面量方式创建属性
	name:"陈雨辰",
	age:23
})
add({
	name:"陈慢慢"
})


var colors=["blue","red"]            //数组字面量类型
alert(colors.length)

var colors= new Array("blue","red","yellow")  ;       //数组new类型   ，方括号表示数字索引
alert(colors.length);
colors[4]="black";                   //为数组第5项添加一个黑色
alert(colors.length)
alert(colors.join("||"))             //数组元素之间以||分隔

//数组Push（），pop()方法（后进  先出）
var colors=[];
var count=colors.push("red","yellow");   //最后加入元素，返回新的长度
alert(count)

var colors=["red"];
var item=colors.pop();                    //移出最后一个，返回移出的元素。
alert(item)

//数组shift(),unshift（）方法（先进先出）
var colors=["red","yellow","blue"]
var item=colors.shift();
alert(item);                            //移出第一个，返回移出后得元素
alert(colors.length)                    

var colors=["red","yellow","blue"]
var count=colors.unshift("pink");        //在数组第一位置添加一个元素，返回新的长度
alert(count); 
alert(colors[0])                      

//reverse()和sort()方法
var value=[1,2,3,6,5];
    value.reverse();                       //倒序排列数组元素
    alert(value);
    
var value=[1,2,3,16,5];
    value.sort();                       //按升序排列，实际按照字符串比较
    alert(value);
   
  //concat(),slice(),splice()方法
  var colors=["red"];
  var colors2=colors.concat("yellow",["blue","pink"]); //连接新元素或新数组，返回连接后得新数组
  alert(colors2);

   var colors=["red","blue","pink","yellow"];
   colors=colors.slice(2,3);                       //截取m到n之间的数组，返回截取的新数组
    alert(colors);
    
 // splice(a,b,c) a表示起始位置，b表示要删除项数，c表示要从起始位置插入的新项数  
  var colors=["red","blue","pink","yellow"];
   remove=colors.splice(2,0,"black");         //返回要删除的那一项，如果没有，想返回未定义
    alert(colors);　　　　//可以插入,删除,替换元素

  
  
  
  
  
  
  
//Function类型
var sum=function(num1,num2){
	return num1+num2;                      //无函数名的建立
}
alert(sum(1,8));

function factory(num){
	if (num<=1){
		return 1;
	}
	else{
	return	num=num*arguments.callee(num-1)
	}
}
alert(factory(5));
   
var color="red";
var o={color:"blue"
        }
function sayColor(){
	alert(this.color)
}
  sayColor();
  o.say=sayColor;            //为对象o赋值一个方法
  o.say()

 
function outer(){
	inner();
}
function inner(){
	alert(inner.caller)
}
 outer();
 
//使用call()和apply()方法
function sum(num1,num2){
	 return num1+num2;
}
function callSum(number1,number2){       //作用1:传递参数，调用函数
	return sum.call(this,number1,number2);    //apply(this,arguments)
}
alert(callSum(10,20));


var color="red";
var o={color:"blue"
        }
function sayColor(){
	alert(this.color)
}
  sayColor();
  sayColor.call(window);
  sayColor.call(o);               //作用2:扩充函数作用域，此时作用域o对象，this指向o
  
  
 //基本包装类型(简单定义，又有默认方法和属性)
 //var num=3;  数字
 // var num="heelko";   字符串；
 // var num=true;       布尔；
 
 var num="heelko";
 alert(typeof num);
 alert(num.charAt(3));          //返回第三项的字符L
  Num2=num.concat("世界");      //数组连接方法
  alert(Num2);
  
            //字符串的slice(),substring(),substr()方法
     //slice()和substring()方法同，开始-结束位置；substr()方法第二个参数表示截取几个字符
  
  var stringValue="hello world";   //indexof()返回参数在字符串的第几个位置；
  alert(stringValue.indexOf("h"));   //0
  alert(stringValue.indexOf("0",5))   //从指定的位置向后搜索，忽略之前有的  7

  minNum=Math.min(1,3.4,5,6);
  maxNum=Math.max(1,3.4,5,6);
  alert(minNum);
  alert(maxNum);
  alert(Math.ceil(7.3));    //上舍入，写方法的时候一定要带对象；
  alert(Math.round(Math.random()));

//创建对象之工厂模式
function creatperson(name,job,age){
	var o={
		name:name,
		job:job,
		age:age
	}
	   return o;
}
var person1=creatperson("cyc","设计师",23);
alert(person1.name)

//创建对象之构造函数模式
function 	Person(name,job,age){
	 this.Name=name;
	 this.Job=job;
	 this.Age=age;
	 this.sayName=function(){
	 	alert(this.age);
	 }
}
var Person1=new Person("cyc","设计师",23);
alert(Person1.Job);

if(confirm("你确定吗？")){
	alert("你好");
}else{
	alert("加油！") 
}
  
 var result=prompt("请输入你的姓名：","陈宇琛")
 if(result!=null){
 	alert("欢迎你"+ result)
 }
 

function back(){
	history.back()
}


var box=document.getElementById("box");
alert(box);
 

window.onload=function(){       
var box=document.getElementById("box");
alert(box);
alert(box.tagName.toLowerCase());
alert(box.innerHTML);
alert(box.title);
alert(box.style);
alert(box.style.color);
}

window.onload=function(){
	var myList=document.getElementById("box1");
	var deepList=myList.cloneNode(true);
	alert(deepList.childNodes.length); 
}

var html=document.documentElement;
alert(html==document.childNodes[1]);
alert(html==document.lastChild);
var body=document.body;
alert(body==document.documentElement.childNodes[1]);

alert(decodeURIComponent(document.URL) );
alert(document.domain);
alert(document.referrer);      //取得来源页面的URL;

var hasHtml=document.implementation.hasFeature("CSS3","3.0");
alert(hasHtml)                //检测DOM是否具有功能的名称及版本号

document.write("<strong>"+(new Date().toString())+"</strong>")

//设置特性
window.onload=function(){var box=document.getElementById("box1");
         alert(box.id) ;
         box.name="你好";
         alert(box.name)
   }
   
 
 //通过属性设置特性
 window.onload=function(){
 	var box=document.getElementById("box1");
 	box.setAttribute("id","BOX");
 	box.setAttribute("title","标题")
 	alert(box.title). 
 }
 
  window.onload=function(){
  	var element=document.createElement("div");
    element.classname="box";
    document.body.appendChild(element);
    
   var text=document.createTextNode("hello") 
   element.appendChild(text);
  } 
 
 function creatPerson(name,age,job){
 	var o=new Object();
 	o.name=name;
 	o.age=age;
 	o.job=job;
 	o.say=function(){                        //工厂模式
 		alert(this.name);
 	} 
 	return o;
 }
 var creat1=creatPerson("小王",23,"工程师")  ;
 creat1.say();
 alert(creat1.job)
*/

/*
 function Person(name,age,job){
 	this.name=name;
 	this.age=age;
 	this.job=job;                            //构造函数模式
 	this.say=function(){
 		alert(this.name)
 	}
 }
var person=new Person("小王",23,"工程师"); 
person.say();
alert(person.age);
alert(person.job)

function Person(){}
Person.prototype.name="小王";
Person.prototype.age=20;
Person.prototype.job="工程师"; 
Person.prototype.say=function(){
	alert(this.name);
}
var person1=new Person();
person1.name="小李";
delete person1.name;
alert(person1.name)
alert(person1.hasOwnProperty("name"));
var keys=Object.keys(Person.prototype); 
alert(keys)

var p1=new Object();
p1.name="Rob";
p1.age=21;
var p1keys=Object.keys(p1);    //Object.keys()方法返回可枚举的实例属性
alert(p1keys);

window.open("https://www.baidu.com");       

function Person(){}
Person.prototype={
	name:"cyc",
	age:23,                   //字面量方法重写原型对象，用逗号
	job:"工程师",
	say:function(){
		alert(this.name)
	}
}
var person1=new Person();
alert(person1.name) 

function Person(){}
var friend=new Person();
Person.prototype.sayHi=function(){
	alert("success!");
}
friend.sayHi();


String.prototype.startwidth=function(text){
	return this.indexOf(text)==0;
}
var msg="hello world";
alert(msg.startwidth("hello"))   
 //原型对象的问题
function Person(){
}
Person.prototype={
	name:"hello",
	age:23,
	job:"学生",
	friends:["amy","linlin"],
	sayName:function(){
		alert(this.name)
	}
}
var person1=new Person();
person1.friends.push("van");
alert(person1.friends);
person1.sayName();

var person2=new Person();
alert(person2.friends)            //共享原型的缺点，实例没有属于自己的全部属性。
alert(person1.friends===person2.friends); //true


//组合使用构造和原型模式
function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	this.friends=["amy","linlin"];
}
Person.prototype={
	sayName:function(){
		alert(this.name);
	}
}                                    //每个都有自己的实例属性，又共享着对方法的引用；
var person1=new Person("大鱼",23,"学生");
person1.friends.push("van");
alert(person1.friends);
person1.sayName();

var person2=new Person("小鱼",23,"教师");
alert(person2.friends) ;
alert(person1.friends===person2.friends);  //false;
alert(person1.sayName===person2.sayName)   //true;


//判断是否需要添加原型方法（动态原型模式）
function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	if(typeof this.sayname!="function"){  //所有信息都封装在构造函数中
		Person.prototype.sayname=function(){
			alert(this.name);
		};
	}
}
var person=new Person("大鱼",23,"学生");
person.sayname();

;

//继承
function Supertype(){
	this.property=true;
}
Supertype.prototype.getSupervalue=function(){
	return this.property;
}
function SubType(){
	this.subproperty=false;                  //继承了此方法
}
SubType.prototype=new Supertype();
SubType.prototype.getsubvalue=function(){  //只继承，自己的方法不改变
	return this.subproperty;
}
Supertype.prototype.getSupervalue=function(){  //覆盖继承源的方法
	return false;
}
var instance=new SubType(); 
alert(instance.getSupervalue());  //TRUE;subtype()继承了supertype()方法

//原型链问题
function Supertype(){
	this.colors=["red","blue","yellow"]
}
function Subtype(){
}
Subtype.prototype=new Supertype

var instance1=new Subtype();
instance1.colors.push("black");
alert(instance1.colors);

var instance2=new Subtype();
alert(instance2.colors);    //instance1和instance2有着相同的返回内容。原型继承的缺点。

//借用于构造函数 
function Supertype(){
	this.colors=["red","blue","yellow"]
}
function Subtype(){
	Supertype.apply(this) //劫持supertype函数的方法，应用到此函数中
}
var instance1=new Subtype();
instance1.colors.push("black");
alert(instance1.colors);

var instance2=new Subtype();
alert(instance2.colors);   //instance1和instance2不同，返回各自的。
//借助于构造函数（带传参）
function Supertype(name){
	this.name=name
}
function Subtype(){
	Supertype.apply(this,["大鱼"]) ;
	this.age=23;
}
var instance=new Subtype(); 
alert(instance.name)

//构造和原型组合方式继承
function Supertype(name){
	this.name=name;
	this.colors=["red","yellow"]
}
Supertype.prototype.sayname=function(){
	alert(this.name)
}

function Subtype(name,age){
	Supertype.call(this,name);  //继承属性
	this.age=age;
}

Subtype.prototype=new Supertype;  //继承方法
 var instance1=new Subtype("cyc",23);
 instance1.colors.push("black"); 
 alert(instance1.colors);
 instance1.sayname();

 var instance2=new Subtype("cyu",43); 
 alert(instance2.colors); 
 alert(instance2.name); 
//严格模式下
"use strict"
var sayhi;
if (2>1){  
sayhi=function(){
 alert("nihao")
	}
sayhi();
}else{ 
sayhi=function(){
		alert("ido")
	}
sayhi(); 
}


//递归1
function sum(i){
	if(i<=1){
		return 1;
	}else{
		return i*sum(i-1);
	}
}
  alert(sum(5));
 //递归2 
function sum(i){
	if(i<=1){
		return 1;
	}else{
		return i*arguments.callee(i-1); //arguments.callee指向一个正在执行的函数指针
	}
}
  alert(sum(7));

//不懂这个例子（闭包）
function assign(){
	var element=document.getElementById("box1");
	element.onclick=function(){
		alert("nihao")
	}
	element=null;
}
function numbers(count){
	for(var i=0;i<count;i++){
		alert(i);
	}
	alert(i);
}

   numbers();

function Myobject(){
	var privatenum=20;
	function privatefunction(){
		return false;
	}
	this.publicMethod=function(){
		privatenum++;
		return privatefunction();
	}
}
 var my=new Myobject();
 alert(my.publicMethod()) 

function Person(name){
	this.getname=function(){
		return name;
	}
	this.setname=function(value){
		return value=name;
	}
}
var person=new Person("dayu");
alert(person.getname());
alert(person.setname())

var win=window.open("http://www.baidu.com","_blank")
if (win==null){
	alert("窗口被拦截！")
}

var timeout=setTimeout(function(){
	alert("nihao")
},2000) 
clearTimeout(timeout);

window.location="http://www.baidu.com";
location.href="http://www.baidu.com"; //常用

window.onload=function(){
var body=document.getElementById("box") 
body.addEventListener("click",setTimeout(function(){
	location.replace("http://www.baidu.com")  //出错
},2000) ,false )
}

 







document.write(navigator.appCodeName+"<br/>");
document.write(navigator.appMinorVersion+"<br/>");
document.write(navigator.appVersion+"<br/>");
document.write(navigator.cookieEnabled+"<br/>");
document.write(navigator.plugins)


function hasplugins(name){
	for (var i=0;i<navigator.plugins.length;i++){
	if(navigator.plugins[i].name.indexOf(name)>-1){
		return true;
	}else{
		return false;
	}
 }
}
alert(hasplugins("Flash") )


window.onload=function(){
var box=document.getElementById("box2");
alert(box.firstChild.nextSibling)
}

//document类型
window.onload=function(){
	alert(document.body);
	alert(document.title);
	alert(document.URL);
	alert(document.domain)
	alert(document.referrer)
}

//element类型
window.onload=function(){
var box=document.getElementById("box2");
alert(box.tagName.toLowerCase()) //ul等同于nodeName
}

//HTML元素
window.onload=function(){
var box=document.getElementById("box2");
alert(box.id)  //box2
alert(box.className) //类名
alert(box.title)    //标题名
box.id="box3";
box.title="nihoa";  //修改属性
box.style.backgroundColor="red"  //修改css

}

//取得特性getAttribute、修改属性set~
window.onload=function(){
var box=document.getElementById("box2");
alert(box.getAttribute("id")) //box2
alert(box.getAttribute("class")) //null与html元素的不同
box.setAttribute("id","box4"); //要设置的属性和值；
alert(box.id)       //box4
} 

//创建元素creatElement("要创建元素的标签名")……
window.onload=function(){
	var div=document.createElement("p"); //先创建标签节点
	
	var textNode=document.createTextNode("你好呀");//创建文本节点
	div.appendChild(textNode)  //将文本节点加到标签里
    document.body.appendChild(div); //将标签节点加到body里
	alert(div.firstChild.nodeValue)  //获取文本节点内容
	div.removeChild(div.firstChild)  //删去某个父节点的某个子节点
	div.replaceChild("strong",document.body.firstChild.firstChild)
}

//事件处理
//1.1 HTML事件处理
//1.1.1		<input type="button" value="请按这里" onclick="alert('欢迎你')">
//1.1.2   <input type="button" value="html第二种" onclick="showMessage()">
function showMessage(){
	alert("加油！")
}

//1.2 DOM0 级事件处理
window.onload=function(){
var btn=document.getElementById("btn");
btn.onclick=function(){
	alert("这是DOM0级事件，直接绑定---target") 
 }
}

//1.3 DOM2 级事件处理
window.onload=function(){
var btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(){
	alert("这是DOM2级事件");  
},false)


//1.3.2移除DOM2事件removeEventListener 
window.addEventListener("load",function(){  //不使用window.onload的另外一种写法
	var btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(){
	alert("这是DOM2级事件");  
},false)
},false)

window.addEventListener("load",function(){
	var btn1=document.getElementById("btn1");
	hander=function(){
		alert("这是DOM2级事件"); 
	}
btn1.addEventListener("click",hander,false)
btn1.removeEventListener("click",hander,false) //移除事件不能直接使用匿名函数
},false)
 
//补充：IE事件绑定与移除是attachEvent();和detachEvent()；只支持冒泡，有两个参数。
//1.4跨浏览器处理事件EventUtil.addHandler();参数：对象，事件名，事件处理


var EventUtil={
	adddHandler:function(element,type,handler){
		if(element.addEventListener()){
			element.addEventListener(type,handler,false)
		}else{
			element.attachEvent(type,handler)
		}
	}
}
var eventUtil=new EventUtil();
 handler=function(){
	 alert("nihao");
	} 
    eventUtil.addHandler(window,"click",handler)

window.onload=function(){
   var btn=document.getElementById("btn");
	 btn.onclick=function(){
		alert(arguments[0])
	}
}
//通过一个函数处理多个事件
window.onload=function(){
	var btn=document.getElementById("btn");
	var hander=function(event){
		switch(event.type){
			case "click":
			alert("clicked");
			break;
			case "mouseover":
			event.target.style.backgroundColor="red";
				break;
			case "mouseout":
			event.target.style.backgroundColor="";
				break;
		}
	};
	btn.onclick=hander;
	btn.onmouseover=hander; 
	btn.onmouseout=hander;
}

//阻止a标签连接点击跳转页面的默认行为(DOM事件)；
window.onload=function(){
	var mylink=document.getElementById("mylink");
	mylink.onclick=function(event){
		event.preventDefault(); 
	}
}
 
//阻止a标签连接点击跳转页面的冒泡行为(DOM事件)；
window.onclick=function(){
	var btn=document.getElementById("btn");
	btn.onclick=function(event){
		alert("我是DOM0事件，")
		event.stopPropagation();  //同时取消事件捕获与冒泡              
	}
	document.body.onclick=function(){
		alert("我是body事件")
	}
}

//eventPhase属性判断事件处于事件流的阶段(DOM事件)；
window.onclick=function(){
	var btn=document.getElementById("btn");
	btn.onclick=function(event){
		alert(event.eventPhase)} //2，处于目标阶段
	document.body.addEventListener("click",function(event){
		alert(event.eventPhase)  //1，处于事件捕获阶段
	},true)
}

//2 IE事件对象
window.onclick=function(){
	var btn=document.getElementById("btn");
	btn.onclick=function(event){
		var e=window.event;
		alert(e.type)
	}
}
//阻止a标签连接点击跳转页面的默认行为(IE事件)；
window.onload=function(){
	var mylink=document.getElementById("mylink");
	mylink.onclick=function(event){
		event.returnValue=false;   //只要将returnValue=false，相当于DOM中preventDefault()；
	}
}

window.onclick=function(){
	var btn=document.getElementById("btn");
	btn.onclick=function(event){
		alert("我是DOM0事件，")
		event.cancelBubble=true;          //ie 的cancelBubble属性只能取消事件冒泡；
	}
	document.body.onclick=function(){
		alert("我是body事件")
	}
}

//当窗口大小发生改变时触发事件
window.addEventListener("resize",function(){
	alert("窗口大小发生了改变")                          //属于BOM事件，不需要页面加载
})

//当窗口滚动条发生改变时触发事件
window.scrollbars=true;                         //属于BOM事件
window.addEventListener("scroll",function(){
	alert("窗口滚轮发生了滚动") ;                         
})
/*


window.onload=function(){
	var changecolor=document.getElementById("changecolor");
	var hander=function(event){
		switch(event.type){
		case "mouseover":
		event.target.style.backgroundColor="red";
		break;
		case "mouseout":
			event.target.style.backgroundColor="blue";
		break;
		case "click":
			event.target.style.backgroundColor="black";
			break;
		}
	}
	changecolor.onmouseover=hander;
	changecolor.onmouseout=hander;           //DOM0级事件方法一定要带On!
	changecolor.onclick=hander; 
}

//contextmenu事件；
window.onload=function(){
	var box=document.getElementById("box2");
	document.body.addEventListener("contextmenu",function(event){
		event.preventDefault();           //先阻止浏览器的默认行为防止出现其他菜单；
		box.style.left=event.clientX+"px";
		box.style.top=event.clientY+"px";
		box.style.visibility="visible";
	})
	document.body.addEventListener("click",function(){
		box.style.visibility="hidden"
	},false)
}

//beforeunload事件，不会用；
window.onload=function(){
	window.addEventListener("beforeunload",function(event){
		event.preventDefault();
		var message="我已经准备好你要是走的话";
		event.returnValue=message;
		return message;  
	},true)
}

//DOMContentLoaded事件
document.addEventListener("DOMContentLoaded",function(){
	alert("DOM已加载完毕")
})

//pageshow事件
(function(){
	var showcount=0;
	window.onload=function(){
		alert("load fired")
	}
	window.addEventListener("pageshow",function(){
		showcount++;
		alert('show has been fired'+showcount+"times.")
	},false)
})()

//事件委托
window.onload=function(){
	var box=document.getElementById("box2");
	box.addEventListener("click",function(event){
		var e=event.target;   //具体发生这件事的对象
		switch(e.id){           //通过id来获取
			case "item1":
			document.title="我改了文档标题";
			break;
			case "item2":
			location.href="http://www.baidu.com"
			break;
			case "item3":
			alert("hi!");
			break;
		}
	}) //如果绑定BODY那么就不用获取那么多元素，设置那么多单击事件，全部都委托给BODY即可。
}

//移除事件处理程序
window.onload=function(){
	var mybtn=document.getElementById("mybtn");
	mybtn.onclick=function(){
		mybtn.onclick=null;  //ci==此时，事件处理不再占用内存。
		document.getElementById("mydiv").innerHTML="你好啊"
	}
}//innerHTML会取代之前的内容（不是追加），所以按钮消失。但此时事件处理程序还在内存中。


//表单事件
window.onload=function(){
	var mysubmit=document.getElementById("mysubmit");
	mysubmit.addEventListener("submit",function(event){
	var e=event.target;   //未成功
	e.preventDefalut();
	},false)
	}

window.onload=function(){
	var myform=document.getElementById("myform");
	alert(myform.elements.length);
	alert(myform.elements[0];)
}

window.onload=function(){
	var myform=document.getElementById("myform");
	var field=myform.elements[0];
	field.value="nihao";
	field.focus();
	field.type="checkbox"
}
//field.disabled=true

window.onload=function(){
		var myform=document.getElementById("myform");
    myform.addEventListener("submit",function(event){
		var e=event.target.elements[0];
		e.disabled=true;     //没有做到
	},false)
}	
window.onload=function(){
		var text=document.getElementById("text");
		text.focus();           //页面一加载就获得光标事件
    text.blur()
    }                  //失去光标事件
		


window.onload=function(){
		var text=document.getElementById("text");
		text.addEventListener("focus",function(event){
			var e=event.target;      //这一步把text当成了总集。
			if(e.style.backgroundColor!= "red"){
				e.style.backgroundColor="yellow";
			}
		},false)
}
window.onload=function(){
	var form=document.getElementById("form")
		var text=document.getElementById("text");
		text.addEventListener("focus",function(){
			
			if(text.style.backgroundColor=" "){    //与上一种方法等价
				text.style.backgroundColor="red";
			}
		},false)
		text.addEventListener("blur",function(){
			
			if(text.style.backgroundColor="red "){    //与上一种方法等价
				text.style.backgroundColor="";
			}
		},false)
	textareaValues=form.elements[2];
	textareaValues.value="nihao"
}
 
//选择文本select;
window.onload=function(){
	var textbox=document.getElementById("text");
	textbox.addEventListener("select",function(){
		alert(textbox.value)                   //当选择input文本内容时触发value值；
	},false)
	}

//选择具体文本substring(selectionStart,selectionEnd)属性;
window.onload=function(){
	var textbox=document.getElementById("text");
	textbox.addEventListener("select",function(){
		alert(textbox.value.substring(textbox.selectionStart,textbox.selectionEnd))
	},false)
}
 
var re=null,
    i;
   for (i=0;i<10;i++){
	re=/\w[a-d]/g;
   }
alert(re.exec("catat(e)x33tprophe"));

window.onload=function(){
	var textbox=document.getElementById("text");
	textbox.addEventListener("keypress",function(event){
  event.preventDefalut();                //阻值不了event
	},false)                             //用的是readonly=""
}


//<input type="text"  id="text" value="这是选择事件" >
window.onload=function(){
	var text=document.getElementById("text");
	text.addEventListener("keypress",function(event){
  var evtcharcode=event.charCode;
  if(!/\d/.test(String.fromCharCode(evtcharcode)&&evtcharcode<9&&!event.ctrlKey)){
  	event.preventDefault();
  }
	},false)                 //阻值输入非数字字符  //未成功          
}


function createXHR(){
	if(typeof XMLHttpRequest !="undefined"){
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject != "string"){
		if(typeof arguments.callee.activeXString!="string"){
		var versions=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
		var i,len;
		for(i=0,len=versions.length;i<len;i++){
			try{
				new ActiveXObject(versions[i]);
				arguments.callee.activeXString=versions[i];
				break;
			}catch(ex){
				
			}
		}
	}
 return new ActiveXObject(arguments.callee.activeXString);
}else{
	throw new Error("找不到XHR对象");
}
}
var xhr=new XMLHttpRequest();
xhr.open("get","example",false);
xhr.send(null);
alert(xhr.responseText );

var xhr=new XMLHttpRequest();
xhr.open("get","example.php","false");
xhr.send(null);
if(xhr.status>=200 && xhr.status<300||xhr.status==304){
	alert(xhr.responseText)
}else{  
	alert("未请求成功"+xhr.readyState) 
}

var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
	if(xhr.readyState==4){
	if(xhr.status>=200 && xhr.status<300||xhr.status==304){
	alert(xhr.responseText)
}else{  
	alert("未请求成功"+xhr.readyState) 
}}
}
xhr.open("get","example.php",true);
xhr.setRequestHeader("myheader","myvalue")
xhr.send(null); 
xhr.getAllResponseHeaders();
 xhr.onreadystatechange(); 

xhr.abort();
*/
var xhr=new XMLHttpRequest();
function addURL(url,name,value){
	url+=(url.indexOf("?")==-1? "?":"&")
	url+=encodeURIComponent(name)+"="+encodeURIComponent("value");
	return(url)
}
var url="example.php";
var url1=addURL(url,"name","linling")  
xhr.open("get",url,false);
xhr.send(null);
alert(xhr.responseText);



















