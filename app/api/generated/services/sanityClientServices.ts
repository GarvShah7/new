/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { SanityClient, SanityDocument, SanityDocumentStub } from '@sanity/client'

export type SanityClientServiceResponse<P> = Partial<P> & {
    clientError?: unknown
}

export class SanityClientService {
    public static async createContactRequest({
        doc,
        client,
    }: {
        doc: Record<string, unknown>
        client: SanityClient
    }): Promise<SanityClientServiceResponse<SanityDocument<Record<string, any>>>> {
        const document: SanityDocumentStub = {
            _type: 'contact_us',
            ...doc,
        }
        try {
            const res = await client.create(document)
            return res
        } catch (error) {
            return { clientError: error }
        }
    }
    public static async createEmailRequest({
        doc,
        client,
    }: {
        doc: Record<string, unknown>
        client: SanityClient
    }): Promise<SanityClientServiceResponse<SanityDocument<Record<string, any>>>> {
        const document: SanityDocumentStub = {
            _type: 'email_id',
            ...doc,
        }
        try {
            const res = await client.create(document)
            
            return res
        } catch (error) {
            return { clientError: error }
        }
    }
}
