$(function() {
    Snipcart.subscribe('order.completed', function(data) {
        var orderId = data.invoiceNumber,
            amount = data.total,
            currency = data.currency;

        $('body').append('<noscript id="yotpoTrackingScript"></noscript>');

        $('#yotpoTrackingScript').append('<img src="//api.yotpo.com/conversion_tracking.gif?app_key=' + yotpoId + '&order_id=' + orderId + '&order_amount=' + amount + '&order_currency=' + currency + '" width="1" height="1" />');

        window.yotpoTrackConversionData = {orderId: orderId, orderAmount: amount, orderCurrency: currency};

        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute('src', '//staticw2.yotpo.com/' + yotpoId + '/widget.js')
        
        document.body.appendChild(script);
    });


    function sendOrderToYotpo(orderDetails) {

        var myOrderData = {
            validate_data: true,
            platform: 'general',
            utoken: '', //errr
            email: orderDetails.email,
            customer_name: orderDetails.shippingAddress.name,
            order_id: orderDetails.invoiceNumber,
            products: {}
        }

        var itemLength = orderDetails.items.length;
        for (var i = 0; i < itemLength; i++ ) {
            var item = orderDetails.items[i];

            var myProduct = {
                url: item.url,
                name: item.name,
                image: item.image,
                price: item.price
            };

            myOrderData.products[i] = myProduct;
        }

        $.postJSON('https://api.yotpo.com/apps/' + yotpoId + '/purchases', myOrderData, function(response) {
            console.log('Response', response);
        }, function(error) {
            console.log('Error', error);
        })

    }
    
});