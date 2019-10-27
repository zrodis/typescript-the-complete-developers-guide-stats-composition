import fs from 'fs'

export default class CsvFileReader {
    data: string[][] = []
    constructor(public filename: string) {}

    read(): void {
        const data = fs.readFileSync(this.filename, { encoding: 'utf-8' })

        const rowData = data.split('\n').map((row) => row.split(','))

        this.data = rowData
    }
}
