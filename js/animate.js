	document.querySelector("#student").addEventListener('click',function(e)

																{
				var ma =document.querySelector("#anime");

				var myAnimation =	this.value;

				switch(myAnimation)
				{	case "colorChange":{
					ma.classList.add('two');
					window.onload = setTimeout(handle,5000);
						function handle()
							{
							ma.className="";
						}
									 break;}
					case "Scale":{
						ma.classList.add('one');
					window.onload = setTimeout(handle,5000);
						function handle()
							{
							ma.className="";
						}
						
						
						break;}
						
						
						case "rotate":{
						ma.classList.add('three');
						window.onload = setTimeout(handle,5000);
						function handle()
							{
							ma.className="";
						}
							break;
						}
							
					
						case "skew":{
						ma.classList.add('four');
						window.onload = setTimeout(handle,5000);
						function handle()
							{
							ma.className="";
						}
						
						break;}
						
						case "left":{
						ma.classList.add('five');
						window.onload = setTimeout(handle,5000);
						function handle()
							{
							ma.className="";
						}
						
						break;}
						
						case "top":{
						ma.classList.add('six');
						window.onload = setTimeout(handle,5000);
						function handle()
							{
							ma.className="";
						}
						
						break;}
						
						case "shadow":{
						ma.classList.add('seven');
						window.onload = setTimeout(handle,5000);
						function handle()
							{
							ma.className="";
						}
						
						break;}
						
					
					
						default:{console.log("hello");}

				}
			},false

															   );




