import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'linebreak' })
export class LinebreakPipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
}