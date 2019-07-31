export default {
	throttle(func, wait){
	  let last = 0;
	  return () => {
	    const current_time = +new Date();
	    if (current_time - last > wait) {
	      func.apply(this, arguments);
	      last = +new Date();
	    }
	  }
	},
	
	debounce(method, delay) {
		let timeout = null;
		return function() {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				method.apply(this, arguments);
			}, delay);
		};
	}
	
}
