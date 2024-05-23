// import React, { Component } from 'react'

// class Products extends Component {
//     state = {
//         productData: [],
       
//       };

//       componentDidMount() {
//         this.getProductData();
//       }

//       getProductData = async () =>{

//         let data= await fetch("https://fakestoreapi.com/products");

//         let res= await data.json();
//         this.setState({ productData: res.data });
//         console.log(res)
//       }

//   render() {
//     return (
//       <div className="container text-center">
//         <h1>inside products</h1>
//        <div className='row'>
//         {this.state.productData.map((product)=>(


//            <div className="col-md-6 border my-1 p-3">
//            <div className="row">
//              <div className="col-md-3">
//                <img src={product.image} alt={product.title} />
//              </div>
//              {/* <div className="col-md-9">
//                <h5>{user.id}</h5>
//                <p>
//                  {user.title} {user.firstName} {user.lastName}
//                </p>
//              </div> */}

             
//            </div>
//          </div>


// ))}
//        </div>
//       </div>
//     )
//   }
// }


// export default Products;






import React, { Component } from 'react';

class Products extends Component {
  state = {
    productData: [],
  };

  componentDidMount() {
    this.getProductData();
  }

  getProductData = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    let res = await data.json();
    this.setState({ productData: res });
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Inside Products</h1>
        <div className='row'>
          {this.state.productData.map((product) => (
            <div key={product.id} className="col-md-6 border border-solid my-1 p-3">
              <div className="row">
                <div className="col-md-3">
                  <img src={product.image} alt={product.title} className="img-fluid h-100 w-100 " />
                </div>
                <div className="col-md-9">
                  <h5>{product.title}</h5>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
