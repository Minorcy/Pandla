<template>
	<view class="l-barrage">
		<block v-for="(item,index) in items" :key="index">
				<text v-if="item.display" class="aon"
				  :style="{top: `${item.top}%`,color: item.color,animationDuration:` ${Number(item.time)}s`}"
				>
					{{item.text}}
				</text>
		</block>
	</view>
</template>

<script>
let cycle;

// 弹幕字体颜色
function getRandomColor() {
  let rgb = []
  let color = ["3EFE06","FFBEBE","FFF2A4","FFFFFF"]
  var n = Math.floor(Math.random() * color.length + 1)-1; 
  rgb = color[n]
  return '#' + rgb
}	

export default {
	name: 'l-barrage',
	props: {
		minTime: {
			type: Number,
			default: 6
		},
		maxTime: {
			type: Number,
			default: 9
		},
		minTop: {
			type: Number,
			default: 20
		},
		maxTop: {
			type: Number,
			default: 60
		}
	},
	data() {
		return {
			items: [],
		}
	},
	methods: {
		add(text = '',time = Math.ceil(Math.floor(Math.random()*(this.maxTime-this.minTime+1)+this.minTime))) {
			this.items.push({
				text,
				time,
				top: Math.ceil(Math.random()*(this.maxTop-this.minTop+1)+this.minTop),
				color: getRandomColor(),
				display: 1,
			});
		},
		start(items = []) {
			this.items = [];
			cycle && (clearInterval(cycle));
			let i = 0,len = items.length;
			
			cycle = setInterval(()=> {
				let time = 5;
				
					time = Math.ceil(Math.floor(Math.random()*(this.maxTime-this.minTime+1)+this.minTime));
				
				
				if (i < len) {
					this.add(items[i],time);
					i++;
				}
				else {
					clearInterval(cycle);
					setTimeout(()=>{
						this.$emit("end",{});
					},time * 1000)
				}
			}, 500)
		}
	}
}	
	
</script>

<style scoped>
.aon{
	font-size: 16px;
position: fixed;
white-space:nowrap;

animation: mymove 5s linear forwards;
animation-timing-function: linear;
-webkit-animation-timing-function: linear;
animation-fill-mode: forwards;
}
.l-barrage{
  z-index: 3;
  width: 100%;
  position: fixed;
}

@keyframes mymove
{
from{left: 100%;}
  to{left: -200%;}
}

@-moz-keyframes mymove /* Firefox */
{
from{left: 100%;}
  to{left: -200%;}
}

@-webkit-keyframes mymove /* Safari and Chrome */
{
from{left: 100%;}
  to{left: -200%;}
}

@-o-keyframes mymove /* Opera */
{
from{left: 100%;}
  to{left: -200%;}
}
</style>
