$(document).ready(function () {

    var content = document.getElementById('pais');

    $.ajax({
        type: "GET",
        url: "BACKEND/names.json",
        dataType: "json",
        success: function (data) {

            $.each(data, function (i, item) {
                $('#pais').append("<option value=" + item + ">" + item + "</option>");
            })

        }
    })
    
})

$('#save').click(function(){

    if($('#name').val() === null || $('#pais').val() === '' ||  $('#phone').val() === 0 || $('#email').val() === ''){
        $('input, select').addClass('active');
        $('.msg').html("<div class='alert'><h4 style='color:red;'>Campos obligatorios*</h4></div>").hide(5000);
    }else{
        saveContact();
    }
})

function saveContact(){
    var data = $('#formcontact').serialize();

    $.ajax({

        type: "POST",
        url: "BACKEND/controllers/save.php",
        data: data,
        success:function(msg){
    
            $('.msg').html("<div class='alert'><h4>"+msg+"</h4></div>").hide(5000);
            $('#name').val('');
            $('#pais').val('');
            $('#phone').val('');
            $('#email').val('');
            window.location.reload();
    
        }
    
    })
    
    false;
}