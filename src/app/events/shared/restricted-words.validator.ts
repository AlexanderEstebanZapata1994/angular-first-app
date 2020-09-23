import { FormControl } from "@angular/forms";

export function restrictedWords(words) {
    return (control: FormControl): {[key: string] : any} => {
        if(!words) return null;

        var invalidWords = words.filter((word : string) => control.value.includes(word) ?? word)

        return invalidWords.length > 0
        ? {'restrictedWords': invalidWords.join(', ')}
        : null
    }
}