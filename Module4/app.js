/**
 * Created by jacka on 6/8/2016.
 */
function placeAnOrder(orderNumber) {
    console.log("Customer order " + orderNumber);
    cookAndDeliverFood(function () {
        console.log("Deliever food on order ", orderNumber);
    });

};

function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}

/* simulation */
for (i = 0; i < 5; i++) {
    placeAnOrder(i);
}
