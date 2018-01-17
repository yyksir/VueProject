export default{
	changeCityDelayFiveSeconds (context, city) {
    setTimeout(()=>{
       context.commit('changeCity', city)
     },5000)
   }
}