
const container = document.getElementById('productContainer')
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const inventoryChar = document.getElementById('inventoryChart');

async function fetchProduct() {
    try {
        const response = await fetch(`http://localhost:3001/products`);
        if (!response.ok) {
            throw new Error(`problem in fetching product list`)
        }
        const product = await response.json()
        return product;
    } catch (err) {
        const message = err?.message;
        console.error(message)
        error.innerText = message;
    }


}

async function getCurrentStoack(productId) {
    const response = await fetch(`http://localhost:3001/products/${productId}`);
    if (!response.ok) {
        throw new Error(`problem in fetching product with product`)
    }
    const product = await response.json();

    return product?.stock;
}

async function restockItem(productId) {
    try {
        const currentStock = await getCurrentStoack(productId)
        const responsse = await fetch(`http://localhost:3001/products/${productId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ stock: currentStock + 5 })
        })
        const data = await responsse.json();
        dispalyProduct()

    } catch (error) {

    }

}

function addRestockBtnHandler() {
    const buttons = document.querySelectorAll('.restock-btn')
    console.log('buttons', buttons)
    buttons.forEach((button) => {
        button.addEventListener('click', async () => {
            const id = button.dataset.id;
            console.log(id);
            await restockItem(id)

        })
    })
}

async function dispalyProduct() {
    try {
        // fetch the product data
        const product = await fetchProduct()
        // console.log(product);
        container.innerHTML = "";
        product.forEach(element => {
            console.log('element', element)
            // iteratte through product
            container.innerHTML += `
            <div class='bg-white p-4 rounded shadow'>
                <h3 class='text-lg font-semibold mb-2'>${element.name}</h3>
                <p><strong>Category:</strong> ${element.category}</p>
                <p><strong>Stock:</strong> <span id="stock-${element.id}">${element.stock} </span> </p>
                <p><strong>Sold:</strong> ${element.sold}</p>
                <p><strong>Price:</strong> ${element.price}</p>
                <p class='text-sm text-gray-600 mt-2 '>Last Update: ${element.lastUpdated}</p>
                <button data-id=${element.id} class="restock-btn mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Restock</button>
            </div>
            `;
        });



        // render each product info

        addRestockBtnHandler()
        renderChart(product)
    } catch (err) {

    }
}

function renderChart(product) {
    const ctx = inventoryChar.getContext("2d")

    const labels = product.map((p) => p.name)
    const stockData = product.map((p) => p.stock);
    const soldData = product.map((p) => p.sold)

    new Chart(ctx, {
        type: "bar",
        data: {
            labels,
            datasets: [
                {
                    label: "Stock",
                    data: stockData,
                    backgroundColor: "#3B82F6",
                },
                {
                    label: "Sold",
                    data: soldData,
                    backgroundColor: "#10B981",
                }
            ]
        },
        options: {
            responsie: true,
            plugins: {
                legend: {
                    position: "top"
                }
            }
        }
    })

}
dispalyProduct()
