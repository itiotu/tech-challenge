import { Context, Next } from 'koa';
import FailedValidationError from './FailedValidationError';
import BigNumber from 'bignumber.js';

export async function amountMiddleware(ctx: Context, next: Next): Promise<void> {
    const amount: string = ctx.params.amount as string;

    if (!amount) {
        throw new FailedValidationError('Amount is not identified in the request params.');
    }

    if (new BigNumber(amount).isLessThanOrEqualTo(0)) {
        throw new FailedValidationError('Amount needs to be a positive number greater then zero.');
    }

    await next();
}
