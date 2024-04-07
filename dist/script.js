'use strict';

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get form data
  let formData = new FormData(e.target);

  fetch('https://eodh6njvzgfl22j.m.pipedream.net', {
    method: 'POST',
    body: formData,
  })
    .then(res => {
      if (res.ok) {
        document.getElementById('myForm').reset(); // Resest form

        // Alternative to form reset - Redirect page
        // window.location.href = 'success.html'; // Payload kept disapperaing after redirect

        return res.json();
      } else {
        throw new Error('Network is not okay');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
