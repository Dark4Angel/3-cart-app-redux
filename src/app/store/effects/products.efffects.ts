import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../../services/product.service";
import { catchError, EMPTY, exhaustMap, map} from "rxjs";
import { findAll, load } from "../products.action";


@Injectable()
export class ProductsEffects {

    loadProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(load),
            exhaustMap(() => this.service.findAll())
        ).pipe(
            map( products => ( findAll({ products}))),
            catchError(() =>EMPTY)
        ) 
    );

    constructor(
        private actions$: Actions,
        private service: ProductService) {
            
        }


    }
    
    


