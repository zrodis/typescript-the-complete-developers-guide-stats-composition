import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'
import { Analyzer } from '../Summary'

export class WinsAnalysis implements Analyzer<MatchData> {
    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let wins = 0

        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === MatchResult.home) {
                wins++
            } else if (match[2] === this.teamName && match[5] === MatchResult.away) {
                wins++
            }
        }

        return `${this.teamName} won ${wins} game${wins == 1 ? '' : 's'}`
    }
}
