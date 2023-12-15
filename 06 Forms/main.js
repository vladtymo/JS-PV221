// ---------------- get elements
const tBody = document.querySelector('#product-table tbody');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('#clearAll');

const form = document.forms.creationForm;

const modelIn = form.elements.model;
const pricelIn = form.elements.price;
const statuslCb = form.elements.status;

class Product {

    static count = 10;

    constructor(model, price, status) {
        this.model = model;
        this.price = price;
        this.status = status;
        this.id = Product.count++;
    }

    get statusName() {
        return this.status ? "In Stock" : "Out of Stock";
    }
}

addBtn.onclick = (event) => {

    event.preventDefault();

    // const product = {
    //     id: 100,
    //     model: modelIn.value,
    //     price: pricelIn.value,
    //     status: statuslCb.checked
    // };
    let product = new Product(modelIn.value, pricelIn.value, statuslCb.checked);

    addProductToTable(product);
};

clearBtn.onclick = () => {
    tBody.innerHTML = "";
    // tBody.clear();
};

function addProductToTable(item) {
    // ---------------- add element to table
    tBody.innerHTML += `<tr class="table-primary">
                            <th scope="row">${item.id}</th>
                            <td>${item.model}</td>
                            <td>${item.price}$</td>
                            <td>${item.statusName}</td>
                        </tr>`;
}
