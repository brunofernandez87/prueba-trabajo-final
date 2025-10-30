import ReportAttributes from './Interface/reportAttributes'

class Report implements ReportAttributes {
  public id_report!: number
  public readonly date_generated!: string
  public generated_by_user!: number
  constructor(reporteData: Report) {
    this.id_report = reporteData.id_report
    this.date_generated = '23/10/25'
    this.generated_by_user = reporteData.generated_by_user
  }
}

export default Report
