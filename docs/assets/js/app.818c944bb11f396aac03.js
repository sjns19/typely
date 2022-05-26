!function(){var e={252:function(){},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=r[l]||0,h="".concat(l," ").concat(d);r[l]=d+1;var u=n(h),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,a);a.byIndex=s,t.splice(s,0,{identifier:h,updater:f,references:1})}i.push(h)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=n(r[i]);t[s].references--}for(var c=a(e,o),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nc=void 0,function(){"use strict";var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),i=n.n(r),s=n(565),c=n.n(s),l=n(216),d=n.n(l),h=n(589),u=n.n(h),m=n(252),f=n.n(m),p={};p.styleTagTransform=u(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d(),t()(f(),p),f()&&f().locals&&f().locals;var y={root:document.documentElement,theme:{browserHeader:document.getElementById("browser-header"),toggler:document.querySelector(".js-theme-btn"),icons:{light:document.getElementById("theme-icon-light"),dark:document.getElementById("theme-icon-dark")},colors:{light:"#ffffff",dark:"#000000"}},home:document.getElementById("section-home"),test:document.getElementById("section-test"),footer:document.querySelector(".js-footer"),toggle:function(e){"test"===e?(this.home.classList.remove("is-active"),this.test.classList.add("is-active")):"home"===e&&(this.home.classList.add("is-active"),this.test.classList.remove("is-active")),this.footer.style.display="test"===e?"none":"flex"},applyTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.root.classList.toggle("theme-dark");var t=this.theme,n=this.root.classList.contains("theme-dark"),a=n?t.colors.dark:t.colors.light;t.icons.dark.style.display=n?"none":"inline-block",t.icons.light.style.display=n?"inline-block":"none",t.browserHeader.setAttribute("content",a),t.toggler.dataset.tooltip="Toggle ".concat(n?"Light":"Dark"," Mode"),!0===e&&localStorage.setItem("sjn-wpm-theme",n)},loadTheme:function(){var e=localStorage.getItem("sjn-wpm-theme");if(null!==e&&"true"===e)return this.applyTheme();this.theme.icons.light.style.display="none",this.theme.toggler.dataset.tooltip="Toggle Dark Mode"}},v=y,b={documentBody:document.body,construct:function(){var e=document.createElement("div");e.classList.add("modal"),this.documentBody.appendChild(e);var t=document.createElement("div");t.classList.add("modal-contents"),e.appendChild(t),this.header=document.createElement("div"),this.header.classList.add("modal-header"),t.appendChild(this.header),this.body=document.createElement("div"),this.body.classList.add("modal-body"),t.appendChild(this.body),this.footer=document.createElement("div"),this.footer.classList.add("modal-footer","flex","justify-center"),t.appendChild(this.footer),this.confirmButton=document.createElement("button"),this.confirmButton.classList.add("btn","btn-primary","btn-sm"),this.cancelButton=document.createElement("button"),this.cancelButton.classList.add("btn","btn-secondary","btn-sm"),this.cancelButton.style.display="none",this.footer.appendChild(this.confirmButton),this.footer.appendChild(this.cancelButton)},hide:function(){this.documentBody.classList.remove("modal-visible"),void 0!==this.confirmCallback&&(this.confirmButton.removeEventListener("click",this.confirmCallback),this.confirmCallback=void 0),void 0!==this.cancelCallback&&(this.cancelButton.removeEventListener("click",this.cancelCallback),this.cancelCallback=void 0)},show:function(e){this.header.innerHTML=e.title,this.body.innerHTML=e.contents,this.confirmButton.innerHTML=e.confirmButtonText||"Okay",this.documentBody.classList.add("modal-visible"),this.confirmCallback=g(e.onConfirm),this.confirmButton.addEventListener("click",this.confirmCallback),!0===e.showCancelButton?(this.cancelButton.innerHTML=e.cancelButtonText||"Close",this.cancelButton.style.display="block",this.cancelCallback=g(e.onCancel),this.cancelButton.addEventListener("click",this.cancelCallback)):this.cancelButton.style.display="none"}};function g(e){return function(){void 0!==e&&e(),b.hide()}}var w=b,T={handler:null,counter:0,initial:60,duration:1e3,container:document.querySelector(".js-wpm-time"),init:function(){this.counter=this.initial,this.container.innerText=this.initial},start:function(e){null===this.handler&&(this.handler=setInterval(e,this.duration))},stop:function(){this.pause(),this.counter=0},pause:function(){clearInterval(this.handler),this.handler=null},resume:function(e){this.handler=setInterval(e,this.duration)}},C=["The 'weapons-grade' Dragon's Breath chili pepper is so hot it's downright deadly. If you ate one, it could potentially cause a type of anaphylactic shock.","Babies can't differentiate between dreams and reality. Their brains literally don't have the circuitry yet, all the way until they're about two years old.","More French soldiers died during World War 1 than American soldiers during the entire US military history, including both sides of the civil war.","Anne Frank and Martin Luther King Jr. were born in the same year but if you were to say their names to someone, they would think of completely different moments in history.","There are more uncontacted people in Brazil's portion of the Amazon than anywhere else on the planet, with the number of isolated tribes believed to be more than 100.","The Yoruba people in the southwest part of Nigeria are known for giving birth to more twins than anywhere else in the world, at a rate of 50 per 1,000 births.","Tea is big in the United Kingdom, locals reportedly drink 165 million cups a day. But it was a Portugeuse woman who first brought the drink to the isles.","Mount Everest was first measured in 1856 at 8,840m tall. The height was then adjusted to 8,848m in 1955, which is still the official height stated by the Nepalese government.","Temperatures vary across the Pacific Ocean. The closer to the equator the warmer the water's temperatures. Water near the poles reaches the freezing point!","Geological activity and erosion by the Colorado River created the Grand Canyon as we know it today. It is one of the most studied landscapes in the world.","Grand Canyon National Park, a world heritage site, belongs to everyone. Rocks, plants, wood and artifacts must be left where you found them so others can enjoy them.","The Grand Canyon is home to about 1000 caves, but only 335 have been explored and recorded. Likewise, only a few of the caves at the Grand Canyon have been mapped.","The North Pole has no land mass at all. Instead, it is made up of huge ice floes, 6 to 10 feet thick, that float on the surface of the Arctic Ocean.","The word 'Pacific' means peaceful. The Pacific Ocean got its name from the explorer Ferdinand Magellan. He called the ocean 'mar pacific', which meant peaceful sea.","The first successful summit of Mount Everest was recorded on May 29, 1953 by Sir Edmund Hillary from New Zealand. He was accompanied by Tenzing Norgay, a Sherpa from Nepal.","Bread was invented in Egypt around 8,000 BC. The first examples of it were flat and unleavened, most closely resembling what we know today as tortillas in Latin America.","In 2007, two Russian submarines embarked on a record-breaking dive to the seabed of the North Pole, two and a half miles beneath the surface of the Arctic Ocean.","Over the past 50 years, average temperatures across the Antarctic Peninsula have increased by 3 degree celsius, five times the average increase on Earth.","Although Jupiter and Saturn are typically known for their moons, Uranus also has a good amount of it. There are 27 confirmed moons that are orbiting the big blue planet.","The wolverine has one large tooth that points towards the back of its throat that, when combined with the wolverine's jaw muscles, can snap a moose femur in half.","The giant squid's brain is a torus shape, and its esophagus runs through it. If the squid eats anything too big, it will suffer massive brain damage.","Venus rotates on its axis only once every 243 Earth days but orbits the sun once every 224.65 Earth days. This means that on Venus, a day is longer than a year.","On the antipode of Mecca, there is an island with a Muslim population. They can choose which direction to pray, because all directions are towards Mecca.","There are two subspecies of bobcat; one species that reside east of the Great Plains in North America and one that lives on the west of the Great Plains.","Your nose is always in view. Technically you are always looking at your nose, but your brain just chooses to ignore it. Otherwise, life would be pretty annoying.","Norris has shared that his parent’s unstable finances and the embarrassment of his father’s alcoholism are the main reasons for his introverted character as a child.","The tallest man ever recorded was American giant Robert Wadlow (1918–1940), who stood 8 feet 11 inches. Wadlow’s size was the result of abnormally enlarged pituitary gland.","The reason why everyone complains about the quality of airplane food is that your sense of taste and smell decreases up to 50% during high altitude flights.","In 2009, Stephen Hawking held a reception for time travelers, but didn’t publicize it until after. This way, only those who could time travel would be able to attend.","There is a company in Japan that has schools that teach you how to be funny. The first one opened in 1982. About 1,000 students take the course each year.","There were two AI chatbots created by Facebook to talk to each other, but they were shut down after they started communicating in a language they made for themselves.","The Buddha commonly depicted in statues and pictures is a different person entirely. The real Buddha was actually incredibly skinny because of self-deprivation.","Astronaut is a compound word derived from the two Ancient Greek words 'Astro' meaning 'star' and 'naut' meaning 'sailor'. So astronaut literally means 'star sailor'.","The lead singer of The Offspring started attending school to achieve a doctorate in molecular biology while still in the band. He graduated in May 2017.","The youngest Pope in history was Pope Benedict IX who was 11 years old at the time of the election. He is also the only person to have been the Pope more than once.","Nowadays, millionaires with just $1 million aren’t considered wealthy anymore by most Americans. Now, the typical American sees at least $2.4 million as wealthy.","Hanna-Barbera pitched The Flintstones to networks for 8 weeks before it was finally picked up. It became the first-ever animated show to air during primetime.","There is a company that sells mirrors that make people look 10 pounds thinner. Overall, the mirrors have contributed to 54% of total sales for retailers that use it.","When Space Invaders was created, Tomohiro Nishikado left in the lag caused by more invaders on the screen in order to create greater difficulty in the games."," Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread.","Researches have found that flossing your teeth can help your memory. Flossing prevents gum disease, which prevents stiff blood vessels, which cause memory issues.","For nearly 60 years, Texas didn’t have an official state flag between 1879 & 1933. During that time, the Lone Star flag was the active, but the unofficial flag.","Red Solo cups are a common souvenir to bring back from the United States. The novelty comes from the cups being used in many party scenes in movies.","Scientists discovered sharks that are living in an active underwater volcano. Divers cannot investigate because they would get burns from the acidity and heat.","In 1994, the company that had a patent on GIFs tried to charge a fee for using GIFS. The PNG was invented as an alternative, and the company backed down."],k={index:0,list:[],currentQuote:[],container:document.querySelector(".js-quote"),init:function(e){this.container.classList.remove("txt-center","txt-xl"),1!==e?this.container.classList.add("txt-center","txt-xl"):(function(e){for(var t,n=e.length;0!=n;){t=Math.floor(Math.random()*n),n--;var a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}}(C),this.list=C),this.update(e)},update:function(e){var t=this;if(1===e){var n=this.index,a=this.list[n].split(" ");return this.container.textContent=null,this.currentQuote=a,this.index=n<k.list.length-1?n+1:0,void a.forEach((function(e){return t.create(e)}))}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?"0123456789":"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return e[Math.floor(Math.random()*e.length)]}(0!==e);this.currentQuote=o,this.container.textContent=null,this.create(o)},create:function(e){var t=document.createElement("span");t.innerText=e,t.dataset.text=e,this.container.appendChild(t),this.container.appendChild(document.createTextNode(" "))}},x=k,L={totalCorrected:0,totalIncorrected:0,corrected:0,incorrected:0,accuracy:0,typedChars:0,list:[],accuracyContainer:document.querySelector(".js-accuracy"),correctedContainer:document.querySelector(".js-corrected-count"),incorrectedContainer:document.querySelector(".js-incorrected-count"),init:function(){this.accuracyContainer.innerText=0,this.correctedContainer.innerText=0,this.incorrectedContainer.innerText=0},getStats:function(){var e=this.totalCorrected+this.corrected,t=this.totalIncorrected+this.incorrected,n=this.typedChars-(this.totalIncorrected+this.incorrected);return{totalCorrected:e,totalIncorrected:t,accuracy:Math.round(n/this.typedChars*100)}},updateStats:function(){var e=this.getStats(),t=e.totalCorrected,n=e.totalIncorrected,a=e.accuracy;this.accuracyContainer.innerText="".concat(a,"%"),this.correctedContainer.innerText=t,this.incorrectedContainer.innerText=n},reset:function(){this.totalCorrected=0,this.totalIncorrected=0,this.corrected=0,this.incorrected=0,this.typedChars=0,this.accuracyCounter=0}},B=[{name:"a Snail",emoji:"🐌",requiredWords:0},{name:"a Turtle",emoji:"🐢",requiredWords:10},{name:"a Chicken",emoji:"🐓",requiredWords:20},{name:"an Elephant",emoji:"🐘",requiredWords:30},{name:"a Kangaroo",emoji:"🦘",requiredWords:40},{name:"a Tiger",emoji:"🐅",requiredWords:50},{name:"a Zebra",emoji:"🦓",requiredWords:60},{name:"a Cheetah",emoji:"🐆",requiredWords:70}];window.addEventListener("beforeunload",(function(e){if(null!==T.handler)return e.returnValue="o/","o/"})),window.addEventListener("load",(function(){return v.loadTheme()}));var E={testType:null,typedWordList:[],input:document.querySelector(".js-test-input"),backButton:document.querySelector(".js-back-btn"),startButtons:document.querySelectorAll(".js-start-btn"),startTest:function(e){v.toggle("test"),this.testType=e,this.input.disabled=!1,this.input.focus(),T.init(),L.init(),x.init(e)},stopTest:function(e){!0===e.showResults&&this.showFinalResult(),T.stop(),L.reset(),this.typedWordList=[],this.input.value="",this.input.disabled=e.disableInput,this.input.blur(),!0===e.restartTest&&this.startTest(this.testType)},countDown:function(){--T.counter<0&&E.stopTest({showResults:!0,disableInput:!0}),T.container.innerText=T.counter},showFinalResult:function(){var e=this,t=L.getStats(),n=t.totalCorrected,a=t.totalIncorrected,o=t.accuracy,r=function(e,t){var n,a=1!==t?Math.floor(e/2):e;for(n=B.length-1;n>=0&&!(a>=B[n].requiredWords);n--);return{idName:B[n].name,idEmoji:B[n].emoji}}(n,E.testType),i=r.idName,s=r.idEmoji,c=n||a,l=E.testType,d=[["Letters Per Minute","letters"],["Words Per Minute","words"],["Numbers Per Minute","numbers"]],h="",u="Nothing to show",m="<p>You did not type anything...</p>";if(c){var f=n+a,p=d[l][1].slice(0,-1),y="".concat(a," ").concat(a>1?"typos":"typo");n?(h=s,u="You sir are ".concat(i),m="\n          <p>You typed total of ".concat(f," ").concat(d[l][1]," with ").concat(o,"% accuracy and made ").concat(a?y:"no typos",'.</p>\n          <div class="p-1">\n            <p class="txt-md">Your ').concat(d[l][0],' is</p>\n            <p class="txt-lg txt-primary mt-1">').concat(n,"</p>\n          </div>\n        ")):(h="👎",u="That's bad...",m="\n          <p>You did not even correct a single ".concat(p," but made ").concat(y," instead.</p>\n        "))}var b='\n      <div class="txt-center txt-lg">\n        <p class="emoji-xl">'.concat(h,"</p>\n        <h3>").concat(u,"</h3>\n      </div>\n    ");w.show({title:b,contents:'<div class="txt-center p-1">'.concat(m,"</div>"),confirmButtonText:"Test Again",showCancelButton:!0,onConfirm:function(){e.stopTest({restartTest:!0})},onCancel:function(){return v.toggle("home")}})}};v.theme.toggler.addEventListener("click",(function(){return v.applyTheme(!0)})),E.startButtons.forEach((function(e,t){e.addEventListener("click",(function(){E.startTest(t)}))})),E.input.addEventListener("focus",(function(){setTimeout((function(){window.scrollTo(0,0),document.body.scrollTop=0}),300)})),E.input.addEventListener("input",(function(e){var t=this,n=t.value;if(/\s+$/.test(n)&&n.length<=1)return t.value=null,e.preventDefault();t.value=n.replace(/\s+$/," ");var a=t.value.split(" "),o=x.container.querySelectorAll("span");T.start(E.countDown),L.corrected=0,L.incorrected=0,L.typedChars++,1!==E.testType&&(E.typedWordList=a);var r=""===a[1];if(r&&(1===E.testType&&E.typedWordList.push(a[0]),t.value=null),o.forEach((function(e,t){var n=E.typedWordList[t];null==n||""==n?e.classList.remove("txt-correct","txt-incorrect"):n===e.innerText?(e.classList.add("txt-correct"),e.classList.remove("txt-incorrect"),L.corrected++):(e.classList.add("txt-incorrect"),e.classList.remove("txt-correct"),L.incorrected++)})),L.updateStats(),r){var i=E.typedWordList.length;(1===E.testType?i:i-1)==x.currentQuote.length&&(L.totalCorrected+=L.corrected,L.totalIncorrected+=L.incorrected,E.typedWordList=[],L.corrected=0,L.incorrected=0,x.update(E.testType))}})),E.input.addEventListener("paste",(function(e){return e.preventDefault()})),E.backButton.addEventListener("click",(function(e){return e.preventDefault(),null===T.handler?(E.testType=null,E.stopTest({disableInput:!0}),v.toggle("home")):(w.show({title:"<h3 class='txt-center txt-lg'>Stop Test?</h3>",contents:"<p class='txt-center txt-md p-1'>The test is in progress, are you sure you want to stop?</p>",confirmButtonText:"Yes",showCancelButton:!0,cancelButtonText:"No",onConfirm:function(){E.stopTest({disableInput:!0}),v.toggle("home")},onCancel:function(){E.input.focus(),T.resume(E.countDown)}}),T.pause())})),w.construct()}()}();