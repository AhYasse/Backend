let form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        weather();
        form.reset();
    });
    


let weather = async () => {
   try {
        const address = document.getElementById('address').value;
        let res = await fetch('http://localhost:3000/weather?address=' + address);
        let data = await res.json();
        console.log(data);
        if (data.error) {
            alert(data.error);
            document.getElementById('error').innerText = data.error;
            document.getElementById('location').innerText = '';
            document.getElementById('forecast').innerText = '';
        } else {
            document.getElementById('location').innerText = data.address;
            document.getElementById('forecast').innerText = data.forecast;
            document.getElementById('error').innerText = '';
        }   
   } catch (error) {
       console.log('There has been a problem with your fetch operation:', error);
   }
}