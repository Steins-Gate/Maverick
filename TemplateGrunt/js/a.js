_.each(result, (val, key) => {
	try {
		result[key] = JSON.parse(val)
	} catch (e) {
		//	console.log(e)
	}
})