class GetLocationButtonElement extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.form.latitude.value = pos.coords.latitude;
          this.form.longitude.value = pos.coords.longitude;
          this.form.requestSubmit();
        },
        (err) => {
          window.alert(`${err.code} ${err.message}`);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    });
  }
}

customElements.define('x-location', GetLocationButtonElement, {
  extends: 'button',
});
