import MatchReader from './MatchReader'
import { MatchResult } from './MatchResult'
import CsvFileReader from './CsvFileReader'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
const matches = matchReader.matches

const teamName = 'Man United'
let manUnitedWins = 0

for (let match of matches) {
    if (match[1] === teamName && match[5] === MatchResult.home) {
        manUnitedWins++
    } else if (match[2] === teamName && match[5] === MatchResult.away) {
        manUnitedWins++
    }
}

console.log('wins', manUnitedWins)
