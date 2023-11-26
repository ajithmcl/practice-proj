import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value:any[],FilterString:string,PropName:string):any[] {
  const result:any=[]
    if(!value||FilterString===''||PropName===""){
      return value
    }

    value.forEach((a)=>{
      if(a[PropName].trim().toLowerCase().includes(FilterString.toLowerCase())){
        result.push(a)
      }
    })

return result

  }
}
