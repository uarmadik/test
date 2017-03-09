var path;

var loadFile = function(event) {
	path = URL.createObjectURL(event.target.files[0]);
}


function write_info() {

	var first_name = document.getElementById('first-name').value;

	var second_name = document.getElementById('second-name').value;

	var phone_number = document.getElementById('phone-number').value;

	var about = document.getElementById('about-info').value;

		document.getElementById('first_name').innerHTML = first_name;
		document.getElementById('second_name').innerHTML = second_name;
		document.getElementById('phone_number').innerHTML = phone_number;
		document.getElementById('about_info').innerHTML = about;

		document.getElementById('path-to-image').innerHTML = path;
		document.getElementById('image').src = path;

document.getElementById('checkbox-form-btn').checked = false;


}