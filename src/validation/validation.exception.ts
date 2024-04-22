import { ValidationError } from '@nestjs/class-validator';
import { BadRequestException } from '@nestjs/common';

export class ValidationException extends BadRequestException {
	#errors: ValidationError[];
	#errorCode: string;
	constructor(errors?: ValidationError[]) {
		super();
		this.#errors = errors;
	}

	getErrors() {
		return this.#errors;
	}

	getErrorCode() {
		return this.#errorCode
	}
}
