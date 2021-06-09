var hotel = {
	nome:'Hotel Silvania',
	quartos: 40,
	reservados: 25,
	academia: true,
	checaDisponibilidade: function (){
	return this.quartos - this.reservados; 
  }
};


var nomeHotel = document.getElementById('nomehotel');
nomeHotel.textContent = hotel.nome;

var quartosNoHotel = document.getElementById('quartosnohotel');
quartosNoHotel.textContent = hotel.quartos;

var quartosReservados = document.getElementById('quartosreservados');
quartosReservados.textContent = hotel.reservados; 
