var adding = document.getElementsByClassName("btn-success");
var removing = document.getElementsByClassName("btn-danger");
var increment = document.getElementsByClassName("add");
var decriment = document.getElementsByClassName("remove");

function removingLoop() {
    for (let i = 0; i < removing.length; i++) {
        var button = removing[i];
        button.addEventListener('click', function(event) {
            var buttonCliked = event.target;
            buttonCliked.parentElement.remove();
            toto();

        })
    }
}
removingLoop()

for (let i = 0; i < adding.length; i++) {
    var button = adding[i];
    button.addEventListener('click', function(event) {
        console.log('cl');
        document.getElementById('itemsContainer').innerHTML += `
        <div class="container4">
                <img class="card-img-top aded" src="https://cdn.shopify.com/s/files/1/1420/3982/products/Ankari_Floruss0063_1700x1100.png?v=1591387618" alt="Card image cap">
                <div id="description">
                    <p> price :
                        <div class="price"> 10 </div>
                    </p>
                </div>
                <a class="btn btn-primary add"> + </a>
                <p class="quantiter">1</p>
                <a class="btn btn-primary remove"> - </a>
                <a class="btn btn-danger" style="height: 50%; text-align: center;">remove</a>
            </div>
            `
        toto()
        removingLoop()
        var addCliked = event.target;
        var element = addCliked.parentElement.parentElement.parentElement.parentElement;
        var img = element.getElementsByClassName("card-img-top").src;

        console.log();

    })
}

function toto() {
    var prices = document.getElementsByClassName("price");
    var quantiters = document.getElementsByClassName("quantiter");
    var toprice = 0;
    for (let i = 0; i < prices.length; i++) {
        var price = parseFloat(prices[i].innerText);
        var quantiter = parseFloat(quantiters[i].innerText);
        toprice = toprice + (price * quantiter);
        console.log(toprice);
    }
    document.getElementById("toto").innerText = toprice + "  TND";
}