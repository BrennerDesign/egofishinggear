$(function() {
    var yotpoId = 'N83yliN6EOoZygW1ADH2alJgXVII1JgZoM9nX5sq';
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

    
});