import { OutputTarget } from '../Summary'
import fs from 'fs'

export class ConsoleReport implements OutputTarget {
    print(report: string) {
        console.log(report)
    }
}

export class HtmlReport implements OutputTarget {
    print(report: string) {
        const innerHtml = `<div>
            <h1>Analysis Output</h1>
            <div>${report}</div>
        </div>
        `
        fs.writeFileSync('./build/report.html', innerHtml)
        console.log('html report created')
    }
}
