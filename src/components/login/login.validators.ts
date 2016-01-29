import { Control } from "angular2/common";

interface Validation {
    [key: string]: boolean;
}

export class LoginValidator {

    static startsWithNumber(control: Control): Validation {
        if (control.value !== "" && !isNaN(control.value.charAt(0))) {
            return {"startsWithNumber": true};
        }
        return null;
    }

    static usernameTaken(control: Control): Promise<Validation> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "Test") {
                    resolve({"usernameTaken": true});
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
}
