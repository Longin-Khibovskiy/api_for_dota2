function renderResults(rates) {
	console.log(rates)
	const div = document.getElementById('result')
	div.innerHTML = `
    <table>
      <thead>
        <td>Name</td>
        <td>ID</td>
        <td>Kills</td>
        <td>Deaths</td>
        <td>Assists</td>
        <td>Общая ценность</td>
        <td>К/Д</td>
      <thead/>

      <tbody>

      </tbody>
    </table>
  `
	const tbody = div.querySelector('tbody')
	rates.players.forEach(item => {
		if (item.personaname != null) {
			tbody.insertAdjacentHTML(
				'beforeend',
				`
        <tr>
        <td>${item.personaname}</td>
        <td>${item.account_id}</td>
        <td>${item.kills}</td>
        <td>${item.deaths}</td>
        <td>${item.assists}</td>
        <td>${item.net_worth}</td>
        <td>${item.kda}</td>
      </tr>
      `
			)
		}
	})
}

function LoadData(value) {
	const xhr = new XMLHttpRequest()
	xhr.open('GET', `https://api.opendota.com/api/matches/${value}`, true)
	xhr.send(null)
	xhr.onload = () => {
		const rates = JSON.parse(xhr.responseText)
		renderResults(rates)
	}
}

function initApp() {
	const btn = document.getElementById('btn')
	btn.addEventListener('click', function () {
		const value = document.getElementById('lobby').value
		LoadData(value)
	})
}
initApp()

function Result() {
	const btn = document.getElementById('btn')
	const container = document.getElementById('container')
	btn.addEventListener('click', function () {
		const value = document.getElementById('input').value
		container.insertAdjacentHTML('beforeend', `${value}`)
	})
}
