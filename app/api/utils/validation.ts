const email_validation_keyset =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]))|((([a-zA-Z\-0-9]+\.){1,2})[a-zA-Z]{2,}))$/
const password_validatoin_keyset =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

export const Validation = {
    // check empty , undefined or null string
    isEmpty: function (value = '') {
        try {
            if (value?.trim() == '') {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log('error to check empty string >>>>> ', e)
        }
    },

    // Check Email is valide or not
    isValidEmail: function (value: string | null) {
        const CHECK_EMAIL = email_validation_keyset
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (CHECK_EMAIL?.test(value?.trim()) == 0) {
            return false
        }
        return true
    },
    // Check URL is valide or not
    isValidHttpURL: function (value: string | null) {
        let url
        if (!value) {
            return false
        }
        try {
            url = new URL(value)
        } catch (_) {
            return false
        }
        return url.protocol === 'http:' || url.protocol === 'https:'
    },
}
export const validate = (
    /** Document to be validated */
    document: Record<string, FormDataEntryValue | Date | null>,
    /** Excluded fields from validation */
    excluded_fields: Array<string> | undefined = [],
): [boolean, Array<string>] => {
    const errors: string[] = []
    const validateField = (key: string, value: FormDataEntryValue | Date | null) => {
        if (![''].includes(key)) {
            switch (key) {
                case 'company_name':
                    if (value === '') {
                        errors.push(key)
                    }
                    return
                case 'name':
                    if (value === '') {
                        errors.push(key)
                    }
                    return
                case 'email_address':
                    if (
                        Validation.isEmpty(String(value)) ||
                        !Validation.isValidEmail(String(value))
                    ) {
                        errors.push(key)
                    }
                    return
                case 'phone_number':
                    if (value === '') {
                        errors.push(key)
                    }
                    return
                case 'service_name':
                    if (value === '') {
                        errors.push(key)
                    }
                    return
                case 'url':
                    if (!Validation.isValidHttpURL(String(value))) {
                        errors.push(key)
                    }
                    return
                default:
                    if (Validation.isEmpty(String(value))) {
                        errors.push(key)
                        return
                    }
            }
        }
    }
    Object.entries(document)
        .filter(([key, _]) => !excluded_fields.includes(key))
        .forEach(([key, value]) => validateField(key, value))
    return [errors.length === 0, errors]
}