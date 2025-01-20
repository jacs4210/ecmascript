// Tratamiento antes de ES6
function newUser(name, age, country) {
	var name = name || 'Jairo';
	var age = age || 33;
	var country = country || 'Colombia';
	
	console.log(name, age, country);
}

// Para invocar con valores por defecto
newUser();
// Para invocar con valores suministrados
newUser('Angelica', 32, 'Corea del Sur');

// Default params
function newAdmin(name = 'Jairo', age = 33, country = 'Corea del Norte'){
  console.log(name, age, country);
}

// Para invocar con valores por defecto
newAdmin();
// Para invocar con valores suministrados
newAdmin('Angelica', 31, 'Mexico');