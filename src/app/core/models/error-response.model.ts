export class ErrorResponse {
    errorCode: string;
    errorDescription: string;

    constructor(errorCode: string, errorDescription: string) {
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
    }

}

export function isErrorResponse(response: any): boolean {
    return response.errorCode !== undefined;
}
