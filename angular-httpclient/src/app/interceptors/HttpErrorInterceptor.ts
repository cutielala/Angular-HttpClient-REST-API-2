
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, tap } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
        tap(
            data => console.log(data)),
        catchError(
            (error:HttpErrorResponse)=>{
              if(error.error instanceof ErrorEvent){
                  console.error('An error occured:',error.error.message );
              }else{
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
          
                  console.error(
                      'Backend returned code$(error.status)', + 'body was: ${error.error}');
                  
              }  
              return throwError(
                  'something bad happened: please try again later.');
              })
    )
    }
}