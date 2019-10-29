export interface Analyzer<RowData> {
    run(matches: RowData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary<RowData> {
    constructor(public analyzer: Analyzer<RowData>, public outputTarget: OutputTarget) {}

    summarize(data: RowData[]) {
        const words = this.analyzer.run(data)
        this.outputTarget.print(words)
    }
}
