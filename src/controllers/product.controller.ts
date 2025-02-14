import * as angular from 'angular';


export class ProductController {
  static $inject = ['$scope', '$location', '$routeParams'];
  message: string;
  catalogs: Array<any>;
  selectedProduct: any;


  constructor(private $scope: IDataScope, private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService) {
    this.message = 'Welcome to TypeScript!';
    this.catalogs = [
        {
          "id":1,
          "productName": "Basmati Biryani Rice",
          "description": "",
          "price":499.00,
          "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1qimQoBr7uKDwhoE2YW4OvJgtL2Z0LObBw&s"
        },
        {
          "id":2,
          "productName": "Sprite",
          "description": "Coldring",
          "price": 85.00,
          "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAnnwihAEvO8avpuTzZyCcwdlgOINBD_Nyg&s"
        },
        {
          "id":3,
          "productName": "Gemini Oil",
          "description": "Sunflower Oil.",
          "price": 129.30,
          "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsGIjlFQazYHCURcyFHkRx3XAdhssO6IVvQ&s"
        },
        {
          "id":4,
          "productName": "Pohe",
          "description": "White Pohe",
          "price": 53.99,
          "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxu_dBGp5QcptnZAmE2LTyHDiLedFAjwSwlA&s"
        },
        {
          "id":5,
          "productName": "Fortune Besan",
          "description": "Basan",
          "price": 89.99,
          "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EIhwHKHZJA7AXwgSM1Za34Ctnqbt7OOfyA&s"
        },
        {
          "id":6,
          "productName": "Fortune Atta",
          "description": "Atta.",
          "price":210.11,
          "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzPNn4suCk0Xxh1kXDr-OjOFD52eEMxnaXw&s"
        },
        {
          "id":7,
          "productName": "Tata Salt",
          "description": "Salt.",
          "price": 34.99,
          "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rEZO-WHtqCwaANRBf18ZkZOElV-0TaJcng&s"
        }
       
      ];

    const productId = $routeParams['productId'];
    if (productId) {
      this.selectedProduct = this.getProductById(Number(productId));
    } else {
      this.selectedProduct = null;
    }
    
    $scope['data'] = this;
  }

  public addToCart(product: any): void {
    console.log('Product added to cart:', product);
    // You can add logic to add this product to the cart here
    let temp=[];

    temp =JSON.parse(sessionStorage.getItem('cart') || '[]');
    if (temp != null) {
      temp.push(product);        
    }else{
      temp = [];
      temp.push(product);
    }

    // temp.push(product);
    sessionStorage.setItem('cart', JSON.stringify(temp));
    this.$location.path('/cart'); // Redirect to catalog page
  }

   // Function to navigate to the details page for a product
   public viewProductDetails(productId: number): void {
    this.$location.path(`/product/${productId}`);
  }

  // Function to get a product by ID
  private getProductById(productId: number): any {
    for (let i = 0; i < this.catalogs.length; i++) {
      if (this.catalogs[i].id === productId) {
        return this.catalogs[i]; // Return the product if ID matches
      }
    }
    console.error("Product not found");
    return null; // Return null if product is not found
  }
  
  
}


//angular.module('myApp').controller('MyController', MyController);
