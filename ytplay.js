<script type="text/rocketscript">
function playAudio(id,ytid){
	remPlayer();
	var html = '<audio src="https://www.youtube.com/watch?v='+ytid+'" type="video/youtube" controls autoplay style="width:98%">Browser ente terlalu jadul cok.</audio>'
	$('#player-'+id).html(html);
	renderPlayer();
}

function renderPlayer(){
	$('audio,video').mediaelementplayer();
}

function remPlayer(){
	$('.divPlayer').html('');
}
</script>
