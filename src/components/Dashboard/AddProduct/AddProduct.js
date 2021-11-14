import React, { useRef } from 'react';


const AddProduct = () => {
    const productNameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();

    const handleAddProduct = e => {
        const name = productNameRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const newProduct = { name, price , description, img};

        if (name.length == 0) {
          alert('Name field is requird.')
        }
        else if (price.length == 0) {
          alert('Price field is requird.')
        }
        else if (description.length == 0) {
          alert('Description field is requird.')
        }
        else if (img.length == 0) {
          alert('Image field is requird.')
        }else{
            fetch('https://hidden-beyond-97375.herokuapp.com/new-product', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added.')
                    e.target.reset();
                }
            })
        }

        
        e.preventDefault();
    }
    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="col-md-6 offset-md-3">
                    <h2>Add New Product</h2>
                    <form onSubmit={handleAddProduct}>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" ref={productNameRef} className="form-control" placeholder="Enter Product Name" />
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" ref={priceRef} className="form-control" placeholder="Product Price" />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" ref={descriptionRef} className="form-control" placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="text" ref={imgRef} className="form-control" placeholder="Image URL" />
                        </div>
                        <br/>
                        <input type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;