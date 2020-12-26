import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/_core/models/product/product.model';
import { ProductApiService } from 'src/app/_core/services/product/product-api.service';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.sass']
})
export class CreateProductModalComponent implements OnInit {
  errorMessage = {
    'name': [
      { type: 'required', message: 'El correo es requerido' },
    ],
    'sku': [
      { type: 'required', message: 'El SKU es requerido' },
    ],
    'quantity': [
      { type: 'required', message: 'La cantidad es requerida' },
    ],
    'price': [
      { type: 'required', message: 'El precio es requerido' },
      
    ]
  }
  product = new Product();
  productForm: FormGroup;

  constructor( private _productApiService: ProductApiService, public formBuilder: FormBuilder) { 
    this.productForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      sku: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      quantity: ['', [
        Validators.required,
      ]],
      price: ['', [
        Validators.required
      ]],

    });
  }

  ngOnInit() {
  }

  createProduct() {
    this._productApiService.createProduct(this.productForm.value as Product)
    .subscribe(response => {
    }, error => {
    });
  }


  getErrorMessage(fild: string, error: string): boolean {
    return this.productForm.get(fild).hasError(error);
  }

  isValidFild(fild: string): boolean {
    return (this.productForm.get(fild).touched || this.productForm.get(fild).dirty)
    && !this.productForm.get(fild).valid
  }
}
