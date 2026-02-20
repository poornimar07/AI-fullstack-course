
document.querySelector("#button-1").addEventListener("click", getCustomer);
document.querySelector("#button-2").addEventListener("click", getCustomers);


function getCustomer(){

    // Create a xhr

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "customer.json", true);

    // Load
    xhr.onload = function(){

        if(this.status === 200){

            const customer = JSON.parse(this.responseText);

            console.log(customer);
            

            // const output = `
            //     <ul>
            //         <li>ID : ${customer.id}</li>
            //         <li>Name : ${customer.name}</li>
            //         <li>Company : ${customer.company}</li>
            //         <li>Phone : ${customer.phone}</li>
            //     </ul>
            // `;

            document.querySelector("#customer").innerHTML = output;

        }

    }

    // Send

    xhr.send();


}


function getCustomers(){

    // Create a xhr

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "customers.json", true);

    // Load
    xhr.onload = function(){

        let output = "";

        if(this.status === 200){

            const customers = JSON.parse(this.responseText);

            customers.forEach(function(customer){
                
                output += `
                 <ul>
                    <li>ID : ${customer.id}</li>
                    <li>Name : ${customer.name}</li>
                    <li>Company : ${customer.company}</li>
                    <li>Phone : ${customer.phone}</li>
                </ul>
                `

            });

            document.querySelector("#customer").innerHTML = output;

        }

    }

    // Send

    xhr.send();


}