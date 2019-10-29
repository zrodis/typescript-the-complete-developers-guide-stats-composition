import CsvFileReader from './CsvFileReader'
import MatchReader from './MatchReader'
import { Summary } from './Summary'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { ConsoleReport, HtmlReport } from './reporters/ConsoleReport'
import { MatchData } from './MatchData'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
const matches = matchReader.matches
const manSummary = new Summary<MatchData>(new WinsAnalysis('Man United'), new ConsoleReport())
const brightonSummary = new Summary<MatchData>(new WinsAnalysis('Brighton'), new HtmlReport())

manSummary.summarize(matches)
brightonSummary.summarize(matches)
