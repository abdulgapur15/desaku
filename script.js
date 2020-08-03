



/*jquery, tolong carikan saya class page-scroll, kalau ketemu, ketika dia di klik, tolong jalankan fungsi*/
$('.page-scroll').on('click', function(e){
		
		/*jquery, tolong ambil nama attribut tujuan dari tombol yang saya klik*/
		var tujuan = $(this).attr('href');
		//console.log(tujuan);
		/*jquery, tolong ambil semua isi dari elemen tujuan yang dipilih */
		var elementujuan = $(tujuan);
		
		console.log($('body').scrollTop());
		//console.log(elementujuan.offset().top);
		
	//	e.preventDefault();

});
