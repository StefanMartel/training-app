export class ErrorResponse {
    errorCode: number;
    errorDescription: string;

    constructor(errorCode: number, errorDescription: string) {
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
    }

}

export function isErrorResponse(response: any): boolean {
    return response.errorCode !== undefined;
}
