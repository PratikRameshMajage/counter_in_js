function addcard(){
    var cards = document.querySelector("#cards");
    var button = document.querySelector("#add-card")
    var clutter = "";
    button.addEventListener("click", function(){
        clutter += `<div id="card">
                        <div id="overflow">
                            <div id="info">
                                <div id="product-name">
                                    <h1>Productive</h1>
                                </div>
                                <div id="sub-info">
                                    <i class="ri-heart-3-fill"></i>
                                    <h4>$499</h4>
                                </div>
                            </div>
                        </div>
                    </div>`;
        console.log("clicked");
        cards.innerHTML = clutter;
    })
}
addcard()

