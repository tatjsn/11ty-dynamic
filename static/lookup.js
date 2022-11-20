const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

document.getElementById('proceed').addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const form = document.getElementById('location');
      form.latitude.value = pos.coords.latitude;
      form.longitude.value = pos.coords.longitude;
      form.now.value = Date.now();
      form.submit();
    },
    (err) => {
      const form = document.getElementById('error');
      form.code.value = err.code;
      form.message.value = err.message;
      form.submit();
    },
    options
  );
});
