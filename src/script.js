
document.getElementById('creer').addEventListener('click', function() {
    const useFirstLetter = document.getElementById('first-lettre').checked;
	const useSpecial = document.getElementById('special').checked;
	const noDuplicate = document.getElementById('duplicate').checked;
	const noSequence = document.getElementById('sequence').checked;
	const autoStart = document.getElementById('auto-start').checked;
	const quantity = document.getElementById('quantité').checked;
	const tailleCara = document.getElementById('taille').value;

	let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	if (useSpecial) {
		characters += '!@#$%^&*()_+[]{}|;:,.<>?';
    }



	let password = '';
	while (password.length < tailleCara) {
		let char = characters[Math.floor(Math.random() * characters.length)];
	if (noDuplicate && password.includes(char)) continue;
        if (noSequence && password.length > 0 && char.charCodeAt(0) === password.charCodeAt(password.length - 1) + 1) continue;
	password += char;
    }

	if (useFirstLetter) {
		const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const randomLetter = letters[Math.floor(Math.random() * letters.length)];
		password = randomLetter + password.slice(1);
    }

	document.getElementById('genererMdp').value = password;
});

document.addEventListener('DOMContentLoaded', function () {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');

	// Restaurer les préférences à partir du stockage local
	checkboxes.forEach(checkbox => {
		const savedState = localStorage.getItem(checkbox.id);
		if (savedState !== null) {
			checkbox.checked = savedState === 'true';
		}
	});

	// Enregistrer les préférences dans le stockage local
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', function () {
			localStorage.setItem(checkbox.id, checkbox.checked);
		});
	});
});

document.getElementById('dossier').addEventListener('click', function () {
	const password = document.getElementById('genererMdp').value;
	const blob = new Blob([password], { type: 'text/plain' });
	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = 'mot_de_passe.txt';
	link.click();
});


document.querySelector('.material-symbols-rounded').addEventListener('click', function () {
	const password = document.getElementById('genererMdp').value;
	navigator.clipboard.writeText(password).then(function () {
		alert('Mot de passe copié dans le presse-papiers');
	}, function (err) {
		console.error('Erreur lors de la copie du mot de passe : ', err);
	});
});