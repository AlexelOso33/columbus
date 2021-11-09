$(document).ready(function(){

    $(document).on('click', '.add-p', function(){
        let valor = parseFloat($(this).parent('td').attr('data-td'));
        let cant = parseInt($(this).closest('tr').find('span.cant-prod').html());
        let total = parseFloat($('#total').html());
        total += valor;
        cant += 1;
        $(this).closest('tr').find('span.cant-prod').html(cant);
        $('#total').html(total.toFixed(1));
    })

    $(document).on('click', '.remove-p', function(){
        let valor = parseFloat($(this).parent('td').attr('data-td'));
        let cant = parseInt($(this).closest('tr').find('span.cant-prod').html());
        let total = parseFloat($('#total').html());
        if(cant < 2){
            $(this).closest('tr').find('span.cant-prod').html('1');
        } else {
            total -= valor;
            cant -= 1;
            $(this).closest('tr').find('span.cant-prod').html(cant);
            $('#total').html(total.toFixed(1));
        }
    })

    $(document).on('click', '.del-prod', function(){
        let valor = parseFloat($(this).closest('tr').find('td').attr('data-td'));
        let cant = parseInt($(this).closest('tr').find('span.cant-prod').html());
        let total = parseFloat($('#total').html());
        $(this).closest('tr').remove();
        total = total - (valor*cant);
        $('#total').html(total.toFixed(1));
    })

    $('.cont-products button').on('click', function(){
        let info = $(this).attr('data-id');
        info = info.split('/');
        let producto = info[0];
        let price = parseFloat(info[1]);
        var est = false;
        let total = parseFloat($('#total').html());

        /* Comprueba si llega a 6 */
        if($('tbody').find('tr').length < 6){
            if($('tbody').find('tr').length > 0){

                /* Comprobando que no esté insertado */
                for(var i = 0; i < $('tbody').find('tr').length; i++){
                    var comp = $('tbody').find('tr').eq(i).children('td').eq(1).html();
                    if(comp == producto){
                        alert("El producto ya se encuentra ingresado.");
                        est = false;
                        break;
                    } else {
                        est = true;
                    }
                }

            } else {
                est = true;
            }

            /* Inserta producto */
            if(est === true){
                let str = '<tr><td scope="row" class="td-add" data-td="'+price+'"><span class="cant-prod">1</span><button class="add-p"><i class="fas fa-plus-circle"></i></button><button class="remove-p"><i class="fas fa-minus-circle"></i></button></span></td><td>'+producto+'</td><td class="bold">'+price+'</td><td class="bold">'+price+'</td><td><button class="del-prod"><i class="fas fa-trash-alt"></i></button></td></tr>';
                $('tbody').append(str);
                total += price;
                $('#total').html(total.toFixed(1));
            }
        } else {
            alert('Alcanzaste los 6 productos de tu compra.')
        }


    })

    $('.button-add').on('click', function(){
        $('.button-add').removeClass('selected-paym');
        $(this).addClass('selected-paym');
    })

    $('.button-pay').on('click', function(){
        $('.button-pay').removeClass('selected-paym');
        $(this).addClass('selected-paym');
    })

    $('#paynow').on('click', function(){
        if($('.button-pay').hasClass('selected-paym')){
            alert("Está a punto de finalizar la compra.");
        } else {
            alert("Debe seleccionar un medio de pago para continuar.");
        }
        
    })

})