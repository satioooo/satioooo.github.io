function uploadContent(json){
    $('#introContainer').html(json.intro);
    $('#aboutContainer').html(json.about);
    $('#contactsContainer').html(json.contacts);
}
$.get('data/content.json', function(data){uploadContent(data);});