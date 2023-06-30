import dayjs from 'dayjs'
export const getDateString = (date: string | Date | null, format?: string) => {
    return dayjs(date)?.format(format ?? 'MMMM DD, YYYY')
}
