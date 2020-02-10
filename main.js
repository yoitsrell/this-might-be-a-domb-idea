const paragraph = document.querySelector('#para');

paragraph.style.color = 'lightblue'
paragraph.style.font = '5 em'
paragraph.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const half = document.getElementById('#para').selectedIndex = "13";
half.style.opacity = '50%'

const third = document.getElementById('#para').selectedIndex = "3";
third.innerText = 'I say, "Hi!"'

const image1 = document.querySelector("#image");
document.getElementsById("#image").src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'

const newLi = document.createElement('li');
newLi.innerText = "Won't be fooled again"

const list = document.querySelector('ul');
list.appendChild(newLi)