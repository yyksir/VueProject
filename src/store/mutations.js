export default {
  changeCity (state, city) {
    localStorage.city = city
    state.city = city
  }
}
